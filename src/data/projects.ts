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
    headline: "Stop reading about it. Hack it.",
    summary:
      "60+ hands-on CTF labs across SQL injection, XSS, IDOR, JWT attacks, and more. One-click lab deployment, in-browser tools, no setup or VPN needed.",
    intro:
      "Built for people who learn by doing. Each lab is a Docker-containerised vulnerable app spun live on Railway. You get a real target, a real flag, and no excuses not to practice.",
    stack: ["Next.js", "TypeScript", "Supabase", "Railway", "Docker", "Stripe", "Tailwind CSS"],
    responsibilities: [
      "Frontend architecture and full UI direction",
      "Lab orchestration interface and real-time deployment flows",
      "Visual system built for a dark, competitive security product",
    ],
    highlights: [
      "60+ vulnerable labs",
      "In-browser Kali toolkit",
      "Flag-based XP and leaderboard",
    ],
    challenge:
      "Security training tools are either too dry or too abstract. Most require complex local setup that kills momentum before you even start.",
    solution:
      "Make it feel like a game. Real-world CVE scenarios mapped to OWASP Top 10. One click to spin a container. Guided walkthroughs unlock after solving so you always move forward.",
    outcome:
      "An active platform where learners actually hack, not just read. Structured learning paths across 30+ vulnerability types.",
    metrics: [
      { label: "State", value: "Live" },
      { label: "Labs", value: "60+" },
      { label: "Stack", value: "Next.js + Railway" },
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
    headline: "A real phone number that lives in your browser.",
    summary:
      "Chrome extension for making and receiving calls and SMS using a virtual US, Canada, or UK number — powered by Telnyx WebRTC and Supabase.",
    intro:
      "Nimra gives you a working phone line inside your browser. Click any number on any page to dial. Inbound calls ring in a popup with answer and decline. SMS inbox with full conversation threading. Pay-as-you-go, no contract.",
    stack: ["Chrome Extension MV3", "JavaScript", "Telnyx WebRTC", "Supabase", "Stripe"],
    responsibilities: [
      "Full extension architecture — popup, service worker, offscreen document, and separate call window",
      "Real-time WebRTC call handling with persistent inbound listener that survives popup close",
      "SMS inbox with conversation threading and live delivery via Supabase Realtime",
    ],
    highlights: [
      "Calls and SMS in-browser",
      "Persistent inbound listener",
      "Pay-as-you-go billing",
    ],
    challenge:
      "WebRTC state doesn't survive when a Chrome popup closes — meaning inbound calls would silently fail whenever the user navigated away.",
    solution:
      "An offscreen document keeps the Telnyx listener alive in the background. A separate dedicated call window isolates the WebRTC session from the popup lifecycle entirely. Supabase Realtime handles SMS delivery without polling.",
    outcome:
      "Calls stay live even with the popup closed. Full working phone — calls, SMS, contacts, call history — inside a browser extension.",
    metrics: [
      { label: "State", value: "In progress" },
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
    category: "E-commerce",
    headline: "Premium beds and mattresses with a cleaner buying flow.",
    summary:
      "Jordan-based online bed and mattress retailer. Frontend work focused on trust signals, clear product hierarchy, and reducing friction through the purchase flow.",
    intro:
      "E-commerce for high-consideration purchases like beds needs to earn trust fast and keep the path to checkout clean. The work here was about building that rhythm — better hierarchy, less visual clutter, and a product experience that feels premium without being heavy.",
    stack: ["Next.js", "Ecommerce UX", "Responsive UI", "Design systems"],
    responsibilities: [
      "Frontend structure and interaction refinement across browsing and product detail",
      "Visual cleanup for a more premium, trustworthy commerce feel",
      "Mobile-first layout work to improve rhythm on smaller screens",
    ],
    highlights: [
      "Clearer product browsing flow",
      "Better mobile layout rhythm",
      "Less template feel",
    ],
    challenge:
      "Commerce pages crowd easily — too many products, too many CTAs, not enough breathing room. The original layout made it hard to focus on any single item.",
    solution:
      "Tighten spacing and visual hierarchy. Let each product breathe. Reduce competing calls to action on key pages so the path to purchase is obvious.",
    outcome:
      "A cleaner storefront that makes decisions easier and the brand feel more considered.",
    metrics: [
      { label: "State", value: "Live" },
      { label: "Type", value: "E-commerce" },
      { label: "Priority", value: "Clarity + trust" },
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
