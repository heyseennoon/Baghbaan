import { Link } from "react-router";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, count, subtotal, increase, decrease, remove } = useCart();
  const formattedSubtotal = `$${subtotal.toFixed(2)}`;

  return (
    <div className="pt-28 pb-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <h1 className="text-3xl lg:text-4xl text-[#232323] mb-10" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
        Your Bag ({count})
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className="space-y-6">
            {items.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#6F4E37]/10 p-8 text-center">
                <p className="text-[#232323]/70 mb-5" style={{ fontFamily: "'Manrope', sans-serif" }}>Your bag is empty.</p>
                <Link to="/products" className="inline-flex px-6 py-3 rounded-full text-sm font-medium" style={{ fontFamily: "'Manrope', sans-serif", background: "#6F4E37", color: "#FAF6F2" }}>
                  Explore Collection
                </Link>
              </div>
            ) : items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-6 p-4 lg:p-6 bg-white rounded-2xl border border-[#6F4E37]/10 shadow-[0_4px_20px_rgba(111,78,55,0.03)]">
                <div className="w-24 h-32 lg:w-32 lg:h-40 rounded-xl overflow-hidden shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-lg text-[#232323] mb-1" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>{item.name}</h3>
                      <p className="text-sm text-[#232323]/60" style={{ fontFamily: "'Manrope', sans-serif" }}>Size: {item.size}</p>
                    </div>
                    <button aria-label="Remove item" onClick={() => remove(item.id)} className="text-[#232323]/40 hover:text-[#d4183d] transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-[#6F4E37]/20 rounded-full h-10">
                      <button aria-label="Decrease quantity" onClick={() => decrease(item.id)} className="w-10 flex items-center justify-center text-[#232323]/60 hover:text-[#6F4E37]"><Minus className="w-3.5 h-3.5" /></button>
                      <span className="w-6 text-center text-sm text-[#232323] font-medium" style={{ fontFamily: "'Manrope', sans-serif" }}>{item.quantity}</span>
                      <button aria-label="Increase quantity" onClick={() => increase(item.id)} className="w-10 flex items-center justify-center text-[#232323]/60 hover:text-[#6F4E37]"><Plus className="w-3.5 h-3.5" /></button>
                    </div>
                    <p className="text-[#6F4E37] font-medium" style={{ fontFamily: "'Manrope', sans-serif" }}>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
             <label className="block text-sm text-[#232323]/80 font-medium mb-3" style={{ fontFamily: "'Manrope', sans-serif" }}>Add a Gift Note</label>
             <textarea rows={3} placeholder="Write your message here. It will be handwritten on our signature botanical card..." className="w-full p-4 rounded-xl border border-[#6F4E37]/20 bg-white outline-none focus:border-[#6F4E37] resize-none text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}></textarea>
          </div>
        </div>

        <div className="lg:w-[400px]">
          <div className="bg-[#FAF6F2] p-6 lg:p-8 rounded-3xl border border-[#6F4E37]/15 shadow-[0_8px_30px_rgba(111,78,55,0.08)] sticky top-28">
            <h2 className="text-xl text-[#232323] mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>
              <div className="flex justify-between text-[#232323]/80">
                <span>Subtotal</span>
                <span>{formattedSubtotal}</span>
              </div>
              <div className="flex justify-between text-[#232323]/80">
                <span>Delivery</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-[#6F4E37]/10 pt-4 flex justify-between text-[#232323] font-medium text-lg">
                <span>Total</span>
                <span>{formattedSubtotal}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full h-14 flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ fontFamily: "'Manrope', sans-serif", background: "#6F4E37", color: "#FAF6F2" }}
            >
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="text-center text-xs text-[#232323]/50 mt-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Secure checkout. All major credit cards accepted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
