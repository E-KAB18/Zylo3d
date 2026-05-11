import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press — Zylo3D",
  description: "Press releases, media coverage, and news about Zylo3D.",
};

export default function PressPage() {
  return (
    <>
      <Breadcrumb pageName="Press" description="Latest news, press releases, and media coverage from Zylo3D." />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 text-6xl">📰</div>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Press — Coming Soon
            </h2>
            <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
              Press releases and media coverage will be published here. For press enquiries, please get in touch with our team directly.
            </p>
            <Link
              href="/contact"
              className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/80"
            >
              Press Enquiries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
