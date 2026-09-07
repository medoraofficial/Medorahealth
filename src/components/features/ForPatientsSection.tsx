import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Eye, MessageSquareOff, Bell, CalendarCheck, SmilePlus } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Visibility into your queue",
    description: "Know your position and how many patients are ahead — without going back to the counter.",
  },
  {
    icon: MessageSquareOff,
    title: "Fewer unnecessary enquiries",
    description: "The information is available on your phone. No need to repeatedly ask hospital staff.",
  },
  {
    icon: Bell,
    title: "Timely turn notifications",
    description: "Receive a notification as your turn approaches — so you're there when it matters.",
  },
  {
    icon: CalendarCheck,
    title: "Better use of waiting time",
    description: "With an estimated wait, you can make better decisions about how to spend your time at the hospital.",
  },
  {
    icon: SmilePlus,
    title: "A more organized visit",
    description: "Less anxiety, less confusion — a clearer, more human hospital experience.",
  },
];

export default function ForPatientsSection() {
  const ref = useScrollAnimation();

  return (
    <section id="for-patients" className="section-padding bg-white">
      <div className="container-medora" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Visual */}
          <div className="animate-on-scroll-left order-2 lg:order-1">
            <div className="bg-gradient-to-br from-medora-yellow/10 to-medora-yellow/5 rounded-3xl p-8 border border-medora-yellow/20">
              {/* Illustrative patient scenario */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-medora-yellow rounded-full flex items-center justify-center">
                    <span className="text-lg">👤</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-medora-black">Patient at OPD</div>
                    <div className="text-xs text-gray-500">General Medicine · Token T-052</div>
                  </div>
                </div>
              </div>

              {/* Journey moments */}
              <div className="space-y-3">
                {[
                  { time: "9:15 AM", message: "Token T-052 assigned. You're 8th in queue.", icon: "🎫", done: true },
                  { time: "9:45 AM", message: "5 patients ahead. Estimated wait: ~20 min.", icon: "⏱", done: true },
                  { time: "10:12 AM", message: "2 patients ahead. Please stay nearby.", icon: "📍", done: true },
                  { time: "10:26 AM", message: "Your turn is next. Please return to OPD.", icon: "🔔", done: false, highlight: true },
                ].map((moment) => (
                  <div
                    key={moment.time}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all ${
                      moment.highlight
                        ? "bg-medora-yellow/15 border-medora-yellow/40"
                        : moment.done
                        ? "bg-white border-gray-100 opacity-80"
                        : "bg-white border-gray-100"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-base ${moment.done ? "bg-green-100" : "bg-medora-yellow/20"}`}>
                      {moment.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 mb-0.5">{moment.time}</div>
                      <div className={`text-sm font-medium ${moment.highlight ? "text-medora-black" : "text-gray-700"}`}>
                        {moment.message}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-medora-yellow/20">
                <p className="text-xs text-gray-500 italic">
                  Illustrative demo scenario. MEDORA uses fictional data for demonstration.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Copy */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-sm font-semibold text-blue-700 mb-5 animate-on-scroll">
              For Patients
            </div>
            <h2 className="heading-lg mb-4 animate-on-scroll delay-100">
              Less Waiting Blind.
              <br />More Knowing.
            </h2>
            <p className="body-lg mb-8 animate-on-scroll delay-200">
              MEDORA is designed to make the hospital visit less stressful — by giving patients
              the information they need, when they need it.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className={`animate-on-scroll delay-${(i + 2) * 100} flex items-start gap-4`}
                >
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <benefit.icon size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-medora-black mb-0.5">{benefit.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
