import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cultureValues = [
  {
    title: "Engineering Priority",
    tagline: "Valuing hardware and chemistry over slide deck optimization.",
    desc: "We focus on real-world process chemistry, modular pyrolyzer reliability, and localized supply chains. If you enjoy solving concrete thermodynamic and materials puzzles, you will fit in here.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Durable Impact",
    tagline: "Locking carbon away permanently, measured in centuries.",
    desc: "We do not deal in vague offsets. Every project we launch physically converts transient organic carbon into stable biochars, locking emissions away for hundreds of years. The impact is direct and fully auditable.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M11 20.935V19a2 2 0 012-2h1.5a2.5 2.5 0 002.5-2.5V14a2 2 0 00-2-2h-1.5a2 2 0 01-2-2V7.5A2.5 2.5 0 0010.5 5h-.5a2 2 0 01-2-2V3m13 9a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Decentralized Autonomy",
    tagline: "Empowering regional leads to govern localized hubs.",
    desc: "Because we scale through modular 30 TPD to 300 TPD networks, we trust regional teams to direct feedstock procurement, local farmer cooperatives relationships, and facility maintenance directly.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Commercial Realism",
    tagline: "Believing that profitability fuels scalable climate solutions.",
    desc: "We secure off-take purchase commitments for fuel pellets and biochars prior to deploying capex. We believe the fastest route to gigaton-scale carbon removal is a highly profitable, self-funding business model.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function CareersCulture() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".culture-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="culture"
      ref={containerRef}
      className="py-32 bg-surface-container-low border-t border-outline-variant/30 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="culture-reveal text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Ecosystem Culture
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal mb-6">
            The Principles We Build By
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
            Ratnanjali Bioenergy is an engineering-first culture. We combine
            strict physical science with commercial realism to solve carbon
            circularity.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="culture-reveal grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {cultureValues.map((value) => (
            <div
              key={value.title}
              className="bg-white border border-outline-variant/35 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shadow-ambient-sm hover:shadow-ambient hover:-translate-y-1 transition-all duration-500"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-6">
                  {value.icon}
                </div>
                <h3 className="font-heading text-2xl text-primary font-normal leading-tight">
                  {value.title}
                </h3>
                <span className="block text-[11px] font-body font-semibold uppercase tracking-wider text-surface-tint mt-2 mb-4">
                  {value.tagline}
                </span>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {value.desc}
                </p>
              </div>

              <div className="border-t border-outline-variant/20 pt-6 mt-6 flex justify-between items-center text-[9px] font-body font-bold text-on-surface-variant/40 tracking-widest uppercase">
                <span>CULTURE PILLAR</span>
                <span className="text-surface-tint">
                  RATNANJALI BIOENERGY PLATFORM
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
