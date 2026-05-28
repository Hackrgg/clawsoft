"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getDemos } from "@/data/demos";

function DemoCard({
  title,
  subtitle,
  screenshot,
  url,
  kind,
}: {
  title: string;
  subtitle: string;
  screenshot?: string;
  url?: string | null;
  kind: "mobile" | "web";
}) {
  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? { href: url, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`brutal-border bg-white flex flex-col overflow-hidden group ${url ? "brutal-shadow transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer" : ""}`}
    >
      {/* Preview area */}
      <div className="relative bg-[#0f0f0f] overflow-hidden" style={{ height: "260px" }}>
        {screenshot ? (
          kind === "mobile" ? (
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="relative h-full rounded-[28px] overflow-hidden brutal-border" style={{ aspectRatio: "9/19" }}>
                <Image
                  src={screenshot}
                  alt={title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1a1a1a] border-b border-[rgba(255,255,255,0.08)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src={screenshot}
                  alt={title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          )
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="font-black uppercase tracking-[-0.01em] text-white text-base">{title}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.4)]">
              Screenshot coming soon
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t-2 border-[rgba(44,35,28,0.85)] p-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">{title}</p>
          <p className="mt-0.5 text-[12px] text-[var(--color-muted)]">{subtitle}</p>
        </div>
        {url ? (
          <span className="brutal-border brutal-shadow shrink-0 bg-[var(--color-accent)] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black transition group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none">
            {kind === "web" ? "Preview ↗" : "Open ↗"}
          </span>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Coming soon
          </span>
        )}
      </div>
    </Wrapper>
  );
}

export default function DemosPage() {
  const allDemos = getDemos();
  const mobileDemos = allDemos.filter((d) => d.kind === "mobile");
  const webDemos = allDemos.filter((d) => d.kind === "web");

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--color-bg)] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="brutal-border brutal-shadow bg-[var(--color-accent)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-black">
              Live Demos
            </span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.02em] text-[var(--color-text)] sm:text-5xl">
              See the apps
              <br />
              <span className="text-[var(--color-accent)]">in action.</span>
            </h1>
            <p className="mt-4 max-w-xl font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Real builds. Click through, explore flows, see what a finished product looks like.
            </p>
          </div>

          <section className="mb-12">
            <p className="mb-5 font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm border-b-2 border-[rgba(44,35,28,0.85)] pb-3">
              Mobile Apps
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mobileDemos.map((demo) => {
                const url = demo.preview.type === "appetize"
                  ? demo.preview.embedUrl
                  : demo.preview.url;
                return (
                  <DemoCard
                    key={demo.id}
                    title={demo.title}
                    subtitle={demo.subtitle}
                    screenshot={demo.screenshot}
                    url={url}
                    kind="mobile"
                  />
                );
              })}
            </div>
          </section>

          <section className="mb-12">
            <p className="mb-5 font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm border-b-2 border-[rgba(44,35,28,0.85)] pb-3">
              Web & SaaS
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {webDemos.map((demo) => {
                const url = demo.preview.url;
                return (
                  <DemoCard
                    key={demo.id}
                    title={demo.title}
                    subtitle={demo.subtitle}
                    screenshot={demo.screenshot}
                    url={url}
                    kind="web"
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
