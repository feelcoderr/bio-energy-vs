import { useEffect, useRef, useState } from 'react';

const tiersData = [
  {
    title: 'Tier 1: Commodity Entry',
    subtitle: 'Low Risk, High Volume Cash Flow',
    meta: {
      margins: '15% – 25%',
      capex: 'Low / Standard',
      timeline: 'Months 1 – 12',
    },
    accentColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    dotColor: 'bg-amber-500',
    glowClass: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:border-amber-500/40',
    items: [
      {
        step: 1,
        title: 'Fuel Pellets',
        description: 'High-demand industrial heating fuel providing immediate baseload revenues.',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          </svg>
        ),
      },
      {
        step: 2,
        title: 'Industrial Biochar',
        description: 'Direct commodity sale for agricultural soil conditioning and carbon sequestration.',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        ),
      },
      {
        step: 3,
        title: 'Biochar Fertilizer',
        description: 'Co-formulated biochar pelletized with organic nutrients for enhanced soil biology.',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Tier 2: Industrial Intermediate',
    subtitle: 'Increasing Value, Diversified Markets',
    meta: {
      margins: '30% – 45%',
      capex: 'Medium / Modular',
      timeline: 'Months 12 – 36',
    },
    accentColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    dotColor: 'bg-emerald-500',
    glowClass: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/40',
    items: [
      {
        step: 4,
        title: 'Water Filtration Media',
        description: 'Engineered biochar optimized for heavy metals and organic contaminant removal.',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        ),
      },
      {
        step: 5,
        title: 'Pyrolysis Oil Fractions',
        description: 'Condensed vapor chemicals serving as drop-in renewable fuels and industrial feedstocks.',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        ),
      },
      {
        step: 6,
        title: 'Asphalt Modifier',
        description: 'Specialty bio-oil fraction added to road-grade asphalt to increase wear resistance.',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894l5-2.5a1 1 0 01.894 0l5 2.5a1 1 0 01.553.894v10.764a1 1 0 01-.553.894L9 20zM14 10h6m-6 4h6" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Tier 3: Advanced Carbon Tech',
    subtitle: 'High Margin, Deep Technology Moats',
    meta: {
      margins: '50% – 70%+',
      capex: 'Specialized Refinement',
      timeline: 'Months 36 – 60',
    },
    accentColor: 'border-gold-500/30 text-gold-300 bg-gold-400/10',
    dotColor: 'bg-gold-400',
    glowClass: 'hover:shadow-[0_0_40px_rgba(212,181,98,0.25)] hover:border-gold-400/50',
    items: [
      {
        step: 7,
        title: 'Phenolic Resin Replacement',
        description: 'Purified bio-fractions replacing toxic petroleum-derived phenol in adhesives.',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        ),
      },
      {
        step: 8,
        title: 'Renewable Fuel Partnerships',
        description: 'Co-processing alliances utilizing pyrolysis oil for low-carbon aviation fuels.',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        ),
      },
      {
        step: 9,
        title: 'Graphene & Advanced Carbon',
        description: 'High-purity carbon matrices converted into valuable graphene structures.',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        ),
        premium: true,
      },
    ],
  },
];

