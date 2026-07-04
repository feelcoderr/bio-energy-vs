import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  { id: 1, title: 'Sustainable Sourcing', desc: 'Agricultural residues & forestry biomass are responsibly sourced.' },
  { id: 2, title: 'Feedstock Preparation', desc: 'Moisture control & size optimization ensure consistent quality.' },
  { id: 3, title: 'Pelletization', desc: 'Densified into uniform pellets to improve thermal conversion efficiency.' },
  { id: 4, title: 'Continuous Pyrolysis', desc: 'Oxygen-limited thermal conversion produces biochar, oil, & syngas.' },
  { id: 5, title: 'Product Recovery', desc: 'Streams are separated, cooled, and stabilized for commercial use.' },
  { id: 6, title: 'Carbon Upgrading', desc: 'Biochar is transformed into activated carbon & filtration media.' },
  { id: 7, title: 'Material Innovation', desc: 'Research expands capabilities into conductive & graphene-derived materials.' },
];

export default function ProductsProcess() {
  const containerRef = useRef(null);
  const scrollTrackRef = useRef(null);

  useGSAP(() => {
    // Horizontal scroll effect
    const track = scrollTrackRef.current;
    
    gsap.to(track, {
      xPercent: -100 + (100 / processSteps.length), // Stop at the last card
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top 10%",
        end: "+=200%",
      }
    });

  }, { scope: containerRef });

  return (
    <section id="process" ref={containerRef} className="py-24 bg-primary text-white overflow-hidden h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 mb-16 shrink-0 w-full">
        <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-verdaez-400 mb-4 inline-block">
          The Technology Behind Every Product
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 text-white max-w-3xl">
          Integrated Conversion Process
        </h2>
        <p className="font-body text-lg text-white/80 max-w-2xl leading-relaxed">
          Rather than operating isolated production systems, our modular platform enables multiple commercial products to be generated from a single biomass stream—maximizing efficiency and reducing waste.
        </p>
      </div>

      <div className="pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)] pb-12 w-full overflow-visible">
        <div ref={scrollTrackRef} className="flex gap-8 w-[250vw] md:w-[150vw]">
          {processSteps.map((step, idx) => (
            <div 
              key={step.id} 
              className="w-[280px] md:w-[350px] shrink-0 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative"
            >
              <div className="text-6xl font-heading text-verdaez-400/20 absolute top-4 right-6 pointer-events-none">
                0{step.id}
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20">
                <div className="w-3 h-3 bg-verdaez-400 rounded-full shadow-[0_0_15px_rgba(235,243,237,0.8)]" />
              </div>
              <h3 className="font-heading text-2xl text-white mb-4 relative z-10">{step.title}</h3>
              <p className="font-body text-white/70 leading-relaxed relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
