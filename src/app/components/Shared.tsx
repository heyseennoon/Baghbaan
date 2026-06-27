import { useEffect, useRef, useState } from "react";

export function BotanicalVines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M-20 400 C80 320, 160 280, 240 300 C320 320, 380 380, 460 360 C540 340, 600 280, 700 260"
        stroke="#6F4E37"
        strokeWidth="1"
        strokeOpacity="0.06"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M0 600 C100 540, 180 500, 260 520 C340 540, 420 580, 500 560"
        stroke="#7A8450"
        strokeWidth="0.8"
        strokeOpacity="0.07"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="240" cy="285" rx="18" ry="10" transform="rotate(-30 240 285)" fill="#7A8450" fillOpacity="0.05" />
      <ellipse cx="460" cy="345" rx="15" ry="8" transform="rotate(20 460 345)" fill="#7A8450" fillOpacity="0.05" />
      <ellipse cx="260" cy="510" rx="20" ry="11" transform="rotate(-15 260 510)" fill="#A5B38A" fillOpacity="0.06" />
      <circle cx="700" cy="255" r="3" fill="#6F4E37" fillOpacity="0.08" />
      <circle cx="500" cy="555" r="2.5" fill="#D8A7B1" fillOpacity="0.1" />
      <path
        d="M600 100 C620 140, 610 180, 590 200"
        stroke="#6F4E37"
        strokeWidth="0.7"
        strokeOpacity="0.06"
        fill="none"
      />
      <ellipse cx="590" cy="205" rx="12" ry="7" transform="rotate(10 590 205)" fill="#A5B38A" fillOpacity="0.06" />
    </svg>
  );
}

export function FloatingPetals() {
  const petals = [
    { x: "8%", y: "15%", r: 20, rotate: -25, color: "#D8A7B1", opacity: 0.07 },
    { x: "92%", y: "22%", r: 14, rotate: 40, color: "#F4D6D8", opacity: 0.09 },
    { x: "5%", y: "70%", r: 18, rotate: 15, color: "#D8A7B1", opacity: 0.06 },
    { x: "88%", y: "78%", r: 22, rotate: -50, color: "#A5B38A", opacity: 0.06 },
    { x: "50%", y: "5%", r: 12, rotate: 30, color: "#F4D6D8", opacity: 0.08 },
    { x: "72%", y: "55%", r: 16, rotate: -10, color: "#D8A7B1", opacity: 0.05 },
  ];
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      {petals.map((p, i) => (
        <ellipse
          key={i}
          cx={p.x}
          cy={p.y}
          rx={p.r}
          ry={p.r * 0.55}
          fill={p.color}
          fillOpacity={p.opacity}
          transform={`rotate(${p.rotate}, 400, 400)`}
        />
      ))}
    </svg>
  );
}

export function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C12 22 4 16 4 10C4 6.13 7.13 3 11 3C14.87 3 18 6.13 18 10C18 14 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 22V10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />
      <path d="M12 14 C10 13 8 11 8 10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M12 12 C14 11 16 10 16 8" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
  );
}

export function BlossomIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="12" cy="6.5" rx="2" ry="3" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="12" cy="17.5" rx="2" ry="3" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="6.5" cy="12" rx="3" ry="2" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="17.5" cy="12" rx="3" ry="2" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="8" cy="8" rx="2" ry="3" transform="rotate(45 8 8)" stroke="currentColor" strokeWidth="0.9" />
      <ellipse cx="16" cy="16" rx="2" ry="3" transform="rotate(45 16 16)" stroke="currentColor" strokeWidth="0.9" />
      <ellipse cx="16" cy="8" rx="2" ry="3" transform="rotate(-45 16 8)" stroke="currentColor" strokeWidth="0.9" />
      <ellipse cx="8" cy="16" rx="2" ry="3" transform="rotate(-45 8 16)" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  );
}

export function StemIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 15 C10 13 7 12 6 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M12 12 C14 10 17 9 18 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <ellipse cx="12" cy="5" rx="3.5" ry="4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9.5 4 C10.5 3 11 2.5 12 2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

export function CurvedDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 30 C360 60, 1080 0, 1440 30 L1440 60 L0 60 Z" fill="#FAF6F2" fillOpacity="0.5" />
        <path d="M0 40 C480 10, 960 70, 1440 40" stroke="#6F4E37" strokeWidth="0.5" strokeOpacity="0.12" fill="none" />
      </svg>
    </div>
  );
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}
