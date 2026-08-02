import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutFounders() {
  const containerRef = useRef(null);

  const founders = [
    {
      name: "Sanyam Shah",
      role: "CEO",
      image: "/images/founder-1.webp",
      linkedin: "https://www.linkedin.com/in/sanyam-shah-57b0891bb/",
    },
    {
      name: "Mokshit Shah",
      role: "COO",
      image: "/images/founder-2.webp",
      linkedin: "https://www.linkedin.com/in", // User didn't provide this link, but requested the section
    },
    {
      name: "Chetan Jani",
      role: "Associates",
      image: "/images/founder-3.webp",
      linkedin: "https://www.linkedin.com/in/janichetankumar/",
    },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".founder-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-surface-container-lowest border-t border-outline-variant/30 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[radial-gradient(circle_at_top_right,rgba(100,128,50,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-full bg-[radial-gradient(circle_at_bottom_left,rgba(100,128,50,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
            Leadership Team
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-primary font-normal mb-6">
            The Visionaries Behind{" "}
            <span className="italic text-surface-tint">Ratnanjali</span>
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
            Meet the driven individuals bridging the gap between innovative
            carbon engineering and scalable real-world execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="founder-card group">
              <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[4/5] bg-surface-container-low shadow-ambient-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-ambient">
                <div className="absolute inset-0 bg-surface-tint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {founder.linkedin !== "#" && (
                  <div className="absolute bottom-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-colors shadow-sm"
                      title={`Connect with ${founder.name} on LinkedIn`}
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
              <div className="text-center px-4">
                <h3 className="font-heading text-2xl text-primary font-medium mb-1">
                  {founder.name}
                </h3>
                <span className="inline-block text-xs font-body font-bold text-surface-tint uppercase tracking-widest bg-surface-tint/10 px-3 py-1 rounded-full border border-surface-tint/20">
                  {founder.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
