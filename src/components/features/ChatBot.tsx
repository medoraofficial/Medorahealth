import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ArrowRight, RotateCcw } from "lucide-react";

const DEMO_URL = "https://medoratest.vercel.app";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  cta?: { label: string; action: () => void };
  time: string;
}

const getTime = () =>
  new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

// ─── FAQ Knowledge Base ──────────────────────────────────────────────────────
const faqs: { patterns: string[]; answer: string; cta?: { label: string; href?: string; scroll?: string } }[] = [
  {
    patterns: ["what is medora", "about medora", "tell me about", "what do you do", "who are you", "hello", "hi", "hey", "namaste"],
    answer:
      "MEDORA is a digital patient journey and hospital workflow platform built for India. We start with one focused problem: making OPD queue management transparent — real-time queue position, estimated wait times, and turn notifications for patients.",
  },
  {
    patterns: ["how does it work", "how it works", "how does medora work", "explain"],
    answer:
      "It's simple:\n1. Reception creates a digital token for the patient\n2. Patient scans a QR code or enters their token\n3. Patient sees their live queue position and estimated wait\n4. Patient gets a notification when their turn approaches\n\nNo app download required — it works in a browser.",
    cta: { label: "See How It Works", scroll: "#how-it-works" },
  },
  {
    patterns: ["demo", "try", "experience", "live demo", "test", "see it"],
    answer:
      "You can try the MEDORA live prototype right now. It's a working demonstration of the queue management interface.",
    cta: { label: "Launch Live Demo →", href: DEMO_URL },
  },
  {
    patterns: ["pricing", "cost", "price", "how much", "fee", "subscription", "plan", "lakh", "₹"],
    answer:
      "MEDORA offers 4 subscription tiers:\n• SMALL — ₹1 Lakh/year (clinics, up to 50 patients/day)\n• MID-SIZE — ₹5 Lakh/year (mid hospitals, up to 150/day)\n• LARGE — ₹20 Lakh/year (large hospitals, up to 500/day)\n• MEGA — ₹50 Lakh/year (enterprise networks, unlimited)\n\nAll plans include digital tokens, real-time queue, notifications and reception dashboard.",
    cta: { label: "View Pricing", scroll: "#pricing" },
  },
  {
    patterns: ["patient", "for patient", "patient benefit", "user benefit"],
    answer:
      "For patients, MEDORA means:\n• Know your exact queue position — no more guessing\n• See how many patients are ahead\n• Get estimated wait time\n• Receive a notification when your turn approaches\n• Less anxiety, fewer trips to the counter",
    cta: { label: "Learn More", scroll: "#for-patients" },
  },
  {
    patterns: ["hospital", "for hospital", "hospital benefit", "opd", "reception", "workflow"],
    answer:
      "For hospitals, MEDORA is designed to:\n• Give reception better visibility of patient flow\n• Reduce manual queue announcements\n• Enable digital token management\n• Improve OPD coordination\n• Lay the foundation for future patient journey workflows",
    cta: { label: "Hospital Benefits", scroll: "#for-hospitals" },
  },
  {
    patterns: ["pilot", "hospital pilot", "test with hospital", "validate"],
    answer:
      "MEDORA is actively looking for hospital pilot partners in India. If you're a hospital or clinic interested in testing the system in a real OPD environment, we'd love to connect.",
    cta: { label: "Request a Pilot", scroll: "#contact" },
  },
  {
    patterns: ["partner", "partnership", "collaborate", "work with"],
    answer:
      "MEDORA welcomes partnerships from hospitals, clinics, technology partners, clinical advisors, incubators, and investors. We're at an early stage and building collaboratively.",
    cta: { label: "Partner With MEDORA", scroll: "#partnerships" },
  },
  {
    patterns: ["invest", "investor", "funding", "incubator", "startup", "raise"],
    answer:
      "MEDORA is an early-stage India health-tech startup. If you're an investor or incubator aligned with healthcare innovation and India's patient journey problem, we'd love to start a conversation.",
    cta: { label: "Reach Out", scroll: "#contact" },
  },
  {
    patterns: ["roadmap", "future", "vision", "next", "plan"],
    answer:
      "MEDORA's roadmap:\n• NOW: Early working prototype\n• NEXT: Production-ready MVP\n• THEN: Initial hospital pilot\n• FUTURE: Multi-touchpoint patient journey platform (registration, diagnostics, pharmacy and more)",
    cta: { label: "View Full Roadmap", scroll: "#roadmap" },
  },
  {
    patterns: ["founder", "ankit", "team", "who built", "creator", "ceo"],
    answer:
      "MEDORA was founded by Ankit Raj, who built the platform to address India's fragmented hospital experience. The mission is to make every hospital touchpoint transparent and connected — starting with the OPD queue.",
    cta: { label: "About MEDORA", scroll: "#about" },
  },
  {
    patterns: ["contact", "reach", "email", "get in touch", "talk"],
    answer:
      "You can reach the MEDORA team directly at medorahq@gmail.com, or fill in the contact form on this page for hospital pilot inquiries, partnerships, or investor conversations.",
    cta: { label: "Open Contact Form", scroll: "#contact" },
  },
  {
    patterns: ["integrate", "integration", "install", "setup", "deploy", "device"],
    answer:
      "Once you register your hospital, you receive:\n• A unique integration link to install MEDORA on any device\n• A patient system link for QR code or direct sharing\n• A software download link for reception devices\n\nEach patient gets a personalised link like: patient-1-appointment-[yourhospital]",
    cta: { label: "Get Integration", scroll: "#pricing" },
  },
  {
    patterns: ["stage", "prototype", "mvp", "ready", "production", "available"],
    answer:
      "MEDORA currently has an early working prototype. We are progressing toward a production-ready MVP and real-world hospital validation. We are not yet in production deployment.",
    cta: { label: "See Our Stage", scroll: "#product" },
  },
  {
    patterns: ["qr code", "qr", "scan", "link"],
    answer:
      "Yes — patients can access their queue status via a QR code or a direct link shared by the hospital. No app download is required. Each patient service gets its own unique link.",
  },
  {
    patterns: ["notification", "notify", "alert", "sms", "message"],
    answer:
      "MEDORA sends turn notifications to patients as their queue position approaches. This means patients can wait anywhere — and they'll be notified when to return to the OPD counter.",
  },
];

