import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ContactHero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-reveal",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[48vh] flex items-center bg-surface-container-lowest pt-28 pb-16 overflow-hidden"
    >
      {/* Background subtle radial texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(100,128,50,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="contact-reveal text-[10px] font-body font-semibold uppercase tracking-[0.25em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Contact & Partnership Hub
          </span>
          <h1 className="contact-reveal font-heading text-5xl md:text-6xl lg:text-7xl text-primary font-normal leading-[1.1] mb-6">
            Partner for Sustainable{" "}
            <span className="italic text-surface-tint">
              Carbon Infrastructure.
            </span>
          </h1>
          <p className="contact-reveal font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
            Connect directly with our process engineering, feedstock logistics, or
            investment teams to deploy clean bioenergy projects.
          </p>
        </div>
      </div>
    </section>
  );
}
