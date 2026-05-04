import Link from "next/link";
import { WA_URL } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-[rgba(44,35,28,0.85)] bg-[var(--color-text)] px-5 pt-16 pb-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Top — logo + mission */}
        <div className="mb-14 border-b border-white/10 pb-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <span className="text-4xl font-black tracking-tight text-white">CLAWSOFT</span>
              <span className="text-4xl font-black text-[var(--color-accent)]">.</span>
            </Link>
            <p className="max-w-md text-base leading-8 text-white/50">
              We design and build digital products — websites, web apps, and browser extensions. Clean work, shipped fast, built to last.
            </p>
          </div>

          <div className="lg:text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/30 mb-3">Currently accepting work</p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="brutal-border inline-block bg-[var(--color-accent)] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:opacity-90"
            >
              Let&apos;s Build
            </a>
          </div>
        </div>

        {/* Bottom — nav + copy */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/work", label: "Work" },
              { href: "/blog", label: "Blog" },
              { href: "/#about", label: "About" },
              { href: "/#stack", label: "Stack" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/25">
            © {new Date().getFullYear()} Clawsoft
          </p>
        </div>

      </div>
    </footer>
  );
}
