import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INVI — Premium T-Shirts & Shirts for Men | Shop Online India" },
      {
        name: "description",
        content:
          "Shop INVI: loose-fit 240 GSM tees, linen-blend shirts, polos and statement graphic tees. Made in India, free shipping over ₹999 and 7-day easy returns.",
      },
      { property: "og:title", content: "INVI — Premium Everyday Menswear, Made in India" },
      {
        property: "og:description",
        content:
          "Loose-fit tees, linen-blend shirts, polos and statement graphics. Free shipping over ₹999.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const newIn = products.slice(0, 4);
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 8);
  const hero = products[1];

  return (
    <>
      <section className="relative border-b">
        <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-0 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-10 lg:py-24">
            <span className="eyebrow text-clay">New drop — Loose Fit Series</span>
            <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Everyday menswear,
              <br />
              cut a little louder.
            </h1>
            <p className="max-w-md text-base text-muted-foreground">
              INVI makes premium 240 GSM loose-fit tees, linen-blend shirts and statement
              graphics in small batches — designed in India, delivered across India.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Shop all <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/collections/$category"
                params={{ category: "t-shirts" }}
                className="inline-flex items-center gap-2 border border-primary px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                New in T-shirts
              </Link>
            </div>
            <dl className="mt-4 grid grid-cols-3 gap-4 border-t pt-6 text-xs">
              <div>
                <dt className="eyebrow text-muted-foreground">Fabric</dt>
                <dd className="mt-1">240 GSM French Terry</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Delivery</dt>
                <dd className="mt-1">Pan-India, 7–8 days</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Returns</dt>
                <dd className="mt-1">7 days, hassle-free</dd>
              </div>
            </dl>
          </div>
          <div className="relative min-h-[420px] bg-secondary">
            <img
              src={hero.images[0]}
              alt="INVI loose fit t-shirt worn on model"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6" aria-labelledby="cats">
        <h2 id="cats" className="font-display text-3xl sm:text-4xl">
          Shop by category
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {categories.map((c) => {
            const cover = products.find((p) => p.category === c.slug);
            return (
              <Link
                key={c.slug}
                to="/collections/$category"
                params={{ category: c.slug }}
                className="group relative overflow-hidden bg-secondary"
              >
                <img
                  src={cover?.images[0]}
                  alt={`${c.title} by INVI`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/70 to-transparent p-4">
                  <h3 className="font-sans text-sm font-medium text-primary-foreground">
                    {c.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6" aria-labelledby="newin">
        <div className="flex items-end justify-between">
          <h2 id="newin" className="font-display text-3xl sm:text-4xl">
            New in
          </h2>
          <Link to="/shop" className="eyebrow text-muted-foreground hover:text-foreground">
            View all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {newIn.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="border-y bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Best sellers</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
            {bestSellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl">Built to be worn out, not out of.</h2>
        <p className="mt-4 text-muted-foreground">
          Every INVI piece starts with fabric: heavyweight French Terry cotton, linen blends
          that breathe through Indian summers, and prints that survive the wash. We produce in
          small runs, so what you buy stays rare.
        </p>
        <Link
          to="/about"
          className="mt-6 inline-flex items-center gap-2 border border-primary px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Our story <ArrowRight className="size-4" />
        </Link>
      </section>
    </>
  );
}
