import "./globals.css";
import { CartProvider } from "@/context/cartContext";
import Link from "next/link";

export const metadata = {
  title: "ecoNutrient",
  description: "Wholesome nutrition, sustainably made.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="ecoNutrient" className="h-8 w-auto" />
              </Link>
              <nav className="flex items-center gap-6">
                <Link href="/about">About</Link>
                <Link href="/backstage">Backstage</Link>
                <Link href="/cart" className="btn-primary">Cart</Link>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
          <footer className="border-t">
            <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
              © {new Date().getFullYear()} ecoNutrient • All rights reserved.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
