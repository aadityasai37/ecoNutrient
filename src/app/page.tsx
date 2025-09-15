import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  const sattu = products.find((p) => p.slug === "sattu")!;
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-8 text-center bg-eco-white text-eco-green-light overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-eco-green-light/20 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Wholesome Nutrition for a Healthy India
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Power your body with natural, high-protein Sattu — crafted with care to bring India together in health and vitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#shop" className="bg-eco-green-light text-eco-white px-8 py-4 rounded-full font-semibold hover:bg-eco-green-light/90 hover:text-eco-white transition-all duration-300 shadow-lg">
              Shop Now
            </Link>
            <Link href="/about" className="border-2 border-eco-green-light text-eco-green-light px-8 py-4 rounded-full font-semibold hover:bg-eco-green-light hover:text-eco-white transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-eco-green-light to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-eco-green-light text-eco-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose ecoNutrient?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-eco-white/10 to-eco-green-light border border-eco-white/20">
              <div className="w-16 h-16 bg-eco-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-eco-green-light">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural & Organic</h3>
              <p className="text-eco-white/80">Sourced from the finest natural ingredients, ensuring purity and health benefits.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-eco-white/10 to-eco-green-light border border-eco-white/20">
              <div className="w-16 h-16 bg-eco-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-eco-green-light">💪</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">High Protein</h3>
              <p className="text-eco-white/80">Packed with essential proteins to fuel your active lifestyle and support muscle growth.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-eco-white/10 to-eco-green-light border border-eco-white/20">
              <div className="w-16 h-16 bg-eco-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-eco-green-light">🇮🇳</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Made in India</h3>
              <p className="text-eco-white/80">Proudly crafted in India, supporting local farmers and traditional nutrition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="shop" className="py-20 px-8 bg-eco-white text-eco-green-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductCard product={sattu} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 bg-eco-green-light text-eco-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-eco-white/80">Natural Ingredients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25g</div>
              <p className="text-eco-white/80">Protein per Serving</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <p className="text-eco-white/80">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-eco-white text-eco-green-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Nourish Your Body?</h2>
          <p className="text-xl mb-8">Join thousands of Indians who have discovered the power of natural Sattu nutrition.</p>
          <Link href="#shop" className="bg-eco-green-light text-eco-white px-8 py-4 rounded-full font-semibold hover:bg-eco-green-light/90 hover:text-eco-white transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12 px-8 bg-eco-white text-eco-green-light">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Customer Service</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/return-replacement" className="hover:underline">Returns</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/track-order" className="hover:underline">Track Order</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
