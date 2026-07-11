import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hiringStages = [
  {
    num: "01",
    title: "Application Assessment",
    desc: "Our recruiting and engineering teams review your profile to check details against specific pyrolysis and logistics requirements.",
  },
  {
    num: "02",
    title: "Technical Conversation",
    desc: "A 30-minute screening call with a Lead Engineer or Sourcing Specialist focusing on practical thermodynamic or supply chain problems.",
  },
  {
    num: "03",
    title: "Design / Sourcing Case Study",
    desc: "A hands-on, practical simulation mimicking typical field operations (e.g., modular pyrolyzer scaling or short-haul route mapping).",
  },
  {
    num: "04",
    title: "Leadership Alignment & Panel",
    desc: "A panel conversation with founders and plant directors discussing commercial growth, safety protocols, and trust pillars.",
  },
];

export default function CareersProcess() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".process-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-32 bg-surface-container-low border-t border-outline-variant/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="process-reveal text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Hiring Pipeline
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal mb-6">
            The Staged Assessment Path
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
            Our hiring loops are practical, fast, and respectful of your
            schedule. Here is what to expect.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="process-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hiringStages.map((stage) => (
            <div
              key={stage.num}
              className="bg-white border border-outline-variant/35 rounded-3xl p-8 shadow-ambient-sm relative overflow-hidden flex flex-col justify-between h-[250px]"
            >
              <div>
                <span className="font-heading text-3xl font-bold text-surface-tint block mb-4">
                  {stage.num}
                </span>
                <h3 className="font-heading text-xl text-primary font-normal mb-2 leading-tight">
                  {stage.title}
                </h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="border-t border-outline-variant/20 py-1 text-[9px] font-body font-bold text-on-surface-variant/40 tracking-widest uppercase">
                <span>STAGED STEP {stage.num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
