import Header from "@/components/layout/Header";
import ZyloFooter from "@/components/layout/ZyloFooter";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";

const sections = [
    { title: "Webinars", desc: "Live and on-demand clinical webinars from dental experts.", href: "/learning/webinars", badge: "Coming Soon" },
    { title: "Training", desc: "Step-by-step onboarding and operator training courses.", href: "/learning/training", badge: "Coming Soon" },
    { title: "Best Practice Guides", desc: "PDF protocols for every indication, written by clinicians.", href: "/learning/guides", badge: "Coming Soon" },
    { title: "KOLs", desc: "Meet the key opinion leaders behind the Zylo3D clinical program.", href: "/learning/kols", badge: "Coming Soon" },
];

export default function LearningPage() {
    return (
        <>
            <Header theme="header-light" />
            <section className="zylo-hero-bg lg:pt-44 pt-32 pb-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 text-center">
                    <h1 className="text-gray-900 dark:text-white font-bold text-5xl mb-4">Learning Hub</h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">Resources to help you get the most out of your Zylo3D system.</p>
                </div>
            </section>
            <section className="lg:py-24 py-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="grid md:grid-cols-2 gap-8">
                        {sections.map((s, i) => (
                            <Link key={s.href} href={s.href} className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111] hover:border-[#df7b26]/50 hover:shadow-lg transition-all duration-300"
                                data-aos="fade-up" data-aos-delay={i * 80} data-aos-duration="400">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-gray-900 dark:text-white text-2xl font-bold group-hover:text-[#df7b26] transition-colors">{s.title}</h3>
                                    <span className="px-3 py-1 bg-orange-50 text-[#df7b26] text-xs font-semibold rounded-full border border-orange-100 flex-shrink-0">{s.badge}</span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 mb-4">{s.desc}</p>
                                <span className="text-[#df7b26] text-sm font-medium flex items-center gap-1">Explore <ArrowUpRight size={14} /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <ZyloFooter />
        </>
    );
}
