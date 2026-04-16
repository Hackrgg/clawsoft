import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { getProject, getProjects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} Case Study`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <SiteHeader />

      <section className="dot-grid border-b-2 border-[rgba(44,35,28,0.85)] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="brutal-border brutal-shadow bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Back
            </Link>
            <span className="brutal-border bg-[var(--color-accent)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-black">
              {project.status}
            </span>
            <span className="brutal-border bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-black">
              {project.url}
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Case study / {project.category}
              </p>
              <h1 className="text-4xl font-black uppercase tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
                {project.name}
              </h1>
              <p className="max-w-3xl pt-4 text-base leading-7 text-[var(--color-muted)]">
                {project.headline}
              </p>
            </div>

            <div className="shell brutal-shadow p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Summary
              </p>
              <p className="text-base leading-8 text-[var(--color-text)]">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="brutal-border brutal-shadow bg-[var(--color-teal)] px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                  >
                    Visit Live
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div className="shell p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Stack
              </p>
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
            </div>

            <div className="shell p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Role
              </p>
              <div className="space-y-3">
                {project.responsibilities.map((item) => (
                  <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] p-4 text-sm leading-7 text-[var(--color-text)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="shell brutal-shadow p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Overview
              </p>
              <p className="text-base leading-8 text-[var(--color-text)]">{project.intro}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {project.metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="brutal-border p-5"
                  style={{
                    background:
                      index === 0
                        ? "var(--color-accent)"
                        : index === 1
                          ? "var(--color-accent-strong)"
                          : "var(--color-teal)",
                  }}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-black">
                    {metric.label}
                  </p>
                  <p className="pt-3 text-lg font-black uppercase text-black">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                ["Problem", project.challenge],
                ["Approach", project.solution],
                ["Outcome", project.outcome],
              ].map(([title, copy]) => (
                <div key={title} className="shell p-6">
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    {title}
                  </p>
                  <p className="text-sm leading-7 text-[var(--color-text)]">{copy}</p>
                </div>
              ))}
            </div>

            <div className="shell p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Highlights
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {project.highlights.map((item) => (
                  <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] p-4 text-sm leading-7 text-[var(--color-text)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
