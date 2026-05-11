import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Training — Zylo3D Learning",
  description: "Unboxing, installation, maintenance, and troubleshooting guides for all Zylo3D hardware.",
};

const topics = [
  { emoji: "📦", title: "Unboxing & Setup", description: "Step-by-step guide for safely unboxing, positioning, and powering on your Zylo3D printer for the first time." },
  { emoji: "⚙️", title: "Installation", description: "Software installation, network connection, first calibration, and initial resin loading." },
  { emoji: "🖨", title: "First Print Walkthrough", description: "Run your first diagnostic model print from file preparation to post-processing with ZyloPrep." },
  { emoji: "🔧", title: "Maintenance", description: "Daily, weekly, and monthly maintenance routines to keep your hardware performing at spec." },
];

export default function TrainingPage() {
  return (
    <>
      <Breadcrumb pageName="Training" description="Everything you need to set up, operate, and maintain your Zylo3D system." />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {topics.map((t) => (
              <div key={t.title} className="w-full px-4 md:w-1/2 mb-8">
                <div className="h-full rounded-sm border border-stroke bg-white p-8 shadow-sm dark:border-dark-3 dark:bg-gray-dark">
                  <div className="mb-4 text-4xl">{t.emoji}</div>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{t.title}</h3>
                  <p className="mb-4 text-base text-body-color dark:text-body-color-dark">{t.description}</p>
                  <span className="inline-block rounded bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="mb-4 text-body-color dark:text-body-color-dark">Need help now? Our support team is ready.</p>
            <Link href="/contact" className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/80">
              Open a Support Ticket
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
