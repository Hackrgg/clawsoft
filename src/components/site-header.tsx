"use client";

import { useState } from "react";
import Link from "next/link";
import { WA_URL } from "@/lib/config";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/blog", label: "Blog" },
  { href: WA_URL, label: "Contact" },
];

export function SiteHeader() {
  const [hovered, setHovered] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[rgba(44,35,28,0.9)] bg-[rgba(246,239,227,0.9)] backdrop-blur-md">
      <a
        href={WA_URL}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="block border-b border-[rgba(44,35,28,0.15)] bg-[var(--color-text)] py-2 text-center font-mono text-[11px] uppercase tracking-[0.12em] transition-all duration-300 whitespace-nowrap overflow-hidden cursor-pointer"
        style={{ background: hovered ? "var(--color-accent)" : "var(--color-text)" }}
      >
        {!hovered ? (
          <span className="flex items-center justify-center gap-3">
            <span className="animate-bounce inline-block text-[var(--color-teal)]" style={{ animationDelay: "0ms" }}>
              →
            </span>
            <span className="animate-bounce inline-block text-[var(--color-accent-strong)]" style={{ animationDelay: "100ms" }}>
              →
            </span>
            <span className="text-[var(--color-accent)] font-black tracking-[0.18em]">BOOK YOUR DEMO</span>
            <span className="animate-bounce inline-block text-[var(--color-accent-strong)]" style={{ animationDelay: "100ms" }}>
              ←
            </span>
            <span className="animate-bounce inline-block text-[var(--color-teal)]" style={{ animationDelay: "0ms" }}>
              ←
            </span>
          </span>
        ) : (
          <span className="text-black font-black tracking-[0.12em]">
            We&apos;ll prototype it first (on the house) — <span className="underline underline-offset-2">then you decide</span>
          </span>
        )}
      </a>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-5 py-4 sm:px-8 lg:px-10 relative">
        <Link
          href="/"
          className="absolute left-5 sm:left-8 lg:left-10 text-xl font-extrabold tracking-tight text-[var(--color-text)]"
        >
          CLAWSOFT
          <span className="ml-0.5 text-2xl leading-none text-[var(--color-accent)]">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
