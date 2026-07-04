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
    metrics: "Up to 35% of refinery capex/procurement reinvested in rural farms.",
    x: "10%",
    y: "50%"
  },
  {
    id: "logistics",
    name: "Rural Logistics",
    role: "Regional transport hubs and short-haul logistics partners.",
    valueExchanged: "Verdaez coordinates geolocated routes to optimize residue collection within a 50km radius, boosting regional trucking jobs.",
    metrics: "100% geotracked coordinates back to farms.",
    x: "28%",
    y: "25%"
  },
  {
    id: "preprocessing",
    name: "Preprocessing Nodes",
    role: "Drying, sorting, and feedstock density enhancement centers.",
    valueExchanged: "Preparing feedstocks for thermochemical cracking, validating quality parameters before delivery to main refinery.",
    metrics: "Drying down to <15% moisture specifications.",
    x: "46%",
    y: "50%"
  },
  {
    id: "refinery",
    name: "The Biorefinery",
    role: "Modular thermochemical reactors (pyrolysis cracking).",
    valueExchanged: "Separating biomass into syngas (self-fueling), bio-oil (industrial fuels), and biochar matrices.",
    metrics: "98.2% thermal efficiency; zero fossil-fuel input.",
    x: "64%",
    y: "25%"
  },
  {
    id: "buyers",
    name: "Off-take Buyers",
    role: "Industrial heat users, commercial farms, and municipal filters.",
    valueExchanged: "Off-takers buy renewable fuels to displace coal, or premium biochars to optimize crop yield.",
    metrics: "Multi-year structured supply assurance.",
    x: "82%",
    y: "50%"
  },
  {
    id: "registries",
    name: "Carbon Registries",
    role: "International verification bodies like Puro.earth & Verra.",
    valueExchanged: "Auditing biochar durability to issue verified digital CO2 removal credits (dCO2) bought by corporate net-zero clients.",
    metrics: "500+ years carbon sequestration half-life.",
    x: "90%",
    y: "85%"
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

  const currentNode = nodes.find(n => n.id === activeNode);

  return (
    <section id="value-chain" ref={containerRef} className="py-32 bg-white border-t border-outline-variant/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="chain-reveal text-center mb-20">
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

        {/* Visual Map Layout */}
        <div className="chain-reveal grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Interactive SVG Diagram Node Map (Left) */}
          <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant/35 rounded-[3rem] p-10 min-h-[350px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,108,84,0.02)_0%,transparent_60%)]" />
            
            {/* Horizontal Map Grid */}
            <div className="relative w-full h-[250px] flex flex-wrap gap-4 justify-around items-center z-10">
              {nodes.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    type="button"
                    className={`w-28 h-28 rounded-full border-2 bg-white flex flex-col items-center justify-center p-3 text-center transition-all duration-500 shadow-ambient-sm ${
                      isActive
                        ? "border-surface-tint shadow-[0_0_25px_rgba(76,108,84,0.15)] scale-110"
                        : "border-outline-variant/40 hover:border-outline"
                    }`}
                  >
                    <span className={`text-[10px] font-heading leading-tight ${isActive ? "text-primary font-medium" : "text-on-surface-variant/80"}`}>
                      {node.name}
                    </span>
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${isActive ? "bg-surface-tint" : "bg-outline-variant/40"}`} />
                  </button>
                );
              })}
            </div>

          </div>

          {/* Node Specification Panel (Right) */}
          <div className="lg:col-span-5 bg-white border border-outline-variant/35 rounded-[2.5rem] p-10 shadow-ambient-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              <div>
                <span className="text-[9px] font-body font-bold text-surface-tint uppercase tracking-widest block mb-1">Ecosystem Participant</span>
                <h3 className="font-heading text-2xl text-primary font-normal">{currentNode.name}</h3>
              </div>

              <div>
                <span className="block text-[8px] font-body font-bold uppercase tracking-widest text-on-surface-variant/70 mb-1">PARTICIPANT ROLE</span>
                <p className="font-body text-xs text-on-surface leading-relaxed">
                  {currentNode.role}
                </p>
              </div>

              <div>
                <span className="block text-[8px] font-body font-bold uppercase tracking-widest text-on-surface-variant/70 mb-1">VALUE GENERATED</span>
                <p className="font-body text-xs text-on-surface leading-relaxed">
                  {currentNode.valueExchanged}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20">
              <span className="block text-[8px] font-body font-bold uppercase tracking-widest text-on-surface-variant/60">KEY PERFORMANCE METRIC</span>
              <p className="font-heading text-lg text-primary mt-1 font-semibold">{currentNode.metrics}</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
