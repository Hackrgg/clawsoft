import OpenAI from "openai";

const DAILY_LIMIT = 30;
const usage = { count: 0, date: new Date().toDateString() };

const REFERENCE_RATES = `
Internal pricing reference (USD, fixed-price — use as guidance, blend/sum when a project spans multiple categories, apply a ~10-15% bundle discount when 2+ categories are combined):
- Landing page (1 page, no backend): $150-350, delivery 3-8 days
- Marketing/business website (multi-page, CMS/blog optional): $350-1200, delivery 7-25 days
- E-commerce store (cart, checkout, product catalog): $550-2200, delivery 12-42 days
- Mobile app (iOS/Android, React Native or native): $1200-4500, delivery 18-65 days
- Web app / SaaS platform (auth, dashboards, multi-user, billing): $1700-6500, delivery 25-90 days
- Browser extension: $300-1200, delivery 7-20 days
Add-on style features (auth, payments, admin panel, push notifications, multi-language, AI/chatbot, premium animations) typically add $100-400 each depending on depth — fold these into the range rather than listing separately.
`;

const SYSTEM_PROMPT = `You are the instant-quote engine for Clawsoft, a web/mobile/software studio. A potential client just described their project in their own words (and may have attached reference images/screenshots/mockups). Your job is to read it like a project manager and respond with a fair, fixed-price estimate.

${REFERENCE_RATES}

Rules:
- This is always a ONE-TIME, FIXED-PRICE engagement — full source code is handed over at the end. This is NOT a hire, NOT a retainer, NOT an hourly arrangement. Never imply ongoing employment.
- Base your price and delivery estimate on the reference ranges above. If the project clearly spans multiple categories (e.g. "a website and a mobile app"), sum the relevant ranges and apply a bundle discount.
- If the description is vague, still give your best reasonable ballpark — don't refuse. Note in the summary that more detail (pages, features, examples) would tighten the number.
- Look at any attached images as context (mockups, reference sites, sketches) to gauge scope/complexity.
- The "pitch" should be a short, specific, persuasive 2-3 sentence reason why Clawsoft is the right call for THIS project — reference something concrete from their description, not generic fluff. Mention the fixed price / fast turnaround / full source-code ownership angle naturally.
- Respond with STRICT JSON only, no markdown, no code fences, matching exactly this shape:
{
  "summary": "1-2 sentence reflection of what you understood they're building",
  "price_low": number,
  "price_high": number,
  "delivery_low_days": number,
  "delivery_high_days": number,
  "pitch": "2-3 sentence sales pitch specific to their project"
}`;

type ContentPart =
  | { type: "text"; text: string }
  | { type: "image_url"; image_url: { url: string } };

export async function POST(req: Request) {
  const today = new Date().toDateString();
  if (usage.date !== today) {
    usage.count = 0;
    usage.date = today;
  }

  if (usage.count >= DAILY_LIMIT) {
    return Response.json(
      { error: `Daily limit of ${DAILY_LIMIT} quotes reached. Try again tomorrow or reach out on WhatsApp directly.` },
      { status: 429 }
    );
  }

  const { description, projectType, addons, images } = await req.json();
  if (!description?.trim()) {
    return Response.json({ error: "Tell us a bit about your project first." }, { status: 400 });
  }

  usage.count++;

  const structuredBits: string[] = [];
  if (typeof projectType === "string" && projectType.trim()) {
    structuredBits.push(`Project type selected: ${projectType.trim()}.`);
  }
  if (Array.isArray(addons) && addons.length) {
    structuredBits.push(`Add-ons selected: ${addons.filter((a) => typeof a === "string").join(", ")}.`);
  }
  const fullText = [...structuredBits, description].join("\n");

  const content: ContentPart[] = [{ type: "text", text: fullText }];
  if (Array.isArray(images)) {
    for (const url of images.slice(0, 4)) {
      if (typeof url === "string" && url.startsWith("data:image/")) {
        content.push({ type: "image_url", image_url: { url } });
      }
    }
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  let response;
  try {
    response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 600,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: content as never },
      ],
    });
  } catch {
    return Response.json({ error: "Quote engine is unavailable right now — message us directly on WhatsApp instead." }, { status: 502 });
  }

  const raw = response.choices[0].message.content?.trim() ?? "{}";
  let parsed: {
    summary?: string;
    price_low?: number;
    price_high?: number;
    delivery_low_days?: number;
    delivery_high_days?: number;
    pitch?: string;
  };
  try {
    parsed = JSON.parse(raw);
  } catch {
    return Response.json({ error: "Couldn't generate a quote — try rephrasing your project description." }, { status: 502 });
  }

  if (!parsed.price_low || !parsed.price_high) {
    return Response.json({ error: "Couldn't generate a quote — try rephrasing your project description." }, { status: 502 });
  }

  return Response.json({
    summary: parsed.summary ?? "",
    priceLow: parsed.price_low,
    priceHigh: parsed.price_high,
    deliveryLowDays: parsed.delivery_low_days ?? 7,
    deliveryHighDays: parsed.delivery_high_days ?? 14,
    pitch: parsed.pitch ?? "",
  });
}
