import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    num: "01",
    title: "Initial Inquiry",
    desc: "Stakeholders submit feedstock descriptions, regional residues profiles, or strategic carbon credit purchase targets.",
    checklist: [
      "Submit residue source types and approximate tonnage",
      "Specify volume demands for fuel pellets or biochars",
      "Initial regulatory and land zoning review"
    ],
    duration: "Week 1 - 2"
  },
  {
    num: "02",
    title: "Feasibility Evaluation",
    desc: "Verdaez chemists analyze sample feedstocks for moisture, ash, and volatile carbon content to confirm pyrolysis yields.",
    checklist: [
      "Laboratory testing of biomass sample characteristics",
      "EBITDA and local logistics radius modeling",
      "Preliminary carbon sequestration yield projections"
    ],
    duration: "Week 2 - 4"
  },
  {
    num: "03",
    title: "Technical Alignment",
    desc: "Collaborate on modular biorefinery sizing (30 TPD to 300 TPD scale-up target) and draft off-take agreements.",
    checklist: [
      "Modular facility blueprint sizing and zoning specs",
      "Draft Letter of Intent (LOI) for off-take pricing structures",
      "Feedstock procurement cooperative logistics design"
    ],
    duration: "Week 4 - 8"
  },
  {
    num: "04",
    title: "Validation Pilot Run",
    desc: "Execute pilot-scale pyrolysis batches to test actual output quality and obtain third-party MRV carbon auditing baseline data.",
    checklist: [
      "Process 5-10 tons of feedstock sample",
      "Certify biochar carbon stability (H:C ratio testing)",
      "Submit pilot dataset to Puro.earth alignment auditors"
    ],
    duration: "Month 2 - 3"
  },
  {
    num: "05",
    title: "Staged Deployment",
    desc: "Finalize long-term joint contracts for feedstock supply, off-take deliveries, or engineering blueprints licensing.",
    checklist: [
      "Execute multi-year procurement and off-take contracts",
      "Secure project financing approvals (EBITDA backed)",
      "Establish regional facility construction blueprints"
    ],
    duration: "Month 3+"
  }
];

export default function EcosystemProcess() {
  const [expandedStage, setExpandedStage] = useState("01");
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".process-timeline-reveal",
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
    <section id="process" ref={containerRef} className="py-32 bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="process-timeline-reveal text-center mb-24 max-w-3xl mx-auto">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Collaboration Pipeline
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal mb-6">
            The Staged Partnership Pipeline
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
            A transparent, engineering-first roadmap guiding collaboration from feedstock testing through modular facility launch.
          </p>
        </div>

        {/* Accordion List Layout */}
        <div className="process-timeline-reveal space-y-4 max-w-4xl mx-auto">
          {stages.map((stage) => {
            const isExpanded = expandedStage === stage.num;
            return (
              <div 
                key={stage.num}
                className="bg-white border border-outline-variant/35 rounded-3xl overflow-hidden shadow-ambient-sm transition-all duration-300"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => setExpandedStage(stage.num)}
                  type="button"
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center hover:bg-surface-container-low/20 transition-all duration-350"
                >
                  <div className="flex gap-6 items-center">
                    <span className="font-heading text-xl font-bold text-surface-tint">
                      {stage.num}
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl text-primary font-normal">
                      {stage.title}
                    </h3>
                  </div>
                  <span className="font-body text-xs text-on-surface-variant font-semibold tracking-wider uppercase">
                    {stage.duration}
                  </span>
                </button>

                {/* Body Content */}
                <div 
                  className={`transition-all duration-500 overflow-hidden ${
                    isExpanded ? "max-h-[500px] border-t border-outline-variant/30" : "max-h-0"
                  }`}
                >
                  <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface-container-low/10">
                    <div>
                      <span className="block text-[8px] font-body font-bold tracking-widest text-on-surface-variant/70 uppercase mb-2">STAGE SUMMARY</span>
                      <p className="font-body text-sm text-on-surface leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                    <div>
                      <span className="block text-[8px] font-body font-bold tracking-widest text-on-surface-variant/70 uppercase mb-3">Deliverables & Checklist</span>
                      <ul className="space-y-2.5">
                        {stage.checklist.map((item, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start">
                            <span className="text-surface-tint font-bold text-xs leading-none mt-0.5">✓</span>
                            <span className="font-body text-xs text-on-surface-variant leading-normal">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
