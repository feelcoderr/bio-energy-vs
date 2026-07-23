import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const navStructure = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    desc: "Our vision for a circular bioenergy future",
  },
  {
    label: "Company",
    dropdown: [
      {
        label: "Platform",
        href: "/platform",
        desc: "Our business model, scaling capacity & TAM",
      },
      {
        label: "Ecosystem",
        href: "/ecosystem",
        desc: "Feedstock suppliers, off-takers & investors",
      },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [companyAccordionOpen, setCompanyAccordionOpen] = useState(false);

  const location = useLocation();
  const headerRef = useRef(null);

  /* ── Scroll listener ─────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when mobile drawer is open ────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ── Close dropdowns & drawer on route change ──────── */
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  /* ── Close dropdowns on outside click ────────────────── */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* ── Island Floating Navbar (Desktop & Mobile trigger) ── */}
      <header
        ref={headerRef}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl h-16 rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-outline-variant/20 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            : "bg-white/90 backdrop-blur-sm border-outline-variant/10 shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="flex h-full w-full items-center justify-between px-5 sm:px-8"
        >
          {/* ── Brand Logo ──────────────────────────────────── */}
          <Link
            to="/"
            aria-label="Ratnanjali BioEnergy home"
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <img
              className="h-12 sm:h-14 md:h-16 w-auto max-w-[200px] sm:max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
              src="/images/logo-ratnanjali.png"
              alt="Ratnanjali BioEnergy"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </Link>

          {/* ── Desktop Nav Links (Editorial Layout) ── */}
          <ul className="hidden xl:flex items-center gap-1 h-full" role="list">
            {navStructure.map((item, idx) => {
              const hasDropdown = !!item.dropdown;
              const isOpen = activeDropdown === idx;
              const isActive =
                item.href === location.pathname ||
                (hasDropdown &&
                  item.dropdown.some((d) => d.href === location.pathname));

              return (
                <li
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(idx)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  {hasDropdown ? (
                    <>
                      <button
                        type="button"
                        className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-full ${
                          isActive
                            ? "bg-surface-tint/10 text-surface-tint font-bold"
                            : "text-on-surface hover:text-primary hover:bg-on-surface/5"
                        }`}
                        aria-expanded={isOpen}
                      >
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180 text-surface-tint" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown Panel - Editorial style */}
                      <div
                        className={`absolute top-[56px] left-1/2 -translate-x-1/2 w-80 bg-white border border-outline-variant/40 rounded-2xl shadow-ambient p-3 transition-all duration-300 origin-top ${
                          isOpen
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                      >
                        <ul className="space-y-0.5">
                          {item.dropdown.map((subItem, subIdx) => {
                            const isSubActive =
                              subItem.href === location.pathname;
                            return (
                              <li key={subIdx}>
                                <Link
                                  to={subItem.href}
                                  className={`group/link flex flex-col p-3.5 rounded-xl transition-colors duration-300 ${
                                    isSubActive
                                      ? "bg-surface-tint/10"
                                      : "hover:bg-surface-container-low"
                                  }`}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span
                                    className={`font-heading text-base ${
                                      isSubActive
                                        ? "text-surface-tint font-semibold"
                                        : "text-primary group-hover/link:text-surface-tint"
                                    }`}
                                  >
                                    {subItem.label}
                                  </span>
                                  <p className="text-xs text-on-surface-variant mt-0.5 leading-snug">
                                    {subItem.desc}
                                  </p>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-full ${
                        isActive
                          ? "bg-surface-tint/10 text-surface-tint font-bold"
                          : "text-on-surface hover:text-primary hover:bg-on-surface/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA & Mobile Hamburger Trigger ── */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-body font-semibold text-xs uppercase tracking-wider hover:bg-surface-tint transition-all duration-300 shadow-ambient-sm hover:shadow-ambient hover:-translate-y-0.5"
            >
              Contact Us
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="xl:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-primary hover:bg-surface-container-low transition-colors"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">
                {mobileOpen ? "Close menu" : "Open menu"}
              </span>
              <span className="flex flex-col items-center justify-center gap-[5px]">
                <span
                  className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 origin-center ${
                    mobileOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 origin-center ${
                    mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Backdrop Overlay ── */}
      <div
        className={`fixed inset-0 z-[100] bg-primary/40 backdrop-blur-md transition-opacity duration-300 xl:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeMobile}
      />

      {/* ── Mobile Slide-Over Drawer ── */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-[101] flex h-full w-[320px] max-w-[88vw] flex-col bg-white border-l border-outline-variant/30 shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header Bar */}
        <div className="h-20 shrink-0 border-b border-outline-variant/20 flex items-center justify-between px-6 bg-surface-container-lowest">
          <Link to="/" onClick={closeMobile} className="flex items-center gap-2.5 group">
            <img
              src="/images/logo-ratnanjali.png"
              alt="Ratnanjali BioEnergy"
              className="h-12 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </Link>
          <button
            type="button"
            onClick={closeMobile}
            className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
            aria-label="Close drawer menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Content */}
        <nav
          aria-label="Mobile menu links"
          className="flex-1 overflow-y-auto px-6 py-6"
        >
          <ul className="flex flex-col space-y-1" role="list">
            {navStructure.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isActive =
                item.href === location.pathname ||
                (hasDropdown &&
                  item.dropdown.some((d) => d.href === location.pathname));

              if (hasDropdown) {
                return (
                  <li key={item.label} className="py-2 border-b border-outline-variant/15">
                    <button
                      type="button"
                      onClick={() =>
                        setCompanyAccordionOpen((prev) => !prev)
                      }
                      className="flex w-full items-center justify-between py-2 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-heading text-2xl ${
                            isActive ? "text-surface-tint font-medium" : "text-primary"
                          }`}
                        >
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-surface-tint" />
                        )}
                      </div>
                      <svg
                        className={`w-5 h-5 text-on-surface-variant transition-transform duration-300 ${
                          companyAccordionOpen ? "rotate-180 text-surface-tint" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Accordion Sub-menu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        companyAccordionOpen
                          ? "max-h-60 opacity-100 mt-2 mb-2"
                          : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="space-y-1 pl-3 border-l-2 border-surface-tint/30">
                        {item.dropdown.map((subItem, subIdx) => {
                          const isSubActive =
                            subItem.href === location.pathname;
                          return (
                            <Link
                              key={subIdx}
                              to={subItem.href}
                              onClick={closeMobile}
                              className={`block p-2.5 rounded-xl transition-all duration-300 ${
                                isSubActive
                                  ? "bg-surface-tint/10 text-surface-tint font-bold"
                                  : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                              }`}
                            >
                              <span className="font-heading text-lg block">
                                {subItem.label}
                              </span>
                              <span className="text-xs text-on-surface-variant/70 block mt-0.5">
                                {subItem.desc}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.label} className="border-b border-outline-variant/15">
                  <Link
                    to={item.href}
                    onClick={closeMobile}
                    className="flex justify-between items-center w-full py-4"
                  >
                    <span
                      className={`font-heading text-2xl ${
                        isActive ? "text-surface-tint font-medium" : "text-primary"
                      }`}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-tint shadow-[0_0_10px_rgba(100,128,50,0.5)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact Button */}
          <div className="mt-8">
            <Link
              to="/contact"
              onClick={closeMobile}
              className="btn-primary w-full justify-center text-center text-xs uppercase tracking-widest py-3.5 shadow-ambient"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Info & Address */}
          <div className="mt-8 p-4 rounded-2xl bg-surface-container-low/70 border border-outline-variant/20 space-y-2">
            <span className="text-[10px] font-body font-bold text-surface-tint uppercase tracking-widest block">
              Headquarters
            </span>
            <p className="text-xs font-body text-on-surface-variant leading-relaxed">
              201&amp;202 Ratnanjali Square, Bodakdev, Ahmedabad, Gujarat – 380054
            </p>
            <a
              href="tel:+917227021777"
              className="inline-flex items-center gap-2 text-xs font-semibold text-surface-tint hover:underline mt-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 72270 21777
            </a>
          </div>

          {/* Bottom spacing to clear WhatsApp floating button */}
          <div className="h-28" />
        </nav>

        {/* Footer Bar inside Drawer */}
        <div className="border-t border-outline-variant/20 px-6 py-4 bg-surface-container-lowest">
          <p className="text-[11px] text-on-surface-variant/80 text-center select-none font-body">
            © {new Date().getFullYear()} Ratnanjali Bioenergy
          </p>
        </div>
      </aside>
    </>
  );
}
