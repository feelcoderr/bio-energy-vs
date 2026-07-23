import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const revenueStreams = [
  {
    title: "Fuel Pellets",
    category: "High-Volume Cash Flow",
    frontDesc:
      "Sustainable fuel replacements for coal-fired power stations and heavy industry boilers.",
    margin: "15%–25% EBITDA",
    market: "Industrial thermal, cement plants, power utilities",
    terms: "Multi-year fixed-volume off-take contracts",
    growth: "12.4% CAGR",
    image: "/images/product-pellets.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-surface-tint"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 16.121A3 3 0 1012.015 11L11 14l-1.121 2.121z"
        />
      </svg>
    ),
  },
  {
    title: "Biochar",
    category: "High-Margin Agricultural",
    frontDesc:
      "Premium soil amendments that retain moisture, lock in nutrients, and permanently store carbon.",
    margin: "45%–55% EBITDA",
    market: "Commercial agriculture, soil mixers, specialty farms",
    terms: "Spot sales & subscription-based supply agreements",
    growth: "18.1% CAGR",
    image: "/images/product-biochar.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-surface-tint"
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
    title: "Activated Carbon",
    category: "Premium Environmental",
    frontDesc:
      "Super porous carbon media engineered for municipal water filtration and air purification.",
    margin: "35%–45% EBITDA",
    market: "Water treatment plants, industrial gas filters",
    terms: "Annual municipal bids & direct industrial contracts",
    growth: "9.2% CAGR",
    image: "/images/product-filter.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-surface-tint"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
      </svg>
    ),
  },
  {
    title: "Pyrolysis Oil",
    category: "Liquid Biofuels & Chemistry",
    frontDesc:
      "Bio-oil recovered from oxygen free thermal conversion, suitable for bio-crude and chemical feeds.",
    margin: "25%–35% EBITDA",
    market: "Refineries, bio-chemical plants, maritime fuel users",
    terms: "Industrial fuel contracts and spot marketing",
    growth: "14.7% CAGR",
    image: "/images/product-oil.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-surface-tint"
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
    title: "Carbon Materials",
    category: "Advanced Nanotech",
    frontDesc:
      "High purity carbon matrices enabling next gen graphene synthesis, battery anodes, and composites.",
    margin: "60%+ EBITDA (Targeted)",
    market: "Electronics manufacturers, battery innovators",
    terms: "Joint development agreements & patent licensing",
    growth: "28.5% CAGR",
    image: "/images/product-graphene.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-surface-tint"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v16m8-8H4M6 6l12 12M6 18L18 6"
        />
      </svg>
    ),
  },
  {
    title: "Engineering Services",
    category: "Intellectual Property",
    frontDesc:
      "Blueprints, modular design consultation, feasibility studies, and technological licensing fees.",
    margin: "70%+ Gross Margin",
    market: "Regional bioenergy startups, infrastructure funds",
    terms: "Retainer-based fees & milestone royalties",
    growth: "8.5% CAGR",
    image: "/images/platform-engineering.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-surface-tint"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2m0 18l6-3m-6 3V2m6 15l5.447 2.724A1 1 0 0021 18.83V8.062a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 2"
        />
      </svg>
    ),
  },
];

export default function PlatformRevenueEngine() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".revenue-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".bento-card-anim",
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".bento-grid-trigger",
            start: "top 75%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="revenue"
      ref={containerRef}
      className="py-32 bg-surface-container-low border-t border-outline-variant/30 relative overflow-hidden"
    >
      {/* Soft atmospheric radial gradient for clean light background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(100,128,50,0.015)_0%,transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="revenue-header text-center mb-20">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Revenue Architecture
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal mb-6">
            The Multi Product Revenue Engine
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            By avoiding reliance on single commodities, the Ratnanjali Bioenergy
            platform splits agricultural waste into a diversified portfolio.
            Hover to explore economics, margins, and off-take terms.
          </p>
        </div>

        {/* Bento Grid containing 3D Flip Cards */}
        <div className="bento-grid-trigger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revenueStreams.map((stream) => (
            <div
              key={stream.title}
              className="bento-card-anim flip-card h-[440px] w-full cursor-pointer group"
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front border border-outline-variant/35 p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:border-surface-tint/50 bg-white">
                  <div>
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-body font-bold uppercase tracking-widest text-surface-tint block mb-4">
                        {stream.category}
                      </span>
                      {/* Brand themed SVG Icon */}
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                        {stream.icon}
                      </div>
                    </div>

                    <h3 className="font-heading text-2xl text-primary font-normal mt-4 mb-4">
                      {stream.title}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {stream.frontDesc}
                    </p>
                  </div>

                  {/* Subtle Product Image Container */}
                  <div className="mt-4 mb-2 h-28 w-full overflow-hidden rounded-xl border border-outline-variant/15 relative bg-surface-container/20 group-hover:border-surface-tint/30 transition-all duration-300">
                    <img
                      src={stream.image}
                      alt={stream.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                    
                    {/* CAGR Growth indicator Badge */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/95 backdrop-blur-md rounded-md border border-outline-variant/35 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      <span className="text-[8px] font-body font-bold text-primary tracking-wider">
                        {stream.growth}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-outline-variant/20 pt-4 mt-6">
                    <span className="text-[9px] font-body text-on-surface-variant/50 font-bold tracking-wider uppercase">
                      Hover to Flip
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-on-surface-variant/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Back Side (Detailed metrics) */}
                <div className="flip-card-back bg-primary text-white p-8 flex flex-col justify-between shadow-ambient">
                  <div>
                    <span className="text-[9px] font-body font-bold uppercase tracking-widest text-olive-scale-400 block mb-6">
                      FINANCIAL PROFILE & BUYERS
                    </span>

                    <div className="space-y-4">
                      <div>
                        <span className="block text-[8px] uppercase tracking-widest text-white/50">
                          MARGIN PROFILE
                        </span>
                        <span className="font-heading text-xl text-olive-scale-200">
                          {stream.margin}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[8px] uppercase tracking-widest text-white/50">
                          PRIMARY BUYERS
                        </span>
                        <span className="font-body text-xs text-white/90 leading-relaxed block mt-0.5">
                          {stream.market}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[8px] uppercase tracking-widest text-white/50">
                          CONTRACTUAL STRUCTURE
                        </span>
                        <span className="font-body text-xs text-white/90 leading-relaxed block mt-0.5">
                          {stream.terms}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-white/10 pt-4 text-xs font-body mt-6">
                    <span className="text-white/60 uppercase text-[9px] tracking-wider font-semibold">
                      EST. CAGR: {stream.growth}
                    </span>
                    <span className="text-olive-scale-400 font-semibold font-heading text-sm">
                      Ratnanjali Bioenergy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
