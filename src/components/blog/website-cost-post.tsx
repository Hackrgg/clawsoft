import { WA_URL } from "@/lib/config";
export function WebsiteCostPost() {
  return (
    <div className="space-y-12">

      <div className="shell p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">The short answer</p>
        <p className="text-lg leading-8 text-[var(--color-text)]">
          A basic website: <strong>$500–$3,000.</strong> A business website with CMS: <strong>$3,000–$10,000.</strong> A custom web app or platform: <strong>$10,000–$50,000+.</strong> The range is wide because "website" covers a lot of ground. Here's what actually drives the price.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">What You're Actually Paying For</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          When someone quotes you a website, the price reflects a few core things: how complex the design is, whether it needs a CMS to manage content, how many pages there are, and whether there's any custom functionality — bookings, payments, user accounts, integrations.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          A five-page brochure site and a platform where users can sign up, buy something, and track their order are both "websites." They are not the same project.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { tier: "Basic", range: "$500–$3k", desc: "Landing page or brochure site. Static, no CMS, no custom functionality. Good for getting online fast." },
          { tier: "Business", range: "$3k–$10k", desc: "Multi-page site with CMS so you can edit content yourself. Custom design, contact forms, mobile-first." },
          { tier: "Platform", range: "$10k–$50k+", desc: "Web app, e-commerce, bookings, user accounts, payments, API integrations. Built to do something specific." },
        ].map((t) => (
          <div key={t.tier} className="brutal-border p-6 space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">{t.tier}</p>
            <p className="text-2xl font-black text-[var(--color-text)]">{t.range}</p>
            <p className="text-sm leading-6 text-[var(--color-muted)]">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">What Makes Prices Go Up</h2>
        <div className="space-y-3">
          {[
            ["Custom design from scratch", "A unique design takes more time than adapting a template. Worth it if your brand matters."],
            ["CMS integration", "Connecting a content management system so non-technical staff can update pages, blog posts, or products."],
            ["E-commerce", "Product pages, cart, checkout, payment processing, order management. Each piece adds scope."],
            ["User accounts and auth", "Any time users need to sign in, you need authentication, session management, and security considerations."],
            ["Third-party integrations", "Connecting to CRMs, booking systems, payment gateways, analytics platforms — each adds time."],
            ["Ongoing maintenance", "Hosting, updates, bug fixes, and content changes are usually a separate monthly cost."],
          ].map(([title, desc]) => (
            <div key={title} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 flex gap-4">
              <span className="mt-1 text-[var(--color-accent)] font-black">+</span>
              <div>
                <p className="font-bold text-[var(--color-text)] mb-1">{title}</p>
                <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Agency vs Freelancer vs Studio</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          A large agency will charge more — you're paying for account managers, meetings, and overhead. A solo freelancer is cheaper but you're betting on one person's availability and skill set. A small studio sits in the middle: dedicated people, no bloated process, accountable output.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          The best value is usually a focused studio that specialises in exactly what you need and has built similar things before. You don't want to be someone's learning project.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">What to Watch Out For</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Very low quotes", "If someone quotes $300 for a business website, they're either using a generic template with minimal customisation, or they'll disappear halfway through."],
            ["No fixed scope", "A quote with no clear list of deliverables will grow. Get specifics: number of pages, features included, revision rounds, what's not included."],
            ["Hourly with no estimate", "Hourly billing without a project estimate is open-ended risk. Ask for a fixed price or a capped estimate."],
            ["Ongoing fees buried in the contract", "Some builders lock you into expensive monthly fees for hosting or the CMS. Ask what happens if you want to move or cancel."],
          ].map(([title, desc]) => (
            <div key={title} className="shell p-5 space-y-2">
              <p className="font-bold text-[var(--color-text)]">⚠ {title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">How to Get an Accurate Quote</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Before you contact anyone, write down: what the site needs to do, who it's for, how many pages roughly, whether you need to update it yourself, and if there's any functionality beyond showing information. The more specific you are, the more accurate the quote.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          A developer who asks good questions before quoting is a better sign than one who sends a price in five minutes flat.
        </p>
      </div>

      <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">Get a straight quote</p>
        <p className="text-lg font-bold leading-8 text-black">
          Tell us what you need. We'll tell you what it costs — no vague ranges, no hidden fees.
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
