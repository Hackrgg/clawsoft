import { WA_URL } from "@/lib/config";

export function FreelanceVsAgencyPost() {
  return (
    <div className="space-y-12">

      <div className="shell p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Short answer</p>
        <p className="text-lg leading-8 text-[var(--color-text)]">
          Freelancers are faster and cheaper for well-defined projects. Agencies are better when you need a team, a process, or ongoing management. The wrong choice mostly comes down to mismatched expectations — not actual skill.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">What You&apos;re Actually Choosing Between</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          The freelancer vs agency decision usually isn&apos;t about quality — it&apos;s about what kind of working relationship fits your project. A freelancer is typically one person (or a small team) you work with directly. An agency adds coordination, account management, and a defined process on top of the actual work.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Both can do excellent work. Both can do terrible work. The question is which structure fits what you need to build.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">When a Freelancer Makes More Sense</h2>
        <div className="space-y-3">
          {[
            ["Clear, well-scoped project", "If you know exactly what you need built, a freelancer can execute it without the overhead of a full agency process. Less coordination, faster delivery."],
            ["Direct communication", "You talk to the person doing the work. Feedback goes in, changes come out — no account manager in between."],
            ["Budget matters", "Freelancers don't carry the overhead of a full agency. For the same output, they're usually cheaper."],
            ["Speed", "A single focused developer can move faster than a team working in sprints with sign-off processes at every step."],
            ["Specialist skills", "Need someone who's done exactly this type of thing before? Freelancers often have deep specialisms that a generalist agency doesn't."],
          ].map(([title, desc]) => (
            <div key={title} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 space-y-1">
              <p className="font-bold text-[var(--color-text)]">{title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">When an Agency Makes More Sense</h2>
        <div className="space-y-3">
          {[
            ["You need multiple disciplines", "Design, development, copywriting, strategy — agencies bring teams. One freelancer can&apos;t cover everything well."],
            ["Ongoing relationship + management", "If you need a team you can hand projects to without detailed briefs each time, an agency retainer works better."],
            ["Complex or long-running projects", "Large platforms with changing requirements benefit from an agency&apos;s project management structure."],
            ["Accountability matters", "Agencies are businesses with reputations to protect. If something goes wrong, there&apos;s a process and an escalation path."],
          ].map(([title, desc]) => (
            <div key={title} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 space-y-1">
              <p className="font-bold text-[var(--color-text)]">{title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">The Real Risks of Each</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Freelancer: availability", "A solo developer juggling multiple clients can go quiet mid-project. Ask about their current workload and how they handle emergencies."],
            ["Freelancer: gaps in skill", "A developer who's great at backend may not be great at design, and vice versa. Understand what you're actually getting."],
            ["Agency: layer of abstraction", "Your brief goes through a PM, then a team. Things get lost or diluted. The person who pitched the work is rarely the person doing it."],
            ["Agency: overhead costs money", "You're paying for coordination, not just code. For a simple project, you're often overpaying for process you don't need."],
          ].map(([title, desc]) => (
            <div key={title} className="shell p-5 space-y-2">
              <p className="font-bold text-[var(--color-text)]">⚠ {title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Questions to Ask Before You Decide</h2>
        <div className="space-y-3">
          {[
            "Is my project well-scoped enough to hand to a single developer?",
            "Do I need design, copy, and development, or just development?",
            "How hands-on do I want to be in day-to-day communication?",
            "Do I have a long-term need, or is this a one-off project?",
            "What happens if something goes wrong — who do I call?",
          ].map((q) => (
            <div key={q} className="brutal-border bg-[rgba(255,250,241,0.82)] px-5 py-4 flex gap-3 items-start">
              <span className="text-[var(--color-accent-strong)] font-black shrink-0">→</span>
              <span className="text-sm leading-6 text-[var(--color-text)]">{q}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">Not sure which you need?</p>
        <p className="text-lg font-bold leading-8 text-black">
          Describe your project. We&apos;ll tell you honestly whether it&apos;s a fit — and if not, what kind of help would serve you better.
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer"
          className="brutal-border inline-block bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:opacity-80">
          Talk to us →
        </a>
      </div>

    </div>
  );
}
