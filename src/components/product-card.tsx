import { Link } from "@tanstack/react-router";
import { formatINR, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const off =
    product.compareAt && product.compareAt > product.price
      ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
      : null;

  return (
    <Link
      to="/products/$id"
      params={{ id: product.id }}
      className="group block"
      aria-label={product.name}
    >
      <div className="relative overflow-hidden bg-secondary">
        <img
          src={product.images[0]}
          alt={`${product.name} — INVI`}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
        />
        {product.images[1] ? (
          <img
            src={product.images[1]}
            alt={`${product.name} back view — INVI`}
            loading="lazy"
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        ) : null}
        {off ? (
          <span className="eyebrow absolute left-3 top-3 bg-clay px-2 py-1 text-clay-foreground">
            {off}% off
          </span>
        ) : product.bestSeller ? (
          <span className="eyebrow absolute left-3 top-3 bg-background px-2 py-1 text-foreground">
            Best seller
          </span>
        ) : null}
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-sans text-sm font-medium tracking-tight">{product.name}</h3>
        <p className="flex items-center gap-2 text-sm">
          <span>{formatINR(product.price)}</span>
          {product.compareAt ? (
            <span className="text-muted-foreground line-through">
              {formatINR(product.compareAt)}
            </span>
          ) : null}
        </p>
      </div>
    </Link>
  );
}
