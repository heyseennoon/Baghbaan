import { createContext, useContext, useMemo, useState } from "react";

export type CartItem = {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
  img: string;
};

type AddItemInput = Omit<CartItem, "quantity"> & { quantity?: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (item: AddItemInput) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  remove: (id: number) => void;
};

const initialItems: CartItem[] = [
  {
    id: 1,
    name: "The Parisien",
    size: "Classic",
    price: 120,
    quantity: 1,
    img: "https://images.unsplash.com/photo-1782038522691-7faf943aa95e?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 3,
    name: "Blush Peony Set",
    size: "Grand",
    price: 145,
    quantity: 1,
    img: "https://images.unsplash.com/photo-1582794543462-0d7922e50cf5?auto=format&fit=crop&q=80&w=300",
  },
];

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return {
      items,
      count,
      subtotal,
      addItem: (item) => {
        setItems((current) => {
          const existing = current.find((cartItem) => cartItem.id === item.id && cartItem.size === item.size);
          if (existing) {
            return current.map((cartItem) =>
              cartItem.id === item.id && cartItem.size === item.size
                ? { ...cartItem, quantity: cartItem.quantity + (item.quantity ?? 1) }
                : cartItem
            );
          }
          return [...current, { ...item, quantity: item.quantity ?? 1 }];
        });
      },
      increase: (id) => {
        setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      },
      decrease: (id) => {
        setItems((current) =>
          current
            .map((item) => item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item)
            .filter((item) => item.quantity > 0)
        );
      },
      remove: (id) => {
        setItems((current) => current.filter((item) => item.id !== id));
      },
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
