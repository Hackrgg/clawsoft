import { WA_URL } from "@/lib/config";

export function HowLongDoesAWebsiteTakePost() {
  return (
    <div className="space-y-12">

      <div className="shell p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Quick answer</p>
        <p className="text-lg leading-8 text-[var(--color-text)]">
          A simple brochure site: 2–4 weeks. A business site with CMS: 4–8 weeks. A custom web app or platform: 3–6 months. The real variable isn't the developer — it's how ready you are when the project starts.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Why Timelines Vary So Much</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Two projects that look identical on the surface can have wildly different timelines depending on what's underneath. A "five-page website" for a dentist is completely different from a "five-page website" for a SaaS company that needs an interactive demo, booking integration, and a headless CMS backend.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          The three things that actually determine how long a build takes: the complexity of what you're building, how much content and decisions you can supply upfront, and how many rounds of revision you go through.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Timeline by Project Type</h2>
        <div className="space-y-3">
          {[
            ["Brochure / landing page", "1–3 weeks", "A few pages, no backend, mostly static. Fast to build. Slow to start if the client hasn't decided what they want."],
            ["Small business website", "3–6 weeks", "Home, About, Services, Contact, maybe a blog. Some CMS integration. Design decisions take longer than the code."],
            ["E-commerce store", "6–10 weeks", "Product catalogue, checkout flow, payment integration, mobile-first layout. The integration work takes time."],
            ["Web app or platform", "2–6 months", "Authentication, database, custom logic, user roles, billing, dashboards. Every feature adds scope."],
            ["Enterprise or complex product", "6–18 months", "Multi-stakeholder requirements, compliance, integrations, team coordination. More handoffs = more time."],
          ].map(([type, time, desc]) => (
            <div key={type} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 grid gap-2 sm:grid-cols-[1fr_auto]">
              <div className="space-y-1">
                <p className="font-bold text-[var(--color-text)]">{type}</p>
                <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
              </div>
              <div className="shrink-0">
                <span className="brutal-border bg-[var(--color-accent)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-black whitespace-nowrap">
                  {time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">What Slows Projects Down</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Most delays don't come from the developer's side. These are the most common causes of a project running late:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Waiting on content", "Text, images, logos — if you don't have them ready, work stops. Developers can't build pages around content that doesn't exist yet."],
            ["Changing the brief mid-build", "Every new requirement pushes the timeline. Scope changes mid-project are expensive and common."],
            ["Slow feedback cycles", "A one-week wait for approval adds one week to the timeline. Reviews and sign-offs need to be fast."],
            ["No clear decision maker", "When five people have to agree before anything moves, nothing moves quickly."],
            ["Underspecified requirements", "Ambiguity at the start means rework later. The more detailed the brief, the faster the build."],
            ["Integration surprises", "Third-party APIs, legacy systems, and payment providers regularly surprise developers mid-build."],
          ].map(([title, desc]) => (
            <div key={title} className="shell p-5 space-y-2">
              <p className="font-bold text-[var(--color-text)]">{title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">How to Get to Launch Faster</h2>
        <div className="space-y-3">
          {[
            { n: "01", tip: "Have content ready before you start", body: "The single biggest accelerator. If you can hand over all text, images, and copy on day one, the project moves in a straight line." },
            { n: "02", tip: "Prioritise ruthlessly", body: "Identify what the site must do to launch, and push everything else to phase two. A leaner scope ships faster." },
            { n: "03", tip: "One person owns decisions", body: "Nominate a single point of contact on your side who can approve and respond quickly. Review by committee adds weeks." },
            { n: "04", tip: "Agree a milestone plan upfront", body: "A project with clear checkpoints moves predictably. If a milestone slips, you know early enough to adjust." },
            { n: "05", tip: "Don't change scope mid-build", body: "New features during development push everything back. Write ideas down and save them for after launch." },
          ].map(({ n, tip, body }) => (
            <div key={n} className="shell p-5 grid gap-4 sm:grid-cols-[60px_1fr]">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{n}</span>
              <div>
                <p className="mb-1 text-sm font-black uppercase tracking-[0.1em] text-[var(--color-text)]">{tip}</p>
                <p className="text-sm leading-7 text-[var(--color-muted)]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shell brutal-shadow p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Timeline checklist</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "All copy and content ready before kickoff",
            "Clear scope — what's in, what's out",
            "One decision maker on your side",
            "Milestone plan agreed with developer",
            "Feedback turnaround under 48 hours",
            "Phase two list ready for post-launch",
          ].map((item, i) => (
            <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] px-4 py-3 flex gap-3 items-center">
              <span className="font-mono text-[10px] text-[var(--color-muted)] shrink-0">0{i + 1}</span>
              <span className="text-sm text-[var(--color-text)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">Have a deadline in mind?</p>
        <p className="text-lg font-bold leading-8 text-black">
          Tell us what you need to build and when. We&apos;ll give you a straight timeline estimate and let you know what we need from you to hit it.
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer"
          className="brutal-border inline-block bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:opacity-80">
          Talk to us →
        </a>
      </div>

    </div>
  );
}