export default function ValueChain() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-verdaez-900 text-white"
    >
      {/* ===== Full Background Image ===== */}
      <div className="absolute inset-0">
        <img
          src="/images/value-chain-bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-15"
        />
        {/* Soft designer gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-verdaez-900 via-verdaez-900/90 to-verdaez-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Creative Header ─── */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-verdaez-800/80 border border-verdaez-700/50 backdrop-blur-sm mb-6 animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-gold-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-gold-300">
              Cascading Value Capture Model
            </span>
          </div>

          <h2
            className={`
              section-heading text-left text-white text-4xl md:text-5xl leading-tight font-bold
              opacity-0 transition-all duration-700
              ${isVisible ? 'opacity-100 animate-fade-in-up' : ''}
            `}
          >
            Escalating Biomass Value Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-verdaez-200">
              Advanced Carbon Materials
            </span>
          </h2>

          <p
            className={`
              mt-6 text-gray-300 text-base md:text-lg leading-relaxed
              opacity-0 transition-all duration-700
              ${isVisible ? 'opacity-100 animate-fade-in-up delay-200' : ''}
            `}
          >
            Ratnanjali Bioenergy bypasses commodity market price sensitivity. By structuring operations 
            into three cascading technology tiers, we capture immediate revenue streams 
            to fund proprietary high-margin, carbon-negative product refinement.
          </p>
        </div>

        {/* ─── Dynamic 3-Pillar UI ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          
          {/* Connecting Flow Lines (Background) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-gold-500/30 hidden lg:block -translate-y-1/2 -z-10" />

          {tiersData.map((tier, tierIdx) => {
            return (
              <div
                key={tierIdx}
                className={`
                  flex flex-col rounded-3xl p-6 lg:p-8 border border-white/5 bg-verdaez-900/50 backdrop-blur-xl relative group transition-all duration-500
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${tierIdx * 200}ms` }}
              >
                {/* Pillar Top Header */}
                <div className="mb-8 pb-6 border-b border-white/10 relative">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
                  
                  <h3 className="text-xl font-bold font-heading text-white tracking-wide">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium mt-1 uppercase tracking-wider">
                    {tier.subtitle}
                  </p>

                  {/* Strategic Metadata Badges */}
                  <div className="grid grid-cols-3 gap-2 mt-5">
                    <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/5">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest block">Margin</p>
                      <p className="text-xs font-bold mt-1 text-gold-300">
                        {tier.meta.margins}
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/5">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest block">Capex</p>
                      <p className="text-xs font-bold text-white mt-1 truncate">
                        {tier.meta.capex}
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/5">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest block">Timeline</p>
                      <p className="text-xs font-bold text-gray-300 mt-1">
                        {tier.meta.timeline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vertical Process Line / Flow Nodes */}
                <div className="flex flex-col gap-6 relative pl-8">
                  {/* Visual pipeline line */}
                  <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-white/10 via-white/20 to-white/5" />

                  {tier.items.map((item) => {
                    const isPremium = item.premium;
                    const isActive = hoveredStep === item.step;

                    return (
                      <div
                        key={item.step}
                        className="relative"
                        onMouseEnter={() => setHoveredStep(item.step)}
                        onMouseLeave={() => setHoveredStep(null)}
                      >
                        {/* Interactive flow connector dot */}
                        <div
                          className={`
                            absolute -left-[25px] top-4 w-3.5 h-3.5 rounded-full border-2 border-verdaez-900 z-10 transition-all duration-300
                            ${isPremium ? 'bg-gold-400 scale-125 shadow-md shadow-gold-400/50' : tier.dotColor}
                            ${isActive ? 'scale-150 ring-4 ring-white/15' : ''}
                          `}
                        />

                        {/* Node Card */}
                        <div
                          className={`
                            p-4 rounded-2xl border transition-all duration-500 flex items-start gap-4 relative overflow-hidden group
                            ${isPremium 
                              ? 'bg-gradient-to-r from-gold-500/10 to-gold-400/5 border-gold-500/20' 
                              : isActive 
                                ? 'bg-white/10 border-white/20' 
                                : 'bg-white/[0.02] border-white/[0.04]'
                            }
                            ${tier.glowClass}
                          `}
                        >
                          {/* Inner soft backdrop glow */}
                          {isActive && (
                            <div className="absolute -inset-10 bg-gradient-to-r from-white/5 to-transparent blur-xl pointer-events-none -z-10" />
                          )}

                          {/* Node Icon Frame */}
                          <div
                            className={`
                              p-2 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300
                              ${isPremium ? 'bg-gold-500/20 text-gold-300' : tier.accentColor}
                              ${isActive ? 'scale-110' : ''}
                            `}
                          >
                            {item.icon}
                          </div>

                          {/* Node Info */}
                          <div className="flex-grow">
                            <div className="flex items-center justify-between">
                              <h4 className="font-heading font-bold text-sm md:text-base text-white font-body">
                                {item.title}
                              </h4>
                              <span className="text-[10px] font-mono text-gray-500">
                                0{item.step}
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          {/* Premium Micro Tag */}
                          {isPremium && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-bold text-gold-400 uppercase tracking-widest scale-90">
                              Premium Tier
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Decorative bottom corner glow */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br rounded-br-3xl opacity-10 pointer-events-none -z-10 ${tier.accentColor}`} />
              </div>
            );
          })}
        </div>

        {/* ─── Storytelling Legend / Bottom Insight ─── */}
        <div
          className={`
            mt-16 bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between
            opacity-0 transition-all duration-700
            ${isVisible ? 'opacity-100 animate-fade-in-up delay-700' : ''}
          `}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-gold-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-white">Investment Protection & Alpha Capture</h4>
              <p className="text-xs text-gray-400 mt-1 max-w-xl">
                Immediate cash generation at Tier 1 offsets setup risk. Successive refinement levels build strong high-tech market entry and high-margin off-take agreements.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 shrink-0 text-xs font-medium text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              Base Flow
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              Catalyst Phase
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
              High Moat
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
