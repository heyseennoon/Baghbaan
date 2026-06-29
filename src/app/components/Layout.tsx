import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { BlossomIcon } from "./Shared";
import { LayoutDashboard, MapPin, ShoppingBag, Truck, User } from "lucide-react";
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

  const isHomePage = location.pathname === "/";
  const isDarkBg = isHomePage && !scrolled;

  const textColorClass = isDarkBg ? "text-[#FAF6F2]" : "text-[#232323]";
  const textColorHoverClass = isDarkBg ? "group-hover:text-[#F4D6D8]" : "group-hover:text-[#6F4E37]";
  const linkColorClass = isDarkBg ? "text-[#FAF6F2]/80" : "text-[#232323]/70";
  const linkHoverClass = isDarkBg ? "hover:text-[#F4D6D8]" : "hover:text-[#6F4E37]";
  const iconColorClass = isDarkBg ? "text-[#F4D6D8]" : "text-[#6F4E37]";
  const buttonBgClass = isDarkBg ? "bg-[#FAF6F2]" : "bg-[#6F4E37]";
  const buttonTextClass = isDarkBg ? "text-[#232323]" : "text-[#FAF6F2]";

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
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 relative transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105">
            <BlossomIcon className={`w-full h-full transition-colors duration-300 ${iconColorClass}`} />
          </div>
          <span
            className={`text-2xl lg:text-[28px] tracking-wide transition-colors duration-300 ${textColorClass} ${textColorHoverClass}`}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, letterSpacing: "0.02em" }}
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
                className={`text-sm transition-colors duration-300 tracking-wide ${linkColorClass} ${linkHoverClass}`}
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA & Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/admin"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all hover:-translate-y-0.5"
            style={{ 
              fontFamily: "'Manrope', sans-serif", 
              background: isDarkBg ? "rgba(250,246,242,0.1)" : "rgba(29,92,63,0.08)", 
              color: isDarkBg ? "#FAF6F2" : "#1D5C3F", 
              border: isDarkBg ? "1px solid rgba(250,246,242,0.25)" : "1px solid rgba(29,92,63,0.15)" 
            }}
          >
            <LayoutDashboard className="w-4 h-4" strokeWidth={1.5} /> Admin
          </Link>
          <Link to="/user-dashboard" className={`${linkColorClass} ${linkHoverClass} transition-colors duration-300`}>
            <User className="w-5 h-5" strokeWidth={1.5} />
          </Link>
          <Link to="/cart" className={`relative ${linkColorClass} ${linkHoverClass} transition-colors duration-300`}>
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 bg-[#D8A7B1] rounded-full text-[10px] text-[#FAF6F2] flex items-center justify-center font-bold shadow-sm">
                {count}
              </span>
            )}
          </Link>
          <Link
            to="/products"
            className={`ml-3 px-7 py-3 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center ${buttonBgClass} ${buttonTextClass}`}
            style={{
              fontFamily: "'Manrope', sans-serif",
              boxShadow: isDarkBg ? "0 6px 20px rgba(0,0,0,0.15)" : "0 6px 20px rgba(111,78,55,0.25)",
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
          <span className={`block w-5 h-0.5 transition-colors duration-300 ${isDarkBg ? "bg-[#FAF6F2]" : "bg-[#232323]"} transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 transition-colors duration-300 ${isDarkBg ? "bg-[#FAF6F2]" : "bg-[#232323]"} transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 transition-colors duration-300 ${isDarkBg ? "bg-[#FAF6F2]" : "bg-[#232323]"} transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
          <div className="flex gap-4 mt-2 pt-4 border-t border-[#6F4E37]/10 flex-wrap">
            <Link to="/user-dashboard" className="text-[#232323]/80 flex items-center gap-2">
              <User className="w-4 h-4" /> Profile
            </Link>
            <Link to="/cart" className="text-[#232323]/80 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Cart ({count})
            </Link>
            
          </div>
          <Link
            to="/products"
            className="mt-4 px-8 py-3.5 rounded-full text-sm font-medium text-center w-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center"
            style={{ background: "#6F4E37", color: "#FAF6F2", fontFamily: "'Manrope', sans-serif", boxShadow: "0 6px 20px rgba(111,78,55,0.25)" }}
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
    <footer className="px-6 lg:px-10 pt-20 pb-12" style={{ background: "#232323" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group inline-flex">
              <div className="w-8 h-8 relative transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105">
                <BlossomIcon className="w-full h-full text-[#D8A7B1]" />
              </div>
              <span
                className="text-2xl text-[#FAF6F2] transition-colors group-hover:text-[#D8A7B1]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, letterSpacing: "0.02em" }}
              >
                Baghbaan
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed text-[#FAF6F2]/60 max-w-xs"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400 }}
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
          <div className="flex items-center gap-6">
            <p
              className="text-xs text-[#FAF6F2]/25 italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Where every flower finds its home.
            </p>
            <Link
              to="/admin"
              className="flex items-center gap-1.5 text-xs transition-colors hover:text-[#D8A7B1]"
              style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(250,246,242,0.25)" }}
            >
              <LayoutDashboard className="w-3 h-3" /> ADMIN
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function DeliveryLocationNotice() {
  return (
    <section className="px-6 lg:px-10 py-16 lg:py-24" style={{ background: "#FAF6F2" }}>
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] border border-[#D8A7B1]/35 bg-white/65 p-8 md:p-12 shadow-[0_24px_60px_rgba(111,78,55,0.08)]">
          <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#F4D6D8]/50 blur-2xl" />
          <div className="absolute -left-8 -bottom-14 h-32 w-32 rounded-full bg-[#A5B38A]/20 blur-2xl" />

          <div className="relative z-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#6F4E37] text-[#FAF6F2] shadow-[0_12px_30px_rgba(111,78,55,0.22)]">
                <MapPin className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <p
                  className="mb-2 text-[13px] uppercase tracking-[0.2em] text-[#8B5E3C]"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
                >
                  Delivery area
                </p>
                <h3
                  className="text-2xl text-[#232323] md:text-[32px] leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                >
                  We currently deliver only in Rawalpindi & Islamabad.
                </h3>
                <p
                  className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#232323]/70"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400 }}
                >
                  Please place your order only if the delivery address is within RWP / ISB service points.
                  This helps us keep bouquets fresh, timely, and handled with care.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-[24px] border border-[#6F4E37]/10 bg-[#FAF6F2]/90 px-6 py-6 md:min-w-64">
              <div className="flex items-center gap-2.5 text-[#6F4E37]">
                <Truck className="h-5 w-5" strokeWidth={1.5} />
                <span
                  className="text-[13px] uppercase tracking-[0.16em]"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
                >
                  Delivery rates
                </span>
              </div>
              <p
                className="text-3xl text-[#232323]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Rs. 10–15
              </p>
              <p
                className="text-[13px] text-[#232323]/60"
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
