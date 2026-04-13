"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { startTransition, useDeferredValue, useState } from "react";
import type { Project } from "@/data/projects";

type ProjectSpotlightProps = {
  projects: Project[];
};

function statusTone(status: Project["status"]) {
  if (status === "live") {
    return "bg-emerald-300";
  }

  if (status === "in-progress") {
    return "bg-amber-300";
  }

  return "bg-zinc-400";
}

export function ProjectSpotlight({ projects }: ProjectSpotlightProps) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug ?? "");
  const deferredSlug = useDeferredValue(activeSlug);
  const activeProject =
    projects.find((project) => project.slug === deferredSlug) ?? projects[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="space-y-3">
        {projects.map((project, index) => {
          const isActive = project.slug === activeProject.slug;

          return (
            <button
              key={project.slug}
              type="button"
              onMouseEnter={() => startTransition(() => setActiveSlug(project.slug))}
              onFocus={() => startTransition(() => setActiveSlug(project.slug))}
              onClick={() => startTransition(() => setActiveSlug(project.slug))}
              className={`shell w-full rounded-[1.75rem] p-5 text-left transition ${
                isActive
                  ? "border-[var(--color-line-strong)] bg-white/8"
                  : "hover:bg-white/4"
              }`}
            >
              <div className="mb-8 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="flex items-center gap-2">
                  <span className={`status-dot ${statusTone(project.status)}`} />
                  {project.status}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.name}</h3>
                <p className="max-w-lg text-sm leading-6 text-[var(--color-muted)]">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent-strong)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeProject.slug}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="shell relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${activeProject.palette.glow}`}
        />
        <div className="relative z-10">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="eyebrow">{activeProject.category}</span>
            <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {activeProject.url}
            </span>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <p className="max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {activeProject.headline}
              </p>
              <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                {activeProject.intro}
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {activeProject.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4"
                  >
                    <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {metric.label}
                    </div>
                    <div className="text-base font-semibold text-white">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/work/${activeProject.slug}`}
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[0.98]"
                >
                  Open case study
                </Link>
                {activeProject.links.live ? (
                  <a
                    href={activeProject.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/12 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/6"
                  >
                    Visit live
                  </a>
                ) : null}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-black/25 p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  preview
                </span>
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: activeProject.palette.accent }}
                />
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
                  <div
                    className="min-h-44 rounded-[1.3rem] border border-white/8"
                    style={{ background: activeProject.palette.surface }}
                  />
                  <div className="space-y-3">
                    <div className="min-h-20 rounded-[1.3rem] border border-white/8 bg-white/[0.03]" />
                    <div className="min-h-20 rounded-[1.3rem] border border-white/8 bg-white/[0.03]" />
                  </div>
                </div>
                <div className="min-h-28 rounded-[1.3rem] border border-white/8 bg-white/[0.03]" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="min-h-20 rounded-[1.3rem] border border-white/8 bg-white/[0.03]" />
                  <div className="min-h-20 rounded-[1.3rem] border border-white/8 bg-white/[0.03]" />
                  <div className="min-h-20 rounded-[1.3rem] border border-white/8 bg-white/[0.03]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
