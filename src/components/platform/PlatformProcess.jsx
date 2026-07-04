import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: "sourcing",
    title: "1. Sustainable Supply Sourcing",
    desc: "We source secondary agricultural residues (rice husks, wheat straw, forestry offcuts) directly from regional farming communities, avoiding food-crop competition.",
    badge: "INPUT",
    details: [
      "Inclusive supply contract agreements with rural farmers",
      "Low moisture, low ash feedstock sourcing rules",
      "Decentralized storage nodes to minimize logistics mileage"
    ]
  },
  {
    id: "cracking",
    title: "2. Controlled Thermal Fractionation",
    desc: "Residues undergo oxygen-free pyrolytic heating. The lack of oxygen prevents combustion, cracking the carbon molecular structures into gas, liquid, and solid vapor.",
    badge: "CONVERSION",
    details: [
      "Operating range: 450°C - 650°C depending on final product specifications",
      "Continuous-feed reactor designed for high thermal recovery efficiency",
      "Zero carbon emissions during the thermal phase (self-powered system)"
    ]
  },
  {
    id: "output",
    title: "3. Multi-Stream Separation & Refining",
    desc: "The output fractions are separated: Gas goes to heat recovery, liquid is condensed into bio-oils, and solid char is activated or engineered for high-value applications.",
    badge: "REVENUE STREAM",
    details: [
      "Syngas is routed back to fuel the refinery reactors (saving fuel costs)",
      "Liquid bio-oil is collected for industrial heating fuels",
      "Solid biochar is either packaged for ag-fertilizer or upgraded to filtration media"
    ]
  }
];

export default function PlatformProcess() {
  const [activeStep, setActiveStep] = useState("sourcing");
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".process-reveal",
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

  return (
    <section id="flywheel" ref={containerRef} className="py-32 bg-white border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="process-reveal text-center mb-20">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Conversion Platform
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal mb-6">
            One Input. Multiple High-Value Outputs.
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Discover the thermal cracking process that avoids combustion to cleanly isolate carbon, liquids, and gases into highly commercial products.
          </p>
        </div>

        {/* Visual Interactive Dashboard Layout */}
        <div className="process-reveal grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Interactive Steps List (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {processSteps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  type="button"
                  className={`w-full text-left p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between h-full ${
                    isActive
                      ? "bg-surface-container-low border-surface-tint/50 shadow-ambient-sm"
                      : "bg-white border-outline-variant/35 hover:border-outline hover:bg-surface-container-lowest/30"
                  }`}
                >
                  <div>
                    <span className={`text-[9px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      isActive ? "bg-surface-tint/15 text-surface-tint" : "bg-surface-container text-on-surface-variant/70"
                    }`}>
                      {step.badge}
                    </span>
                    <h3 className="font-heading text-2xl text-primary font-normal mt-4 mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {isActive && (
                    <div className="w-full h-1 bg-surface-tint/10 rounded-full overflow-hidden mt-6">
                      <div className="h-full bg-surface-tint w-full origin-left duration-[5000ms] ease-linear" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Flowchart Schematic Card (Right) */}
          <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant/35 rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />

            {/* Schematic Flow Chart Nodes */}
            <div className="flex-1 flex flex-col justify-center items-center py-6">
              
              <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-lg justify-between relative">
                
                {/* Node 1: Sourcing */}
                <div className={`z-10 w-32 h-32 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-500 bg-white ${
                  activeStep === "sourcing" ? "border-surface-tint shadow-[0_0_25px_rgba(76,108,84,0.15)]" : "border-outline-variant/40"
                }`}>
                  <span className="text-[10px] font-body font-bold text-on-surface-variant uppercase">Biomass</span>
                  <span className="font-heading text-xs text-primary font-semibold mt-1">Sourcing</span>
                  <div className={`w-2 h-2 rounded-full mt-2 ${activeStep === "sourcing" ? "bg-surface-tint" : "bg-outline-variant/40"}`} />
                </div>

                {/* Arrow / Line Connect 1 */}
                <div className="hidden md:block flex-1 h-[2px] bg-outline-variant/30 relative">
                  <div className={`absolute inset-0 bg-surface-tint transition-all duration-1000 ${
                    activeStep === "cracking" || activeStep === "output" ? "w-full" : "w-0"
                  }`} />
                </div>

                {/* Node 2: Thermal Fractionation */}
                <div className={`z-10 w-32 h-32 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-500 bg-white ${
                  activeStep === "cracking" ? "border-surface-tint shadow-[0_0_25px_rgba(76,108,84,0.15)]" : "border-outline-variant/40"
                }`}>
                  <span className="text-[10px] font-body font-bold text-on-surface-variant uppercase">Pyrolysis</span>
                  <span className="font-heading text-xs text-primary font-semibold mt-1">Fractionation</span>
                  <div className={`w-2 h-2 rounded-full mt-2 ${activeStep === "cracking" ? "bg-surface-tint" : "bg-outline-variant/40"}`} />
                </div>

                {/* Arrow / Line Connect 2 */}
                <div className="hidden md:block flex-1 h-[2px] bg-outline-variant/30 relative">
                  <div className={`absolute inset-0 bg-surface-tint transition-all duration-1000 ${
                    activeStep === "output" ? "w-full" : "w-0"
                  }`} />
                </div>

                {/* Node 3: Outputs */}
                <div className={`z-10 w-32 h-32 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-500 bg-white ${
                  activeStep === "output" ? "border-surface-tint shadow-[0_0_25px_rgba(76,108,84,0.15)]" : "border-outline-variant/40"
                }`}>
                  <span className="text-[10px] font-body font-bold text-on-surface-variant uppercase">Multi-Stream</span>
                  <span className="font-heading text-xs text-primary font-semibold mt-1">Output Products</span>
                  <div className={`w-2 h-2 rounded-full mt-2 ${activeStep === "output" ? "bg-surface-tint" : "bg-outline-variant/40"}`} />
                </div>

              </div>

            </div>

            {/* Dynamic Step Detail Card */}
            <div className="bg-white border border-outline-variant/40 rounded-2xl p-6 shadow-ambient-sm mt-8">
              <span className="text-[9px] font-body font-bold uppercase tracking-widest text-surface-tint block mb-3">KEY STAGED DETAILS</span>
              <ul className="space-y-3">
                {processSteps.find(step => step.id === activeStep).details.map((detail, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-surface-tint font-bold text-sm leading-none mt-0.5">✓</span>
                    <span className="font-body text-xs text-on-surface leading-normal">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
