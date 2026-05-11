import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Zylo3D",
  description:
    "Zylo3D is building the complete digital dentistry manufacturing platform — hardware, software, validated materials, and expert guidance built to work as one.",
};

const values = [
  {
    title: "Precision by Design",
    description:
      "Every component of the Zylo3D ecosystem is engineered to tight tolerances — because in dentistry, accuracy is not optional.",
  },
  {
    title: "Fully Integrated",
    description:
      "Hardware, software, and materials are validated together so you never chase compatibility issues or work around limitations.",
  },
  {
    title: "Built for Clinicians",
    description:
      "Intuitive workflows, guided setup, and expert-backed best practices mean you spend time on dentistry — not troubleshooting.",
  },
  {
    title: "Continuous Innovation",
    description:
      "Over-the-air firmware updates, new material profiles, and expanding indications mean your investment grows with you.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Zylo3D"
        description="The complete digital dentistry manufacturing platform — hardware, software, validated materials, and expert guidance built to work as one."
      />

      {/* Mission */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Our Mission
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                Zylo3D was founded on a simple belief: digital dentistry should be accessible, predictable, and profitable for every clinic and lab — regardless of their size.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                We build every part of the workflow — the printer, the post-curing unit, the design software, and the validated materials — so that everything works together seamlessly from day one.
              </p>
              <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                Our platform is designed for dental professionals who want clinical-grade results without the complexity of assembling a workflow from multiple vendors.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto mt-12 max-w-[480px] lg:mt-0">
                <Image
                  src="/images/about/dentpro.webp"
                  alt="Zylo3D dental 3D printer"
                  width={480}
                  height={480}
                  className="mx-auto w-full object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-light py-16 dark:bg-dark md:py-20 lg:py-28">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white sm:text-4xl">
            What We Stand For
          </h2>
          <div className="-mx-4 flex flex-wrap">
            {values.map((v) => (
              <div key={v.title} className="w-full px-4 md:w-1/2 mb-8">
                <div className="h-full rounded-sm border border-stroke bg-white p-8 shadow-sm dark:border-dark-3 dark:bg-gray-dark">
                  <div className="mb-3 h-1 w-12 rounded bg-primary" />
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    {v.title}
                  </h3>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Ready to see it in action?
          </h2>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
            Schedule a personalised demo with our team or explore our products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products/zylodent"
              className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/80"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="rounded-xs border border-body-color/20 px-8 py-4 text-base font-semibold text-black duration-300 hover:border-primary hover:text-primary dark:text-white dark:hover:border-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
