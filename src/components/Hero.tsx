"use client";

import AnimatedText from "./AnimatedText";
import { useState, useEffect } from "react";

export default function Hero() {
  const phrases = [
    "Traditional Sattu",
    "South Indian Podi",
    "Original Honey",
    "Get it on ecoNutrient",
  ];

  const [translateY, setTranslateY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (!isMobile) {
        setTranslateY(window.scrollY * 0.2); // Subtle parallax effect
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/hero-india.jpg')",
          transform: `translateY(${translateY}px)`,
        }}
      >
        {/* Background image placeholder: Replace /public/assets/hero-india.jpg with an image reflecting rural India, fields, millets, or traditional kitchen */}
      </div>

      {/* Overlay gradient from black 70% to black 20% for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/20"></div>

      {/* Subtle animated grain/noise */}
      <div className="absolute inset-0 opacity-10 animate-pulse" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '256px 256px'
      }}></div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Kicker text */}
        <p className="text-sm uppercase tracking-widest mb-4 opacity-80">
          we connect people to roots
        </p>

        {/* Animated headline */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-4xl font-light mb-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Connecting Cultures Through
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide animate-typewriter" style={{ animationDelay: '400ms' }}>
            Native Indian Flavours
          </h1>
        </div>

        {/* Cycling phrases */}
        <AnimatedText
          items={phrases}
          className="mb-8"
        />

        {/* CTA button */}
        <button
          onClick={() => {
            const element = document.getElementById('products');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="Shop now for our products"
          className="btn-primary inline-block transform hover:scale-105 hover:translate-y-[-1px] active:translate-y-0 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
