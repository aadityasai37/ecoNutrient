"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type GlowTickerProps = {
  items: string[];
  intervalMs?: number;
};

export default function GlowTicker({ items, intervalMs = 2500 }: GlowTickerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items.length, intervalMs]);

  return (
    <div className="w-full flex justify-center mt-6 md:mt-8">
      <div className="inline-flex items-center px-5 py-3 rounded-full bg-white/90 text-black text-base md:text-lg shadow-[0_0_24px_rgba(112,173,71,0.55)] ring-1 ring-black/10 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md">
        <span className="mr-2 h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#70AD47]"></span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={items[index]}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="whitespace-nowrap"
          >
            {items[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
