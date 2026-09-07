import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const DEMO_URL = "https://medoratest.vercel.app";

const highlights = [
  {
    icon: "🎫",
    label: "Digital Token",
    sub: "Paperless, instant",
  },
  {
    icon: "📍",
    label: "Live Queue Position",
    sub: "Always up-to-date",
  },
  {
    icon: "⏱",
    label: "Wait Estimates",
    sub: "No more guessing",
  },
  {
    icon: "🔔",
    label: "Turn Notifications",
    sub: "Arrive right on time",
  },
];

export default function IntroSection() {
  const ref = useScrollAnimation();

  return (
    <section className="relative bg-medora-black overflow-hidden py-20 md:py-28">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-medora-yellow/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-medora-yellow/4 rounded-full blur-[100px]" />
        {/* Grid dots */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#F5C000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container-medora relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">
          {/* LEFT — Logo + headline */}
          <div className="flex-1 text-center lg:text-left">
            {/* Logo mark */}
            <div className="animate-on-scroll inline-flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-medora-yellow rounded-2xl flex items-center justify-center shadow-medora-yellow flex-shrink-0">
                <MedoraLogoMark />
              </div>
              <div className="text-left">
                <div className="text-3xl font-black text-white tracking-tight leading-none">MEDORA</div>
                <div className="text-xs text-medora-yellow/80 font-semibold tracking-[0.18em] uppercase mt-0.5">
                  Patient Journey Platform
                </div>
              </div>
            </div>

            <h2 className="animate-on-scroll delay-100 text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5">
              A Smarter Way Through
              <br />
              <span className="text-medora-yellow">Every Hospital Visit.</span>
            </h2>

            <p className="animate-on-scroll delay-200 text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
              MEDORA connects the dots between patients and hospital workflows — giving everyone
              real-time visibility, less friction, and a clearer path forward.
            </p>

            <div className="animate-on-scroll delay-300 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Experience MEDORA <ArrowRight size={15} />
              </a>
              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:border-medora-yellow hover:text-medora-yellow transition-all duration-200 text-sm"
              >
                Partner With Us
              </button>
            </div>

            {/* India badge */}
            <div className="animate-on-scroll delay-400 mt-7 inline-flex items-center gap-2 text-xs text-gray-500 border border-white/10 rounded-full px-4 py-2">
              <span>🇮🇳</span>
              <span>Built for Indian hospitals · Early prototype stage</span>
              <span className="w-1.5 h-1.5 rounded-full bg-medora-yellow/60 animate-pulse" />
            </div>
          </div>

          {/* RIGHT — Highlight cards */}
          <div className="flex-1 w-full max-w-lg">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`animate-on-scroll delay-${(i + 1) * 100} group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-medora-yellow/30 rounded-2xl p-5 transition-all duration-300 cursor-default`}
                >
                  <div className="text-3xl mb-3">{h.icon}</div>
                  <div className="text-white font-bold text-sm mb-1">{h.label}</div>
                  <div className="text-gray-500 text-xs">{h.sub}</div>
                </div>
              ))}
            </div>

            {/* Journey flow visual */}
            <div className="mt-4 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                The MEDORA Flow
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {["Token Assigned", "Queue Tracked", "Wait Estimated", "Turn Notified"].map(
                  (step, i, arr) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 bg-medora-yellow rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[9px] font-black text-medora-black">{i + 1}</span>
                        </div>
                        <span className="text-xs font-medium text-white/80 whitespace-nowrap">
                          {step}
                        </span>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-4 h-px bg-medora-yellow/30 flex-shrink-0" />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MedoraLogoMark() {
  return (
    <svg width="28" height="22" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