function getResponse(input: string): { answer: string; cta?: { label: string; href?: string; scroll?: string } } {
  const lower = input.toLowerCase().trim();
  for (const faq of faqs) {
    if (faq.patterns.some((p) => lower.includes(p))) {
      return { answer: faq.answer, cta: faq.cta };
    }
  }
  return {
    answer:
      "I'm MEDORA's assistant and can help with questions about the platform, pricing, how it works, partnerships, or how to get in touch. Try asking about pricing, the demo, hospital integration, or the roadmap.",
    cta: { label: "Try Live Demo", href: DEMO_URL },
  };
}

const quickPrompts = [
  "How does MEDORA work?",
  "What are the pricing plans?",
  "Can I try a demo?",
  "I'm a hospital interested in a pilot",
  "I'm an investor",
];

const welcomeMessage: Message = {
  id: "welcome",
  role: "bot",
  text: "Hi! I'm MEDORA's assistant.\n\nI can help you understand what MEDORA does, how it works, pricing, integration, or how to get in touch. What would you like to know?",
  time: getTime(),
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleScrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", text: text.trim(), time: getTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const { answer, cta } = getResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: answer,
        time: getTime(),
        cta: cta
          ? {
              label: cta.label,
              action: cta.href
                ? () => window.open(cta.href, "_blank")
                : () => handleScrollTo(cta.scroll!),
            }
          : undefined,
      };
      setTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 900 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const resetChat = () => {
    setMessages([welcomeMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open MEDORA chat"
        className={`fixed bottom-6 right-6 z-[150] w-14 h-14 rounded-2xl shadow-[0_8px_32px_rgba(245,192,0,0.4)] flex items-center justify-center transition-all duration-300 focus:outline-none ${
          open ? "bg-medora-black scale-95" : "bg-medora-yellow hover:scale-110 active:scale-95"
        }`}
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-medora-black" />
        )}
        {!open && unread > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-medora-black text-white text-[10px] font-black rounded-full flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-[150] w-[360px] max-w-[calc(100vw-24px)] rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.18)] border border-gray-100 flex flex-col bg-white overflow-hidden transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ maxHeight: "min(560px, calc(100vh - 120px))" }}
      >
        {/* Header */}
        <div className="bg-medora-black px-5 py-4 flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 bg-medora-yellow rounded-xl flex items-center justify-center flex-shrink-0">
            <svg width="18" height="15" viewBox="0 0 22 18" fill="none">
              <path
                d="M1 9 L4 9 L6 3 L8 15 L10 6 L12 12 L14 9 L21 9"
                stroke="#0A0A0A"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white font-black text-sm leading-tight">MEDORA Assistant</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              <span className="text-gray-400 text-[11px]">Online · Ask anything</span>
            </div>
          </div>
          <button
            onClick={resetChat}
            className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            title="Reset chat"
          >
            <RotateCcw size={13} className="text-gray-400" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              {msg.role === "bot" && (
                <div className="w-7 h-7 bg-medora-yellow rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="12" viewBox="0 0 22 18" fill="none">
                    <path d="M1 9 L4 9 L6 3 L8 15 L10 6 L12 12 L14 9 L21 9" stroke="#0A0A0A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              <div className={`max-w-[82%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                <div
                  className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-medora-black text-white rounded-tr-sm"
                      : "bg-gray-50 border border-gray-100 text-gray-800 rounded-tl-sm"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.cta && (
                  <button
                    onClick={msg.cta.action}
                    className="inline-flex items-center gap-1.5 bg-medora-yellow text-medora-black text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-medora-yellow-dark transition-colors"
                  >
                    {msg.cta.label} <ArrowRight size={11} />
                  </button>
                )}
                <span className="text-[10px] text-gray-400 px-1">{msg.time}</span>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex gap-2">
              <div className="w-7 h-7 bg-medora-yellow rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="14" height="12" viewBox="0 0 22 18" fill="none">
                  <path d="M1 9 L4 9 L6 3 L8 15 L10 6 L12 12 L14 9 L21 9" stroke="#0A0A0A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="bg-gray-50 border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick prompts */}
        {messages.length <= 2 && !typing && (
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-none flex-shrink-0">
            {quickPrompts.slice(0, 3).map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                className="flex-shrink-0 text-[11px] font-medium text-gray-600 border border-gray-200 rounded-full px-3 py-1.5 hover:border-medora-yellow hover:text-medora-black transition-colors bg-white"
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-4 py-3 border-t border-gray-100 flex gap-2 flex-shrink-0">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about MEDORA..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-medora-yellow/40 focus:border-medora-yellow transition-all placeholder-gray-400 min-w-0"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || typing}
            className="w-10 h-10 bg-medora-yellow rounded-xl flex items-center justify-center flex-shrink-0 hover:bg-medora-yellow-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send size={15} className="text-medora-black" />
          </button>
        </div>
      </div>
    </>
  );
}
