"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { startTransition, useDeferredValue, useState } from "react";
import type { Project } from "@/data/projects";

type ProjectSpotlightProps = {
  projects: Project[];
};

function statusBadge(status: Project["status"]) {
  if (status === "live") return "bg-[var(--color-teal)] text-black";
  if (status === "in-progress") return "bg-[var(--color-accent-strong)] text-black";
  return "bg-[var(--color-muted)] text-white";
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
              className={`shell brutal-border w-full p-5 text-left transition ${
                isActive
                  ? "bg-[var(--color-bg-soft)]"
                  : "hover:bg-[rgba(255,250,241,0.6)]"
              }`}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`brutal-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] ${statusBadge(project.status)}`}
                >
                  {project.status}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)] sm:text-2xl">
                  {project.name}
                </h3>
                <p className="max-w-lg text-sm leading-6 text-[var(--color-muted)]">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.stack.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="brutal-border bg-[rgba(255,250,241,0.82)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-text)]"
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
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="shell brutal-border brutal-shadow relative overflow-hidden p-6 sm:p-8"
      >
        <div className="relative z-10">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="eyebrow">{activeProject.category}</span>
            <span className="brutal-border bg-[rgba(255,250,241,0.82)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {activeProject.url}
            </span>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              <p className="max-w-2xl text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-[var(--color-text)] sm:text-3xl">
                {activeProject.headline}
              </p>
              <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                {activeProject.intro}
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {activeProject.metrics.map((metric, i) => (
                  <div
                    key={metric.label}
                    className="brutal-border p-4"
                    style={{
                      background:
                        i === 0
                          ? "var(--color-accent)"
                          : i === 1
                            ? "var(--color-accent-strong)"
                            : "var(--color-teal)",
                    }}
                  >
                    <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-black/70">
                      {metric.label}
                    </div>
                    <div className="text-base font-black uppercase text-black">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href={`/work/${activeProject.slug}`}
                  className="brutal-border brutal-shadow bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Open Case Study
                </Link>
                {activeProject.links.live ? (
                  <a
                    href={activeProject.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="brutal-border brutal-shadow bg-[var(--color-accent)] px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                  >
                    Visit Live
                  </a>
                ) : null}
              </div>
            </div>

            <div className="brutal-border bg-[rgba(255,250,241,0.82)] p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Preview
                </span>
                <span
                  className="brutal-border h-3 w-3"
                  style={{ backgroundColor: activeProject.palette.accent }}
                />
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
                  <div
                    className="min-h-44 brutal-border"
                    style={{ background: activeProject.palette.surface }}
                  />
                  <div className="space-y-3">
                    <div className="min-h-20 brutal-border bg-[rgba(44,35,28,0.05)]" />
                    <div className="min-h-20 brutal-border bg-[rgba(44,35,28,0.05)]" />
                  </div>
                </div>
                <div className="min-h-28 brutal-border bg-[rgba(44,35,28,0.05)]" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="min-h-16 brutal-border bg-[rgba(44,35,28,0.05)]" />
                  <div className="min-h-16 brutal-border bg-[rgba(44,35,28,0.05)]" />
                  <div className="min-h-16 brutal-border bg-[rgba(44,35,28,0.05)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
