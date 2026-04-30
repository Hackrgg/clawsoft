"use client";

import { SiteHeader } from "@/components/site-header";

const demos = [
  {
    id: "food-delivery",
    label: "Food Delivery App",
    tag: "Live Demo",
    url: null, // will be set once Flutter Web is deployed
    comingSoon: true,
  },
];

export default function DemosPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--color-bg)] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12">
            <span className="brutal-border brutal-shadow bg-[var(--color-accent)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-black">
              Live Demos
            </span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.02em] text-[var(--color-text)] sm:text-5xl">
              See the apps<br />
              <span className="text-[var(--color-accent)]">in action.</span>
            </h1>
            <p className="mt-4 max-w-xl font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Real interactive demos — tap, navigate, and explore like a real user.
              No installs. No screenshots. Just the actual app.
            </p>
          </div>

          {/* Demo grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className="brutal-border brutal-shadow bg-white flex flex-col overflow-hidden"
              >
                {/* Phone mockup placeholder */}
                <div className="relative bg-[#0f0f0f] flex items-center justify-center" style={{ height: "320px" }}>
                  {demo.comingSoon ? (
                    <div className="text-center space-y-2">
                      <p className="text-3xl">📱</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#555]">Deploying soon</p>
                    </div>
                  ) : (
                    <iframe
                      src={demo.url!}
                      className="w-full h-full border-0"
                      title={demo.label}
                      sandbox="allow-scripts allow-same-origin"
                    />
                  )}
                </div>

                {/* Card footer */}
                <div className="border-t-2 border-[rgba(44,35,28,0.85)] p-4 flex items-center justify-between">
                  <div>
                    <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">{demo.label}</p>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">{demo.tag}</span>
                  </div>
                  {!demo.comingSoon && (
                    <a
                      href={demo.url!}
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-border brutal-shadow bg-[var(--color-accent)] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                    >
                      Open ↗
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Placeholder cards */}
            {["E-commerce App", "Fitness App", "Dashboard App"].map((name) => (
              <div
                key={name}
                className="brutal-border bg-[rgba(255,250,241,0.5)] flex flex-col overflow-hidden opacity-50"
              >
                <div className="flex items-center justify-center bg-[#0f0f0f]" style={{ height: "320px" }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#333]">Coming Soon</p>
                </div>
                <div className="border-t-2 border-[rgba(44,35,28,0.85)] p-4">
                  <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">{name}</p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">In Progress</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
