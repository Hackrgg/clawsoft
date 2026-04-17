import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getBlog, getBlogs } from "@/data/blogs";
import { ClaudeCodePost } from "@/components/blog/claude-code-post";
import { FiveSignsPost } from "@/components/blog/five-signs-post";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogs().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return { title: "Post not found" };
  return { title: blog.title, description: blog.excerpt };
}

const postComponents: Record<string, React.ComponentType> = {
  "claude-code-how-to-use-it": ClaudeCodePost,
  "5-signs-your-website-is-losing-customers": FiveSignsPost,
};

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();

  const PostContent = postComponents[slug];
  if (!PostContent) notFound();

  const allBlogs = getBlogs();
  const related = allBlogs.filter((b) => b.slug !== slug);

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <SiteHeader />

      <section className="dot-grid border-b-2 border-[rgba(44,35,28,0.85)] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="brutal-border brutal-shadow bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              ← Blog
            </Link>
            <span className="brutal-border bg-[var(--color-teal)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-black">
              {blog.category}
            </span>
            <span className="brutal-border bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-black">
              {blog.date} · {blog.readTime}
            </span>
          </div>
          <h1 className="text-3xl font-black uppercase tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            {blog.excerpt}
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <PostContent />
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t-2 border-[rgba(44,35,28,0.85)] px-5 py-14 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Read next
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="shell brutal-shadow block p-6 space-y-3 transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  <div className="flex flex-wrap gap-2">
                    <span className="brutal-border bg-[var(--color-teal)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-black">
                      {post.category}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-[-0.02em] text-[var(--color-text)]">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--color-muted)]">{post.excerpt}</p>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text)]">
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
