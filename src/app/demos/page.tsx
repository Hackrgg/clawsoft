"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getDemos } from "@/data/demos";

function getPreviewUrl(demo: ReturnType<typeof getDemos>[number]) {
  if (demo.preview.type === "link") return demo.preview.url;
  return demo.preview.embedUrl ?? null;
}

function Card({
  title,
  tag,
  children,
  action,
}: {
  title: string;
  tag: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="brutal-border brutal-shadow bg-white flex flex-col overflow-hidden">
      <div className="relative bg-[#0f0f0f] flex items-center justify-center" style={{ height: "320px" }}>
        {children}
      </div>
      <div className="border-t-2 border-[rgba(44,35,28,0.85)] p-4 flex items-center justify-between">
        <div>
          <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">{title}</p>
          <span className="mt-1 block text-[13px] leading-snug text-[var(--color-muted)]">{tag}</span>
        </div>
        {action}
      </div>
    </div>
  );
}

function MobilePreview({
  title,
  logo,
  subtitle,
}: {
  title: string;
  logo?: string;
  subtitle: string;
}) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="relative w-[220px] h-[280px] rounded-[34px] bg-[#0b0b0b] brutal-border brutal-shadow overflow-hidden">
        <div className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 30% 20%, rgba(233,122,178,0.22), transparent 45%), radial-gradient(circle at 80% 70%, rgba(103,186,168,0.18), transparent 45%)" }} />
        <div className="relative h-full flex flex-col items-center justify-center px-5 text-center">
          {logo ? (
            <div className="brutal-border brutal-shadow bg-white/95 w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image src={logo} alt="" width={64} height={64} className="w-full h-full object-cover" />
            </div>
          ) : null}
          <p className="mt-4 font-black uppercase tracking-[-0.01em] text-white text-sm">{title}</p>
          <p className="mt-2 text-[12px] leading-snug text-[rgba(255,255,255,0.65)]">{subtitle}</p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.5)]">
            Open in a new tab
          </p>
        </div>
      </div>
    </div>
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
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <span className="brutal-border brutal-shadow bg-[var(--color-accent)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-black">
              Live Demos
            </span>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.02em] text-[var(--color-text)] sm:text-5xl">
              Mobile + Web
              <br />
              <span className="text-[var(--color-accent)]">live demos.</span>
            </h1>
            <p className="mt-4 max-w-3xl font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              A single page with both: mobile APK previews (via Appetize) + web demos (live links). Click around,
              explore flows, and see what a build feels like.
            </p>
          </div>

          <section className="mb-10">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">Mobile demos</p>
                <p className="mt-1 text-[14px] text-[var(--color-muted)]">
                  Open the demo in a new tab for the full mobile preview.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mobileDemos.map((demo) => {
                const previewUrl = getPreviewUrl(demo);
                const comingSoon = !previewUrl;

                return (
                  <Card
                    key={demo.id}
                    title={demo.title}
                    tag={demo.subtitle}
                    action={
                      comingSoon ? (
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          Preview uploading
                        </span>
                      ) : (
                        <a
                          href={previewUrl!}
                          target="_blank"
                          rel="noreferrer"
                          className="brutal-border brutal-shadow bg-[var(--color-accent)] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                        >
                          Open ↗
                        </a>
                      )
                    }
                  >
                    {comingSoon ? (
                      <div className="text-center space-y-2 px-7">
                        <p className="font-black uppercase tracking-[-0.01em] text-white text-sm">Live preview coming</p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.55)]">
                          This slot turns interactive once the mobile build is uploaded.
                        </p>
                      </div>
                    ) : (
                      <MobilePreview title={demo.title} subtitle={demo.subtitle} logo={demo.logo} />
                    )}
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="mb-12">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">Web demos</p>
                <p className="mt-1 text-[14px] text-[var(--color-muted)]">
                  Live previews in a new tab. Fast to explore, built to convert.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {webDemos.map((demo) => {
                const url = getPreviewUrl(demo);
                return (
                  <Card
                    key={demo.id}
                    title={demo.title}
                    tag={demo.subtitle}
                    action={
                      url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="brutal-border brutal-shadow bg-[var(--color-accent)] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                        >
                          Preview ↗
                        </a>
                      ) : (
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          Missing link
                        </span>
                      )
                    }
                  >
                    <div className="w-full h-full p-5 flex flex-col justify-end">
                      <div className="brutal-border bg-[rgba(255,250,241,0.9)] p-4">
                        <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">
                          {demo.title}
                        </p>
                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          Open the live preview in a new tab
                        </p>
                        <p className="mt-3 text-[13px] text-[var(--color-muted)]">Dashboards, admin panels, and full flows.</p>
                      </div>
                    </div>
                  </Card>
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
