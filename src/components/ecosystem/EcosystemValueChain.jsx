import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  {
    id: "suppliers",
    name: "Feedstock Suppliers",
    role: "Local farmers & forestry coops providing secondary agricultural residue.",
    valueExchanged: "Verdaez pays stable, locked-in pricing for organic residue, creating secondary income and resolving farm residue disposal costs.",
    metrics: "35% of procurement costs reinvested in rural farms.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
      </svg>
    )
  },
  {
    id: "logistics",
    name: "Rural Logistics",
    role: "Regional transport hubs and short-haul logistics partners.",
    valueExchanged: "Verdaez coordinates geolocated routes to optimize residue collection within a 50km radius, boosting regional trucking jobs.",
    metrics: "100% geotacked coordinate tracing back to farms.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17h10" />
      </svg>
    )
  },
  {
    id: "preprocessing",
    name: "Preprocessing Nodes",
    role: "Drying, sorting, and feedstock density enhancement centers.",
    valueExchanged: "Preparing feedstocks for thermochemical cracking, validating quality parameters before delivery to main refinery.",
    metrics: "Drying down to <15% moisture specifications.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: "refinery",
    name: "The Biorefinery",
    role: "Modular thermochemical reactors (pyrolysis cracking).",
    valueExchanged: "Separating biomass into syngas (self-fueling), bio-oil (industrial fuels), and biochar matrices.",
    metrics: "98.2% thermal efficiency; zero fossil fuel input.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: "buyers",
    name: "Off-take Buyers",
    role: "Industrial heat users, commercial farms, and municipal filters.",
    valueExchanged: "Off-takers buy renewable fuels to displace coal, or premium biochars to optimize crop yield.",
    metrics: "Multi-year structured supply assurance.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: "registries",
    name: "Carbon Registries",
    role: "International verification bodies like Puro.earth & Verra.",
    valueExchanged: "Auditing biochar durability to issue verified digital CO2 removal credits (dCO2) bought by corporate net-zero clients.",
    metrics: "500+ years carbon sequestration stability.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function EcosystemValueChain() {
  const [activeNode, setActiveNode] = useState("suppliers");
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".chain-reveal",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  // Transition whenever the active node changes
  useGSAP(() => {
    gsap.fromTo(".chain-content-inner",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, { dependencies: [activeNode], scope: containerRef });

  const activeIdx = nodes.findIndex(n => n.id === activeNode);
  const currentNode = nodes[activeIdx];

  const handleNextPhase = () => {
    const nextIdx = (activeIdx + 1) % nodes.length;
    setActiveNode(nodes[nextIdx].id);
  };

  return (
    <section id="value-chain" ref={containerRef} className="py-32 bg-white border-t border-outline-variant/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="chain-reveal text-center mb-10">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Ecosystem Network
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal mb-6">
            The Interactive Value Chain
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Every participant creates and captures value in the circular loops. Click the nodes below to explore roles, values exchanged, and metrics.
          </p>
        </div>

        {/* Dynamic UX helper tagline */}
        <div className="chain-reveal text-center mb-6">
          <span className="text-[9px] font-body font-bold uppercase tracking-widest text-surface-tint/70 animate-pulse bg-surface-tint/5 px-4 py-1.5 rounded-full border border-surface-tint/20 inline-block">
            ← Click any stage node below to trace the supply flow ➔
          </span>
        </div>

        {/* Horizontal Supply Chain Pipeline (Top) */}
        <div className="chain-reveal max-w-5xl mx-auto mb-16 relative">
          {/* Progress Connecting Line */}
          <div className="hidden md:block absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-outline-variant/30 z-0">
            <div 
              className="h-full bg-surface-tint transition-all duration-500 origin-left"
              style={{
                width: `${(activeIdx / (nodes.length - 1)) * 100}%`
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            {nodes.map((node, idx) => {
              const isActive = activeNode === node.id;
              const isPassed = activeIdx >= idx;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  type="button"
                  title={`Click to inspect ${node.name}`}
                  className="flex flex-col items-center group focus:outline-none relative"
                >
                  {/* Node Circle with Icon */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 bg-white transition-all duration-300 shadow-ambient-sm relative ${
                    isActive
                      ? "border-surface-tint text-primary scale-110 shadow-[0_0_20px_rgba(76,108,84,0.15)]"
                      : isPassed
                        ? "border-surface-tint/60 text-surface-tint"
                        : "border-outline-variant/40 text-on-surface-variant/50 hover:border-outline"
                  }`}>
                    {/* Pulsing indicator loop on active node */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full border border-surface-tint/40 animate-ping opacity-75" />
                    )}
                    {node.icon}
                  </div>
                  
                  <span className={`font-heading text-xs mt-3 text-center transition-colors duration-300 ${
                    isActive ? "text-primary font-medium" : "text-on-surface-variant/70 group-hover:text-primary"
                  }`}>
                    {node.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Consolidated Details Dashboard Card (Below) */}
        <div className="chain-reveal bg-surface-container-low border border-outline-variant/35 rounded-[3rem] p-8 md:p-12 shadow-ambient-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="chain-content-inner grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: Role details */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[9px] font-body font-bold text-surface-tint uppercase tracking-widest block mb-2">
                  VALUE CHAIN POSITION
                </span>
                <h3 className="font-heading text-3xl text-primary font-normal leading-tight">
                  {currentNode.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-outline-variant/30 pt-6">
                <div>
                  <span className="block text-[8px] font-body font-bold tracking-widest text-on-surface-variant/70 uppercase mb-2.5">
                    PARTICIPANT ROLE
                  </span>
                  <p className="font-body text-xs text-on-surface leading-relaxed">
                    {currentNode.role}
                  </p>
                </div>
                <div>
                  <span className="block text-[8px] font-body font-bold tracking-widest text-on-surface-variant/70 uppercase mb-2.5">
                    MUTUAL VALUE EXCHANGED
                  </span>
                  <p className="font-body text-xs text-on-surface leading-relaxed">
                    {currentNode.valueExchanged}
                  </p>
                </div>
              </div>

              {/* Staged Flow CTA Guidance */}
              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between gap-4">
                <span className="text-[9px] font-body text-on-surface-variant/50 font-bold uppercase tracking-wider">
                  Phase {activeIdx + 1} of {nodes.length}
                </span>
                <button
                  onClick={handleNextPhase}
                  type="button"
                  className="btn-primary py-2 px-5 text-xs inline-flex items-center gap-1.5"
                >
                  <span>{activeIdx === nodes.length - 1 ? "Restart Loop" : "Next Phase"}</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeIdx === nodes.length - 1 ? "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9" : "M9 5l7 7-7 7"} />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column: Key performance metrics */}
            <div className="lg:col-span-4 bg-white border border-outline-variant/45 rounded-3xl p-8 flex flex-col justify-between shadow-ambient-sm min-h-[220px]">
              <div>
                <span className="text-[8px] font-body font-bold uppercase tracking-widest text-on-surface-variant/65 block mb-2">
                  KEY PERFORMANCE METRIC
                </span>
                <p className="font-heading text-xl text-primary font-normal leading-snug">
                  {currentNode.metrics}
                </p>
              </div>
              <div>
                <div className="w-full h-1 bg-surface-tint/15 rounded-full overflow-hidden mt-6">
                  <div 
                    className="h-full bg-surface-tint transition-all duration-500 origin-left"
                    style={{
                      width: `${((activeIdx + 1) / nodes.length) * 100}%`
                    }}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
