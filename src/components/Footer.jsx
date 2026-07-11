import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#fdfcf8] text-on-surface border-t border-outline-variant/35 py-20 overflow-hidden">
      {/* ===== Floating Biocarbon Background Watermarks (Elegant Visible Contrast) ===== */}
      <div className="absolute bottom-[80px] left-[-80px] w-[300px] h-[150px] opacity-[0.8] pointer-events-none z-0 mix-blend-multiply">
        {/* <img
          src="/images/carbon-graphene-bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        /> */}
      </div>
      <div className="absolute top-[150px] right-[-60px] w-[320px] h-[220px] opacity-[0.8] pointer-events-none z-0 mix-blend-multiply">
        <img
          src="/images/biochar-bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] items-start">
          {/* Column 1: Logo & Brand Tagline */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label="Ratnanjali BioEnergy home"
            >
              <img
                src="/images/verdaez-logo.png"
                alt="Ratnanjali BioEnergy Icon"
                className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <img
                src="/images/verdaez-logo-text.png"
                alt="Ratnanjali BioEnergy"
                className="h-10 w-auto"
              />
            </Link>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed max-w-xs mt-2">
              Enabling circular energy recovery and permanent biocarbon
              sequestration grids to displace fossil coal and reverse industrial
              emissions.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-4">
            <h5 className="font-heading text-xs uppercase tracking-widest text-primary font-bold">
              Company
            </h5>
            <ul className="space-y-3" role="list">
              <li>
                <Link
                  to="/about"
                  className="text-xs font-body font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/platform"
                  className="text-xs font-body font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  The Platform
                </Link>
              </li>
              <li>
                <Link
                  to="/ecosystem"
                  className="text-xs font-body font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  The Ecosystem
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-xs font-body font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-xs font-body font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="flex flex-col gap-4">
            <h5 className="font-heading text-xs uppercase tracking-widest text-primary font-bold">
              Solutions
            </h5>
            <ul className="space-y-3" role="list">
              <li>
                <Link
                  to="/products"
                  className="text-xs font-body font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/platform#flywheel"
                  className="text-xs font-body font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Conversion Process
                </Link>
              </li>
              <li>
                <Link
                  to="/platform#markets"
                  className="text-xs font-body font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Target Markets
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Ecosystem Hubs */}
          <div className="flex flex-col gap-4">
            <h5 className="font-heading text-xs uppercase tracking-widest text-primary font-bold">
              Ecosystem
            </h5>
            <ul className="space-y-3" role="list">
              <li>
                <Link
                  to="/ecosystem?role=investor"
                  className="text-xs font-body font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Investor Hub
                </Link>
              </li>
              <li>
                <Link
                  to="/ecosystem?role=partner"
                  className="text-xs font-body font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Partner Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/ecosystem"
                  className="text-xs font-body font-medium text-on-surface-variant hover:text-primary transition-colors"
                >
                  Suppliers & Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect & Socials */}
          <div className="flex flex-col gap-4 lg:items-start">
            <h5 className="font-heading text-xs uppercase tracking-widest text-primary font-bold lg:text-right">
              Connect
            </h5>

            {/* Social Icons */}
            <div className="flex items-center gap-4 lg:justify-end mt-1">
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
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <p className="text-[10px] text-on-surface-variant/80 font-body lg:text-right mt-2">
              Headquarters: Ahmedabad, India
            </p>
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="mt-16 pt-8 border-t border-outline-variant/35 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-on-surface-variant font-body">
            © {new Date().getFullYear()} Ratnanjali Bioenergy. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-xs text-on-surface-variant font-body">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Use
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
