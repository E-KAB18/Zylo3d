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

/* ── ROI Calculator ─────────────────────────────────── */
function ROICalculator({ systemCost }: { systemCost: number }) {
    const [casesPerWeek, setCasesPerWeek] = useState(25);
    const [labCost, setLabCost] = useState(65);
    const [inHouseCost, setInHouseCost] = useState(12);
    const platformCost = 650;

    const casesPerMonth = casesPerWeek * 4.33;
    const monthlySavings = (labCost - inHouseCost) * casesPerMonth - platformCost;
    const annualSavings = monthlySavings * 12;
    const paybackMonths = monthlySavings > 0 ? Math.ceil(systemCost / monthlySavings) : 0;
    const fmt = (n: number) => (n > 0 ? `$${Math.round(n).toLocaleString()}` : "—");

    return (
        <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl p-8">
            <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-1">ROI Calculator</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                Estimate your savings by bringing production in-house.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                    { label: "Cases per week", value: casesPerWeek, setter: setCasesPerWeek, min: 1, max: 100, step: 1 },
                    { label: "Avg. lab cost per case ($)", value: labCost, setter: setLabCost, min: 20, max: 500, step: 5 },
                    { label: "In-house variable cost per case ($)", value: inHouseCost, setter: setInHouseCost, min: 5, max: 100, step: 1 },
                ].map((inp) => (
                    <div key={inp.label}>
                        <label className="text-gray-700 dark:text-gray-300 text-sm font-medium block mb-2">{inp.label}</label>
                        <input
                            type="range"
                            min={inp.min}
                            max={inp.max}
                            step={inp.step}
                            value={inp.value}
                            onChange={(e) => inp.setter(Number(e.target.value))}
                            className="w-full accent-[#df7b26]"
                        />
                        <span className="text-[#df7b26] font-bold text-lg">{inp.value}</span>
                    </div>
                ))}
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { label: "Monthly Savings", value: fmt(monthlySavings) },
                    { label: "Annual Profit Lift", value: fmt(annualSavings) },
                    { label: "Payback Period", value: paybackMonths > 0 ? `${paybackMonths} months` : "—" },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white dark:bg-[#111111] rounded-xl p-5 text-center border border-gray-200 dark:border-gray-700">
                        <p className="text-[#df7b26] text-3xl font-bold mb-1">{stat.value}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>
            <p className="text-gray-400 dark:text-gray-600 text-xs mt-5">
                Assumes ${platformCost}/mo platform cost. Hardware payback calculated against monthly savings.
            </p>
        </div>
    );
}

