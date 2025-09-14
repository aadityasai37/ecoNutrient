export type Variant = {
  id: string;
  sku: string;
  label: string; // "500 g" | "1 kg"
  weightG: number;
  priceINR: number;
  image: string;
  shippingWeightG: number;
  stock: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  images: string[];
  variants: Variant[];
  tags: string[];
};

export const products: Product[] = [
  {
    id: "sattu",
    slug: "sattu",
    name: "Sattu (Roasted Gram Flour)",
    description:
      "High‑protein, stone‑ground roasted gram flour. Great for drinks, parathas, laddoos, and everyday nutrition.",
    images: ["/images/sattu-pack.jpg"],
    tags: ["high-protein", "vegan", "natural"],
    variants: [
      {
        id: "sattu-500",
        sku: "SAT-500",
        label: "500 g",
        weightG: 500,
        priceINR: 149,
        image: "/images/sattu-pack.jpg",
        shippingWeightG: 700,
        stock: 100,
      },
      {
        id: "sattu-1000",
        sku: "SAT-1KG",
        label: "1 kg",
        weightG: 1000,
        priceINR: 279,
        image: "/images/sattu-pack.jpg",
        shippingWeightG: 1200,
        stock: 100,
      },
    ],
  },
];
