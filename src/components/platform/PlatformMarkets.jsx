import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: "agriculture",
    name: "Sustainable Agriculture",
    tagline: "Enhancing soil vitality and storing carbon permanently.",
    needs: "Drought resilience, soil degradation, fertilizer runoff prevention, and carbon farming incentives.",
    products: ["Agricultural Biochar", "Slow-Release Biochar Fertilizers"],
    applications: [
      "Water retention and nutrient binding in sandy soils",
      "Biological carrier for slow-release nitrogen/phosphorus fertilizers",
      "Direct permanent carbon sequestration for corporate ESG offsets"
    ],
    opportunity: "Estimated market value of $3.5B by 2030, driven by regenerative farming mandates."
  },
  {
    id: "energy",
    name: "Industrial Heat & Energy",
    tagline: "Direct replacement of fossil fuels in high-temperature systems.",
    needs: "Coal phase-out mandates, soaring carbon taxes, and renewable thermal energy requirements.",
    products: ["Industrial Fuel Pellets", "Pyrolysis Bio-oil (Bio-crude)"],
    applications: [
      "Co-firing or direct fuel replacement in coal boilers",
      "Thermal combustion feedstock for heavy industries (cement, metal processing)",
      "High-density renewable fuel pellets for municipal heat plants"
    ],
    opportunity: "Direct displacement of fossil coal in regional industrial centers."
  },
  {
    id: "water",
    name: "Water & Gas Filtration",
    tagline: "Removing organic contaminants and micro-pollutants.",
    needs: "Strict clean water standards, municipal sewage treatment, and organic chemical filtration.",
    products: ["Activated Carbon Media"],
    applications: [
      "Municipal water plant active filter beds",
      "Contaminant absorption in chemical wastewater streams",
      "Air and industrial gas exhaust purification filters"
    ],
    opportunity: "High-value specialty chemical market with recurring replacement demand."
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Composites",
    tagline: "Decarbonizing concrete, asphalt, and polymer matrix materials.",
    needs: "Low-carbon concrete building materials, high-strength additives, and green building certs.",
    products: ["Engineered Carbon Materials", "Carbon Composites"],
    applications: [
      "Carbon-negative concrete additives (incorporating biochar into cement mix)",
      "Carbon fillers for structural asphalt pavements",
      "Lightweight reinforcing composites for industrial construction panels"
    ],
    opportunity: "Large-scale procurement options with massive long-term carbon volume storage."
  },
  {
    id: "electronics",
    name: "Energy Storage & Electronics",
    tagline: "Conductive carbon additives for next-gen battery cells.",
    needs: "High-capacity battery anodes, faster charging cycles, and synthetic graphite substitutes.",
    products: ["Conductive Carbon Additives", "Graphene-derived materials"],
    applications: [
      "Conductive coatings for lithium-ion battery electrodes",
      "Anode fillers for silicon-dominant anodes",
      "Supercapacitor active carbon additives"
    ],
    opportunity: "High-margin, high-growth technology frontier serving the EV supply chain."
  }
];

export default function PlatformMarkets() {
  const [activeTab, setActiveTab] = useState("agriculture");
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".markets-reveal",
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

  const activeInd = industries.find(ind => ind.id === activeTab);

  return (
    <section id="markets" ref={containerRef} className="py-32 bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="markets-reveal text-center mb-20">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Ecosystem Alignment
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal mb-6">
            Industrial Target Markets
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Verdaez feeds high-value carbon products directly into global supply chains. Toggle the sectors below to discover applications and opportunities.
          </p>
        </div>

        {/* Tab Layout Grid */}
        <div className="markets-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          
          {/* Vertical Tab Selector */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {industries.map(ind => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                type="button"
                className={`w-full text-left px-6 py-4.5 rounded-2xl border transition-all duration-300 font-heading text-lg ${
                  activeTab === ind.id
                    ? "bg-primary text-white border-primary shadow-ambient-sm"
                    : "bg-white border-outline-variant/30 text-on-surface-variant hover:border-outline hover:text-primary"
                }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {/* Tab Content Details Box */}
          <div className="lg:col-span-8 bg-surface-container-low border border-outline-variant/35 rounded-[2.5rem] p-10 shadow-ambient-sm min-h-[480px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-8">
              {/* Header */}
              <div>
                <span className="text-[9px] font-body font-bold text-surface-tint uppercase tracking-widest block mb-1">
                  SECTOR OUTLOOK
                </span>
                <h3 className="font-heading text-3xl text-primary font-normal">
                  {activeInd.name}
                </h3>
                <p className="font-body text-base text-on-surface-variant italic mt-2">
                  "{activeInd.tagline}"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-outline-variant/30 pt-8">
                
                {/* Needs & Products */}
                <div className="space-y-6">
                  <div>
                    <span className="block text-[9px] font-body font-bold uppercase tracking-widest text-on-surface-variant/70 mb-1">MARKET NEED</span>
                    <p className="font-body text-xs text-on-surface leading-relaxed">
                      {activeInd.needs}
                    </p>
                  </div>
                  <div>
                    <span className="block text-[9px] font-body font-bold uppercase tracking-widest text-on-surface-variant/70 mb-2">VERDAEZ PRODUCTS</span>
                    <div className="flex flex-wrap gap-2">
                      {activeInd.products.map(prod => (
                        <span key={prod} className="px-3.5 py-1.5 rounded-full border border-surface-tint/30 bg-white font-body text-[10px] font-semibold text-surface-tint">
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Applications list */}
                <div>
                  <span className="block text-[9px] font-body font-bold uppercase tracking-widest text-on-surface-variant/70 mb-3">APPLICATIONS</span>
                  <ul className="space-y-3">
                    {activeInd.applications.map((app, i) => (
                      <li key={i} className="flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-verdaez-400 mt-1.5 shrink-0" />
                        <span className="font-body text-xs text-on-surface leading-normal">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Opportunity footer strip */}
            <div className="mt-12 bg-white border border-outline-variant/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="block text-[8px] font-body font-bold uppercase tracking-widest text-on-surface-variant/60">SECTOR OPPORTUNITY</span>
                <p className="font-body text-xs text-on-surface mt-0.5">{activeInd.opportunity}</p>
              </div>
              <a href="#contact" className="btn-secondary py-2 px-5 text-xs">
                Request Briefing
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
