import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { BlossomIcon } from "./Shared";
import { MapPin, ShoppingBag, Truck, User } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Occasions", path: "/occasions" },
    { name: "Custom Design", path: "/custom-design" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250,246,242,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(111,78,55,0.13)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 relative">
            <BlossomIcon className="w-full h-full text-[#6F4E37]" />
          </div>
          <span
            className="text-xl lg:text-2xl tracking-wide text-[#232323]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Baghbaan
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.path}>
              <Link
                to={l.path}
                className="text-sm text-[#232323]/70 hover:text-[#6F4E37] transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA & Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/user-dashboard" className="text-[#232323]/70 hover:text-[#6F4E37] transition-colors">
            <User className="w-5 h-5" />
          </Link>
          <Link to="/cart" className="relative text-[#232323]/70 hover:text-[#6F4E37] transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-3.5 h-3.5 px-1 bg-[#D8A7B1] rounded-full text-[9px] text-[#FAF6F2] flex items-center justify-center font-medium">
                {count}
              </span>
            )}
          </Link>
          <Link
            to="/products"
            className="ml-2 px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              fontFamily: "'Manrope', sans-serif",
              background: "#6F4E37",
              color: "#FAF6F2",
              boxShadow: "0 4px 20px rgba(111,78,55,0.25)",
            }}
          >
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#232323] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#232323] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#232323] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-96" : "max-h-0"}`}
        style={{ background: "rgba(250,246,242,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="px-6 py-4 flex flex-col gap-4 border-t border-[#6F4E37]/10">
          {links.map((l) => (
            <Link key={l.path} to={l.path} className="text-sm text-[#232323]/80 hover:text-[#6F4E37] transition-colors"
              style={{ fontFamily: "'Manrope', sans-serif" }}>
              {l.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-2 pt-4 border-t border-[#6F4E37]/10">
            <Link to="/user-dashboard" className="text-[#232323]/80 flex items-center gap-2">
              <User className="w-4 h-4" /> Profile
            </Link>
            <Link to="/cart" className="text-[#232323]/80 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Cart ({count})
            </Link>
          </div>
          <Link
            to="/products"
            className="mt-2 px-6 py-2.5 rounded-full text-sm font-medium self-start text-center w-full"
            style={{ background: "#6F4E37", color: "#FAF6F2", fontFamily: "'Manrope', sans-serif" }}
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="px-6 lg:px-10 pt-16 pb-10" style={{ background: "#232323" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <BlossomIcon className="w-6 h-6 text-[#D8A7B1]" />
              <span
                className="text-xl text-[#FAF6F2]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Baghbaan
              </span>
            </div>
            <p
              className="text-sm leading-relaxed text-[#FAF6F2]/45 max-w-xs"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 300 }}
            >
              A botanical boutique where every arrangement is a quiet poem for the senses.
            </p>
          </div>

          {[
            { title: "Explore", links: [{name: "Seasonal Blooms", path: "/products"}, {name: "Occasions", path: "/occasions"}, {name: "Custom Design", path: "/custom-design"}] },
            { title: "Company", links: [{name: "Our Story", path: "/"}, {name: "Sustainability", path: "/"}] },
            { title: "Connect", links: [{name: "Contact Us", path: "/"}, {name: "FAQ", path: "/"}, {name: "Instagram", path: "/"}] },
          ].map((col) => (
            <div key={col.title}>
              <h4
                className="text-xs uppercase tracking-[0.18em] text-[#D8A7B1]/70 mb-5"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.path}
                      className="text-sm text-[#FAF6F2]/50 hover:text-[#D8A7B1] transition-colors duration-200"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 300 }}
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p
            className="text-xs text-[#FAF6F2]/30"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            © 2026 Baghbaan. All rights reserved.
          </p>
          <p
            className="text-xs text-[#FAF6F2]/25 italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Where every flower finds its home.
          </p>
        </div>
      </div>
    </footer>
  );
}

function DeliveryLocationNotice() {
  return (
    <section className="px-6 lg:px-10 py-10" style={{ background: "#FAF6F2" }}>
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#D8A7B1]/35 bg-white/65 p-5 md:p-7 shadow-[0_18px_55px_rgba(111,78,55,0.10)]">
          <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#F4D6D8]/50 blur-2xl" />
          <div className="absolute -left-8 -bottom-14 h-32 w-32 rounded-full bg-[#A5B38A]/20 blur-2xl" />

          <div className="relative z-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6F4E37] text-[#FAF6F2] shadow-[0_10px_25px_rgba(111,78,55,0.22)]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p
                  className="mb-1 text-xs uppercase tracking-[0.22em] text-[#8B5E3C]"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                >
                  Delivery area
                </p>
                <h3
                  className="text-2xl text-[#232323] md:text-3xl"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                >
                  We currently deliver only in Rawalpindi & Islamabad.
                </h3>
                <p
                  className="mt-2 max-w-2xl text-sm leading-relaxed text-[#232323]/65"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 300 }}
                >
                  Please place your order only if the delivery address is within RWP / ISB service points.
                  This helps us keep bouquets fresh, timely, and handled with care.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl border border-[#6F4E37]/12 bg-[#FAF6F2]/80 px-5 py-4 md:min-w-56">
              <div className="flex items-center gap-2 text-[#6F4E37]">
                <Truck className="h-4 w-4" />
                <span
                  className="text-xs uppercase tracking-[0.16em]"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                >
                  Delivery rates
                </span>
              </div>
              <p
                className="text-2xl text-[#232323]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Rs. 10–15
              </p>
              <p
                className="text-xs text-[#232323]/55"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Final rate confirmed at checkout based on location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ background: "#FAF6F2" }}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <DeliveryLocationNotice />
      <Footer />
    </div>
  );
}
