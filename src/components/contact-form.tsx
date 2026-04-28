"use client";

import { useState } from "react";
import { WA_NUMBER, WA_URL } from "@/lib/config";

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const canSend = name.trim().length > 0 && message.trim().length > 0;

  const handleSend = () => {
    if (!canSend) return;
    const text = `Hi, I'm ${name.trim()}.\n\n${message.trim()}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="space-y-5">
        <div className="shell p-6">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Name
          </p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full brutal-border bg-[rgba(255,250,241,0.82)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] outline-none focus:bg-white transition"
          />
        </div>

        <div className="shell p-6">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Message
          </p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project..."
            rows={5}
            className="w-full brutal-border bg-[rgba(255,250,241,0.82)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] outline-none focus:bg-white transition resize-none"
          />
        </div>

        <button
          onClick={handleSend}
          disabled={!canSend}
          className={`brutal-border w-full py-4 text-sm font-black uppercase tracking-[0.18em] transition
            ${canSend
              ? "bg-[#25D366] text-white brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer"
              : "cursor-not-allowed bg-[var(--color-bg-soft)] text-[var(--color-muted)]"}
          `}
        >
          Send via WhatsApp →
        </button>
      </div>

      <div className="shell brutal-shadow p-6 flex flex-col justify-between">
        <div>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Or reach out directly
          </p>
          <div className="space-y-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="brutal-border brutal-shadow flex items-center gap-4 bg-[#25D366] px-5 py-4 transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              <span className="text-xl">💬</span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.12em] text-white">WhatsApp</p>
                <p className="font-mono text-[11px] text-white/80">+962 797 205 018</p>
              </div>
            </a>
          </div>
        </div>
        <p className="mt-8 text-sm leading-7 text-[var(--color-muted)]">
          Available for freelance projects, full builds, and ongoing work. Usually reply within a few hours.
        </p>
      </div>
    </div>
  );
}
