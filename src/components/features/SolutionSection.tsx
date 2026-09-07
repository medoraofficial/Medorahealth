import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Hash, Users, Timer, Bell, ArrowRight } from "lucide-react";

const DEMO_URL = "https://medoratest.vercel.app";

const features = [
  {
    icon: Hash,
    title: "Digital Token",
    description: "Reception assigns a digital token to each patient. No physical slips, no handwriting — the process starts digitally from the first moment.",
    color: "bg-medora-yellow/10",
    iconBg: "bg-medora-yellow",
  },
  {
    icon: Users,
    title: "Patients Ahead",
    description: "Patients can see exactly how many people are ahead of them in the queue — updated in real time as the queue progresses.",
    color: "bg-blue-50",
    iconBg: "bg-blue-500",
  },
  {
    icon: Timer,
    title: "Estimated Waiting Time",
    description: "An estimated waiting time helps patients plan their time — whether to sit, walk, or return at the right moment.",
    color: "bg-green-50",
    iconBg: "bg-green-500",
  },
  {
    icon: Bell,
    title: "Turn Notifications",
    description: "When a patient's turn is approaching, they receive a timely notification — no need to stay at the counter or ask repeatedly.",
    color: "bg-purple-50",
    iconBg: "bg-purple-500",
  },
];

export default function SolutionSection() {
  const ref = useScrollAnimation();

  return (
    <section id="solution" className="section-padding bg-white">
      <div className="container-medora" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-medora-yellow/15 border border-medora-yellow/30 rounded-full px-4 py-1.5 text-sm font-semibold text-medora-black mb-5">
            MEDORA's Solution
          </div>
          <h2 className="heading-lg mb-4 animate-on-scroll delay-100">
            From Waiting Blind to{" "}
            <span className="relative">
              Knowing What's Next.
              <span className="absolute bottom-1 left-0 w-full h-[5px] bg-medora-yellow/60 rounded-full -z-10" />
            </span>
          </h2>
          <p className="body-lg animate-on-scroll delay-200">
            MEDORA's initial product replaces the uncertainty of the physical queue with a transparent,
            digital experience — for both patients and hospital staff.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`animate-on-scroll delay-${(i + 1) * 100} rounded-2xl p-7 border border-gray-100 ${feature.color} hover:shadow-medora-hover transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-11 h-11 ${feature.iconBg} rounded-xl flex items-center justify-center mb-5 shadow-sm`}>
                <feature.icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-medora-black mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive demo prompt */}
        <div className="animate-on-scroll">
          <div className="bg-medora-black rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2">
                See these features in action.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                The MEDORA live product demonstration lets you experience the patient journey
                interface — token, queue position, waiting time, and notifications.
              </p>
            </div>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-medora-yellow text-medora-black font-bold px-6 py-3.5 rounded-xl hover:bg-medora-yellow-dark transition-all duration-200 shadow-medora-yellow hover:-translate-y-0.5 whitespace-nowrap"
            >
              Try Live Demo
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
