import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ProductsHero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      // Elegant fade in for text
      gsap.fromTo(
        ".hero-element",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        },
      );

      // Subtle background scale
      gsap.fromTo(
        imageRef.current,
        { scale: 1.05 },
        { scale: 1, duration: 2, ease: "power2.out" },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[85vh] overflow-hidden bg-primary flex items-center justify-center pt-24"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/products-hero.jpg')" }}
      />

      {/* Immersive Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="hero-element inline-block text-verdaez-400 font-body text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-6 border border-verdaez-400/30 px-4 py-2 rounded-full bg-verdaez-400/10 backdrop-blur-md">
          Advanced Carbon Portfolio
        </span>
        <h1 className="hero-element font-heading text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.1] mb-6 drop-shadow-2xl">
          From Biomass to{" "}
          <span className="italic text-verdaez-400">High Value Carbon.</span>
        </h1>
        <p className="hero-element font-body text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
          At Ratnanjali Bioenergy, we transform sustainably sourced biomass into
          a diversified portfolio of renewable fuels, carbon-rich products, and
          advanced engineered materials.
        </p>

        <div className="hero-element flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="btn-primary w-full sm:w-auto text-center"
          >
            Explore Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-heading font-medium tracking-wide transition-all duration-300 border border-white/20 bg-white/5 text-white hover:bg-white/10 w-full sm:w-auto text-center"
          >
            Request Catalogue
          </a>
        </div>
      </div>
    </section>
  );
}
