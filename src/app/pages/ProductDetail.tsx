import { useState } from "react";
import { Heart, Minus, Plus, ShoppingBag, Star, Truck } from "lucide-react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  return (
    <div className="pt-28 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#232323]/50 mb-8" style={{ fontFamily: "'Manrope', sans-serif" }}>
        <Link to="/" className="hover:text-[#6F4E37]">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-[#6F4E37]">Products</Link>
        <span>/</span>
        <span className="text-[#232323]">The Parisien</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Images */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl shadow-sm aspect-[4/5] bg-white">
            <img src="https://images.unsplash.com/photo-1782038522691-7faf943aa95e?auto=format&fit=crop&q=80&w=800" alt="The Parisien" className="w-full h-full object-cover" />
            <span className="absolute top-4 left-4 px-4 py-1.5 bg-[#FAF6F2]/90 backdrop-blur-sm rounded-full text-xs uppercase tracking-widest text-[#6F4E37] border border-[#6F4E37]/10" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Signature
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden cursor-pointer border border-transparent hover:border-[#6F4E37]/30 transition-colors">
                <img src={`https://images.unsplash.com/photo-1782038522691-7faf943aa95e?auto=format&fit=crop&q=80&w=300&crop=entropy`} alt="Detail" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-5xl text-[#232323] mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
            The Parisien
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <p className="text-2xl text-[#6F4E37]" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}>$120.00</p>
            <div className="flex items-center gap-1 text-sm text-[#232323]/60" style={{ fontFamily: "'Manrope', sans-serif" }}>
              <div className="flex text-[#D8A7B1]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span>(24 Reviews)</span>
            </div>
          </div>

          <p className="text-[#232323]/70 leading-relaxed mb-8" style={{ fontFamily: "'Manrope', sans-serif" }}>
            An evocative arrangement inspired by early mornings along the Seine. Featuring delicate blush ranunculus, creamy spray roses, and architectural branches of eucalyptus. Wrapped in our signature natural linen paper and bound with raw silk ribbon.
          </p>

          <div className="space-y-6 mb-10">
            <div>
              <h4 className="text-sm uppercase tracking-widest text-[#8B5E3C] mb-3" style={{ fontFamily: "'Manrope', sans-serif" }}>Size</h4>
              <div className="flex gap-3">
                {["Classic", "Grand (+$30)", "Luxe (+$60)"].map((size, i) => (
                  <button key={size} className={`px-4 py-2.5 rounded-full text-sm border ${i === 0 ? "border-[#6F4E37] bg-[#6F4E37]/5 text-[#6F4E37]" : "border-[#6F4E37]/20 text-[#232323]/60 hover:border-[#6F4E37]/50"}`} style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-[#6F4E37]/20 rounded-full bg-white h-12">
                <button aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))} className="w-12 flex items-center justify-center text-[#232323]/60 hover:text-[#6F4E37]">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-[#232323] font-medium" style={{ fontFamily: "'Manrope', sans-serif" }}>{qty}</span>
                <button aria-label="Increase quantity" onClick={() => setQty(qty + 1)} className="w-12 flex items-center justify-center text-[#232323]/60 hover:text-[#6F4E37]">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => addItem({
                  id: 1,
                  name: "The Parisien",
                  size: "Classic",
                  price: 120,
                  quantity: qty,
                  img: "https://images.unsplash.com/photo-1782038522691-7faf943aa95e?auto=format&fit=crop&q=80&w=300",
                })}
                className="flex-1 h-12 flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ fontFamily: "'Manrope', sans-serif", background: "#6F4E37", color: "#FAF6F2" }}
              >
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>
              <button aria-label="Add to wishlist" className="w-12 h-12 rounded-full border border-[#6F4E37]/20 flex items-center justify-center text-[#6F4E37] hover:bg-[#F4D6D8]/20 transition-colors bg-white">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-white/50 rounded-2xl p-5 space-y-4 border border-[#6F4E37]/10 mb-8">
            <div className="flex gap-4">
              <Truck className="w-5 h-5 text-[#8B5E3C] shrink-0" />
              <div>
                <h5 className="text-sm font-medium text-[#232323]" style={{ fontFamily: "'Manrope', sans-serif" }}>Same Day Delivery</h5>
                <p className="text-xs text-[#232323]/60 mt-1" style={{ fontFamily: "'Manrope', sans-serif" }}>Order before 1 PM for same-day delivery in metro areas.</p>
              </div>
            </div>
          </div>

          {/* Accordions (Visual only) */}
          <div className="border-t border-[#6F4E37]/10 pt-4">
            {["Care Instructions", "Delivery & Returns", "About the Florist"].map((item) => (
              <div key={item} className="py-4 border-b border-[#6F4E37]/10 flex justify-between items-center cursor-pointer group">
                <span className="text-sm font-medium text-[#232323] group-hover:text-[#6F4E37] transition-colors" style={{ fontFamily: "'Manrope', sans-serif" }}>{item}</span>
                <Plus className="w-4 h-4 text-[#232323]/40 group-hover:text-[#6F4E37] transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
