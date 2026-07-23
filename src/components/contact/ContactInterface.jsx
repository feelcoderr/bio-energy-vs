import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactInterface() {
  const [intent, setIntent] = useState("investor");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-interface-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".dynamic-form-fields",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      );
    },
    { dependencies: [intent], scope: containerRef },
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="interface"
      ref={containerRef}
      className="py-24 md:py-32 bg-surface-container-lowest border-t border-outline-variant/30 relative overflow-hidden"
    >
      {/* Background ambient lighting - Premium gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface-tint/5 to-transparent pointer-events-none" />
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-surface-tint/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Text */}
        <div className="contact-interface-reveal text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-primary mb-4 tracking-tight">
            Connect With Us
          </h2>
          <p className="font-body text-base text-on-surface-variant leading-relaxed">
            Select your primary interest below and our dedicated team will route your inquiry to the right specialists.
          </p>
        </div>

        {/* Horizontal Intent Switcher */}
        <div className="contact-interface-reveal flex justify-center mb-12 md:mb-16">
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[1.5rem] md:rounded-full p-2 flex flex-col md:flex-row justify-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full md:w-auto">
            <button
              onClick={() => {
                setIntent("investor");
                setFormSubmitted(false);
              }}
              className={`w-full md:w-auto px-6 py-3.5 rounded-2xl md:rounded-full font-body font-semibold text-[11px] md:text-xs tracking-wider uppercase transition-all duration-300 ${
                intent === "investor"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-on-surface-variant hover:text-primary hover:bg-white/50"
              }`}
            >
              Investors & Partners
            </button>
            <button
              onClick={() => {
                setIntent("supplier");
                setFormSubmitted(false);
              }}
              className={`w-full md:w-auto px-6 py-3.5 rounded-2xl md:rounded-full font-body font-semibold text-[11px] md:text-xs tracking-wider uppercase transition-all duration-300 ${
                intent === "supplier"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-on-surface-variant hover:text-primary hover:bg-white/50"
              }`}
            >
              Biomass Suppliers
            </button>
            <button
              onClick={() => {
                setIntent("buyer");
                setFormSubmitted(false);
              }}
              className={`w-full md:w-auto px-6 py-3.5 rounded-2xl md:rounded-full font-body font-semibold text-[11px] md:text-xs tracking-wider uppercase transition-all duration-300 ${
                intent === "buyer"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-on-surface-variant hover:text-primary hover:bg-white/50"
              }`}
            >
              Industrial Buyers
            </button>
          </div>
        </div>

        {/* Form and Info Layout Grid */}
        <div className="contact-interface-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Dynamic Form Column (Left - 7 cols) */}
          <div className="lg:col-span-7 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-[0_20px_40px_rgb(0,0,0,0.03)] flex flex-col justify-between hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {formSubmitted ? (
              <div className="text-center py-20 flex-grow flex flex-col justify-center items-center relative z-10">
                <div className="w-20 h-20 bg-surface-tint/10 text-surface-tint rounded-full flex items-center justify-center mb-8 shadow-inner">
                  <svg
                    className="w-10 h-10 animate-bounce"
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
                <h3 className="font-heading text-4xl text-primary font-normal mb-4">
                  Inquiry Logged
                </h3>
                <p className="font-body text-base text-on-surface-variant leading-relaxed max-w-md">
                  Your details have been securely submitted to the Ratnanjali Bioenergy team.
                  We prioritize direct routing and will contact you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-secondary text-sm py-3 px-8 mt-10 shadow-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8 flex-grow flex flex-col justify-between relative z-10"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-6 border-b border-outline-variant/15">
                    <h3 className="font-heading text-2xl md:text-3xl text-primary font-medium tracking-tight pr-4">
                      {intent === "investor" && "Investor & Developer Inquiry"}
                      {intent === "supplier" && "Feedstock Supply Profile"}
                      {intent === "buyer" && "Industrial Off-take Application"}
                    </h3>
                    <div className="self-start sm:self-auto">
                      <span className="inline-block text-[10px] font-body font-bold uppercase tracking-widest text-surface-tint bg-surface-tint/10 px-4 py-1.5 rounded-full border border-surface-tint/20">
                        Direct Routing
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="block text-[11px] font-body font-bold text-primary/80 uppercase tracking-widest ml-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        placeholder="Your Name"
                        className="w-full bg-white/50 backdrop-blur-sm border border-outline-variant/30 rounded-2xl px-5 py-4 text-sm font-body text-primary placeholder-on-surface-variant/40 focus:outline-none focus:border-surface-tint/50 focus:bg-white focus:ring-4 focus:ring-surface-tint/10 transition-all duration-300 shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="block text-[11px] font-body font-bold text-primary/80 uppercase tracking-widest ml-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        placeholder="Your Email"
                        className="w-full bg-white/50 backdrop-blur-sm border border-outline-variant/30 rounded-2xl px-5 py-4 text-sm font-body text-primary placeholder-on-surface-variant/40 focus:outline-none focus:border-surface-tint/50 focus:bg-white focus:ring-4 focus:ring-surface-tint/10 transition-all duration-300 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Intent-Adaptive Fields */}
                  <div className="dynamic-form-fields space-y-6">
                    {intent === "investor" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="investor-org"
                            className="block text-[11px] font-body font-bold text-primary/80 uppercase tracking-widest ml-1"
                          >
                            Organization / Firm
                          </label>
                          <input
                            type="text"
                            id="investor-org"
                            required
                            placeholder="Your Organization"
                            className="w-full bg-white/50 backdrop-blur-sm border border-outline-variant/30 rounded-2xl px-5 py-4 text-sm font-body text-primary placeholder-on-surface-variant/40 focus:outline-none focus:border-surface-tint/50 focus:bg-white focus:ring-4 focus:ring-surface-tint/10 transition-all duration-300 shadow-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="investor-scope"
                            className="block text-[11px] font-body font-bold text-primary/80 uppercase tracking-widest ml-1"
                          >
                            Interest Area
                          </label>
                          <div className="relative">
                            <select
                              id="investor-scope"
                              className="w-full bg-white/50 backdrop-blur-sm border border-outline-variant/30 rounded-2xl px-5 py-4 text-sm font-body text-primary focus:outline-none focus:border-surface-tint/50 focus:bg-white focus:ring-4 focus:ring-surface-tint/10 transition-all duration-300 appearance-none shadow-sm cursor-pointer"
                              defaultValue=""
                            >
                              <option value="" disabled hidden>Select Interest Area</option>
                              <option value="Equity Capital Investment">Equity Capital Investment</option>
                              <option value="Blueprint Licensing & IP">Blueprint Licensing & IP</option>
                              <option value="Joint Project Development">Joint Project Development</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-on-surface-variant/50">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {intent === "supplier" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="supplier-residue"
                            className="block text-[11px] font-body font-bold text-primary/80 uppercase tracking-widest ml-1"
                          >
                            Primary Residue Type
                          </label>
                          <div className="relative">
                            <select
                              id="supplier-residue"
                              className="w-full bg-white/50 backdrop-blur-sm border border-outline-variant/30 rounded-2xl px-5 py-4 text-sm font-body text-primary focus:outline-none focus:border-surface-tint/50 focus:bg-white focus:ring-4 focus:ring-surface-tint/10 transition-all duration-300 appearance-none shadow-sm cursor-pointer"
                              defaultValue=""
                            >
                              <option value="" disabled hidden>Select Residue Type</option>
                              <option value="Rice Husk / Straw">Rice Husk / Straw</option>
                              <option value="Sugarcane Bagasse">Sugarcane Bagasse</option>
                              <option value="Forestry Offcuts / Sawdust">Forestry Offcuts / Sawdust</option>
                              <option value="Wheat Straw / Stalks">Wheat Straw / Stalks</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-on-surface-variant/50">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="supplier-volume"
                            className="block text-[11px] font-body font-bold text-primary/80 uppercase tracking-widest ml-1"
                          >
                            Estimated Annual Volume
                          </label>
                          <input
                            type="text"
                            id="supplier-volume"
                            required
                            placeholder="e.g., 500 Tons"
                            className="w-full bg-white/50 backdrop-blur-sm border border-outline-variant/30 rounded-2xl px-5 py-4 text-sm font-body text-primary placeholder-on-surface-variant/40 focus:outline-none focus:border-surface-tint/50 focus:bg-white focus:ring-4 focus:ring-surface-tint/10 transition-all duration-300 shadow-sm"
                          />
                        </div>
                      </div>
                    )}

                    {intent === "buyer" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="buyer-product"
                            className="block text-[11px] font-body font-bold text-primary/80 uppercase tracking-widest ml-1"
                          >
                            Target Product
                          </label>
                          <div className="relative">
                            <select
                              id="buyer-product"
                              className="w-full bg-white/50 backdrop-blur-sm border border-outline-variant/30 rounded-2xl px-5 py-4 text-sm font-body text-primary focus:outline-none focus:border-surface-tint/50 focus:bg-white focus:ring-4 focus:ring-surface-tint/10 transition-all duration-300 appearance-none shadow-sm cursor-pointer"
                              defaultValue=""
                            >
                              <option value="" disabled hidden>Select Target Product</option>
                              <option value="Biomass Fuel Pellets">Biomass Fuel Pellets</option>
                              <option value="Agricultural Biochar">Agricultural Biochar</option>
                              <option value="Activated Carbon Media">Activated Carbon Media</option>
                              <option value="Pyrolysis Bio-oil">Pyrolysis Bio-oil</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-on-surface-variant/50">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="buyer-volume"
                            className="block text-[11px] font-body font-bold text-primary/80 uppercase tracking-widest ml-1"
                          >
                            Target Annual Volume
                          </label>
                          <input
                            type="text"
                            id="buyer-volume"
                            required
                            placeholder="e.g., 1000 Tons"
                            className="w-full bg-white/50 backdrop-blur-sm border border-outline-variant/30 rounded-2xl px-5 py-4 text-sm font-body text-primary placeholder-on-surface-variant/40 focus:outline-none focus:border-surface-tint/50 focus:bg-white focus:ring-4 focus:ring-surface-tint/10 transition-all duration-300 shadow-sm"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-msg"
                        className="block text-[11px] font-body font-bold text-primary/80 uppercase tracking-widest ml-1"
                      >
                        Message / Briefing Scope
                      </label>
                      <textarea
                        id="contact-msg"
                        rows={4}
                        required
                        placeholder="Your Message..."
                        className="w-full bg-white/50 backdrop-blur-sm border border-outline-variant/30 rounded-2xl px-5 py-4 text-sm font-body text-primary placeholder-on-surface-variant/40 focus:outline-none focus:border-surface-tint/50 focus:bg-white focus:ring-4 focus:ring-surface-tint/10 transition-all duration-300 resize-none shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-surface-tint text-white font-body font-semibold text-sm uppercase tracking-widest py-4.5 rounded-2xl transition-all duration-300 shadow-[0_8px_20px_rgba(20,40,20,0.15)] hover:shadow-[0_12px_25px_rgba(100,128,50,0.25)] hover:-translate-y-1 mt-8"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Info Column (Right - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 lg:gap-8">
            {/* Headquarters details card */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-[0_20px_40px_rgb(0,0,0,0.03)] relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 flex-grow">
              <div className="absolute top-0 right-0 w-48 h-48 bg-surface-tint/5 rounded-full blur-[60px] pointer-events-none transition-transform duration-700 group-hover:scale-150" />

              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-body font-bold text-surface-tint uppercase tracking-widest">
                  Corporate Office
                </span>
                <span className="flex items-center gap-2 text-[10px] font-body font-semibold text-surface-tint bg-surface-tint/10 px-4 py-1.5 rounded-full border border-surface-tint/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-surface-tint animate-pulse" />
                  India Hub
                </span>
              </div>

              <h4 className="font-heading text-3xl text-primary font-medium mb-6">
                Ratnanjali Bioenergy
              </h4>

              <div className="space-y-6 text-sm font-body text-on-surface-variant leading-relaxed">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-surface-tint"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="mt-1">
                    201&amp;202 Ratnanjali Square,<br />
                    Near Gloriya Restaurant,<br />
                    Bodakdev, Ahmedabad,<br />
                    Gujarat – 380054, India
                  </span>
                </div>

                <div className="border-t border-outline-variant/15 pt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-surface-tint"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-primary/60 mb-0.5">
                        General Inquiry
                      </span>
                      <a
                        href="mailto:info@ratnanjalibioenergy.com"
                        className="text-primary hover:text-surface-tint font-medium transition-colors"
                      >
                        info@ratnanjalibioenergy.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-surface-tint"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-primary/60 mb-0.5">
                        Logistics & Supply
                      </span>
                      <a
                        href="mailto:logistics@ratnanjalibioenergy.com"
                        className="text-primary hover:text-surface-tint font-medium transition-colors"
                      >
                        logistics@ratnanjalibioenergy.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone & Instant Connect Card */}
            <div className="bg-gradient-to-br from-primary to-surface-tint text-white rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-[0_20px_40px_rgba(100,128,50,0.2)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/images/biochar-bg.png')] opacity-10 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10">
                <span className="text-[10px] font-body font-bold uppercase tracking-widest text-white/70 block mb-3">
                  Direct Line & WhatsApp
                </span>
                <h4 className="font-heading text-2xl text-white font-medium mb-4">
                  Need Immediate Assistance?
                </h4>
                <p className="font-body text-sm text-white/80 leading-relaxed mb-8 max-w-sm">
                  Speak directly with our team or start a chat on WhatsApp for
                  quick queries regarding biomass supply and products.
                </p>

                <div className="flex flex-col xl:flex-row gap-4">
                  <a
                    href="tel:+919081993737"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 bg-white text-primary font-body text-sm font-semibold px-6 py-4 rounded-2xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:-translate-y-1"
                  >
                    <svg
                      className="w-5 h-5 text-surface-tint"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/919081993737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-body text-sm font-semibold px-6 py-4 rounded-2xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:-translate-y-1"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16.004 3.2C9.158 3.2 3.6 8.758 3.6 15.604c0 2.186.574 4.324 1.666 6.204L3.2 28.8l7.18-2.014a12.342 12.342 0 005.624 1.35c6.846 0 12.396-5.558 12.396-12.404S22.85 3.2 16.004 3.2zm0 22.608a10.17 10.17 0 01-5.184-1.414l-.372-.22-3.858 1.082 1.024-3.752-.244-.386a10.12 10.12 0 01-1.57-5.514c0-5.622 4.576-10.198 10.204-10.198 5.626 0 10.196 4.576 10.196 10.198 0 5.624-4.57 10.204-10.196 10.204zm5.594-7.638c-.306-.154-1.814-.896-2.096-.998-.28-.1-.486-.154-.69.154-.204.306-.792.998-.972 1.204-.178.204-.358.23-.664.076-.306-.154-1.294-.476-2.464-1.52-.91-.812-1.526-1.814-1.706-2.12-.178-.306-.02-.472.134-.624.138-.138.306-.358.46-.538.154-.178.204-.306.306-.51.102-.204.052-.382-.026-.536-.076-.154-.69-1.662-.944-2.274-.25-.598-.502-.518-.69-.526-.178-.01-.382-.012-.586-.012-.204 0-.536.076-.816.382-.282.306-1.074 1.05-1.074 2.56s1.1 2.968 1.252 3.172c.154.204 2.162 3.3 5.24 4.628.732.316 1.304.504 1.75.646.736.234 1.406.2 1.934.122.59-.088 1.814-.742 2.07-1.458.256-.716.256-1.33.178-1.458-.076-.128-.28-.204-.586-.358z" />
                    </svg>
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
