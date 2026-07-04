import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CareersCTA() {
  const containerRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useGSAP(() => {
    gsap.fromTo(".cta-reveal",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="careers-cta" ref={containerRef} className="py-32 bg-white relative overflow-hidden border-t border-outline-variant/30">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-[radial-gradient(circle_at_bottom,rgba(76,108,84,0.025)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Message Left */}
          <div className="lg:col-span-6">
            <span className="cta-reveal text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-surface-tint mb-4 inline-block px-4 py-1.5 border border-outline-variant/60 rounded-full bg-white shadow-ambient-sm">
              Talent Pool
            </span>
            <h2 className="cta-reveal font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-normal leading-[1.1] mb-6">
              Didn't Find a Specific <br/>
              <span className="italic text-surface-tint">Open Role?</span>
            </h2>
            <p className="cta-reveal font-body text-base md:text-lg text-on-surface-variant leading-relaxed max-w-lg mb-8">
              We are constantly looking for researchers, logistics architects, process control engineers, and regional operational managers. Submit a speculative application to enter our active talent pool.
            </p>
            <div className="cta-reveal flex items-center gap-4 text-xs font-body text-on-surface-variant">
              <svg className="w-5 h-5 text-surface-tint shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Your submission is held securely under active local data protection compliance regulations.</span>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-6 bg-surface-container-low border border-outline-variant/35 rounded-[2.5rem] p-8 md:p-10 shadow-ambient-sm cta-reveal">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-surface-tint/10 text-surface-tint rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-primary font-normal mb-2">Application Logged</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  We have added your resume to our talent roster. If an engineering or operational scope aligns with your credentials, we will contact you directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading text-2xl text-primary font-normal mb-6">Speculative Talent Application</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="speculative-name" className="block text-[10px] font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      id="speculative-name" 
                      required 
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint"
                    />
                  </div>
                  <div>
                    <label htmlFor="speculative-email" className="block text-[10px] font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      id="speculative-email" 
                      required 
                      placeholder="jane@example.com"
                      className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="speculative-dept" className="block text-[10px] font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1.5">Department</label>
                    <select 
                      id="speculative-dept"
                      className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint appearance-none"
                    >
                      <option>Engineering & Science</option>
                      <option>Operations & Logistics</option>
                      <option>Corporate & Audit</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="speculative-role" className="block text-[10px] font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1.5">Target Role / Scope</label>
                    <input 
                      type="text" 
                      id="speculative-role" 
                      required 
                      placeholder="E.g., Pyrolysis Tech Specialist"
                      className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="speculative-resume" className="block text-[10px] font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1.5">Resume / LinkedIn Profile URL</label>
                  <input 
                    type="url" 
                    id="speculative-resume" 
                    required 
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint"
                  />
                </div>

                <div>
                  <label htmlFor="speculative-cover" className="block text-[10px] font-body font-bold text-on-surface-variant uppercase tracking-widest mb-1.5">Introduction / Core Achievements</label>
                  <textarea 
                    id="speculative-cover" 
                    rows={4} 
                    required 
                    placeholder="Detail your thermodynamic process experience or logistics projects scale..."
                    className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary w-full justify-center text-xs uppercase tracking-widest py-4 mt-2"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
