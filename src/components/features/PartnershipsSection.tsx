import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Hospital, Microscope, Code2, Lightbulb, TrendingUp, Users } from "lucide-react";

const partnerTypes = [
  {
    icon: Hospital,
    title: "Hospitals & Clinics",
    description: "Healthcare facilities interested in piloting digital queue management in their OPD operations.",
    cta: "Discuss a Pilot",
  },
  {
    icon: Microscope,
    title: "Healthcare Organizations",
    description: "Organizations working to improve patient experience and hospital workflow efficiency in India.",
    cta: "Partner With Us",
  },
  {
    icon: Code2,
    title: "Technology Partners",
    description: "Technology companies interested in integrating with or building alongside MEDORA's platform.",
    cta: "Explore Integration",
  },
  {
    icon: Lightbulb,
    title: "Clinical Advisors",
    description: "Healthcare professionals who can help shape MEDORA's product to reflect real clinical needs.",
    cta: "Join as Advisor",
  },
  {
    icon: TrendingUp,
    title: "Investors & Incubators",
    description: "Early-stage investors and incubators aligned with India health-tech and patient-journey innovation.",
    cta: "Connect With Us",
  },
  {
    icon: Users,
    title: "Team Members",
    description: "Talented individuals who want to work on a meaningful health-tech problem at an early stage.",
    cta: "Join the Mission",
  },
];

export default function PartnershipsSection() {
  const ref = useScrollAnimation();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="partnerships" className="section-padding bg-white">
      <div className="container-medora" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-medora-yellow/15 border border-medora-yellow/30 rounded-full px-4 py-1.5 text-sm font-semibold text-medora-black mb-5">
            Partnerships
          </div>
          <h2 className="heading-lg mb-4 animate-on-scroll delay-100">
            Help Us Build the Future of the Hospital Journey.
          </h2>
          <p className="body-lg animate-on-scroll delay-200">
            MEDORA is looking for partners, advisors and allies who believe in making healthcare more
            coordinated, transparent and human — in India and beyond.
          </p>
        </div>

        {/* Partner type grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {partnerTypes.map((type, i) => (
            <div
              key={type.title}
              className={`animate-on-scroll delay-${(i + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 shadow-medora-card hover:shadow-medora-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              onClick={scrollToContact}
            >
              <div className="w-11 h-11 bg-medora-yellow/10 border border-medora-yellow/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-medora-yellow group-hover:border-medora-yellow transition-all duration-200">
                <type.icon size={20} className="text-medora-black" />
              </div>
              <h3 className="text-base font-bold text-medora-black mb-2">{type.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{type.description}</p>
              <span className="text-xs font-bold text-medora-black underline underline-offset-2 group-hover:text-medora-yellow-dark transition-colors">
                {type.cta} →
              </span>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="animate-on-scroll">
          <div className="bg-gradient-to-br from-medora-yellow via-medora-yellow to-[#FFDA44] rounded-3xl p-10 md:p-12 text-center shadow-medora-yellow">
            <h3 className="text-2xl md:text-3xl font-black text-medora-black mb-3">
              Ready to partner with MEDORA?
            </h3>
            <p className="text-medora-black/70 text-base mb-8 max-w-xl mx-auto">
              Whether you're a hospital, investor, advisor or technologist — we'd love to hear from you.
            </p>
            <button
              onClick={scrollToContact}
              className="btn-secondary text-base px-8 py-4"
            >
              Partner With MEDORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
