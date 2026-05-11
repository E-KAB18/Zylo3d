import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learning — Zylo3D",
  description:
    "Webinars, training guides, best practice workflows, and KOL resources — everything you need to operate your Zylo3D system with confidence.",
};

const sections = [
  {
    href: "/learning/webinars",
    emoji: "🎙",
    title: "Webinars",
    description:
      "Live and recorded webinars covering new features, clinical workflows, and Q&A sessions with the Zylo3D team and key opinion leaders.",
    tags: ["Upcoming", "Recorded", "Live Q&A"],
  },
  {
    href: "/learning/training",
    emoji: "📦",
    title: "Training",
    description:
      "Step-by-step video and written guides for unboxing, installation, first print, daily maintenance, and troubleshooting your Zylo3D hardware.",
    tags: ["Unboxing", "Installation", "Maintenance"],
  },
  {
    href: "/learning/guides",
    emoji: "📋",
    title: "Best Practice Guides",
    description:
      "Indication-based clinical workflows validated by Zylo3D experts — covering printer setup, material selection, post-processing, and quality checks.",
    tags: ["Splints", "Crowns", "Dentures", "Surgical Guides"],
  },
  {
    href: "/learning/kols",
    emoji: "🏅",
    title: "KOLs",
    description:
      "Reviews, case studies, and articles from leading dental professionals and key opinion leaders who use Zylo3D systems in their practice.",
    tags: ["Reviews", "Case Studies", "Articles"],
  },
];

export default function LearningPage() {
  return (
    <>
      <Breadcrumb
        pageName="Learning"
        description="Guided workflows, training resources, and expert knowledge — built to help you get predictable results from day one."
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {sections.map((s) => (
              <div key={s.href} className="w-full px-4 md:w-1/2 mb-8">
                <Link href={s.href} className="group block h-full rounded-sm border border-stroke bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-md dark:border-dark-3 dark:bg-gray-dark">
                  <div className="mb-4 text-5xl">{s.emoji}</div>
                  <h2 className="mb-3 text-2xl font-bold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary transition-colors">
                    {s.title}
                  </h2>
                  <p className="mb-5 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 text-sm font-semibold text-primary">
                    Explore {s.title} →
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
