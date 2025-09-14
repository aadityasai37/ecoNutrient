"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string; // product id
  variantId: string; // variant id
  name: string;
  weightG: number;
  priceINR: number; // unit price
  qty: number;
  image: string;
};

type CartState = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (variantId: string) => void;
  setQty: (variantId: string, qty: number) => void;
  clear: () => void;
  subtotal: number;
  count: number;
};

const CartCtx = createContext<CartState | null>(null);
export const useCart = () => {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("CartCtx missing");
  return ctx;
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("eco-cart");
    if (saved) setItems(JSON.parse(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem("eco-cart", JSON.stringify(items));
  }, [items]);

  const add = (it: CartItem) => {
    setItems((prev) => {
      const i = prev.find((p) => p.variantId === it.variantId);
      return i
        ? prev.map((p) => (p.variantId === it.variantId ? { ...p, qty: p.qty + it.qty } : p))
        : [...prev, it];
    });
  };
  const remove = (variantId: string) => setItems((p) => p.filter((i) => i.variantId !== variantId));
  const setQty = (variantId: string, qty: number) =>
    setItems((p) => p.map((i) => (i.variantId === variantId ? { ...i, qty } : i)));
  const clear = () => setItems([]);

  const subtotal = useMemo(() => items.reduce((s, i) => s + i.priceINR * i.qty, 0), [items]);
  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  return (
    <CartCtx.Provider value={{ items, add, remove, setQty, clear, subtotal, count }}>
      {children}
    </CartCtx.Provider>
  );
}
