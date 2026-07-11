import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PlatformCTA() {
  const containerRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cta-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-[radial-gradient(circle_at_bottom,rgba(100,128,50,0.025)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Slogan & Options Column */}
          <div className="lg:col-span-6">
            <span className="cta-reveal text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
              Joint Execution
            </span>
            <h2 className="cta-reveal font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal leading-[1.1] mb-6">
              Build the Circular Carbon <span className="italic text-surface-tint">
                Economy Together.
              </span>
            </h2>
            <p className="cta-reveal font-body text-base md:text-lg text-on-surface-variant leading-relaxed max-w-lg mb-8">
              Partner with Ratnanjali Bioenergy to secure clean biocarbon supply
              contracts, establish local preprocessing facilities, or license
              modular blueprints.
            </p>

            <div className="cta-reveal flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn-primary justify-center">
                <span>Download Platform Overview</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
              <a
                href="mailto:info@ratnanjalibioenergy.com"
                className="btn-secondary justify-center"
              >
                Talk to our Team
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-6 bg-surface-container-low border border-outline-variant/35 rounded-[2.5rem] p-8 md:p-10 shadow-ambient-sm cta-reveal">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-surface-tint/10 text-surface-tint rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-primary font-normal mb-2">
                  Thank You
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  We have received your briefing request. An engineering
                  strategist from our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading text-2xl text-primary font-normal mb-6">
                  Request Commercial Briefing
                </h3>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="E.g., Jane Doe"
                    className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10px] font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="E.g., jane@company.com"
                      className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="org"
                      className="block text-[10px] font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1.5"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="org"
                      required
                      placeholder="E.g., Carbon Utilities Ltd"
                      className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1.5"
                  >
                    Project Scope / Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Detail your supply volumes or integration requirements..."
                    className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-xs uppercase tracking-widest py-4 mt-2"
                >
                  Submit Briefing Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
