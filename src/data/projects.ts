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
    headline: "Hands-on cybersecurity academy. Learn by actually breaking things.",
    summary:
      "Structured cybersecurity courses and live lab modules. Each module spins a vulnerable target machine — capture the flag, move to the next. No setup, no VPN, no excuses.",
    intro:
      "Built for people who learn by doing. Theory only goes so far. Each lab module deploys a live vulnerable target — students attack it, capture the flag, and move on. Structured learning paths cover everything from web vulnerabilities to network attacks.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    responsibilities: [
      "Frontend architecture and full UI direction",
      "Lab module interface and real-time deployment flows",
      "Visual system built for a dark, competitive security product",
    ],
    highlights: [
      "60+ lab modules",
      "Live vulnerable target machines",
      "Structured learning paths",
    ],
    challenge:
      "Cybersecurity is hard to learn from reading alone. Most platforms are either too theoretical or require complex local setup that stops learners before they even start.",
    solution:
      "Remove every barrier. One click deploys a live target. Guided walkthroughs unlock after solving so there is always a clear path forward. Structure keeps learners on track.",
    outcome:
      "An active security academy where students actually practice attacks, not just read about them.",
    metrics: [
      { label: "State", value: "Live" },
      { label: "Modules", value: "60+" },
      { label: "Type", value: "Academy" },
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
    headline: "Virtual phone numbers, straight from your browser.",
    summary:
      "Chrome extension to buy and use a virtual US, UK, or Canada phone number. Make calls, send and receive texts — no app, no SIM, just the browser.",
    intro:
      "Nimra puts a real working phone number inside Chrome. Pick a number, top up credits, and start calling or texting right from the extension popup. Inbound calls ring in the browser. SMS threads stay organised in the inbox. No extra apps, no hardware.",
    stack: ["Chrome Extension", "JavaScript", "Supabase", "Stripe"],
    responsibilities: [
      "Full extension build from popup UI to background service worker",
      "Real-time call handling with persistent inbound listener",
      "SMS inbox with conversation threading and live delivery",
    ],
    highlights: [
      "Calls and SMS in-browser",
      "US, UK, and Canada numbers",
      "Pay-as-you-go credits",
    ],
    challenge:
      "Getting a reliable phone line usually means a separate app, a SIM card, or a business phone plan. All of that is overkill for someone who just needs a number.",
    solution:
      "Put the whole thing in a browser extension. Buy a number, make a call, send a text — without leaving the browser. Credits are pay-as-you-go so there is no commitment.",
    outcome:
      "A working virtual phone line that lives in Chrome. Calls, texts, history, and contacts — all in the extension.",
    metrics: [
      { label: "State", value: "In progress" },
      { label: "Numbers", value: "US / UK / CA" },
      { label: "Type", value: "Chrome Extension" },
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
    headline: "Premium furniture and mattress store, built for easier buying.",
    summary:
      "Online furniture and mattress retailer. Frontend work focused on trust, clear product layout, and a smoother path from browsing to checkout.",
    intro:
      "Furniture is a high-consideration purchase — customers need to trust what they see before they commit. The work here was about giving every product room to breathe, making the layout feel premium, and cutting the friction that stops people from completing a purchase.",
    stack: ["Next.js", "Ecommerce UX", "Responsive UI", "Design systems"],
    responsibilities: [
      "Frontend structure and interaction refinement across browsing and product pages",
      "Visual cleanup for a more premium, trustworthy storefront feel",
      "Mobile layout work to improve rhythm and readability on smaller screens",
    ],
    highlights: [
      "Cleaner product browsing",
      "Better mobile layout",
      "Reduced checkout friction",
    ],
    challenge:
      "Furniture stores easily feel cluttered — too many products competing for attention, inconsistent spacing, and a layout that makes it hard to focus on any single item.",
    solution:
      "Tighten the hierarchy, give products space, and reduce competing calls to action. Let the product be the focus at every stage of the flow.",
    outcome:
      "A cleaner, more trustworthy storefront where customers can browse comfortably and reach checkout without friction.",
    metrics: [
      { label: "State", value: "Live" },
      { label: "Type", value: "E-commerce" },
      { label: "Focus", value: "Furniture + Beds" },
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
