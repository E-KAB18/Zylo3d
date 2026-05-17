"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import productsData from "@/data/productsData";
import Header from "@/components/layout/Header";
import ZyloFooter from "@/components/layout/ZyloFooter";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle } from "react-feather";
import Button from "@/components/ui/Button";

function ROICalculator({ systemCost }: { systemCost: number }) {
    const [cases, setCases] = useState(20);
    const [labFee, setLabFee] = useState(280);
    const [inHouseCost, setInHouseCost] = useState(38);

    const monthlySavings = cases * (labFee - inHouseCost);
    const annualSavings = monthlySavings * 12;
    const paybackMonths = monthlySavings > 0 ? Math.ceil(systemCost / monthlySavings) : 0;

    return (
        <div className="bg-gray-50 dark:bg-[#1e1e1e] rounded-2xl p-8">
            <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-2">ROI Calculator</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">Estimate your savings by bringing production in-house.</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                    { label: "Cases per month", value: cases, setter: setCases, min: 1, max: 200, step: 1 },
                    { label: "Lab fee per case ($)", value: labFee, setter: setLabFee, min: 50, max: 1000, step: 10 },
                    { label: "In-house cost per case ($)", value: inHouseCost, setter: setInHouseCost, min: 5, max: 200, step: 1 },
                ].map((input) => (
                    <div key={input.label}>
                        <label className="text-gray-700 dark:text-gray-300 text-sm font-medium block mb-2">{input.label}</label>
                        <input
                            type="range"
                            min={input.min}
                            max={input.max}
                            step={input.step}
                            value={input.value}
                            onChange={(e) => input.setter(Number(e.target.value))}
                            className="w-full accent-[#df7b26]"
                        />
                        <span className="text-[#df7b26] font-bold text-lg">{input.value}</span>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { label: "Monthly Savings", value: `$${monthlySavings.toLocaleString()}` },
                    { label: "Annual Savings", value: `$${annualSavings.toLocaleString()}` },
                    { label: "Payback Period", value: paybackMonths > 0 ? `${paybackMonths} months` : "—" },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white dark:bg-[#111111] rounded-xl p-5 text-center border border-gray-200 dark:border-gray-700">
                        <p className="text-[#df7b26] text-3xl font-bold mb-1">{stat.value}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const product = productsData.find((p) => p.slug === slug);
    if (!product) notFound();

    const systemCost = parseInt(product.price.replace(/[^0-9]/g, "")) || 8900;

    const faq = [
        { q: `What indications does ${product.name} support?`, a: `${product.name} supports ${product.indications.length} validated indications including ${product.indications.slice(0, 3).map(i => i.name).join(", ")}, and more.` },
        { q: "Does it come with software?", a: `${product.name} integrates natively with ZyloCAD design software and ZyloPrep for one-click file slicing. ${product.compatibilityNote}` },
        { q: "What materials are validated?", a: "All Zylo3D validated dental resins are pre-profiled in the system. No manual calibration required." },
        { q: "How do I get support?", a: "Zylo3D provides onboarding, training, and ongoing clinical guidance. Contact our team to get started." },
    ];

    return (
        <>
            <Header theme="header-light" />

            {/* Hero */}
            <section className="zylo-hero-bg relative overflow-hidden lg:pt-40 pt-28 pb-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-3 py-1 bg-[#df7b26]/20 text-[#df7b26] text-sm font-semibold rounded-full mb-4">
                                {product.price}
                            </span>
                            <h1 className="text-gray-900 dark:text-white font-extrabold text-5xl lg:text-6xl mb-4" data-aos="fade-up" data-aos-duration="400">
                                {product.name}
                            </h1>
                            <p className="text-[#df7b26] text-xl font-medium mb-4">{product.tagline}</p>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">{product.description}</p>
                            <div className="flex flex-wrap gap-3">
                                <Button href="/contact" label="Request a Quote" bgColor="bg-[#df7b26]" textColor="text-white" padding="py-4 px-6" icon={<ArrowUpRight size={18} />} />
                                <Button href="/contact" label="Schedule a Demo" bgColor="bg-gray-100 dark:bg-white/10" textColor="text-gray-700 dark:text-white" padding="py-4 px-6" className="border border-gray-300 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 transition" />
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="500">
                            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10">
                                <Image src={product.image} alt={product.name} width={600} height={400} className="w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KPI Strip */}
            <section className="py-10 bg-[#df7b26]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-white font-bold text-4xl">{product.indications.length}</p>
                            <p className="text-white/80 text-sm mt-1">Supported Indications</p>
                        </div>
                        <div>
                            <p className="text-white font-bold text-4xl">{product.specs[0]?.value}</p>
                            <p className="text-white/80 text-sm mt-1">Build Volume</p>
                        </div>
                        <div>
                            <p className="text-white font-bold text-4xl">{product.specs[1]?.value}</p>
                            <p className="text-white/80 text-sm mt-1">XY Resolution</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="lg:py-24 py-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-12 text-center" data-aos="fade-up" data-aos-duration="400">
                        Built for your workflow
                    </h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {product.features.map((f, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111]" data-aos="fade-up" data-aos-delay={i * 60} data-aos-duration="400">
                                <CheckCircle size={22} className="text-[#df7b26] flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700 dark:text-gray-300">{f}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Indications Grid */}
            <section className="lg:py-24 py-16 bg-gray-50 dark:bg-[#1e1e1e]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-4 text-center">Supported Indications</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-center mb-12">Validated workflow times for each indication.</p>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
                        {product.indications.map((ind, i) => (
                            <div key={i} className="bg-white dark:bg-[#111111] rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center" data-aos="fade-up" data-aos-delay={i * 60} data-aos-duration="400">
                                <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-3">{ind.name}</h4>
                                <div className="flex justify-center gap-6">
                                    <div>
                                        <p className="text-[#df7b26] text-2xl font-bold">{ind.minutes}</p>
                                        <p className="text-gray-400 text-xs">minutes</p>
                                    </div>
                                    <div>
                                        <p className="text-[#df7b26] text-2xl font-bold">{ind.clicks}</p>
                                        <p className="text-gray-400 text-xs">clicks</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI Calculator */}
            <section className="lg:py-24 py-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <ROICalculator systemCost={systemCost} />
                </div>
            </section>

            {/* Specs Table */}
            <section className="lg:py-24 py-16 bg-gray-50 dark:bg-[#1e1e1e]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <h2 className="text-gray-900 dark:text-white text-3xl font-bold mb-10 text-center">Technical Specifications</h2>
                    <div className="max-w-2xl mx-auto bg-white dark:bg-[#111111] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                        {product.specs.map((spec, i) => (
                            <div key={i} className={`flex justify-between px-6 py-4 ${i % 2 === 0 ? "bg-gray-50 dark:bg-[#1e1e1e]" : "bg-white dark:bg-[#111111]"}`}>
                                <span className="text-gray-500 dark:text-gray-400 text-sm">{spec.label}</span>
                                <span className="text-gray-900 dark:text-white font-medium text-sm text-right">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="lg:py-24 py-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 max-w-3xl">
                    <h2 className="text-gray-900 dark:text-white text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {faq.map((item, i) => (
                            <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-[#111111]">
                                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">{item.q}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="lg:py-20 py-14 bg-[#df7b26]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 text-center">
                    <h2 className="text-white font-bold text-3xl lg:text-4xl mb-4">
                        Ready to add {product.name} to your lab?
                    </h2>
                    <p className="text-white/90 text-lg mb-8">{product.price} · Contact our team for a custom quote.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#df7b26] font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">
                            Request a Quote <ArrowUpRight size={18} />
                        </Link>
                        <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#df7b26] transition-colors">
                            Schedule a Demo
                        </Link>
                    </div>
                </div>
            </section>

            <ZyloFooter />
        </>
    );
}
