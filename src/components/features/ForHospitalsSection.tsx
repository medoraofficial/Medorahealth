import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LayoutDashboard, GitMerge, MessageSquare, ClipboardList, Workflow, Building2 } from "lucide-react";

const benefits = [
  {
    icon: LayoutDashboard,
    title: "Better visibility of patient flow",
    description: "Hospital staff can see the queue status at a glance — designed to help with OPD coordination.",
  },
  {
    icon: GitMerge,
    title: "Digital queue management",
    description: "Replace manual token systems with a structured, trackable digital queue designed for OPD operations.",
  },
  {
    icon: MessageSquare,
    title: "Reduced manual queue communication",
    description: "Automated patient notifications are designed to reduce the volume of manual enquiries at the counter.",
  },
  {
    icon: ClipboardList,
    title: "More organized OPD operations",
    description: "A digital queue creates a structured foundation for tracking patient movement within the OPD.",
  },
  {
    icon: Workflow,
    title: "Foundation for future workflows",
    description: "Designed with long-term integration in mind — as a starting point for a broader connected patient journey.",
  },
  {
    icon: Building2,
    title: "Suitable for clinics and hospitals",
    description: "MEDORA is designed to work across OPD settings — from large hospital departments to standalone clinics.",
  },
];

export default function ForHospitalsSection() {
  const ref = useScrollAnimation();

  return (
    <section id="for-hospitals" className="section-padding bg-medora-gray-soft">
      <div className="container-medora" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-12">
          <div className="flex-1">
            <div className="animate-on-scroll inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-600 mb-5">
              For Hospitals
            </div>
            <h2 className="heading-lg mb-4 animate-on-scroll delay-100">
              Better Visibility.
              <br />Better Coordination.
            </h2>
            <p className="body-lg max-w-lg animate-on-scroll delay-200">
              MEDORA is designed to help hospital OPD teams manage patient queues more effectively
              — with a clear digital view of patient flow and fewer manual enquiries to handle.
            </p>
          </div>

          {/* Reception dashboard preview */}
          <div className="flex-1 animate-on-scroll-right">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-medora-card overflow-hidden">
              {/* Dashboard header */}
              <div className="bg-medora-black px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                </div>
                <span className="text-xs text-gray-400 font-medium">MEDORA Reception · OPD Dashboard</span>
                <div className="w-12" />
              </div>

              <div className="p-5">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "In Queue", value: "14", color: "bg-medora-yellow/10 text-medora-black border-medora-yellow/20" },
                    { label: "Seen Today", value: "31", color: "bg-green-50 text-green-700 border-green-100" },
                    { label: "Current", value: "T-044", color: "bg-medora-black text-white border-transparent" },
                  ].map((stat) => (
                    <div key={stat.label} className={`rounded-xl p-3 border text-center ${stat.color}`}>
                      <div className="text-xl font-black leading-none mb-1">{stat.value}</div>
                      <div className="text-[10px] font-medium opacity-70">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Queue list */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Queue Status</div>
                  {[
                    { token: "T-044", status: "In Consultation", color: "bg-green-500" },
                    { token: "T-045", status: "Notified — Returning", color: "bg-medora-yellow" },
                    { token: "T-046", status: "Waiting Nearby", color: "bg-blue-400" },
                    { token: "T-047", status: "Waiting", color: "bg-gray-300" },
                    { token: "T-048", status: "Waiting", color: "bg-gray-300" },
                  ].map((row) => (
                    <div key={row.token} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-2 h-2 rounded-full ${row.color}`} />
                        <span className="text-sm font-bold text-medora-black">{row.token}</span>
                      </div>
                      <span className="text-xs text-gray-500">{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`animate-on-scroll delay-${(i + 1) * 100} card-base`}
            >
              <div className="w-10 h-10 bg-medora-gray-soft rounded-xl flex items-center justify-center mb-4 border border-gray-100">
                <benefit.icon size={18} className="text-medora-black" />
              </div>
              <h4 className="text-sm font-bold text-medora-black mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Pilot CTA */}
        <div className="animate-on-scroll mt-8">
          <div className="bg-medora-yellow/10 border border-medora-yellow/30 rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-medora-black mb-1">Interested in an early pilot?</h4>
              <p className="text-sm text-gray-600">
                MEDORA is progressing toward hospital validation. Reach out to discuss early partnership.
              </p>
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary flex-shrink-0 text-sm"
            >
              Request a Pilot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
