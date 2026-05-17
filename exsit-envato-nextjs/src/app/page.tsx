"use client";

import Header from '@/components/layout/Header';
import ZyloFooter from '@/components/layout/ZyloFooter';
import PageTitle3 from "@/components/ui/PageTitle3";
import { Cpu, FlaskConical, Layers, Printer, ScanLine, Wrench, Monitor, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import CounterSection from "@/components/ui/CounterSection";
import Image from "next/image";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import testimonials from "@/data/testimonials.json";
import { ArrowUpRight, Star } from "react-feather";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "How in-house 3D printing is reshaping the modern dental lab",
        category: "Workflow",
        date: "2026",
        image: "/images/blog/blog-01.jpg",
        href: "/blog",
    },
    {
        id: 2,
        title: "Validated materials: why not all dental resins are equal",
        category: "Materials",
        date: "2026",
        image: "/images/blog/blog-02.jpg",
        href: "/blog",
    },
    {
        id: 3,
        title: "Surgical guides in 90 minutes: a step-by-step protocol",
        category: "Surgical",
        date: "2026",
        image: "/images/blog/blog-03.jpg",
        href: "/blog",
    },
];

const indications = [
    { name: "Diagnostic Model", slug: "model", image: "/images/indications/model_large.png" },
    { name: "Crown", slug: "crown", image: "/images/indications/crown_large.png" },
    { name: "Bridge", slug: "bridge", image: "/images/indications/bridge_large.png" },
    { name: "Surgical Guide", slug: "surgical-guide", image: "/images/indications/surgical_guide_large.png" },
    { name: "Night Guard", slug: "night-guard", image: "/images/indications/night_guard_large.png" },
    { name: "All-on-X", slug: "all-on-x", image: "/images/indications/all_on_x_large.png" },
];

