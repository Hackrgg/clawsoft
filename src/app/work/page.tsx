import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { getProjects } from "@/data/projects";

const projects = getProjects();

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <SiteHeader />

      <section className="dot-grid border-b-2 border-[rgba(44,35,28,0.85)] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="brutal-border brutal-shadow bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Back
            </Link>
            <span className="brutal-border bg-[var(--color-accent)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-black brutal-shadow">
              All work
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h1 className="text-4xl font-black uppercase tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
              Builds and case studies.
            </h1>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
              Full breakdown on each — stack, decisions, outcome. Live links where deployed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="shell brutal-shadow grid gap-8 p-6 lg:grid-cols-[0.12fr_0.95fr_0.93fr] lg:p-8"
            >
              <div className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-3">
                  <span className="brutal-border bg-black px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white">
                    {project.status}
                  </span>
                  <span className="brutal-border bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-black">
                    {project.url}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-black text-[var(--color-text)] sm:text-3xl">{project.name}</h2>
                  <p className="pt-3 text-base leading-7 text-[var(--color-muted)]">
                    {project.headline}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="brutal-border bg-[rgba(255,250,241,0.82)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/work/${project.slug}`}
                    className="brutal-border brutal-shadow bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                  >
                    Full Breakdown
                  </Link>
                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-border brutal-shadow bg-[var(--color-accent)] px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                    >
                      Visit Live
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
