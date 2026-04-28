import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Simple in-memory daily limit — resets on server restart or redeploy
// Good enough to prevent runaway costs during testing
const DAILY_LIMIT = 20;
const usage = { count: 0, date: new Date().toDateString() };

export async function POST(req: Request) {
  // Reset counter if it's a new day
  const today = new Date().toDateString();
  if (usage.date !== today) {
    usage.count = 0;
    usage.date = today;
  }

  if (usage.count >= DAILY_LIMIT) {
    return Response.json(
      { error: `Daily limit of ${DAILY_LIMIT} generations reached. Resets tomorrow.` },
      { status: 429 }
    );
  }

  const { prompt, currentCode } = await req.json();
  if (!prompt?.trim()) {
    return Response.json({ error: "Prompt is required." }, { status: 400 });
  }

  usage.count++;
  const remaining = DAILY_LIMIT - usage.count;

  const systemPrompt = `You are a frontend code generator. Generate complete, beautiful, single-file HTML with embedded CSS in <style> tags and JS in <script> tags.

Rules:
- Return ONLY raw HTML. No markdown. No code fences. No explanation. No comments.
- Always start with <!DOCTYPE html>
- Make it visually impressive — modern design, smooth animations, good typography
- Use Google Fonts via CDN link if needed
- Make it fully functional and interactive
- Default to dark background (#0f0f0f), white text, vibrant colored accents
- If the user says "update", "change", "add", or "fix" — modify the existing code provided`;

  const userMessage = currentCode
    ? `Existing code:\n${currentCode}\n\nRequest: ${prompt}`
    : prompt;

  const response = await client.chat.completions.create({
    model: "gpt-4.1",
    max_tokens: 3000,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
  });

  const code = response.choices[0].message.content?.trim() ?? "";
  const tokensUsed = response.usage?.total_tokens ?? 0;

  return Response.json({ code, remaining, tokensUsed });
}
