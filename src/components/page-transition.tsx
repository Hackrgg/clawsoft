"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function PageTransition() {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (pathname !== prevPath.current) {
      prevPath.current = pathname;
      setKey((k) => k + 1);
      setVisible(true);
      const t = setTimeout(() => setVisible(false), 750);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={key}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeIn" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-8 select-none"
          >
            <span className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--color-text)" }}>
              DIGUZ
            </span>
            <span className="text-3xl font-extrabold leading-none" style={{ color: "var(--color-accent)" }}>.</span>
          </motion.div>

          {/* Progress bar track */}
          <div
            className="relative h-[3px] w-52 overflow-hidden"
            style={{
              border: "2px solid rgba(44,35,28,0.85)",
              boxShadow: "3px 3px 0px rgba(44,35,28,0.85)",
              height: "10px",
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-y-0 left-0"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          </div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em]"
            style={{ color: "var(--color-muted)" }}
          >
            Loading
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
