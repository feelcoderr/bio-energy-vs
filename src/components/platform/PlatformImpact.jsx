import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const impactMetrics = [
  {
    id: "carbon",
    title: "Carbon Sequestered",
    value: "45,000+ MT",
    subtitle: "Permanent CO2e Sequestration",
    desc: "Every ton of agricultural biochar acts as a stable sink, permanently trapping carbon in soils and preventing it from releasing back into the atmosphere for hundreds of years.",
    statName: "Sequestration Half-Life",
    statVal: "500+ Years",
    sdg: ["SDG 13: Climate Action"],
  },
  {
    id: "biomass",
    title: "Biomass Diverted",
    value: "150,000 Tons",
    subtitle: "Agricultural Residues Upcycled",
    desc: "Diverting wheat straw, rice husks, and forestry residues that would otherwise be openly burned or left to rot, preventing massive methane and fine particulate emissions.",
    statName: "Combustion Avoided",
    statVal: "100% Diversion",
    sdg: ["SDG 15: Life on Land", "SDG 12: Responsible Consumption"],
  },
  {
    id: "farmers",
    title: "Livelihoods Impacted",
    value: "2,500+ Farmers",
    subtitle: "Rural Economic Regeneration",
    desc: "Providing a secondary, predictable stream of revenue to regional farmers through structured feedstock procurement, transforming agricultural waste into a community asset.",
    statName: "Average Household Income Boost",
    statVal: "+15% annually",
    sdg: ["SDG 8: Decent Work & Economic Growth", "SDG 1: No Poverty"],
  },
  {
    id: "circularity",
    title: "Resource Efficiency",
    value: "98.2%",
    subtitle: "Refinery Circular Flow Rate",
    desc: "Our modular thermal cracking reactors operate in a closed thermal loop, utilizing process syngas to self-power the pyrolysis system, eliminating thermal fuel inputs.",
    statName: "Thermal Self Sufficiency",
    statVal: "Self-Sustaining",
    sdg: ["SDG 7: Affordable & Clean Energy"],
  },
];

export default function PlatformImpact() {
  const [activeMetric, setActiveMetric] = useState("carbon");
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".impact-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  const currentMetric = impactMetrics.find((m) => m.id === activeMetric);

  return (
    <section
      id="impact"
      ref={containerRef}
      className="py-32 bg-primary text-white overflow-hidden relative"
    >
      {/* Dynamic atmospheric radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[radial-gradient(circle_at_center,rgba(140,166,101,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="impact-reveal text-center mb-24 max-w-3xl mx-auto">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-verdaez-400 mb-4 inline-block px-4 py-1.5 border border-verdaez-400/30 rounded-full bg-verdaez-400/10 shadow-[0_0_15px_rgba(241,246,233,0.05)]">
            Impact Dashboard
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-6">
            Measurable, Verifiable Climate Impact.
          </h2>
          <p className="font-body text-base md:text-lg text-white/70 leading-relaxed">
            Every molecule of carbon we process is accounted for. The Ratnanjali
            Bioenergy platform balances commercial unit economics with deep,
            durable environmental and social benefits.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="impact-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Metrics Panel Grid (Left Column) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {impactMetrics.map((metric) => {
              const isActive = activeMetric === metric.id;
              return (
                <button
                  key={metric.id}
                  onClick={() => setActiveMetric(metric.id)}
                  type="button"
                  className={`text-left p-8 rounded-[2rem] border transition-all duration-500 flex flex-col justify-between items-start h-[220px] ${
                    isActive
                      ? "bg-white/10 border-verdaez-400/40 shadow-[0_0_30px_rgba(241,246,233,0.08)]"
                      : "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div className="w-full flex justify-between items-center">
                    <span className="text-[9px] font-body font-semibold uppercase tracking-widest text-white/50">
                      {metric.title}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${isActive ? "bg-verdaez-400 animate-pulse" : "bg-white/20"}`}
                    />
                  </div>

                  <div className="mt-4">
                    <span className="block font-heading text-4xl lg:text-5xl text-white font-normal leading-none mb-1">
                      {metric.value}
                    </span>
                    <span className="block font-body text-xs text-white/70 leading-relaxed">
                      {metric.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Chart/Analysis Panel (Right Column) */}
          <div className="lg:col-span-5 glass-panel bg-white/5 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div>
                <span className="text-[9px] font-body font-bold text-verdaez-400 uppercase tracking-widest block mb-1">
                  METRIC DRILLDOWN
                </span>
                <h3 className="font-heading text-3xl text-white font-normal">
                  {currentMetric.title}
                </h3>
              </div>

              <p className="font-body text-sm text-white/80 leading-relaxed">
                {currentMetric.desc}
              </p>

              <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-white/50">
                    {currentMetric.statName}
                  </span>
                  <span className="font-heading text-lg text-verdaez-200 mt-1 block">
                    {currentMetric.statVal}
                  </span>
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-white/50">
                    COMPLIANCE READINESS
                  </span>
                  <span className="font-heading text-lg text-verdaez-200 mt-1 block">
                    MRV Certified
                  </span>
                </div>
              </div>
            </div>

            {/* SDG Alignment and Action strip */}
            <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-white/50">
                  UN SDG ALIGNMENT
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {currentMetric.sdg.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-body font-semibold text-verdaez-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-12 h-12 rounded-full border border-verdaez-400/30 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-verdaez-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom MRV / Durability Strip */}
        <div className="impact-reveal mt-12 bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-verdaez-400/10 flex items-center justify-center border border-verdaez-400/30 shrink-0">
              <span className="font-heading text-lg font-bold text-verdaez-400">
                i
              </span>
            </div>
            <div>
              <h4 className="font-heading text-lg text-white font-normal">
                Measurement, Reporting, and Verification (MRV) Readiness
              </h4>
              <p className="font-body text-xs text-white/70 mt-0.5">
                We are actively integrating digitized carbon ledger technologies
                to track biomass feedstocks from the farm gate all the way to
                final storage.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="btn-secondary text-white border-white/30 hover:bg-white/10 shrink-0 text-xs py-2.5 px-6"
          >
            Review MRV Framework
          </a>
        </div>
      </div>
    </section>
  );
}
