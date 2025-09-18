"use client";

import Link from "next/link";
import { useCart } from "@/context/cartContext";

export default function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-eco-green-light/80 backdrop-blur border-b border-eco-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="ecoNutrient" className="h-8 w-auto" />
        </Link>
        <nav className="flex items-center gap-6 text-eco-white">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/backstage" className="hover:underline">Backstage</Link>
          <Link href="/cart" className="relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-eco-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9"
              />
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
            <span className="sr-only">Cart</span>
            <div className="absolute -top-6 right-0 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Cart
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
