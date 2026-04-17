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
    category: "Security training platform",
    headline: "Full-stack cybersecurity learning platform — built and shipped to production.",
    summary:
      "A structured security academy with live lab modules, user progression, and payment access control. Built with Next.js, Supabase, and Stripe — fully live and in active use.",
    intro:
      "The platform needed a real-time lab system, a structured course layout, user authentication, payment gating, and a progression engine — all working together in production. Each piece was built and integrated from scratch.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    responsibilities: [
      "Built the full frontend — routing, UI system, and all course and lab interfaces",
      "Implemented real-time lab deployment flow with live state tracking and flag submission",
      "Integrated Stripe payment gating, Supabase auth, and a full XP and leaderboard system",
    ],
    highlights: [
      "60+ lab modules in production",
      "Real-time lab state and flag system",
      "Stripe + auth + XP — all integrated",
    ],
    challenge:
      "Getting real-time lab state, payment access control, and user progression to work reliably together — without any one system blocking another.",
    solution:
      "Each system was scoped and built independently with clean interfaces between them. Lab state handled separately from auth, payments decoupled from progression. Integration done layer by layer.",
    outcome:
      "A live, fully operational security platform — real users, active labs, and a working payment system in production.",
    metrics: [
      { label: "Labs", value: "60+" },
      { label: "Stack", value: "Next.js + Supabase" },
      { label: "Status", value: "Live" },
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
    category: "Browser extension",
    headline: "Chrome extension that turns your browser into a working virtual phone.",
    summary:
      "A Chrome MV3 extension with real call handling, SMS inbox, contacts, and pay-as-you-go billing. Built on WebRTC and Supabase — calls and texts work directly from the browser.",
    intro:
      "The extension needed live calling, inbound call handling, a full SMS inbox, contacts management, and a billing system — all running inside the browser with no native app. The core technical challenge was keeping call state alive across the extension lifecycle.",
    stack: ["Chrome Extension MV3", "JavaScript", "Supabase", "Stripe"],
    responsibilities: [
      "Built the full extension — popup UI, background service worker, persistent offscreen listener, and dedicated call window",
      "Solved live call persistence across popup close using an offscreen document architecture",
      "Shipped the SMS inbox with conversation threading, contacts, call history, and Stripe credit billing",
    ],
    highlights: [
      "Live calls and SMS from the browser",
      "Persistent inbound call listener",
      "Full billing and contacts system",
    ],
    challenge:
      "Chrome's MV3 lifecycle terminates background state when the popup closes — meaning inbound calls would silently drop whenever the user navigated away.",
    solution:
      "A three-layer architecture: offscreen document holds the persistent listener, a dedicated call window owns the WebRTC session, and the popup handles UI only. Each layer isolated with a single responsibility.",
    outcome:
      "Calls stay live regardless of popup state. A fully working phone system — calls, SMS, contacts, history, and billing — running inside a browser extension.",
    metrics: [
      { label: "Type", value: "Chrome Extension" },
      { label: "Stack", value: "WebRTC + Supabase" },
      { label: "Status", value: "In progress" },
    ],
    logo: "/logos/nimra.png",
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
  {
    slug: "the-bed-store",
    name: "The Bed Store",
    url: "thebedstore.shop",
    status: "live",
    year: "2026",
    category: "E-commerce",
    headline: "Frontend rebuild of a live furniture and mattress ecommerce store.",
    summary:
      "Full frontend rebuild of an active ecommerce store selling furniture and mattresses. Redesigned product layout, mobile experience, and checkout flow — delivered on a live site.",
    intro:
      "The store needed a layout overhaul without disrupting the live purchase flow. Product pages, listing layout, mobile responsiveness, and the visual system were all rebuilt with a focus on clarity and reducing friction to checkout.",
    stack: ["Next.js", "Ecommerce UX", "Responsive UI", "Design systems"],
    responsibilities: [
      "Rebuilt product listing and detail pages — layout, hierarchy, and spacing from the ground up",
      "Redesigned the mobile layout to improve readability and reduce scroll friction",
      "Established a consistent visual system across all storefront pages — type, spacing, and components",
    ],
    highlights: [
      "Full storefront layout rebuilt",
      "Mobile experience redesigned",
      "Visual system standardised",
    ],
    challenge:
      "The store had inconsistent layout, crowded product pages, and a mobile experience that made browsing feel slow. All changes had to ship on a live, active store.",
    solution:
      "Rebuilt page by page — listing pages first to establish the grid and hierarchy, then detail pages, then checkout. A spacing and type system was locked in early so all pages stayed consistent.",
    outcome:
      "A live rebuilt storefront with cleaner product presentation, faster mobile browsing, and a more premium feel across all pages.",
    metrics: [
      { label: "Type", value: "E-commerce" },
      { label: "Stack", value: "Next.js" },
      { label: "Status", value: "Live" },
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
