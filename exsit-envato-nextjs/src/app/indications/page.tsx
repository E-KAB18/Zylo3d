import Header from "@/components/layout/Header";
import ZyloFooter from "@/components/layout/ZyloFooter";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";

const indications = [
    {
        slug: "model",
        name: "Diagnostic Model",
        description: "High-accuracy anatomical models for diagnosis and treatment planning.",
        image: "/images/indications/model_large.png",
        material: "Model Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "crown",
        name: "Crown",
        description: "Full-contour permanent and temporary crown restorations.",
        image: "/images/indications/crown_large.png",
        material: "Restorative Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "bridge",
        name: "Bridge",
        description: "Multi-unit fixed bridge frameworks with precision margins.",
        image: "/images/indications/bridge_large.png",
        material: "Restorative Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "inlay",
        name: "Inlay",
        description: "Conservative inlay restorations with excellent marginal fit.",
        image: "/images/indications/inlay_large.png",
        material: "Restorative Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "onlay",
        name: "Onlay",
        description: "Extended cusp coverage with optimal occlusal integrity.",
        image: "/images/indications/onlay_large.png",
        material: "Restorative Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "veneer",
        name: "Veneer",
        description: "Ultra-thin aesthetic veneers with natural translucency.",
        image: "/images/indications/veneer_large.png",
        material: "Restorative Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "denture-base",
        name: "Denture Base",
        description: "Comfortable, biocompatible bases for complete and partial dentures.",
        image: "/images/indications/denture_base_large.png",
        material: "Denture Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "denture-teeth",
        name: "Denture Teeth",
        description: "Lifelike denture teeth with high wear resistance.",
        image: "/images/indications/denture_teeth_large.png",
        material: "Denture Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "all-on-x",
        name: "All-on-X",
        description: "Full-arch implant-supported prosthetics for complete rehabilitation.",
        image: "/images/indications/all_on_x_large.png",
        material: "Restorative + Denture Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "night-guard",
        name: "Night Guard",
        description: "Precision-fit occlusal splints for bruxism management.",
        image: "/images/indications/night_guard_large.png",
        material: "Splint Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "sports-guard",
        name: "Sports Guard",
        description: "Custom-fit protective mouthguards with superior retention.",
        image: "/images/indications/sports_guard_large.png",
        material: "Splint Resin",
        products: ["ZyloDent"],
    },
    {
        slug: "surgical-guide",
        name: "Surgical Guide",
        description: "Implant surgical guides with verified accuracy for predictable placement.",
        image: "/images/indications/surgical_guide_large.png",
        material: "Model Resin",
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
                        12 validated indications — all supported by the Zylo3D platform. From diagnostic models to full-arch All-on-X restorations.
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
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-[#df7b26] font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Request a Quote <ArrowUpRight size={18} />
                    </Link>
                </div>
            </section>

            <ZyloFooter />
        </>
    );
}
