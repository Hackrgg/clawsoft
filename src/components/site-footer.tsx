import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-[rgba(44,35,28,0.85)] bg-[var(--color-text)] px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr]">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block text-2xl font-extrabold tracking-tight text-[var(--color-accent)]">
              DIGUZ
              <span className="ml-0.5 text-3xl leading-none text-white">.</span>
            </Link>
            <p className="max-w-xs text-sm leading-7 text-white/50">
              Websites, web apps, browser extensions — built and shipped. Available for new work.
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/40">Pages</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/work", label: "Work" },
                { href: "/blog", label: "Blog" },
                { href: "/#stack", label: "Stack" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-white/70 transition hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/40">Contact</p>
            <div className="space-y-3">
              <a
                href="https://wa.me/962797205018"
                target="_blank"
                rel="noreferrer"
                className="brutal-border flex w-fit items-center gap-3 bg-[#25D366] px-4 py-2.5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:opacity-90"
              >
                💬 WhatsApp
              </a>
              <p className="font-mono text-[11px] text-white/40">+962 797 205 018</p>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
            © {new Date().getFullYear()} Diguz. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
            Available for projects
          </p>
        </div>
      </div>
    </footer>
  );
}
