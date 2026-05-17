import Header from "@/components/layout/Header";
import ZyloFooter from "@/components/layout/ZyloFooter";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";

const values = [
    { title: "Fully Integrated", desc: "Hardware, software, and materials validated together — not sold separately and hoped to work." },
    { title: "Clinically Validated", desc: "Every workflow tested against real clinical requirements. Every material certified for patient use." },
    { title: "Built to Scale", desc: "From a single-chair practice to a full-service production lab — the platform grows with you." },
    { title: "Unmatched Support", desc: "Onboarding, training, and ongoing clinical guidance from a team that knows dental." },
];

export default function AboutPage() {
    return (
        <>
            <Header theme="header-light" />

            <section className="zylo-hero-bg lg:pt-44 pt-32 pb-20">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 text-center">
                    <h1 className="text-gray-900 dark:text-white font-bold text-5xl lg:text-6xl mb-6" data-aos="fade-up" data-aos-duration="400">
                        Built for the Future of Dentistry
                    </h1>
                </div>
            </section>

            <section className="lg:py-24 py-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
                            We started Zylo3D because the dental industry deserved better than fragmented workflows.
                            Labs were juggling printers from one vendor, software from another, and resins that were never properly validated together.
                            The result? Inconsistency, rework, and wasted time.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed mt-6">
                            We built a platform where every component — from the hardware to the software to the materials — is designed, tested, and validated as one complete system.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111]" data-aos="fade-up" data-aos-delay={i * 80} data-aos-duration="400">
                                <div className="w-2 h-8 bg-[#df7b26] rounded-full mb-5" />
                                <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-3">{v.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lg:py-20 py-14 bg-[#df7b26]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 text-center">
                    <h2 className="text-white font-bold text-3xl lg:text-4xl mb-4">Ready to see Zylo3D in action?</h2>
                    <p className="text-white/90 text-lg mb-8">Talk to our team about the right setup for your lab or practice.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#df7b26] font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">
                        Contact Us <ArrowUpRight size={18} />
                    </Link>
                </div>
            </section>

            <ZyloFooter />
        </>
    );
}
