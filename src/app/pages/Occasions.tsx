import { Link } from "react-router";

const occasions = [
  { name: "Wedding & Bridal", desc: "A symphony of white roses and lush greenery.", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80" },
  { name: "Anniversary", desc: "Deep reds and passionate pinks.", img: "https://images.unsplash.com/photo-1582794543462-0d7922e50cf5?auto=format&fit=crop&w=800&q=80" },
  { name: "Birthday", desc: "Bright, cheerful, and full of life.", img: "https://images.unsplash.com/photo-1685613858397-64f79a0f3603?auto=format&fit=crop&w=800&q=80" },
  { name: "Sympathy", desc: "Gentle whites and muted tones.", img: "https://images.unsplash.com/photo-1592125661285-79820f2fdf7a?auto=format&fit=crop&w=800&q=80" },
  { name: "Congratulations", desc: "Bold structures and statement blooms.", img: "https://images.unsplash.com/photo-1782038522691-7faf943aa95e?auto=format&fit=crop&w=800&q=80" },
];

export default function Occasions() {
  return (
    <div className="pt-28 pb-24 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-[#8B5E3C] mb-4 block" style={{ fontFamily: "'Manrope', sans-serif" }}>Moments to Remember</span>
        <h1 className="text-4xl lg:text-6xl text-[#232323] mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
          Shop by Occasion
        </h1>
        <p className="text-[#232323]/60 max-w-lg mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
          Every emotion has its botanical equivalent. Find the perfect expression for your specific moment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {occasions.map((occ, i) => (
          <Link
            to="/products"
            key={occ.name}
            className={`group relative overflow-hidden rounded-3xl ${i === 0 ? "md:col-span-2 md:aspect-[2.5/1]" : "aspect-[4/3]"} block`}
            style={{ boxShadow: "0 10px 40px rgba(111,78,55,0.12)" }}
          >
            <img src={occ.img} alt={occ.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-10">
              <h2 className="text-2xl lg:text-4xl text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
                {occ.name}
              </h2>
              <p className="text-white/80 font-light opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100" style={{ fontFamily: "'Manrope', sans-serif" }}>
                {occ.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
