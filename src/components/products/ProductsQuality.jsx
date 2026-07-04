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
                
                {/* Floating Traceability UI element */}
                <div className="relative z-10 h-[500px] flex items-end p-8">
                  <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <h4 className="font-heading text-lg text-primary mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-surface-tint" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        Digital Product Traceability
                     </h4>
                     <div className="w-full h-1.5 bg-outline-variant/30 rounded-full mb-3 overflow-hidden">
                       <div className="h-full bg-surface-tint w-[100%] rounded-full relative">
                         <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_2s_infinite]" />
                       </div>
                     </div>
                     <div className="flex justify-between text-xs text-on-surface-variant font-medium">
                       <span>Batch ID: #VZ-8902</span>
                       <span className="text-primary">Verified</span>
                     </div>
                  </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
