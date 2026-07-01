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
      className="relative w-full overflow-hidden"
    >
      {/* Background Image (Misty pine forest) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cta-background.png')" }}
      />

      {/* Dark Green Gradient Overlay matching screenshot styling */}
      <div className="absolute inset-0 bg-gradient-to-r from-verdaez-900/90 via-verdaez-900/80 to-verdaez-900/90" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto py-20 px-6 text-center">
        {/* Heading */}
        <h2
          className={`font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Build the Next Biomass-to-Carbon Value Chain With Us
        </h2>

        {/* Description */}
        <p
          className={`text-base md:text-lg text-white/80 mt-4 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Creating sustainable bioenergy, premium biochar, and advanced carbon materials for a circular future.
        </p>

        {/* Button */}
        <div
          className={`mt-8 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-verdaez-900 hover:bg-verdaez-950 text-white rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-white/10"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
