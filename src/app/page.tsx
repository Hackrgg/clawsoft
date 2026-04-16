"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  SiClaude,
  SiFlutter,
  SiGithub,
  SiGraphql,
  SiNextdotjs,
  SiPostgresql,
  SiRailway,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { SiteHeader } from "@/components/site-header";
import { getProjects } from "@/data/projects";

const projects = getProjects();

const marqueeItems = [
  "NEXT.JS",
  "TYPESCRIPT",
  "REACT",
  "FLUTTER",
  "SUPABASE",
  "GRAPHQL",
  "VERCEL",
  "RAILWAY",
  "POSTGRES",
  "CLAUDE CODE",
  "GITHUB",
  "CYBERSECURITY",
];

const stackGroups = [
  {
    title: "Web Stack",
    tone: "bg-[var(--color-accent)] text-black",
    items: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "React", icon: SiReact },
      { label: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Data + Deploy",
    tone: "bg-[var(--color-accent-strong)] text-black",
    items: [
      { label: "Supabase", icon: SiSupabase },
      { label: "GraphQL", icon: SiGraphql },
      { label: "Vercel", icon: SiVercel },
      { label: "Railway", icon: SiRailway },
    ],
  },
  {
    title: "Mobile + Workflow",
    tone: "bg-[var(--color-teal)] text-black",
    items: [
      { label: "Flutter", icon: SiFlutter },
      { label: "GitHub", icon: SiGithub },
      { label: "Postgres", icon: SiPostgresql },
      { label: "Claude Code", icon: SiClaude },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <SiteHeader />

      <section className="dot-grid relative overflow-hidden border-b-2 border-[rgba(44,35,28,0.85)] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, 40, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[8%] top-16 h-44 w-44 bg-[var(--color-accent)] opacity-85"
          />
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, -16, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 left-[8%] h-28 w-28 bg-[var(--color-teal)] opacity-80"
          />
          <motion.div
            animate={{ rotate: [45, 90, 45], y: [0, 18, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[22%] top-[38%] h-16 w-16 bg-[var(--color-accent-strong)] opacity-80"
          />
          <div className="pointer-events-none absolute right-4 top-6 text-[7rem] font-black leading-none text-[rgba(44,35,28,0.06)] sm:text-[11rem] lg:text-[16rem]">
            WEB
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-8">
            <div className="inline-flex brutal-border bg-[var(--color-accent)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-black brutal-shadow">
              Available for projects
            </div>

            <div className="space-y-5">
              <h1 className="text-balance text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-[var(--color-text)] sm:text-6xl lg:text-[6rem]">
                Web.
                <br />
                Flutter.
                <br />
                Cyber.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                I build websites, web apps, and browser extensions that actually ship. Three products live in 2026 — a security training platform, a Chrome phone extension, and a client e-commerce rebuild. If you need something built properly, I'm available now.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/work"
                className="brutal-border brutal-shadow bg-white px-7 py-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                View Work
              </Link>
              <a
                href="mailto:onyxgymjo@gmail.com"
                className="brutal-border brutal-shadow bg-[var(--color-accent-strong)] px-7 py-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="shell brutal-shadow p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Shipped in 2026
                </span>
                <span className="brutal-border bg-[rgba(255,250,241,0.84)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text)]">
                  All real
                </span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    name: "hackr.gg",
                    status: "live",
                    statusColor: "bg-[var(--color-teal)]",
                    desc: "Security training platform. 60+ Docker-based hacking labs, in-browser Kali toolkit, Stripe billing, XP leaderboard. Built and shipped solo.",
                  },
                  {
                    name: "nimra.app",
                    status: "in dev",
                    statusColor: "bg-[var(--color-accent-strong)]",
                    desc: "Chrome extension. A full working phone line — real calls and SMS — inside your browser. WebRTC + Supabase Realtime, persistent background listener.",
                  },
                  {
                    name: "thebedstore.shop",
                    status: "live",
                    statusColor: "bg-[var(--color-teal)]",
                    desc: "E-commerce rebuild for a Jordan-based retailer. Cleaner product hierarchy, better mobile flow, less template feel.",
                  },
                ].map((project) => (
                  <div key={project.name} className="brutal-border bg-[rgba(255,250,241,0.84)] p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-black uppercase tracking-[0.06em] text-[var(--color-text)]">
                        {project.name}
                      </span>
                      <span className={`brutal-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-black ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-xs leading-5 text-[var(--color-muted)]">{project.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b-2 border-[rgba(44,35,28,0.85)] bg-[var(--color-text)] py-4">
        <motion.div
          className="whitespace-nowrap text-sm font-black uppercase tracking-[0.26em] sm:text-base"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="mx-4">
              <span
                className={
                  index % 3 === 0
                    ? "text-[var(--color-accent)]"
                    : index % 3 === 1
                      ? "text-[var(--color-accent-strong)]"
                      : "text-[var(--color-teal)]"
                }
              >
                {item}
              </span>
              <span className="ml-4 text-white/40">-</span>
            </span>
          ))}
        </motion.div>
      </section>

      <section
        id="stack"
        className="cross-hatch border-b-2 border-[rgba(44,35,28,0.85)] px-5 py-14 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <div className="h-1 w-14 bg-[var(--color-accent)]" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Stack / tools
                </span>
              </div>
              <h2 className="text-3xl font-black uppercase tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
                Tech stack.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
              Frontend-focused delivery across web and mobile. Modern stack, AI-assisted workflow, fast from concept to live URL.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {stackGroups.map((group) => (
              <div key={group.title} className="shell brutal-shadow p-6">
                <div className={`inline-flex brutal-border px-4 py-2 text-xs font-black uppercase tracking-[0.2em] ${group.tone}`}>
                  {group.title}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="brutal-border flex min-h-24 flex-col justify-between bg-[rgba(255,250,241,0.82)] p-4 transition hover:-translate-y-1 hover:shadow-[2px_2px_0_rgba(44,35,28,0.4)]"
                      >
                        <Icon className="text-2xl text-[var(--color-text)]" />
                        <span className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-text)]">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <div className="h-1 w-14 bg-[var(--color-accent-strong)]" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Selected work
                </span>
              </div>
              <h2 className="text-3xl font-black uppercase tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
                Work.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
              Things I actually built and shipped. Each one has a full breakdown — what it does, what the hard parts were, and what I delivered.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="shell brutal-shadow grid gap-8 p-6 lg:grid-cols-[0.12fr_1fr_0.8fr] lg:p-8"
              >
                <div className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="space-y-5">
                  <div className="flex flex-wrap gap-3">
                    <span className="brutal-border bg-black px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white">
                      {project.status}
                    </span>
                    <span className="brutal-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-black" style={{ backgroundColor: index % 3 === 0 ? "var(--color-accent)" : index % 3 === 1 ? "var(--color-teal)" : "var(--color-accent-strong)" }}>
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[var(--color-text)] sm:text-3xl">{project.name}</h3>
                    <p className="pt-3 text-base leading-7 text-[var(--color-muted)]">
                      {project.headline}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
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
        </div>
      </section>
      <section className="dot-grid border-t-2 border-[rgba(44,35,28,0.85)] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex brutal-border bg-[var(--color-accent-strong)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-black brutal-shadow">
                Available now
              </div>
              <h2 className="text-balance text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
                Have something
                <br />
                to build?
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-[var(--color-muted)]">
                Direct communication. No going quiet mid-project. I ship what I say I'll ship, on the timeline we agree on. If you have a website, web app, or product in mind — just email me.
              </p>
            </div>

            <div className="shell brutal-shadow p-8">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Reach out directly
              </p>
              <p className="mb-6 text-xl font-black text-[var(--color-text)] sm:text-2xl">
                onyxgymjo@gmail.com
              </p>
              <a
                href="mailto:onyxgymjo@gmail.com"
                className="brutal-border brutal-shadow inline-block bg-[var(--color-accent)] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Email Me →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
