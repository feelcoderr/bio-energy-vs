import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EcosystemIntentSelector() {
  const [searchParams, setSearchParams] = useSearchParams();
  const roleParam = searchParams.get("role");
  const [activeTab, setActiveTab] = useState(roleParam === "partner" ? "partner" : "investor");
  const containerRef = useRef(null);

  // Sync tab state with query param change if any
  useEffect(() => {
    if (roleParam === "partner") {
      setActiveTab("partner");
    } else if (roleParam === "investor") {
      setActiveTab("investor");
    }
  }, [roleParam]);

  useGSAP(() => {
    // Fade up animations for sections
    gsap.fromTo(".intent-reveal",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ role: tab });
  };

  return (
    <section id="intent" ref={containerRef} className="py-24 bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Elegant Segmented Switcher */}
        <div className="intent-reveal flex justify-center mb-16">
          <div className="bg-white border border-outline-variant/50 rounded-full p-1.5 flex gap-2 shadow-ambient-sm">
            <button
              onClick={() => handleTabChange("investor")}
              className={`px-8 py-3.5 rounded-full font-body font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                activeTab === "investor"
                  ? "bg-primary text-white shadow-ambient-sm"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Investor Hub
            </button>
            <button
              onClick={() => handleTabChange("partner")}
              className={`px-8 py-3.5 rounded-full font-body font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                activeTab === "partner"
                  ? "bg-primary text-white shadow-ambient-sm"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Partner Hub
            </button>
          </div>
        </div>

        {/* Dynamic Panels */}
        <div className="relative">
          {activeTab === "investor" ? (
            <div className="intent-reveal space-y-12">
              {/* Investment Thesis & Market */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 bg-white border border-outline-variant/30 rounded-[2.5rem] p-10 shadow-ambient-sm">
                  <span className="text-[9px] font-body font-bold text-surface-tint uppercase tracking-widest block mb-1">
                    THE VALUE CASE
                  </span>
                  <h3 className="font-heading text-3xl text-primary font-normal mb-6">
                    The Verdaez Investment Thesis
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                    Bioenergy projects often fail due to volatile logistics or single-product market reliance. Verdaez mitigates this through low-capex regional hubs that buy waste cheaply and produce multiple highly sought-after fuels and carbon products.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-outline-variant/30 pt-6">
                    <div>
                      <h4 className="font-heading text-lg text-primary font-semibold mb-2">High EBITDA Yield</h4>
                      <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                        Phase 1 modular start-up is designed for EBITDA yields exceeding 30% by securing low feedstock tariffs.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-primary font-semibold mb-2">Off-Take Security</h4>
                      <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                        Securing multi-year direct agreements for industrial pellets and Puro.earth carbon credits prior to construction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-primary text-white rounded-[2.5rem] p-10 shadow-ambient relative overflow-hidden flex flex-col justify-between h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-verdaez-400/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div>
                    <span className="text-[9px] font-body font-bold text-verdaez-400 uppercase tracking-widest block mb-4">
                      ROADMAP & MILESTONES
                    </span>
                    <h3 className="font-heading text-3xl text-white font-normal mb-6">
                      The Staged Roadmap
                    </h3>
                    
                    <div className="space-y-4 text-xs font-body">
                      <div className="flex gap-4 items-start">
                        <span className="text-verdaez-400 font-bold">01</span>
                        <div>
                          <strong className="text-white">Modular Prototype Launch</strong>
                          <p className="text-white/70 mt-0.5">30 TPD facility operating with positive unit economics.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <span className="text-verdaez-400 font-bold">02</span>
                        <div>
                          <strong className="text-white">Regional Scaling</strong>
                          <p className="text-white/70 mt-0.5">Replicating modules to aggregate up to 300 TPD processing capacity.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <span className="text-verdaez-400 font-bold">03</span>
                        <div>
                          <strong className="text-white">Platform Blueprints Licensing</strong>
                          <p className="text-white/70 mt-0.5">Licensing IP blueprints and modular designs to infrastructure funds.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6 mt-8">
                    <a href="mailto:investors@verdaez.com" className="btn-primary w-full justify-center text-xs uppercase tracking-widest py-3.5">
                      Schedule Investor Briefing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="intent-reveal space-y-12">
              {/* Partner specifications grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Card 1: Feedstock Suppliers */}
                <div className="bg-white border border-outline-variant/30 rounded-[2rem] p-8 shadow-ambient-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-surface-tint block mb-4">Tier 01</span>
                    <h3 className="font-heading text-2xl text-primary font-normal mb-2">Feedstock Suppliers</h3>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                      Farmers, agricultural cooperatives, and timber companies within a 50km processing radius. Sourcing straw, rice husks, wood chips, and organic residues.
                    </p>
                  </div>
                  <div className="border-t border-outline-variant/20 pt-6 mt-6">
                    <a href="#contact" className="btn-secondary w-full justify-center text-xs py-2 px-4">
                      Submit Sourcing Profile
                    </a>
                  </div>
                </div>

                {/* Card 2: Off-take Buyers */}
                <div className="bg-white border border-outline-variant/30 rounded-[2rem] p-8 shadow-ambient-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-surface-tint block mb-4">Tier 02</span>
                    <h3 className="font-heading text-2xl text-primary font-normal mb-2">Off-take Partners</h3>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                      Industrial heat users, cement plants, municipal utilities, organic fertilizer companies, and corporate carbon offset purchasers seeking stable biocarbon supply.
                    </p>
                  </div>
                  <div className="border-t border-outline-variant/20 pt-6 mt-6">
                    <a href="#contact" className="btn-secondary w-full justify-center text-xs py-2 px-4">
                      Apply as Off-taker
                    </a>
                  </div>
                </div>

                {/* Card 3: Research & Licensing */}
                <div className="bg-white border border-outline-variant/30 rounded-[2rem] p-8 shadow-ambient-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-surface-tint block mb-4">Tier 03</span>
                    <h3 className="font-heading text-2xl text-primary font-normal mb-2">Tech & IP Partners</h3>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                      Research universities, material laboratories, and engineering consultants looking to test advanced carbon coatings, composite matrices, and synthetic batteries.
                    </p>
                  </div>
                  <div className="border-t border-outline-variant/20 pt-6 mt-6">
                    <a href="#contact" className="btn-secondary w-full justify-center text-xs py-2 px-4">
                      Discuss Joint Research
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
