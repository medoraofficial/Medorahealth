import { ArrowRight, ExternalLink } from "lucide-react";

const DEMO_URL = "https://medoratest.vercel.app";

export default function LiveDemoSection() {
  return (
    <section id="demo" className="section-padding bg-medora-black overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-medora-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-medora-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="container-medora relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-medora-yellow/10 border border-medora-yellow/20 rounded-full px-4 py-1.5 text-sm font-semibold text-medora-yellow mb-8">
            <span className="w-2 h-2 bg-medora-yellow rounded-full token-pulse" />
            Live Product Demo
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Don't Just Read About It.
            <br />
            <span className="text-medora-yellow">Experience It.</span>
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Explore the MEDORA experience through our live product demonstration.
            See the token, the queue, the wait time — as a patient would.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-medora-yellow text-medora-black font-black px-8 py-4 rounded-2xl text-lg hover:bg-medora-yellow-dark transition-all duration-200 shadow-medora-yellow hover:shadow-[0_8px_40px_rgba(245,192,0,0.5)] hover:-translate-y-1"
            >
              Launch Live Demo
              <ArrowRight size={20} />
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
            >
              <ExternalLink size={16} />
              medoratest.vercel.app
            </a>
          </div>

          <p className="text-sm text-gray-600">
            Opens in a new tab · Uses demo/fictional patient data only
          </p>
        </div>

        {/* Preview card */}
        <div className="mt-14 max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              {[
                { label: "Queue Position", value: "Live" },
                { label: "Wait Time Estimate", value: "Real-time" },
                { label: "Turn Notification", value: "Automated" },
              ].map((item) => (
                <div key={item.label} className="py-2">
                  <div className="text-2xl font-black text-medora-yellow mb-1">{item.value}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 mt-6 pt-5 text-center">
              <p className="text-sm text-gray-500">
                This is an early working prototype. The demo uses fictional data for illustration purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
