"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import ZyloFooter from "@/components/layout/ZyloFooter";
import { Calendar, MessageSquare } from "react-feather";
import { CALENDLY_URL } from "@/lib/constants";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#2a2a2a] bg-white dark:bg-[#111111] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#df7b26]/40 focus:border-[#df7b26] transition";

const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5";

function ContactForm() {
  const [name, setName] = useState("");
  const [clinic, setClinic] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, clinic, email, phone, message }),
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
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-[#df7b26]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#df7b26" strokeWidth={2}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-3">
          Thanks, {name}!
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          We&apos;ll be in touch shortly.
        </p>
        <button
          onClick={() => { setName(""); setClinic(""); setEmail(""); setPhone(""); setMessage(""); setSubmitted(false); }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
            Phone <span className="text-[#df7b26]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
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

      {error && (
        <p className="text-sm text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#df7b26] text-white font-semibold py-4 rounded-lg hover:bg-[#c96b1e] active:bg-[#b85f18] focus:outline-none focus:ring-2 focus:ring-[#df7b26]/50 transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
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
            Book a live demo or send us a message — we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="lg:py-24 py-16 bg-white dark:bg-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Book a Demo card */}
            <div className="bg-[#df7b26]/5 dark:bg-[#df7b26]/10 border border-[#df7b26]/20 rounded-2xl p-8 lg:p-10">
              <div className="w-12 h-12 bg-[#df7b26]/10 border border-[#df7b26]/20 rounded-xl flex items-center justify-center mb-6">
                <Calendar size={22} className="text-[#df7b26]" />
              </div>
              <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-3">
                Book a Demo
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                See ZyloDent in action with one of our specialists. We&apos;ll walk you through the workflow, answer your clinical questions, and help you evaluate if it&apos;s the right fit for your practice.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Live walkthrough of the full workflow",
                  "Clinical Q&A with a product specialist",
                  "Pricing and configuration guidance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#df7b26]/10 border border-[#df7b26]/20 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#df7b26" strokeWidth={3}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#df7b26] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#c96b1e] transition-colors text-base w-full justify-center"
              >
                <Calendar size={18} />
                Book a Free Demo
              </a>
            </div>

            {/* Contact form card */}
            <div className="bg-white dark:bg-[#111111] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] p-8 shadow-sm">
              <div className="w-12 h-12 bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl flex items-center justify-center mb-6">
                <MessageSquare size={22} className="text-gray-500 dark:text-gray-400" />
              </div>
              <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-3">
                Send a Message
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm leading-relaxed">
                Have a question, need more info, or want to get a quote? Fill in the form and we&apos;ll get back to you.
              </p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <ZyloFooter />
    </>
  );
}
