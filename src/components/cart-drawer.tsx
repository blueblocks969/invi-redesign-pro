import { Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/data/products";

export function CartDrawer() {
  const { lines, open, setOpen, setQty, remove, subtotal } = useCart();
  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 79;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b px-5 py-4">
          <SheetTitle className="eyebrow">Your bag ({lines.length})</SheetTitle>
        </SheetHeader>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-sm text-muted-foreground">Your bag is empty.</p>
            <Button asChild onClick={() => setOpen(false)}>
              <Link to="/shop">Shop all</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y overflow-y-auto px-5">
              {lines.map((l) => (
                <div key={`${l.id}-${l.size}`} className="flex gap-4 py-4">
                  <img
                    src={l.image}
                    alt={l.name}
                    className="h-28 w-22 shrink-0 bg-secondary object-cover"
                    width={88}
                    height={112}
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium">{l.name}</p>
                        <p className="text-xs text-muted-foreground">Size {l.size}</p>
                      </div>
                      <button
                        onClick={() => remove(l.id, l.size)}
                        aria-label={`Remove ${l.name}`}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border">
                        <button
                          className="px-2 py-1"
                          aria-label="Decrease quantity"
                          onClick={() => setQty(l.id, l.size, l.qty - 1)}
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{l.qty}</span>
                        <button
                          className="px-2 py-1"
                          aria-label="Increase quantity"
                          onClick={() => setQty(l.id, l.size, l.qty + 1)}
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <span className="text-sm">{formatINR(l.price * l.qty)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t px-5 py-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : formatINR(shipping)}</span>
              </div>
              <Button asChild className="w-full" size="lg" onClick={() => setOpen(false)}>
                <Link to="/checkout">Checkout · {formatINR(subtotal + shipping)}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <Link to="/cart">View bag</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
