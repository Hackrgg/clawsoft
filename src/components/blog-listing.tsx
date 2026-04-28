"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import type { Blog } from "@/data/blogs";

const POSTS_PER_PAGE = 6;

export function BlogListing({ blogs }: { blogs: Blog[] }) {
  const categories = useMemo(() => {
    const all = blogs.map((b) => b.category);
    return ["All", ...Array.from(new Set(all))];
  }, [blogs]);

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return blogs.filter((b) => {
      const matchCategory = activeCategory === "All" || b.category === activeCategory;
      const matchSearch =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [blogs, search, activeCategory]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setPage(1);
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    setPage(1);
  }

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Search + filters */}
        <div className="space-y-4">
          <div className="brutal-border bg-white flex items-center gap-3 px-4 py-3">
            <svg className="shrink-0 text-[var(--color-muted)]" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search posts..."
              className="flex-1 bg-transparent font-mono text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] outline-none uppercase tracking-[0.12em]"
            />
            {search && (
              <button
                onClick={() => { setSearch(""); setPage(1); }}
                className="font-mono text-[11px] text-[var(--color-muted)] hover:text-[var(--color-text)] uppercase tracking-[0.18em]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`brutal-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition hover:translate-x-[1px] hover:translate-y-[1px] ${
                  activeCategory === cat
                    ? "bg-[var(--color-text)] text-[var(--color-bg)]"
                    : "bg-white text-[var(--color-text)] brutal-shadow hover:shadow-none"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)] self-center">
              {filtered.length} post{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Posts */}
        {paginated.length === 0 ? (
          <div className="shell p-12 text-center space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">No results</p>
            <p className="text-sm text-[var(--color-muted)]">Try a different search or category.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {paginated.map((blog) => (
              <article key={blog.slug} className="shell brutal-shadow p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <span className="brutal-border bg-[var(--color-teal)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-black">
                        {blog.category}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        {blog.date} · {blog.readTime}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[var(--color-text)] sm:text-3xl">
                        {blog.title}
                      </h2>
                      <p className="pt-3 text-base leading-7 text-[var(--color-muted)]">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="brutal-border brutal-shadow bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none whitespace-nowrap"
                    >
                      Read Post →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t-2 border-[rgba(44,35,28,0.15)] pt-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="brutal-border brutal-shadow bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Prev
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`brutal-border w-10 h-10 font-mono text-[11px] uppercase tracking-[0.18em] transition hover:translate-x-[1px] hover:translate-y-[1px] ${
                    p === page
                      ? "bg-[var(--color-text)] text-[var(--color-bg)]"
                      : "bg-white text-[var(--color-text)] brutal-shadow hover:shadow-none"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="brutal-border brutal-shadow bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-30 disabled:pointer-events-none"
            >
              Next →
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
