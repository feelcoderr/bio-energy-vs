import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════
   TIER DATA — matching the screenshot layout exactly
   ═══════════════════════════════════════════════════════ */
const tiers = [
  {
    id: 1,
    label: "Tier 1 - Bioenergy Commodity",
    badge: "Low Risk, High Volume",
    image: "/images/tier1-pellets.jpg",
    stats: [
      { label: "Margin", value: "15–25%" },
      { label: "Scale", value: "1–12M" },
      { label: "Volume", value: "High" },
    ],
    description:
      "High demand heating fuel providing immediate baseload revenues.",
    backTitle: "Commodity Products",
    backProducts: [
      { name: "Fuel Pellets", detail: "Industrial heating, power generation" },
      {
        name: "Industrial Biochar",
        detail: "Soil amendment & carbon sequestration",
      },
      {
        name: "Biochar Fertilizer",
        detail: "Slow release, improves soil health",
      },
    ],
    backHighlight:
      "Immediate cash flow with proven market demand. Lowest risk entry point into the biomass value chain.",
  },
  {
    id: 2,
    label: "Tier 2 - Specialized Biocarbon",
    badge: "Increasing Value, Diversified",
    image: "/images/tier2-biochar.jpg",
    stats: [
      { label: "Margin", value: "30–45%" },
      { label: "Sequestration", value: "High" },
      { label: "Value", value: "Industrial" },
    ],
    description:
      "Engineered biochar optimized for heavy metal and contaminant removal, and carbon sequestration.",
    backTitle: "Industrial Products",
    backProducts: [
      {
        name: "Water Filtration Media",
        detail: "Heavy metal & contaminant removal",
      },
      { name: "Pyrolysis Oil Fractions", detail: "Chemical & fuel feedstock" },
      { name: "Asphalt Modifier", detail: "Stronger roads, lower emissions" },
    ],
    backHighlight:
      "Diversified revenue across multiple industrial sectors. Higher margins through specialized processing.",
  },
  {
    id: 3,
    label: "Tier 3 - Advanced Materials",
    badge: "High Margin, Deep Moats",
    image: "/images/tier3-graphene.jpg",
    stats: [
      { label: "Margin", value: "50–70%+" },
      { label: "Innovation", value: "Spec." },
      { label: "Value", value: "Premium" },
    ],
    description:
      "Next gen high conductivity carbon for energy storage, electronics, and advanced applications.",
    backTitle: "Premium Products",
    backProducts: [
      {
        name: "Phenolic Resin Replacement",
        detail: "Sustainable material substitution",
      },
      {
        name: "Renewable Fuel Partnerships",
        detail: "Co-processing & SAF blends",
      },
      {
        name: "Graphene & Carbon Materials",
        detail: "Advanced high-value applications",
      },
    ],
    backHighlight:
      "Proprietary technology creates deep competitive moats. Premium margins with growing global demand.",
  },
];

/* ═══════════════════════════════════════════════════════
   TIER CARD — 3D flip on hover
   ═══════════════════════════════════════════════════════ */
