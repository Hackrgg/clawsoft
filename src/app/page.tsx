"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SiDocker,
  SiFlutter,
  SiGithub,
  SiGraphql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiFirebase,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { BookingWidget } from "@/components/booking-widget";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WA_URL } from "@/lib/config";

const marqueeItems = [
  "MOBILE APPS",
  "IOS & ANDROID",
  "WEB APPS",
  "MVP BUILDS",
  "SAAS PRODUCTS",
  "COPYWRITING",
  "LANDING PAGES",
  "E-COMMERCE",
  "BRANDING",
  "API & BACKEND",
  "FLUTTER",
  "NEXT.JS",
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
      { label: "Firebase", icon: SiFirebase },
    ],
  },
];


const projects = [
  {
    id: "hackrgg",
    title: "hackr.gg",
    tagline: "Cybersecurity training platform",
    desc: "Full web platform for cybersecurity learning. Users get access to simulated live labs — real attack/defense environments running in the browser. Includes auth, user dashboards, lab progress tracking, and a custom backend.",
    features: ["Simulated live hacking labs", "User auth & dashboards", "Progress tracking", "Custom backend & admin panel"],
    tags: ["Web App", "Platform", "SaaS"],
    url: "https://hackr.gg",
    accent: "var(--color-accent)",
    logo: "/logos/hackr-gg.png",
    images: ["/work/hackrgg.png", "/work/hackrgg-2.png", "/work/hackrgg-3.png", "/work/hackrgg-4.png"],
  },
  {
    id: "nimra",
    title: "Nimra",
    tagline: "Virtual phone & eSIM platform",
    desc: "Mobile app that lets users get virtual phone numbers and eSIMs — buy, manage, and use them directly from the app. Flutter build for iOS & Android with a clean onboarding and account management flow.",
    features: ["Virtual phone numbers", "eSIM purchasing & activation", "Multi-number management", "Flutter — iOS & Android"],
    tags: ["Mobile App", "Flutter", "In Progress"],
    url: null,
    accent: "var(--color-teal)",
    logo: "/logos/nimra.png",
    images: ["/work/nimra.png", "/work/nimra-2.png"],
  },
  {
    id: "onyx-gym",
    title: "Onyx Gym",
    tagline: "Gym & fitness website",
    desc: "Website for a premium gym brand. Members can browse class schedules, book sessions, and sign up for memberships online. Clean, conversion-focused design with a full booking system wired in.",
    features: ["Class schedule & booking", "Membership sign-up", "Mobile-first design", "Admin content management"],
    tags: ["Website", "Bookings"],
    url: "https://onyxgym.net",
    accent: "var(--color-accent-strong)",
    logo: "/logos/onyx-gym.png",
    images: ["/work/onyx-gym.png", "/work/onyx-gym-2.png", "/work/onyx-gym-3.png"],
  },
  {
    id: "ok-permanent",
    title: "OK Permanent",
    tagline: "Course platform & personal brand",
    desc: "Personal brand site combined with a full course-selling platform. Visitors can browse the creator's portfolio, enroll in courses, pay, and watch lessons directly on the site. Built with Stripe payments and a custom video player.",
    features: ["Course enrollment & payments", "In-site video lessons", "Personal portfolio", "Stripe & PayPal checkout"],
    tags: ["SaaS", "Courses", "Payments"],
    url: "https://ok-permanent.com",
    accent: "var(--color-accent)",
    logo: "/logos/ok-permanent.png",
    images: ["/work/ok-permanent.png", "/work/ok-permanent-2.png", "/work/ok-permanent-3.png"],
  },
  {
    id: "the-bed-store",
    title: "The Bed Store",
    tagline: "Furniture e-commerce store",
    desc: "Full e-commerce storefront for a furniture brand. Product listings, filtering, cart, and checkout — all custom built. Includes a backend CMS so the client can manage inventory, categories, and orders independently.",
    features: ["Product catalog & filtering", "Cart & checkout", "Backend CMS for inventory", "Order management"],
    tags: ["E-commerce", "Web", "CMS"],
    url: "https://thebedstore.shop",
    accent: "var(--color-teal)",
    logo: "/logos/the-bed-store.png",
    images: ["/work/the-bed-store.png", "/work/the-bed-store-2.png", "/work/the-bed-store-3.png", "/work/the-bed-store-4.png", "/work/the-bed-store-5.png", "/work/the-bed-store-6.png"],
  },
  {
    id: "zevra-creative",
    title: "Zevra Creative",
    tagline: "Creative agency website",
    desc: "Website for a creative agency — built to showcase their portfolio, communicate services, and convert visitors into leads. Clean branding, fast load times, and a contact flow that goes straight to the team.",
    features: ["Portfolio showcase", "Services pages", "Lead capture form", "Brand identity"],
    tags: ["Website", "Agency"],
    url: "https://zevracreative.com",
    accent: "var(--color-accent-strong)",
    logo: "/logos/zevra-creative.png",
    images: ["/work/zevra-creative.png", "/work/zevra-creative-2.png", "/work/zevra-creative-3.png", "/work/zevra-creative-4.png"],
  },
];

