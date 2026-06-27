import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { CartProvider } from "./context/CartContext";
import { router } from "./routes";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    // Hide scrollbar while still allowing scroll
    const style = document.createElement("style");
    style.textContent = `
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(111,78,55,0.25); border-radius: 2px; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(111,78,55,0.4); }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
