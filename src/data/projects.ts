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
  screenshots?: string[];
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
    name: "Hackr.gg",
    url: "hackr.gg",
    status: "live",
    year: "2026",
    category: "Full-stack build",
    headline: "A live security training platform — browser-based hacking labs, real targets, billing, and a leaderboard. Built from scratch and running in production.",
    summary:
      "A full web platform where users spin up real vulnerable environments in one click, solve challenges, and track progress on a leaderboard. Subscription billing, user auth, 60+ labs. Everything designed and built — frontend to infrastructure.",
    intro:
      "Docker containers spin on demand. Next.js frontend, Supabase backend, Railway for orchestration, Stripe for billing, XP leaderboard. Every part of the stack covered — no handoffs, no gaps.",
    stack: ["Next.js", "TypeScript", "Supabase", "Railway", "Docker", "Stripe", "Tailwind CSS"],
    responsibilities: [
      "Frontend — full architecture, UI, and design system from scratch",
      "Lab infrastructure — real-time Docker container deployment on demand",
      "Backend, auth, billing, and XP leaderboard — end to end",
    ],
    highlights: [
      "60+ live hacking labs",
      "One-click container spin-up",
      "Billing + auth + leaderboard",
    ],
    challenge:
      "Security training tools are either too passive or require a painful local setup. People drop off before starting.",
    solution:
      "One click spins a container. Real targets, real flags. Walkthroughs unlock only after solving — forward momentum, no passive reading.",
    outcome:
      "Live and running. 60+ labs across SQL injection, XSS, IDOR, JWT attacks, SSRF, and more.",
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Type", value: "Web Platform" },
      { label: "Labs", value: "60+" },
    ],
    logo: "/logos/hackr-gg.png",
    screenshots: [
      "/screenshots/hackr-1.png",
      "/screenshots/hackr-2.png",
      "/screenshots/hackr-3.png",
      "/screenshots/hackr-4.png",
      "/screenshots/hackr-5.png",
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
    name: "Nimra - Click to Call",
    url: "nimra.app",
    status: "in-progress",
    year: "2026",
    category: "Chrome extension",
    headline: "A phone line that lives in your browser — call and text from any webpage, without switching apps or picking up your phone.",
    summary:
      "A Chrome extension that turns your browser into a full phone line. Click any number on any page to call. Inbound calls ring directly in the browser. SMS with full threading, real-time updates. Billing built in. Works while you browse.",
    intro:
      "Click any number on any page to call. Inbound calls ring in the extension. SMS with full threading. The architecture keeps WebRTC alive in the background — call state survives popup close, no dropped connections.",
    stack: ["Chrome Extension MV3", "JavaScript", "Telnyx WebRTC", "Supabase", "Stripe"],
    responsibilities: [
      "Full Chrome extension — click any number on any webpage to call instantly",
      "Persistent call handling — calls stay live even when the extension popup is closed",
      "SMS inbox with full threading — no page refresh, updates in real time",
    ],
    highlights: [
      "Calls + SMS in the browser",
      "Works on any webpage",
      "Real-time — no polling",
    ],
    challenge:
      "WebRTC state dies when a Chrome popup closes. Inbound calls silently fail the moment the user navigates away.",
    solution:
      "An offscreen document holds the Telnyx listener permanently in the background. A dedicated call window runs the WebRTC session independently of the popup lifecycle. Supabase Realtime delivers SMS without polling.",
    outcome:
      "Calls stay alive with the popup closed. Full phone line — calls, SMS, contacts, history — inside an extension.",
    metrics: [
      { label: "Status", value: "In Development" },
      { label: "Type", value: "Browser Extension" },
      { label: "Platform", value: "Chrome" },
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
    slug: "nimra-mobile",
    name: "Nimra Mobile",
    url: "nimra.app",
    status: "in-progress",
    year: "2026",
    category: "Mobile application",
    headline: "A full phone line in your pocket — calls, SMS, and an eSIM built into a native mobile app. No physical SIM required.",
    summary:
      "Where the browser extension puts a phone line in Chrome, the mobile app puts one in your pocket. Native Flutter build: calls, SMS, eSIM provisioning, and contacts — all without a physical SIM. One number, any device.",
    intro:
      "The mobile app is a different product entirely. eSIM provisioning means users get a real number without a carrier or a SIM card. Calls and SMS run natively on device. Built in Flutter — one codebase, iOS and Android.",
    stack: ["Flutter", "Dart", "Supabase", "Stripe"],
    responsibilities: [
      "Native mobile app — calls, SMS, and contacts built for iOS and Android",
      "eSIM provisioning — users get a real number without a physical SIM card",
      "Shared backend — same Supabase infrastructure powering both the app and the browser extension",
    ],
    highlights: [
      "eSIM — no physical SIM",
      "iOS + Android from one codebase",
      "Calls, SMS, contacts native",
    ],
    challenge:
      "eSIM provisioning on mobile is a different beast from WebRTC in a browser — carrier-level integrations, device profiles, and platform-specific APIs across iOS and Android.",
    solution:
      "Flutter handles the cross-platform layer. The eSIM flow abstracts the provisioning complexity behind a clean activation screen. Supabase ties the mobile app and the browser extension to one account and one number.",
    outcome:
      "In active development. Both surfaces — browser and mobile — share the same backend and phone number, making Nimra a genuinely cross-platform communication tool.",
    metrics: [
      { label: "Status", value: "In Development" },
      { label: "Type", value: "Mobile App" },
      { label: "Platform", value: "iOS + Android" },
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
    headline: "An e-commerce rebuild that cleared the clutter — cleaner product pages, one path to checkout, and a mobile experience that actually works.",
    summary:
      "The original store was crowded and hard to navigate on mobile. Full rebuild: product listings, detail pages, and checkout flow redesigned around one goal — making it easy to buy. Mobile-first throughout. Live and running.",
    intro:
      "Competing CTAs, crowded pages, no visual breathing room. Layout rebuilt: cleaner product browsing, tighter spacing, mobile done right before desktop. One clear path to checkout.",
    stack: ["Next.js", "CMS", "E-commerce UX", "Responsive UI"],
    responsibilities: [
      "Full storefront rebuild — product listings, detail pages, checkout flow",
      "Simplified buying journey — one clear action per page, no competing buttons",
      "Mobile-first — built for phones first, desktop scaled up from there",
    ],
    highlights: [
      "Cleaner product browsing",
      "Mobile-first layout",
      "Clear path to checkout",
    ],
    challenge:
      "Every page was crowded — too many products pushed at once, competing buttons, no clear path to checkout.",
    solution:
      "Stripped it back. Each product gets room. One primary action per page. Navigation that stays out of the way. Mobile done before desktop.",
    outcome:
      "Cleaner storefront. The buying flow is obvious. Looks designed, not assembled.",
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Type", value: "E-commerce" },
      { label: "Focus", value: "Conversion" },
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
    headline: "A gym brand site and coach marketplace in one — browse coaches, check availability, and book sessions without leaving the page.",
    summary:
      "Two products in one: a premium brand site for the gym, and a fully functional marketplace where members discover and book coaches. Coach profiles, service listings, availability, and bookings — all live and connected to a real backend.",
    intro:
      "The platform needed two distinct surfaces — a public-facing gym site and a functional coach marketplace where users can discover, filter, and book coaches. Both had to feel like one cohesive product.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    responsibilities: [
      "Brand site — gym landing page built for conversion and premium feel",
      "Coach marketplace — browse, filter, and book coaches in one flow",
      "Live data — coach profiles, availability, and bookings connected to a real backend",
    ],
    highlights: [
      "Gym brand + marketplace",
      "Coach booking flow",
      "Live and in production",
    ],
    challenge:
      "Combining a brand-forward gym site with a functional marketplace without one undermining the other — the gym needed to feel premium, the marketplace needed to feel practical.",
    solution:
      "Kept the two surfaces visually consistent but structurally separate. The gym site focuses on brand and conversion, the marketplace on clarity and ease of booking.",
    outcome:
      "A live platform at onyxgym.net — gym branding and a working coach marketplace running together in production.",
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Type", value: "Web Platform" },
      { label: "Surfaces", value: "Brand + Marketplace" },
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
