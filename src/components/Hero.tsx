"use client";

import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

export default function Hero() {
  const items = [
    "Millets",
    "Traditional Sattu",
    "Cold‑pressed Oils",
    "Hand‑pounded Spices",
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/Hero_bg.svg')",
        }}
      />

      {/* Green Overlay Layers */}
      <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/10"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Kicker text */}
        {/* Removed the "we connect people to roots" text as per user request */}

        {/* Animated headline */}
        <div className="mb-6">
          <motion.h1
            className="md:text-4xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connecting Cultures Through
          </motion.h1>
          <motion.h1
            className="text-6xl md:text-8xl font-bold tracking-wide text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Native Indian Flavours
          </motion.h1>
        </div>

        {/* Cycling phrases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <AnimatedText items={items} />
        </motion.div>

        {/* CTA button */}
        <motion.button
          onClick={() => {
            const element = document.getElementById('products');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="Shop now for our products"
          className="btn-primary inline-block transform hover:scale-105 hover:translate-y-[-1px] active:translate-y-0 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
}
