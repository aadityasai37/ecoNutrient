import "./globals.css";
import { CartProvider } from "@/context/cartContext";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "EcoNutrient — Native Indian Flavours",
  description: "Wholesome nutrition, sustainably made. Connecting cultures through native Indian flavours.",
  themeColor: "#70AD47",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <CartProvider>
          <div className="bg-black text-white text-center py-2 text-sm font-bold">
            ENJOY FREE SHIPPING ON PREPAID ORDERS
          </div>
          <Header />
          <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
          <footer className="border-t border-eco-white bg-eco-green-light">
            <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-eco-white">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4">Customer Service</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <Link href="/terms" className="hover:underline">Terms</Link>
                  <Link href="/privacy" className="hover:underline">Privacy</Link>
                  <Link href="/return-replacement" className="hover:underline">Returns</Link>
                  <Link href="/contact" className="hover:underline">Contact</Link>
                  <Link href="/track-order" className="hover:underline">Track Order</Link>
                </div>
              </div>
              <div className="border-t border-eco-white pt-4">
                © {new Date().getFullYear()} ecoNutrient • All rights reserved.
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
