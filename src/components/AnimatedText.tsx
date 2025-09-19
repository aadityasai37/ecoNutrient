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
    }, 3000); // 3 seconds cycle

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={`text-lg md:text-xl text-white/90 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <span className="text-primary font-semibold">{items[currentIndex]}</span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
