"use client";

import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const items = [
    "Rich & Royal North Indian Taste",
    "Spicy & Aromatic South Indian Flavour",
    "Earthy & Wholesome Eastern Essence",
    "Vibrant & Zesty Western Delights",
    "Bringing India Closer Through Food"
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Next.js Image optimization */}
      <Image
        src="/Hero_Bg.svg"
        alt="Rural India food heritage"
        fill
        priority
        fetchPriority="high"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzBBRDQ3Ii8+PC9zdmc+"
        className="object-cover -z-10"
        sizes="100vw"
      />

      {/* Green Overlay Layers - Updated to not block paint */}
      <div className="absolute inset-0 bg-primary/55 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/10"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Kicker text */}
        {/* Removed the "we connect people to roots" text as per user request */}

        {/* Centered container for headings */}
        <div className="mx-auto max-w-[min(92vw,1400px)] text-center">
          {/* Animated headline */}
          <div className="mb-6">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.12em] text-white leading-tight"
              initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Connecting Cultures Through
            </motion.h1>
            <motion.h1
              className="whitespace-pre-line text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6vw] tracking-tight text-center break-words max-w-[90vw] mx-auto"
              initial={{ opacity: 0, scale: 0.96, letterSpacing: '0.08em' }}
              animate={{ opacity: 1, scale: 1, letterSpacing: '-0.01em' }}
              transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              Native Indian Flavours
            </motion.h1>
          </div>

          {/* Compact glowing pill ticker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 md:mt-6 w-full flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/92 text-black text-sm md:text-base shadow-[0_0_18px_rgba(112,173,71,0.45)] ring-1 ring-black/10 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_6px_#70AD47]"></span>
              <AnimatedText items={items} />
            </div>
          </motion.div>
        </div>

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