function TierCard({ tier, index, isVisible }) {
  const delayClass =
    ["delay-100", "delay-200", "delay-300"][index] || "delay-100";

  return (
    <div
      className={`flip-card w-full ${isVisible ? `animate-fade-in-up ${delayClass}` : "opacity-0"}`}
      style={{ height: "580px" }}
    >
      <div className="flip-card-inner">
        {/* ═══ FRONT FACE ═══ */}
        <div className="flip-card-front bg-surface-container-lowest border border-outline-variant/30 shadow-ambient flex flex-col">
          {/* Tier label */}
          <div className="px-6 pt-6">
            <h3 className="font-heading text-lg text-primary font-normal leading-snug">
              {tier.label}
            </h3>
          </div>

          {/* Green badge */}
          <div className="px-6 mt-3">
            <span className="inline-block bg-primary-container text-white text-[10px] font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-md">
              {tier.badge}
            </span>
          </div>

          {/* Stats row */}
          {/* <div className="px-6 mt-5 grid grid-cols-3 gap-3">
            {tier.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[9px] font-body font-semibold uppercase tracking-widest text-on-surface-variant/50">
                  {stat.label}
                </p>
                <p className="text-sm font-heading text-primary mt-0.5">
                  {stat.value}
                </p>
              </div>
            ))}
          </div> */}

          {/* Description */}
          <div className="px-6 mt-4">
            <p className="text-xs text-on-surface-variant leading-relaxed font-body">
              {tier.description}
            </p>
          </div>

          {/* Product Image */}
          <div className="mx-4 mb-4 mt-4 rounded-2xl overflow-hidden flex-1 min-h-0 relative">
            <img
              src={tier.image}
              alt={tier.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-surface-container-lowest to-transparent pointer-events-none" />
          </div>

          {/* Hover hint */}
          <div className="px-6 pb-3 flex items-center justify-center gap-1.5 text-[10px] text-surface-tint/50 font-body">
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Hover to explore
          </div>
        </div>

        {/* ═══ BACK FACE ═══ */}
        <div
          className="flip-card-back bg-primary flex flex-col"
          style={{ border: "1px solid var(--color-primary-container)" }}
        >
          {/* Accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-verdaez-400 via-surface-tint to-verdaez-700 shrink-0" />

          <div className="p-6 flex flex-col flex-1 overflow-auto">
            {/* Label */}
            <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-verdaez-400 mb-1">
              {tier.label}
            </span>

            {/* Title */}
            <h4 className="font-heading text-xl text-white font-normal leading-tight mb-4">
              {tier.backTitle}
            </h4>

            {/* Products */}
            <div className="space-y-2.5 mb-5 flex-1">
              {tier.backProducts.map((product, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="w-5 h-5 rounded-full bg-verdaez-600 text-white flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-heading text-white/90 leading-snug">
                      {product.name}
                    </p>
                    <p className="text-[11px] text-white/40 font-body mt-0.5">
                      {product.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlight */}
            <div
              className="p-3.5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderLeft: "3px solid var(--color-verdaez-400)",
              }}
            >
              <p className="text-[11px] text-white/50 leading-relaxed font-body italic">
                {tier.backHighlight}
              </p>
            </div>

            {/* Stats */}
            {/* <div
              className="grid grid-cols-3 gap-3 mt-4 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {tier.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-[8px] font-body font-semibold uppercase tracking-widest text-white/25">
                    {stat.label}
                  </p>
                  <p className="text-sm font-heading text-verdaez-300 mt-0.5">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function ValueChain() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className={`text-xs font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Ratnanjali Bioenergy - One Platform
          </p>
          <h2
            className={`section-heading text-center ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}
          >
            From Commodity Biomass to{" "}
            <span className="italic text-surface-tint">High Margin</span> Carbon
            Products
          </h2>
          <p
            className={`section-description mx-auto text-center mt-4 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}
          >
            Three cascading technology tiers each funding the next transform
            biomass into increasingly premium products with deeper competitive
            moats.
          </p>
          <div
            className={`mt-12 flex items-center justify-center gap-4 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}
          >
            <span className="text-xs font-body text-on-surface-variant/50 uppercase tracking-widest">
              Lower Risk
            </span>
            <div className="flex items-center gap-0.5">
              <svg
                className="w-4 h-4 text-surface-tint/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="h-1 rounded-full"
                  style={{
                    width: `${14 + i * 4}px`,
                    background: `hsl(${145 - i * 8}, ${35 + i * 3}%, ${40 - i * 2}%)`,
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-0.5">
              <svg
                className="w-4 h-4 text-primary/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
            <span className="text-xs font-body text-primary/60 uppercase tracking-widest font-semibold">
              Higher Value
            </span>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, i) => (
            <TierCard
              key={tier.id}
              tier={tier}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Progression bar */}
        {/*  */}
      </div>
    </section>
  );
}
