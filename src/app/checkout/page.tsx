"use client";
import { useCart } from "@/context/cartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handlePay() {
    setLoading(true);
    // Will call /api/checkout/create-order (to be implemented)
    // and then open Razorpay/PhonePe on client.
    router.push("/order/thank-you?mock=1");
  }

  if (items.length === 0) return <div>Your cart is empty.</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold">Checkout</h1>

      <form className="mt-6 grid gap-4">
        <input className="border rounded p-3" placeholder="Full name" required />
        <input className="border rounded p-3" placeholder="Email" type="email" required />
        <input className="border rounded p-3" placeholder="Phone" required />
        <input className="border rounded p-3" placeholder="Address line 1" required />
        <div className="grid grid-cols-3 gap-3">
          <input className="border rounded p-3" placeholder="City" required />
          <input className="border rounded p-3" placeholder="State" required />
          <input className="border rounded p-3" placeholder="PIN code" required />
        </div>
      </form>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-xl">Total: <span className="font-semibold">₹{subtotal}</span></div>
        <button onClick={handlePay} disabled={loading} className="btn-primary">
          {loading ? "Processing..." : "Proceed to Pay"}
        </button>
      </div>
    </div>
  );
}
