import Header from "@/components/layout/Header";
import ZyloFooter from "@/components/layout/ZyloFooter";
import Link from "next/link";

interface ComingSoonProps {
    title: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
}

export default function ComingSoon({ title, description = "We're working on this. Check back soon.", ctaLabel = "Contact Us", ctaHref = "/contact" }: ComingSoonProps) {
    return (
        <>
            <Header theme="header-light" />
            <section className="zylo-hero-bg min-h-screen flex items-center justify-center">
                <div className="text-center px-4">
                    <div className="inline-block px-4 py-2 bg-[#df7b26]/20 text-[#df7b26] text-sm font-semibold rounded-full mb-6">
                        Coming Soon
                    </div>
                    <h1 className="text-gray-900 dark:text-white font-bold text-4xl lg:text-5xl mb-4">{title}</h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md mx-auto mb-8">{description}</p>
                    <Link href={ctaHref} className="inline-flex items-center gap-2 bg-[#df7b26] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#c96b1e] transition-colors">
                        {ctaLabel}
                    </Link>
                </div>
            </section>
            <ZyloFooter />
        </>
    );
}
