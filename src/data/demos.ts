export type DemoKind = "mobile" | "web";

export type Demo = {
  id: string;
  kind: DemoKind;
  title: string;
  subtitle: string;
  tags: string[];
  logo?: string;
  preview: {
    type: "appetize" | "link";
    embedUrl?: string | null;
    url?: string;
  };
};

export const demos: Demo[] = [
  {
    id: "foodie",
    kind: "mobile",
    title: "Foodie",
    subtitle: "Multi-restaurant food delivery (Flutter)",
    tags: ["Mobile", "Consumer", "Delivery"],
    logo: "/demos/logos/foodie.png",
    preview: { type: "appetize", embedUrl: process.env.NEXT_PUBLIC_APPETIZE_FOODIE_URL ?? null },
  },
  {
    id: "ebasket",
    kind: "mobile",
    title: "eBasket",
    subtitle: "Single-vendor grocery delivery (Flutter)",
    tags: ["Mobile", "Commerce", "Delivery"],
    logo: "/demos/logos/ebasket.png",
    preview: { type: "appetize", embedUrl: process.env.NEXT_PUBLIC_APPETIZE_EBASKET_URL ?? null },
  },
  {
    id: "smartgym",
    kind: "mobile",
    title: "SmartGym AI",
    subtitle: "Fitness + AI coaching (Mobile app)",
    tags: ["Mobile", "Fitness", "AI"],
    logo: "/demos/logos/smartgym.png",
    preview: { type: "appetize", embedUrl: process.env.NEXT_PUBLIC_APPETIZE_SMARTGYM_URL ?? null },
  },
  {
    id: "nutriscan",
    kind: "mobile",
    title: "NutriScan AI",
    subtitle: "Nutrition scan template (Flutter)",
    tags: ["Mobile", "Health", "AI"],
    logo: "/demos/logos/nutriscan.png",
    preview: { type: "appetize", embedUrl: process.env.NEXT_PUBLIC_APPETIZE_NUTRISCAN_URL ?? null },
  },
  {
    id: "societify",
    kind: "mobile",
    title: "Societify",
    subtitle: "Smart communities SaaS companion (Mobile app)",
    tags: ["Mobile", "SaaS", "Communities"],
    logo: "/demos/logos/societify.png",
    preview: { type: "appetize", embedUrl: process.env.NEXT_PUBLIC_APPETIZE_SOCIETIFY_URL ?? null },
  },

  {
    id: "stocky-saas",
    kind: "web",
    title: "Stocky POS + Inventory",
    subtitle: "SaaS preview (live demo)",
    tags: ["Web", "SaaS", "POS"],
    preview: { type: "link", url: "https://stockysaas.xyz/" },
  },
  {
    id: "the-bed-store",
    kind: "web",
    title: "The Bed Store",
    subtitle: "E-commerce storefront (live)",
    tags: ["Web", "E-commerce", "Storefront"],
    preview: { type: "link", url: "https://thebedstore.shop/" },
  },
  {
    id: "webby-vibecode",
    kind: "web",
    title: "Webby (AI No-Code Builder)",
    subtitle: "SaaS preview (live demo)",
    tags: ["Web", "SaaS", "AI"],
    preview: { type: "link", url: "https://webby.titansys.dev/" },
  },
];

export function getDemos() {
  return demos;
}
