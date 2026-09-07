import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, ArrowRight, Building2, Zap, ChevronDown, X, Copy, ExternalLink } from "lucide-react";

// ─── Subscription Plans ────────────────────────────────────────────────────
const subscriptionPlans = [
  {
    key: "mega",
    label: "MEGA",
    price: "₹50 Lakh",
    priceNote: "per year",
    tagline: "Enterprise hospital networks & large multi-specialty chains",
    color: "bg-medora-black text-white",
    borderColor: "border-medora-black",
    badgeColor: "bg-medora-yellow text-medora-black",
    badge: "Enterprise",
    features: [
      "Unlimited OPD queues across all departments",
      "Unlimited patients per day",
      "Multi-branch / multi-hospital support",
      "Dedicated account manager",
      "Custom branding & white-label option",
      "Priority SLA support (4-hr response)",
      "Advanced analytics & reporting dashboard",
      "Custom integrations with existing HIS/EMR",
      "Onboarding & staff training included",
      "Quarterly product review sessions",
    ],
  },
  {
    key: "large",
    label: "LARGE",
    price: "₹20 Lakh",
    priceNote: "per year",
    tagline: "Large hospitals with high OPD volumes and multiple departments",
    color: "bg-white text-medora-black",
    borderColor: "border-medora-yellow",
    badgeColor: "bg-medora-yellow text-medora-black",
    badge: "Most Popular",
    features: [
      "Up to 10 concurrent OPD queues",
      "Up to 500 patients per day",
      "Multi-department support",
      "Dedicated onboarding support",
      "Analytics & weekly reports",
      "Priority email & phone support",
      "Staff training materials",
      "Reception workflow dashboard",
      "Custom patient notification templates",
    ],
  },
  {
    key: "midsize",
    label: "MID-SIZE",
    price: "₹5 Lakh",
    priceNote: "per year",
    tagline: "Mid-size hospitals and growing clinics",
    color: "bg-white text-medora-black",
    borderColor: "border-gray-200",
    badgeColor: "bg-gray-100 text-gray-600",
    badge: "Growth",
    features: [
      "Up to 4 concurrent OPD queues",
      "Up to 150 patients per day",
      "Standard analytics dashboard",
      "Email support (48-hr response)",
      "Digital onboarding guide",
      "Reception workflow dashboard",
      "Patient notification system",
    ],
  },
  {
    key: "small",
    label: "SMALL",
    price: "₹1 Lakh",
    priceNote: "per year",
    tagline: "Independent clinics, single-doctor practices and pilot sites",
    color: "bg-white text-medora-black",
    borderColor: "border-gray-200",
    badgeColor: "bg-blue-50 text-blue-600",
    badge: "Starter",
    features: [
      "1 OPD queue",
      "Up to 50 patients per day",
      "Basic queue dashboard",
      "Email support",
      "Self-service onboarding",
      "Patient QR code & link sharing",
    ],
  },
];

// ─── Integration Flow ───────────────────────────────────────────────────────
interface IntegrationForm {
  hospitalName: string;
  contactPerson: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  hospitalType: string;
  opdVolume: string;
  departments: string;
  plan: string;
}

function generateSystemCode(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 20) || "hospital";
}

function IntegrationModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [form, setForm] = useState<IntegrationForm>({
    hospitalName: "",
    contactPerson: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    hospitalType: "",
    opdVolume: "",
    departments: "",
    plan: "",
  });
  const [systemCode, setSystemCode] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.hospitalName || !form.email || !form.plan) return;
    setLoading(true);

    const code = generateSystemCode(form.hospitalName);
    setSystemCode(code);

    // Send email via formsubmit.co
    try {
      const payload = new FormData();
      payload.append("_subject", `MEDORA Integration Request — ${form.hospitalName}`);
      payload.append("_template", "table");
      payload.append("Hospital Name", form.hospitalName);
      payload.append("Contact Person", form.contactPerson);
      payload.append("Email", form.email);
      payload.append("Phone", form.phone);
      payload.append("City", form.city);
      payload.append("State", form.state);
      payload.append("Hospital Type", form.hospitalType);
      payload.append("OPD Volume", form.opdVolume);
      payload.append("Departments", form.departments);
      payload.append("Selected Plan", form.plan);
      payload.append("System Code", code);
      payload.append("_captcha", "false");

      await fetch("https://formsubmit.co/medorahq@gmail.com", {
        method: "POST",
        body: payload,
      });
    } catch (err) {
      console.log("Integration form submission:", form);
    }

    setLoading(false);
    setStep("success");
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const integrationLink = `https://app.medorahq.com/integrate/${systemCode}`;
  const patientSystemLink = `https://q.medorahq.com/${systemCode}`;
  const softwareDownloadLink = `https://app.medorahq.com/download/${systemCode}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-3xl z-10">
          <div>
            <h3 className="text-lg font-black text-medora-black">Integrate MEDORA</h3>
            <p className="text-xs text-gray-500">Register your hospital system to receive your integration links</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <X size={16} />
          </button>
        </div>

        <div className="p-6">
          {step === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Hospital details */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Hospital Information</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Hospital / Clinic Name <span className="text-red-500">*</span></label>
                    <input
                      name="hospitalName"
                      required
                      value={form.hospitalName}
                      onChange={handleChange}
                      placeholder="e.g. City General Hospital"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Contact Person <span className="text-red-500">*</span></label>
                    <input
                      name="contactPerson"
                      required
                      value={form.contactPerson}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Email <span className="text-red-500">*</span></label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="admin@hospital.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Phone</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">City</label>
                    <input
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Mumbai"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">State</label>
                    <input
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      placeholder="Maharashtra"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Hospital Type</label>
                    <select
                      name="hospitalType"
                      value={form.hospitalType}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all bg-white"
                    >
                      <option value="">Select type</option>
                      <option>Multi-Specialty Hospital</option>
                      <option>Single Specialty Hospital</option>
                      <option>Government Hospital</option>
                      <option>Clinic / Polyclinic</option>
                      <option>Diagnostic Centre</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Avg. OPD Patients / Day</label>
                    <select
                      name="opdVolume"
                      value={form.opdVolume}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all bg-white"
                    >
                      <option value="">Select range</option>
                      <option>Less than 50</option>
                      <option>50 – 150</option>
                      <option>150 – 500</option>
                      <option>500 – 1000</option>
                      <option>More than 1000</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">Departments to Integrate</label>
                    <input
                      name="departments"
                      value={form.departments}
                      onChange={handleChange}
                      placeholder="e.g. General Medicine, Orthopaedics, Paediatrics"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-medora-yellow/50 focus:border-medora-yellow transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Plan selection */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Select Plan <span className="text-red-500">*</span></h4>
                <div className="grid grid-cols-2 gap-3">
                  {subscriptionPlans.map((plan) => (
                    <button
                      key={plan.key}
                      type="button"
                      onClick={() => setForm({ ...form, plan: plan.label })}
                      className={`rounded-xl border-2 p-3.5 text-left transition-all ${
                        form.plan === plan.label
                          ? "border-medora-yellow bg-medora-yellow/8"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-black text-sm text-medora-black">{plan.label}</div>
                      <div className="text-medora-yellow font-bold text-xs">{plan.price}</div>
                      <div className="text-gray-500 text-[10px] mt-0.5">{plan.priceNote}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !form.hospitalName || !form.email || !form.plan}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-medora-black/30 border-t-medora-black rounded-full animate-spin" />
                    Registering System...
                  </>
                ) : (
                  <>Register & Get Integration Links <ArrowRight size={16} /></>
                )}
              </button>
              <p className="text-[11px] text-gray-400 text-center">
                Your details will be reviewed by the MEDORA team. Integration links will be confirmed via email.
              </p>
            </form>
          ) : (
            /* Success — show links */
            <div className="space-y-5">
              <div className="text-center py-2">
                <div className="w-14 h-14 bg-medora-yellow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medora-yellow">
                  <Check size={24} className="text-medora-black" />
                </div>
                <h4 className="text-xl font-black text-medora-black mb-1">System Registered!</h4>
                <p className="text-sm text-gray-500">
                  <strong className="text-medora-black">{form.hospitalName}</strong> has been added to the MEDORA system.
                  Your integration details are below.
                </p>
              </div>

              {/* System ID */}
              <div className="bg-medora-yellow/8 border border-medora-yellow/30 rounded-2xl p-4">
                <div className="text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">Your System ID</div>
                <div className="font-black text-medora-black text-lg">{systemCode}</div>
                <div className="text-xs text-gray-500 mt-0.5">Use this ID to identify your hospital system across MEDORA</div>
              </div>

              {/* Links */}
              {[
                {
                  key: "integration",
                  label: "Integration Link",
                  sublabel: "Install MEDORA on any device — PC, tablet or phone",
                  icon: "🔗",
                  url: integrationLink,
                  color: "bg-blue-50 border-blue-100",
                },
                {
                  key: "patient",
                  label: "Patient System Link",
                  sublabel: "Share this via QR code or direct link to patients. Each patient added to your system gets a personalised service link.",
                  icon: "👤",
                  url: patientSystemLink,
                  color: "bg-green-50 border-green-100",
                },
                {
                  key: "download",
                  label: "Software Download",
                  sublabel: "Download the MEDORA reception software on any device",
                  icon: "⬇️",
                  url: softwareDownloadLink,
                  color: "bg-purple-50 border-purple-100",
                },
              ].map((link) => (
                <div key={link.key} className={`rounded-2xl border p-4 ${link.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{link.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm text-medora-black mb-0.5">{link.label}</div>
                      <div className="text-xs text-gray-500 mb-2 leading-relaxed">{link.sublabel}</div>
                      <div className="flex items-center gap-2">
                        <code className="text-xs bg-white/80 border border-gray-200 rounded-lg px-2.5 py-1 truncate flex-1 font-mono text-gray-700">
                          {link.url}
                        </code>
                        <button
                          onClick={() => copyToClipboard(link.url, link.key)}
                          className="flex-shrink-0 w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                          title="Copy link"
                        >
                          {copied === link.key ? <Check size={13} className="text-green-600" /> : <Copy size={13} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Patient service link explanation */}
              <div className="bg-medora-black rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🔑</span>
                  <div>
                    <div className="font-bold text-sm text-white mb-1">How Patient Links Work</div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Each patient in your system receives a unique link like{" "}
                      <code className="text-medora-yellow font-mono">patient-1-appointment-{systemCode}</code>.
                      Through this link, patients can view and manage their individual queue position, waiting time
                      and appointment status in real time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-400 mb-3">
                  A confirmation with all details has been sent to <strong className="text-medora-black">{form.email}</strong>
                </p>
                <button onClick={onClose} className="btn-outline text-sm">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Pricing Section ────────────────────────────────────────────────────────
export default function PricingSection() {
  const ref = useScrollAnimation();
  const [activePlan, setActivePlan] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"subscription" | "integration">("subscription");
  const [showIntegrationModal, setShowIntegrationModal] = useState(false);

  const selectedPlan = subscriptionPlans.find((p) => p.key === activePlan);

  return (
    <section id="pricing" className="section-padding bg-medora-gray-soft">
      <div className="container-medora" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-medora-yellow/15 border border-medora-yellow/30 rounded-full px-4 py-1.5 text-sm font-semibold text-medora-black mb-5">
            Pricing & Plans
          </div>
          <h2 className="heading-lg mb-4 animate-on-scroll delay-100">
            Simple, Transparent Pricing for Every Hospital.
          </h2>
          <p className="body-lg animate-on-scroll delay-200">
            Choose the plan that fits your hospital's size. All plans include the full MEDORA
            queue management platform — digital tokens, real-time positions, wait estimates and notifications.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="animate-on-scroll flex gap-1 bg-white border border-gray-200 rounded-2xl p-1 w-fit mb-10 shadow-medora-card">
          <button
            onClick={() => setActiveTab("subscription")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === "subscription"
                ? "bg-medora-black text-white shadow-sm"
                : "text-gray-500 hover:text-medora-black"
            }`}
          >
            <Zap size={15} />
            Subscription Plans
          </button>
          <button
            onClick={() => setActiveTab("integration")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === "integration"
                ? "bg-medora-black text-white shadow-sm"
                : "text-gray-500 hover:text-medora-black"
            }`}
          >
            <Building2 size={15} />
            Get Integration
          </button>
        </div>

        {/* ── SUBSCRIPTION TAB ── */}
        {activeTab === "subscription" && (
          <div className="animate-on-scroll">
            {/* Plan cards — 2x2 grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {subscriptionPlans.map((plan, i) => (
                <button
                  key={plan.key}
                  onClick={() => setActivePlan(activePlan === plan.key ? null : plan.key)}
                  className={`text-left rounded-2xl border-2 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-medora-hover focus:outline-none ${
                    activePlan === plan.key
                      ? `${plan.borderColor} shadow-medora-hover -translate-y-1`
                      : "border-gray-200 shadow-medora-card hover:border-gray-300"
                  } bg-white`}
                >
                  <div className={`inline-flex text-xs font-black px-2.5 py-0.5 rounded-full mb-4 ${plan.badgeColor}`}>
                    {plan.badge}
                  </div>
                  <div className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{plan.label}</div>
                  <div className="text-2xl font-black text-medora-black leading-none mb-0.5">{plan.price}</div>
                  <div className="text-xs text-gray-500 mb-3">{plan.priceNote}</div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{plan.tagline}</p>
                  <div className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${
                    activePlan === plan.key ? "text-medora-yellow-dark" : "text-gray-400"
                  }`}>
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${activePlan === plan.key ? "rotate-180" : ""}`}
                    />
                    {activePlan === plan.key ? "Hide features" : "View features"}
                  </div>
                </button>
              ))}
            </div>

            {/* Expanded features panel */}
            {selectedPlan && (
              <div className={`rounded-3xl border-2 p-8 mb-8 transition-all duration-300 ${selectedPlan.borderColor} bg-white shadow-medora-hover`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className={`inline-flex text-xs font-black px-2.5 py-0.5 rounded-full mb-2 ${selectedPlan.badgeColor}`}>
                      {selectedPlan.badge}
                    </div>
                    <h3 className="text-xl font-black text-medora-black">
                      {selectedPlan.label} Plan — {selectedPlan.price}
                      <span className="text-sm font-normal text-gray-500 ml-2">{selectedPlan.priceNote}</span>
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{selectedPlan.tagline}</p>
                  </div>
                  <button
                    onClick={() => setShowIntegrationModal(true)}
                    className="btn-primary flex-shrink-0 text-sm"
                  >
                    Get Started <ArrowRight size={15} />
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selectedPlan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-medora-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} className="text-medora-black" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common features note */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-medora-card">
              <h4 className="font-bold text-medora-black mb-4 text-sm">All Plans Include</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {[
                  "Digital token assignment",
                  "Real-time queue position",
                  "Estimated waiting time",
                  "Automated turn notifications",
                  "Reception dashboard",
                  "Patient QR code & link sharing",
                  "Mobile-friendly patient interface",
                  "Secure data handling",
                  "Regular platform updates",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medora-yellow rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── INTEGRATION TAB ── */}
        {activeTab === "integration" && (
          <div className="animate-on-scroll">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left — how it works */}
              <div>
                <h3 className="text-2xl font-black text-medora-black mb-3">How Integration Works</h3>
                <p className="text-gray-600 mb-7 leading-relaxed">
                  Fill in your hospital's details, choose a plan, and your system profile is created instantly.
                  You'll receive dedicated links to set up MEDORA across your hospital.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Register Your Hospital",
                      desc: "Fill in your hospital details and select a subscription plan to create your MEDORA system profile.",
                      icon: "📋",
                    },
                    {
                      step: "2",
                      title: "Receive Your Integration Link",
                      desc: "Your unique integration link is generated. Use it to install and activate MEDORA on every reception device.",
                      icon: "🔗",
                    },
                    {
                      step: "3",
                      title: "Download on Every Device",
                      desc: "Use the same link to download and configure the MEDORA reception software on any PC, tablet or mobile device.",
                      icon: "📲",
                    },
                    {
                      step: "4",
                      title: "Share Patient System Link",
                      desc: "Your patient-facing system link can be placed in a QR code or shared directly. Each patient gets a personalised link like patient-1-appointment-[system].",
                      icon: "🔑",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-medora-yellow rounded-xl flex items-center justify-center flex-shrink-0 shadow-medora-yellow">
                        <span className="font-black text-sm text-medora-black">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-medora-black mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — CTA card */}
              <div className="bg-medora-black rounded-3xl p-8 text-white">
                <div className="w-12 h-12 bg-medora-yellow rounded-2xl flex items-center justify-center mb-5 shadow-medora-yellow">
                  <Building2 size={22} className="text-medora-black" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">Ready to Integrate?</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Register your hospital system to receive your personalised integration link, patient system link and software download link.
                </p>

                <div className="space-y-2.5 mb-7">
                  {[
                    "Your hospital added to the MEDORA system",
                    "Unique integration link for device setup",
                    "Patient system link for QR code sharing",
                    "Individual patient service links generated",
                    "Software download for all devices",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-medora-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} className="text-medora-yellow" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setShowIntegrationModal(true)}
                  className="btn-primary w-full justify-center"
                >
                  Start Integration <ArrowRight size={16} />
                </button>
                <p className="text-xs text-gray-600 text-center mt-3">
                  Currently available for pilot partners. The MEDORA team will confirm activation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="animate-on-scroll mt-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-medora-card">
            <div>
              <p className="font-bold text-medora-black">Not sure which plan fits your hospital?</p>
              <p className="text-sm text-gray-500 mt-1">Contact us and we'll help you find the right fit.</p>
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline text-sm flex-shrink-0"
            >
              Talk to Us
            </button>
          </div>
        </div>
      </div>

      {/* Integration Modal */}
      {showIntegrationModal && (
        <IntegrationModal onClose={() => setShowIntegrationModal(false)} />
      )}
    </section>
  );
}
