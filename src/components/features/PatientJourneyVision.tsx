import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { UserCheck, Stethoscope, FlaskConical, Pill, MoreHorizontal } from "lucide-react";

const journeySteps = [
  {
    icon: UserCheck,
    step: "Registration",
    sub: "Patient check-in & token assignment",
    status: "current",
    label: "Current Focus",
  },
  {
    icon: Stethoscope,
    step: "OPD / Consultation",
    sub: "Queue position, wait time & notifications",
    status: "current",
    label: "Current Focus",
  },
  {
    icon: FlaskConical,
    step: "Diagnostics",
    sub: "Lab tests, imaging & results coordination",
    status: "vision",
    label: "Long-term Vision",
  },
  {
    icon: Pill,
    step: "Pharmacy",
    sub: "Prescription processing & pickup status",
    status: "vision",
    label: "Long-term Vision",
  },
  {
    icon: MoreHorizontal,
    step: "Other Touchpoints",
    sub: "Billing, discharge, follow-up & more",
    status: "vision",
    label: "Long-term Vision",
  },
];

export default function PatientJourneyVision() {
  const ref = useScrollAnimation();

  return (
    <section id="vision" className="section-padding bg-white">
      <div className="container-medora" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-1.5 text-sm font-semibold text-purple-700 mb-5">
            Long-term Vision
          </div>
          <h2 className="heading-lg mb-4 animate-on-scroll delay-100">
            From One Queue to the{" "}
            <span className="relative">
              Entire Patient Journey.
              <span className="absolute bottom-1 left-0 w-full h-[5px] bg-medora-yellow/60 rounded-full -z-10" />
            </span>
          </h2>
          <p className="body-lg animate-on-scroll delay-200">
            MEDORA's immediate focus is the OPD queue experience. Over time, the vision is to connect
            every major hospital touchpoint into one coordinated, transparent patient journey.
          </p>
        </div>

        {/* Journey — horizontal on desktop, vertical on mobile */}
        <div className="animate-on-scroll">
          <div className="overflow-x-auto pb-4">
            <div className="flex flex-col md:flex-row items-start md:items-stretch gap-0 min-w-max md:min-w-0">
              {journeySteps.map((step, i) => (
                <div key={step.step} className="flex flex-col md:flex-row items-start md:items-stretch flex-1">
                  {/* Step card */}
                  <div
                    className={`relative rounded-2xl p-5 border-2 flex-1 min-w-[180px] md:min-w-0 transition-all duration-300 hover:-translate-y-1 ${
                      step.status === "current"
                        ? "bg-medora-yellow/8 border-medora-yellow/40"
                        : "bg-gray-50 border-gray-100 opacity-75 hover:opacity-90"
                    }`}
                  >
                    {/* Status badge */}
                    <div
                      className={`absolute -top-3 left-4 text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        step.status === "current"
                          ? "bg-medora-yellow text-medora-black"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step.label}
                    </div>

                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 mt-2 ${
                      step.status === "current" ? "bg-medora-yellow shadow-medora-yellow" : "bg-gray-200"
                    }`}>
                      <step.icon size={18} className={step.status === "current" ? "text-medora-black" : "text-gray-500"} />
                    </div>

                    <h3 className={`font-black text-base mb-1.5 ${step.status === "current" ? "text-medora-black" : "text-gray-500"}`}>
                      {step.step}
                    </h3>
                    <p className={`text-xs leading-relaxed ${step.status === "current" ? "text-gray-600" : "text-gray-400"}`}>
                      {step.sub}
                    </p>
                  </div>

                  {/* Connector */}
                  {i < journeySteps.length - 1 && (
                    <div className="flex items-center justify-center md:px-2 py-2 md:py-0 flex-shrink-0">
                      <div className="hidden md:block text-gray-300 text-2xl font-light">→</div>
                      <div className="md:hidden w-0.5 h-4 bg-gray-200 mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="animate-on-scroll mt-8">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5">
            <div className="flex items-start gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-medora-yellow border border-medora-yellow-dark" />
                  <span className="text-sm font-medium text-gray-700">Current Focus — active development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gray-200 border border-gray-300" />
                  <span className="text-sm font-medium text-gray-500">Long-term Vision — not yet built</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              The diagnostics, pharmacy, and other touchpoint integrations represent MEDORA's long-term
              product direction. They are not currently available and have not been implemented or deployed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
