export const metadata = { title: "Backstage • ecoNutrient" };
const cards = [
  { title: "Recipes", href: "/backstage/recipes", desc: "Drinks, laddoos, parathas and more.", ext: false },
  { title: "Behind the scenes", href: "/backstage/process", desc: "Sourcing, milling, and packaging.", ext: false },
  { title: "CSR & community", href: "/backstage/csr", desc: "Initiatives and impact updates.", ext: false },
  { title: "Follow us", href: "https://instagram.com/", desc: "Reels and updates on social.", ext: true },
];

export default function Backstage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Backstage</h1>
      <p className="mt-2 text-gray-700">A living hub for recipes, process stories, socials, and community work.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {cards.map((c) => (
          <a key={c.title} href={c.href} target={c.ext ? "_blank" : "_self"}
             className="group rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="text-xl font-semibold">{c.title}</div>
            <p className="mt-1 text-gray-600">{c.desc}</p>
            <span className="mt-3 inline-block text-eco-green group-hover:underline">Open →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
