import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KOLs — Zylo3D Learning",
  description: "Reviews, case studies, and clinical articles from key opinion leaders using Zylo3D systems.",
};

export default function KOLsPage() {
  return (
    <>
      <Breadcrumb pageName="KOLs" description="Real-world reviews, case studies, and expert articles from dental professionals using Zylo3D." />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 text-6xl">🏅</div>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              KOL Content — Coming Soon
            </h2>
            <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
              We&apos;re working with leading dental professionals to bring you in-depth reviews, case studies, and clinical articles. Check back soon.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/learning"
                className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/80"
              >
                Back to Learning
              </Link>
              <Link
                href="/contact"
                className="rounded-xs border border-body-color/20 px-8 py-4 text-base font-semibold text-black duration-300 hover:border-primary hover:text-primary dark:text-white dark:hover:border-primary"
              >
                Become a KOL
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
