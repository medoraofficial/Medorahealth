import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const DEMO_URL = "https://medoratest.vercel.app";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Hospitals", href: "#for-hospitals" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-medora">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#top")}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="MEDORA Home"
          >
            <div className="w-9 h-9 bg-medora-yellow rounded-lg flex items-center justify-center flex-shrink-0">
              <MedoraLogoMark />
            </div>
            <span className="font-black text-xl tracking-tight text-medora-black">
              MEDORA
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-gray-600 hover:text-medora-black transition-colors duration-200 focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-700 hover:text-medora-black transition-colors"
            >
              Try Demo →
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Experience MEDORA
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-medora py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-medora-black hover:bg-medora-gray-soft rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-2">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
              >
                Experience MEDORA
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MedoraLogoMark() {
  return (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 9 L4 9 L6 3 L8 15 L10 6 L12 12 L14 9 L21 9"
        stroke="#0A0A0A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 13.5 C11 13.5 7.5 11 7.5 8.5 C7.5 7 8.5 6 9.7 6 C10.4 6 11 6.5 11 6.5 C11 6.5 11.6 6 12.3 6 C13.5 6 14.5 7 14.5 8.5 C14.5 11 11 13.5 11 13.5Z"
        fill="#0A0A0A"
      />
    </svg>
  );
}
