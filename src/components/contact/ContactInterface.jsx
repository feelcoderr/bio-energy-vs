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
      className="py-20 md:py-28 bg-surface-container-low border-t border-outline-variant/30 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Horizontal Intent Switcher */}
        <div className="contact-interface-reveal flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-md border border-outline-variant/40 rounded-full p-1.5 flex flex-wrap justify-center gap-2 shadow-ambient-sm">
            <button
              onClick={() => {
                setIntent("investor");
                setFormSubmitted(false);
              }}
              className={`px-6 py-3 rounded-full font-body font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                intent === "investor"
                  ? "bg-primary text-white shadow-ambient"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Investors & Partners
            </button>
            <button
              onClick={() => {
                setIntent("supplier");
                setFormSubmitted(false);
              }}
              className={`px-6 py-3 rounded-full font-body font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                intent === "supplier"
                  ? "bg-primary text-white shadow-ambient"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Biomass Suppliers
            </button>
            <button
              onClick={() => {
                setIntent("buyer");
                setFormSubmitted(false);
              }}
              className={`px-6 py-3 rounded-full font-body font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                intent === "buyer"
                  ? "bg-primary text-white shadow-ambient"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Industrial Buyers
            </button>
          </div>
        </div>

        {/* Form and Info Layout Grid */}
        <div className="contact-interface-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Dynamic Form Column (Left - 7 cols) */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md border border-outline-variant/35 rounded-[2.5rem] p-8 md:p-10 shadow-ambient-sm flex flex-col justify-between hover:shadow-ambient transition-all duration-500">
            {formSubmitted ? (
              <div className="text-center py-20 flex-grow flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-surface-tint/10 text-surface-tint rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 animate-bounce"
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
                <h3 className="font-heading text-3xl text-primary font-normal mb-2">
                  Inquiry Logged
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-sm">
                  Your details have been submitted to Ratnanjali Bioenergy team.
                  We will contact you within 1 business day.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-secondary text-xs py-2.5 px-6 mt-8"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex-grow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading text-2xl text-primary font-normal">
                      {intent === "investor" && "Investor & Developer Inquiry"}
                      {intent === "supplier" && "Feedstock Supply Profile"}
                      {intent === "buyer" && "Industrial Off-take Application"}
                    </h3>
                    <span className="text-[10px] font-body font-bold uppercase tracking-widest text-surface-tint bg-surface-tint/10 px-3 py-1 rounded-full border border-surface-tint/20">
                      Direct Routing
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        placeholder="Your Name"
                        className="w-full bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-surface-tint focus:ring-2 focus:ring-surface-tint/10 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        placeholder="Your Email"
                        className="w-full bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-surface-tint focus:ring-2 focus:ring-surface-tint/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Intent-Adaptive Fields */}
                  <div className="dynamic-form-fields space-y-4">
                    {intent === "investor" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="investor-org"
                            className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5"
                          >
                            Organization / Firm
                          </label>
                          <input
                            type="text"
                            id="investor-org"
                            required
                            placeholder="Your Organization"
                            className="w-full bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-surface-tint focus:ring-2 focus:ring-surface-tint/10 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="investor-scope"
                            className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5"
                          >
                            Interest Area
                          </label>
                          <select
                            id="investor-scope"
                            className="w-full bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-surface-tint focus:ring-2 focus:ring-surface-tint/10 transition-all duration-300 appearance-none"
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
                          <label
                            htmlFor="supplier-residue"
                            className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5"
                          >
                            Primary Residue Type
                          </label>
                          <select
                            id="supplier-residue"
                            className="w-full bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-surface-tint focus:ring-2 focus:ring-surface-tint/10 transition-all duration-300 appearance-none"
                          >
                            <option>Rice Husk / Straw</option>
                            <option>Sugarcane Bagasse</option>
                            <option>Forestry Offcuts / Sawdust</option>
                            <option>Wheat Straw / Stalks</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="supplier-volume"
                            className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5"
                          >
                            Estimated Annual Volume
                          </label>
                          <input
                            type="text"
                            id="supplier-volume"
                            required
                            placeholder="Your Volume (e.g., 500 Tons)"
                            className="w-full bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-surface-tint focus:ring-2 focus:ring-surface-tint/10 transition-all duration-300"
                          />
                        </div>
                      </div>
                    )}

                    {intent === "buyer" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="buyer-product"
                            className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5"
                          >
                            Target Product
                          </label>
                          <select
                            id="buyer-product"
                            className="w-full bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-surface-tint focus:ring-2 focus:ring-surface-tint/10 transition-all duration-300 appearance-none"
                          >
                            <option>Biomass Fuel Pellets</option>
                            <option>Agricultural Biochar</option>
                            <option>Activated Carbon Media</option>
                            <option>Pyrolysis Bio-oil</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="buyer-volume"
                            className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5"
                          >
                            Target Annual Volume
                          </label>
                          <input
                            type="text"
                            id="buyer-volume"
                            required
                            placeholder="Your Volume (e.g., 1000 Tons)"
                            className="w-full bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-surface-tint focus:ring-2 focus:ring-surface-tint/10 transition-all duration-300"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="contact-msg"
                        className="block text-[10px] font-body font-bold text-on-surface-variant/70 uppercase tracking-widest mb-1.5"
                      >
                        Message / Briefing Scope
                      </label>
                      <textarea
                        id="contact-msg"
                        rows={4}
                        required
                        placeholder="Your Message..."
                        className="w-full bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl px-4 py-3.5 text-sm font-body focus:outline-none focus:border-surface-tint focus:ring-2 focus:ring-surface-tint/10 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-xs uppercase tracking-widest py-4 mt-6 shadow-ambient hover:shadow-ambient-lg"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Info Column (Right - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Headquarters details card */}
            <div className="bg-white/90 backdrop-blur-md border border-outline-variant/35 rounded-[2rem] p-8 shadow-ambient-sm relative overflow-hidden group hover:shadow-ambient transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-body font-bold text-surface-tint uppercase tracking-widest">
                  Corporate Office
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-body font-semibold text-surface-tint bg-surface-tint/10 px-3 py-1 rounded-full border border-surface-tint/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-surface-tint animate-pulse" />
                  India Hub
                </span>
              </div>

              <h4 className="font-heading text-xl md:text-2xl text-primary font-normal mb-4">
                Ratnanjali Bioenergy
              </h4>

              <div className="space-y-4 text-xs font-body text-on-surface-variant leading-relaxed">
                <p className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-surface-tint shrink-0 mt-0.5"
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
                  <span>
                    201&amp;202 Ratnanjali Square, Near Gloriya Restaurant,
                    <br />
                    Bodakdev, Ahmedabad, Gujarat – 380054, India
                  </span>
                </p>

                <div className="border-t border-outline-variant/20 pt-4 space-y-2">
                  <p className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-surface-tint shrink-0"
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
                    <span>
                      <strong className="text-primary font-semibold">
                        General:
                      </strong>{" "}
                      <a
                        href="mailto:info@ratnanjalibioenergy.com"
                        className="hover:text-surface-tint transition-colors"
                      >
                        info@ratnanjalibioenergy.com
                      </a>
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-surface-tint shrink-0"
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
                    <span>
                      <strong className="text-primary font-semibold">
                        Logistics & Supply:
                      </strong>{" "}
                      <a
                        href="mailto:logistics@ratnanjalibioenergy.com"
                        className="hover:text-surface-tint transition-colors"
                      >
                        logistics@ratnanjalibioenergy.com
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone & Instant Connect Card */}
            <div className="bg-gradient-to-br from-primary to-surface-tint text-white rounded-[2rem] p-8 shadow-ambient relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-[9px] font-body font-bold uppercase tracking-widest text-olive-scale-300 block mb-2">
                  Direct Line & WhatsApp
                </span>
                <h4 className="font-heading text-xl text-white font-normal mb-3">
                  Need Immediate Assistance?
                </h4>
                <p className="font-body text-xs text-white/80 leading-relaxed mb-6">
                  Speak directly with our team or start a chat on WhatsApp for
                  quick queries regarding biomass supply and products.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+917227021777"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary font-body text-xs font-semibold px-5 py-3 rounded-full hover:bg-white/90 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 text-surface-tint"
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
                    Call +91 72270 21777
                  </a>
                  <a
                    href="https://wa.me/917227021777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-body text-xs font-semibold px-5 py-3 rounded-full hover:brightness-110 transition-all duration-300 shadow-sm"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
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
