import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin, Mail } from "lucide-react";

export default function AboutSection() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-medora" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 bg-medora-yellow/15 border border-medora-yellow/30 rounded-full px-4 py-1.5 text-sm font-semibold text-medora-black mb-5">
              About MEDORA
            </div>
            <h2 className="heading-lg mb-6 animate-on-scroll delay-100">
              Built to Make the Hospital Journey More Human.
            </h2>
            <div className="space-y-4 animate-on-scroll delay-200">
              <p className="body-md">
                MEDORA was created to address a problem experienced by millions of patients in India
                every day — the uncertainty, inefficiency and anxiety of navigating a busy hospital.
              </p>
              <p className="body-md">
                The fragmented nature of hospital workflows means that patients often have no visibility
                into their own journey. Each step — registration, consultation, diagnostics, pharmacy —
                operates in isolation, with the patient left to figure out what comes next.
              </p>
              <p className="body-md">
                MEDORA is starting with one focused problem: the OPD queue experience. The goal is to
                make that experience transparent, coordinated and less stressful — for both patients
                and the hospitals that serve them.
              </p>
            </div>
          </div>

          {/* Right — Founder card */}
          <div className="animate-on-scroll-right">
            <div className="bg-medora-black rounded-3xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-medora-yellow rounded-2xl flex items-center justify-center flex-shrink-0 shadow-medora-yellow">
                  <span className="text-3xl font-black text-medora-black">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Ankit Raj</h3>
                  <p className="text-medora-yellow text-sm font-semibold">Founder & CEO, MEDORA</p>
                </div>
              </div>

              <blockquote className="text-gray-300 text-base leading-relaxed mb-6 border-l-2 border-medora-yellow pl-4">
                "The hospital journey should feel connected, not fragmented. MEDORA is our effort to
                make that a reality — starting with the most visible pain point: the waiting queue."
              </blockquote>

              <div className="space-y-3 text-sm text-gray-400 mb-6">
                <p>
                  Working to connect hospital workflows and make patient journeys more transparent,
                  starting with real-time queue visibility for Indian hospitals.
                </p>
                <p>
                  India-focused health-tech founder with a mission to improve the day-to-day
                  hospital experience for patients and healthcare teams.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 bg-medora-yellow text-medora-black font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-medora-yellow-dark transition-all"
                >
                  <Mail size={14} />
                  Get in Touch
                </a>
                <span className="text-gray-600 text-sm">Building in public · India</span>
              </div>
            </div>

            {/* Mission note */}
            <div className="mt-4 bg-medora-yellow/10 border border-medora-yellow/20 rounded-2xl p-5">
              <p className="text-sm font-semibold text-medora-black mb-1">The Mission</p>
              <p className="text-sm text-gray-600">
                To make every hospital touchpoint transparent, coordinated and human — beginning with the OPD queue, and expanding to the entire patient journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
