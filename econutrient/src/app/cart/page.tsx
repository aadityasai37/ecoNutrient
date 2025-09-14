"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartContext";

export default function CartPage() {
  const { items, setQty, remove, subtotal } = useCart();

  // Ensure numbers for UI math
  const safeSubtotal: number = Number.isFinite(subtotal) ? subtotal : 0;

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
        <Link href="/product/sattu" className="inline-flex mt-6 rounded-md bg-[#64B34E] px-5 py-2.5 text-white">
          Shop Sattu
        </Link>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-[2fr_1fr] gap-10">
      <div className="space-y-6">
        {items.map((i) => {
          // Guard against undefined fields
          const qty: number = typeof i.qty === "number" && i.qty > 0 ? i.qty : 1;
          const price: number = typeof i.priceINR === "number" ? i.priceINR : 0;
          const lineTotal = price * qty;
          const alt = i.name || "Cart item";
          const variantId = i.variantId as string;

          return (
            <div key={variantId} className="flex items-center gap-4 border rounded-lg p-4 bg-white">
              <div className="relative w-20 h-20">
                <Image src={i.image || "/next.svg"} alt={alt} fill className="object-contain" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{i.name ?? "Product"}</div>
                <div className="text-sm text-gray-600">₹{price}</div>

                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => setQty(variantId, Math.max(1, qty - 1))}
                    className="px-2 py-1 border rounded"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-6 text-center">{qty}</span>
                  <button
                    onClick={() => setQty(variantId, qty + 1)}
                    className="px-2 py-1 border rounded"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button onClick={() => remove(variantId)} className="ml-4 text-sm text-red-600">
                    Remove
                  </button>
                </div>
              </div>

              <div className="font-semibold">₹{lineTotal}</div>
            </div>
          );
        })}
      </div>

      <aside className="border rounded-xl p-6 h-fit bg-white">
        <h2 className="text-xl font-semibold">Order summary</h2>
        <div className="mt-4 flex justify-between text-sm">
          <span>Subtotal</span>
          <span>₹{safeSubtotal}</span>
        </div>
        <p className="mt-2 text-xs text-gray-500">Shipping and taxes calculated at checkout.</p>
        <Link href="/checkout" className="inline-flex w-full justify-center rounded-md bg-[#64B34E] px-5 py-2.5 text-white mt-6">
          Checkout
        </Link>
      </aside>
    </div>
  );
}
