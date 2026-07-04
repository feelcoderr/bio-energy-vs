import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsFuture() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Parallax abstract background
    gsap.fromTo(".future-bg",
      { yPercent: -20 },
      { yPercent: 20, ease: "none", scrollTrigger: { trigger: containerRef.current, scrub: true } }
    );
    
    // Fade up text
    gsap.fromTo(".future-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: containerRef.current, start: "top 70%" } }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 bg-primary overflow-hidden border-t border-white/10">
      {/* Clearer, more sophisticated background image */}
      <div 
        className="future-bg absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none mix-blend-screen"
        style={{ backgroundImage: "url('/images/lab-quality.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-background pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <p className="future-text font-body text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
          Our roadmap extends beyond today's renewable products. By combining industrial production with ongoing material research, Verdaez is building pathways toward advanced carbon technologies capable of serving future applications in clean energy, electronics, and advanced composites.
        </p>

        <div className="future-text flex flex-wrap justify-center gap-4">
          <span className="px-5 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm">Biomass Feedstocks</span>
          <span className="px-5 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm">Renewable Energy</span>
          <span className="px-5 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm">Industrial Carbon</span>
          <span className="px-5 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm">Activated Carbon</span>
          <span className="px-5 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm">Functional Carbons</span>
          <span className="px-5 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-sm">Conductive Additives</span>
          <span className="px-5 py-2 border border-verdaez-400/50 rounded-full bg-verdaez-400/20 backdrop-blur-sm text-verdaez-200 text-sm">Graphene Materials</span>
          <span className="px-5 py-2 border border-verdaez-400/50 rounded-full bg-verdaez-400/20 backdrop-blur-sm text-verdaez-200 text-sm">Carbon Composites</span>
        </div>
      </div>
    </section>
  );
}
