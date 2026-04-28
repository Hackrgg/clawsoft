import { WA_URL } from "@/lib/config";
export function SaasSeoPost() {
  return (
    <div className="space-y-12">

      <div className="shell p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Why this matters</p>
        <p className="text-lg leading-8 text-[var(--color-text)]">
          Ads stop the moment you stop paying. SEO compounds. A SaaS that ranks for the right keywords gets sign-ups while the team sleeps — no ad budget, no constant campaign management. The problem is most SaaS products do SEO wrong, or skip it entirely while burning money on paid acquisition.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">SaaS SEO Is Different From Regular SEO</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Most SEO advice is written for blogs and e-commerce. SaaS is different. Your buyers aren't searching for your product name — they don't know it exists yet. They're searching for their problem, a tool comparison, or an alternative to the software they're already paying for and hate.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          SaaS SEO means showing up at every stage of that journey: when someone searches for the problem, when they search for solutions, and when they're comparing options before buying.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Stage 1 — Rank for the Problem</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Before someone knows your product exists, they're Googling their problem. "How to manage client invoices," "why is my team missing deadlines," "best way to track employee hours." These are problem-aware searches — the person has pain but no solution yet.
        </p>
        <div className="brutal-border bg-[rgba(255,250,241,0.82)] p-6 space-y-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">What to do</p>
          <p className="text-sm leading-7 text-[var(--color-text)]">Write content that addresses those problems directly — guides, how-tos, explainers. Don't pitch your product in these posts. Just solve the problem well. A reader who finds your content helpful is already warmer than anyone who saw your ad.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Stage 2 — Rank for the Category</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          "Best invoice software for freelancers." "Project management tool for agencies." "Time tracking app for remote teams." These are category searches — the person knows what type of product they want and is deciding which one to buy.
        </p>
        <div className="brutal-border bg-[rgba(255,250,241,0.82)] p-6 space-y-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">What to do</p>
          <p className="text-sm leading-7 text-[var(--color-text)]">Create landing pages that target these exact phrases. Not blog posts — dedicated pages with clear positioning, feature lists, and a sign-up CTA. The copy should match what they searched for, word for word where possible.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Stage 3 — Rank for Alternatives</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          "Alternatives to [competitor]." "[Competitor] vs [your product]." These searches have extremely high buying intent. Someone typing "[BigCompetitor] alternative" is unhappy with their current tool and actively looking for a replacement. They're one good landing page away from signing up.
        </p>
        <div className="brutal-border bg-[rgba(255,250,241,0.82)] p-6 space-y-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">What to do</p>
          <p className="text-sm leading-7 text-[var(--color-text)]">Build comparison pages: "[Competitor] vs [Your Product]" and "[Competitor] alternatives." Be honest — list what the competitor does better and where you win. Buyers trust candid comparisons more than one-sided pitches.</p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">The Pages Every SaaS Site Needs</h2>
        <div className="space-y-3">
          {[
            ["Homepage", "Clear value proposition in one sentence. Who it's for, what it does, what they get. Not a tagline — a specific claim."],
            ["Feature pages", "One page per major feature, targeting the keyword that describes the problem it solves. These rank and convert."],
            ["Use case pages", "\"[Product] for [audience]\" pages. Project management for marketing teams. Invoicing for architects. The more specific, the better it ranks and converts."],
            ["Comparison pages", "\"[Your product] vs [competitor]\" for every major alternative. High intent, often ignored by early-stage SaaS."],
            ["Blog / resource centre", "Problem-aware content that attracts the top of the funnel. Internally link to feature and use case pages."],
            ["Pricing page", "Clear, public pricing. SaaS that hides pricing loses SEO traffic to comparison sites that publish it for them."],
          ].map(([title, desc]) => (
            <div key={title} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 space-y-1">
              <p className="font-bold text-[var(--color-text)]">{title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Technical SEO for SaaS</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Content strategy gets the attention, but technical SEO is what lets Google actually index and rank your pages. Most SaaS products built on React or Next.js need to specifically check a few things:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Server-side rendering", "Client-rendered SPAs can be invisible to Google. Use SSR or static generation for all SEO-critical pages."],
            ["Page speed", "Google uses Core Web Vitals as a ranking signal. A slow SaaS app hurts both UX and rankings."],
            ["Canonical URLs", "SaaS apps often generate duplicate URLs through filters and params. Canonical tags tell Google which version to index."],
            ["Structured data", "Schema markup for software, pricing, and reviews gives Google richer data and can improve click-through rates in search results."],
          ].map(([title, desc]) => (
            <div key={title} className="shell p-5 space-y-2">
              <p className="font-bold text-[var(--color-text)]">{title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">When to Start</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          SEO takes time to compound — typically 3–6 months before you see meaningful organic traffic. That means the best time to start is before you need it. If you wait until your ad costs are unsustainable, you're 6 months behind.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          The good news: the structure and content you create early keeps working indefinitely. A comparison page you write today can drive sign-ups two years from now without any additional spend.
        </p>
      </div>

      <div className="shell brutal-shadow p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">SaaS SEO checklist</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Homepage with a specific, keyword-rich value prop",
            "One landing page per core feature",
            "Use case pages by audience or industry",
            "Comparison page for every major competitor",
            "Blog targeting problem-aware searches",
            "Public pricing page",
            "SSR or static pages for all SEO content",
            "Core Web Vitals passing on mobile",
          ].map((item, i) => (
            <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] px-4 py-3 flex gap-3 items-center">
              <span className="font-mono text-[10px] text-[var(--color-muted)] shrink-0">0{i + 1}</span>
              <span className="text-sm text-[var(--color-text)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">Building a SaaS?</p>
        <p className="text-lg font-bold leading-8 text-black">
          We build SaaS products with SEO baked in from the start — the right page structure, server-side rendering, and content architecture so Google can find you.
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          className="brutal-border inline-block bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:opacity-80"
        >
          Let&apos;s Talk →
        </a>
      </div>

    </div>
  );
}
