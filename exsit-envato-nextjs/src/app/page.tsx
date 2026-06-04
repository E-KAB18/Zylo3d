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
            <div className="zylo-hero-bg banner-wrap relative flex items-center overflow-hidden min-h-screen pt-24">
                {/* Decorative glow */}
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#df7b26]/10 blur-[140px] pointer-events-none" />

                <div className={`${cx} w-full relative z-10 py-16`}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">

                        {/* Left column */}
                        <div>
                            {/* Kicker */}
                            <div
                                className="inline-flex items-center gap-2 mb-4 py-1.5 px-4 rounded-full border border-[#df7b26]/40 bg-[#df7b26]/10 w-fit"
                                data-aos="fade-up"
                                data-aos-duration="300"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#df7b26] inline-block" />
                                <span className="text-[#df7b26] font-semibold text-xs tracking-widest uppercase">Workflow-forward manufacturing</span>
                            </div>

                            {/* H1 */}
                            <h1
                                className="text-gray-900 dark:text-white font-extrabold xl:text-[40px] lg:text-4xl md:text-3xl text-3xl mb-4 leading-[1.2] tracking-tight"
                                data-aos="fade-up"
                                data-aos-duration="400"
                                data-aos-delay="100"
                            >
                                Zylo helps dentists deliver the care they want to be known for: <span style={{ color: "#df7b26" }}>high-quality, same-visit, and repeatable.</span>
                            </h1>

                            <p
                                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-lg mb-6"
                                data-aos="fade-up"
                                data-aos-duration="400"
                                data-aos-delay="150"
                            >
                                Zylo turns digital dentistry into a standard workflow: AI design + one-click prep + automated print-wash-cure, so your team delivers consistent results in-house.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-3 mb-6" data-aos="fade-up" data-aos-duration="400" data-aos-delay="250">
                                <Button
                                    label="Book a Demo"
                                    bgColor="bg-[#df7b26]"
                                    textColor="text-white"
                                    icon={<ArrowUpRight size={20} />}
                                    padding="py-4 px-7"
                                    href="/contact?action=book-demo"
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

                        {/* Right column - hero video */}
                        <div
                            className="relative"
                            data-aos="fade-left"
                            data-aos-duration="600"
                            data-aos-delay="200"
                        >
                            <div className="absolute -inset-4 bg-[#df7b26]/10 rounded-3xl blur-2xl" />
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111] aspect-video">
                                <video
                                    src="/videos/hero.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── PROBLEM ──────────────────────────────────────────── */}
            <section className="lg:py-24 py-12">
                <div className={cx}>
                    <div className="max-w-2xl mb-10">
                        <h2 className="text-gray-900 dark:text-white font-bold text-3xl lg:text-4xl mb-4">Printing isn&apos;t hard. Workflow is.</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                            Scanners made capture easy. But production still depends on disconnected tools, manual steps, and team members with specialized knowledge.
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
                    <div className="relative w-full" data-aos="fade-up" data-aos-duration="500">
                        <Image
                            src="/images/workflow-diagram.png"
                            alt="Fragmented workflow diagram"
                            width={1200}
                            height={600}
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* ── THE ZYLO SYSTEM ──────────────────────────────────── */}
            <section className="lg:py-24 py-12 bg-gray-50 dark:bg-[#0f0f0f]">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white font-bold text-3xl lg:text-4xl mb-3">One automated workflow from design to delivery.</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">Fewer steps → deliver same-day → predictable outcomes.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-4">
                        {/* ZyloCAD */}
                        <div className="relative rounded-2xl p-8 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 flex flex-col min-h-[220px]" data-aos="fade-up" data-aos-duration="400" data-aos-delay={0}>
                            <h3 className="text-gray-900 dark:text-white font-semibold text-2xl mb-3">ZyloCAD</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-base">AI-assisted design, or cloud design services when you want it done-for-you.</p>
                            <div className="absolute -bottom-3 -right-3 drop-shadow-xl">
                                <Image src="/images/logo/zylocad-logo.png" alt="ZyloCAD" width={100} height={100} className="rounded-2xl" />
                            </div>
                        </div>
                        {/* ZyloPrep */}
                        <div className="relative rounded-2xl p-8 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 flex flex-col min-h-[220px]" data-aos="fade-up" data-aos-duration="400" data-aos-delay={150}>
                            <h3 className="text-gray-900 dark:text-white font-semibold text-2xl mb-3">ZyloPrep</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-base">One-click file preparation with indication presets.</p>
                            <div className="absolute -bottom-3 -right-3 drop-shadow-xl">
                                <Image src="/images/logo/zyloprep-logo.png" alt="ZyloPrep" width={100} height={100} className="rounded-2xl" />
                            </div>
                        </div>
                        {/* ZyloDent — product photo as decorative right-side image */}
                        <div className="relative rounded-2xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 flex flex-col min-h-[220px] overflow-hidden" data-aos="fade-up" data-aos-duration="400" data-aos-delay={300}>
                            <div className="p-8 pr-[48%]">
                                <h3 className="text-gray-900 dark:text-white font-semibold text-2xl mb-3">ZyloDent</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-base">Automated print + wash + cure for consistent output.</p>
                            </div>
                            <div className="absolute top-0 right-0 h-full w-[52%]">
                                <Image src="/images/logo/zylodent-logo4.png" alt="ZyloDent" fill className="object-cover object-center" sizes="20vw" />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/90 dark:from-[#111]/90 via-transparent to-transparent" />
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
                            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl">Choose a workflow you&apos;ll run weekly, then expand.</p>
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

            {/* ── SOCIAL PROOF / TRACTION ──────────────────────────── */}
            <section className="lg:py-24 py-12">
                <div className={cx}>
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white font-bold text-3xl lg:text-4xl mb-3">Built in real practices</h2>
                        <p className="text-gray-500 dark:text-gray-400">What leading digital dentistry experts are saying about Zylo.</p>
                    </div>

                    {/* KOL testimonials */}
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-10">
                        {[
                            { initials: "JS", name: "Dr. Jay Siddiqui", quote: "It's been very reliable, it's a great system, it's very accurate." },
                            { initials: "AD", name: "Dr. Adam Davis",    quote: "Zylo is all-in-one, you are able to flow in, and the footprint is so much smaller." },
                            { initials: "RF", name: "Dr. Rick Ferguson", quote: "On the 3D printed restoration by Zylo, how great this fit is!" },
                        ].map((kol, i) => (
                            <div key={i} className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] p-8 flex flex-col" data-aos="fade-up" data-aos-delay={i * 80} data-aos-duration="400">
                                {/* Avatar placeholder */}
                                <div className="w-14 h-14 rounded-full bg-[#df7b26]/10 border-2 border-[#df7b26]/30 flex items-center justify-center mb-5">
                                    <span className="text-[#df7b26] font-bold text-lg">{kol.initials}</span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-base italic leading-relaxed flex-1">&quot;{kol.quote}&quot;</p>
                                <div className="mt-5 pt-5 border-t border-gray-100 dark:border-white/10">
                                    <span className="text-gray-900 dark:text-white font-semibold text-sm">{kol.name}</span>
                                    <div className="mt-3">
                                        <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-white/10 rounded-lg px-3 py-1.5">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-red-500"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.19a8.16 8.16 0 004.77 1.52V7.27a4.85 4.85 0 01-1-.58z"/></svg>
                                            Video — coming soon
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Metrics + Logos row */}
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] p-8">
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Metrics</span>
                            <div className="grid grid-cols-3 gap-6 mt-6">
                                {[
                                    { num: "25 μm",      label: "Accuracy" },
                                    { num: "98%",        label: "Avg success rate" },
                                    { num: "$70K",       label: "Avg annual savings" },
                                ].map((m, i) => (
                                    <div key={i}>
                                        <p className="text-[#df7b26] font-bold text-2xl">{m.num}</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{m.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] p-8">
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Validated FDA-cleared partners</span>
                            <div className="flex flex-wrap gap-3 mt-6">
                                {["Bego", "Keystone", "Medit"].map((partner) => (
                                    <span key={partner} className="px-4 py-2 rounded-lg border border-gray-200 dark:border-white/15 text-gray-700 dark:text-gray-300 font-semibold text-sm bg-gray-50 dark:bg-white/5">
                                        {partner}
                                    </span>
                                ))}
                                <span className="px-4 py-2 rounded-lg border border-[#df7b26]/40 text-[#df7b26] font-semibold text-sm bg-[#df7b26]/5">
                                    Open System
                                </span>
                            </div>
                        </div>
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
                                See what happens when you reduce labor time and remake loops, while bringing turnaround in-house.
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
            <section className="lg:py-24 py-12 bg-gray-50 dark:bg-[#0f0f0f]">
                <div className={cx}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
                        {/* Left */}
                        <div data-aos="fade-up" data-aos-duration="400">
                            <span className="text-xs font-semibold text-[#df7b26] uppercase tracking-widest mb-4 block">Our plan for your success</span>
                            <h2 className="text-gray-900 dark:text-white font-bold text-3xl lg:text-4xl mb-5">We partner with your team to get the workflow off the ground and keep it working consistently.</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg">Zylo helps dental teams turn digital scans into high-quality appliances in the same visit, so patients receive care sooner, teams work with confidence, and dentists bring their vision for modern dentistry to life.</p>
                        </div>
                        {/* Right - steps list */}
                        <div className="bg-white dark:bg-[#111111] rounded-2xl border border-gray-200 dark:border-white/10 divide-y divide-gray-100 dark:divide-white/10 overflow-hidden" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                            {[
                                { step: "1", title: "See it",          desc: "A clear workflow demo from scan to finished appliance." },
                                { step: "2", title: "Train your team", desc: "Virtual or on-site training built around real practice roles. On Design, 3D printing, finishing." },
                                { step: "3", title: "Launch with us",  desc: "Live guidance through your first 10 cases." },
                                { step: "4", title: "Stay supported",  desc: "Support response within 12 hours." },
                                { step: "5", title: "Protect uptime",  desc: "Virtual support and hardware hot-swap options when needed." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 px-6 py-5">
                                    <span className="w-7 h-7 rounded-full bg-[#df7b26]/10 text-[#df7b26] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">{item.step}</span>
                                    <div>
                                        <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-0.5">{item.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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
                        <Button href="/contact?action=book-demo" label="Book a Demo" bgColor="bg-white" textColor="text-[#df7b26]" padding="py-4 px-8" />
                        <Button href="/products/zylodent#roi" label="Calculate ROI" bgColor="bg-transparent" textColor="text-white" padding="py-4 px-8" className="border-2 border-white hover:bg-white hover:text-[#df7b26] transition-all" />
                    </div>
                </div>
            </section>

            <ZyloFooter />
        </>
    );
}
