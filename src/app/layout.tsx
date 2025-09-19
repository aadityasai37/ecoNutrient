import "./globals.css";
import { CartProvider } from "@/context/cartContext";
import Link from "next/link";

export const metadata = {
  title: "EcoNutrient — Native Indian Flavours",
  description: "Discover authentic native Indian flavors with EcoNutrient. Wholesome nutrition, sustainably made.",
  keywords: "Indian spices, traditional foods, organic nutrition, sattu, millets, cold-pressed oils",
  openGraph: {
    title: "EcoNutrient — Native Indian Flavours",
    description: "Connecting cultures through native Indian flavors. High-protein, natural products.",
    url: "https://econutrient.com",
    siteName: "EcoNutrient",
    images: [
      {
        url: "/Header_Logo.svg",
        width: 800,
        height: 600,
        alt: "EcoNutrient Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoNutrient — Native Indian Flavours",
    description: "Discover authentic native Indian flavors with EcoNutrient.",
    images: ["/Header_Logo.svg"],
  },
  other: [
    { rel: 'preload', href: '/Hero_Bg.svg', as: 'image' },
  ],
};

export const viewport = {
  themeColor: '#70AD47',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-primary text-black font-sans" suppressHydrationWarning={true}>
        <CartProvider>
          <div className="bg-black text-white text-center py-2 text-sm font-bold border-b border-black/10">
            ENJOY FREE SHIPPING ON PREPAID ORDERS
          </div>
          {children}
          <footer className="border-t border-black/10 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-black">
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
              <div className="border-t border-black/10 pt-4">
                © {new Date().getFullYear()} ecoNutrient • All rights reserved.
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
