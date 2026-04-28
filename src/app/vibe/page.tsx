"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/site-header";

type Message = {
  role: "user" | "assistant";
  content: string;
  tokens?: number;
};


const STARTERS = [
  "A landing page for a food delivery app",
  "A SaaS pricing page with 3 tiers",
  "A portfolio hero section with animations",
  "A dark dashboard UI with charts",
  "A mobile app showcase page",
];

export default function VibePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [remaining, setRemaining] = useState<number | null>(null);
  const [rightTab, setRightTab] = useState<"code" | "files">("code");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  async function generate(overridePrompt?: string) {
    const p = (overridePrompt ?? prompt).trim();
    if (!p || loading) return;

    const userMsg: Message = { role: "user", content: p };
    setMessages((m) => [...m, userMsg]);
    setPrompt("");
    setLoading(true);
    setError("");

    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);

    try {
      const res = await fetch("/api/vibe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: p, currentCode: code || null }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Generation failed");

      const { code: generated, remaining: rem, tokensUsed } = data;
      setCode(generated);
      if (rem !== undefined) setRemaining(rem);

      const lines = generated.split("\n").length;
      const assistantMsg: Message = {
        role: "assistant",
        content: `Done. Generated ${lines} lines of code.`,
        tokens: tokensUsed,
      };
      setMessages((m) => [...m, assistantMsg]);
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      setError(msg);
      setMessages((m) => [...m, { role: "assistant", content: `Error: ${msg}` }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generate();
    }
  }

  return (
    <>
      <SiteHeader />

      {/* Top bar */}
      <div className="shrink-0 border-b-2 border-[rgba(44,35,28,0.85)] px-5 py-3 flex items-center gap-3 bg-[var(--color-bg)]">
        <Link
          href="/"
          className="brutal-border brutal-shadow bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          ← Back
        </Link>
        <span className="brutal-border brutal-shadow bg-[var(--color-teal)] px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.24em] text-black">
          Vibe Coding
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)] ml-2">
          Powered by GPT-4.1
        </span>
        {remaining !== null && (
          <span className={`ml-auto font-mono text-[10px] uppercase tracking-[0.16em] ${remaining <= 5 ? "text-red-500 font-bold" : "text-[var(--color-muted)]"}`}>
            {remaining}/20 generations left today
          </span>
        )}
      </div>

      {/* 3-panel layout */}
      <div
        className="flex overflow-hidden"
        style={{ height: "calc(100vh - 89px - 45px)" }}
      >
        {/* LEFT — Chat */}
        <div className="flex flex-col border-r-2 border-[rgba(44,35,28,0.85)]" style={{ width: "280px", minWidth: "280px" }}>
          {/* Panel header */}
          <div className="shrink-0 border-b-2 border-[rgba(44,35,28,0.85)] px-4 py-2.5 flex items-center justify-between">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text)]">Chat</span>
            {messages.length > 0 && (
              <button
                onClick={() => { setMessages([]); setCode(""); }}
                className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)] hover:text-[var(--color-text)] transition"
              >
                Clear
              </button>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.length === 0 && (
              <div className="space-y-2 pt-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)] px-1">Try one of these</p>
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => generate(s)}
                    className="w-full text-left brutal-border bg-[rgba(255,250,241,0.82)] px-3 py-2 font-mono text-[10px] leading-5 text-[var(--color-muted)] hover:text-[var(--color-text)] transition brutal-shadow hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  {msg.role === "user" ? "You" : "GPT-4.1"}
                </span>
                <div
                  className={`brutal-border px-3 py-2 text-xs leading-5 max-w-[220px] ${
                    msg.role === "user"
                      ? "bg-[var(--color-text)] text-[var(--color-bg)]"
                      : msg.content.startsWith("Error")
                      ? "bg-red-50 text-red-600"
                      : "bg-[rgba(255,250,241,0.82)] text-[var(--color-text)]"
                  }`}
                >
                  {msg.content}
                  {msg.tokens && (
                    <span className="block mt-1 font-mono text-[9px] opacity-50">{msg.tokens.toLocaleString()} tokens</span>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex flex-col items-start gap-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--color-muted)]">GPT-4.1</span>
                <div className="brutal-border bg-[rgba(255,250,241,0.82)] px-3 py-2">
                  <div className="flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="shrink-0 border-t-2 border-[rgba(44,35,28,0.85)] p-3">
            <div className="brutal-border brutal-shadow flex overflow-hidden bg-white">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKey}
                rows={2}
                placeholder="Describe what to build..."
                className="flex-1 resize-none bg-transparent px-3 py-2 text-xs font-mono text-[var(--color-text)] placeholder:text-[var(--color-muted)] outline-none"
              />
              <button
                onClick={() => generate()}
                disabled={loading || !prompt.trim()}
                className="shrink-0 border-l-2 border-[rgba(44,35,28,0.85)] bg-[var(--color-accent)] px-3 font-black text-[10px] uppercase tracking-[0.14em] text-black transition hover:bg-[var(--color-accent-strong)] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
            <p className="mt-1 font-mono text-[9px] text-[var(--color-muted)]">Enter to send · Shift+Enter for new line</p>
          </div>
        </div>

        {/* MIDDLE — Preview */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="shrink-0 border-b-2 border-[rgba(44,35,28,0.85)] px-4 py-2.5 flex items-center justify-between">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text)]">Preview</span>
            {code && (
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">Live</span>
            )}
          </div>

          {!code ? (
            <div className="flex-1 flex items-center justify-center bg-[var(--color-bg)]">
              <div className="text-center space-y-3">
                <p className="text-4xl">⚡</p>
                <p className="font-black uppercase tracking-[-0.02em] text-[var(--color-text)]">Nothing yet.</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Send a message to generate</p>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.iframe
                key={code.length}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                srcDoc={code}
                className="flex-1 w-full border-0"
                sandbox="allow-scripts allow-same-origin"
                title="Preview"
              />
            </AnimatePresence>
          )}
        </div>

        {/* RIGHT — Code & Files */}
        <div className="flex flex-col border-l-2 border-[rgba(44,35,28,0.85)]" style={{ width: "320px", minWidth: "320px" }}>
          {/* Tabs */}
          <div className="shrink-0 border-b-2 border-[rgba(44,35,28,0.85)] flex items-center">
            {(["code", "files"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setRightTab(tab)}
                className={`px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] border-r-2 border-[rgba(44,35,28,0.85)] transition ${
                  rightTab === tab
                    ? "bg-[var(--color-text)] text-[var(--color-bg)] font-bold"
                    : "bg-[var(--color-bg)] text-[var(--color-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {tab}
              </button>
            ))}
            {code && rightTab === "code" && (
              <span className="ml-auto pr-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[#666]">
                ✎ editable
              </span>
            )}
          </div>

          {rightTab === "code" ? (
            <div className="flex-1 relative bg-[#0f0f0f] overflow-hidden">
              {code ? (
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck={false}
                  className="absolute inset-0 w-full h-full resize-none bg-transparent p-4 font-mono text-[11px] leading-6 text-[#a8ff78] outline-none"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#444]">No code yet</p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex-1 overflow-auto bg-[#0f0f0f] p-3">
              <div
                className={`flex items-center gap-2 px-3 py-2 rounded font-mono text-[11px] cursor-default ${
                  code ? "text-[#a8ff78]" : "text-[#444]"
                }`}
              >
                <span>📄</span>
                <span>index.html</span>
                {code && <span className="ml-auto text-[#555] text-[10px]">{code.split("\n").length} lines</span>}
              </div>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 brutal-border brutal-shadow bg-white px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-red-600 z-50"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
