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
    category: "Solo full-stack build",
    headline: "Built the whole platform myself — frontend, infra, billing, everything.",
    summary:
      "Security training platform with 60+ live hacking labs. I designed and built everything: the UI, Docker lab orchestration on Railway, Stripe billing, and a flag-based leaderboard. Deployed and running.",
    intro:
      "Each lab is a Docker container that spins on demand. Pick a target, get a flag, move on. I built the entire thing solo — Next.js frontend, Supabase backend, Docker orchestration on Railway, Stripe billing, XP system, leaderboard. No agency, no team.",
    stack: ["Next.js", "TypeScript", "Supabase", "Railway", "Docker", "Stripe", "Tailwind CSS"],
    responsibilities: [
      "Full frontend — architecture, UI, design system",
      "Lab orchestration — real-time Docker deployment flows",
      "Backend + billing — Supabase, Stripe, auth, leaderboard",
    ],
    highlights: [
      "Built and deployed solo",
      "Docker + Railway infra",
      "Stripe billing integrated",
    ],
    challenge:
      "Most security training tools are either too passive or require a painful local setup. People drop off before they even start.",
    solution:
      "One click to spin a container. Real targets, real flags. Guided walkthroughs unlock only after you solve — so you always move forward, never just read.",
    outcome:
      "Live and running. 60+ labs across SQL injection, XSS, IDOR, JWT attacks, SSRF, and more.",
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Labs", value: "60+" },
      { label: "Built", value: "Solo" },
    ],
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
    headline: "Chrome MV3 extension with live WebRTC calling and SMS — built from scratch.",
    summary:
      "Chrome extension for real phone calls and SMS via virtual numbers. I built the full architecture: popup, service worker, offscreen document for persistent WebRTC, a separate call window, and Supabase Realtime for live SMS.",
    intro:
      "The extension gives you a working phone line in the browser. Click any number on any page to call. Inbound calls ring in a popup. SMS inbox with full threading. I built every piece of it — the Chrome MV3 architecture, the WebRTC call handling, the background listener, the Stripe billing.",
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
      "WebRTC state dies when a Chrome popup closes. That means inbound calls silently fail the moment the user navigates away — which is most of the time.",
    solution:
      "An offscreen document holds the Telnyx listener permanently in the background. A dedicated call window runs the WebRTC session independently of the popup lifecycle. Supabase Realtime delivers SMS without polling.",
    outcome:
      "Calls stay alive with the popup closed. Full working phone line — calls, SMS, contacts, history — inside an extension.",
    metrics: [
      { label: "Status", value: "In progress" },
      { label: "Voice", value: "Telnyx WebRTC" },
      { label: "Type", value: "MV3 Extension" },
    ],
    links: {
      live: "https://nimra.app",
    },
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
    headline: "Frontend rebuild for a furniture e-commerce client.",
    summary:
      "E-commerce redesign for a furniture retailer. Rebuilt the product layout, fixed mobile, and removed the template feel. Client brief: make it feel like a proper shop.",
    intro:
      "The site was doing everything at once — competing CTAs, no breathing room, product pages that made it hard to decide. I rebuilt the frontend: cleaner product hierarchy, mobile-first layout, one action per page. Less noise, easier to buy.",
    stack: ["Next.js", "Responsive UI", "E-commerce UX"],
    responsibilities: [
      "Full frontend rebuild — product listing, detail pages, mobile",
      "Visual hierarchy — cut competing CTAs, simplified each page to one action",
      "Mobile-first — smaller screens done first, desktop scaled up from there",
    ],
    highlights: [
      "Full frontend rebuild",
      "Mobile-first layout",
      "One CTA per screen",
    ],
    challenge:
      "The original layout crowded every page — too many products pushed at once, too many buttons competing, no clear path to checkout.",
    solution:
      "Stripped it back. Each product gets space to breathe. One primary CTA per page. Navigation that gets out of the way. Mobile done right before touching desktop.",
    outcome:
      "A cleaner storefront. The buying flow is obvious. The brand looks like it was designed, not assembled.",
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Type", value: "Client project" },
      { label: "Focus", value: "Frontend" },
    ],
    links: {
      live: "https://thebedstore.shop",
    },
    palette: {
      glow: "from-white/8 via-white/0 to-transparent",
      accent: "#d8d8d2",
      surface: "rgba(16, 16, 18, 0.92)",
    },
  },
];

export function getProjects() {
  return projects;
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
