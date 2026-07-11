import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const chainStages = [
  { label: "Biomass Sourcing", desc: "Regional residues collected" },
  { label: "Preprocessing", desc: "Drying, sorting, sizing" },
  { label: "Pyrolysis Refining", desc: "Oxygen free thermal cracking" },
  { label: "Carbon Products", desc: "High-value energy & biochars" },
  { label: "Target Markets", desc: "Ag, utilities, electronics" },
  { label: "Circular Economy", desc: "Permanent carbon sinks" },
];

export default function EcosystemHero() {
  const containerRef = useRef(null);
  const [activeNode, setActiveNode] = useState(0);

  useGSAP(
    () => {
      // Staggered text entrance
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" },
      );

      // Flowing line pulse animation
      const timeline = gsap.timeline({ repeat: -1 });

      chainStages.forEach((_, idx) => {
        timeline.to(
          {},
          {
            duration: 2,
            onStart: () => {
              setActiveNode(idx);
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center bg-surface-container-lowest pt-28 pb-16 overflow-hidden"
    >
      {/* Editorial subtle background radial mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(100,128,50,0.025)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <span className="hero-reveal text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Ratnanjali Bioenergy Collaboration Network
          </span>
          <h1 className="hero-reveal font-heading text-5xl md:text-6xl lg:text-7xl text-primary font-normal leading-[1.1] mb-6">
            Enter the Circular <span className="italic text-surface-tint">Carbon Ecosystem.</span>
          </h1>
          <p className="hero-reveal font-body text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
            Ratnanjali Bioenergy is the infrastructure platform connecting rural
            feedstocks with high growth carbon markets, enabling technology
            partners, off takers, and investors to build durable climate value.
          </p>
        </div>

        {/* Animated Value Chain Nodes (Horizontal flow on desktop, Stacked list on mobile) */}
        <div className="hero-reveal mt-8 relative bg-white border border-outline-variant/30 rounded-[3rem] p-10 md:p-12 shadow-[0_10px_50px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />

          <h3 className="font-heading text-xl text-primary font-normal mb-10 text-center md:text-left">
            The Flow of Biomass to Carbon Value
          </h3>

          {/* Connection Line & Nodes Container */}
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 w-full">
            {/* Horizontal Line background for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-outline-variant/30 z-0">
              <div
                className="h-full bg-surface-tint transition-all duration-1000 origin-left"
                style={{
                  width: `${(activeNode / (chainStages.length - 1)) * 100}%`,
                }}
              />
            </div>

            {chainStages.map((stage, idx) => {
              const isActive = activeNode === idx;
              const isPassed = activeNode >= idx;

              return (
                <div
                  key={stage.label}
                  className="z-10 flex flex-col items-center text-center w-full md:w-36 transition-all duration-500"
                >
                  {/* Node Circle */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 bg-white ${
                      isActive
                        ? "border-surface-tint shadow-[0_0_20px_rgba(100,128,50,0.2)] scale-110"
                        : isPassed
                          ? "border-surface-tint/70"
                          : "border-outline-variant/40"
                    }`}
                  >
                    <span
                      className={`font-heading text-base font-semibold ${
                        isPassed
                          ? "text-surface-tint"
                          : "text-on-surface-variant/40"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Label Details */}
                  <h4
                    className={`font-heading text-sm mt-4 font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-on-surface-variant/70"
                    }`}
                  >
                    {stage.label}
                  </h4>
                  <p className="font-body text-[11px] text-on-surface-variant/60 leading-normal mt-1 max-w-[120px] hidden md:block">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
