"use client";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  // Pick only the first image (string) or fallback to a placeholder
  const cover: string = product.images?.[0] ?? "/next.svg";

  return (
    <Link href={`/product/${product.slug}`} className="group block bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={cover}                 // Single string here
          alt={product.name || "Product"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <p className="mt-3 text-lg font-semibold text-emerald-700">
          From ₹{product.variants?.[0]?.priceINR ?? 0}
        </p>
        <span className="mt-4 inline-block rounded-md bg-[#64B34E] px-5 py-2.5 text-white">View</span>
      </div>
    </Link>
  );
}
