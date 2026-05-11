import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webinars — Zylo3D Learning",
  description: "Live and recorded webinars from Zylo3D covering clinical workflows, product updates, and expert Q&A sessions.",
};

export default function WebinarsPage() {
  return (
    <>
      <Breadcrumb pageName="Webinars" description="Live and recorded webinars — clinical workflows, product updates, and expert Q&A." />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 text-6xl">🎙</div>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Webinars — Coming Soon
            </h2>
            <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
              We&apos;re building out our webinar library. Upcoming live sessions and recorded content will be available here. Subscribe to be notified when new webinars go live.
            </p>
            <Link
              href="/contact"
              className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/80"
            >
              Get Notified
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
