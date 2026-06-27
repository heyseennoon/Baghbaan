import { useState } from "react";
import { UploadCloud, Check } from "lucide-react";

export default function CustomDesign() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-28 pb-24 px-6 lg:px-10 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl text-[#232323] mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
          Bespoke Creations
        </h1>
        <p className="text-[#232323]/60 max-w-lg mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
          Have a specific vision? Share your inspiration, color palette, and preferred blooms. Our florists will craft a unique piece just for you.
        </p>
      </div>

      {submitted ? (
        <div className="bg-white p-12 rounded-3xl text-center shadow-[0_8px_30px_rgba(111,78,55,0.06)] border border-[#6F4E37]/10">
          <div className="w-16 h-16 bg-[#F4D6D8] text-[#6F4E37] rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8" />
          </div>
          <h2 className="text-2xl text-[#232323] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Inquiry Received</h2>
          <p className="text-[#232323]/70 mb-8" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Our master florist is reviewing your request. We will reach out within 24 hours with a conceptual proposal and quote.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 rounded-full text-sm font-medium tracking-wide"
            style={{ fontFamily: "'Manrope', sans-serif", background: "transparent", color: "#6F4E37", border: "1px solid #6F4E37" }}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form 
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="bg-white/60 backdrop-blur-md p-8 lg:p-12 rounded-3xl shadow-[0_8px_30px_rgba(111,78,55,0.06)] border border-[#6F4E37]/10 space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#232323]/80" style={{ fontFamily: "'Manrope', sans-serif" }}>Full Name</label>
              <input required type="text" className="w-full px-4 py-3 bg-white rounded-xl border border-[#6F4E37]/20 outline-none focus:border-[#6F4E37]" style={{ fontFamily: "'Manrope', sans-serif" }} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#232323]/80" style={{ fontFamily: "'Manrope', sans-serif" }}>Email Address</label>
              <input required type="email" className="w-full px-4 py-3 bg-white rounded-xl border border-[#6F4E37]/20 outline-none focus:border-[#6F4E37]" style={{ fontFamily: "'Manrope', sans-serif" }} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#232323]/80" style={{ fontFamily: "'Manrope', sans-serif" }}>Occasion / Purpose</label>
            <select className="w-full px-4 py-3 bg-white rounded-xl border border-[#6F4E37]/20 outline-none focus:border-[#6F4E37] appearance-none" style={{ fontFamily: "'Manrope', sans-serif" }}>
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Personal Gift</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#232323]/80" style={{ fontFamily: "'Manrope', sans-serif" }}>Inspiration Details</label>
            <textarea required rows={4} placeholder="Tell us about the colors, specific flowers, and the feeling you want to evoke..." className="w-full px-4 py-3 bg-white rounded-xl border border-[#6F4E37]/20 outline-none focus:border-[#6F4E37] resize-none" style={{ fontFamily: "'Manrope', sans-serif" }} />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#232323]/80" style={{ fontFamily: "'Manrope', sans-serif" }}>Upload Inspiration (Optional)</label>
            <div className="border-2 border-dashed border-[#6F4E37]/20 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-white/50 cursor-pointer hover:bg-[#F4D6D8]/20 transition-colors">
              <UploadCloud className="w-8 h-8 text-[#6F4E37]/60 mb-3" />
              <p className="text-sm text-[#232323]/70 mb-1" style={{ fontFamily: "'Manrope', sans-serif" }}>Click to upload or drag and drop</p>
              <p className="text-xs text-[#232323]/40" style={{ fontFamily: "'Manrope', sans-serif" }}>SVG, PNG, JPG or GIF (max. 5MB)</p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#232323]/80" style={{ fontFamily: "'Manrope', sans-serif" }}>Estimated Budget</label>
            <select className="w-full px-4 py-3 bg-white rounded-xl border border-[#6F4E37]/20 outline-none focus:border-[#6F4E37] appearance-none" style={{ fontFamily: "'Manrope', sans-serif" }}>
              <option>$100 - $250</option>
              <option>$250 - $500</option>
              <option>$500 - $1000</option>
              <option>$1000+</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg"
            style={{ fontFamily: "'Manrope', sans-serif", background: "#6F4E37", color: "#FAF6F2" }}
          >
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
}
