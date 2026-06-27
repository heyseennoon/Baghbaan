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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FAF6F2 0%, #F4D6D8 40%, #FAF6F2 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <BotanicalVines />
        <FloatingPetals />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-28 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center w-full">
          <div ref={titleRef} className="flex flex-col gap-7">
            <div
              className="flex items-center gap-2.5 transition-all duration-700"
              style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(20px)" }}
            >
              <div className="w-6 h-px bg-[#8B5E3C]" />
              <span
                className="text-xs uppercase tracking-[0.2em] text-[#8B5E3C]"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}
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
                color: "#232323",
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
                color: "#6F4E37",
                fontStyle: "italic",
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "200ms",
              }}
            >
              Where Every Flower Finds Its Home.
            </h2>

            <p
              className="text-sm lg:text-base leading-relaxed text-[#232323]/65 max-w-md transition-all duration-700"
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
              className="flex flex-wrap gap-3 transition-all duration-700"
              style={{
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "400ms",
              }}
            >
              <Link
                to="/products"
                className="px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  background: "#6F4E37",
                  color: "#FAF6F2",
                  boxShadow: "0 6px 28px rgba(111,78,55,0.3)",
                }}
              >
                Explore Collection
              </Link>
              <Link
                to="/custom-design"
                className="px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:bg-[#6F4E37]/8 inline-block"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: "#6F4E37",
                  border: "1.5px solid rgba(111,78,55,0.35)",
                }}
              >
                Custom Design
              </Link>
            </div>

            <div
              className="mt-3 h-px w-28 bg-gradient-to-r from-[#8B5E3C]/35 via-[#D8A7B1]/55 to-transparent transition-all duration-1000"
              style={{
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "scaleX(1)" : "scaleX(0.45)",
                transformOrigin: "left",
                transitionDelay: "500ms",
              }}
            />
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-8 pointer-events-none" style={{ opacity: 0.05 }}>
              <svg viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="300" cy="350" r="280" stroke="#6F4E37" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="300" cy="350" r="220" stroke="#7A8450" strokeWidth="0.7" strokeDasharray="2 6" />
                <path d="M300 70 C340 120, 360 160, 350 200 C340 240, 310 260, 300 310" stroke="#6F4E37" strokeWidth="1.2" />
                <ellipse cx="350" cy="195" rx="30" ry="16" transform="rotate(20 350 195)" stroke="#7A8450" strokeWidth="1" />
                <ellipse cx="255" cy="230" rx="24" ry="13" transform="rotate(-25 255 230)" stroke="#7A8450" strokeWidth="1" />
              </svg>
            </div>

            <div className="relative w-full max-w-sm lg:max-w-none lg:w-[90%] xl:w-[80%]" style={{ transform: `translateY(${-parallaxY}px)` }}>
              <div className="relative overflow-hidden" style={{ borderRadius: "28px", boxShadow: "0 30px 80px rgba(111,78,55,0.18), 0 8px 24px rgba(111,78,55,0.1)", aspectRatio: "3/4" }}>
                <img
                  src="https://images.unsplash.com/photo-1679047775134-c238f8ba9916?w=900&h=1080&fit=crop&auto=format&q=88"
                  alt="White and pink lilies arranged together against a soft cream background"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.035]"
                  style={{ background: "#F4D6D8" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#232323]/18 via-transparent to-white/10 pointer-events-none" />
              </div>

              <div className="absolute -bottom-6 -left-6 lg:-left-10 p-4 lg:p-5 flex items-center gap-3" style={{ borderRadius: "20px", background: "rgba(250,246,242,0.78)", backdropFilter: "blur(20px)", border: "1px solid rgba(111,78,55,0.16)", boxShadow: "0 8px 32px rgba(111,78,55,0.12)", minWidth: "200px" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(216,167,177,0.3)" }}>
                  <BlossomIcon className="w-5 h-5 text-[#6F4E37]" />
                </div>
                <div>
                  <p className="text-xs text-[#8B5E3C] leading-none mb-1" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, letterSpacing: "0.05em" }}>CURATED WEEKLY</p>
                  <p className="text-sm text-[#232323] font-medium leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Fresh from the Garden</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 lg:-right-6 w-16 h-16 lg:w-20 lg:h-20 flex flex-col items-center justify-center" style={{ borderRadius: "50%", background: "rgba(244,214,216,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(216,167,177,0.4)", boxShadow: "0 4px 20px rgba(216,167,177,0.25)" }}>
                <span className="text-[8px] uppercase tracking-[0.12em] text-[#6F4E37] text-center leading-tight" style={{ fontFamily: "'Manrope', sans-serif" }}>Pure<br />Nature</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
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
      className="group cursor-pointer transition-all duration-700 block"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div
        className="overflow-hidden mb-5"
        style={{
          borderRadius: "20px",
          aspectRatio: "4/5",
          boxShadow: "0 8px 40px rgba(111,78,55,0.1)",
        }}
      >
        <img
          src={bloom.img}
          alt={bloom.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ background: "#F4D6D8", transitionDuration: "800ms" }}
        />
      </div>
      <div className="px-1">
        <div className="flex items-start justify-between mb-1.5">
          <h3
            className="text-lg text-[#232323]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          >
            {bloom.name}
          </h3>
          <span
            className="text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded-full mt-0.5"
            style={{
              fontFamily: "'Manrope', sans-serif",
              background: "rgba(216,167,177,0.25)",
              color: "#6F4E37",
              border: "1px solid rgba(216,167,177,0.4)",
            }}
          >
            {bloom.tag}
          </span>
        </div>
        <p className="text-xs text-[#8B5E3C]/80 mb-0.5"
          style={{ fontFamily: "'Manrope', sans-serif" }}>
          {bloom.origin}
        </p>
        <p className="text-xs text-[#232323]/55 italic"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem" }}>
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
      className="text-center flex flex-col items-center gap-4 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-[#6F4E37]"
        style={{ background: "rgba(250,246,242,0.7)", border: "1px solid rgba(111,78,55,0.15)" }}
      >
        {icon}
      </div>
      <h3
        className="text-lg text-[#232323]"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed text-[#232323]/60 max-w-xs"
        style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 300 }}
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
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#232323",
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
            className="mb-6 leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
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
    <section className="py-16 px-6 lg:px-10 overflow-hidden" style={{ background: "#FAF6F2" }}>
      <div
        ref={ref}
        className="flex gap-4 lg:gap-6 overflow-x-auto pb-4 transition-all duration-700 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-24px)", WebkitOverflowScrolling: "touch" }}
      >
        {imgs.map((img, i) => (
          <div
            key={i}
            className="shrink-0 overflow-hidden group cursor-pointer"
            style={{
              borderRadius: "18px",
              width: "clamp(160px, 22vw, 280px)",
              height: "clamp(200px, 28vw, 360px)",
              boxShadow: "0 6px 28px rgba(111,78,55,0.1)",
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
      className="p-7 flex flex-col gap-5 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl"
      style={{
        borderRadius: "24px",
        background: "rgba(250,246,242,0.9)",
        border: "1px solid rgba(111,78,55,0.13)",
        boxShadow: "0 4px 24px rgba(111,78,55,0.07)",
        transitionDelay: `${index * 120}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="flex gap-1">
        {[...Array(5)].map((_, s) => (
          <span key={s} className="text-[#D8A7B1] text-sm">★</span>
        ))}
      </div>
      <p
        className="text-[#232323]/75 leading-relaxed flex-1 italic"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}
      >
        "{testimonial.quote}"
      </p>
      <div className="border-t border-[#6F4E37]/10 pt-4">
        <p className="text-sm font-medium text-[#232323]"
          style={{ fontFamily: "'Manrope', sans-serif" }}>
          {testimonial.name}
        </p>
        <p className="text-xs text-[#8B5E3C]/70 mt-0.5"
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#232323" }}>
            What Our Garden Inspires
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          className="mb-4 leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "#FAF6F2",
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
            className="px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 shrink-0"
            style={{
              fontFamily: "'Manrope', sans-serif",
              background: "#FAF6F2",
              color: "#6F4E37",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
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
