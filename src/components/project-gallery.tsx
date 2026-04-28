"use client";

import { useState } from "react";

type Props = {
  screenshots?: string[];
  name: string;
};

const PLACEHOLDERS = [null, null, null, null, null];

export function ProjectGallery({ screenshots, name }: Props) {
  const images = screenshots && screenshots.length > 0 ? screenshots : PLACEHOLDERS;
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div
        className="relative brutal-border overflow-hidden bg-[#18140f] mx-auto flex items-center justify-center"
        style={{ maxWidth: "70%", minHeight: 300 }}
      >
        {images[active] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images[active]!}
            alt={`${name} screenshot ${active + 1}`}
            style={{ maxHeight: 520, maxWidth: "100%", width: "auto", height: "auto", display: "block" }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-24">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="opacity-20" style={{ color: "#fff" }}>
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
            </svg>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-30" style={{ color: "#fff" }}>
              Demo {active + 1}
            </span>
          </div>
        )}

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 brutal-border bg-white px-3 py-2 text-sm font-black text-[var(--color-text)] transition hover:bg-[var(--color-accent)] hover:translate-x-[-1px]"
        >
          ←
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 brutal-border bg-white px-3 py-2 text-sm font-black text-[var(--color-text)] transition hover:bg-[var(--color-accent)] hover:translate-x-[1px]"
        >
          →
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 brutal-border bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text)]">
          {active + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 justify-center flex-wrap">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`brutal-border overflow-hidden transition bg-[#18140f] flex items-center justify-center ${
              i === active
                ? "ring-2 ring-[var(--color-text)] ring-offset-1"
                : "opacity-50 hover:opacity-100"
            }`}
            style={{ width: 72, height: 56, flexShrink: 0 }}
          >
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={`${name} thumb ${i + 1}`} style={{ maxHeight: "100%", maxWidth: "100%", width: "auto", height: "auto" }} />
            ) : (
              <span className="font-mono text-[9px] opacity-30" style={{ color: "#fff" }}>{i + 1}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
