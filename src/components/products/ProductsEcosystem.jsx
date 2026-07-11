import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: "ag",
    title: "Agriculture",
    desc: "Soil solutions, carbon farming, and organic biochar-amended substrates for water retention and soil biology.",
    products: ["Biochar", "Fertilizer"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: "en",
    title: "Energy & Heat",
    desc: "Industrial thermal systems, localized clean cogeneration, and high-energy biomass fuel replacements.",
    products: ["Pellets", "Pyrolysis Oil", "Syngas"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: "wa",
    title: "Water & Env",
    desc: "Super-porous activated carbons for municipal water purification, industrial waste remediation, and odor capture.",
    products: ["Activated Carbon", "Filter Media"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: "ma",
    title: "Manufacturing",
    desc: "Sustainable chemical feedstocks, process materials, and carbon-black alternatives for rubber and polymers.",
    products: ["Pyrolysis Oil", "Industrial Carbon"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    id: "in",
    title: "Infrastructure",
    desc: "Asphalt additives and composite materials to enhance longevity, resistance, and carbon lock-in in concrete.",
    products: ["Carbon Additives", "Composites"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: "es",
    title: "Energy Storage",
    desc: "High-purity conductive carbons and graphene precursors for battery cells, supercapacitors, and electronics.",
    products: ["Conductive Carbon", "Graphene"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z"
        />
      </svg>
    ),
  },
];

export default function ProductsEcosystem() {
  const containerRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".eco-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-surface-container-low border-y border-outline-variant/20 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-surface-tint-05 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <span className="text-[11px] font-body font-bold uppercase tracking-[0.25em] text-surface-tint bg-surface-tint-08 border border-surface-tint-20 px-3 py-1 rounded-full mb-6 inline-block">
          Applications Ecosystem
        </span>
        <h2 className="font-heading text-4xl md:text-5xl text-primary font-normal tracking-tight mb-6">
          High-Growth Markets
        </h2>
        <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Ratnanjali Bioenergy products support organizations transitioning
          toward renewable resources, circular manufacturing, and lower carbon
          operations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={ind.id}
                className="eco-card glass-panel bg-white/30 p-8 rounded-2xl border border-outline-variant/30 transition-all duration-500 flex flex-col justify-between"
                style={{
                  transform: isHovered
                    ? "translate3d(0, -6px, 0) scale(1.02)"
                    : "translate3d(0, 0, 0) scale(1)",
                  borderColor: isHovered
                    ? "var(--color-surface-tint)"
                    : "var(--color-outline-variant-30, rgba(193, 201, 195, 0.3))",
                  boxShadow: isHovered
                    ? "0 20px 40px var(--color-surface-tint-08, rgba(100, 128, 50, 0.08))"
                    : "none",
                  backgroundColor: isHovered
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(255, 255, 255, 0.3)",
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div>
                  {/* Premium Icon Container */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500"
                    style={{
                      backgroundColor: isHovered
                        ? "var(--color-surface-tint)"
                        : "var(--color-surface-container-high, #E2DFD3)",
                      color: isHovered
                        ? "#FFFFFF"
                        : "var(--color-surface-tint, #648032)",
                      transform: isHovered
                        ? "rotate(8deg) scale(1.05)"
                        : "rotate(0deg) scale(1)",
                    }}
                  >
                    {ind.icon}
                  </div>

                  <h3 className="font-heading text-2xl text-primary font-normal tracking-tight mb-3">
                    {ind.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
                    {ind.desc}
                  </p>
                </div>

                {/* Premium tag pill items */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {ind.products.map((p) => (
                    <span
                      key={p}
                      className="text-[10px] font-body font-bold uppercase tracking-wider border px-3 py-1 rounded-full transition-all duration-300"
                      style={{
                        borderColor: isHovered
                          ? "var(--color-surface-tint-30)"
                          : "rgba(100, 128, 50, 0.15)",
                        backgroundColor: isHovered
                          ? "var(--color-surface-tint-08)"
                          : "var(--color-surface-tint-05, rgba(100, 128, 50, 0.03))",
                        color: "var(--color-surface-tint, #648032)",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
