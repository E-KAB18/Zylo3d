"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import ZyloFooter from "@/components/layout/ZyloFooter";

const ACTION_OPTIONS = [
  { value: "book-demo", label: "Book a Demo" },
  { value: "request-quote", label: "Request a Quote" },
  { value: "request-sample", label: "Request a Sample Part" },
  { value: "general", label: "General Inquiry" },
] as const;

type ActionValue = (typeof ACTION_OPTIONS)[number]["value"];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#2a2a2a] bg-white dark:bg-[#111111] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#df7b26]/40 focus:border-[#df7b26] transition";

const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5";

function ContactForm() {
  const searchParams = useSearchParams();

  const resolveAction = (): ActionValue => {
    const param = searchParams.get("action");
    const match = ACTION_OPTIONS.find((o) => o.value === param);
    return match ? match.value : "book-demo";
  };

  const [action, setAction] = useState<ActionValue>("book-demo");
  const [name, setName] = useState("");
  const [clinic, setClinic] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setAction(resolveAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, clinic, email, phone, action, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-[#111111] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] p-8 shadow-sm text-center py-20">
        <div className="w-16 h-16 bg-[#df7b26]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#df7b26" strokeWidth={2}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-gray-900 dark:text-white text-3xl font-bold mb-3">
          Message sent!
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-[#111111] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Action dropdown */}
        <div>
          <label htmlFor="action" className={labelClass}>
            I want to… <span className="text-[#df7b26]">*</span>
          </label>
          <select
            id="action"
            required
            value={action}
            onChange={(e) => setAction(e.target.value as ActionValue)}
            className={inputClass}
          >
            {ACTION_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Name + Email */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full Name <span className="text-[#df7b26]">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Dr. Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span className="text-[#df7b26]">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="jane@clinic.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Clinic + Phone */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="clinic" className={labelClass}>
              Clinic / Practice Name
            </label>
            <input
              id="clinic"
              type="text"
              placeholder="Bright Smile Dental"
              value={clinic}
              onChange={(e) => setClinic(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 555 000 0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass}>
            Message <span className="text-[#df7b26]">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            required
            placeholder="Tell us about your clinic, the indications you want to run, or any questions you have…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3">
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#df7b26] text-white font-semibold py-4 rounded-lg hover:bg-[#c96b1e] active:bg-[#b85f18] focus:outline-none focus:ring-2 focus:ring-[#df7b26]/50 transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header theme="header-light" />

      <section className="zylo-hero-bg pt-32 pb-12">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 text-center">
          <h1
            className="text-gray-900 dark:text-white font-bold text-5xl mb-4"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            Get in Touch
          </h1>
          <p
            className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="100"
          >
            Request a quote, book a demo, or ask about a sample part — our team is ready to help.
          </p>
        </div>
      </section>

      <section className="lg:py-24 py-16 bg-white dark:bg-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <Suspense
            fallback={
              <div className="max-w-2xl mx-auto bg-white dark:bg-[#111111] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] p-8 shadow-sm">
                <div className="animate-pulse space-y-5">
                  <div className="h-12 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg" />
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="h-12 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg" />
                    <div className="h-12 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="h-12 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg" />
                    <div className="h-12 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg" />
                  </div>
                  <div className="h-32 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg" />
                  <div className="h-14 bg-[#df7b26]/20 rounded-lg" />
                </div>
              </div>
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </section>

      <ZyloFooter />
    </>
  );
}
