import Header from "@/components/layout/Header";
import ZyloFooter from "@/components/layout/ZyloFooter";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";
import { CALENDLY_URL } from "@/lib/constants";

const indications = [
    {
        slug: "digital-dentures",
        name: "Digital Dentures",
        description: "Deliver predictable removable prosthetics with a delegatable workflow: AI-assisted design, one-click file prep, and automated print–wash–cure.",
        image: "/images/indications/denture_base_large.png",
        material: "Denture Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "waxups-implant-provisionals",
        name: "Waxups & Implant Provisionals",
        description: "Trial smiles and implant temporaries that help patients say yes, giving you a clear path to the final restoration.",
        image: "/images/indications/model_large.png",
        material: "Temporary Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "surgical-guides",
        name: "Surgical Guides",
        description: "Implant surgical guides with verified accuracy for predictable, repeatable placement, in-house and on demand.",
        image: "/images/indications/surgical_guide_large.png",
        material: "Guide Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "sports-guards",
        name: "Sports Guards",
        description: "Custom-fit protective mouthguards with team colors and logos, a high-margin add-on your team can deliver same visit.",
        image: "/images/indications/sports_guard_large.png",
        material: "Splint Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "provisional-all-on-x",
        name: "Provisional All-on-X",
        description: "Surgery-day full-arch provisionals that preserve VDO and give patients an immediate functional result.",
        image: "/images/indications/all_on_x_large.png",
        material: "Temporary + Denture Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "pediatric-crown",
        name: "Pediatric Crown",
        description: "Scan-to-crown in minutes: no crown drawer chaos, no lab wait, no failed seating appointments.",
        image: "/images/indications/crown_large.png",
        material: "Restorative Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "occlusal-splints",
        name: "Occlusal Splints",
        description: "From scan to splint in ~60 minutes: a delegatable, high-margin add-on with no lab dependency.",
        image: "/images/indications/night_guard_large.png",
        material: "Splint Resin",
        products: ["ZyloDent"],
    },
];

export default function IndicationsPage() {
    return (
        <>
            <Header theme="header-light" />

            {/* Page header */}
            <section className="pt-40 pb-16 zylo-hero-bg">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 text-center">
                    <h1
                        className="text-gray-900 dark:text-white font-bold 2xl:text-6xl lg:text-5xl text-4xl mb-4"
                        data-aos="fade-up"
                        data-aos-duration="400"
                    >
                        Clinical Indications
                    </h1>
                    <p
                        className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="100"
                    >
                        7 validated indications, all supported by the Zylo3D platform. From digital dentures to full-arch All-on-X provisionals.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="lg:py-24 py-16 bg-white dark:bg-[#0d0d0d]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                        {indications.map((ind, i) => (
                            <Link
                                key={ind.slug}
                                href={`/indications/${ind.slug}`}
                                className="group bg-white dark:bg-[#111111] rounded-2xl overflow-hidden border border-gray-200 dark:border-[#2a2a2a] hover:shadow-xl hover:border-[#df7b26]/30 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={Math.min(i * 60, 400)}
                                data-aos-duration="400"
                            >
                                {/* Image */}
                                <div className="bg-gray-50 dark:bg-[#1e1e1e] aspect-[4/3] relative overflow-hidden">
                                    <Image
                                        src={ind.image}
                                        alt={ind.name}
                                        fill
                                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h3 className="text-gray-900 dark:text-white font-semibold text-xl group-hover:text-[#df7b26] transition-colors">
                                            {ind.name}
                                        </h3>
                                        <ArrowUpRight
                                            size={20}
                                            className="text-gray-300 group-hover:text-[#df7b26] flex-shrink-0 transition-colors mt-1"
                                        />
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                                        {ind.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-orange-50 text-[#df7b26] text-xs font-medium rounded-full border border-orange-100">
                                            {ind.material}
                                        </span>
                                        {ind.products.map((p) => (
                                            <span key={p} className="px-3 py-1 bg-gray-100 dark:bg-[#1e1e1e] text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                                                {p}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="lg:py-20 py-14 bg-[#df7b26]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 text-center">
                    <h2 className="text-white font-bold text-3xl lg:text-4xl mb-4">
                        Ready to expand your indication range?
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                        Talk to our clinical team about the right Zylo3D setup for your lab.
                    </p>
                    <a
                        href={CALENDLY_URL}
                        className="inline-flex items-center gap-2 bg-white dark:!bg-white text-[#df7b26] dark:!text-[#df7b26] font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book a Demo <ArrowUpRight size={18} />
                    </a>
                </div>
            </section>

            <ZyloFooter />
        </>
    );
}
