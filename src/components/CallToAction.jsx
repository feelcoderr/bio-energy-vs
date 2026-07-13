import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
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
      className="relative w-full overflow-hidden py-32 bg-background flex items-center justify-center"
    >
      {/* Background Image - High-quality Biorefinery illustration */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out"
        style={{
          backgroundImage: "url('/images/cta-bg-biorefinery.jpg')",
          transform: isVisible ? "scale(1.03)" : "scale(1)",
        }}
      />

      {/* Dark overlay to ensure contrast and blend with theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/85 backdrop-blur-[1px]" />

      {/* Content Container - Premium Glassmorphism Card */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center">
        <div
          className={`bg-surface-container-lowest/85 backdrop-blur-xl border border-white/20 rounded-[32px] p-10 md:p-16 shadow-ambient-lg transition-all duration-[1000ms] ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-98"
          }`}
        >
          {/* Subtle brand tag */}
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block">
            Join the Transition
          </span>

          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-primary leading-tight">
            Build the Next Biomass to Carbon Value Chain With Us
          </h2>

          {/* Description */}
          <p className="font-body text-base md:text-lg text-on-surface-variant mt-6 max-w-2xl mx-auto leading-relaxed">
            Creating sustainable bioenergy, premium biochar, and advanced carbon
            materials for a circular, low-carbon future.
          </p>

          {/* Button */}
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-white hover:bg-primary-container font-body text-sm font-semibold uppercase tracking-widest px-10 py-4 rounded-full shadow-ambient-sm hover:shadow-ambient hover:-translate-y-0.5 transition-all duration-300 group"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.0"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
