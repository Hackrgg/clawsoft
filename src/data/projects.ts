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
    category: "Security training platform",
    headline: "Designed and shipped a full cybersecurity training platform end-to-end.",
    summary:
      "Full ownership of a production security academy — frontend architecture, lab interface, payment integration, and deployment pipeline. Taken from zero to live.",
    intro:
      "Sole responsibility for the entire frontend and product experience. Designed the UI system, built the lab module interface, integrated Stripe for payments, and connected the real-time lab deployment flow. Delivered a complete, production-ready platform.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    responsibilities: [
      "Architected and built the full frontend from zero — routing, UI system, component library",
      "Designed and shipped the lab module interface with real-time deployment and flag submission",
      "Integrated Stripe payments, Supabase auth, and a full user progression and XP system",
    ],
    highlights: [
      "Shipped full platform end-to-end",
      "60+ lab modules delivered",
      "Complete auth, payments, and progression",
    ],
    challenge:
      "Needed to deliver a complete product — not just a UI layer. Auth, payments, real-time lab state, user progression, and a content system all had to work together from day one.",
    solution:
      "Took full ownership of the stack. Built each system incrementally with clean separation — auth first, then payments, then lab orchestration, then progression. Kept the codebase structured enough to extend quickly.",
    outcome:
      "A production platform live at hackr.gg — fully operational with paying users, structured course content, and a working lab environment.",
    metrics: [
      { label: "Ownership", value: "End-to-end" },
      { label: "Modules", value: "60+" },
      { label: "Status", value: "Live" },
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
    category: "Browser extension",
    headline: "Built a fully functional virtual phone system inside a Chrome extension.",
    summary:
      "Complete build of a Chrome MV3 extension — call handling, SMS inbox, contacts, billing, and real-time notifications. Full ownership from architecture to deployment.",
    intro:
      "Sole developer on the entire extension. Responsible for the popup UI, background service worker, persistent call listener, SMS threading, Stripe billing integration, and Supabase backend. Solved non-trivial browser extension constraints to deliver a working phone product.",
    stack: ["Chrome Extension MV3", "JavaScript", "Supabase", "Stripe"],
    responsibilities: [
      "Architected the full Chrome MV3 extension — popup, service worker, offscreen document, and isolated call window",
      "Solved WebRTC session persistence so inbound calls survive popup close — a known hard problem in browser extensions",
      "Built and shipped the full SMS inbox, call history, contacts, and pay-as-you-go billing system",
    ],
    highlights: [
      "Solved WebRTC lifecycle in MV3",
      "Full call + SMS system shipped",
      "End-to-end ownership",
    ],
    challenge:
      "Chrome MV3 kills background state aggressively. Keeping a live phone call running when a user closes the extension popup is a non-trivial architectural problem with no clean out-of-the-box solution.",
    solution:
      "Designed a three-layer architecture — an offscreen document holds the inbound listener persistently, a dedicated call window isolates the WebRTC session, and the popup handles all UI state independently. Each layer has a single responsibility.",
    outcome:
      "A working virtual phone inside Chrome. Calls stay live across popup close. SMS, contacts, history, and billing all functional and in active use.",
    metrics: [
      { label: "Ownership", value: "End-to-end" },
      { label: "Type", value: "Chrome Extension" },
      { label: "Status", value: "In progress" },
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
    category: "E-commerce",
    headline: "Rebuilt the frontend of a live furniture and mattress ecommerce store.",
    summary:
      "Frontend rebuild of a live ecommerce store — improved product layout, checkout flow, and mobile experience. Delivered a cleaner, more conversion-focused storefront.",
    intro:
      "Responsible for the full frontend rebuild of an existing live store. Audited the existing layout, identified friction points across the browse-to-checkout flow, and delivered a redesigned storefront with better hierarchy, improved mobile layout, and a more premium visual feel.",
    stack: ["Next.js", "Ecommerce UX", "Responsive UI", "Design systems"],
    responsibilities: [
      "Audited and rebuilt the full storefront layout — product listing, detail pages, and checkout flow",
      "Redesigned the mobile experience to improve readability and reduce drop-off",
      "Delivered a cohesive visual system — spacing, typography, and component consistency across all pages",
    ],
    highlights: [
      "Full storefront rebuild delivered",
      "Mobile layout redesigned",
      "Checkout friction reduced",
    ],
    challenge:
      "The existing store had inconsistent spacing, competing visual elements, and a mobile layout that made browsing frustrating. Changes had to be delivered on a live store without breaking the existing purchase flow.",
    solution:
      "Rebuilt page by page — product listing first, then detail pages, then checkout. Established a consistent spacing and type system early so every subsequent page had a clear reference point.",
    outcome:
      "A live, rebuilt storefront with cleaner product presentation, better mobile rhythm, and a more trustworthy checkout experience.",
    metrics: [
      { label: "Ownership", value: "Full frontend" },
      { label: "Type", value: "E-commerce" },
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
