import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, TestTube2, Rocket, Globe } from "lucide-react";

const DEMO_URL = "https://medoratest.vercel.app";

export default function ProductSection() {
  const ref = useScrollAnimation();

  return (
    <section id="product" className="section-padding bg-medora-gray-soft">
      <div className="container-medora" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-600 mb-5">
            Product & Technology
          </div>
          <h2 className="heading-lg mb-4 animate-on-scroll delay-100">
            From Prototype to{" "}
            <span className="relative">
              Real-World Validation.
              <span className="absolute bottom-1 left-0 w-full h-[5px] bg-medora-yellow/60 rounded-full -z-10" />
            </span>
          </h2>
          <p className="body-lg animate-on-scroll delay-200">
            MEDORA currently has an early working prototype and is progressing toward a
            production-ready MVP and real-world hospital validation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Current status */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-medora-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-medora-yellow rounded-xl flex items-center justify-center">
                  <Code2 size={20} className="text-medora-black" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Current Stage</div>
                  <div className="text-lg font-black text-medora-black">Early Working Prototype</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { label: "Digital token assignment", done: true },
                  { label: "Real-time queue position", done: true },
                  { label: "Patients-ahead counter", done: true },
                  { label: "Estimated wait time", done: true },
                  { label: "Turn notification system", done: true },
                  { label: "Reception workflow interface", done: true },
                  { label: "Production deployment", done: false },
                  { label: "Hospital-scale validation", done: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.done ? "bg-green-100" : "bg-gray-100"
                    }`}>
                      {item.done ? (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      )}
                    </div>
                    <span className={`text-sm ${item.done ? "text-medora-black font-medium" : "text-gray-400"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
              >
                Try the Prototype
              </a>
            </div>
          </div>

          {/* Technology notes */}
          <div className="space-y-5 animate-on-scroll delay-200">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-medora-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TestTube2 size={18} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-medora-black mb-1">Built for Indian Hospitals</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Designed with Indian OPD realities in mind — high volume, mobile access,
                    diverse user needs, and varied infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-medora-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Rocket size={18} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-medora-black mb-1">Progressing Toward MVP</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The team is working toward a production-ready MVP suitable for
                    structured hospital validation and a controlled pilot.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-medora-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe size={18} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-medora-black mb-1">Web-First, Mobile-Friendly</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The patient experience works through a browser link or QR code — reducing
                    friction by not requiring a dedicated app download.
                  </p>
                </div>
              </div>
            </div>

            {/* Honest note */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-700">Transparency note:</strong> MEDORA is not yet in
                production deployment. No hospital partnerships or clinical validations are claimed.
                The demonstration at medoratest.vercel.app uses fictional data only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
