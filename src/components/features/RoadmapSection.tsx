import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Circle, CheckCircle2, Clock } from "lucide-react";

const milestones = [
  {
    phase: "CURRENT",
    title: "Early Working Prototype",
    description:
      "Digital token management, real-time queue position, estimated wait time and turn notifications — functional and demonstrable.",
    status: "current",
    items: [
      "Token assignment interface",
      "Patient queue view",
      "Real-time position updates",
      "Estimated wait time display",
      "Turn notification system",
      "Reception workflow interface",
    ],
  },
  {
    phase: "NEXT",
    title: "Production-Ready MVP",
    description:
      "A hardened, reliable system ready for structured testing — with improved performance, robustness, and hospital-grade stability.",
    status: "next",
    items: [
      "Infrastructure hardening",
      "Reliability & uptime focus",
      "Security review",
      "Hospital onboarding flow",
    ],
  },
  {
    phase: "THEN",
    title: "Initial Hospital Pilot",
    description:
      "A controlled real-world deployment with a partner hospital or clinic — to validate the product in a live OPD environment.",
    status: "planned",
    items: [
      "Partner hospital identification",
      "Controlled pilot deployment",
      "Real-world data & feedback",
      "Iteration based on learnings",
    ],
  },
  {
    phase: "FUTURE",
    title: "Multi-Touchpoint Patient Journey Platform",
    description:
      "Long-term vision: connecting diagnostics, pharmacy, billing and other touchpoints into one coordinated patient journey.",
    status: "vision",
    items: [
      "Diagnostics integration",
      "Pharmacy workflow",
      "Billing & discharge",
      "Full journey coordination",
    ],
  },
];

const statusConfig = {
  current: { dot: "bg-medora-yellow", label: "Active", labelStyle: "bg-medora-yellow text-medora-black", line: "bg-medora-yellow" },
  next: { dot: "bg-medora-black", label: "Next", labelStyle: "bg-medora-black text-white", line: "bg-gray-200" },
  planned: { dot: "bg-gray-300", label: "Planned", labelStyle: "bg-gray-200 text-gray-600", line: "bg-gray-100" },
  vision: { dot: "bg-gray-200", label: "Vision", labelStyle: "bg-gray-100 text-gray-500", line: "bg-gray-100" },
};

export default function RoadmapSection() {
  const ref = useScrollAnimation();

  return (
    <section id="roadmap" className="section-padding bg-medora-gray-soft">
      <div className="container-medora" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-600 mb-5">
            Roadmap
          </div>
          <h2 className="heading-lg mb-4 animate-on-scroll delay-100">
            Where We Are.<br />Where We're Going.
          </h2>
          <p className="body-lg animate-on-scroll delay-200">
            An honest view of MEDORA's current stage and the path ahead —
            no inflated claims, no projected timelines.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-medora-yellow via-gray-200 to-gray-100 hidden sm:block" />

          <div className="space-y-6">
            {milestones.map((milestone, i) => {
              const config = statusConfig[milestone.status as keyof typeof statusConfig];
              const isEven = i % 2 === 0;

              return (
                <div
                  key={milestone.phase}
                  className={`animate-on-scroll delay-${(i + 1) * 100} relative flex flex-col sm:flex-row gap-4 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 hidden sm:flex z-10">
                    <div className={`w-4 h-4 ${config.dot} rounded-full border-2 border-white shadow-md`} />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block flex-1" />

                  {/* Card */}
                  <div className={`flex-1 sm:max-w-[46%] ${isEven ? "sm:pr-8" : "sm:pl-8"}`}>
                    <div
                      className={`bg-white rounded-2xl p-6 border shadow-medora-card transition-all duration-300 hover:-translate-y-1 hover:shadow-medora-hover ${
                        milestone.status === "current"
                          ? "border-medora-yellow/40 bg-medora-yellow/3"
                          : milestone.status === "next"
                          ? "border-gray-200"
                          : "border-gray-100 opacity-80"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full ${config.labelStyle}`}>
                          {milestone.phase}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-medora-black mb-2">{milestone.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{milestone.description}</p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {milestone.items.map((item) => (
                          <div key={item} className="flex items-center gap-1.5">
                            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dot}`} />
                            <span className="text-xs text-gray-500">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
