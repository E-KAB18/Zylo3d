"use client";

import Header from '@/components/layout/Header';
import ZyloFooter from '@/components/layout/ZyloFooter';
import { Monitor, Layers, Printer } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ArrowUpRight, CheckCircle } from "react-feather";
import Link from "next/link";

const indications = [
    { name: "Digital Dentures",          slug: "digital-dentures",            image: "/images/indications/denture_base_large.png",  desc: "Fewer visits. Repeatable. Lower cost." },
    { name: "Surgical Guides",           slug: "surgical-guides",             image: "/images/indications/surgical_guide_large.png", desc: "Accuracy-first, standardized output." },
    { name: "Occlusal Splints",          slug: "occlusal-splints",            image: "/images/indications/night_guard_large.png",   desc: "Scan to splint in ~60 minutes." },
    { name: "Sports Guards",             slug: "sports-guards",               image: "/images/indications/sports_guard_large.png",  desc: "Custom colors + logos, same visit." },
    { name: "Provisional All-on-X",      slug: "provisional-all-on-x",        image: "/images/indications/all_on_x_large.png",      desc: "Surgery-day full-arch provisionals." },
    { name: "Pediatric Crown",           slug: "pediatric-crown",             image: "/images/indications/crown_large.png",         desc: "Same-visit, no crown drawer chaos." },
];

const cx = "max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3";

