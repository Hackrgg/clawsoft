import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getBlogs } from "@/data/blogs";
import { BlogListing } from "@/components/blog-listing";

const blogs = getBlogs();

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <SiteHeader />

      <section className="dot-grid border-b-2 border-[rgba(44,35,28,0.85)] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="brutal-border brutal-shadow bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Back
            </Link>
            <span className="brutal-border bg-[var(--color-accent)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-black brutal-shadow">
              Blog
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h1 className="text-4xl font-black uppercase tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
              Writes and thoughts.
            </h1>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
              Web development, tools, security — things worth writing down.
            </p>
          </div>
        </div>
      </section>

      <BlogListing blogs={blogs} />

      <SiteFooter />
    </main>
  );
}
