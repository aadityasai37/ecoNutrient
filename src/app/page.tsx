import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  const sattu = products.find((p) => p.slug === "sattu")!;
  return (
    <div className="space-y-14">
      {/* Hero banner placeholder */}
      <section className="relative rounded-2xl overflow-hidden bg-eco-green text-white">
        <div className="px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Wholesome Sattu, Naturally.</h1>
          <p className="mt-3 text-lg opacity-90">Power nutrition from roasted gram, crafted with care.</p>
          <Link href="#shop" className="btn-primary mt-6 inline-flex">Shop now</Link>
        </div>
      </section>

      <section id="shop" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductCard product={sattu} />
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6">Customer Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Link href="/terms" className="text-eco-green hover:underline">Terms and Conditions</Link>
          <Link href="/privacy" className="text-eco-green hover:underline">Privacy Policy</Link>
          <Link href="/return-replacement" className="text-eco-green hover:underline">Return and Replacement Policy</Link>
          <Link href="/contact" className="text-eco-green hover:underline">Contact Us</Link>
          <Link href="/track-order" className="text-eco-green hover:underline">Track Order</Link>
        </div>
      </section>
    </div>
  );
}
