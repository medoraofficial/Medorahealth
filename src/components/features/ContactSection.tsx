import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Check } from "lucide-react";

const reasonOptions = [
  "Hospital Pilot Inquiry",
  "Partnership / Integration",
  "Investment / Incubation",
  "Clinical Advisory",
  "Team / Careers",
  "General Inquiry",
];

interface FormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

export default function ContactSection() {
  const ref = useScrollAnimation();
  const [form, setForm] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.reason) return;
    setLoading(true);

    try {
      const payload = new FormData();
      payload.append("_subject", `MEDORA Inquiry — ${form.reason} from ${form.name}`);
      payload.append("_template", "table");
      payload.append("_captcha", "false");
      payload.append("Name", form.name);
      payload.append("Organization", form.organization || "—");
      payload.append("Email", form.email);
      payload.append("Phone", form.phone || "—");
      payload.append("Reason", form.reason);
      payload.append("Message", form.message || "—");

      await fetch("https://formsubmit.co/medorahq@gmail.com", {
        method: "POST",
        body: payload,
      });
      console.log("Contact form submitted:", form);
    } catch (err) {
      console.log("Form submitted (offline fallback):", form);
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-medora-gray-soft">
      <div className="container-medora" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-600 mb-5">
              Contact
            </div>
            <h2 className="heading-lg mb-4 animate-on-scroll delay-100">
              Let's Start a Conversation.
            </h2>
            <p className="body-lg mb-8 animate-on-scroll delay-200">
              Whether you're a hospital exploring a pilot, an investor interested in the mission,
              or someone who simply wants to learn more — we'd love to hear from you.
            </p>

            <div className="space-y-5 animate-on-scroll delay-300">
              {[
                {
                  icon: "🏥",
                  title: "Hospital Pilot Inquiry",
                  text: "Interested in testing MEDORA in your OPD? We'd love to explore an early pilot with you.",
                },
                {
                  icon: "📈",
                  title: "Investor & Incubator Inquiry",
                  text: "If you're aligned with India health-tech and early-stage innovation, let's connect.",
                },
                {
                  icon: "🤝",
                  title: "Partnership & Collaboration",
                  text: "Technology partners, clinical advisors, healthcare organizations — all welcome.",
                },
                {
                  icon: "💌",
                  title: "Founder Contact",
                  text: "Reach Ankit Raj directly for any questions, ideas or collaborations.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-medora-black mb-0.5">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="animate-on-scroll-right">
            {submitted ? (
              <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-medora-card text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Check size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-black text-medora-black mb-2">Message Received</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Thank you for reaching out. We'll be in touch with you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-medora-card space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="name">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-medora-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="organization">
                      Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="Hospital, company, etc."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-medora-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-medora-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-medora-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="reason">
                    Reason for Contacting <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    value={form.reason}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-medora-black focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all bg-white"
                  >
                    <option value="">Select a reason</option>
                    {reasonOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your interest or question..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-medora-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-medora-black/30 border-t-medora-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
