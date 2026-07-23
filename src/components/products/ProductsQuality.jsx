import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsQuality() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".qa-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, scrollTrigger: { trigger: containerRef.current, start: "top 75%" } }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-surface-container-lowest border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block">
              Engineering & Traceability
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-primary font-normal mb-6">
              Quality Assurance & Platform Capabilities
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-10">
              Consistent product performance begins with controlled manufacturing and comprehensive quality management. Every production batch is monitored from biomass intake through final product delivery, ensuring traceability, repeatability, and compliance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="qa-card p-6 bg-white/50 border border-outline-variant/30 rounded-2xl shadow-sm">
                <h4 className="font-heading text-xl text-primary mb-3">Process Monitoring</h4>
                <ul className="space-y-2 text-sm text-on-surface-variant font-body">
                  <li>• Feedstock Intake Tracking</li>
                  <li>• Moisture Monitoring</li>
                  <li>• Mass Balance Analysis</li>
                  <li>• Energy Consumption</li>
                </ul>
              </div>

              <div className="qa-card p-6 bg-white/50 border border-outline-variant/30 rounded-2xl shadow-sm">
                <h4 className="font-heading text-xl text-primary mb-3">Laboratory Testing</h4>
                <ul className="space-y-2 text-sm text-on-surface-variant font-body">
                  <li>• Carbon & Ash Content</li>
                  <li>• Particle Size Distribution</li>
                  <li>• Surface Area Measurement</li>
                  <li>• Heating Value (HHV)</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="w-full lg:w-1/2">
             <div className="relative rounded-3xl overflow-hidden shadow-ambient-lg group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/images/lab-quality.jpg')" }}
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                
                {/* Image takes full height without floating UI */}
                <div className="relative z-10 h-[500px]" />
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
