"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import ZyloFooter from "@/components/layout/ZyloFooter";

const countries = ["Saudi Arabia", "UAE", "Kuwait", "Qatar", "Bahrain", "Oman", "Egypt", "Jordan", "Lebanon", "Syria", "Iraq", "United States", "United Kingdom", "Germany", "France", "Australia", "Canada", "India", "Pakistan", "Turkey", "Other"];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", country: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Contact form submission:", form);
        // TODO: POST to /api/submit-request
        setSubmitted(true);
    };

    return (
        <>
            <Header theme="header-light" />

            <section className="zylo-hero-bg lg:pt-44 pt-32 pb-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 text-center">
                    <h1 className="text-gray-900 dark:text-white font-bold text-5xl mb-4" data-aos="fade-up" data-aos-duration="400">Get in Touch</h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
                        Request a quote, schedule a demo, or open a support ticket — our team is ready to help.
                    </p>
                </div>
            </section>

            <section className="lg:py-24 py-16 bg-white dark:bg-[#0d0d0d]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="max-w-2xl mx-auto">
                        {submitted ? (
                            <div className="text-center py-20">
                                <div className="w-16 h-16 bg-[#df7b26]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#df7b26" strokeWidth={2}><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <h2 className="text-gray-900 dark:text-white text-3xl font-bold mb-3">
                                    Thanks, {form.name.split(" ")[0]}!
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 text-lg">
                                    We&apos;ve received your message and will be in touch shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                                        <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:border-[#df7b26] transition" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                                        <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:border-[#df7b26] transition" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                                        <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:border-[#df7b26] transition" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company / Clinic</label>
                                        <input type="text" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:border-[#df7b26] transition" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Country</label>
                                    <select value={form.country} onChange={e => setForm({ ...form, country: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:border-[#df7b26] transition">
                                        <option value="">Select country</option>
                                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                    <textarea rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:border-[#df7b26] transition resize-none" />
                                </div>
                                <button type="submit" className="w-full bg-[#df7b26] text-white font-semibold py-4 rounded-lg hover:bg-[#c96b1e] transition-colors text-lg">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <ZyloFooter />
        </>
    );
}
