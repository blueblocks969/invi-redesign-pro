import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartLine = {
  id: string;
  name: string;
  size: string;
  price: number;
  image: string;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  add: (line: Omit<CartLine, "qty">, qty?: number) => void;
  remove: (id: string, size: string) => void;
  setQty: (id: string, size: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const CartContext = createContext<CartState | null>(null);
const STORAGE_KEY = "invi-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const value = useMemo<CartState>(() => {
    const key = (l: CartLine, id: string, size: string) => l.id === id && l.size === size;
    return {
      lines,
      open,
      setOpen,
      add: (line, qty = 1) =>
        setLines((prev) => {
          const found = prev.find((l) => key(l, line.id, line.size));
          if (found)
            return prev.map((l) => (key(l, line.id, line.size) ? { ...l, qty: l.qty + qty } : l));
          return [...prev, { ...line, qty }];
        }),
      remove: (id, size) => setLines((prev) => prev.filter((l) => !key(l, id, size))),
      setQty: (id, size, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => !key(l, id, size))
            : prev.map((l) => (key(l, id, size) ? { ...l, qty } : l)),
        ),
      clear: () => setLines([]),
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: lines.reduce((n, l) => n + l.qty * l.price, 0),
    };
  }, [lines, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
