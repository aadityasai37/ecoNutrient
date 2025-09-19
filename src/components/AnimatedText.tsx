"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedTextProps {
  items: string[];
  className?: string;
}

export default function AnimatedText({ items, className = "" }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2500); // 2.5 seconds cycle

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={`bg-white text-primary font-bold text-xl md:text-2xl px-4 py-2 rounded-lg ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-primary"
        >
          <span className="text-primary">•</span> {items[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
