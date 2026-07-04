import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const disciplines = [
  { title: 'Feedstock Security', desc: 'Diverse, local and traceable biomass supply chains.' },
  { title: 'Process Data', desc: 'Data-driven operations and continuous improvement.' },
  { title: 'Product Quality', desc: 'Consistent specifications and third-party validation.' },
  { title: 'EHS Excellence', desc: 'Environment, health and safety as a core operating value.' },
  { title: 'Strict Compliance', desc: 'Regulatory adherence and transparent reporting.' },
  { title: 'Procurement Discipline', desc: 'Value, quality and total cost of ownership.' },
  { title: 'Vendor Due Diligence', desc: 'Qualified partners and performance track record.' },
  { title: 'Installed References', desc: 'Trusted equipment with proven installed performance.' },
  { title: 'Feedstock Trials', desc: 'Pilot trials before scale for process and product fit.' },
  { title: 'Offtake-Led Expansion', desc: 'Demand visibility drives responsible capacity growth.' },
];

export default function AboutDiscipline() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    gsap.from(itemsRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Sticky Header */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block">
                Execution Framework
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-normal leading-tight text-primary mb-6">
                Discipline<br/>
                <span className="italic text-surface-tint">Before Hype.</span>
              </h2>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-md">
                We believe climate businesses must be financially viable, operationally disciplined, and technically honest. 
                Our engineering framework prioritizes risk mitigation at every step.
              </p>
              
              <div className="mt-12">
                 <img 
                   src="/images/about-engineering.jpg" 
                   alt="Engineering Discipline" 
                   className="rounded-[24px] shadow-ambient-lg object-cover w-full h-[300px]"
                 />
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {disciplines.map((item, i) => (
              <div key={i} ref={el => itemsRef.current[i] = el} className="border-t border-outline-variant/30 pt-6">
                <div className="text-surface-tint mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-primary mb-2">{item.title}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
