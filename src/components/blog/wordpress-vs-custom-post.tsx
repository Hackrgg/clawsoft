import { WA_URL } from "@/lib/config";
export function WordpressVsCustomPost() {
  return (
    <div className="space-y-12">

      <div className="shell p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Bottom line upfront</p>
        <p className="text-lg leading-8 text-[var(--color-text)]">
          WordPress is the right choice when you need to publish content frequently and manage it yourself. A custom build is the right choice when you need something WordPress can't do cleanly — or when your site is part of how your product works, not just a marketing page.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">What WordPress Actually Is</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          WordPress is a content management system. It was built for publishing and it's very good at that. It powers around 43% of websites on the internet, which means there are thousands of plugins, themes, and developers who know it well.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          What it's not is a framework for building web applications. When businesses try to stretch it into something it wasn't designed for — complex user flows, real-time features, custom data structures — it starts to fight back.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-4">
          <div className="brutal-border bg-[var(--color-teal)] px-4 py-2 inline-block">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black font-bold">WordPress — good for</p>
          </div>
          <div className="space-y-2">
            {[
              "Blogs and content-heavy sites",
              "Sites you need to update without a developer",
              "Small business brochure sites",
              "Projects with tight budgets and standard needs",
              "News, magazine, or portfolio formats",
            ].map((item) => (
              <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] px-4 py-3 flex gap-3 items-start">
                <span className="text-[var(--color-teal)] font-black mt-0.5">✓</span>
                <span className="text-sm text-[var(--color-text)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="brutal-border bg-[var(--color-accent)] px-4 py-2 inline-block">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black font-bold">Custom build — good for</p>
          </div>
          <div className="space-y-2">
            {[
              "Web apps with user accounts or dashboards",
              "Platforms with complex logic or real-time features",
              "E-commerce with non-standard flows",
              "Products where speed and performance matter",
              "Anything where security is critical",
            ].map((item) => (
              <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] px-4 py-3 flex gap-3 items-start">
                <span className="text-[var(--color-accent)] font-black mt-0.5">✓</span>
                <span className="text-sm text-[var(--color-text)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">The Real Problems With WordPress</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          WordPress's flexibility is also its weakness. To add features, you install plugins — and plugins conflict with each other, slow your site down, and introduce security vulnerabilities. The more plugins you add, the more fragile the site becomes.
        </p>
        <div className="space-y-3">
          {[
            ["Security", "WordPress is the most-attacked CMS on the internet. Outdated plugins and themes are the most common entry point for hacks."],
            ["Performance", "Plugin-heavy WordPress sites are slow by default. Fixing performance requires additional work and often more plugins to fix the plugins."],
            ["Vendor lock-in", "Page builders like Elementor or Divi embed their shortcodes throughout your content. Switching becomes painful."],
            ["Scaling", "WordPress handles traffic fine until it doesn't. High-traffic sites need significant infrastructure work."],
          ].map(([title, desc]) => (
            <div key={title} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 space-y-1">
              <p className="font-bold text-[var(--color-text)]">{title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">The Real Advantages of Custom</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          A custom build only contains what you need. No plugin bloat, no generic templates, no fighting the CMS to do something it wasn't designed for. You own the code outright and it does exactly what your business requires.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          The tradeoff is cost and time upfront. Custom takes longer to build and costs more to start. But for businesses where the website is core to how they operate — not just a brochure — it pays off quickly.
        </p>
      </div>

      <div className="shell brutal-shadow p-8 space-y-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">How to decide</p>
        <div className="space-y-4">
          {[
            { q: "Do you need to publish content regularly?", a: "WordPress or a headless CMS with a custom frontend." },
            { q: "Does your site have user accounts, payments, or complex flows?", a: "Custom build." },
            { q: "Is your budget under $3,000?", a: "WordPress with a well-chosen theme is the realistic option." },
            { q: "Is performance or security business-critical?", a: "Custom build, no question." },
            { q: "Do you need to edit the site yourself without a developer?", a: "Either — both can have a CMS. Ask your developer to set one up." },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-[var(--color-line)] pb-4 last:border-0 last:pb-0">
              <p className="font-bold text-[var(--color-text)] mb-1">{q}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">→ {a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">Not sure which you need?</p>
        <p className="text-lg font-bold leading-8 text-black">
          Tell us what you&apos;re building. We&apos;ll give you a straight recommendation — and a quote if you want one.
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
