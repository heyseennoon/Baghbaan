import { useState } from "react";
import { CreditCard, Truck, CheckCircle2, ChevronLeft } from "lucide-react";
import { Link } from "react-router";

export default function Checkout() {
  const [step, setStep] = useState(1);

  return (
    <div className="pt-28 pb-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <Link to="/cart" className="inline-flex items-center gap-2 text-sm text-[#232323]/60 hover:text-[#6F4E37] mb-8" style={{ fontFamily: "'Manrope', sans-serif" }}>
        <ChevronLeft className="w-4 h-4" /> Back to Cart
      </Link>
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="flex-1">
          <h1 className="text-3xl text-[#232323] mb-10" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
            Checkout
          </h1>

          <div className="space-y-8">
            {/* Step 1: Delivery Details */}
            <div className={`p-6 md:p-8 rounded-3xl border ${step === 1 ? "border-[#6F4E37]/30 bg-white shadow-md" : "border-[#6F4E37]/10 bg-white/50"}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === 1 ? "bg-[#6F4E37] text-white" : step > 1 ? "bg-[#7A8450] text-white" : "bg-[#232323]/10"}`}>
                  {step > 1 ? <CheckCircle2 className="w-5 h-5" /> : "1"}
                </div>
                <h2 className="text-xl text-[#232323]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>Delivery Details</h2>
              </div>
              
              {step === 1 && (
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-[#232323]/70 mb-1.5 block" style={{ fontFamily: "'Manrope', sans-serif" }}>Recipient's First Name</label>
                      <input required type="text" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
                    </div>
                    <div>
                      <label className="text-xs text-[#232323]/70 mb-1.5 block" style={{ fontFamily: "'Manrope', sans-serif" }}>Recipient's Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-[#232323]/70 mb-1.5 block" style={{ fontFamily: "'Manrope', sans-serif" }}>Delivery Address</label>
                    <input required type="text" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-[#232323]/70 mb-1.5 block" style={{ fontFamily: "'Manrope', sans-serif" }}>City</label>
                      <input required type="text" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
                    </div>
                    <div>
                      <label className="text-xs text-[#232323]/70 mb-1.5 block" style={{ fontFamily: "'Manrope', sans-serif" }}>Postal Code</label>
                      <input required type="text" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-[#232323]/70 mb-1.5 block" style={{ fontFamily: "'Manrope', sans-serif" }}>Delivery Date</label>
                    <input required type="date" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
                  </div>
                  <button type="submit" className="mt-4 px-8 py-3 rounded-full text-sm font-medium tracking-wide" style={{ fontFamily: "'Manrope', sans-serif", background: "#6F4E37", color: "#FAF6F2" }}>Continue to Payment</button>
                </form>
              )}
            </div>

            {/* Step 2: Payment */}
            <div className={`p-6 md:p-8 rounded-3xl border ${step === 2 ? "border-[#6F4E37]/30 bg-white shadow-md" : "border-[#6F4E37]/10 bg-white/50"}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === 2 ? "bg-[#6F4E37] text-white" : "bg-[#232323]/10"}`}>
                  2
                </div>
                <h2 className="text-xl text-[#232323]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>Payment</h2>
              </div>
              
              {step === 2 && (
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                  <div className="flex gap-4 mb-4">
                    <label className="flex-1 border border-[#6F4E37] bg-[#6F4E37]/5 p-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer">
                      <CreditCard className="w-5 h-5 text-[#6F4E37]" />
                      <span className="text-sm font-medium text-[#6F4E37]" style={{ fontFamily: "'Manrope', sans-serif" }}>Credit Card</span>
                    </label>
                    <label className="flex-1 border border-[#6F4E37]/20 bg-white p-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:border-[#6F4E37]/50 transition-colors">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-70" />
                    </label>
                  </div>
                  <div>
                    <label className="text-xs text-[#232323]/70 mb-1.5 block" style={{ fontFamily: "'Manrope', sans-serif" }}>Card Number</label>
                    <input required type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-[#232323]/70 mb-1.5 block" style={{ fontFamily: "'Manrope', sans-serif" }}>Expiry Date</label>
                      <input required type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
                    </div>
                    <div>
                      <label className="text-xs text-[#232323]/70 mb-1.5 block" style={{ fontFamily: "'Manrope', sans-serif" }}>CVC</label>
                      <input required type="text" placeholder="123" className="w-full px-4 py-3 bg-[#FAF6F2] rounded-xl border border-transparent outline-none focus:border-[#6F4E37]/30 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }} />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg mt-4" style={{ fontFamily: "'Manrope', sans-serif", background: "#6F4E37", color: "#FAF6F2" }}>Place Order</button>
                </form>
              )}
            </div>
            
            {step === 3 && (
               <div className="p-10 rounded-3xl bg-white shadow-xl text-center border border-[#6F4E37]/20">
                 <div className="w-20 h-20 bg-[#F4D6D8]/50 text-[#6F4E37] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                 </div>
                 <h2 className="text-3xl text-[#232323] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Thank You For Your Order</h2>
                 <p className="text-[#232323]/70 mb-8 max-w-sm mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    Order #BB-9042 has been confirmed. We've sent a receipt to your email address.
                 </p>
                 <Link to="/" className="inline-block px-8 py-3 rounded-full text-sm font-medium" style={{ fontFamily: "'Manrope', sans-serif", background: "#6F4E37", color: "#FAF6F2" }}>
                   Return Home
                 </Link>
               </div>
            )}
          </div>
        </div>

        {/* Mini Order Summary */}
        <div className={`lg:w-[380px] ${step === 3 ? 'opacity-50 pointer-events-none' : ''}`}>
          <div className="bg-[#FAF6F2] p-6 rounded-3xl border border-[#6F4E37]/15 sticky top-28">
            <h3 className="text-lg text-[#232323] mb-5" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="w-16 h-20 bg-white rounded-lg overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1782038522691-7faf943aa95e?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover"/></div>
                <div className="flex-1 text-sm pt-1" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  <p className="font-medium text-[#232323]">The Parisien</p>
                  <p className="text-[#232323]/50">Qty 1</p>
                  <p className="text-[#6F4E37] mt-1">$120.00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-20 bg-white rounded-lg overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1582794543462-0d7922e50cf5?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover"/></div>
                <div className="flex-1 text-sm pt-1" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  <p className="font-medium text-[#232323]">Blush Peony Set</p>
                  <p className="text-[#232323]/50">Qty 1</p>
                  <p className="text-[#6F4E37] mt-1">$145.00</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-[#6F4E37]/10 pt-4 space-y-3 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>
              <div className="flex justify-between text-[#232323]/80"><span>Subtotal</span><span>$265.00</span></div>
              <div className="flex justify-between text-[#232323]/80"><span>Delivery</span><span>$15.00</span></div>
              <div className="flex justify-between text-[#232323] font-medium text-lg pt-2"><span>Total</span><span>$280.00</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
