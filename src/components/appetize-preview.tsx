"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    appetize?: {
      getClient: (selector: string, config?: Record<string, unknown>) => Promise<{
        startSession: (config?: Record<string, unknown>) => Promise<{ end: () => Promise<void> }>;
        endSession: () => Promise<void>;
        on: (event: string, listener: (...args: unknown[]) => void) => void;
      }>;
    };
  }
}

const APPETIZE_SDK_SRC = "https://js.appetize.io/embed.js";

function useAppetizeSdkLoaded() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.appetize?.getClient) {
      setLoaded(true);
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${APPETIZE_SDK_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => setLoaded(true));
      existing.addEventListener("error", () => setLoaded(false));
      return;
    }

    const script = document.createElement("script");
    script.src = APPETIZE_SDK_SRC;
    script.async = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => setLoaded(false);
    document.head.appendChild(script);
  }, []);

  return loaded;
}

function sanitizeEmbedUrl(url: string) {
  try {
    const u = new URL(url);
    u.searchParams.delete("autoplay");
    return u.toString();
  } catch {
    return url;
  }
}

export function AppetizePreview({
  embedUrl,
  title,
  seconds = 40,
}: {
  embedUrl: string;
  title: string;
  seconds?: number;
}) {
  const sdkLoaded = useAppetizeSdkLoaded();
  const reactId = useId();
  const iframeId = useMemo(() => `appetize-${reactId.replace(/:/g, "")}`, [reactId]);
  const [state, setState] = useState<"idle" | "starting" | "running" | "ended">("idle");
  const [remaining, setRemaining] = useState(seconds);
  const sessionRef = useRef<{ end: () => Promise<void> } | null>(null);
  const timerRef = useRef<number | null>(null);

  const safeUrl = useMemo(() => sanitizeEmbedUrl(embedUrl), [embedUrl]);
  const isEmbedUrl = useMemo(() => {
    try {
      const u = new URL(safeUrl);
      return u.pathname.startsWith("/embed/");
    } catch {
      return false;
    }
  }, [safeUrl]);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
      sessionRef.current?.end?.().catch(() => {});
      sessionRef.current = null;
    };
  }, []);

  async function start() {
    if (!isEmbedUrl) return;
    if (!sdkLoaded) return;
    if (!window.appetize?.getClient) return;

    setState("starting");
    setRemaining(seconds);

    const client = await window.appetize.getClient(`#${iframeId}`);
    const session = await client.startSession();
    sessionRef.current = session;

    setState("running");

    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setRemaining((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          window.clearInterval(timerRef.current!);
          timerRef.current = null;
          sessionRef.current?.end?.().catch(() => {});
          sessionRef.current = null;
          setState("ended");
          return 0;
        }
        return next;
      });
    }, 1000);
  }

  return (
    <div className="relative w-full h-full">
      {isEmbedUrl ? (
        <iframe
          id={iframeId}
          src={safeUrl}
          className="w-full h-full border-0"
          title={title}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          allow="clipboard-read; clipboard-write"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center px-7 text-center">
          <p className="font-black uppercase tracking-[-0.01em] text-white text-sm">Interactive demo</p>
          <p className="mt-2 text-[13px] leading-snug text-[rgba(255,255,255,0.65)]">
            Your Appetize plan disables in-page embeds. Open the demo in a new tab.
          </p>
          <a
            href={safeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 brutal-border brutal-shadow bg-[var(--color-accent)] px-4 py-2 text-[12px] font-semibold text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Open demo ↗
          </a>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.5)]">
            Sessions still hard-stop at {seconds}s.
          </p>
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none flex items-end justify-between p-4">
        <div className="pointer-events-auto">
          {state === "running" ? (
            <span className="brutal-border brutal-shadow bg-white px-3 py-1.5 text-[12px] font-semibold text-black">
              Demo ends in {remaining}s
            </span>
          ) : state === "ended" ? (
            <span className="brutal-border brutal-shadow bg-white px-3 py-1.5 text-[12px] font-semibold text-black">
              Demo ended — restart anytime
            </span>
          ) : null}
        </div>

        <div className="pointer-events-auto">
          {isEmbedUrl && state !== "running" ? (
            <button
              type="button"
              onClick={() => start().catch(() => setState("idle"))}
              disabled={!sdkLoaded || state === "starting"}
              className="brutal-border brutal-shadow bg-[var(--color-accent)] px-3 py-2 text-[12px] font-semibold text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === "starting" ? "Starting…" : `Start ${seconds}s demo`}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
