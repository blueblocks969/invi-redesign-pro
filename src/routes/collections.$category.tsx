import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { byCategory, categories } from "@/data/products";

export const Route = createFileRoute("/collections/$category")({
  loader: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.category);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Collection unavailable — INVI" }, { name: "robots", content: "noindex" }] };
    }
    const { cat } = loaderData;
    const title = `${cat.title} for Men — Buy Online in India | INVI`;
    return {
      meta: [
        { title },
        { name: "description", content: `${cat.blurb} Shop INVI ${cat.title.toLowerCase()} with free shipping over ₹999 and 7-day easy returns across India.` },
        { property: "og:title", content: title },
        { property: "og:description", content: cat.blurb },
        { property: "og:url", content: `/collections/${params.category}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/collections/${params.category}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Shop", item: "/shop" },
              { "@type": "ListItem", position: 3, name: cat.title, item: `/collections/${params.category}` },
            ],
          }),
        },
      ],
    };
  },
  component: CollectionPage,
});

function CollectionPage() {
  const { cat } = Route.useLoaderData();
  const items = byCategory(cat.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="eyebrow text-muted-foreground">
        <Link to="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/shop" className="hover:text-foreground">
          Shop
        </Link>{" "}
        / {cat.title}
      </nav>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">{cat.title}</h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">{cat.blurb}</p>

      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-2 border-t pt-8">
        {categories
          .filter((c) => c.slug !== cat.slug)
          .map((c) => (
            <Link
              key={c.slug}
              to="/collections/$category"
              params={{ category: c.slug }}
              className="eyebrow border px-3 py-1.5 transition-colors hover:bg-secondary"
            >
              {c.title}
            </Link>
          ))}
      </div>
    </div>
  );
}
