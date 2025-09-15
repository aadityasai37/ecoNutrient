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
      <body suppressHydrationWarning={true}>
        <CartProvider>
          <header className="sticky top-0 z-40 bg-eco-green-light/80 backdrop-blur border-b border-eco-white">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="ecoNutrient" className="h-8 w-auto" />
              </Link>
              <nav className="flex items-center gap-6 text-eco-white">
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/backstage" className="hover:underline">Backstage</Link>
                <Link href="/cart" className="btn-primary bg-eco-white text-eco-green-light hover:bg-eco-green-light hover:text-eco-white border border-eco-white">Cart</Link>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
          <footer className="border-t border-eco-white bg-eco-green-light">
            <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-eco-white">
              © {new Date().getFullYear()} ecoNutrient • All rights reserved.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
