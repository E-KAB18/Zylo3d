import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Indications — Zylo3D",
  description:
    "Explore all validated dental indications supported by Zylo3D printers — from diagnostic models to surgical guides, crowns, dentures, and more.",
};

const indications = [
  {
    name: "Diagnostic Model",
    image: "/images/indications/model_large.png",
    description:
      "High-accuracy dental models for diagnosis, treatment planning, and communication between the clinician and lab.",
    materials: ["Model Resin"],
    products: ["ZyloDent", "MicroDent"],
  },
  {
    name: "Crown",
    image: "/images/indications/crown_large.png",
    description:
      "Full-contour or cut-back monolithic crowns produced with sub-50 µm accuracy for seamless marginal fit and aesthetics.",
    materials: ["Restorative Resin"],
    products: ["ZyloDent", "MicroDent"],
  },
  {
    name: "Bridge",
    image: "/images/indications/bridge_large.png",
    description:
      "Multi-unit fixed bridges produced with validated restorative resins and precise connector geometries.",
    materials: ["Restorative Resin"],
    products: ["ZyloDent", "MicroDent"],
  },
  {
    name: "Inlay",
    image: "/images/indications/inlay_large.png",
    description:
      "Precision inlays with accurate internal adaptation and aesthetic layering — printed in validated restorative resin.",
    materials: ["Restorative Resin"],
    products: ["ZyloDent", "MicroDent"],
  },
  {
    name: "Onlay",
    image: "/images/indications/onlay_large.png",
    description:
      "Extended coverage onlays with accurate cusp geometry, high strength, and consistent marginal fit.",
    materials: ["Restorative Resin"],
    products: ["ZyloDent", "MicroDent"],
  },
  {
    name: "Veneer",
    image: "/images/indications/veneer_large.png",
    description:
      "Highly aesthetic thin veneers printed in fine-detail resin — consistent thickness and accurate marginal adaptation.",
    materials: ["Restorative Resin"],
    products: ["ZyloDent", "MicroDent"],
  },
  {
    name: "Denture Base",
    image: "/images/indications/denture_base_large.png",
    description:
      "Full and partial denture bases printed with biocompatible resins validated for long-term intraoral use.",
    materials: ["Denture Resin"],
    products: ["ZyloDent", "MicroDent"],
  },
  {
    name: "Denture Teeth",
    image: "/images/indications/denture_teeth_large.png",
    description:
      "Printed denture teeth with natural morphology, validated wear resistance, and colour stability for full-arch cases.",
    materials: ["Denture Resin"],
    products: ["ZyloDent", "MicroDent"],
  },
  {
    name: "All-on-X",
    image: "/images/indications/all_on_x_large.png",
    description:
      "Full-arch implant-supported restorations — framework and final prosthesis produced with tight-tolerance printing for predictable passive fit.",
    materials: ["Restorative Resin", "Denture Resin"],
    products: ["ZyloDent"],
  },
  {
    name: "Night Guard",
    image: "/images/indications/night_guard_large.png",
    description:
      "Occlusal night guards with precise articulation and consistent material thickness — printed in validated splint resin.",
    materials: ["Splint Resin"],
    products: ["ZyloDent", "MicroDent"],
  },
  {
    name: "Sports Guard",
    image: "/images/indications/sports_guard_large.png",
    description:
      "Custom-fit sports mouthguards with consistent wall thickness and high impact resistance.",
    materials: ["Splint Resin"],
    products: ["ZyloDent", "MicroDent"],
  },
  {
    name: "Surgical Guide",
    image: "/images/indications/surgical_guide_large.png",
    description:
      "Implant surgical guides with precise sleeve positioning validated against CBCT data for predictable, minimally invasive outcomes.",
    materials: ["Model Resin"],
    products: ["ZyloDent", "MicroDent"],
  },
];

export default function IndicationsPage() {
  return (
    <>
      <Breadcrumb
        pageName="Dental Indications"
        description="All validated dental indications supported by Zylo3D printers — tested, certified, and ready for clinical production."
      />

      {/* Grid */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {indications.map((ind) => (
              <div key={ind.name} className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-8">
                <div className="h-full rounded-sm border border-stroke bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-dark-3 dark:bg-gray-dark overflow-hidden">
                  {/* Image */}
                  <div className="relative h-[180px] w-full bg-gray-50 dark:bg-dark">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                      {ind.name}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                      {ind.description}
                    </p>
                    <div className="mb-2">
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-body-color dark:text-body-color-dark">
                        Material
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {ind.materials.map((m) => (
                          <span
                            key={m}
                            className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-body-color dark:text-body-color-dark">
                        Compatible With
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {ind.products.map((p) => (
                          <span
                            key={p}
                            className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-black dark:bg-dark dark:text-white"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-20">
        <div className="container">
          <div className="rounded-sm bg-primary/5 border border-primary/20 px-8 py-10 text-center dark:bg-primary/10">
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Ready to bring these workflows into your practice?
            </h2>
            <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
              Our team can help you identify the right system for your case mix and throughput requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products/zylodent"
                className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/80"
              >
                View ZyloDent
              </Link>
              <Link
                href="/contact"
                className="rounded-xs border border-body-color/20 px-8 py-4 text-base font-semibold text-black duration-300 hover:border-primary hover:text-primary dark:text-white dark:hover:border-primary"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
