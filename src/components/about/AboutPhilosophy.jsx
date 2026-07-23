import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPhilosophy() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Staggered card reveal on scroll using fromTo for reliable initial state
      gsap.fromTo(
        ".philosophy-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-olive-scale-200 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="section-heading mb-6">Operating Philosophy</h2>
          <p className="section-description">
            Ratnanjali Bioenergy transforms underutilized organic biomass into
            practical products for energy, agriculture, water, industry, and
            climate markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="philosophy-card opacity-0 glass-card p-10 bg-white/60">
            <div className="w-12 h-12 rounded-2xl bg-primary-container text-white flex items-center justify-center mb-6 shadow-ambient">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-heading text-2xl text-primary mb-4">Mission</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Convert biomass waste into durable, high value and market ready
              products.
            </p>
          </div>

          {/* Vision */}
          <div className="philosophy-card opacity-0 glass-card p-10 bg-white/60">
            <div className="w-12 h-12 rounded-2xl bg-primary-container text-white flex items-center justify-center mb-6 shadow-ambient">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-heading text-2xl text-primary mb-4">Vision</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Become a scalable biomass to carbon materials company serving
              energy, agriculture, water, infrastructure, and emerging
              technology markets.
            </p>
          </div>

          {/* Philosophy */}
          <div className="philosophy-card opacity-0 glass-card p-10 bg-white/60">
            <div className="w-12 h-12 rounded-2xl bg-primary-container text-white flex items-center justify-center mb-6 shadow-ambient">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-heading text-2xl text-primary mb-4">
              Philosophy
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Build cash flow products first, validate advanced products step by
              step, use partnerships where internal capex is inefficient, and
              create measurable environmental and social benefits with
              transparent data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
