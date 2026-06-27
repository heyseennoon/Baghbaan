import { useState } from "react";
import { Link } from "react-router";
import { Filter, Search, ChevronDown } from "lucide-react";
import { CurvedDivider } from "../components/Shared";

const products = [
  { id: 1, name: "The Parisien", price: "$120", tag: "Signature", img: "https://images.unsplash.com/photo-1782038522691-7faf943aa95e?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Ivory Whisper", price: "$95", tag: "Bestseller", img: "https://images.unsplash.com/photo-1592125661285-79820f2fdf7a?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Blush Peony Set", price: "$145", tag: "Seasonal", img: "https://images.unsplash.com/photo-1582794543462-0d7922e50cf5?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Midnight Garden", price: "$110", tag: "", img: "https://images.unsplash.com/photo-1685613858397-64f79a0f3603?auto=format&fit=crop&q=80&w=600" },
  { id: 5, name: "Wild Romance", price: "$180", tag: "Luxury", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600" },
  { id: 6, name: "Casa Blanca Lily", price: "$130", tag: "", img: "https://images.unsplash.com/photo-1567428051128-5f09a0200655?w=600&h=750&fit=crop&auto=format" },
];

export default function Products() {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Featured");
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "Price: Low to High") return Number(a.price.replace("$", "")) - Number(b.price.replace("$", ""));
      if (sort === "Price: High to Low") return Number(b.price.replace("$", "")) - Number(a.price.replace("$", ""));
      return a.id - b.id;
    });

  return (
    <div className="pt-28 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1
            className="text-4xl lg:text-5xl text-[#232323] mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Curated Collection
          </h1>
          <p className="text-[#232323]/60 max-w-md" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Explore our seasonally curated bouquets, hand-tied and delivered with care.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#232323]/40" />
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search blooms..."
              className="pl-9 pr-4 py-2.5 rounded-full text-sm outline-none border border-[#6F4E37]/20 bg-transparent text-[#232323] placeholder:text-[#232323]/40 focus:border-[#6F4E37]/50 transition-colors"
              style={{ fontFamily: "'Manrope', sans-serif", width: "240px" }}
            />
          </div>
          <button
            className="md:hidden p-2.5 rounded-full border border-[#6F4E37]/20 text-[#6F4E37]"
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          >
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
        {/* Sidebar Filters */}
        <aside className={`md:w-56 shrink-0 ${mobileFilterOpen ? "block" : "hidden"} md:block`}>
          <div className="space-y-8 sticky top-32">
            <div>
              <h3 className="text-sm font-medium tracking-wide uppercase text-[#8B5E3C] mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>Category</h3>
              <ul className="space-y-2.5">
                {["All Bouquets", "Vase Arrangements", "Single Stems", "Dried Flowers", "Gifts"].map((c, i) => (
                  <li key={c}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" defaultChecked={i===0} className="accent-[#6F4E37] w-4 h-4 rounded border-[#6F4E37]/30" />
                      <span className="text-sm text-[#232323]/70 group-hover:text-[#6F4E37] transition-colors" style={{ fontFamily: "'Manrope', sans-serif" }}>{c}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-wide uppercase text-[#8B5E3C] mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>Price Range</h3>
              <ul className="space-y-2.5">
                {["Under $50", "$50 - $100", "$100 - $150", "Over $150"].map((c) => (
                  <li key={c}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="accent-[#6F4E37] w-4 h-4 rounded border-[#6F4E37]/30" />
                      <span className="text-sm text-[#232323]/70 group-hover:text-[#6F4E37] transition-colors" style={{ fontFamily: "'Manrope', sans-serif" }}>{c}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-wide uppercase text-[#8B5E3C] mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>Color Palette</h3>
              <div className="flex flex-wrap gap-2">
                {["#FFFFFF", "#F4D6D8", "#D8A7B1", "#E63946", "#F4A261", "#6F4E37"].map((color) => (
                  <button
                    key={color}
                    aria-label={`Filter by ${color}`}
                    onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                    className={`w-6 h-6 rounded-full border hover:scale-110 transition-transform ${selectedColor === color ? "ring-2 ring-[#6F4E37] ring-offset-2" : "border-black/10"}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#6F4E37]/10">
            <span className="text-sm text-[#232323]/60" style={{ fontFamily: "'Manrope', sans-serif" }}>Showing {filteredProducts.length} results</span>
            <label className="flex items-center gap-2 text-sm text-[#232323]/80" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Sort by:
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="bg-transparent outline-none cursor-pointer">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 pointer-events-none" />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="group block">
                <div className="relative overflow-hidden mb-4" style={{ borderRadius: "16px", aspectRatio: "4/5", boxShadow: "0 4px 20px rgba(111,78,55,0.06)" }}>
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {p.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#FAF6F2]/90 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-widest text-[#6F4E37] border border-[#6F4E37]/10" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      {p.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-lg text-[#232323] mb-1" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
                  {p.name}
                </h3>
                <p className="text-[#6F4E37] text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  {p.price}
                </p>
              </Link>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center gap-2">
            {[1, 2, 3].map((pageNumber) => (
              <button key={pageNumber} onClick={() => setPage(pageNumber)} className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${page === pageNumber ? "bg-[#6F4E37] text-[#FAF6F2]" : "bg-transparent text-[#232323]/60 hover:bg-[#6F4E37]/10"}`} style={{ fontFamily: "'Manrope', sans-serif" }}>
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
