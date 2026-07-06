import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactInterface() {
  const [intent, setIntent] = useState("investor");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Initial entrance reveals
    gsap.fromTo(".contact-interface-reveal",
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

  // Transition form fields on intent change
  useGSAP(() => {
    gsap.fromTo(".dynamic-form-fields",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, { dependencies: [intent], scope: containerRef });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="interface" ref={containerRef} className="py-20 bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Horizontal Intent Switcher */}
        <div className="contact-interface-reveal flex justify-center mb-16">
          <div className="bg-white border border-outline-variant/50 rounded-full p-1.5 flex flex-wrap justify-center gap-2 shadow-ambient-sm">
            <button
              onClick={() => { setIntent("investor"); setFormSubmitted(false); }}
              className={`px-6 py-3 rounded-full font-body font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                intent === "investor" ? "bg-primary text-white shadow-ambient-sm" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Investors & Partners
            </button>
            <button
              onClick={() => { setIntent("supplier"); setFormSubmitted(false); }}
              className={`px-6 py-3 rounded-full font-body font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                intent === "supplier" ? "bg-primary text-white shadow-ambient-sm" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Biomass Suppliers
            </button>
            <button
              onClick={() => { setIntent("buyer"); setFormSubmitted(false); }}
              className={`px-6 py-3 rounded-full font-body font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                intent === "buyer" ? "bg-primary text-white shadow-ambient-sm" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Industrial Buyers
            </button>
          </div>
        </div>

        {/* Dashboard Layout Grid */}
        <div className="contact-interface-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Dynamic Form Column (Left) */}
          <div className="lg:col-span-7 bg-white border border-outline-variant/35 rounded-[2.5rem] p-8 md:p-10 shadow-ambient-sm flex flex-col justify-between">
            {formSubmitted ? (
              <div className="text-center py-20 flex-grow flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-surface-tint/10 text-surface-tint rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-3xl text-primary font-normal mb-2">Message Logged</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-sm">
                  Your inquiry has been successfully routed. Our functional team will reach out within our target SLA windows.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="btn-secondary text-xs py-2 px-6 mt-8"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl text-primary font-normal mb-6">
                    {intent === "investor" && "Investor & Developer Inquiry"}
                    {intent === "supplier" && "Feedstock Supply Profile"}
                    {intent === "buyer" && "Industrial Off-take Application"}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        id="contact-name" 
                        required 
                        placeholder="Jane Doe"
                        className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        id="contact-email" 
                        required 
                        placeholder="jane@company.com"
                        className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint"
                      />
                    </div>
                  </div>

                  {/* Intent-Adaptive Fields */}
                  <div className="dynamic-form-fields space-y-4">
                    {intent === "investor" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="investor-org" className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5">Organization</label>
                          <input 
                            type="text" 
                            id="investor-org" 
                            required 
                            placeholder="E.g., Spruce Equity"
                            className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint"
                          />
                        </div>
                        <div>
                          <label htmlFor="investor-scope" className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5">Interest Area</label>
                          <select 
                            id="investor-scope"
                            className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-surface-tint appearance-none"
                          >
                            <option>Equity Capital Investment</option>
                            <option>Blueprint Licensing & IP</option>
                            <option>Joint Project Development</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {intent === "supplier" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="supplier-residue" className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5">Primary Residue Type</label>
                          <select 
                            id="supplier-residue"
                            className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-surface-tint appearance-none"
                          >
                            <option>Rice Husk / Straw</option>
                            <option>Sugarcane Bagasse</option>
                            <option>Forestry Offcuts / Sawdust</option>
                            <option>Wheat Straw / Stalks</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="supplier-volume" className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5">Estimated Volume (Tons/Year)</label>
                          <input 
                            type="number" 
                            id="supplier-volume" 
                            required 
                            placeholder="E.g., 500"
                            className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint"
                          />
                        </div>
                      </div>
                    )}

                    {intent === "buyer" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="buyer-product" className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5">Target Product</label>
                          <select 
                            id="buyer-product"
                            className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-surface-tint appearance-none"
                          >
                            <option>Biomass Fuel Pellets</option>
                            <option>Agricultural Biochar</option>
                            <option>Activated Carbon Media</option>
                            <option>Pyrolysis Bio-oil</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="buyer-volume" className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5">Target Annual Volume</label>
                          <input 
                            type="text" 
                            id="buyer-volume" 
                            required 
                            placeholder="E.g., 1000 Tons"
                            className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label htmlFor="contact-msg" className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5">Briefing Scope / Message</label>
                      <textarea 
                        id="contact-msg" 
                        rows={5} 
                        required 
                        placeholder="Detail your parameters, project timelines, or requirements..."
                        className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-surface-tint resize-none"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary w-full justify-center text-xs uppercase tracking-widest py-4 mt-6"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Office Details & Beacons Column (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Headquarters details */}
            <div className="bg-white border border-outline-variant/35 rounded-[2rem] p-8 shadow-ambient-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-[9px] font-body font-bold text-surface-tint uppercase tracking-widest block mb-2">Corporate Office</span>
              <h4 className="font-heading text-2xl text-primary font-normal mb-4">Verdaez Headquarters</h4>
              
              <div className="space-y-4 text-xs font-body text-on-surface-variant leading-relaxed">
                <p>
                  12, Mahatma Gandhi Road, Halasuru,<br />
                  Bangalore, Karnataka 560008, India
                </p>
                <div className="border-t border-outline-variant/20 pt-4 space-y-2">
                  <p><strong>General Inquiries:</strong> info@verdaez.com</p>
                  <p><strong>Logistics & Supply:</strong> logistics@verdaez.com</p>
                </div>
              </div>
            </div>

            {/* Micro-Hub network status */}
            <div className="bg-white border border-outline-variant/35 rounded-[2rem] p-8 shadow-ambient-sm flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-body font-bold text-surface-tint uppercase tracking-widest block mb-4">Regional Nodes</span>
                <h4 className="font-heading text-2xl text-primary font-normal mb-6">Preprocessing Grid</h4>

                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-surface-container-low/50 rounded-xl p-3 border border-outline-variant/20">
                    <div>
                      <strong className="block text-xs text-primary font-heading font-normal">Mandya Node (Active)</strong>
                      <span className="block text-[10px] text-on-surface-variant/70 font-body">Residue: Sugarcane Bagasse & Straw</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-verdaez-400 animate-pulse" />
                      <span className="text-[9px] font-body font-bold text-verdaez-500 uppercase">ONLINE</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-surface-container-low/50 rounded-xl p-3 border border-outline-variant/20">
                    <div>
                      <strong className="block text-xs text-primary font-heading font-normal">Tumakuru Node (Active)</strong>
                      <span className="block text-[10px] text-on-surface-variant/70 font-body">Residue: Coconut Husks & Offcuts</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-verdaez-400 animate-pulse" />
                      <span className="text-[9px] font-body font-bold text-verdaez-500 uppercase">ONLINE</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-surface-container-low/50 rounded-xl p-3 border border-outline-variant/20">
                    <div>
                      <strong className="block text-xs text-primary font-heading font-normal">Davanagere Node (Planned)</strong>
                      <span className="block text-[10px] text-on-surface-variant/70 font-body">Residue: Rice Husks & Maize Straw</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="text-[9px] font-body font-bold text-amber-600 uppercase font-semibold">STAGED</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-outline-variant/20 pt-5 mt-6 flex justify-between items-center text-[10px] font-body text-on-surface-variant/60 font-semibold tracking-wider uppercase">
                <span>Target Response Time</span>
                <span className="text-surface-tint font-bold">&lt; 12 Hours</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
