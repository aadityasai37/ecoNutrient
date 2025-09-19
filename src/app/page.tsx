"use client";

import Hero from "@/components/Hero";

export default function HomePage() {

  return (
    <div className="min-h-screen">
      <Hero />
      <section id="products" className="min-h-[80vh] bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-gray-600">Content coming soon</p>
        </div>
      </section>
    </div>
  );
}
