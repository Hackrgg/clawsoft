import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 bg-[var(--color-bg)]">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)] mb-4">
          404
        </p>
        <h1 className="text-5xl font-black uppercase tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl">
          Nothing here.
        </h1>
        <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
          That page doesn't exist.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="brutal-border brutal-shadow bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="brutal-border brutal-shadow bg-[var(--color-accent)] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Work
          </Link>
        </div>
      </div>
    </main>
  );
}
