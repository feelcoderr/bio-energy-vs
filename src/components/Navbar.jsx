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
  const [mobileAccordions, setMobileAccordions] = useState({
    Platform: false,
    "Impact & Markets": false,
    Company: false,
  });

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

  const toggleMobileAccordion = (label) => {
    setMobileAccordions((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      {/* ── Island Floating Navbar ───────────────────────── */}
      <header
        ref={headerRef}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl h-16 rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-surface-container/80 backdrop-blur-md border-outline-variant/30 shadow-ambient"
            : "bg-surface/70 backdrop-blur-sm border-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="flex h-full w-full items-center justify-between px-6 sm:px-8"
        >
          {/* ── Logo ──────────────────────────────────── */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="Verdaez home"
          >
            <div className="relative flex items-center justify-center w-11 h-11 transition-transform duration-300 group-hover:scale-105">
              <img src="/images/verdaez-logo.png" alt="Verdaez Icon" />
            </div>
            <img
              src="/images/verdaez-logo-text.png"
              alt="Verdaez"
              className="h-11 w-auto hidden sm:block"
            />
          </Link>

          {/* ── Desktop links (Editorial layout) ── */}
          <ul className="hidden xl:flex items-center gap-1 h-full" role="list">
            {navStructure.map((item, idx) => {
              const hasDropdown = !!item.dropdown;
              const isOpen = activeDropdown === idx;

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
                        className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-on-surface hover:text-primary transition-all duration-300 rounded-full hover:bg-on-surface/5 ${
                          isOpen ? "bg-on-surface/5 text-primary" : ""
                        }`}
                        aria-expanded={isOpen}
                      >
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
                        className={`absolute top-[56px] left-1/2 -translate-x-1/2 w-80 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl shadow-ambient p-3 transition-all duration-300 origin-top ${
                          isOpen
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                      >
                        <ul className="space-y-0.5">
                          {item.dropdown.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                to={subItem.href}
                                className="group/link flex flex-col p-4 rounded-xl hover:bg-surface-tint/5 transition-colors duration-300"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="font-heading text-primary group-hover/link:text-surface-tint transition-colors">
                                  {subItem.label}
                                </span>
                                <p className="text-xs text-on-surface-variant mt-0.5 leading-snug">
                                  {subItem.desc}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-on-surface hover:text-primary transition-all duration-300 rounded-full hover:bg-on-surface/5"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA / Mobile hamburger ── */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-2 bg-primary-container text-white px-7 py-3 rounded-full font-body font-semibold text-sm hover:bg-primary transition-all duration-300 shadow-ambient-sm hover:shadow-ambient hover:-translate-y-0.5"
            >
              Contact Us
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="xl:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-on-surface hover:bg-on-surface/5 transition-colors focus-visible:outline-2"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">
                {mobileOpen ? "Close" : "Open"} main menu
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

      {/* ── Mobile Overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-inverse-surface/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeMobile}
      />

      {/* ── Mobile slide-in drawer ── */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-40 flex h-full w-[300px] max-w-[85vw] flex-col bg-surface border-l border-outline-variant/35 shadow-ambient-lg transition-transform duration-300 ease-in-out xl:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-20 shrink-0 border-b border-outline-variant/30 flex items-center px-6">
          <span className="font-heading text-lg font-bold text-primary">
            Menu
          </span>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto px-4 py-6"
        >
          <ul className="flex flex-col gap-2" role="list">
            {navStructure.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isAccordionOpen = mobileAccordions[item.label];

              return (
                <li key={item.label}>
                  {hasDropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleMobileAccordion(item.label)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[14px] font-semibold uppercase tracking-widest text-on-surface hover:bg-surface-container-low"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${isAccordionOpen ? "rotate-180 text-primary" : "text-on-surface-variant"}`}
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

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isAccordionOpen
                            ? "max-h-80 opacity-100 mt-1 pl-4"
                            : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        <ul className="space-y-1 border-l border-outline-variant/40 pl-3">
                          {item.dropdown.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                to={subItem.href}
                                onClick={() => setMobileOpen(false)}
                                className="block font-heading text-lg text-on-surface-variant hover:text-primary transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex justify-between items-center w-full py-5 border-b border-outline-variant/20"
                    >
                      <span className="font-heading text-2xl text-primary">
                        {item.label}
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 px-4">
            <Link
              to="/contact"
              onClick={closeMobile}
              className="btn-primary w-full justify-center text-center text-xs uppercase tracking-widest py-3"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        <div className="border-t border-outline-variant/30 px-8 py-5 bg-surface-container-low">
          <p className="text-xs text-on-surface-variant text-center select-none font-body">
            © {new Date().getFullYear()} Ratnanjali Bioenergy
          </p>
        </div>
      </aside>
    </>
  );
}
