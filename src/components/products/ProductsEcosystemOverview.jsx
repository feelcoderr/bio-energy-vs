import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsEcosystemOverview() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".eco-pillar",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="ecosystem"
      ref={containerRef}
      className="py-24 bg-surface-container-lowest"
    >
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block">
          The Ratnanjali Bioenergy Ecosystem
        </span>
        <h2 className="section-heading mb-6">
          Building Value Through an Integrated Platform
        </h2>
        <p className="section-description mx-auto">
          Every biomass feedstock contains untapped potential. Rather than
          producing a single product, our modular conversion process generates
          multiple value streams from one production platform creating greater
          resource efficiency and diversified sustainability.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="eco-pillar glass-card p-10 bg-white/60 border-t-4 border-t-primary">
            <h3 className="font-heading text-2xl text-primary mb-4">
              Renewable Energy
            </h3>
            <ul className="space-y-3 font-body text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-surface-tint rounded-full" />{" "}
                Biomass Fuel Pellets
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-surface-tint rounded-full" />{" "}
                Industrial Fuel Pellets
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-surface-tint rounded-full" />{" "}
                Pyrolysis Oil & Derivatives
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-surface-tint rounded-full" />{" "}
                Syngas for Process Energy
              </li>
            </ul>
          </div>

          <div className="eco-pillar glass-card p-10 bg-white/60 border-t-4 border-t-surface-tint">
            <h3 className="font-heading text-2xl text-primary mb-4">
              Carbon Products
            </h3>
            <ul className="space-y-3 font-body text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-olive-scale-400 rounded-full" /> Ag
                & Industrial Biochar
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-olive-scale-400 rounded-full" />{" "}
                Slow-Release Fertilizer
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-olive-scale-400 rounded-full" />{" "}
                Biochar Filter Media
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-olive-scale-400 rounded-full" />{" "}
                Activated Carbon
              </li>
            </ul>
          </div>

          <div className="eco-pillar glass-card p-10 bg-white/60 border-t-4 border-t-olive-scale-300">
            <h3 className="font-heading text-2xl text-primary mb-4">
              Advanced Materials
            </h3>
            <ul className="space-y-3 font-body text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />{" "}
                Conductive Carbon Additives
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />{" "}
                Functional Carbon Materials
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />{" "}
                Graphene-Derived Materials
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Carbon
                Composites
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
