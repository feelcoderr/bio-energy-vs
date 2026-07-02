import { useState, useEffect, useRef } from 'react';

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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-28"
    >
      {/* Background Image (Misty pine forest) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cta-background.png')" }}
      />

      {/* Dark Green Gradient Overlay matching screenshot styling */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/95" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className={`font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-white leading-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Build the Next Biomass-to-Carbon Value Chain With Us
        </h2>

        {/* Description */}
        <p
          className={`text-body-lg text-white/80 mt-6 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Creating sustainable bioenergy, premium biochar, and advanced carbon materials for a circular future.
        </p>

        {/* Button */}
        <div
          className={`mt-10 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white text-primary hover:bg-surface-container-low text-sm font-semibold uppercase tracking-widest px-8 py-3.5 rounded-full shadow-ambient-sm hover:shadow-ambient hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
