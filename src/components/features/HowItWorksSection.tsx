import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Monitor, QrCode, Smartphone, BellRing } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Monitor,
    actor: "Reception",
    title: "Creates a digital token",
    description:
      "The hospital reception or OPD staff opens MEDORA and registers the patient. A unique digital token is generated and assigned instantly.",
    detail: "Simple, one-step registration for hospital staff.",
    color: "bg-medora-yellow",
    textColor: "text-medora-black",
  },
  {
    number: "02",
    icon: QrCode,
    actor: "Patient",
    title: "Scans QR or enters token",
    description:
      "The patient scans a QR code displayed at the counter — or enters their token number — to access their personal queue view.",
    detail: "No app download required for the initial experience.",
    color: "bg-medora-black",
    textColor: "text-white",
  },
  {
    number: "03",
    icon: Smartphone,
    actor: "Patient",
    title: "Sees live queue position",
    description:
      "The patient can see their current position in the queue, how many patients are ahead, and an estimated waiting time — updated in real time.",
    detail: "Clear, human-readable status — not just a number.",
    color: "bg-medora-yellow",
    textColor: "text-medora-black",
  },
  {
    number: "04",
    icon: BellRing,
    actor: "System",
    title: "Notifies when turn approaches",
    description:
      "As the patient's turn approaches, MEDORA sends a timely notification. The patient knows when to return — without repeatedly asking the counter.",
    detail: "Timely, purposeful notification — not noise.",
    color: "bg-medora-black",
    textColor: "text-white",
  },
];

export default function HowItWorksSection() {
  const ref = useScrollAnimation();

  return (
    <section id="how-it-works" className="section-padding bg-medora-gray-soft">
      <div className="container-medora" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-600 mb-5">
            How It Works
          </div>
          <h2 className="heading-lg mb-4 animate-on-scroll delay-100">
            Four Steps. One Connected Experience.
          </h2>
          <p className="body-lg animate-on-scroll delay-200">
            MEDORA is designed to be simple for both hospital staff and patients — with minimal friction at every step.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-medora-yellow via-medora-black/20 to-medora-yellow opacity-20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`animate-on-scroll delay-${(i + 1) * 100} group`}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-medora-card hover:shadow-medora-hover transition-all duration-300 hover:-translate-y-2">
                  {/* Top accent */}
                  <div className={`${step.color} px-6 pt-6 pb-5`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-3xl font-black ${step.textColor} opacity-30`}>
                        {step.number}
                      </span>
                      <div className={`w-10 h-10 ${step.textColor === "text-white" ? "bg-white/10" : "bg-black/10"} rounded-xl flex items-center justify-center`}>
                        <step.icon size={20} className={step.textColor} />
                      </div>
                    </div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${step.textColor} opacity-70 mb-1`}>
                      {step.actor}
                    </div>
                    <h3 className={`text-base font-black ${step.textColor} leading-snug`}>
                      {step.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-5">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
                      <div className="w-1.5 h-1.5 bg-medora-yellow rounded-full flex-shrink-0" />
                      <p className="text-xs font-medium text-gray-500">{step.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="animate-on-scroll mt-10">
          <div className="bg-white border border-gray-200 rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 bg-medora-yellow/15 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-lg">💡</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-medora-black mb-0.5">
                Designed for Indian hospital environments
              </p>
              <p className="text-sm text-gray-500">
                MEDORA is being built with the realities of Indian OPD operations in mind — varied patient literacy, mobile access, and high-volume queues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
