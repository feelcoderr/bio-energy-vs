import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Organic Biomass", icon: "🌱", desc: "Agricultural residues & forestry biomass" },
  { title: "Platform Conversion", icon: "⚙️", desc: "Preprocessing, pelletization & continuous pyrolysis" },
  { title: "Carbon Products", icon: "⬛", desc: "Industrial biochar, filtration media & fuels" },
  { title: "Advanced Materials", icon: "⬡", desc: "Graphene pathways & conductive carbon" },
];

export default function ProductsJourney() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animate the line drawing down
    gsap.fromTo(".journey-line",
      { scaleY: 0, transformOrigin: "top" },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom 80%",
          scrub: true,
        }
      }
    );

    // Staggered fade for the nodes
    gsap.fromTo(".journey-node",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 90%",
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
        <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block">
          The Transformation Journey
        </span>
        <h2 className="section-heading mb-6">From Waste to High-Value Carbon</h2>
        <p className="section-description mx-auto">
          Waste biomass is the starting point of a circular manufacturing ecosystem. 
          Through our modular thermochemical platform, we create a diversified portfolio 
          of renewable products from a single feedstock stream.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* The central vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-outline-variant/30 -translate-x-1/2 hidden md:block" />
        <div className="journey-line absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-surface-tint to-olive-scale-400 -translate-x-1/2 hidden md:block" />

        <div className="space-y-16 relative z-10">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className={`journey-node flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''} justify-center gap-8`}>
                
                {/* Text Content */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-left' : 'md:text-right'} text-center`}>
                  <h3 className="font-heading text-2xl text-primary mb-2">{step.title}</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Center Node */}
                <div className="w-16 h-16 shrink-0 rounded-full bg-white border border-outline-variant/50 shadow-ambient flex items-center justify-center text-2xl relative z-10">
                  {step.icon}
                </div>

                {/* Empty Space for Grid Alignment */}
                <div className="hidden md:block w-5/12" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
