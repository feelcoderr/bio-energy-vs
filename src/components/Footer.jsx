import { useState } from "react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#fdfcf8] text-on-surface border-t border-outline-variant/35 py-16 overflow-hidden">
      {/* ===== Floating Biocarbon Background Vibe Watermarks (Subtle Light Mode) ===== */}
      <div className="absolute bottom-[-60px] left-[-80px] w-[320px] h-[320px] opacity-[0.025] pointer-events-none z-0">
        <img
          src="/images/carbon-graphene.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-[20px] right-[-80px] w-[350px] h-[350px] opacity-[0.02] pointer-events-none z-0">
        <img
          src="/images/biochar.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-start">
          {/* ── Logo ── */}
          <div className="flex flex-col gap-3">
            <a
              href="#hero"
              className="flex items-center gap-3 group"
              aria-label="Verdaez home"
            >
              <img
                src="/images/verdaez-logo.png"
                alt="Verdaez Icon"
                className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <img
                src="/images/verdaez-logo-text.png"
                alt="Verdaez"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* ── Column 1 ── */}
          <div className="flex flex-col gap-3.5">
            <ul className="space-y-2.5" role="list">
              <li>
                <a
                  href="#hero"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#investors"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Investors
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* ── Column 2 ── */}
          <div className="flex flex-col gap-3.5">
            <ul className="space-y-2.5" role="list">
              <li>
                <a
                  href="#products"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#business-model"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Business Model
                </a>
              </li>
              <li>
                <a
                  href="#markets"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Markets
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* ── Column 3 ── */}
          <div className="flex flex-col gap-3.5">
            <ul className="space-y-2.5" role="list">
              <li>
                <a
                  href="#about"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Legal Policy
                </a>
              </li>
            </ul>
          </div>

          {/* ── Social Icons (Far Right) ── */}
          <div className="flex items-center gap-4 lg:justify-end">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 10a5 5 0 11-10 0 5 5 0 0110 0zm-5-3a3 3 0 100 6 3 3 0 000-6zm4.5-1.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ─── Bottom copyright ─── */}
        <div className="mt-14 pt-8 border-t border-outline-variant/35 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-on-surface-variant font-body">
            © {new Date().getFullYear()} Ratnanjali Bioenergy Technologies
          </p>
          <div className="flex gap-4 text-xs text-on-surface-variant font-body">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
