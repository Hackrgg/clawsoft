"use client";

import { useRef, useState } from "react";
import { WA_URL } from "@/lib/config";

type Quote = {
  summary: string;
  priceLow: number;
  priceHigh: number;
  deliveryLowDays: number;
  deliveryHighDays: number;
  pitch: string;
};

const PROJECT_TYPES = [
  "Landing Page",
  "E-commerce Store",
  "Mobile App",
  "Web App / SaaS Platform",
  "Browser Extension",
  "Not sure yet",
] as const;

type ProjectType = (typeof PROJECT_TYPES)[number];

const ADDONS_BY_TYPE: Record<ProjectType, string[]> = {
  "Landing Page": [
    "Copywriting",
    "Custom Animations",
    "SEO Setup",
    "Contact Form",
    "Newsletter Signup",
    "Multi-language",
    "Analytics Setup",
    "Premium Graphics",
  ],
  "E-commerce Store": [
    "Login / Auth",
    "Admin Panel",
    "Discount & Coupon System",
    "Inventory Management",
    "Multi-language",
    "Premium Animations",
    "Landing Page",
    "Analytics Setup",
  ],
  "Mobile App": [
    "Login / Auth",
    "Payments",
    "Push Notifications",
    "Admin Panel",
    "App Store + Play Store",
    "AI / Chatbot",
    "Multi-language",
    "Landing Page",
  ],
  "Web App / SaaS Platform": [
    "Login / Auth",
    "Payments / Billing",
    "Admin Panel",
    "AI / Chatbot",
    "Multi-language",
    "Analytics Dashboard",
    "Premium Animations",
    "Landing Page",
  ],
  "Browser Extension": [
    "Login / Auth",
    "Premium Unlock / Payments",
    "Usage Dashboard",
    "Multi-language",
    "AI / Chatbot",
    "Analytics Setup",
    "Landing Page",
    "Premium Animations",
  ],
  "Not sure yet": [
    "Login / Auth",
    "Payments",
    "Admin Panel",
    "Multi-language",
    "AI / Chatbot",
    "Landing Page",
    "Analytics Setup",
    "Premium Animations",
  ],
};