/* ── Page ───────────────────────────────────────────── */
export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const product = productsData.find((p) => p.slug === slug);
    if (!product) notFound();

    const systemCost = parseInt(product.price.replace(/[^0-9]/g, "")) || 8900;
    const isZyloDent = slug === "zylodent";

    const indicationDesc: Record<string, string> = {
        "Diagnostic Model": "Ortho & restorative models with fast, consistent turnarounds.",
        "Single Unit Crown": "Chairside restorations with predictable sizing and delivery.",
        "Denture Base": "Fast iterations to align esthetics and occlusion.",
        "Dental Splint": "Same-day splints and night guards with consistent fits.",
        "Sports Guard": "Custom output with efficient batch production.",
        "Surgical Guide": "Guides with validated protocols and accuracy reporting.",
        "Implant Guide": "Implant surgical guides with validated accuracy protocols.",
    };

    const faq = [
        {
            q: "What indications are validated today?",
            a: `${product.name} supports ${product.indications.length} validated indications including ${product.indications.slice(0, 3).map((i) => i.name).join(", ")}, and more. Each indication comes with resin mapping and accuracy reporting.`,
        },
        {
            q: "How long does it take to train an assistant?",
            a: "Onboarding includes an install and validation call, followed by assistant training covering standard operating procedures. Most teams are running independently within the first 10 guided cases.",
        },
        {
            q: `What scanners and CAD software does ${product.name} support?`,
            a: `${product.name} accepts open STL and PLY file inputs from any intraoral scanner. ${product.compatibilityNote}`,
        },
        {
            q: "What does maintenance look like?",
            a: "Routine maintenance involves quick weekly and monthly checklists. Consumables tracking is managed through your Zylo3D account. Estimated hands-on time per check is minimal.",
        },
        {
            q: "What happens if a job fails?",
            a: "The system logs every job — resin lot, presets, and timestamps — for QA. In the event of a failure, alerts are generated with diagnostic information. Our support team provides remote diagnosis and fast parts fulfillment.",
        },
    ];

    const cx = "max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3";

    return (
        <>
            <Header theme="header-light" />

            {/* ── STICKY SUBNAV ─────────────────────────────── */}
            <div className="sticky top-16 z-20 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
                <div className={cx}>
                    <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
                        {[
                            { label: "Overview",    href: "#overview" },
                            { label: "Workflow",    href: "#workflow" },
                            { label: "Indications", href: "#indications" },
                            { label: "Materials",   href: "#materials" },
                            { label: "Software",    href: "#software" },
                            { label: "ROI",         href: "#roi" },
                            { label: "Compare",     href: "#comparison" },
                            { label: "Specs",       href: "#specs" },
                            { label: "Support",     href: "#service" },
                            { label: "FAQ",         href: "#faq" },
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="whitespace-nowrap px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-[#df7b26]/40 text-sm font-medium transition-all"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── HERO ──────────────────────────────────────── */}
            <section className="zylo-hero-bg relative overflow-hidden lg:pt-32 pt-24 pb-16" id="overview">
                <div className={cx}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-3 py-1 bg-[#df7b26]/15 text-[#df7b26] text-sm font-semibold rounded-full mb-4 uppercase tracking-wide">
                                {isZyloDent ? "All-in-one automated manufacturing" : product.tagline}
                            </span>
                            <h1 className="text-gray-900 dark:text-white font-extrabold text-5xl lg:text-6xl mb-4" data-aos="fade-up" data-aos-duration="400">
                                {product.name}
                            </h1>
                            {isZyloDent && (
                                <p className="text-gray-700 dark:text-gray-200 text-xl mb-3 leading-relaxed">
                                    Automated <strong className="text-gray-900 dark:text-white">print + wash + cure</strong> in one unit — built for delegation and same-visit delivery.
                                </p>
                            )}
                            <p className="text-gray-500 dark:text-gray-400 text-base mb-8 leading-relaxed">{product.description}</p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                <Button href="/contact" label="Book a Demo" bgColor="bg-[#df7b26]" textColor="text-white" padding="py-4 px-6" icon={<ArrowUpRight size={18} />} />
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition">
                                    Request a Sample Part
                                </Link>
                                <Link href="#specs" className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition">
                                    Download Spec Sheet
                                </Link>
                            </div>

                            {/* Proof pills */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {["All-in-one automation", "Predictable outcomes", "Validated materials", "Remote monitoring"].map((pill) => (
                                    <span key={pill} className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#df7b26]/30 bg-[#df7b26]/5 text-gray-700 dark:text-gray-300 text-sm font-medium">
                                        <CheckCircle size={13} className="text-[#df7b26]" />
                                        {pill}
                                    </span>
                                ))}
                            </div>

                            {/* Compatibility strip */}
                            <div className="pt-5 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-xs text-gray-400 dark:text-gray-500 mb-3 uppercase tracking-wider font-medium">Compatible with</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Open input (STL / PLY)", "Any intraoral scanner", "ZyloCAD · ZyloPrep"].map((chip) => (
                                        <span key={chip} className="px-3 py-1.5 border border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-gray-500 dark:text-gray-400 text-xs font-mono">
                                            {chip}
                                        </span>
                                    ))}
                                </div>
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

            {/* ── WHY ZYLODENT ─────────────────────────────── */}
            {isZyloDent && (
                <section className="lg:py-16 py-10 border-t border-gray-100 dark:border-gray-800">
                    <div className={cx}>
                        <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-8 text-center">Why ZyloDent</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Same-visit output",       desc: "Reduce reschedules and tighten the loop from scan to seat." },
                                { title: "Delegatable workflow",    desc: "Standard steps assistants can run — not champion-only workflows." },
                                { title: "Predictable throughput",  desc: "Consistent daily capacity without juggling multiple devices." },
                            ].map((tile, i) => (
                                <div key={i} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111]" data-aos="fade-up" data-aos-delay={i * 80} data-aos-duration="400">
                                    <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">{tile.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{tile.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── PERFORMANCE SNAPSHOT ─────────────────────── */}
            <section className="lg:py-16 py-10 bg-gray-50 dark:bg-[#1a1a1a]">
                <div className={cx}>
                    <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-2 text-center">Performance Snapshot</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-8">Validated numbers across Zylo3D platform installations.</p>
                    <div className="grid md:grid-cols-4 gap-5">
                        {[
                            { kicker: "Throughput",    num: `${product.indications.length}+ cases/day`, label: "Typical mixed indication workflow" },
                            { kicker: "Accuracy",      num: `±${product.specs.find((s) => s.label === "XY Resolution")?.value ?? "50 µm"}`, label: "Validated across platform" },
                            { kicker: "Reliability",   num: "99%+ success",  label: "Measured over platform installs" },
                            { kicker: "Hands-on time", num: "< 5 min/job",   label: "Staff time saved via automation" },
                        ].map((kpi, i) => (
                            <div key={i} className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111]" data-aos="fade-up" data-aos-delay={i * 80} data-aos-duration="400">
                                <p className="text-[#df7b26] text-xs font-bold uppercase tracking-widest mb-2">{kpi.kicker}</p>
                                <p className="text-gray-900 dark:text-white text-2xl font-extrabold mb-1">{kpi.num}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs">{kpi.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── THE ZYLODENT DIFFERENCE ───────────────────── */}
            {isZyloDent && (
                <section className="lg:py-24 py-16">
                    <div className={cx}>
                        <div className="text-center mb-12">
                            <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-3">The ZyloDent Difference</h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">One device replaces the printer + wash + cure stack — fewer handoffs, less training burden, more consistent outcomes.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111]">
                                <span className="inline-block px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 text-sm font-medium mb-6">Typical setup</span>
                                <ul className="space-y-3">
                                    {["Design software", "Slicer", "Printer", "Wash unit", "Cure unit", "Manual variability + training burden"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm">
                                            <span className="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 rounded-2xl border border-[#df7b26]/30 bg-[#df7b26]/5">
                                <span className="inline-block px-3 py-1 rounded-full border border-[#df7b26]/40 bg-[#df7b26]/10 text-[#df7b26] text-sm font-medium mb-6">Zylo setup</span>
                                <ul className="space-y-3">
                                    {[
                                        "ZyloCAD — AI-assisted design",
                                        "ZyloPrep — one-click file prep",
                                        "ZyloDent — print + wash + cure (automated)",
                                        "Consistent outcomes across all assistants",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-800 dark:text-gray-200 text-sm font-medium">
                                            <CheckCircle size={18} className="text-[#df7b26] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ── WORKFLOW ──────────────────────────────────── */}
            <section className="lg:py-24 py-16 bg-gray-50 dark:bg-[#1a1a1a]" id="workflow">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-3">Assistant-Friendly Workflow</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Standard steps your team can follow, every time.</p>
                    </div>
                    <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-[#111111] h-56 flex items-center justify-center mb-12">
                        <div className="text-center">
                            <p className="text-gray-400 dark:text-gray-500 font-medium">Workflow video placeholder</p>
                            <p className="text-gray-400 dark:text-gray-600 text-sm mt-1">Scan → Design → One-click prep → {product.name} → Finish</p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
                        {[
                            { n: "1", title: "Scan",               desc: "Quick capture for the indication." },
                            { n: "2", title: "Design",             desc: "ZyloCAD or partner CAD workflows." },
                            { n: "3", title: "One-click Prep",     desc: "ZyloPrep reduces guesswork." },
                            { n: "4", title: `${product.name} runs it`, desc: isZyloDent ? "Automated print + wash + cure." : "High-precision automated printing." },
                            { n: "5", title: "Finish + deliver",   desc: "Designed for same-visit delivery." },
                        ].map((step, i) => (
                            <div key={i} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111]" data-aos="fade-up" data-aos-delay={i * 80} data-aos-duration="400">
                                <div className="w-9 h-9 rounded-xl bg-[#df7b26]/15 border border-[#df7b26]/30 flex items-center justify-center text-[#df7b26] font-extrabold text-sm mb-4">{step.n}</div>
                                <h4 className="text-gray-900 dark:text-white font-bold text-base mb-2">{step.title}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INDICATIONS ───────────────────────────────── */}
            <section className="lg:py-24 py-16" id="indications">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-3">What you can make</h2>
                        <p className="text-gray-500 dark:text-gray-400">Validated workflows for every indication your lab needs.</p>
                    </div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
                        {product.indications.map((ind, i) => (
                            <div key={i} className="bg-white dark:bg-[#111111] rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden" data-aos="fade-up" data-aos-delay={i * 60} data-aos-duration="400">
                                <div className="h-24 bg-gray-100 dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                    <span className="text-gray-400 dark:text-gray-600 text-xs font-mono">Image placeholder</span>
                                </div>
                                <div className="p-5">
                                    <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-2">{ind.name}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{indicationDesc[ind.name] ?? "Validated protocol with consistent outcomes."}</p>
                                    <div className="flex gap-4 text-xs">
                                        <span className="text-gray-400 dark:text-gray-500"><span className="text-[#df7b26] font-bold">{ind.minutes} min</span> cycle time</span>
                                        <span className="text-gray-400 dark:text-gray-500"><span className="text-[#df7b26] font-bold">{ind.clicks} clicks</span> to start</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MATERIALS ─────────────────────────────────── */}
            <section className="lg:py-24 py-16 bg-gray-50 dark:bg-[#1a1a1a]" id="materials">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-3">Validated Materials + Guided Presets</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Validated-first as the default for repeatability — every resin ships with a tested protocol.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-700">
                            <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-2">Validated material portfolio</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Partners include BEGO, Pro3dure, Keystone, and Pac-Dent — with indication mapping and protocol PDFs.</p>
                            <div className="grid grid-cols-3 gap-3">
                                {["BEGO", "Pro3dure", "Keystone", "Pac-Dent", "Open mode", "Protocol PDFs"].map((m) => (
                                    <div key={m} className="h-16 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 dark:text-gray-500 text-xs font-mono text-center px-2">{m}</div>
                                ))}
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-700">
                            <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-2">Preset automation</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Every resin ships with validated wash and cure profiles — no manual calibration needed.</p>
                            <ul className="space-y-3">
                                {["Wash profiles per resin", "Cure profiles per resin", "Job presets to reduce variability", "Traceability — lot + settings logged"].map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                                        <CheckCircle size={16} className="text-[#df7b26] flex-shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── RELIABILITY + QA ──────────────────────────── */}
            <section className="lg:py-24 py-16">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-3">Reliability + QA</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Sensors, calibration, remote monitoring, and job logs — with clear answers for what happens if something goes wrong.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Closed-loop checks",  desc: "Sensors and automated checks run every job to keep outcomes consistent and flag deviations before they become failures." },
                            { title: "Remote monitoring",   desc: "Queue control, push notifications, and status visibility from your Zylo3D dashboard. Keep production moving without hovering." },
                            { title: "Traceability",        desc: "Every job logs the resin lot, preset used, and timestamps for full QA documentation and compliance support." },
                        ].map((tile, i) => (
                            <div key={i} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111]" data-aos="fade-up" data-aos-delay={i * 80} data-aos-duration="400">
                                <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-3">{tile.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{tile.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SOFTWARE STACK ────────────────────────────── */}
            <section className="lg:py-24 py-16 bg-gray-50 dark:bg-[#1a1a1a]" id="software">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-3">Software Stack</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Built to standardize outcomes across every team member and every shift.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "ZyloCAD",   badge: "Design",     desc: "AI-assisted workflows. Standardize design outcomes across your team regardless of experience level." },
                            { name: "ZyloPrep",  badge: "Slicing",    desc: "One-click file preparation that eliminates slicing guesswork and validates print parameters automatically." },
                            { name: "ZyloCloud", badge: "Management", desc: "Job queue, validated presets, analytics, and remote monitoring — all from your Zylo3D account." },
                        ].map((sw, i) => (
                            <div key={i} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111]" data-aos="fade-up" data-aos-delay={i * 80} data-aos-duration="400">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-gray-900 dark:text-white font-bold text-xl">{sw.name}</h3>
                                    <span className="px-2 py-0.5 rounded bg-[#df7b26]/10 text-[#df7b26] text-xs font-semibold">{sw.badge}</span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">{sw.desc}</p>
                                <div className="h-28 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 dark:text-gray-600 text-xs font-mono">
                                    Screenshot placeholder
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ROI CALCULATOR ────────────────────────────── */}
            <section className="lg:py-24 py-16" id="roi">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-3">ROI Calculator</h2>
                        <p className="text-gray-500 dark:text-gray-400">Estimate your savings by bringing production in-house.</p>
                    </div>
                    <ROICalculator systemCost={systemCost} />
                </div>
            </section>

            {/* ── COMPARISON TABLE ──────────────────────────── */}
            <section className="lg:py-24 py-16 bg-gray-50 dark:bg-[#1a1a1a]" id="comparison">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-3">Compare</h2>
                        <p className="text-gray-500 dark:text-gray-400">{product.name} vs. separate device stack vs. outsourced lab.</p>
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
                        <table className="w-full min-w-[640px] bg-white dark:bg-[#111111]">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1a1a1a]">
                                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">Capability</th>
                                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#df7b26]">{product.name} (all-in-one)</th>
                                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">Separate stack</th>
                                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">Outsourced lab</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { cap: "Steps & handoffs",           zylo: "Fewer — integrated automation",       sep: "Multiple devices + transfers",          out: "No devices, but shipping delays" },
                                    { cap: "Hands-on time",              zylo: "Lowest — assistant-friendly",         sep: "Higher (manual steps)",                 out: "Low in-house, high coordination" },
                                    { cap: "Training burden",            zylo: "Standard workflow",                   sep: "Varies by device + staff",              out: "Minimal" },
                                    { cap: "Same-visit feasibility",     zylo: "High",                                sep: "Medium (depends on staff)",             out: "Low (days)" },
                                    { cap: "Consistency across shifts",  zylo: "Preset-driven",                       sep: "Operator-dependent",                    out: "Lab-dependent" },
                                    { cap: "Cost per case",              zylo: "Lower variable cost",                 sep: "Lower than lab, higher overhead",       out: "Highest, plus delays" },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b last:border-0 border-gray-100 dark:border-gray-800">
                                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400 text-sm font-medium">{row.cap}</td>
                                        <td className="px-6 py-4 text-gray-900 dark:text-white text-sm font-semibold">{row.zylo}</td>
                                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{row.sep}</td>
                                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{row.out}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── TECH SPECS ────────────────────────────────── */}
            <section className="lg:py-24 py-16" id="specs">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-3">Technical Specifications</h2>
                        <p className="text-gray-500 dark:text-gray-400">{isZyloDent ? "Core printing + integrated wash and cure." : "Full system specifications."}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white dark:bg-[#111111] rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                                <h3 className="text-gray-900 dark:text-white font-semibold">{isZyloDent ? "Core printing" : "Specifications"}</h3>
                            </div>
                            {product.specs.slice(0, Math.ceil(product.specs.length / 2)).map((spec, i) => (
                                <div key={i} className={`flex justify-between px-6 py-3 ${i % 2 === 0 ? "bg-gray-50 dark:bg-[#1a1a1a]" : "bg-white dark:bg-[#111111]"}`}>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">{spec.label}</span>
                                    <span className="text-gray-900 dark:text-white font-medium text-sm">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white dark:bg-[#111111] rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                                <h3 className="text-gray-900 dark:text-white font-semibold">{isZyloDent ? "Wash + Cure (integrated)" : "Additional specs"}</h3>
                            </div>
                            {product.specs.slice(Math.ceil(product.specs.length / 2)).map((spec, i) => (
                                <div key={i} className={`flex justify-between px-6 py-3 ${i % 2 === 0 ? "bg-gray-50 dark:bg-[#1a1a1a]" : "bg-white dark:bg-[#111111]"}`}>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">{spec.label}</span>
                                    <span className="text-gray-900 dark:text-white font-medium text-sm">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-2xl border border-[#df7b26]/30 bg-[#df7b26]/5 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">Want the full spec sheet?</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Contact us for a PDF download and comparison chart.</p>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                            <Button href="/contact" label="Request a Quote" bgColor="bg-[#df7b26]" textColor="text-white" padding="py-3 px-5" icon={<ArrowUpRight size={16} />} />
                            <Link href="#service" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition">
                                See service plans
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED + GETTING STARTED ────────── */}
            <section className="lg:py-24 py-16 bg-gray-50 dark:bg-[#1a1a1a]">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-3">What&#39;s included + Getting started</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to hit the ground running — hardware, onboarding, and ongoing support.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-700">
                            <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-5">In the box</h3>
                            <ul className="space-y-3">
                                {[`${product.name} unit`, "Starter kit + consumables", "Calibration & maintenance tools", "Quick-start guide"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                                        <CheckCircle size={16} className="text-[#df7b26] flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-700">
                            <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-5">Onboarding</h3>
                            <ul className="space-y-3">
                                {["Install + validation call", "Assistant training session", "First 10 cases guided by Zylo3D team", "Ongoing success check-ins"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                                        <CheckCircle size={16} className="text-[#df7b26] flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICE & SUPPORT ─────────────────────────── */}
            <section className="lg:py-24 py-16" id="service">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-3">Service & Support</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Warranty, service plans, replacement parts logistics, and support SLA.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Warranty + service plans", desc: "Standard warranty included. Extended service plans available for full coverage on parts, labor, and preventive maintenance." },
                            { title: "Customer success",         desc: "Onboarding, protocol guidance, enablement resources, and ongoing support to help your team grow throughput." },
                            { title: "Fast support",             desc: "Live chat, remote diagnostics, and fast parts fulfillment. If something goes wrong, we'll have you back up quickly." },
                        ].map((tile, i) => (
                            <div key={i} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111]" data-aos="fade-up" data-aos-delay={i * 80} data-aos-duration="400">
                                <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-3">{tile.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{tile.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SOCIAL PROOF ──────────────────────────────── */}
            <section className="lg:py-24 py-16 bg-gray-50 dark:bg-[#1a1a1a]">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-bold mb-3">Clinics + KOL proof</h2>
                        <p className="text-gray-500 dark:text-gray-400">Real outcomes from labs and clinics using {product.name}.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-[#111111] h-64 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-gray-400 dark:text-gray-500 font-medium">KOL video placeholder</p>
                                <p className="text-gray-400 dark:text-gray-600 text-sm mt-1">Embed testimonial video here</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[
                                `"We cut hands-on time significantly and standardized outputs across assistants." — Dr. Name`,
                                `"Same-visit delivery improved patient satisfaction and reduced remakes." — Dr. Name`,
                                `"The integrated workflow eliminated device juggling." — Lab / Clinic`,
                            ].map((quote, i) => (
                                <div key={i} className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111]">
                                    <p className="text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed">{quote}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────── */}
            <section className="lg:py-24 py-16" id="faq">
                <div className="max-w-3xl mx-auto px-3 sm:px-6">
                    <h2 className="text-gray-900 dark:text-white text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faq.map((item, i) => (
                            <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-[#111111]">
                                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">{item.q}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ─────────────────────────────────── */}
            <section className="lg:py-20 py-14">
                <div className={cx}>
                    <div className="rounded-2xl border border-[#df7b26]/30 bg-gradient-to-br from-[#df7b26]/10 to-transparent px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h2 className="text-gray-900 dark:text-white font-bold text-2xl lg:text-3xl mb-2">
                                Ready to run same-visit manufacturing without the complexity?
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">Book a demo or request a sample part — we&#39;ll recommend the best starting indication.</p>
                        </div>
                        <div className="flex gap-3 flex-wrap flex-shrink-0">
                            <Button href="/contact" label="Book a Demo" bgColor="bg-[#df7b26]" textColor="text-white" padding="py-4 px-6" icon={<ArrowUpRight size={18} />} />
                            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition">
                                Request a Sample Part
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ZyloFooter />
        </>
    );
}
