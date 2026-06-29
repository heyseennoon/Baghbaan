import { useEffect, useState } from "react";
import { Link } from "react-router";
import { BotanicalVines, FloatingPetals, LeafIcon, BlossomIcon, StemIcon, useReveal } from "../components/Shared";

function QuoteCard({
  quote,
  icon,
  delay = 0,
}: {
  quote: string;
  icon: React.ReactNode;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className="flex items-start gap-3 p-4 lg:p-5 rounded-2xl transition-all duration-700"
      style={{
        background: "rgba(250,246,242,0.85)",
        border: "1px solid rgba(111,78,55,0.14)",
        boxShadow: "0 2px 20px rgba(111,78,55,0.07)",
        backdropFilter: "blur(8px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="shrink-0 mt-0.5 text-[#8B5E3C] opacity-70">{icon}</div>
      <p
        className="text-[13px] lg:text-sm leading-relaxed text-[#232323]/75 italic"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
      >
        "{quote}"
      </p>
    </div>
  );
}

function Hero() {
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const onScroll = () => setParallaxY(window.scrollY * 0.22);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { ref: titleRef, visible: titleVisible } = useReveal();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#232323]"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1646614565293-64028d70f6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaW5rJTIwYW5kJTIwV2hpdGUlMjBMaWxpZXMlMjBib3VxdWV0fGVufDF8fHx8MTc4MjY5NTU0MXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Pink and white lilies background"
          className="w-full h-full object-cover"
          style={{ 
            transform: `scale(1.1) translateY(${parallaxY * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }} 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FAF6F2] opacity-90" />
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
        <BotanicalVines />
        <FloatingPetals />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full py-28 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          <div ref={titleRef} className="flex flex-col gap-7 lg:col-span-8 xl:col-span-7">
            <div
              className="flex items-center gap-2.5 transition-all duration-700"
              style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(20px)" }}
            >
              <div className="w-6 h-px bg-[#F4D6D8]" />
              <span
                className="text-xs uppercase tracking-[0.2em] text-[#F4D6D8]"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
              >
                Botanical Boutique
              </span>
            </div>

            <h1
              className="transition-all duration-700 delay-100 leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "100ms",
              }}
            >
              Baghbaan
            </h1>

            <h2
              className="transition-all duration-700 leading-snug"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: "clamp(1.25rem, 2.8vw, 1.9rem)",
                color: "#F4D6D8",
                fontStyle: "italic",
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "200ms",
              }}
            >
              Where Every Flower Finds Its Home.
            </h2>

            <p
              className="text-sm lg:text-base leading-relaxed text-[#FAF6F2]/80 max-w-md transition-all duration-700"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 300,
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "300ms",
              }}
            >
              A sanctuary where nature's most exquisite blooms are curated with intention. From morning-gathered
              lilies to hand-tied garden bouquets — each arrangement is a quiet poem.
            </p>

            <div
              className="flex flex-wrap gap-4 transition-all duration-700"
              style={{
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "400ms",
              }}
            >
              <Link
                to="/products"
                className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  background: "#FAF6F2",
                  color: "#232323",
                  boxShadow: "0 6px 28px rgba(0,0,0,0.3)",
                }}
              >
                Explore Collection
              </Link>
              <Link
                to="/custom-design"
                className="px-8 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-white/10 inline-flex items-center justify-center backdrop-blur-md"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: "#FAF6F2",
                  border: "1.5px solid rgba(250,246,242,0.5)",
                }}
              >
                Custom Design
              </Link>
            </div>

            <div
              className="mt-4 h-px w-28 bg-gradient-to-r from-[#F4D6D8]/60 via-[#F4D6D8]/30 to-transparent transition-all duration-1000"
              style={{
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "scaleX(1)" : "scaleX(0.45)",
                transformOrigin: "left",
                transitionDelay: "500ms",
              }}
            />
          </div>

          <div className="lg:col-span-4 hidden lg:flex flex-col gap-6 justify-end items-end h-full mt-32">
            <div 
              className="p-5 flex items-center gap-4 transition-all duration-700" 
              style={{ 
                borderRadius: "24px", 
                background: "rgba(35,35,35,0.4)", 
                backdropFilter: "blur(24px)", 
                border: "1px solid rgba(250,246,242,0.15)", 
                boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "600ms",
              }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(244,214,216,0.15)" }}>
                <BlossomIcon className="w-6 h-6 text-[#F4D6D8]" />
              </div>
              <div>
                <p className="text-[11px] text-[#F4D6D8] leading-none mb-1.5 uppercase" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}>Curated Weekly</p>
                <p className="text-[15px] text-[#FAF6F2] font-semibold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Fresh from the Garden</p>
              </div>
            </div>
            
            <div 
              className="w-24 h-24 flex flex-col items-center justify-center transition-all duration-700" 
              style={{ 
                borderRadius: "50%", 
                background: "rgba(244,214,216,0.15)", 
                backdropFilter: "blur(16px)", 
                border: "1px solid rgba(244,214,216,0.3)", 
                boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "800ms",
              }}
            >
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#FAF6F2] text-center leading-relaxed font-semibold" style={{ fontFamily: "'Manrope', sans-serif" }}>Pure<br />Nature</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0 50 C360 10, 1080 70, 1440 40 L1440 80 L0 80 Z" fill="#FAF6F2" />
        </svg>
      </div>
    </section>
  );
}

const blooms = [
  {
    id: 1,
    name: "Casa Blanca Lily",
    origin: "Japanese highlands",
    scent: "Rich, sweet fragrance",
    img: "https://images.unsplash.com/photo-1567428051128-5f09a0200655?w=600&h=750&fit=crop&auto=format",
    tag: "Signature",
  },
  {
    id: 2,
    name: "Blush Ranunculus",
    origin: "Mediterranean coast",
    scent: "Delicate, powdery",
    img: "https://images.unsplash.com/photo-1612961718547-e615a67ffa8e?w=600&h=750&fit=crop&auto=format",
    tag: "Seasonal",
  },
  {
    id: 3,
    name: "Oriental Peony",
    origin: "Chinese gardens",
    scent: "Lush, romantic bloom",
    img: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=600&h=750&fit=crop&auto=format",
    tag: "Heritage",
  },
];

function BloomCard({ bloom, index }: { bloom: typeof blooms[0]; index: number }) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  return (
    <Link
      to={`/product/${bloom.id}`}
      ref={ref}
      className="group flex flex-col cursor-pointer transition-all duration-700 h-full bg-white/40 p-3 rounded-[24px] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(111,78,55,0.08)] border border-[#6F4E37]/5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div
        className="overflow-hidden mb-5 shrink-0"
        style={{
          borderRadius: "16px",
          aspectRatio: "4/5",
          boxShadow: "0 4px 20px rgba(111,78,55,0.06)",
        }}
      >
        <img
          src={bloom.img}
          alt={bloom.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ background: "#F4D6D8" }}
        />
      </div>
      <div className="px-2 pb-2 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3
            className="text-lg text-[#232323]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            {bloom.name}
          </h3>
          <span
            className="text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mt-0.5"
            style={{
              fontFamily: "'Manrope', sans-serif",
              background: "rgba(216,167,177,0.15)",
              color: "#6F4E37",
              border: "1px solid rgba(216,167,177,0.3)",
              fontWeight: 600,
            }}
          >
            {bloom.tag}
          </span>
        </div>
        <p className="text-sm text-[#8B5E3C] mb-1 font-medium"
          style={{ fontFamily: "'Manrope', sans-serif" }}>
          {bloom.origin}
        </p>
        <p className="text-sm text-[#232323]/60 italic mt-auto pt-2 border-t border-[#6F4E37]/10"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {bloom.scent}
        </p>
      </div>
    </Link>
  );
}

function PillarCard({
  title,
  body,
  icon,
  index,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
  index: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className="text-center flex flex-col items-center gap-5 transition-all duration-700 p-6 rounded-3xl hover:bg-white/40 border border-transparent hover:border-[#6F4E37]/5 hover:shadow-sm"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-[#6F4E37] mb-2"
        style={{ background: "rgba(250,246,242,0.9)", border: "1px solid rgba(111,78,55,0.12)", boxShadow: "0 4px 12px rgba(111,78,55,0.05)" }}
      >
        {icon}
      </div>
      <h3
        className="text-xl text-[#232323]"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
      >
        {title}
      </h3>
      <p
        className="text-[15px] leading-relaxed text-[#232323]/70 max-w-xs"
        style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400 }}
      >
        {body}
      </p>
    </div>
  );
}

function FeaturedBlooms() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 relative overflow-hidden" style={{ background: "#FAF6F2" }}>
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <BotanicalVines />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-px bg-[#8B5E3C]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#8B5E3C]"
                style={{ fontFamily: "'Manrope', sans-serif" }}>
                The Collection
              </span>
            </div>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                color: "#232323",
                letterSpacing: "-0.01em",
              }}
            >
              Featured Blooms
            </h2>
          </div>
          <p
            className="max-w-xs text-sm leading-relaxed text-[#232323]/60"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 300 }}
          >
            Each flower is selected at peak perfection — harvested at dawn, arranged with care, delivered
            before noon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blooms.map((b, i) => (
            <BloomCard key={b.name} bloom={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const { ref, visible } = useReveal();
  return (
    <section
      className="py-24 lg:py-36 px-6 lg:px-10 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F4D6D8 0%, #EDE8E3 60%, #FAF6F2 100%)" }}
    >
      <FloatingPetals />
      <div className="max-w-5xl mx-auto relative z-10">
        <div
          ref={ref}
          className="text-center transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}
        >
          <LeafIcon className="w-10 h-10 text-[#6F4E37] mx-auto mb-8 opacity-70" />
          <h2
            className="mb-8 leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#232323",
              fontStyle: "italic",
            }}
          >
            "In every petal, a conversation between<br className="hidden md:block" /> earth and beauty."
          </h2>
          <div className="w-12 h-px bg-[#8B5E3C] mx-auto mb-6 opacity-50" />
          <p
            className="text-sm text-[#6F4E37]/80 tracking-widest uppercase"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, letterSpacing: "0.2em" }}
          >
            The Baghbaan Philosophy
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { title: "Sourced with Care", body: "Every stem is selected from ethical farms that respect the soil, the season, and the grower.", icon: <StemIcon className="w-6 h-6" /> },
            { title: "Arranged with Intent", body: "Our florists do not merely place flowers — they compose living poems with colour and form.", icon: <BlossomIcon className="w-6 h-6" /> },
            { title: "Delivered with Love", body: "Wrapped in botanical tissue, sealed with a wax stamp, delivered to your door before the dew dries.", icon: <LeafIcon className="w-6 h-6" /> },
          ].map((p, i) => (
            <PillarCard key={p.title} title={p.title} body={p.body} icon={p.icon} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GardenStrip() {
  const imgs = [
    { src: "https://images.unsplash.com/photo-1631407779166-86952be9dbd7?w=500&h=600&fit=crop&auto=format", alt: "White flowers in glass vase" },
    { src: "https://images.unsplash.com/photo-1501973931234-5ac2964cd94a?w=500&h=700&fit=crop&auto=format", alt: "White six-petaled flower" },
    { src: "https://images.unsplash.com/photo-1516037239867-ff3e7ad0d607?w=500&h=550&fit=crop&auto=format", alt: "White petaled flower editorial" },
    { src: "https://images.unsplash.com/photo-1562048048-86d659689440?w=500&h=680&fit=crop&auto=format", alt: "Pink flower painting" },
  ];

  const { ref, visible } = useReveal();
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 overflow-hidden" style={{ background: "#FAF6F2" }}>
      <div
        ref={ref}
        className="flex gap-4 lg:gap-6 overflow-x-auto pb-4 transition-all duration-700 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-w-[100vw]"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-24px)", WebkitOverflowScrolling: "touch" }}
      >
        {imgs.map((img, i) => (
          <div
            key={i}
            className="shrink-0 overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(111,78,55,0.15)]"
            style={{
              borderRadius: "24px",
              width: "clamp(180px, 25vw, 320px)",
              height: "clamp(240px, 32vw, 420px)",
              boxShadow: "0 8px 30px rgba(111,78,55,0.08)",
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              style={{ background: "#F4D6D8" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Isabelle M.", role: "Interior designer, Paris", quote: "Baghbaan transformed my studio. Their lilies lasted three weeks and smelled like heaven every morning." },
  { name: "Tariq N.", role: "Event planner, Dubai", quote: "Impeccable taste. Every arrangement felt curated by someone who truly understands beauty and restraint." },
  { name: "Reeva S.", role: "Architect, Mumbai", quote: "I've tried many florists. None come close. The packaging alone is an act of art." },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className="p-8 flex flex-col gap-6 transition-all duration-700 hover:-translate-y-1 h-full"
      style={{
        borderRadius: "24px",
        background: "rgba(250,246,242,0.9)",
        border: "1px solid rgba(111,78,55,0.08)",
        boxShadow: "0 10px 40px rgba(111,78,55,0.04)",
        transitionDelay: `${index * 120}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="flex gap-1.5">
        {[...Array(5)].map((_, s) => (
          <span key={s} className="text-[#D8A7B1] text-sm">★</span>
        ))}
      </div>
      <p
        className="text-[#232323]/80 leading-relaxed flex-1 italic"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
      >
        "{testimonial.quote}"
      </p>
      <div className="border-t border-[#6F4E37]/10 pt-5 mt-auto">
        <p className="text-[15px] font-medium text-[#232323]"
          style={{ fontFamily: "'Manrope', sans-serif" }}>
          {testimonial.name}
        </p>
        <p className="text-[13px] text-[#8B5E3C]/80 mt-1"
          style={{ fontFamily: "'Manrope', sans-serif" }}>
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}

function Testimonials() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10" style={{ background: "#FAF6F2" }}>
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="w-6 h-px bg-[#8B5E3C]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#8B5E3C]"
              style={{ fontFamily: "'Manrope', sans-serif" }}>
              Voices
            </span>
            <div className="w-6 h-px bg-[#8B5E3C]" />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", color: "#232323", letterSpacing: "-0.01em" }}>
            What Our Garden Inspires
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const { ref, visible } = useReveal();
  return (
    <section
      className="py-24 lg:py-32 px-6 lg:px-10 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #6F4E37 0%, #8B5E3C 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <BotanicalVines />
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "rgba(244,214,216,0.08)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "rgba(165,179,138,0.07)", transform: "translate(-25%, 35%)" }} />

      <div
        ref={ref}
        className="max-w-2xl mx-auto text-center relative z-10 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}
      >
        <BlossomIcon className="w-10 h-10 text-[#F4D6D8] mx-auto mb-8 opacity-60" />
        <h2
          className="mb-5 leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
            color: "#FAF6F2",
            letterSpacing: "-0.01em",
          }}
        >
          Receive the Garden Letter
        </h2>
        <p
          className="mb-10 text-sm leading-relaxed text-[#FAF6F2]/70 max-w-md mx-auto"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 300 }}
        >
          Weekly notes on what's blooming, what's rare, and how to bring nature's quiet luxury into your
          everyday life.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none placeholder:text-[#FAF6F2]/40 text-[#FAF6F2]"
            style={{
              fontFamily: "'Manrope', sans-serif",
              background: "rgba(250,246,242,0.12)",
              border: "1px solid rgba(250,246,242,0.2)",
            }}
          />
          <button
            className="px-8 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shrink-0 inline-flex items-center justify-center"
            style={{
              fontFamily: "'Manrope', sans-serif",
              background: "#FAF6F2",
              color: "#6F4E37",
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedBlooms />
      <Philosophy />
      <GardenStrip />
      <Testimonials />
      <Newsletter />
    </>
  );
}
