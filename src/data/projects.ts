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
    category: "Competitive platform",
    headline: "Competitive product, dark UI, fast read.",
    summary: "Live project focused on speed, hierarchy, and a cleaner game-native feel.",
    intro: "Built to feel active, direct, and easy to scan.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Product UX"],
    responsibilities: [
      "Interface direction and frontend architecture",
      "Information hierarchy for competitive content",
      "Visual system tuned for dark-mode product use",
    ],
    highlights: [
      "Fast scan hierarchy",
      "Tight dark interface",
      "Motion used sparingly",
    ],
    challenge:
      "Competitive products get noisy fast.",
    solution:
      "Reduce the surface count. Keep contrast high. Let the hierarchy do the work.",
    outcome: "Sharper feel, less clutter, easier extension.",
    metrics: [
      { label: "State", value: "Live" },
      { label: "Mode", value: "Product-first" },
      { label: "Focus", value: "Speed + clarity" },
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
    category: "Private app build",
    headline: "Active build. Full case study later.",
    summary: "Featured now with honest status. Details expand when the latest build is ready.",
    intro: "Kept visible, but clearly marked as still in progress.",
    stack: ["Next.js", "App design", "Systems thinking", "Ongoing iteration"],
    responsibilities: [
      "Product direction under the diguz identity",
      "Interface exploration and interaction language",
      "Case-study scaffolding prepared for later expansion",
    ],
    highlights: [
      "Marked as in progress",
      "Ready for later screenshots",
      "Fits the same case-study system",
    ],
    challenge:
      "Incomplete work can feel awkward in a portfolio.",
    solution:
      "Keep it in the lineup, but keep the status honest.",
    outcome: "Still visible. No fake polish.",
    metrics: [
      { label: "State", value: "In progress" },
      { label: "Next", value: "Detailed case study" },
      { label: "Domain", value: "nimra.app" },
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
    category: "Ecommerce",
    headline: "Commerce flow with cleaner structure.",
    summary: "Live ecommerce work focused on clarity, trust, and less friction.",
    intro: "A more controlled storefront with better rhythm across browsing and product detail.",
    stack: ["Next.js", "Ecommerce UX", "Responsive UI", "Design systems"],
    responsibilities: [
      "Frontend structure and interaction refinement",
      "Visual cleanup for a more premium commerce feel",
      "Project framing around practical user decision-making",
    ],
    highlights: [
      "Clearer browsing flow",
      "Better mobile rhythm",
      "Less template feel",
    ],
    challenge:
      "Commerce pages crowd easily.",
    solution:
      "Tighten spacing, hierarchy, and product flow.",
    outcome: "Cleaner storefront, clearer decisions.",
    metrics: [
      { label: "State", value: "Live" },
      { label: "Type", value: "Ecommerce" },
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
