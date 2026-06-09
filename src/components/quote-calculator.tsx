"use client";

import { useMemo, useState } from "react";
import { WA_URL } from "@/lib/config";

type ProjectType = "landing" | "website" | "ecommerce" | "mobile" | "saas";

const PROJECTS: { id: ProjectType; label: string; emoji: string; tiers: (number | null)[] }[] = [
  { id: "landing",   label: "Landing",  emoji: "🚀", tiers: [180, 320, null] },
  { id: "website",   label: "Website",  emoji: "🌐", tiers: [350, 650, 1000] },
  { id: "ecommerce", label: "E-comm",   emoji: "🛒", tiers: [560, 1050, 2000] },
  { id: "mobile",    label: "Mobile",   emoji: "📱", tiers: [1250, 2450, 4200] },
  { id: "saas",      label: "Web App",  emoji: "⚙️", tiers: [1750, 3500, 6300] },
];

const SCOPES = ["Simple", "Medium", "Complex"];

const ADDONS = [
  { id: "auth",     label: "Login / Auth",         price: 100 },
  { id: "payments", label: "Payments",             price: 200 },
  { id: "admin",    label: "Admin Panel",          price: 280 },
  { id: "push",     label: "Push Notifications",   price: 140 },
  { id: "lang",     label: "Multi-language",       price: 175 },
  { id: "ai",       label: "AI / Chatbot",         price: 350 },
  { id: "stores",   label: "App Store + Play Store",  price: 200 },
  { id: "anim",     label: "Premium Animations",   price: 200 },
];

export function QuoteCalculator() {
  const [type, setType] = useState<ProjectType>("mobile");
  const [scope, setScope] = useState(0);
  const [rush, setRush] = useState(false);
  const [picked, setPicked] = useState<Record<string, boolean>>({});

  const project = PROJECTS.find((p) => p.id === type)!;
  const range = useMemo(() => {
    const base = project.tiers[scope] ?? project.tiers.find((t) => t !== null) ?? 0;
    const extras = ADDONS.filter((a) => picked[a.id]).reduce((s, a) => s + a.price, 0);
    const sub = base + extras;
    const total = rush ? Math.round(sub * 1.3) : sub;
    return [Math.round(total * 0.95), Math.round(total * 1.1)] as const;
  }, [project, scope, picked, rush]);

  const addonNames = ADDONS.filter((a) => picked[a.id]).map((a) => a.label).join(", ") || "none";
  const summary = `Hi! Quote request: ${project.label} (${SCOPES[scope]}), add-ons: ${addonNames}, ${rush ? "rush 2wk" : "standard"}. Est. $${range[0]}–$${range[1]}.`;
  const waLink = `${WA_URL}?text=${encodeURIComponent(summary)}`;

  return (
    <div className="shell brutal-border brutal-shadow flex flex-col gap-4 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Instant Quote</p>
        <span className="brutal-border bg-[var(--color-accent)] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-black">No call needed</span>
      </div>

      <div className="space-y-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">1. What are you building?</p>
        <div className="grid grid-cols-5 gap-1.5">
          {PROJECTS.map((p) => (
            <button key={p.id} type="button"
              onClick={() => { setType(p.id); if (p.tiers[scope] == null) setScope(0); }}
              className={`brutal-border px-1 py-2 text-[10px] font-black uppercase transition ${type === p.id ? "bg-[var(--color-text)] text-[var(--color-bg)]" : "bg-white hover:bg-[var(--color-accent)]"}`}>
              <div className="mb-1 text-base leading-none">{p.emoji}</div>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">2. Scope</p>
        <div className="grid grid-cols-3 gap-1.5">
          {SCOPES.map((s, i) => {
            const disabled = project.tiers[i] == null;
            return (
              <button key={s} type="button" disabled={disabled} onClick={() => setScope(i)}
                className={`brutal-border px-2 py-2 text-[11px] font-black uppercase transition ${scope === i ? "bg-[var(--color-accent-strong)] text-black" : "bg-white hover:bg-[var(--color-accent-strong)]"} ${disabled ? "cursor-not-allowed opacity-30" : ""}`}>
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">3. Add-ons</p>
        <div className="grid grid-cols-2 gap-1.5">
          {ADDONS.map((a) => (
            <label key={a.id}
              className={`brutal-border flex cursor-pointer items-center justify-between gap-2 px-2 py-2 transition ${picked[a.id] ? "bg-[var(--color-teal)]" : "bg-white hover:bg-[rgba(255,250,241,0.92)]"}`}>
              <span className="flex items-center gap-2">
                <input type="checkbox" checked={!!picked[a.id]} onChange={() => setPicked((s) => ({ ...s, [a.id]: !s[a.id] }))} className="h-3 w-3 accent-black" />
                <span className="text-[10px] font-bold uppercase leading-tight tracking-[0.02em]">{a.label}</span>
              </span>
              <span className="font-mono text-[10px]">+${a.price}</span>
            </label>
          ))}
        </div>
      </div>

      <label className={`brutal-border flex cursor-pointer items-center justify-between gap-2 px-3 py-2 transition ${rush ? "bg-[var(--color-accent)]" : "bg-white"}`}>
        <span className="flex items-center gap-2 text-[11px] font-black uppercase">
          <input type="checkbox" checked={rush} onChange={(e) => setRush(e.target.checked)} className="h-3 w-3 accent-black" />
          Rush — 2 weeks
        </span>
        <span className="font-mono text-[10px]">+30%</span>
      </label>

      <div className="brutal-border bg-[var(--color-text)] p-4 text-[var(--color-bg)]">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">Your Estimate</p>
        <p className="mt-1 text-3xl font-black tracking-tight">${range[0].toLocaleString()} <span className="text-white/40">—</span> ${range[1].toLocaleString()}</p>
        <p className="mt-1 font-mono text-[10px] text-white/60">USD · {project.label} · {SCOPES[scope]}{rush ? " · Rush" : ""}</p>
      </div>

      <a href={waLink} target="_blank" rel="noreferrer"
        className="brutal-border brutal-shadow bg-[var(--color-accent-strong)] px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
        Lock this price → WhatsApp
      </a>
    </div>
  );
}