function formatDelivery(low: number, high: number): string {
  if (high <= 13) return `${low}–${high} days`;
  return `${Math.round(low / 7)}–${Math.round(high / 7)} weeks`;
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function QuoteCalculator() {
  const [projectType, setProjectType] = useState<ProjectType | "">("");
  const [addons, setAddons] = useState<string[]>([]);
  const [addonsOpen, setAddonsOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<{ name: string; url: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quote, setQuote] = useState<Quote | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const availableAddons = projectType ? ADDONS_BY_TYPE[projectType] : [];

  function selectType(t: string) {
    setProjectType(t as ProjectType | "");
    setAddons([]);
    setAddonsOpen(false);
  }

  function toggleAddon(a: string) {
    setAddons((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));
  }

  async function handleFiles(files: FileList | null) {
    if (!files) return;
    const next = [...images];
    for (const file of Array.from(files).slice(0, 4 - images.length)) {
      if (!file.type.startsWith("image/")) continue;
      const url = await fileToDataUrl(file);
      next.push({ name: file.name, url });
    }
    setImages(next);
  }

  function removeImage(i: number) {
    setImages((imgs) => imgs.filter((_, idx) => idx !== i));
  }

  async function getQuote() {
    if (!description.trim() || loading) return;
    setLoading(true);
    setError("");
    setQuote(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, projectType, addons, images: images.map((i) => i.url) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setQuote(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  const summary = quote
    ? `Hi! Project: ${projectType ? `${projectType} — ` : ""}${description.slice(0, 300)}${description.length > 300 ? "…" : ""}${addons.length ? `\nAdd-ons: ${addons.join(", ")}` : ""}\n\nQuoted: $${quote.priceLow}–$${quote.priceHigh}, ~${formatDelivery(quote.deliveryLowDays, quote.deliveryHighDays)}. Fixed-price — full source code handed over, not a hire/retainer.`
    : "";
  const waLink = `${WA_URL}?text=${encodeURIComponent(summary)}`;

  return (
    <div className="shell brutal-border brutal-shadow flex flex-col gap-4 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">AI Instant Quote</p>
        <span className="brutal-border bg-[var(--color-accent)] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-black">No call needed</span>
      </div>
      <p className="-mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
        Fixed price · full source code handed over · not a hire or retainer
      </p>

      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-muted)]">What are you building?</p>
          <select
            value={projectType}
            onChange={(e) => selectType(e.target.value)}
            className="brutal-border w-full bg-white px-2.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.04em] text-[var(--color-text)] focus:outline-none"
          >
            <option value="">Select one</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="relative space-y-1">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Add-ons</p>
          <button
            type="button"
            onClick={() => projectType && setAddonsOpen((v) => !v)}
            disabled={!projectType}
            className="brutal-border flex w-full items-center justify-between bg-white px-2.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.04em] text-[var(--color-text)] disabled:opacity-40"
          >
            {!projectType ? "Pick a type first" : addons.length ? `${addons.length} selected` : "Select"}
            <span className="text-[9px]">{addonsOpen ? "▲" : "▼"}</span>
          </button>
          {addonsOpen && projectType && (
            <div className="brutal-border brutal-shadow absolute left-0 right-0 top-full z-10 mt-1 max-h-48 overflow-y-auto bg-white p-1.5">
              {availableAddons.map((a) => (
                <label key={a} className="flex cursor-pointer items-center gap-2 px-1.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.02em] hover:bg-[var(--color-accent)]">
                  <input type="checkbox" checked={addons.includes(a)} onChange={() => toggleAddon(a)} className="h-3 w-3 accent-black" />
                  {a}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Tell us about your project</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={`e.g. "I need a website for my gym with class booking, and eventually a mobile app for members too. Attached a couple of sites I like the look of."`}
          rows={5}
          className="brutal-border w-full resize-none bg-white p-3 font-mono text-[12px] leading-relaxed text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none"
        />

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={images.length >= 4}
            className="brutal-border bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text)] transition hover:bg-[var(--color-accent)] disabled:opacity-40"
          >
            + Attach reference image
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          {images.map((img, i) => (
            <span key={i} className="brutal-border flex items-center gap-1.5 bg-white px-2 py-1 font-mono text-[9px] uppercase text-[var(--color-muted)]">
              {img.name.slice(0, 14)}
              <button type="button" onClick={() => removeImage(i)} className="text-[var(--color-text)] hover:text-[var(--color-accent-strong)]">✕</button>
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={getQuote}
        disabled={!description.trim() || loading}
        className="brutal-border brutal-shadow bg-[var(--color-accent-strong)] px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0_rgba(44,35,28,0.9)]"
      >
        {loading ? "Reading your project…" : "Get my instant quote"}
      </button>

      {error && (
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-red-700">{error}</p>
      )}

      {quote && (
        <div className="space-y-3">
          <p className="font-mono text-[11px] leading-relaxed text-[var(--color-muted)]">{quote.summary}</p>

          <div className="brutal-border bg-[var(--color-text)] p-4 text-[var(--color-bg)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">Your Estimate</p>
            <p className="mt-1 text-3xl font-black tracking-tight">${quote.priceLow.toLocaleString()} <span className="text-white/40">—</span> ${quote.priceHigh.toLocaleString()}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">Est. delivery: {formatDelivery(quote.deliveryLowDays, quote.deliveryHighDays)}</p>
          </div>

          <p className="brutal-border bg-[var(--color-teal)] p-3 font-mono text-[11px] leading-relaxed text-black">{quote.pitch}</p>

          <a href={waLink} target="_blank" rel="noreferrer"
            className="brutal-border brutal-shadow flex items-center justify-center bg-[#25D366] px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-white transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
            Continue on WhatsApp →
          </a>
        </div>
      )}
    </div>
  );
}
