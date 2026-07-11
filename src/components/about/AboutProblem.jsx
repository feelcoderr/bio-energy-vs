import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutProblem() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const statRef = useRef(null);

  useGSAP(() => {
    // Pin the text while stats scroll past
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=100%",
      pin: textRef.current,
      pinSpacing: false,
    });

    gsap.from(statRef.current.children, {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: statRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 pt-32">
        
        {/* Left Side: Pinned Text */}
        <div ref={textRef} className="h-screen flex flex-col justify-center pb-32">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-6 inline-block">
            The Circular Carbon Opportunity
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-primary leading-tight mb-8">
            Solving the <span className="italic text-surface-tint">Biomass Paradox.</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-md">
            Millions of tons of organic biomass go unutilized or are burned openly every year, releasing massive amounts of CO₂ and particulate matter into the atmosphere. 
            <br/><br/>
            We view this not as waste, but as the world's most accessible, renewable source of advanced carbon materials.
          </p>
        </div>

        {/* Right Side: Scrolling Stats */}
        <div className="pt-[50vh] pb-[50vh]">
          <div ref={statRef} className="space-y-32">
            <div className="glass-panel-light bg-surface-container-low p-12 rounded-[24px] border border-outline-variant/30 shadow-ambient">
               <h3 className="text-6xl font-heading text-primary mb-2">90%</h3>
               <p className="font-body text-lg text-on-surface-variant">Of agricultural residue is currently underutilized or burned.</p>
            </div>
            
            <div className="glass-panel-light bg-surface-container-low p-12 rounded-[24px] border border-outline-variant/30 shadow-ambient">
               <h3 className="text-6xl font-heading text-primary mb-2">300<span className="text-2xl text-surface-tint ml-1">TPD</span></h3>
               <p className="font-body text-lg text-on-surface-variant">Our modular scaling target to process biomass locally and efficiently.</p>
            </div>

            <div className="glass-panel-light bg-surface-container-low p-12 rounded-[24px] border border-outline-variant/30 shadow-ambient">
               <h3 className="text-6xl font-heading text-primary mb-2">1,000+</h3>
               <p className="font-body text-lg text-on-surface-variant">Years of carbon sequestration potential through biochar applications.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
