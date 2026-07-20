import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Replace with your actual WhatsApp number (with country code, no spaces/dashes)
  const whatsappNumber = "919876543210";
  const message = encodeURIComponent(
    "Hello! I'm interested in learning more about Ratnanjali BioEnergy's products and services."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-[9999] group"
      style={{ cursor: "pointer" }}
    >
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />

      {/* Outer glow ring */}
      <span
        className="absolute -inset-1.5 rounded-full pointer-events-none transition-all duration-500"
        style={{
          background: isHovered
            ? "radial-gradient(circle, rgba(37,211,102,0.3) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(37,211,102,0.15) 0%, transparent 70%)",
          transform: isHovered ? "scale(1.3)" : "scale(1)",
        }}
      />

      {/* Main button */}
      <div
        className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          boxShadow: isHovered
            ? "0 8px 30px rgba(37,211,102,0.5), 0 4px 12px rgba(0,0,0,0.15)"
            : "0 4px 20px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.1)",
          transform: isHovered ? "scale(1.1) translateY(-2px)" : "scale(1)",
        }}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8"
          fill="white"
        >
          <path d="M16.004 3.2C9.158 3.2 3.6 8.758 3.6 15.604c0 2.186.574 4.324 1.666 6.204L3.2 28.8l7.18-2.014a12.342 12.342 0 005.624 1.35c6.846 0 12.396-5.558 12.396-12.404S22.85 3.2 16.004 3.2zm0 22.608a10.17 10.17 0 01-5.184-1.414l-.372-.22-3.858 1.082 1.024-3.752-.244-.386a10.12 10.12 0 01-1.57-5.514c0-5.622 4.576-10.198 10.204-10.198 5.626 0 10.196 4.576 10.196 10.198 0 5.624-4.57 10.204-10.196 10.204zm5.594-7.638c-.306-.154-1.814-.896-2.096-.998-.28-.1-.486-.154-.69.154-.204.306-.792.998-.972 1.204-.178.204-.358.23-.664.076-.306-.154-1.294-.476-2.464-1.52-.91-.812-1.526-1.814-1.706-2.12-.178-.306-.02-.472.134-.624.138-.138.306-.358.46-.538.154-.178.204-.306.306-.51.102-.204.052-.382-.026-.536-.076-.154-.69-1.662-.944-2.274-.25-.598-.502-.518-.69-.526-.178-.01-.382-.012-.586-.012-.204 0-.536.076-.816.382-.282.306-1.074 1.05-1.074 2.56s1.1 2.968 1.252 3.172c.154.204 2.162 3.3 5.24 4.628.732.316 1.304.504 1.75.646.736.234 1.406.2 1.934.122.59-.088 1.814-.742 2.07-1.458.256-.716.256-1.33.178-1.458-.076-.128-.28-.204-.586-.358z" />
        </svg>
      </div>

      {/* Tooltip */}
      <span
        className="absolute right-[72px] top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-primary font-body text-xs font-semibold px-4 py-2 rounded-full shadow-ambient pointer-events-none transition-all duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered
            ? "translateX(0) translateY(-50%)"
            : "translateX(8px) translateY(-50%)",
        }}
      >
        Chat with us
      </span>
    </a>
  );
}
