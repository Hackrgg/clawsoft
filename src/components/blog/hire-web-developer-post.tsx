import { WA_URL } from "@/lib/config";

export function HireWebDeveloperPost() {
  return (
    <div className="space-y-12">

      <div className="shell p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">What this covers</p>
        <p className="text-lg leading-8 text-[var(--color-text)]">
          Hiring a web developer is straightforward when you know what to look for — and expensive when you don't. Most bad hires come down to the same handful of mistakes. Here's how to avoid them and find someone who actually delivers.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Define What You Actually Need First</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Before you look at a single portfolio, write down what you need the project to do. Not the features — the purpose. "I need users to be able to book appointments online and receive confirmation emails" is useful. "I need a website" is not.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          The clearer your brief, the better the candidates you'll attract, the more accurate your quotes will be, and the less room there is for scope creep later.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">What to Look for in Their Portfolio</h2>
        <div className="space-y-3">
          {[
            ["Relevant work", "Has this person built something similar to what you need? A developer who's shipped an e-commerce store is a better fit for your e-commerce project than one who's only built brochure sites."],
            ["Live projects", "Can you visit the work they're showing? If everything is mockups and screenshots with no live URL, ask why. Real work holds up under real conditions."],
            ["Attention to detail", "Load a few of their sites on mobile. Check how fast they load. Look at the small things — spacing, typography, button states. These signal whether they care about quality."],
            ["Variety or depth", "Either is fine — a specialist who does one type of thing extremely well, or a generalist with proven range. Know which one your project needs."],
          ].map(([title, desc]) => (
            <div key={title} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 space-y-1">
              <p className="font-bold text-[var(--color-text)]">{title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Questions Worth Asking Before You Hire</h2>
        <div className="space-y-3">
          {[
            "What similar projects have you built, and can I see them live?",
            "How do you handle changes to scope mid-project?",
            "What does your process look like from brief to launch?",
            "Who else will be working on this, if anyone?",
            "What happens after launch — do you offer support?",
            "What do you need from me to stay on schedule?",
          ].map((q) => (
            <div key={q} className="brutal-border bg-[rgba(255,250,241,0.82)] px-5 py-4 flex gap-3 items-start">
              <span className="text-[var(--color-accent)] font-black shrink-0">?</span>
              <span className="text-sm leading-6 text-[var(--color-text)]">{q}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Red Flags to Walk Away From</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["No questions back", "A developer who doesn't ask about your goals, audience, or technical requirements before quoting is guessing. That guess will cost you."],
            ["Vague timelines", "'A few weeks' with no milestone breakdown is a warning sign. Ask for a project plan with specific dates."],
            ["Can't explain their decisions", "Ask why they chose a certain technology or approach. If they can't explain it simply, they may not fully understand it either."],
            ["No contract", "A professional developer works with a clear written agreement. Scope, timeline, payment terms, and what happens if something changes."],
            ["Pressure to decide fast", "Good developers are busy but not desperate. Anyone pushing hard for an immediate decision is working against your interests."],
            ["No post-launch plan", "What happens when something breaks after launch? If there's no answer, you're on your own."],
          ].map(([title, desc]) => (
            <div key={title} className="shell p-5 space-y-2">
              <p className="font-bold text-[var(--color-text)]">⚠ {title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Where to Find Good Developers</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Referrals are still the most reliable source — ask other business owners who built their site. Upwork and Toptal work well for verified track records. LinkedIn is useful for B2B and agency work. Google searches for local web studios can surface people with a real portfolio and an address.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Avoid anyone who cold-messages you with a templated pitch. Good developers have more work than they can take — they're not mass-emailing strangers.
        </p>
      </div>

      <div className="shell brutal-shadow p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Hiring checklist</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Written brief ready before outreach",
            "Portfolio reviewed with live URLs",
            "Similar project in their history",
            "Questions asked and answered clearly",
            "Timeline with milestones agreed",
            "Contract signed before work starts",
          ].map((item, i) => (
            <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] px-4 py-3 flex gap-3 items-center">
              <span className="font-mono text-[10px] text-[var(--color-muted)] shrink-0">0{i + 1}</span>
              <span className="text-sm text-[var(--color-text)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">Looking for a developer?</p>
        <p className="text-lg font-bold leading-8 text-black">
          Tell us what you need to build. We&apos;ll tell you honestly whether we&apos;re the right fit — and quote you straight if we are.
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer"
          className="brutal-border inline-block bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:opacity-80">
          Let&apos;s Talk →
        </a>
      </div>

    </div>
  );
}
