import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const revenueStreams = [
  {
    title: "Fuel Pellets",
    category: "High-Volume Cash Flow",
    frontDesc: "Sustainable fuel replacements for coal-fired power stations and heavy industry boilers.",
    margin: "15% - 25% EBITDA",
    market: "Industrial thermal, cement plants, power utilities",
    terms: "Multi-year fixed-volume off-take contracts",
    growth: "12.4% CAGR",
    color: "from-amber-700/10 to-amber-900/5",
    border: "border-amber-900/10",
    textCol: "text-amber-800",
  },
  {
    title: "Biochar",
    category: "High-Margin Agricultural",
    frontDesc: "Premium soil-amendments that retain moisture, lock in nutrients, and permanently store carbon.",
    margin: "45% - 55% EBITDA",
    market: "Commercial agriculture, soil mixers, specialty farms",
    terms: "Spot sales & subscription-based supply agreements",
    growth: "18.1% CAGR",
    color: "from-green-700/10 to-green-900/5",
    border: "border-green-900/10",
    textCol: "text-green-800",
  },
  {
    title: "Activated Carbon",
    category: "Premium Environmental",
    frontDesc: "Super-porous carbon media engineered for municipal water filtration and air purification.",
    margin: "35% - 45% EBITDA",
    market: "Water treatment plants, industrial gas filters",
    terms: "Annual municipal bids & direct industrial contracts",
    growth: "9.2% CAGR",
    color: "from-blue-700/10 to-blue-900/5",
    border: "border-blue-900/10",
    textCol: "text-blue-800",
  },
  {
    title: "Pyrolysis Oil",
    category: "Liquid Biofuels & Chemistry",
    frontDesc: "Bio-oil recovered from oxygen-free thermal conversion, suitable for bio-crude and chemical feeds.",
    margin: "25% - 35% EBITDA",
    market: "Refineries, bio-chemical plants, maritime fuel users",
    terms: "Industrial fuel contracts and spot marketing",
    growth: "14.7% CAGR",
    color: "from-purple-700/10 to-purple-900/5",
    border: "border-purple-900/10",
    textCol: "text-purple-800",
  },
  {
    title: "Carbon Materials",
    category: "Advanced Nanotech",
    frontDesc: "High-purity carbon matrices enabling next-gen graphene synthesis, battery anodes, and composites.",
    margin: "60%+ EBITDA (Targeted)",
    market: "Electronics manufacturers, battery innovators",
    terms: "Joint development agreements & patent licensing",
    growth: "28.5% CAGR",
    color: "from-zinc-700/10 to-zinc-900/5",
    border: "border-zinc-900/10",
    textCol: "text-zinc-800",
  },
  {
    title: "Engineering Services",
    category: "Intellectual Property",
    frontDesc: "Blueprints, modular design consultation, feasibility studies, and technological licensing fees.",
    margin: "70%+ Gross Margin",
    market: "Regional bioenergy startups, infrastructure funds",
    terms: "Retainer-based fees & milestone royalties",
    growth: "8.5% CAGR",
    color: "from-emerald-700/10 to-emerald-900/5",
    border: "border-emerald-900/10",
    textCol: "text-emerald-800",
  },
];

export default function PlatformRevenueEngine() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".revenue-header", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        } 
      }
    );

    gsap.fromTo(".bento-card-anim", 
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
        } 
      }
    );
  }, { scope: containerRef });

  return (
    <section id="revenue" ref={containerRef} className="py-32 bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="revenue-header text-center mb-20">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Revenue Architecture
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal mb-6">
            The Multi-Product Revenue Engine
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            By avoiding reliance on single commodities, the Verdaez platform splits agricultural waste into a diversified portfolio. Hover to explore economics, margins, and off-take terms.
          </p>
        </div>

        {/* Bento Grid containing 3D Flip Cards */}
        <div className="bento-grid-trigger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revenueStreams.map((stream, idx) => (
            <div 
              key={stream.title} 
              className="bento-card-anim flip-card h-[380px] w-full cursor-pointer"
            >
              <div className="flip-card-inner">
                
                {/* Front Side */}
                <div className={`flip-card-front bg-gradient-to-br ${stream.color} border ${stream.border} p-8 flex flex-col justify-between shadow-ambient-sm bg-white`}>
                  <div>
                    <span className={`text-[10px] font-body font-semibold uppercase tracking-widest ${stream.textCol} block mb-4`}>
                      {stream.category}
                    </span>
                    <h3 className="font-heading text-3xl text-primary font-normal mb-4">
                      {stream.title}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {stream.frontDesc}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4">
                    <span className="text-[10px] font-body text-on-surface-variant/60 font-semibold tracking-wider uppercase">Hover to Flip</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-on-surface-variant/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Back Side (Detailed metrics) */}
                <div className={`flip-card-back bg-primary text-white p-8 flex flex-col justify-between shadow-ambient`}>
                  <div>
                    <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-verdaez-400 block mb-6">
                      FINANCIAL PROFILE & BUYERS
                    </span>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="block text-[9px] uppercase tracking-widest text-white/50">MARGIN PROFILE</span>
                        <span className="font-heading text-xl text-verdaez-100">{stream.margin}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-widest text-white/50">PRIMARY BUYERS</span>
                        <span className="font-body text-xs text-white/90 leading-relaxed block mt-0.5">{stream.market}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-widest text-white/50">CONTRACTUAL STRUCTURE</span>
                        <span className="font-body text-xs text-white/90 leading-relaxed block mt-0.5">{stream.terms}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center border-t border-white/10 pt-4 text-xs font-body">
                    <span className="text-white/60 uppercase text-[9px] tracking-wider font-semibold">EST. CAGR: {stream.growth}</span>
                    <span className="text-verdaez-400 font-semibold">Verdaez Platform</span>
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
