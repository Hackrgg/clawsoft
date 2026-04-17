import Link from "next/link";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "https://wa.me/962797205018", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[rgba(44,35,28,0.9)] bg-[rgba(246,239,227,0.9)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-5 py-4 sm:px-8 lg:px-10 relative">
        <Link
          href="/"
          className="absolute left-5 sm:left-8 lg:left-10 text-xl font-extrabold tracking-tight text-[var(--color-text)]"
        >
          DIGUZ
          <span className="ml-0.5 text-2xl leading-none text-[var(--color-accent)]">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
