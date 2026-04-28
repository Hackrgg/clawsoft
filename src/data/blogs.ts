export type Blog = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
};

export const blogs: Blog[] = [
  {
    slug: "5-signs-your-website-is-losing-customers",
    title: "5 Signs Your Business Website Is Losing You Customers",
    category: "Conversion",
    date: "April 2026",
    readTime: "5 min read",
    excerpt:
      "Most business owners don't know their website is driving people away — because the people just leave. Here are the five signs to look for, and what to do about each one.",
  },
  {
    slug: "claude-code-how-to-use-it",
    title: "Claude Code: How to Actually Use It to Build Faster",
    category: "Dev Tools",
    date: "April 2026",
    readTime: "6 min read",
    excerpt:
      "Claude Code is not a chatbot with a terminal skin. It reads your whole codebase, runs commands, edits files, and iterates on errors. Here's how to actually get value out of it.",
  },
  {
    slug: "how-much-does-a-website-cost",
    title: "How Much Does a Website Cost in 2026?",
    category: "Pricing",
    date: "April 2026",
    readTime: "6 min read",
    excerpt:
      "Basic site: $500–$3k. Business site with CMS: $3k–$10k. Custom web app: $10k–$50k+. Here's what actually drives the price — and what to watch out for when getting quotes.",
  },
  {
    slug: "wordpress-vs-custom-website",
    title: "WordPress vs Custom Website: Which One Does Your Business Actually Need?",
    category: "CMS",
    date: "April 2026",
    readTime: "5 min read",
    excerpt:
      "WordPress is great at what it was built for. A custom build is better when your site needs to do things WordPress wasn't designed for. Here's how to decide.",
  },
  {
    slug: "get-more-customers-from-your-website",
    title: "How to Get More Customers From Your Website (Without More Traffic)",
    category: "Conversion",
    date: "April 2026",
    readTime: "6 min read",
    excerpt:
      "More ads won't fix a site that's already losing visitors. Six things to fix on your site that will convert more of the traffic you already have.",
  },
  {
    slug: "saas-seo-how-to-get-found",
    title: "SaaS SEO: How to Get Your Product Found on Google Without Paying for Ads",
    category: "SEO",
    date: "April 2026",
    readTime: "7 min read",
    excerpt:
      "Ads stop when you stop paying. SEO compounds. Here's the full strategy — problem pages, category pages, comparison pages, and the technical foundations — that turns Google into a sign-up machine.",
  },
  {
    slug: "what-is-a-web-app",
    title: "What Is a Web App and Does Your Business Need One?",
    category: "Web Apps",
    date: "April 2026",
    readTime: "5 min read",
    excerpt:
      "A website shows information. A web app does something. If your customers need to log in, book, buy, or manage anything — you probably need a web app. Here's how to tell.",
  },
  {
    slug: "hire-web-developer",
    title: "How to Hire a Web Developer: What to Look for and What to Avoid",
    category: "Hiring",
    date: "April 2026",
    readTime: "6 min read",
    excerpt:
      "Hiring a web developer is straightforward when you know what to look for — and expensive when you don't. Most bad hires come down to the same handful of mistakes.",
  },
  {
    slug: "how-long-does-a-website-take",
    title: "How Long Does It Take to Build a Website?",
    category: "Web Dev",
    date: "April 2026",
    readTime: "5 min read",
    excerpt:
      "A simple site: 2–4 weeks. A business site with CMS: 4–8 weeks. A custom web app: 3–6 months. The real variable isn't the developer — it's how ready you are.",
  },
  {
    slug: "freelance-developer-vs-agency",
    title: "Freelance Developer vs Agency: Which Is Right for Your Project?",
    category: "Hiring",
    date: "April 2026",
    readTime: "5 min read",
    excerpt:
      "Freelancers are faster and cheaper for well-defined projects. Agencies are better when you need a team or a process. The wrong choice mostly comes from mismatched expectations.",
  },
  {
    slug: "how-much-does-a-mobile-app-cost",
    title: "How Much Does a Mobile App Cost to Build in 2026?",
    category: "Pricing",
    date: "April 2026",
    readTime: "6 min read",
    excerpt:
      "A simple MVP: $5k–$20k. A full-featured consumer app: $20k–$80k. A platform with real-time features: $80k+. Here's what actually drives the price.",
  },
  {
    slug: "when-does-your-business-need-a-mobile-app",
    title: "Does Your Business Need a Mobile App? Here's How to Tell",
    category: "Mobile Apps",
    date: "April 2026",
    readTime: "5 min read",
    excerpt:
      "Most businesses don't need a mobile app — they need a better mobile website. But when users come back daily, work offline, or use device features, an app is the right answer.",
  },
  {
    slug: "multi-vendor-food-ordering-app",
    title: "What a Multi-Vendor Food Ordering App Needs to Get Right",
    category: "Food Delivery",
    date: "April 2026",
    readTime: "6 min read",
    excerpt:
      "Multi-vendor food apps look simple from the outside. But three user types, real-time state everywhere, and failure at every handoff make them one of the harder products to build well.",
  },
  {
    slug: "flutter-vs-react-native",
    title: "Flutter vs React Native: Which Should You Build Your App With?",
    category: "Mobile Apps",
    date: "April 2026",
    readTime: "6 min read",
    excerpt:
      "Flutter gives you more consistent performance and better visuals. React Native is easier if your team already knows JavaScript. Here's the full breakdown.",
  },
];

export function getBlogs() {
  return blogs;
}

export function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}
