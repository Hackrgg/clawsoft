"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  SiClaude,
  SiDocker,
  SiFlutter,
  SiGithub,
  SiGraphql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { BookingWidget } from "@/components/booking-widget";
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
  "DOCKER",
  "POSTGRES",
  "CLAUDE CODE",
  "GITHUB",
  "CYBERSECURITY",
];

const stackGroups = [
  {
    title: "Frontend",
    tone: "bg-[var(--color-accent)] text-black",
    items: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "React", icon: SiReact },
      { label: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend + Infra",
    tone: "bg-[var(--color-accent-strong)] text-black",
    items: [
      { label: "Supabase", icon: SiSupabase },
      { label: "GraphQL", icon: SiGraphql },
      { label: "Vercel", icon: SiVercel },
      { label: "Docker", icon: SiDocker },
    ],
  },
  {
    title: "Mobile + Tools",
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
            <div className="inline-flex items-center gap-2 brutal-border bg-[var(--color-accent)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-black brutal-shadow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" style={{ animationDuration: "2s" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
              </span>
              Available for projects
            </div>

            <div className="space-y-5">
              <h1 className="text-balance text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-[var(--color-text)] sm:text-6xl lg:text-[6rem]">
                Web.
                <br />
                Mobile.
                <br />
                Security.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                Websites, web apps, browser extensions — built and shipped. Available for new work now.
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
                href="https://wa.me/962797205018"
                className="brutal-border brutal-shadow bg-[var(--color-accent-strong)] px-7 py-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="shell brutal-shadow p-6">
              <div className="mb-5">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Recent projects
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
                    desc: "E-commerce rebuild. Cleaned up the product layout, fixed mobile, cut the template feel.",
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
          <div className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
              Tech stack.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {stackGroups.map((group) => (
              <div key={group.title} className="shell brutal-shadow p-6">
                <div className={`inline-flex brutal-border mb-6 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] ${group.tone}`}>
                  {group.title}
                </div>
                <div className="grid grid-cols-2 gap-4">
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
              <h2 className="text-3xl font-black uppercase tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
                Projects.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
              All projects shown with permission. Live links available where applicable.
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
          <div className="mb-10">
            <div className="mb-4 inline-flex brutal-border bg-[var(--color-accent-strong)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-black brutal-shadow">
              Available now
            </div>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
              Book a call.
            </h2>
          </div>
          <BookingWidget />
        </div>
      </section>
    </main>
  );
}
