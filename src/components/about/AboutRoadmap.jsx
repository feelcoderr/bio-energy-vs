import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const roadmapSteps = [
  { year: '2026', tpd: '30 TPD', title: 'Initial Plant', desc: 'Establish base plant, process validation and product commercialization.' },
  { year: '2027', tpd: '60 TPD', title: 'Early Replication', desc: 'Second facility and feedstock network expansion.' },
  { year: '2028', tpd: '120 TPD', title: 'Regional Expansion', desc: 'Multi-location presence and broader market penetration.' },
  { year: '2029', tpd: '200 TPD', title: 'Product Diversification', desc: 'New product lines and value-chain integration for higher margin products.' },
  { year: '2030', tpd: '300 TPD', title: 'Integrated Platform Scale', desc: 'Integrated operations with advanced products and stronger offtake contracts.' },
  { year: '2031', tpd: '300+ TPD', title: 'Sustainable Leadership', desc: 'Industry benchmark for circular carbon materials and climate impact.' },
];

export default function AboutRoadmap() {
  const sectionRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useGSAP(() => {
    // Only apply horizontal scroll on desktop
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const scrollWidth = scrollWrapperRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      
      gsap.to(scrollWrapperRef.current, {
        x: -(scrollWidth - windowWidth + 100), // 100px padding
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollWidth}`,
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Image Abstract */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/about-carbon-cycle.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/50 to-primary/90" />

      <div className="relative z-10 px-6 md:px-12 h-full flex flex-col justify-center">
        <div className="max-w-3xl mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-normal leading-tight mb-4">
            30 TPD Start.<br/>
            <span className="italic text-verdaez-400">300 TPD Five-Year Scale Target.</span>
          </h2>
          <p className="font-body text-lg text-white/70">
            A disciplined, phased platform approach to exponential growth and maximum climate impact.
          </p>
        </div>

        {/* The horizontally scrolling container */}
        <div className="w-full md:overflow-visible overflow-x-auto pb-8">
          <div ref={scrollWrapperRef} className="flex gap-8 md:gap-12 w-max items-end">
            {roadmapSteps.map((step, i) => (
              <div key={i} className="w-[300px] shrink-0 relative group">
                
                {/* Connecting Line */}
                {i !== roadmapSteps.length - 1 && (
                  <div className="absolute top-[4.5rem] left-[50%] w-[100%] h-[1px] bg-white/20 hidden md:block" />
                )}

                <div className="glass-panel p-8 rounded-[24px] h-[320px] flex flex-col justify-between hover:bg-white/10 transition-colors duration-500 border-t border-t-white/20">
                  <div>
                    <div className="flex items-end justify-between mb-6">
                      <span className="text-4xl font-heading text-white font-light">{step.year}</span>
                      <span className="text-xs font-body font-bold uppercase tracking-widest text-verdaez-400 bg-verdaez-400/10 px-3 py-1 rounded-full border border-verdaez-400/20">
                        {step.tpd}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading text-white mb-3">{step.title}</h3>
                    <p className="text-sm font-body text-white/60 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Subtle node marker */}
                  <div className="w-3 h-3 rounded-full bg-verdaez-400 shadow-[0_0_15px_rgba(131,171,142,0.6)] group-hover:scale-150 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
