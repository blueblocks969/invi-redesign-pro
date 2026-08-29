import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import logo from "@/assets/invi-logo.png";
import { categories } from "@/data/products";
import { useCart } from "@/lib/cart";

const links: { to: string; params?: Record<string, string>; label: string }[] = [
  { to: "/shop", label: "Shop All" },
  ...categories.map((c) => ({
    to: "/collections/$category",
    params: { category: c.slug },
    label: c.title,
  })),
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  const { count, setOpen } = useCart();
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="overflow-hidden border-b bg-primary py-1.5 text-primary-foreground">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <span key={i} className="eyebrow flex shrink-0 gap-10 pe-10">
              <span>Free shipping over ₹999</span>
              <span>Pan-India delivery in 7–8 days</span>
              <span>7-day easy returns</span>
              <span>Cash on delivery available</span>
              <span>Free shipping over ₹999</span>
              <span>Pan-India delivery in 7–8 days</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button
          className="lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobile((v) => !v)}
        >
          {mobile ? <Menu className="size-5" /> : <Menu className="size-5" />}
        </button>

        <Link to="/" className="flex items-center gap-2" aria-label="INVI home">
          <img src={logo} alt="INVI logo" className="h-9 w-auto" width={36} height={45} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              params={l.params}
              className="eyebrow text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "eyebrow text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="relative flex items-center gap-2"
          aria-label={`Open bag, ${count} items`}
        >
          <ShoppingBag className="size-5" />
          {count > 0 ? (
            <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-clay text-[10px] text-clay-foreground">
              {count}
            </span>
          ) : null}
        </button>
      </div>

      {mobile ? (
        <nav aria-label="Mobile" className="border-t bg-background px-4 py-3 lg:hidden">
          <div className="flex justify-end">
            <button aria-label="Close menu" onClick={() => setMobile(false)}>
              <X className="size-4" />
            </button>
          </div>
          <ul className="grid gap-3 pb-2">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  params={l.params}
                  onClick={() => setMobile(false)}
                  className="eyebrow block text-muted-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
