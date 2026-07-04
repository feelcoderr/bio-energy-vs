import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { id: 'ag', title: 'Agriculture', desc: 'Soil solutions, carbon farming, sustainable agriculture.', products: ['Biochar', 'Fertilizer'] },
  { id: 'en', title: 'Energy & Heat', desc: 'Industrial heating, cogeneration, renewable thermal.', products: ['Pellets', 'Pyrolysis Oil', 'Syngas'] },
  { id: 'wa', title: 'Water & Env', desc: 'Wastewater treatment, remediation, odor control.', products: ['Activated Carbon', 'Filter Media'] },
  { id: 'ma', title: 'Manufacturing', desc: 'Chemical feedstocks, industrial fillers, process materials.', products: ['Pyrolysis Oil', 'Industrial Carbon'] },
  { id: 'in', title: 'Infrastructure', desc: 'Asphalt modification, resilient construction materials.', products: ['Carbon Additives', 'Composites'] },
  { id: 'es', title: 'Energy Storage', desc: 'Battery materials, electronics, advanced components.', products: ['Conductive Carbon', 'Graphene'] },
];

export default function ProductsEcosystem() {
  const containerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(null);

  useGSAP(() => {
    gsap.fromTo(".eco-card",
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1, scale: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "back.out(1.2)",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block">
          Applications Ecosystem
        </span>
        <h2 className="font-heading text-4xl md:text-5xl text-primary font-normal mb-6">
          High-Growth Industries
        </h2>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
          Verdaez products support organizations transitioning toward renewable resources, circular manufacturing, and lower-carbon operations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <div 
              key={ind.id} 
              className="eco-card glass-panel-light bg-white/40 p-8 rounded-2xl border border-outline-variant/30 transition-all duration-300 hover:shadow-ambient hover:-translate-y-2 hover:bg-white/80"
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              <div className="w-12 h-12 bg-primary-container text-white rounded-xl flex items-center justify-center mb-6">
                 {/* Simple SVG icon logic based on id */}
                 {ind.id === 'ag' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                 {ind.id === 'en' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                 {ind.id === 'wa' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
                 {ind.id === 'ma' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
              </div>
              <h3 className="font-heading text-2xl text-primary mb-3">{ind.title}</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                {ind.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {ind.products.map(p => (
                  <span key={p} className="text-xs font-semibold bg-surface-tint/10 text-surface-tint px-2 py-1 rounded">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
