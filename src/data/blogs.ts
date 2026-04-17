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
    category: "Business",
    date: "April 2026",
    readTime: "5 min read",
    excerpt:
      "Most business owners don't know their website is driving people away — because the people just leave. Here are the five signs to look for, and what to do about each one.",
  },
  {
    slug: "claude-code-how-to-use-it",
    title: "Claude Code: How to Actually Use It to Build Faster",
    category: "Tools",
    date: "April 2026",
    readTime: "6 min read",
    excerpt:
      "Claude Code is not a chatbot with a terminal skin. It reads your whole codebase, runs commands, edits files, and iterates on errors. Here's how to actually get value out of it.",
  },
];

export function getBlogs() {
  return blogs;
}

export function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}
