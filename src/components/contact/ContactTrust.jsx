import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactTrust() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".contact-trust-reveal",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden border-t border-outline-variant/30">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="contact-trust-reveal bg-surface-container-low border border-outline-variant/35 rounded-3xl p-8 shadow-ambient-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5 text-surface-tint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-heading text-lg text-primary font-normal mb-2">Secure Dataroom Access</h4>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Investor datasets, EBITDA projections, and process patent blueprints are held under secure encryption gates. Request permission to access the corporate dataroom via the form.
            </p>
          </div>

          <div className="contact-trust-reveal bg-surface-container-low border border-outline-variant/35 rounded-3xl p-8 shadow-ambient-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5 text-surface-tint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="font-heading text-lg text-primary font-normal mb-2">Confidential Geolocations</h4>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Feedstock geotracking and coordinates submitted by agrarian suppliers are strictly protected under localized farm data policies, maintaining partner privacy.
            </p>
          </div>

          <div className="contact-trust-reveal bg-surface-container-low border border-outline-variant/35 rounded-3xl p-8 shadow-ambient-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5 text-surface-tint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-heading text-lg text-primary font-normal mb-2">Continuous Response SLA</h4>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Our support ledger coordinates inquiries directly to the relevant process directors. Sourcing, carbon audits, and IP questions receive replies within 1 business day.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
