import { WA_URL } from "@/lib/config";
export function MoreCustomersPost() {
  return (
    <div className="space-y-12">

      <div className="shell p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">The core idea</p>
        <p className="text-lg leading-8 text-[var(--color-text)]">
          Most business websites have a traffic problem and a conversion problem — and they focus entirely on the traffic problem. More ads, more SEO, more social. But if the site itself is losing visitors before they act, more traffic just means more people leaving.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Why Traffic Isn't the Problem</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Doubling your traffic doubles your customers — only if your conversion rate stays the same. But if your site is converting at 1%, you can triple your ad spend and still get thin results. Fix the conversion rate first and every visitor you already have becomes more valuable.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Conversion rate optimisation sounds technical. It isn't. It's mostly common sense applied to how people actually behave when they land on a page.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">1. Make the First 5 Seconds Count</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          When someone lands on your site, they decide in seconds whether to stay. If your headline doesn't immediately answer "what is this and why do I care," they leave. Most business homepages lead with the company name and a vague tagline. That's not enough.
        </p>
        <div className="brutal-border p-6 space-y-3 bg-[rgba(255,250,241,0.82)]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Fix it</p>
          <p className="text-sm leading-7 text-[var(--color-text)]">Your headline should answer: what you do, who it's for, and what they get. "We help Jordan-based restaurants fill empty tables through a simple online booking system" is better than "Your partner in digital growth."</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">2. One Clear Next Step Per Page</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Most websites have too many calls to action. Newsletter, social follows, contact form, live chat, book a call, read the blog. When everything is asking for attention, nothing gets it. Every page should have one primary action you want the visitor to take.
        </p>
        <div className="brutal-border p-6 space-y-3 bg-[rgba(255,250,241,0.82)]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Fix it</p>
          <p className="text-sm leading-7 text-[var(--color-text)]">Pick one action per page. Make it visible without scrolling. Every other link or button should be secondary — smaller, less prominent, out of the critical path.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">3. Show Proof Before Asking for Anything</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          People don't buy from strangers. Social proof — reviews, case studies, client logos, specific results — does the work of building trust before you ask for contact details or money. If your site goes straight from "here's what we do" to "contact us," you're skipping the step that makes people say yes.
        </p>
        <div className="brutal-border p-6 space-y-3 bg-[rgba(255,250,241,0.82)]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Fix it</p>
          <p className="text-sm leading-7 text-[var(--color-text)]">Add at least three real testimonials or one detailed case study. Specific numbers ("reduced checkout drop-off by 40%") are more convincing than vague praise ("great to work with").</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">4. Fix the Mobile Experience</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          More than half of web traffic is mobile. If your site was designed on a desktop and "adapted" for mobile as an afterthought, it shows. Tiny text, buttons too close together, forms that are painful to fill in on a phone — all of these kill conversions before they start.
        </p>
        <div className="brutal-border p-6 space-y-3 bg-[rgba(255,250,241,0.82)]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Fix it</p>
          <p className="text-sm leading-7 text-[var(--color-text)]">Open your site on your phone and go through the entire journey a customer would take. Note every moment of friction. That list is your priority queue.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">5. Speed Is a Conversion Factor</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Every additional second your site takes to load costs you visitors. Google data shows that pages loading in 1–3 seconds have significantly better conversion rates than those taking 5+ seconds. A slow site is losing you customers before they even see your offer.
        </p>
        <div className="brutal-border p-6 space-y-3 bg-[rgba(255,250,241,0.82)]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Fix it</p>
          <p className="text-sm leading-7 text-[var(--color-text)]">Run your site through PageSpeed Insights. If your mobile score is below 70, site speed is actively hurting you. Common culprits: unoptimised images, too many scripts, and cheap shared hosting.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">6. Make Contact Frictionless</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Long contact forms lose people. Asking for name, email, phone, company, budget, message, how did you hear about us, and CAPTCHA is too much. The more fields you add, the fewer people complete it. Ask for the minimum you need to start a conversation.
        </p>
        <div className="brutal-border p-6 space-y-3 bg-[rgba(255,250,241,0.82)]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Fix it</p>
          <p className="text-sm leading-7 text-[var(--color-text)]">Name, message, and one way to reach them. That's it. Alternatively, a direct WhatsApp link converts better than any form for businesses with a mobile-first audience.</p>
        </div>
      </div>

      <div className="shell brutal-shadow p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Quick audit checklist</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Clear headline above the fold",
            "One primary CTA per page",
            "At least 3 testimonials or 1 case study",
            "Mobile test done and passing",
            "PageSpeed score above 70 on mobile",
            "Contact form under 4 fields",
          ].map((item, i) => (
            <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] px-4 py-3 flex gap-3 items-center">
              <span className="font-mono text-[10px] text-[var(--color-muted)]">0{i + 1}</span>
              <span className="text-sm text-[var(--color-text)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">Want us to audit yours?</p>
        <p className="text-lg font-bold leading-8 text-black">
          We&apos;ll look at your site and tell you exactly what&apos;s costing you customers — no charge, no obligation.
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          className="brutal-border inline-block bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:opacity-80"
        >
          Get a Free Audit →
        </a>
      </div>

    </div>
  );
}
