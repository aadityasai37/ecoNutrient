 "use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cartContext";
import { useState, useEffect } from "react";

export default function Header() {
  const { count } = useCart();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/backstage", label: "Backstage" },
    { href: "/track", label: "Track Package" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-transparent backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-sm"
        : "bg-black"
    }`}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo - Left aligned, no background */}
        <Link
          href="/"
          aria-label="EcoNutrient home"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Image
            src="/Header_Logo.svg"
            alt="EcoNutrient"
            width={150}
            height={44}
          />
        </Link>

        {/* Desktop Nav - Right aligned */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`relative px-3 py-2 font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                isScrolled
                  ? "text-black hover:text-primary"
                  : "text-white hover:text-primary/80"
              } ${
                pathname === item.href
                  ? isScrolled
                    ? "bg-black/8 text-black rounded-full"
                    : "bg-white/20 text-white rounded-full"
                  : ""
              }`}
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-200 -translate-x-1/2 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/cart"
            aria-label="Shopping cart"
            aria-current={pathname === "/cart" ? "page" : undefined}
            className={`relative group hover:scale-105 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              pathname === "/cart" ? "bg-black/8 text-white rounded-full p-2" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-6 h-6 transition-colors duration-200 ${
                isScrolled
                  ? "text-black hover:text-primary"
                  : "text-white hover:text-primary/80"
              }`}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9"
              />
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-medium">
                {count}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden focus:outline-none focus:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden border-t border-gray-100 shadow-lg ${
          isScrolled ? "bg-transparent" : "bg-black"
        }`}>
          <nav className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`block font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isScrolled
                    ? "text-black hover:text-primary"
                    : "text-white hover:text-primary/80"
                } ${
                  pathname === item.href
                    ? isScrolled
                      ? "bg-black/8 text-black rounded-lg px-3 py-2"
                      : "bg-white/20 text-white rounded-lg px-3 py-2"
                    : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cart"
              aria-label="Shopping cart"
              aria-current={pathname === "/cart" ? "page" : undefined}
              className={`flex items-center gap-2 font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                isScrolled
                  ? "text-black hover:text-primary"
                  : "text-white hover:text-primary/80"
              } ${
                pathname === "/cart"
                  ? isScrolled
                    ? "bg-black/8 text-black rounded-lg px-3 py-2"
                    : "bg-white/20 text-white rounded-lg px-3 py-2"
                  : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-5 h-5 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9"
                />
              </svg>
              Cart
              {count > 0 && (
                <span className="bg-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-medium">
                  {count}
                </span>
              )}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
