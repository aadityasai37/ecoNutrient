"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <main className="bg-primary text-black">
      <Header />
      <Hero />
      <section id="products" className="py-16 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose EcoNutrient?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Natural & Organic</h3>
              <p>All our products are sourced from natural, organic ingredients without any additives.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Traditional Methods</h3>
              <p>We use age-old traditional methods to preserve the nutritional value and authentic flavors.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Health Benefits</h3>
              <p>Our products are packed with nutrients that support a healthy lifestyle.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
