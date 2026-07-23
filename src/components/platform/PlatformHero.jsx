import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PlatformHero() {
  const containerRef = useRef(null);
  const [tpdVal, setTpdVal] = useState(30);

  useGSAP(
    () => {
      // Initial entrance animations
      gsap.fromTo(
        ".hero-animate",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" },
      );

      // Capacity progress bar trigger
      gsap.fromTo(
        ".capacity-progress",
        { width: "10%" },
        {
          width: "100%",
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".capacity-progress-container",
            start: "top 80%",
            end: "top 30%",
            scrub: 1.5,
          },
        },
      );

      // Number counter effect for capacity scaling
      gsap.to(
        { val: 0 },
        {
          val: 100,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".capacity-progress-container",
            start: "top 80%",
          },
          onUpdate: function () {
            setTpdVal(Math.round(this.targets()[0].val));
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center bg-surface-container-lowest pt-28 pb-20 overflow-hidden"
    >
      {/* Decorative clean radial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(100,128,50,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text/Intro Column */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="hero-animate text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white self-start shadow-ambient-sm">
              The Infrastructure Engine
            </span>
            <h1 className="hero-animate font-heading text-5xl md:text-6xl lg:text-7xl text-primary font-normal leading-[1.1] mb-6">
              A Scalable Biomass to Carbon <span className="italic text-surface-tint">
                Platform Business.
              </span>
            </h1>
            <p className="hero-animate font-body text-lg text-on-surface-variant leading-relaxed max-w-xl mb-8">
              Ratnanjali Bioenergy converts regional organic residues into a
              high-value portfolio of carbon products. By combining modular
              execution with multiple revenue streams, we turn environmental
              remediation into compounding commercial value.
            </p>
            <div className="hero-animate flex flex-wrap gap-4">
              <a href="#revenue" className="btn-primary">
                Explore Revenue Engine
              </a>
              <a href="#flywheel" className="btn-secondary">
                View Commercial Flywheel
              </a>
            </div>
          </div>

          {/* Data Visualization / Graphic Column */}
          <div className="lg:col-span-5 bg-white border border-outline-variant/30 rounded-[2.5rem] p-8 md:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.03)] relative overflow-hidden hero-animate">
            <div className="absolute top-0 right-0 w-32 h-32 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />

            <h2 className="font-heading text-2xl text-primary font-normal mb-8">
              Commercial Performance Scaling
            </h2>

            {/* Scaling Graph/Indicator */}
            <div className="capacity-progress-container mb-10">
              <div className="flex justify-between items-end mb-2">
                <span className="font-body text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  Refinery Processing Capacity
                </span>
                <span className="font-heading text-3xl text-surface-tint">
                  {tpdVal}{" "}
                  <span className="text-sm font-body font-medium text-on-surface-variant">
                    % Scale
                  </span>
                </span>
              </div>
              <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                <div className="capacity-progress h-full bg-surface-tint rounded-full w-[10%]" />
              </div>
              <div className="flex justify-between text-[10px] font-body text-on-surface-variant/70 mt-2 font-medium">
                <span>STAGE 1: MODULAR DEPLOYMENT</span>
                <span>STAGE 2: REGIONAL REPLICATION</span>
              </div>
            </div>

            {/* TAM / SAM Metrics Grid */}
            <div className="border-t border-outline-variant/30 pt-8 grid grid-cols-2 gap-6">
              <div>
                <span className="block font-body text-[10px] text-on-surface-variant/70 uppercase tracking-widest font-semibold mb-1">
                  GLOBAL TAM
                </span>
                <span className="block font-heading text-3xl md:text-4xl text-primary">
                  $120B+
                </span>
                <span className="block font-body text-xs text-on-surface-variant mt-1 leading-normal">
                  Circular Carbon & Bioenergy Markets
                </span>
              </div>
              <div>
                <span className="block font-body text-[10px] text-on-surface-variant/70 uppercase tracking-widest font-semibold mb-1">
                  REGIONAL SAM
                </span>
                <span className="block font-heading text-3xl md:text-4xl text-primary">
                  $15B+
                </span>
                <span className="block font-body text-xs text-on-surface-variant mt-1 leading-normal">
                  Organic Biomass Preprocessing & Logistics
                </span>
              </div>
            </div>

            <div className="mt-8 bg-surface-container-low rounded-2xl p-4 border border-outline-variant/20 flex gap-3 items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-olive-scale-400 animate-pulse shrink-0" />
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                <strong>Economics-First Alignment:</strong> Designed to achieve
                positive EBITDA at Phase 1 modular stage, allowing non-dilutive
                replication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
