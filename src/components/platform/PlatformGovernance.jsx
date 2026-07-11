import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trustPillars = [
  {
    title: "Methodological Transparency",
    subtitle: "Aligned with Puro.earth and Verra Carbon Standards",
    desc: "Our carbon removal pathways strictly adhere to established international standards. We measure carbon stability through lab-verified pyrolysis conditions, ensuring each ton of biochar meets strict permanent sequestration limits.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Chain of Custody Tracing",
    subtitle: "Farm-to-Gate Feedstock Validation",
    desc: "To prevent sourcing from protected land or competing with feed production, every shipment is geolocated and logged. We establish full digital traceability back to the individual agricultural cooperative or municipal supplier.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Social & Fair-Wage Logistics",
    subtitle: "Regenerating Rural Economies",
    desc: "Our feedstock sourcing engine incorporates localized cooperatives. By using short-haul local logistics partners, we inject up to 35% of raw procurement expenses directly back into regional rural household economies.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function PlatformGovernance() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".trust-reveal",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-surface-container-low border-b border-outline-variant/35 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="trust-reveal text-center mb-24 max-w-3xl mx-auto">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Trust & Governance
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal mb-6">
            Institutional Trust. Verifiable Operations.
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
            We hold ourselves to rigorous governance principles to guarantee that our products deliver authentic, permanent carbon removal and true circularity.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="trust-reveal grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trustPillars.map((pillar, idx) => (
            <div 
              key={pillar.title} 
              className="bg-white border border-outline-variant/35 rounded-[2rem] p-8 flex flex-col justify-between shadow-ambient-sm hover:shadow-ambient hover:-translate-y-1 transition-all duration-500"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-6">
                  {pillar.icon}
                </div>
                <h3 className="font-heading text-2xl text-primary font-normal mb-2 leading-tight">
                  {pillar.title}
                </h3>
                <span className="block text-[10px] font-body font-semibold uppercase tracking-wider text-surface-tint mb-4">
                  {pillar.subtitle}
                </span>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="border-t border-outline-variant/30 pt-6 mt-6 flex justify-between items-center text-[10px] font-body font-bold tracking-widest text-on-surface-variant/50 uppercase">
                <span>GOVERNANCE PILLAR {idx + 1}</span>
                <span className="text-surface-tint">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
