import { useState, useEffect, useRef } from "react";

const benefitsData = [
  {
    title: "30 TPD Modular Start",
    description:
      "Initial facility capacity engineered for rapid deployment and proven unit economics.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-verdaez-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M3 21V7l4-4h4v6h6V7l4 4v10M9 21v-4h6v4"
        />
      </svg>
    ),
  },
  {
    title: "300 TPD Scale Target",
    description:
      "Modular scale-up to 300 TPD within five years through replication.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-verdaez-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Multi-Product Revenue",
    description:
      "Diversified revenue across fuel pellets, biochar, carbon materials, and pyrolysis derivatives.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-verdaez-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
        />
      </svg>
    ),
  },
  {
    title: "Circular Biorefinery",
    description:
      "Upcycling agricultural waste into industrial-grade products in a closed-loop system.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-verdaez-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Carbon Removal Ready",
    description:
      "Biochar and advanced carbon materials enabling measurable, verifiable climate impact.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-verdaez-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Rural Supply Network",
    description:
      "Building an inclusive procurement ecosystem that generates rural livelihoods.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-verdaez-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const delayClasses = [
  "delay-100",
  "delay-200",
  "delay-300",
  "delay-400",
  "delay-500",
  "delay-600",
];

export default function PlatformBenefits() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-background"
    >
      {/* ===== Full Background Image ===== */}
      <div className="absolute inset-0">
        <img
          src="/images/platform-bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        {/* Editorial surface overlay for text readability */}
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className={`section-heading text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          One Platform. Multiple Revenue Streams. Measurable Impact.
        </h2>

        {/* Subtext */}
        <p
          className={`section-description mx-auto text-center max-w-3xl mt-4 ${
            isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
          }`}
        >
          Engineered to reduce biomass waste, generate rural income, enable
          low-carbon materials, and unlock carbon-value opportunities.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 ">
          {benefitsData.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`bg-surface-container-lowest/80 backdrop-blur-md border-1 border-outline-variant/30 rounded-[24px] shadow-ambient-sm hover:shadow-ambient hover:-translate-y-1 transition-all duration-500 p-8 flex flex-col h-full ${
                isVisible
                  ? `animate-fade-in-up ${delayClasses[index]}`
                  : "opacity-0"
              }`}
            >
              {/* Icon Circle */}
              <div className="h-12 w-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-normal text-primary mt-6">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed flex-grow">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
