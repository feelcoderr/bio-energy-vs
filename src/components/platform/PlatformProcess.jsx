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
    desc: "Sourcing secondary agricultural residues (rice husks, wheat straw, forestry offcuts) directly from regional farming communities, avoiding food crop competition.",
    details: [
      "Inclusive supply contract agreements with rural farmers",
      "Low moisture, low ash feedstock sourcing rules",
      "Decentralized storage nodes to minimize logistics mileage"
    ],
    parameters: [
      { label: "Sourcing Radius", value: "< 50 km" },
      { label: "Feedstock Profile", value: "Crop residues, forestry residues" },
      { label: "Max Moisture Limit", value: "15%" },
      { label: "Target Ash Content", value: "< 5%" }
    ]
  },
  {
    id: "cracking",
    num: "02",
    title: "Thermal Fractionation",
    badge: "CONVERSION",
    desc: "Residues undergo oxygen-free pyrolytic heating. The lack of oxygen prevents combustion, cracking the carbon molecular structures into gas, liquid, and solid vapor.",
    details: [
      "Operating range: 450°C–650°C depending on final product specifications",
      "Continuous feed reactor designed for high thermal recovery efficiency",
      "Zero carbon emissions during the thermal phase (self-powered system)"
    ],
    parameters: [
      { label: "Reactor Temperature", value: "450°C–650°C" },
      { label: "Oxygen Atmosphere", value: "0.0% (Pyrolysis)" },
      { label: "Residence Time", value: "12–15 minutes" },
      { label: "Combustion Index", value: "0.0 (Zero Burning)" }
    ]
  },
  {
    id: "output",
    num: "03",
    title: "Multi Stream Refining",
    badge: "REVENUE STREAM",
    desc: "The output fractions are separated: Gas goes to heat recovery, liquid is condensed into bio-oils, and solid char is activated or engineered for high-value applications.",
    details: [
      "Syngas is routed back to fuel the refinery reactors (saving fuel costs)",
      "Liquid bio-oil is collected for industrial heating fuels",
      "Solid biochar is either packaged for ag-fertilizer or upgraded to filtration media"
    ],
    parameters: [
      { label: "Solid Yield (Biochar)", value: "35%–45% Fraction" },
      { label: "Liquid Yield (Bio-oil)", value: "25%–30% Fraction" },
      { label: "Gas Yield (Syngas)", value: "20%–25% Recycled" },
      { label: "Sequestration Index (H:C)", value: "< 0.7 (Stable Carbon)" }
    ]
  }
];

export default function PlatformProcess() {
  const [activeStep, setActiveStep] = useState("sourcing");
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".process-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%"
          }
        }
      );
    },
    { scope: containerRef }
  );

  const currentStep = processSteps.find((step) => step.id === activeStep);

  return (
    <section
      id="flywheel"
      ref={containerRef}
      className="py-32 bg-white border-t border-outline-variant/30 relative overflow-hidden"
    >
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
            Discover the thermal cracking process that avoids combustion to
            cleanly isolate carbon, liquids, and gases into highly commercial
            products.
          </p>
        </div>

        {/* Horizontal Navigation Buttons (Top) */}
        <div className="process-reveal max-w-4xl mx-auto mb-12 relative">
          {/* Progress Connecting Line */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-outline-variant/30 z-0">
            <div
              className="h-full bg-surface-tint transition-all duration-500 origin-left"
              style={{
                width:
                  activeStep === "sourcing"
                    ? "0%"
                    : activeStep === "cracking"
                      ? "50%"
                      : "100%"
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
                  className={`flex flex-row items-center gap-3 md:gap-4 px-5 py-3 md:px-6 md:py-4.5 rounded-full border-2 bg-white transition-all duration-300 shadow-ambient-sm cursor-pointer ${
                    isActive
                      ? "border-surface-tint text-primary font-semibold shadow-[0_0_20px_rgba(100,128,50,0.1)]"
                      : "border-outline-variant/40 text-on-surface-variant/70 hover:border-outline hover:text-primary"
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    {step.num}
                  </span>
                  <span className="font-heading text-sm md:text-base">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Consolidated Details Dashboard Card (Below) */}
        <div className="process-reveal bg-surface-container-low border border-outline-variant/35 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-ambient-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Stage details & Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
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
                      <span className="text-surface-tint font-bold text-sm leading-none mt-0.5">
                        ✓
                      </span>
                      <span className="font-body text-xs text-on-surface leading-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Dynamic Specification Specs Sheet (Replaces circles) */}
            <div className="lg:col-span-5 bg-white border border-outline-variant/45 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-ambient-sm relative mt-2 lg:mt-0">
              <div>
                <span className="text-[8px] font-body font-bold uppercase tracking-widest text-on-surface-variant/60 block mb-6">
                  Process Parameters
                </span>
                <div className="space-y-4">
                  {currentStep.parameters.map((param, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center border-b border-outline-variant/30 pb-3.5 last:border-0"
                    >
                      <span className="text-xs font-body text-on-surface-variant">
                        {param.label}
                      </span>
                      <span className="text-xs font-body font-semibold text-primary">
                        {param.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-[8px] font-body font-bold text-surface-tint/70 uppercase tracking-wider">
                  MRV Audit Ready
                </span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-surface-tint animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-surface-tint" />
                  <div className="w-1.5 h-1.5 rounded-full bg-surface-tint" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
