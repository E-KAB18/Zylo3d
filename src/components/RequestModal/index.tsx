"use client";

import { useState } from "react";

type ModalType = "quote" | "demo";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
  productName?: string;
};

const COUNTRIES = [
  "Saudi Arabia",
  "United Arab Emirates",
  "Kuwait",
  "Qatar",
  "Bahrain",
  "Oman",
  "Egypt",
  "Jordan",
  "Lebanon",
  "Turkey",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "United States",
  "Canada",
  "Australia",
  "South Africa",
  "Other",
];

const inputClass =
  "w-full rounded-xs border border-stroke bg-[#f8f8f8] px-4 py-3 text-sm text-body-color outline-none transition focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-body-color-dark dark:focus:border-primary";

export default function RequestModal({ isOpen, onClose, type, productName }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
  });

  if (!isOpen) return null;

  const title = type === "quote" ? "Request a Quote" : "Schedule a Demo";
  const subtitle =
    type === "quote"
      ? "Fill in your details and our team will get back to you with pricing information."
      : "Fill in your details and our team will reach out to schedule a personalised demo.";
  const productLabel = productName ? ` — ${productName}` : "";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: POST to /api/submit-request when backend is ready
    console.log("[RequestModal] Submission:", { type, productName, ...form });
    setSubmitted(true);
  }

  function handleClose() {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", company: "", country: "", message: "" });
    }, 300);
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-gray-dark shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stroke dark:border-dark-3 bg-white dark:bg-gray-dark px-8 py-5">
          <div>
            <h2 className="text-xl font-bold text-black dark:text-white">
              {title}
              {productLabel && (
                <span className="text-primary">{productLabel}</span>
              )}
            </h2>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-body-color hover:bg-gray-100 dark:hover:bg-dark-2 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        <div className="px-8 py-6">
          {submitted ? (
            /* ── Success state ── */
            <div className="py-12 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg width="32" height="32" viewBox="0 0 32 32" className="fill-primary">
                  <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0zm-2.4 22.4-6.4-6.4 2.24-2.24 4.16 4.16 8.96-8.96L24.8 11.2 13.6 22.4z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                Request Received!
              </h3>
              <p className="text-base text-body-color dark:text-body-color-dark">
                Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}. Our team will be in
                touch with you shortly.
              </p>
              <button
                onClick={handleClose}
                className="mt-8 rounded-xs bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary/80 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <>
              <p className="mb-6 text-sm text-body-color dark:text-body-color-dark">{subtitle}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@clinic.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+966 55 000 0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                      Company / Clinic
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="My Dental Lab"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                    Country
                  </label>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select your country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-black dark:text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your clinic setup, current workflow, or any questions…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xs bg-primary py-4 text-base font-semibold text-white hover:bg-primary/80 transition-colors"
                >
                  {title}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
