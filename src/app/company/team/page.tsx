import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team — Zylo3D",
  description: "Meet the team behind Zylo3D.",
};

export default function TeamPage() {
  return (
    <>
      <Breadcrumb pageName="Team" description="The people building the complete digital dentistry manufacturing platform." />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 text-6xl">👥</div>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Meet the Team — Coming Soon
            </h2>
            <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
              Team profiles and bios will be published here shortly. In the meantime, feel free to reach out to us directly.
            </p>
            <Link
              href="/contact"
              className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/80"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
