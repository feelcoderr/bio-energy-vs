import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EcosystemTrust() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".trust-reveal",
      { opacity: 0, y: 30 },
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
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden border-t border-outline-variant/30">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Slogan */}
          <div className="lg:col-span-5 trust-reveal">
            <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
              Operational Standards
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-primary font-normal leading-tight">
              An Infrastructure Built on Trust.
            </h2>
            <p className="font-body text-base text-on-surface-variant leading-relaxed mt-6">
              Our partners trust us to manage complex agricultural waste supply chains safely, transparently, and sustainably. We don't just process carbon—we govern its journey.
            </p>
          </div>

          {/* Pillars Checklist */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 trust-reveal">
            
            <div className="bg-surface-container-low border border-outline-variant/35 rounded-3xl p-8 shadow-ambient-sm">
              <span className="block text-[8px] font-body font-bold text-surface-tint uppercase tracking-widest mb-1.5">Procurement Stability</span>
              <h3 className="font-heading text-xl text-primary font-normal mb-3">Locked-In Cooperatives</h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                By entering into multi-year crop residue purchase agreements with regional farm unions, we secure a stable feedstock baseline while guaranteeing fair rates to agricultural communities.
              </p>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/35 rounded-3xl p-8 shadow-ambient-sm">
              <span className="block text-[8px] font-body font-bold text-surface-tint uppercase tracking-widest mb-1.5">Sourcing Guidelines</span>
              <h3 className="font-heading text-xl text-primary font-normal mb-3">Non-Compete Biomass</h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Our sourcing policy mandates that we only process agricultural byproducts, forestry offcuts, and municipal residues. We never source crops that compete with global food security.
              </p>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/35 rounded-3xl p-8 shadow-ambient-sm">
              <span className="block text-[8px] font-body font-bold text-surface-tint uppercase tracking-widest mb-1.5">Process Verification</span>
              <h3 className="font-heading text-xl text-primary font-normal mb-3">Continuous Auditing</h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Our reactors log hourly heat metrics and mass balance datasets, providing third-party ESG verification bodies with raw numbers on emissions mitigation and carbon durability.
              </p>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/35 rounded-3xl p-8 shadow-ambient-sm">
              <span className="block text-[8px] font-body font-bold text-surface-tint uppercase tracking-widest mb-1.5">Community Benefit</span>
              <h3 className="font-heading text-xl text-primary font-normal mb-3">Direct Wealth Loops</h3>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                We hire locally, contract with localized logistics providers, and reinvest bio-refinery returns back into regional preprocessing and sorting micro-hubs.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
