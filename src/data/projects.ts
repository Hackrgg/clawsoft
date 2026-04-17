export type ProjectStatus = "live" | "in-progress" | "archived";

export type Project = {
  slug: string;
  name: string;
  url: string;
  status: ProjectStatus;
  year: string;
  category: string;
  headline: string;
  summary: string;
  intro: string;
  stack: string[];
  responsibilities: string[];
  highlights: string[];
  challenge: string;
  solution: string;
  outcome: string;
  metrics: {
    label: string;
    value: string;
  }[];
  logo?: string;
  links: {
    live?: string;
    caseStudy?: string;
  };
  palette: {
    glow: string;
    accent: string;
    surface: string;
  };
};

export const projects: Project[] = [
  {
    slug: "hackr-gg",
    name: "hackr.gg",
    url: "hackr.gg",
    status: "live",
    year: "2026",
    category: "Full-stack build",
    headline: "Docker containers for live vulnerable machines — Next.js, Supabase, Stripe wired on top.",
    summary:
      "Next.js, Supabase, Docker, Railway, Stripe — frontend to infra. Architecture, UI, lab orchestration, billing. Every layer designed and built. Live.",
    intro:
      "Docker containers spin on demand. Next.js frontend, Supabase backend, Railway for orchestration, Stripe for billing, XP leaderboard. Every part of the stack covered — no handoffs, no gaps.",
    stack: ["Next.js", "TypeScript", "Supabase", "Railway", "Docker", "Stripe", "Tailwind CSS"],
    responsibilities: [
      "Full frontend — architecture, UI, design system",
      "Lab orchestration — real-time Docker deployment flows",
      "Backend + billing — Supabase, Stripe, auth, leaderboard",
    ],
    highlights: [
      "Full-stack, solo build",
      "Docker + Railway infra",
      "Stripe + Supabase",
    ],
    challenge:
      "Security training tools are either too passive or require a painful local setup. People drop off before starting.",
    solution:
      "One click spins a container. Real targets, real flags. Walkthroughs unlock only after solving — forward momentum, no passive reading.",
    outcome:
      "Live and running. 60+ labs across SQL injection, XSS, IDOR, JWT attacks, SSRF, and more.",
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Scope", value: "Full-stack" },
      { label: "Role", value: "Solo" },
    ],
    logo: "/logos/hackr-gg.png",
    links: {
      live: "https://hackr.gg",
    },
    palette: {
      glow: "from-white/10 via-white/0 to-transparent",
      accent: "#f3f3ee",
      surface: "rgba(16, 16, 18, 0.92)",
    },
  },
  {
    slug: "nimra",
    name: "Nimra",
    url: "nimra.app",
    status: "in-progress",
    year: "2026",
    category: "Chrome extension",
    headline: "Chrome MV3 — WebRTC calling, SMS, persistent background architecture.",
    summary:
      "MV3 Chrome extension. Full architecture: popup, service worker, offscreen document, dedicated call window. Telnyx WebRTC for voice, Supabase Realtime for SMS, Stripe for billing.",
    intro:
      "Click any number on any page to call. Inbound calls ring in the extension. SMS with full threading. The architecture keeps WebRTC alive in the background — call state survives popup close, no dropped connections.",
    stack: ["Chrome Extension MV3", "JavaScript", "Telnyx WebRTC", "Supabase", "Stripe"],
    responsibilities: [
      "Full MV3 extension architecture — popup, service worker, offscreen document, call window",
      "WebRTC call handling with a persistent listener that survives popup close",
      "SMS inbox with threading via Supabase Realtime — no polling",
    ],
    highlights: [
      "WebRTC survives popup close",
      "Full SMS threading",
      "MV3 service worker architecture",
    ],
    challenge:
      "WebRTC state dies when a Chrome popup closes. Inbound calls silently fail the moment the user navigates away.",
    solution:
      "An offscreen document holds the Telnyx listener permanently in the background. A dedicated call window runs the WebRTC session independently of the popup lifecycle. Supabase Realtime delivers SMS without polling.",
    outcome:
      "Calls stay alive with the popup closed. Full phone line — calls, SMS, contacts, history — inside an extension.",
    metrics: [
      { label: "Status", value: "In progress" },
      { label: "Voice", value: "Telnyx WebRTC" },
      { label: "Type", value: "MV3 Extension" },
    ],
    logo: "/logos/nimra.png",
    links: {},
    palette: {
      glow: "from-white/8 via-white/0 to-transparent",
      accent: "#dbdbd5",
      surface: "rgba(16, 16, 18, 0.92)",
    },
  },
  {
    slug: "the-bed-store",
    name: "The Bed Store",
    url: "thebedstore.shop",
    status: "live",
    year: "2026",
    category: "Client project",
    headline: "E-commerce storefront with custom CMS for product management.",
    summary:
      "Client project. Full e-commerce build — storefront, CMS for product management, cleaner layout, mobile-first. Live at thebedstore.shop.",
    intro:
      "Competing CTAs, crowded pages, no visual breathing room. Layout rebuilt: cleaner product browsing, tighter spacing, mobile done right before desktop. One clear path to checkout.",
    stack: ["Next.js", "CMS", "E-commerce UX", "Responsive UI"],
    responsibilities: [
      "Full layout rebuild — product listing, detail pages, mobile",
      "Visual hierarchy — cut competing CTAs, one action per page",
      "Mobile-first — smaller screens built first, desktop scaled from there",
    ],
    highlights: [
      "Full frontend rebuild",
      "Mobile-first layout",
      "One CTA per screen",
    ],
    challenge:
      "Every page was crowded — too many products pushed at once, competing buttons, no clear path to checkout.",
    solution:
      "Stripped it back. Each product gets room. One primary action per page. Navigation that stays out of the way. Mobile done before desktop.",
    outcome:
      "Cleaner storefront. The buying flow is obvious. Looks designed, not assembled.",
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Stack", value: "Next.js" },
      { label: "Layout", value: "Mobile-first" },
    ],
    logo: "/logos/the-bed-store.png",
    links: {
      live: "https://thebedstore.shop",
    },
    palette: {
      glow: "from-white/8 via-white/0 to-transparent",
      accent: "#d8d8d2",
      surface: "rgba(16, 16, 18, 0.92)",
    },
  },
  {
    slug: "onyx-gym",
    name: "Onyx Gym",
    url: "onyxgym.net",
    status: "live",
    year: "2026",
    category: "Gym + coach marketplace",
    headline: "Frontend for a gym brand and coach marketplace — built and shipped.",
    summary:
      "A gym platform with a full coach marketplace. Members browse and book coaches, coaches manage their profiles and services. Built on Next.js and Supabase.",
    intro:
      "The platform needed two distinct surfaces — a public-facing gym site and a functional coach marketplace where users can discover, filter, and book coaches. Both had to feel like one cohesive product.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    responsibilities: [
      "Built the full frontend — gym landing, coach listings, and individual coach profile pages",
      "Implemented coach marketplace with filtering, service listings, and booking flow",
      "Connected Supabase for coach profiles, availability, and user data",
    ],
    highlights: [
      "Gym site and marketplace in one",
      "Coach profiles and booking flow",
      "Supabase-powered backend",
    ],
    challenge:
      "Combining a brand-forward gym site with a functional marketplace without one undermining the other — the gym needed to feel premium, the marketplace needed to feel practical.",
    solution:
      "Kept the two surfaces visually consistent but structurally separate. The gym site focuses on brand and conversion, the marketplace on clarity and ease of booking.",
    outcome:
      "A live platform at onyxgym.net — gym branding and a working coach marketplace running together in production.",
    metrics: [
      { label: "Type", value: "Gym + Marketplace" },
      { label: "Stack", value: "Next.js + Supabase" },
      { label: "Status", value: "Live" },
    ],
    logo: "/logos/onyx-gym.png",
    links: {
      live: "https://onyxgym.net",
    },
    palette: {
      glow: "from-white/8 via-white/0 to-transparent",
      accent: "#c8c8c2",
      surface: "rgba(20, 18, 14, 0.92)",
    },
  },
];

export function getProjects() {
  return projects;
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