export default function HomePage() {
    return (
        <>
            <Header theme="header-light" />

            {/* ── HERO ─────────────────────────────────────────────── */}
            <div className="zylo-hero-bg banner-wrap relative flex items-center overflow-hidden min-h-[92vh] pt-24">
                {/* Decorative glows */}
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#df7b26]/10 blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

                <div className={`${cx} w-full relative z-10 py-16`}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">

                        {/* Left column */}
                        <div>
                            {/* Kicker */}
                            <div
                                className="inline-flex items-center gap-2 mb-6 py-1.5 px-4 rounded-full border border-[#df7b26]/40 bg-[#df7b26]/10 w-fit"
                                data-aos="fade-up"
                                data-aos-duration="300"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#df7b26] inline-block" />
                                <span className="text-[#df7b26] font-semibold text-xs tracking-widest uppercase">Workflow-forward manufacturing</span>
                            </div>

                            {/* H1 */}
                            <h1
                                className="text-gray-900 dark:text-white font-extrabold xl:text-[72px] lg:text-6xl md:text-5xl text-4xl mb-6 leading-[1.04] tracking-tight"
                                data-aos="fade-up"
                                data-aos-duration="400"
                                data-aos-delay="100"
                            >
                                Chairside output.<br />
                                <span style={{ color: "#df7b26" }}>Finally automated.</span>
                            </h1>

                            <p
                                className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed max-w-lg mb-8"
                                data-aos="fade-up"
                                data-aos-duration="400"
                                data-aos-delay="150"
                            >
                                Zylo turns digital dentistry into a standard workflow: AI design + one-click prep + automated print–wash–cure—so your team delivers consistent results in-house.
                            </p>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-3 mb-8" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
                                {["Validated workflows", "Training included", "Support plans"].map(badge => (
                                    <span key={badge} className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-[#df7b26]/25 bg-[#df7b26]/10 text-gray-700 dark:text-gray-200 font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#df7b26] flex-shrink-0" />
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-3 mb-10" data-aos="fade-up" data-aos-duration="400" data-aos-delay="250">
                                <Button
                                    label="Book a Demo"
                                    bgColor="bg-[#df7b26]"
                                    textColor="text-white"
                                    icon={<ArrowUpRight size={20} />}
                                    padding="py-4 px-7"
                                    href="/contact"
                                />
                                <Button
                                    label="Calculate ROI"
                                    bgColor="bg-gray-100 dark:bg-white/10"
                                    textColor="text-gray-700 dark:text-white"
                                    icon={<ArrowUpRight size={20} />}
                                    padding="py-4 px-7"
                                    href="/products/zylodent#roi"
                                    className="border border-gray-300 dark:border-white/15"
                                />
                            </div>

                            {/* Chips */}
                            <div className="flex flex-wrap gap-2">
                                {["AI design", "One-click prep", "Automated output", "Assistant-friendly"].map(chip => (
                                    <span key={chip} className="text-xs px-3 py-1.5 rounded-full border border-gray-300 dark:border-white/15 text-gray-500 dark:text-gray-500 bg-gray-50 dark:bg-white/5">{chip}</span>
                                ))}
                            </div>
                        </div>

                        {/* Right column — hero image */}
                        <div
                            className="relative"
                            data-aos="fade-left"
                            data-aos-duration="600"
                            data-aos-delay="200"
                        >
                            <div className="absolute -inset-4 bg-[#df7b26]/15 rounded-3xl blur-2xl" />
                            <Image
                                src="/images/about/dentpro.webp"
                                alt="ZyloDent 3D Printer"
                                width={700}
                                height={560}
                                className="relative w-full object-cover drop-shadow-2xl"
                                priority
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* ── PROBLEM ──────────────────────────────────────────── */}
            <section className="lg:py-24 py-12">
                <div className={cx}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
                        <div>
                            <h2 className="text-gray-900 dark:text-white font-bold text-3xl lg:text-4xl mb-4">Printing isn&apos;t hard. Workflow is.</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                                Clinics don&apos;t fail because of the printer. They fail because the workflow is fragmented—too many tools, too many handoffs, too much dependence on a &quot;champion user.&quot;
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "CAD → slicer → printer → wash → cure → variability",
                                    "Training burden lands on one person",
                                    "Remakes steal chair time",
                                    "Resin handling becomes a daily headache",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <span className="mt-2 w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className="rounded-2xl border border-dashed border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/5 min-h-[280px] flex items-center justify-center text-gray-400 dark:text-gray-500 text-center p-8"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-delay="200"
                        >
                            <div>
                                <p className="font-semibold text-base">DIAGRAM PLACEHOLDER</p>
                                <p className="text-sm mt-2">&quot;Fragmented workflow&quot; illustration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE ZYLO SYSTEM ──────────────────────────────────── */}
            <section className="lg:py-24 py-12 bg-gray-50 dark:bg-[#0f0f0f]">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white font-bold text-3xl lg:text-4xl mb-3">The Zylo system</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">One chain. Standard steps. Assistant-friendly.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-4">
                        {[
                            { icon: <Monitor size={36} strokeWidth={1.5} className="text-[#df7b26]" />, step: "1", title: "ZyloCAD", desc: "AI-assisted design—or cloud design services when you want it done-for-you.", delay: 0 },
                            { icon: <Layers size={36} strokeWidth={1.5} className="text-[#df7b26]" />, step: "2", title: "ZyloPrep", desc: "One-click file preparation with indication presets.", delay: 150 },
                            { icon: <Printer size={36} strokeWidth={1.5} className="text-[#df7b26]" />, step: "3", title: "ZyloDent", desc: "Automated print + wash + cure for consistent output.", delay: 300 },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="rounded-2xl p-8 bg-gradient-to-b from-[#B3D2FF] to-[#F2F7FF] dark:from-[#111] dark:to-[#1e1e1e] border border-transparent dark:border-white/10"
                                data-aos="fade-up"
                                data-aos-duration="400"
                                data-aos-delay={card.delay}
                            >
                                <div className="mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center shadow-sm">
                                        {card.icon}
                                    </div>
                                </div>
                                <h3 className="text-gray-900 dark:text-white font-semibold text-2xl mb-3">{card.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-lg">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">Fewer steps → fewer failures → predictable outcomes.</p>
                </div>
            </section>

            {/* ── SOCIAL PROOF / TRACTION ──────────────────────────── */}
            <section className="lg:py-24 py-12">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white font-bold text-3xl lg:text-4xl mb-3">Built in real practices</h2>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-10">
                        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] p-8">
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">KOL Quote</span>
                            <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg italic leading-relaxed">
                                &quot;[Insert 1–2 sentences focused on consistency / speed / delegation.]&quot;
                            </p>
                            <span className="inline-block mt-4 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-white/15 text-gray-500 dark:text-gray-400">KOL name</span>
                        </div>
                        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] p-8">
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Traction</span>
                            <ul className="mt-4 space-y-3">
                                {["[Success rate / reliability metric]", "[Cases run / clinics live]", "[Time saved / cost per case delta]"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <CheckCircle size={16} className="text-[#df7b26] mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] p-8 flex flex-col">
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Validation</span>
                            <div className="flex-1 flex items-center justify-center mt-4 rounded-xl border border-dashed border-gray-300 dark:border-white/15 min-h-[140px] text-gray-400 dark:text-gray-500 text-sm text-center p-4">
                                LOGOS PLACEHOLDER<br />Materials / workflow partners
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── INDICATIONS ──────────────────────────────────────── */}
            <section className="lg:py-24 py-12 bg-gray-50 dark:bg-[#0f0f0f]">
                <div className={cx}>
                    <div className="flex flex-wrap justify-between pb-12 gap-y-4 items-end">
                        <div>
                            <h2 className="text-gray-900 dark:text-white font-bold text-3xl lg:text-4xl mb-3">Start with your first indication</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl">Choose a workflow you&apos;ll run weekly—then expand.</p>
                        </div>
                        <Button href="/indications" label="View all indications" bgColor="bg-[#df7b26]" textColor="text-white" />
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {indications.map((ind, i) => (
                            <Link
                                key={ind.slug}
                                href={`/indications/${ind.slug}`}
                                className="group overflow-hidden rounded-xl relative aspect-[4/3] block bg-gray-100 dark:bg-[#111]"
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                                data-aos-duration="400"
                            >
                                <Image
                                    src={ind.image}
                                    alt={ind.name}
                                    fill
                                    className="object-contain transition-transform duration-700 group-hover:scale-105 p-4"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 p-5">
                                    <h3 className="text-white font-semibold text-lg">{ind.name}</h3>
                                    <p className="text-gray-300 text-sm mt-0.5">{ind.desc}</p>
                                    <span className="text-[#df7b26] text-sm font-medium flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn more <ArrowUpRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ROI ──────────────────────────────────────────────── */}
            <section className="lg:py-24 py-12">
                <div className={cx}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
                        <div>
                            <h2 className="text-gray-900 dark:text-white font-bold text-3xl lg:text-4xl mb-4">Make in-house output predictable</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                                See what happens when you reduce labor time and remake loops—while bringing turnaround in-house.
                            </p>
                            <Button href="/products/zylodent#roi" label="Calculate ROI" bgColor="bg-[#df7b26]" textColor="text-white" icon={<ArrowUpRight size={18} />} />
                        </div>
                        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] p-8">
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 block">What you&apos;ll see</span>
                            <ul className="space-y-0">
                                {["Cases / month", "Lab spend / month", "Staff time per case", "Output: cost per case, payback estimate, time saved"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-white/10 py-3 first:border-0 first:pt-0">
                                        <CheckCircle size={16} className="text-[#df7b26] flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MARKET INSIGHT ───────────────────────────────────── */}
            <section className="lg:py-16 py-10 bg-gray-50 dark:bg-[#0f0f0f]">
                <div className={cx}>
                    <div className="max-w-2xl">
                        <h2 className="text-gray-900 dark:text-white font-bold text-2xl lg:text-3xl mb-3">Inputs digitized. Outputs still stuck.</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Scanners are everywhere. Output adoption lags because workflow complexity doesn&apos;t scale. Automation is the unlock.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── GETTING STARTED ──────────────────────────────────── */}
            <section className="lg:py-24 py-12">
                <div className={cx}>
                    <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                        <div className="lg:col-span-1">
                            <h2 className="text-gray-900 dark:text-white font-bold text-3xl lg:text-4xl mb-3">Go live in weeks</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg">Standard steps to first clinical cases.</p>
                        </div>
                        {[
                            { step: "1", title: "Workflow call + ROI", desc: "Align indications, team roles, economics." },
                            { step: "2", title: "Install + onboarding", desc: "Remote or onsite training for your team." },
                            { step: "3", title: "First cases (guided)", desc: "Validated workflows + support on early runs." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] p-8"
                                data-aos="fade-up"
                                data-aos-duration="400"
                                data-aos-delay={i * 100}
                            >
                                <h3 className="text-gray-900 dark:text-white font-semibold text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] p-8">
                        <h3 className="text-gray-900 dark:text-white font-semibold text-xl mb-2">Ongoing support</h3>
                        <p className="text-gray-600 dark:text-gray-300">Training track · Knowledge base · Service plans · Remote diagnostics</p>
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ────────────────────────────────────────── */}
            <section className="lg:py-16 py-10 bg-[#df7b26]">
                <div className={`${cx} flex flex-col sm:flex-row items-center justify-between gap-6`}>
                    <div>
                        <h2 className="text-white font-bold text-2xl lg:text-3xl mb-2">See it on your cases</h2>
                        <p className="text-white/90">Book a demo or run ROI in minutes.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button href="/contact" label="Book a Demo" bgColor="bg-white" textColor="text-[#df7b26]" padding="py-4 px-8" />
                        <Button href="/products/zylodent#roi" label="Calculate ROI" bgColor="bg-transparent" textColor="text-white" padding="py-4 px-8" className="border-2 border-white hover:bg-white hover:text-[#df7b26] transition-all" />
                    </div>
                </div>
            </section>

            <ZyloFooter />
        </>
    );
}
