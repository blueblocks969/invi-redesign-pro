import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Truck, RotateCcw } from "lucide-react";
import { categories } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <h2 className="font-display text-3xl">INVI</h2>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Premium everyday menswear from India — loose-fit tees, linen-blend shirts and
            statement graphics, made in small batches.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/invi.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="INVI on Instagram"
              className="border p-2 transition-colors hover:bg-background"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="mailto:support@invi.co.in"
              aria-label="Email INVI"
              className="border p-2 transition-colors hover:bg-background"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/shop" className="hover:text-foreground">
                All products
              </Link>
            </li>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/collections/${c.slug}`} className="hover:text-foreground">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Help</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/shipping-returns" className="hover:text-foreground">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/size-guide" className="hover:text-foreground">
                Size Guide
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-foreground">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground">
                About INVI
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-sm">
          <p className="flex items-start gap-3">
            <Truck className="mt-0.5 size-4 shrink-0" />
            <span>
              <strong className="font-medium">Pan-India delivery</strong>
              <br />
              <span className="text-muted-foreground">Delivered across India in 7–8 days</span>
            </span>
          </p>
          <p className="flex items-start gap-3">
            <RotateCcw className="mt-0.5 size-4 shrink-0" />
            <span>
              <strong className="font-medium">Easy returns</strong>
              <br />
              <span className="text-muted-foreground">Hassle-free returns within 7 days</span>
            </span>
          </p>
        </div>
      </div>

      <div className="border-t px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} INVI. All rights reserved.
      </div>
    </footer>
  );
}
