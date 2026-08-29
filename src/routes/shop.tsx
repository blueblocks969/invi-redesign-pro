import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All — T-Shirts, Shirts & Polos | INVI" },
      {
        name: "description",
        content:
          "Browse every INVI product: loose-fit t-shirts, graphic tees, linen-blend shirts, polos, baby tees and shackets. Free shipping over ₹999 across India.",
      },
      { property: "og:title", content: "Shop All Products — INVI" },
      {
        property: "og:description",
        content: "Every INVI piece in one place — tees, shirts, polos and more.",
      },
      { property: "og:url", content: "/shop" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

const sorts = [
  { id: "featured", label: "Featured" },
  { id: "low", label: "Price: Low to High" },
  { id: "high", label: "Price: High to Low" },
] as const;

function Shop() {
  const [active, setActive] = useState<string>("all");
  const [sort, setSort] = useState<string>("featured");

  const list = useMemo(() => {
    const filtered = active === "all" ? products : products.filter((p) => p.category === active);
    const copy = [...filtered];
    if (sort === "low") copy.sort((a, b) => a.price - b.price);
    if (sort === "high") copy.sort((a, b) => b.price - a.price);
    return copy;
  }, [active, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="eyebrow text-muted-foreground">
        <Link to="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        / Shop
      </nav>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">All products</h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        {products.length} pieces in the current INVI range — premium cotton tees, linen-blend
        shirts, polos and limited graphics.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y py-3">
        <div className="flex flex-wrap gap-2">
          {[{ slug: "all", title: "All" }, ...categories].map((c) => (
            <button
              key={c.slug}
              onClick={() => setActive(c.slug)}
              className={`eyebrow border px-3 py-1.5 transition-colors ${
                active === c.slug
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:bg-secondary"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm">
          <span className="eyebrow text-muted-foreground">Sort</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border bg-background px-2 py-1.5 text-sm"
          >
            {sorts.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
