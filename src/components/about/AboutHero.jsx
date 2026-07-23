import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Parallax effect on the background image
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Initial fade in for text
    gsap.from(textRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.2,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[90vh] overflow-hidden bg-primary flex items-center justify-center pt-20">
      {/* Background Image */}
      <div 
        ref={imageRef}
        className="absolute inset-[-10%] w-[120%] h-[120%] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-hero-facility.jpg')" }}
      />
      
      {/* Gradient Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />

      {/* Content */}
      <div ref={textRef} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block text-olive-scale-300 font-body text-sm font-semibold uppercase tracking-[0.3em] mb-6 drop-shadow-md">
          A Bioenergy Company Designed for Circular Carbon Value
        </span>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.1] drop-shadow-lg">
          Engineering the <span className="italic text-olive-scale-200">Circular Carbon Future</span>
        </h1>
      </div>
    </section>
  );
}
