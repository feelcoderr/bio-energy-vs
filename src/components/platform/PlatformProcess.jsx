import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: "sourcing",
    num: "01",
    title: "Residue Sourcing",
    badge: "INPUT",
    desc: "Sourcing secondary agricultural residues (rice husks, wheat straw, forestry offcuts) directly from regional farming communities, avoiding food-crop competition.",
    details: [
      "Inclusive supply contract agreements with rural farmers",
      "Low moisture, low ash feedstock sourcing rules",
      "Decentralized storage nodes to minimize logistics mileage"
    ]
  },
  {
    id: "cracking",
    num: "02",
    title: "Thermal Fractionation",
    badge: "CONVERSION",
    desc: "Residues undergo oxygen-free pyrolytic heating. The lack of oxygen prevents combustion, cracking the carbon molecular structures into gas, liquid, and solid vapor.",
    details: [
      "Operating range: 450°C - 650°C depending on final product specifications",
      "Continuous-feed reactor designed for high thermal recovery efficiency",
      "Zero carbon emissions during the thermal phase (self-powered system)"
    ]
  },
  {
    id: "output",
    num: "03",
    title: "Multi-Stream Refining",
    badge: "REVENUE STREAM",
    desc: "The output fractions are separated: Gas goes to heat recovery, liquid is condensed into bio-oils, and solid char is activated or engineered for high-value applications.",
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

  const currentStep = processSteps.find(step => step.id === activeStep);

  return (
    <section id="flywheel" ref={containerRef} className="py-32 bg-white border-t border-outline-variant/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="process-reveal text-center mb-16">
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

        {/* Horizontal Navigation Buttons (Top) */}
        <div className="process-reveal max-w-4xl mx-auto mb-12 relative">
          {/* Progress Connecting Line */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-outline-variant/30 z-0">
            <div 
              className="h-full bg-surface-tint transition-all duration-500 origin-left"
              style={{
                width: activeStep === "sourcing" ? "0%" : activeStep === "cracking" ? "50%" : "100%"
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            {processSteps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  type="button"
                  className={`flex flex-col md:flex-row items-center gap-4 px-6 py-4.5 rounded-full border-2 bg-white transition-all duration-300 shadow-ambient-sm ${
                    isActive
                      ? "border-surface-tint text-primary font-semibold shadow-[0_0_20px_rgba(76,108,84,0.1)]"
                      : "border-outline-variant/40 text-on-surface-variant/70 hover:border-outline hover:text-primary"
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-xs font-bold transition-all duration-300 ${
                    isActive ? "bg-primary text-white" : "bg-surface-container text-on-surface-variant"
                  }`}>
                    {step.num}
                  </span>
                  <span className="font-heading text-sm md:text-base">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Consolidated Details Dashboard Card (Below) */}
        <div className="process-reveal bg-surface-container-low border border-outline-variant/35 rounded-[3rem] p-8 md:p-12 shadow-ambient-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Stage details & Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[9px] font-body font-bold text-surface-tint uppercase tracking-widest block mb-2">
                  STAGE SPECIFICATION ({currentStep.badge})
                </span>
                <h3 className="font-heading text-3xl text-primary font-normal leading-tight">
                  {currentStep.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mt-4">
                  {currentStep.desc}
                </p>
              </div>

              <div className="border-t border-outline-variant/30 pt-6">
                <span className="block text-[8px] font-body font-bold tracking-widest text-on-surface-variant/70 uppercase mb-3">
                  Checklist & Deliverables
                </span>
                <ul className="space-y-3">
                  {currentStep.details.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-surface-tint font-bold text-sm leading-none mt-0.5">✓</span>
                      <span className="font-body text-xs text-on-surface leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Visual Node Schematic */}
            <div className="lg:col-span-5 bg-white border border-outline-variant/45 rounded-3xl p-8 flex flex-col justify-center items-center h-full shadow-ambient-sm relative">
              <span className="absolute top-4 left-4 text-[8px] font-body font-bold uppercase tracking-widest text-on-surface-variant/50">SYSTEM NODES</span>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-around py-4 mt-2">
                
                {/* Node 1: Sourcing */}
                <div className={`w-24 h-24 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-300 bg-white ${
                  activeStep === "sourcing" ? "border-surface-tint shadow-[0_0_20px_rgba(76,108,84,0.15)] scale-105" : "border-outline-variant/30"
                }`}>
                  <span className="text-[8px] font-body font-bold text-on-surface-variant/70 uppercase">Biomass</span>
                  <span className="font-heading text-[10px] text-primary font-semibold mt-0.5">Sourcing</span>
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${activeStep === "sourcing" ? "bg-surface-tint" : "bg-outline-variant/30"}`} />
                </div>

                {/* Node 2: Fractionation */}
                <div className={`w-24 h-24 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-300 bg-white ${
                  activeStep === "cracking" ? "border-surface-tint shadow-[0_0_20px_rgba(76,108,84,0.15)] scale-105" : "border-outline-variant/30"
                }`}>
                  <span className="text-[8px] font-body font-bold text-on-surface-variant/70 uppercase">Pyrolysis</span>
                  <span className="font-heading text-[10px] text-primary font-semibold mt-0.5">Cracking</span>
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${activeStep === "cracking" ? "bg-surface-tint" : "bg-outline-variant/30"}`} />
                </div>

                {/* Node 3: Outputs */}
                <div className={`w-24 h-24 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-300 bg-white ${
                  activeStep === "output" ? "border-surface-tint shadow-[0_0_20px_rgba(76,108,84,0.15)] scale-105" : "border-outline-variant/30"
                }`}>
                  <span className="text-[8px] font-body font-bold text-on-surface-variant/70 uppercase">Refinery</span>
                  <span className="font-heading text-[10px] text-primary font-semibold mt-0.5">Outputs</span>
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${activeStep === "output" ? "bg-surface-tint" : "bg-outline-variant/30"}`} />
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