export default function HomePage() {
    return (
        <>
            {/* Header */}
            <Header theme="header-light" />

            {/* ── HERO ─────────────────────────────────────────────── */}
            <div className="zylo-hero-bg banner-wrap items-center justify-center relative flex overflow-hidden h-auto lg:pt-44 pt-28 pb-4">
                <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 flex flex-col justify-center relative z-10">
                    <div className="xl:w-10/12 w-full mx-auto text-center">

                        {/* Badge */}
                        <div className="flex flex-row mb-3 mt-auto justify-center">
                            <div className="flex flex-row items-center gap-2 pt-1 pb-2 px-5 mx-auto rounded-full w-auto bg-gray-100 dark:bg-white/20 border border-gray-300 dark:border-white/30">
                                <span className="text-gray-700 dark:text-white font-medium text-sm">Digital Dentistry Manufacturing Platform</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <h1
                            className="text-gray-900 dark:text-white font-extrabold 2xl:text-7xl lg:text-6xl md:text-5xl text-4xl mt-2 mb-3 py-3 leading-tight"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-delay="300"
                        >
                            The Complete Digital<br />
                            <span style={{ color: "#df7b26" }}>Dentistry</span> Manufacturing<br />
                            Platform
                        </h1>

                        <p
                            className="font-normal text-gray-700 dark:text-white/90 text-lg text-center max-w-2xl mx-auto"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="400"
                        >
                            Hardware, software, and validated materials — built to work as one integrated system for your dental lab or clinic.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center mx-auto">
                            <Button
                                label="Request a Quote"
                                bgColor="bg-[#df7b26]"
                                textColor="text-white"
                                icon={<ArrowUpRight size={20} />}
                                padding="py-4 px-6"
                                href="/contact"
                            />
                            <Button
                                label="Explore Dental Applications"
                                bgColor="bg-gray-100 dark:bg-white/15"
                                textColor="text-gray-700 dark:text-white"
                                icon={<ArrowUpRight size={20} />}
                                padding="py-4 px-6"
                                href="/indications"
                            />
                        </div>
                    </div>

                    {/* Hero image / product visual */}
                    <div className="xl:w-9/12 w-full mx-auto lg:pt-20 pt-12">
                        <div
                            className="overflow-hidden rounded-2xl border border-gray-200 dark:border-white/20 shadow-2xl"
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay="500"
                        >
                            <Image
                                src="/images/about/dentpro.webp"
                                alt="ZyloDent 3D Printer"
                                width={1100}
                                height={550}
                                className="w-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── STATS ────────────────────────────────────────────── */}
            <section className="service-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-20 pb-0 py-0">
                    <PageTitle3
                        badgeText=""
                        title="Built for dental professionals who demand more"
                        subtitle="From single-chair practices to full-service labs — Zylo3D grows with you."
                        widthClass="w-full xl:w-7/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                    />
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-6">
                        <CounterSection textcolor="text-gray-900" subtextcolor="text-gray-700" target={12} suffix="+" duration={1000} subtitle="Supported clinical indications" />
                        <CounterSection textcolor="text-gray-900" subtextcolor="text-gray-700" target={90} suffix=" min" duration={1000} subtitle="Average workflow time" />
                        <CounterSection textcolor="text-gray-900" subtextcolor="text-gray-700" target={98.5} suffix="%" duration={1000} subtitle="Clinically validated accuracy" />
                    </div>
                </div>
            </section>

            {/* ── PLATFORM PILLARS ─────────────────────────────────── */}
            <section className="feature-wrap lg:pb-24 pb-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0 lg:py-4 py-0">
                    <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Hardware, software, and materials — validated together"
                            subtitle="Every component of the Zylo3D system is tested and certified to work as one. No more fragmented workflows."
                            widthClass="w-full xl:w-8/12 lg:w-7/12"
                            alignment="start"
                            padding="pb-0"
                            subtitleClass="xl:w-[75%]"
                        />
                        <div className="lg:text-right mt-auto">
                            <Button href="/products/zylodent" label="Explore ZyloDent" bgColor="bg-[#df7b26]" textColor="text-white" className="py-4" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-6">
                        {[
                            {
                                icon: <Printer size={40} strokeWidth={1.5} className="text-[#df7b26]" />,
                                title: "ZyloDent Hardware",
                                description: "Industrial DLP 3D printer engineered specifically for dental-grade accuracy and throughput.",
                                delay: 0,
                            },
                            {
                                icon: <Monitor size={40} strokeWidth={1.5} className="text-[#df7b26]" />,
                                title: "ZyloCAD AI Software",
                                description: "AI-assisted design software with direct DICOM/STL import and one-click ZyloPrep file preparation.",
                                delay: 200,
                            },
                            {
                                icon: <FlaskConical size={40} strokeWidth={1.5} className="text-[#df7b26]" />,
                                title: "Validated Materials",
                                description: "Certified dental resins for every indication — tested and validated together with the Zylo3D system.",
                                delay: 400,
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="rounded-2xl p-8 bg-gradient-to-b from-[#B3D2FF] to-[#F2F7FF] dark:from-[#111] dark:to-[#333]"
                                data-aos="fade-up"
                                data-aos-duration="400"
                                data-aos-delay={card.delay}
                            >
                                <div className="mb-6 w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                    {card.icon}
                                </div>
                                <h3 className="text-gray-900 dark:text-white font-semibold text-2xl mb-3">{card.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-lg">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ZYLODENT PRODUCT + FEATURES (dark section) ───────── */}
            <div className="feature-wrap lg:mx-6">
                <div className="lg:py-24 py-12 bg-gray-100 dark:bg-[#111111] rounded-xl px-6">
                    <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">

                        {/* Section title */}
                        <div className="flex flex-col items-center text-center xl:w-7/12 lg:w-2/3 mx-auto lg:pb-24 pb-12">
                            <PageTitle3
                                badgeText="The ZyloDent System"
                                badgeTextBG="bg-gray-900/10 dark:bg-white/20"
                                badgeTextColor="text-gray-900 dark:text-white"
                                title="From scan to finished restoration in your own lab"
                                subtitle="ZyloDent integrates the full dental manufacturing workflow — designed, validated, and supported by Zylo3D."
                                widthClass="w-full mx-auto"
                                alignment="center"
                                padding="pb-6"
                                textColor="text-gray-900 dark:text-white"
                                textWeigth="font-medium"
                                subtitleColor="text-gray-600 dark:text-gray-300"
                            />
                            <Button href="/products/zylodent" label="Explore ZyloDent" bgColor="bg-[#df7b26]" textColor="text-white" className="py-4" />
                        </div>

                        {/* Workflow steps */}
                        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6 pb-5">
                            {[
                                { icon: <ScanLine className="text-gray-800 dark:text-white" size={35} strokeWidth={1} />, title: "Scan", desc: "Import DICOM and STL files directly — no conversion required." },
                                { icon: <Monitor className="text-gray-800 dark:text-white" size={35} strokeWidth={1} />, title: "Design", desc: "AI-assisted crown and denture design with ZyloCAD." },
                                { icon: <Layers className="text-gray-800 dark:text-white" size={35} strokeWidth={1} />, title: "Prepare", desc: "One-click ZyloPrep slicing with validated print profiles." },
                                { icon: <Printer className="text-gray-800 dark:text-white" size={35} strokeWidth={1} />, title: "Print", desc: "Industrial DLP precision — consistent results every run." },
                                { icon: <FlaskConical className="text-gray-800 dark:text-white" size={35} strokeWidth={1} />, title: "Cure", desc: "Integrated post-processing with validated Zylo3D materials." },
                                { icon: <Wrench className="text-gray-800 dark:text-white" size={35} strokeWidth={1} />, title: "Deliver", desc: "Finished restorations ready for chair-side fitting." },
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-900/5 dark:bg-white/10 rounded-xl p-6 border border-gray-900/10 dark:border-white/15 hover:border-[#df7b26]/50 transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 80}
                                    data-aos-duration="400"
                                >
                                    <div className="mb-4">{step.icon}</div>
                                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">{step.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* ZyloCAD software section */}
                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:pt-24 pt-12 xl:gap-20 gap-6 pb-5">
                            <div className="w-full">
                                <PageTitle3
                                    badgeText="ZyloCAD AI"
                                    badgeTextBG="bg-gray-900/10 dark:bg-white/20"
                                    badgeTextColor="text-gray-900 dark:text-white"
                                    icon={<Cpu size={18} />}
                                    title="Intelligent dental design software, built for your workflow."
                                    subtitle="AI ZyloCAD handles everything from scan import to restoration design. ZyloPrep takes care of slicing in one click."
                                    widthClass="w-full"
                                    alignment="start"
                                    padding="pb-8"
                                    textColor="text-gray-900 dark:text-white"
                                    subtitleColor="text-gray-600 dark:text-gray-300"
                                />
                                {[
                                    "AI-assisted crown and denture design",
                                    "Direct DICOM and STL import",
                                    "One-click ZyloPrep file preparation",
                                    "Validated print profiles for all Zylo3D printers",
                                    "Cloud case storage and team collaboration",
                                    "Regular updates via Zylo3D account",
                                ].map((feature, i) => (
                                    <p key={i} className="text-gray-900 dark:text-white font-normal text-[17px] mt-1 mb-2 lg:pr-10 flex gap-3 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-[#df7b26] flex-shrink-0" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                        </svg>
                                        {feature}
                                    </p>
                                ))}
                                <Link href="/contact" className="text-[#df7b26] hover:underline font-medium inline-flex items-center gap-1 mt-6 text-base">
                                    Talk to us about ZyloCAD <ArrowRight size={16} />
                                </Link>
                            </div>

                            {/* Download card */}
                            <div
                                className="flex items-start py-3 relative w-full"
                                data-aos="zoom-in"
                                data-aos-duration="400"
                                data-aos-delay="400"
                            >
                                <div className="bg-gray-900/5 dark:bg-white/10 border border-gray-900/10 dark:border-white/20 rounded-2xl p-8 w-full">
                                    <h3 className="text-gray-900 dark:text-white text-2xl font-semibold mb-2">Download ZyloCAD</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">Choose your platform to get started.</p>
                                    <div className="flex flex-col gap-3">
                                        <a href="#" className="flex items-center gap-3 bg-gray-900/10 hover:bg-gray-900/20 dark:bg-white/15 dark:hover:bg-white/25 border border-gray-900/10 dark:border-white/20 rounded-xl px-5 py-4 transition-all text-gray-900 dark:text-white font-medium">
                                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>
                                            Download for Windows
                                        </a>
                                        <a href="#" className="flex items-center gap-3 bg-gray-900/10 hover:bg-gray-900/20 dark:bg-white/15 dark:hover:bg-white/25 border border-gray-900/10 dark:border-white/20 rounded-xl px-5 py-4 transition-all text-gray-900 dark:text-white font-medium">
                                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c.947 0 1.856.148 2.71.42L7.172 18.292A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8zm0 16c-.947 0-1.856-.148-2.71-.42l7.538-15.872A7.96 7.96 0 0 1 20 12c0 4.411-3.589 8-8 8z" /></svg>
                                            Download for Mac
                                        </a>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-5 leading-relaxed">
                                        A Zylo3D account is required to activate your software license. Contact our team to get started.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── INDICATIONS PREVIEW ──────────────────────────────── */}
            <section className="lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="12 clinical indications — one integrated platform"
                            subtitle="From crowns and bridges to surgical guides and dentures — ZyloDent handles every indication your lab needs."
                            widthClass="w-full xl:w-8/12 lg:w-7/12"
                            alignment="start"
                            padding="pb-0"
                        />
                        <div className="lg:text-right mt-auto">
                            <Button href="/indications" label="View all indications" bgColor="bg-[#df7b26]" textColor="text-white" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {indications.map((ind, i) => (
                            <Link
                                key={ind.slug}
                                href={`/indications/${ind.slug}`}
                                className="group overflow-hidden rounded-xl relative aspect-[4/3] block bg-gray-100"
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
                                    <span className="text-[#df7b26] text-sm font-medium flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn more <ArrowUpRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ─────────────────────────────────────── */}
            <section className="feedback-wrap lg:pt-0 pt-0 lg:pb-24 pb-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14 pb-0">
                    <PageTitle3
                        badgeText=""
                        title="Trusted by dental professionals"
                        subtitle="Hear from labs and clinics already using the Zylo3D system."
                        widthClass="xl:w-8/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                    />
                    <div className="flex lg:flex-nowrap flex-wrap lg:space-x-6 space-x-0 lg:space-y-0 space-y-6 pb-6">
                        <div className="lg:w-4/12">
                            <div className="overflow-hidden rounded-xl w-full h-full min-h-[300px] relative">
                                <Image src="/images/about/dentpro.webp" fill alt="Dental lab" className="object-cover" />
                            </div>
                        </div>
                        <div className="lg:w-8/12">
                            <div className="feedback-div bg-white border border-gray-200 rounded-xl p-4 relative h-full">
                                <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-6 gap-6 h-full relative">
                                    <div className="lg:col-span-2 w-full h-full static">
                                        <div className="flex flex-col p-2 h-full static">
                                            <TestimonialCarousel testimonials={testimonials} />
                                        </div>
                                    </div>
                                    <div className="lg:col-span-1 lg:flex hidden flex-col">
                                        <div className="mt-auto text-end p-3 pb-0">
                                            <span className="lg:text-7xl text-5xl text-gray-900 font-medium">4.9</span>
                                            <div className="flex flex-row gap-1 justify-end">
                                                <Star fill="#df7b26" strokeWidth={0} size={20} />
                                                <Star fill="#df7b26" strokeWidth={0} size={20} />
                                                <Star fill="#df7b26" strokeWidth={0} size={20} />
                                                <Star fill="#df7b26" strokeWidth={0} size={20} />
                                                <Star fill="#df7b26" strokeWidth={0} size={20} />
                                            </div>
                                            <p className="font-medium text-gray-900 mt-1 mb-0">Dental professionals</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BLOG ─────────────────────────────────────────────── */}
            <section className="blog-wrap lg:py-24 py-12 bg-gray-50 dark:bg-[#1e1e1e]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="flex flex-wrap justify-center text-center pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Insights from the Zylo3D team"
                            subtitle="Clinical guides, material science, and workflow tips for dental professionals."
                            widthClass="w-full xl:w-5/12 lg:w-7/12"
                            alignment="center"
                            padding="pb-0"
                        />
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
                        {blogPosts.map((post, i) => (
                            <Link
                                key={post.id}
                                href={post.href}
                                className="group bg-white dark:bg-[#111111] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                                data-aos-duration="400"
                            >
                                <div className="overflow-hidden aspect-[16/9] relative">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div className="p-5">
                                    <span className="text-[#df7b26] text-xs font-semibold uppercase tracking-wider">{post.category}</span>
                                    <h3 className="text-gray-900 dark:text-white font-semibold text-lg mt-2 mb-3 leading-snug group-hover:text-[#df7b26] transition-colors">
                                        {post.title}
                                    </h3>
                                    <span className="text-gray-400 text-sm">{post.date} · Zylo3D Team</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BAND ─────────────────────────────────────────── */}
            <section className="lg:py-24 py-16 bg-[#df7b26]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 text-center">
                    <h2
                        className="text-white font-bold 2xl:text-5xl lg:text-4xl text-3xl mb-4"
                        data-aos="fade-up"
                        data-aos-duration="400"
                    >
                        Ready to bring dental manufacturing in-house?
                    </h2>
                    <p
                        className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="100"
                    >
                        Talk to our team and discover how ZyloDent can transform your dental workflow.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="200"
                    >
                        <Button
                            href="/contact"
                            label="Request a Quote"
                            bgColor="bg-white"
                            textColor="text-[#df7b26]"
                            padding="py-4 px-8"
                        />
                        <Button
                            href="/contact"
                            label="Schedule a Demo"
                            bgColor="bg-transparent"
                            textColor="text-white"
                            padding="py-4 px-8"
                            className="border-2 border-white hover:bg-white hover:text-[#df7b26] transition-all"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <ZyloFooter />
        </>
    );
}