type Project = typeof projects[number];

function WorkSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  function open(project: Project) {
    setSelected(project);
    setImgIndex(0);
  }

  function close() {
    setSelected(null);
    setImgIndex(0);
  }

  const validImages = selected?.images.filter(Boolean) ?? [];

  return (
    <section id="work" className="px-5 py-14 sm:px-8 lg:px-10 border-b-2 border-[rgba(44,35,28,0.85)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-muted)] mb-3">Our work</p>
            <h2 className="text-3xl font-black uppercase tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
              Built & shipped.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
            Real projects. Real clients. Delivered and live.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => open(project)}
              className="brutal-border brutal-shadow bg-white flex flex-col overflow-hidden group text-left transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer"
            >
              <div className="relative bg-[#0f0f0f] overflow-hidden" style={{ height: "180px" }}>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition group-hover:scale-[1.02]"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-black uppercase tracking-[-0.01em] text-[rgba(255,255,255,0.12)] text-2xl select-none">{project.title}</p>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 shrink-0 brutal-border bg-white overflow-hidden flex items-center justify-center">
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="w-full h-full object-contain p-1"
                        onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = "none"; }}
                      />
                    </div>
                    <div>
                      <p className="font-black uppercase tracking-[-0.02em] text-[var(--color-text)] text-base leading-tight">{project.title}</p>
                      <p className="mt-0.5 text-[12px] text-[var(--color-muted)]">{project.tagline}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[13px] text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition mt-0.5">→</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="brutal-border px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.1em]" style={{ backgroundColor: project.accent, color: "#000" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              onClick={close}
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed inset-x-4 top-[50%] -translate-y-1/2 z-50 mx-auto max-w-xl brutal-border brutal-shadow bg-[var(--color-bg)] overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Carousel */}
              <div className="relative bg-[#0f0f0f] overflow-hidden" style={{ height: "320px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={validImages[imgIndex] ?? selected.images[0]}
                      alt={selected.title}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <p className="font-black uppercase text-[rgba(255,255,255,0.08)] text-3xl select-none">{selected.title}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Logo — top left inside image */}
                <div className="absolute top-4 left-4 w-14 h-14 brutal-border bg-white overflow-hidden flex items-center justify-center z-10 shadow-lg">
                  <Image
                    src={selected.logo}
                    alt={selected.title}
                    width={56}
                    height={56}
                    className="object-contain p-1.5"
                    onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = "none"; }}
                  />
                </div>

                {/* Carousel arrows */}
                {validImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); setImgIndex((i) => (i - 1 + validImages.length) % validImages.length); }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 brutal-border bg-white/90 w-8 h-8 flex items-center justify-center font-black text-sm hover:bg-[var(--color-accent)] transition z-10"
                    >←</button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setImgIndex((i) => (i + 1) % validImages.length); }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 brutal-border bg-white/90 w-8 h-8 flex items-center justify-center font-black text-sm hover:bg-[var(--color-accent)] transition z-10"
                    >→</button>
                  </>
                )}

                {/* Dots */}
                {validImages.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {validImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                        className={`w-2 h-2 rounded-full transition ${i === imgIndex ? "bg-[var(--color-accent)]" : "bg-white/40"}`}
                      />
                    ))}
                  </div>
                )}

                <button
                  onClick={close}
                  className="absolute top-3 right-3 brutal-border bg-white w-8 h-8 flex items-center justify-center font-black text-sm hover:bg-[var(--color-accent)] transition z-10"
                >✕</button>
              </div>

              {/* Content */}
              <div className="px-6 pt-5 pb-6 flex flex-col gap-4">
                <div>
                  <p className="font-black uppercase tracking-[-0.02em] text-[var(--color-text)] text-xl">{selected.title}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">{selected.tagline}</p>
                </div>
                <p className="text-sm leading-7 text-[var(--color-muted)]">{selected.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {selected.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] font-black text-sm mt-0.5">✓</span>
                      <p className="text-[13px] text-[var(--color-text)]">{f}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 border-t-2 border-[rgba(44,35,28,0.1)]">
                  <div className="flex gap-2 flex-wrap">
                    {selected.tags.map((tag) => (
                      <span key={tag} className="brutal-border px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.1em]" style={{ backgroundColor: selected.accent, color: "#000" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {selected.url && (
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-border brutal-shadow bg-[var(--color-accent)] px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none shrink-0"
                    >
                      Visit site ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <SiteHeader />

      <section className="dot-grid relative overflow-hidden border-b-2 border-[rgba(44,35,28,0.85)] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="absolute inset-0 overflow-hidden">
          {/* Large circle */}
          <motion.div
            animate={{ y: [0, 36, 0], x: [0, 10, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[7%] top-10 h-48 w-48 rounded-full bg-[var(--color-accent)] opacity-80"
          />
          {/* Diamond */}
          <motion.div
            animate={{ rotate: [45, 75, 45], y: [0, -24, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-14 left-[7%] h-32 w-32 bg-[var(--color-teal)] opacity-75"
            style={{ transform: "rotate(45deg)" }}
          />
          {/* Small circle outline */}
          <motion.div
            animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[24%] top-[30%] h-14 w-14 rounded-full border-[3px] border-[var(--color-accent-strong)] opacity-70"
          />
          {/* Tiny filled circle */}
          <motion.div
            animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[22%] top-[18%] h-7 w-7 rounded-full bg-[var(--color-accent-strong)] opacity-60"
          />
          <div className="pointer-events-none absolute right-4 top-6 text-[7rem] font-black leading-none text-[rgba(44,35,28,0.06)] sm:text-[11rem] lg:text-[16rem]">
            WEB
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl">
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
                We Build.
                <br />
                You Grow.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                A web studio for founders and businesses. We design, build, and ship conversion-first websites and MVPs — fast, clean, and production-ready.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#work"
                className="brutal-border brutal-shadow bg-white px-7 py-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                View Our Work
              </Link>
              <a
                href={WA_URL}
                className="brutal-border brutal-shadow bg-[var(--color-accent-strong)] px-7 py-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Start Your Project →
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b-2 border-[rgba(44,35,28,0.85)] bg-[var(--color-text)] py-4">
        <div
          className="flex whitespace-nowrap text-sm font-black uppercase tracking-[0.26em] sm:text-base"
          style={{ animation: "marquee 35s linear infinite", width: "max-content" }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              style={{ marginRight: 32 }}
              className="inline-flex items-center gap-4"
            >
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
              <span className="text-white/30">—</span>
            </span>
          ))}
        </div>
      </section>

      <WorkSection />
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

      <section id="about" className="border-b-2 border-[rgba(44,35,28,0.85)] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">About</p>
              <h2 className="text-3xl font-black uppercase tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
                A studio that builds,<br />not just designs.
              </h2>
              <p className="text-base leading-8 text-[var(--color-muted)]">
                DIGUZ is a web studio. The work covers the full build — from brief to a live, working product. Websites, SaaS products, custom solutions, MVPs, and mobile apps. No fixed industry, no minimum budget tier — the scope depends on what the project actually needs.
              </p>
              <p className="text-base leading-8 text-[var(--color-muted)]">
                Projects are handled using modern tools and a direct process: scope it, build it, ship it. No handoff chains, no account managers. Direct communication from start to delivery.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Websites", desc: "Marketing sites, landing pages, e-commerce. Built to convert and easy to maintain." },
                { label: "Web Apps", desc: "Full-stack products with auth, databases, payments — whatever the feature set requires." },
                { label: "Mobile Apps", desc: "Cross-platform mobile builds with Flutter. One codebase, iOS and Android." },
                { label: "SaaS Products", desc: "Multi-tenant platforms with subscriptions, user dashboards, billing, and admin panels." },
                { label: "Custom Solutions", desc: "Bespoke software built around your exact workflow — if it doesn't exist off the shelf, we build it." },
                { label: "MVPs", desc: "Fastest path from idea to something real users can test. Scoped tight, shipped fast." },
              ].map(({ label, desc }) => (
                <div key={label} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 space-y-2">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text)]">{label}</p>
                  <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative border-t-2 border-b-2 border-[rgba(44,35,28,0.85)] overflow-hidden bg-[var(--color-text)]" style={{ minHeight: "340px" }}>
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "12px 12px" }} />
        <motion.div
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-60px] top-[-60px] w-72 h-72 rounded-full bg-[var(--color-accent)] opacity-20 pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-40px] bottom-[-40px] w-48 h-48 rounded-full bg-[var(--color-teal)] opacity-15 pointer-events-none"
        />
        <div className="relative flex flex-col items-center justify-center text-center px-5 py-20 sm:px-8 lg:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[rgba(255,255,255,0.5)] mb-4">Ready when you are</p>
          <h2 className="text-4xl font-black uppercase tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl max-w-3xl leading-[0.92]">
            Got an idea?<br />
            <span className="text-[var(--color-accent)]">Let&apos;s build it.</span>
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[rgba(255,255,255,0.55)]">
            Drop us a message and we&apos;ll scope it out for free. No commitment, no agency fluff — just a straight conversation about what you need.
          </p>
          <a
            href={WA_URL}
            className="mt-8 brutal-border brutal-shadow bg-[var(--color-accent)] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Start Your Project →
          </a>
        </div>
      </section>

      <section className="border-t-2 border-[rgba(44,35,28,0.85)] py-16 overflow-hidden">
        <p className="mb-10 px-5 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)] sm:px-8 lg:px-10">What clients say</p>
        <div className="relative">
          <div
            className="flex"
            style={{ animation: "marquee-quad 28s linear infinite", width: "max-content" }}
          >
            {[...Array(4)].map((_, setIndex) =>
              [
                {
                  quote: "Fast turnaround, quality work, and actually followed up throughout. Clear on what was being built and when — delivered exactly on time.",
                  name: "The Bed Store",
                  url: "thebedstore.shop",
                  logo: "/logos/the-bed-store.png",
                },
                {
                  quote: "Prices are fair and the quality is top notch. Knew what we needed, built it right, and didn't disappear after delivery.",
                  name: "Onyx Gym",
                  url: "onyxgym.net",
                  logo: "/logos/onyx-gym.png",
                },
                {
                  quote: "Brought a complex idea and it got built properly. The technical side was handled without back and forth — communication was clear the whole way through and it was delivered as agreed.",
                  name: "Nimra",
                  url: "nimra.app",
                  logo: "/logos/nimra.png",
                  dark: false,
                },
                {
                  quote: "Straightforward to work with. Knew what they were doing, didn't need hand-holding, and the site shipped without the usual back and forth.",
                  name: "Zevra Creative",
                  url: "zevracreative.com",
                  logo: "/logos/zevra-creative.png",
                  dark: false,
                },
              ].map((t) => (
                <div
                  key={`${setIndex}-${t.name}`}
                  className={`brutal-shadow flex shrink-0 flex-col justify-between gap-6 p-6 brutal-border ${t.dark ? "bg-[var(--color-text)]" : "shell"}`}
                  style={{ width: 340, marginRight: 24 }}
                >
                  <p className={`text-base leading-8 ${t.dark ? "text-white/80" : "text-[var(--color-text)]"}`}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.logo} alt={t.name} style={{ width: 36, height: 36, objectFit: "contain", filter: t.dark ? "brightness(0) invert(1)" : "none" }} />
                    <div>
                      <p className={`text-sm font-black uppercase tracking-[0.1em] ${t.dark ? "text-white" : "text-[var(--color-text)]"}`}>{t.name}</p>
                      <p className={`font-mono text-[11px] ${t.dark ? "text-white/40" : "text-[var(--color-muted)]"}`}>{t.url}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
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
      <SiteFooter />
    </main>
  );
}
