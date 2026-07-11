import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CareersHero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".careers-reveal",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[75vh] flex items-center bg-surface-container-lowest pt-28 pb-16 overflow-hidden"
    >
      {/* Background subtle radial texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(100,128,50,0.02)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="careers-reveal text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Join the Transition
          </span>
          <h1 className="careers-reveal font-heading text-5xl md:text-6xl lg:text-7xl text-primary font-normal leading-[1.1] mb-6">
            Work on the Frontlines of the{" "}
            <span className="italic text-surface-tint">Carbon Transition.</span>
          </h1>
          <p className="careers-reveal font-body text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl mb-8">
            Ratnanjali Bioenergy is scaling physical carbon solutions to
            mitigate industrial emissions and restore soils. We are looking for
            engineers, operators, and builders who prioritize physical execution
            over slides.
          </p>
          <div className="careers-reveal flex flex-wrap justify-center gap-4">
            <a href="#open-roles" className="btn-primary">
              View Open Positions
            </a>
            <a href="#culture" className="btn-secondary">
              Our Culture & Values
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
