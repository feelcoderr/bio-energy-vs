import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutCollaboration() {
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".collab-element", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }, sectionRef);
      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-surface-container-low)" }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(100,128,50,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(198,152,85,0.3) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
        {/* Section header */}
        <div className="text-center mb-14 collab-element">
          <span
            className="inline-block text-[10px] font-body font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-5"
            style={{
              color: "var(--color-surface-tint)",
              backgroundColor: "var(--color-surface-tint, #648032)",
              background: "rgba(100,128,50,0.08)",
              border: "1px solid rgba(100,128,50,0.15)",
            }}
          >
            In Collaboration With
          </span>
          <h2 className="section-heading text-2xl md:text-3xl">
            Our Guiding Partnership
          </h2>
        </div>

        {/* Collaboration Card */}
        <div
          className="collab-element max-w-3xl mx-auto rounded-3xl overflow-hidden transition-all duration-500"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(16px)",
            border:
              "1px solid var(--color-outline-variant, rgba(200,206,192,0.4))",
            boxShadow: isHovered
              ? "0 20px 60px rgba(100,128,50,0.1), 0 8px 24px rgba(0,0,0,0.06)"
              : "0 4px 20px rgba(0,0,0,0.04)",
            transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12">
            {/* Logo */}
            <div
              className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden flex items-center justify-center p-4 transition-all duration-500"
              style={{
                backgroundColor:
                  "var(--color-surface-container-lowest, #FFFFFF)",
                border:
                  "1px solid var(--color-outline-variant, rgba(200,206,192,0.3))",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                transform: isHovered ? "scale(1.03)" : "scale(1)",
              }}
            >
              <img
                src="/images/AnandParivarLogo.png"
                alt="Anand Parivar - આનંદ પરિવાર"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="flex-grow text-center md:text-left">
              <h3
                className="font-heading text-xl md:text-2xl font-normal mb-1"
                style={{ color: "var(--color-primary)" }}
              >
                આનંદ પરિવાર
              </h3>
              <p
                className="font-body text-sm font-semibold mb-4"
                style={{ color: "var(--color-surface-tint)" }}
              >
                Anand Parivar Karyalay
              </p>

              {/* Divider */}
              <div
                className="w-12 h-[2px] rounded-full mb-5 mx-auto md:mx-0"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-surface-tint), var(--color-secondary))",
                }}
              />

              <p
                className="font-body text-sm leading-relaxed mb-1"
                style={{ color: "var(--color-on-surface)" }}
              >
                પૂજ્ય ગણિ શ્રી કલ્પરક્ષિત વિજયજી મહારાજ સાહેબ
              </p>
              <p
                className="font-body text-xs leading-relaxed"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                ડો. પોપટલાલના દવાખાનાની પાછળની ગલીમાં,
                <br />
                ભીલડી, તા.ડીસા, જિ.બનાસકાંઠા – 385530
              </p>

              {/* Contact */}
              <a
                href="tel:+917227021777"
                className="inline-flex items-center gap-2 mt-5 px-5 py-2 rounded-full font-body text-xs font-semibold tracking-wide transition-all duration-300"
                style={{
                  color: "var(--color-surface-tint)",
                  backgroundColor: "rgba(100,128,50,0.08)",
                  border: "1px solid rgba(100,128,50,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-surface-tint)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(100,128,50,0.08)";
                  e.currentTarget.style.color = "var(--color-surface-tint)";
                }}
              >
                {/* Phone icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                મો. 7227021777
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
