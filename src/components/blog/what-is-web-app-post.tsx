import { WA_URL } from "@/lib/config";
export function WhatIsWebAppPost() {
  return (
    <div className="space-y-12">

      <div className="shell p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Simple definition</p>
        <p className="text-lg leading-8 text-[var(--color-text)]">
          A website shows information. A web app does something. If users can log in, save data, make purchases, book appointments, or interact with content that changes based on who they are — that's a web app. The line between the two has blurred, but the distinction still matters when you're planning and budgeting a project.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Website vs Web App: The Real Difference</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          A website is mostly static — the same content is shown to every visitor. A web app is dynamic — what you see depends on who you are, what you've done, and what data is attached to your account. The technical architecture is different, the development time is different, and the ongoing maintenance is different.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Website", items: ["Shows the same content to everyone", "No login required", "Information-focused", "Relatively fast to build", "Examples: portfolio, blog, brochure site"] },
            { label: "Web App", items: ["Content changes per user", "User accounts and auth", "Action-focused (book, buy, track, manage)", "More complex to build", "Examples: booking system, SaaS, marketplace"] },
          ].map((col) => (
            <div key={col.label} className="brutal-border p-6 space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">{col.label}</p>
              <div className="space-y-2">
                {col.items.map((item) => (
                  <p key={item} className="text-sm leading-6 text-[var(--color-text)] flex gap-2">
                    <span className="text-[var(--color-muted)]">—</span>{item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Examples Your Business Might Recognise</h2>
        <div className="space-y-3">
          {[
            ["Online booking system", "Customers pick a time, enter their details, and get a confirmation. Their booking is stored and you can manage it from a dashboard. That's a web app."],
            ["Customer portal", "Clients log in to view their invoices, download files, track project status, or message you. Not a website — a web app."],
            ["E-commerce with accounts", "A shop where users save addresses, view order history, and get personalised recommendations. More web app than website."],
            ["SaaS product", "Any subscription software — project management, invoicing, scheduling — delivered through a browser. Web app by definition."],
            ["Internal tools", "Staff dashboards, inventory management, CRM systems, reporting tools. All web apps, just private-facing."],
          ].map(([title, desc]) => (
            <div key={title} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 space-y-1">
              <p className="font-bold text-[var(--color-text)]">{title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Does Your Business Need One?</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          You probably need a web app if any of the following are true:
        </p>
        <div className="space-y-2">
          {[
            "You're managing bookings, orders, or client relationships manually — in spreadsheets, WhatsApp, or email",
            "You want customers to be able to do something online that currently requires calling or messaging you",
            "You have staff who need to access or update information from different locations",
            "You're building a product that other people will use and pay for",
            "You have a process that could be automated if the right software existed",
          ].map((item) => (
            <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] px-5 py-4 flex gap-3 items-start">
              <span className="text-[var(--color-accent)] font-black mt-0.5 shrink-0">→</span>
              <span className="text-sm leading-6 text-[var(--color-text)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">What Does It Cost to Build One?</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Web apps are more expensive than websites because they do more. A basic web app — user accounts, a simple data model, one or two core features — starts around $5,000–$15,000. A full platform with complex logic, payments, real-time features, and admin tooling can run $30,000–$100,000+.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          The cost depends almost entirely on the scope: how many features, how complex the data model is, whether there's a mobile version, and how much of the business logic needs to be custom-built vs handled by existing services.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">How to Start</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          The best starting point is a clear description of the problem you're trying to solve — not the features you want, but the manual process or gap that's causing pain. A good developer will translate that into a realistic scope and cost.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Start small. Build the core loop first — the one thing that makes the whole thing worth having — and add features later based on how people actually use it.
        </p>
      </div>

      <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">Have an idea for a web app?</p>
        <p className="text-lg font-bold leading-8 text-black">
          Tell us what you&apos;re trying to build or automate. We&apos;ll scope it and give you a realistic picture of what it takes.
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
