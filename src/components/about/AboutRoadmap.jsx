import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roadmapSteps = [
  {
    year: "2026",
    phase: "Phase 1",
    title: "Initial Plant",
    desc: "Establish base plant, process validation and product commercialization.",
  },
  {
    year: "2027",
    phase: "Phase 2",
    title: "Early Replication",
    desc: "Second facility and feedstock network expansion.",
  },
  {
    year: "2028",
    phase: "Phase 3",
    title: "Regional Expansion",
    desc: "Multi-location presence and broader market penetration.",
  },
  {
    year: "2029",
    phase: "Phase 4",
    title: "Product Diversification",
    desc: "New product lines and value chain integration for higher margin products.",
  },
  {
    year: "2030",
    phase: "Phase 5",
    title: "Integrated Platform",
    desc: "Integrated operations with advanced products and stronger offtake contracts.",
  },
  {
    year: "2031",
    phase: "Phase 6",
    title: "Sustainable Leadership",
    desc: "Industry benchmark for circular carbon materials and climate impact.",
  },
];

export default function AboutRoadmap() {
  const sectionRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // Desktop: horizontal scroll animation
      mm.add("(min-width: 768px)", () => {
        const scrollWidth = scrollWrapperRef.current.scrollWidth;
        const windowWidth = window.innerWidth;

        gsap.to(scrollWrapperRef.current, {
          x: -(scrollWidth - windowWidth + 100),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${scrollWidth}`,
          },
        });
      });

      // Mobile: fade-in cards on scroll
      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray(".roadmap-card").forEach((card, i) => {
          gsap.from(card, {
            y: 40,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          });
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-primary text-white overflow-hidden relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/about-carbon-cycle.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/50 to-primary/90" />

      <div className="relative z-10 px-5 md:px-12 h-full flex flex-col justify-center">
        <div className="max-w-3xl mb-10 md:mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-normal leading-tight mb-4">
            Phased Growth.
            <br />
            <span className="italic text-olive-scale-400">
              Five-Year Scale Target.
            </span>
          </h2>
          <p className="font-body text-base md:text-lg text-white/70">
            A disciplined, phased platform approach to exponential growth and
            maximum climate impact.
          </p>
        </div>

        {/* Mobile: vertical stack | Desktop: horizontal scroll */}
        <div className="w-full md:overflow-visible overflow-x-hidden pb-4 md:pb-8">
          <div
            ref={scrollWrapperRef}
            className="flex flex-col md:flex-row gap-5 md:gap-12 md:w-max items-stretch md:items-end"
          >
            {roadmapSteps.map((step, i) => (
              <div key={i} className="roadmap-card w-full md:w-[300px] md:shrink-0 relative group">
                {/* Connecting Line (desktop only) */}
                {i !== roadmapSteps.length - 1 && (
                  <div className="absolute top-[4.5rem] left-[50%] w-[100%] h-[1px] bg-white/20 hidden md:block" />
                )}

                <div className="glass-panel p-6 md:p-8 rounded-[20px] md:rounded-[24px] md:h-[320px] flex flex-col justify-between hover:bg-white/10 transition-colors duration-500 border-t border-t-white/20">
                  <div>
                    <div className="flex items-end justify-between mb-4 md:mb-6">
                      <span className="text-3xl md:text-4xl font-heading text-white font-light">
                        {step.year}
                      </span>
                      <span className="text-[10px] md:text-xs font-body font-bold uppercase tracking-widest text-olive-scale-400 bg-olive-scale-400/10 px-3 py-1 rounded-full border border-olive-scale-400/20">
                        {step.phase}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-heading text-white mb-2 md:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm font-body text-white/60 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Subtle node marker */}
                  <div className="w-3 h-3 rounded-full bg-olive-scale-400 shadow-[0_0_15px_rgba(140,166,101,0.6)] group-hover:scale-150 transition-transform duration-300 mt-4 md:mt-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
