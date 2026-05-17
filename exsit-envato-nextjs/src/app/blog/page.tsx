import Header from "@/components/layout/Header";
import ZyloFooter from "@/components/layout/ZyloFooter";
import Image from "next/image";
import Link from "next/link";

const posts = [
    { id: 1, title: "How in-house 3D printing is reshaping the modern dental lab", category: "Workflow", image: "/images/blog/blog-01.jpg", slug: "in-house-3d-printing" },
    { id: 2, title: "Validated materials: why not all dental resins are equal", category: "Materials", image: "/images/blog/blog-02.jpg", slug: "validated-materials" },
    { id: 3, title: "Surgical guides in 90 minutes: a step-by-step protocol", category: "Surgical", image: "/images/blog/blog-03.jpg", slug: "surgical-guides" },
    { id: 4, title: "Night guards and splints: accuracy benchmarks for DLP printing", category: "Clinical", image: "/images/blog/blog-01.jpg", slug: "night-guards" },
    { id: 5, title: "All-on-X from scan to print: what to know before you start", category: "Implants", image: "/images/blog/blog-02.jpg", slug: "all-on-x" },
];

export default function BlogPage() {
    return (
        <>
            <Header theme="header-light" />

            <section className="zylo-hero-bg lg:pt-44 pt-32 pb-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 text-center">
                    <h1 className="text-gray-900 dark:text-white font-bold text-5xl mb-4" data-aos="fade-up" data-aos-duration="400">Zylo3D Blog</h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">Clinical guides, material science, and workflow insights for dental professionals.</p>
                </div>
            </section>

            <section className="lg:py-24 py-16 bg-white dark:bg-[#0d0d0d]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                        {posts.map((post, i) => (
                            <div key={post.id} className="bg-white dark:bg-[#111111] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 group"
                                data-aos="fade-up" data-aos-delay={i * 80} data-aos-duration="400">
                                <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
                                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw" />
                                </div>
                                <div className="p-6">
                                    <span className="text-[#df7b26] text-xs font-semibold uppercase tracking-wider">{post.category}</span>
                                    <h3 className="text-gray-900 dark:text-white font-semibold text-lg mt-2 mb-3 leading-snug group-hover:text-[#df7b26] transition-colors">
                                        {post.title}
                                    </h3>
                                    <span className="text-gray-400 text-sm">2026 · Zylo3D Team</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ZyloFooter />
        </>
    );
}
