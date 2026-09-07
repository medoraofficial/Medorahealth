import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HelpCircle, Clock, MapPin, AlertCircle } from "lucide-react";

const questions = [
  {
    icon: MapPin,
    question: "Where am I in the queue?",
    description: "Patients often have no way to know their position without going back to the counter.",
    color: "bg-red-50 border-red-100",
    iconColor: "text-red-500",
  },
  {
    icon: Clock,
    question: "How long will I wait?",
    description: "Without an estimate, patients can't plan — they stay anxious and uncertain.",
    color: "bg-orange-50 border-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: HelpCircle,
    question: "Should I keep waiting here?",
    description: "Many patients repeatedly enquire at the counter, creating congestion for everyone.",
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: AlertCircle,
    question: "When is my turn?",
    description: "Patients sometimes miss their turn or return too late, disrupting the entire queue.",
    color: "bg-yellow-50 border-yellow-100",
    iconColor: "text-yellow-600",
  },
];

export default function ProblemSection() {
  const ref = useScrollAnimation();

  return (
    <section id="problem" className="section-padding bg-medora-gray-soft">
      <div className="container-medora" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-600 mb-5">
            The Problem
          </div>
          <h2 className="heading-lg mb-4 animate-on-scroll delay-100">
            The Hospital Waiting Room Experience — Today
          </h2>
          <p className="body-lg animate-on-scroll delay-200">
            Most patients arrive at a hospital OPD, receive a physical token, and then
            wait — often with little information about what happens next.
          </p>
        </div>

        {/* Visual story */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {questions.map((item, i) => (
            <div
              key={item.question}
              className={`animate-on-scroll delay-${(i + 1) * 100} rounded-2xl p-6 border ${item.color} transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm`}>
                <item.icon size={20} className={item.iconColor} />
              </div>
              <p className="font-bold text-medora-black text-base mb-2 leading-snug">
                "{item.question}"
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Journey illustration */}
        <div className="animate-on-scroll bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-medora-card">
          <h3 className="heading-md mb-2">The Fragmented Journey</h3>
          <p className="body-md mb-8 max-w-xl">
            Patients often navigate multiple touchpoints without any connected information — each step is separate, manual and uncertain.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: "Arrive", sub: "no prior info", active: false },
              { label: "Get Token", sub: "physical slip", active: false },
              { label: "Wait", sub: "no visibility", active: true },
              { label: "Ask Counter", sub: "manual enquiry", active: false },
              { label: "Wait More", sub: "no updates", active: true },
              { label: "Miss Turn?", sub: "or overstay", active: false },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <div
                  className={`rounded-xl px-4 py-2.5 text-center min-w-[90px] ${
                    step.active
                      ? "bg-red-50 border-2 border-red-200"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <div className={`text-sm font-bold ${step.active ? "text-red-700" : "text-medora-black"}`}>
                    {step.label}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5">{step.sub}</div>
                </div>
                {i < 5 && (
                  <div className="text-gray-300 font-bold text-lg">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
            <div className="w-3 h-3 rounded bg-red-200 border border-red-300" />
            <span>Highlighted steps are where the experience typically breaks down</span>
          </div>
        </div>
      </div>
    </section>
  );
}
