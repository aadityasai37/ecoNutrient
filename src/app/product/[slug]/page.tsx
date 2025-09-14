"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import type { Product, Variant } from "@/lib/products";
import { useCart } from "@/context/cartContext";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();

  // Always resolve to a single Product (never Product[])
  const product: Product = useMemo(() => {
    const found = products.find((p) => p.slug === String(slug));
    return found ?? products[0]; // fallback to first product
  }, [slug]);

  const { add } = useCart();

  // Initialize from first variant’s id (string)
  const [variantId, setVariantId] = useState<string>(product.variants[0]?.id ?? "");

  // Derive the selected variant safely
  const variant: Variant = useMemo(
    () => product.variants.find((v) => v.id === variantId) ?? product.variants[0],
    [product, variantId]
  );

  function addToCart() {
    if (!variant) return;
    add({
      id: product.id,
      variantId: variant.id,
      name: `${product.name} - ${variant.label}`,
      weightG: variant.weightG,
      priceINR: variant.priceINR,
      qty: 1,
      image: variant.image,
    });
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="relative aspect-square bg-white rounded-xl border overflow-hidden">
        <Image
          src={variant?.image || "/next.svg"}
          alt={product.name || "Product"}
          fill
          className="object-contain hover:scale-105 transition-transform"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-gray-700">{product.description}</p>

        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">Choose pack</label>
          <div className="grid grid-cols-2 gap-3">
            {product.variants.map((v: Variant) => (
              <button
                key={v.id}
                onClick={() => setVariantId(v.id)}
                className={`rounded-lg border px-4 py-3 ${
                  variantId === v.id ? "border-emerald-600 ring-2 ring-emerald-600/40" : "border-gray-200"
                }`}
              >
                <div className="text-sm">{v.label}</div>
                <div className="text-lg font-semibold">₹{v.priceINR}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="text-2xl font-semibold text-emerald-700">₹{variant?.priceINR ?? 0}</div>
          <button onClick={addToCart} className="inline-flex items-center rounded-md bg-[#64B34E] px-5 py-2.5 text-white">
            Add to cart
          </button>
        </div>

        <ul className="mt-8 text-sm list-disc pl-5 space-y-1 text-gray-700">
          <li>Ingredients: Roasted Chana (Bengal gram)</li>
          <li>All‑natural, no preservatives, vegan and protein rich</li>
          <li>Best before: 6 months from packing; store in a cool, dry place</li>
        </ul>
      </div>
    </div>
  );
}
