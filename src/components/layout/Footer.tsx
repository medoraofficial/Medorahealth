const DEMO_URL = "https://medoratest.vercel.app";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-medora-black text-white">
      <div className="container-medora py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-medora-yellow rounded-lg flex items-center justify-center">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                  <path d="M1 9 L4 9 L6 3 L8 15 L10 6 L12 12 L14 9 L21 9" stroke="#0A0A0A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 13.5 C11 13.5 7.5 11 7.5 8.5 C7.5 7 8.5 6 9.7 6 C10.4 6 11 6.5 11 6.5 C11 6.5 11.6 6 12.3 6 C13.5 6 14.5 7 14.5 8.5 C14.5 11 11 13.5 11 13.5Z" fill="#0A0A0A" />
                </svg>
              </div>
              <span className="font-black text-xl tracking-tight">MEDORA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-5">
              Digital patient journey and hospital workflow platform. Starting with real-time
              queue visibility for Indian hospitals.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-medora-yellow text-medora-black font-bold text-sm px-4 py-2 rounded-lg hover:bg-medora-yellow-dark transition-all"
              >
                Try Live Demo →
              </a>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Early prototype · India health-tech · Built by Ankit Raj
            </p>
            <div className="mt-4">
              <a
                href="mailto:medorahq@gmail.com"
                className="text-sm text-gray-400 hover:text-medora-yellow transition-colors"
              >
                medorahq@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Product Demo", href: DEMO_URL, external: true },
                { label: "How It Works", id: "#how-it-works" },
                { label: "For Patients", id: "#for-patients" },
                { label: "For Hospitals", id: "#for-hospitals" },
                { label: "Roadmap", id: "#roadmap" },
                { label: "Pricing", id: "#pricing" },
              ].map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-medora-yellow transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollTo(link.id!)}
                      className="text-sm text-gray-400 hover:text-medora-yellow transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", id: "#about" },
                { label: "Vision", id: "#vision" },
                { label: "Partnerships", id: "#partnerships" },
                { label: "Contact", id: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-gray-400 hover:text-medora-yellow transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <span className="text-sm text-gray-600 cursor-default">Privacy Policy</span>
              </li>
              <li>
                <span className="text-sm text-gray-600 cursor-default">Terms of Use</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} MEDORA. All rights reserved. India.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-medora-yellow rounded-full token-pulse" />
            <p className="text-xs text-gray-500">
              Early prototype stage · Not yet in production deployment
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
