import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DEMO_URL = "https://medoratest.vercel.app";

export default function HeroSection() {
  const sectionRef = useScrollAnimation();
  const [tokenCount, setTokenCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setTokenCount((prev) => (prev <= 1 ? 3 : prev - 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-start overflow-hidden bg-gradient-to-br from-[#FFFDF0] via-white to-[#FAFAF8] pt-16"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-medora-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-medora-yellow/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-medora-yellow/3 rounded-full blur-3xl" />
      </div>

      <div className="container-medora relative z-10 pt-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            {/* Stage badge */}
            <div className="inline-flex items-center gap-2 bg-medora-yellow/15 border border-medora-yellow/30 text-medora-black rounded-full px-4 py-1.5 text-sm font-semibold mb-6 animate-on-scroll">
              <span className="w-2 h-2 bg-medora-yellow rounded-full token-pulse" />
              Early Prototype — India Health-Tech
            </div>

            <h1 className="heading-xl mb-6 animate-on-scroll delay-100">
              Your Hospital
              <br />
              Journey,{" "}
              <span className="relative">
                Connected.
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-medora-yellow/60 rounded-full -z-10" />
              </span>
            </h1>

            <p className="body-lg max-w-lg mb-8 animate-on-scroll delay-200">
              MEDORA helps hospitals make patient flow simpler and more
              transparent — starting with real-time queue visibility,
              waiting-time estimates and timely notifications.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 animate-on-scroll delay-300">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-7 py-3.5"
              >
                Experience MEDORA
                <ArrowRight size={18} />
              </a>
              <button
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline text-base px-7 py-3.5"
              >
                Partner With Us
              </button>
            </div>

            <div className="animate-on-scroll delay-400">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-medora-gray-text hover:text-medora-black transition-colors font-medium"
              >
                <Play size={14} className="fill-current" />
                Try the live demo →
              </a>
            </div>
          </div>

          {/* Right — Interactive Queue Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-on-scroll delay-200">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-72 sm:w-80 bg-medora-black rounded-[2.5rem] p-3 shadow-[0_32px_80px_rgba(0,0,0,0.25)]">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-medora-black h-8 flex items-center justify-between px-6">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 bg-white rounded-sm opacity-80" />
                      <div className="w-3 h-1.5 bg-white rounded-sm opacity-60" />
                      <div className="w-3 h-1.5 bg-white rounded-sm opacity-40" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="bg-medora-yellow px-5 py-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-4 h-4">
                        <svg viewBox="0 0 22 18" fill="none">
                          <path d="M1 9 L4 9 L6 3 L8 15 L10 6 L12 12 L14 9 L21 9" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-medora-black font-black text-sm">MEDORA</span>
                    </div>
                    <p className="text-medora-black/70 text-xs">City General Hospital · OPD</p>
                  </div>

                  {/* Token display */}
                  <div className="px-5 py-5 bg-gray-50">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Your Token</p>
                    <div className="bg-white rounded-2xl p-4 shadow-medora-card border border-gray-100 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-4xl font-black text-medora-black">T-047</span>
                        <div className="w-10 h-10 bg-medora-yellow rounded-full token-pulse flex items-center justify-center">
                          <span className="text-xs font-black">OPD</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">Dr. Mehra · General Medicine</div>
                    </div>

                    {/* Queue status */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white rounded-xl p-3 border border-gray-100 text-center shadow-sm">
                        <div
                          key={tokenCount}
                          className="text-2xl font-black text-medora-black leading-none mb-1 animate-[counterTick_0.3s_ease]"
                        >
                          {tokenCount}
                        </div>
                        <div className="text-[10px] font-medium text-gray-500">ahead of you</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-gray-100 text-center shadow-sm">
                        <div className="text-2xl font-black text-medora-black leading-none mb-1">
                          ~{tokenCount * 4}m
                        </div>
                        <div className="text-[10px] font-medium text-gray-500">est. wait</div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                      <div className="flex justify-between text-[10px] font-medium text-gray-500 mb-2">
                        <span>Queue Progress</span>
                        <span>T-044 now</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-medora-yellow rounded-full transition-all duration-1000"
                          style={{ width: tokenCount === 1 ? "80%" : tokenCount === 2 ? "65%" : "50%" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notification */}
                  <div className="px-4 pb-5">
                    <div className="bg-medora-yellow/10 border border-medora-yellow/30 rounded-xl p-3 flex items-start gap-2.5">
                      <div className="w-6 h-6 bg-medora-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[10px]">🔔</span>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-medora-black">
                          {tokenCount <= 1 ? "It's almost your turn!" : "Your turn is approaching"}
                        </p>
                        <p className="text-[10px] text-gray-600 mt-0.5">
                          {tokenCount <= 1
                            ? "Please return to OPD counter"
                            : `${tokenCount} patients ahead — please stay nearby`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-6 top-20 glass-card rounded-2xl px-4 py-3 shadow-medora-card border border-white/80 animate-bounce-gentle hidden sm:block">
                <div className="text-xs font-bold text-medora-black">Real-time updates</div>
                <div className="text-[11px] text-gray-500">live queue position</div>
              </div>

              <div className="absolute -right-6 bottom-24 glass-card rounded-2xl px-4 py-3 shadow-medora-card border border-white/80 animate-bounce-gentle hidden sm:block" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <div className="text-xs font-bold text-medora-black">Turn Notification</div>
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">sent automatically</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-col items-center gap-2 animate-bounce-gentle opacity-50">
            <span className="text-xs font-medium text-gray-400">Scroll to explore</span>
            <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex items-start justify-center pt-1.5">
              <div className="w-1 h-2 bg-gray-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
