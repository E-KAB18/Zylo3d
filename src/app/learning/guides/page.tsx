import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Practice Guides — Zylo3D Learning",
  description: "Indication-based clinical workflows validated by Zylo3D experts — from splints to surgical guides.",
};

const guides = [
  {
    title: "Splint Manufacturing Workflow",
    description: "Learn how to produce accurate, durable dental splints using Zylo3D printers, validated splint resins, and DentCure post-processing.",
    meta: ["ZyloDent / MicroDent", "Splint Resin", "ZyloPrep", "DentCure"],
  },
  {
    title: "Diagnostic Model Workflow",
    description: "Produce high-accuracy diagnostic models from intraoral scan data using optimised model resin profiles.",
    meta: ["ZyloDent / MicroDent", "Model Resin", "ZyloPrep", "DentCure"],
  },
  {
    title: "Denture Base Workflow",
    description: "Step-by-step guide for full and partial denture base production — from design to biocompatible final output.",
    meta: ["ZyloDent", "Denture Resin", "ZyloPrep", "DentCure"],
  },
  {
    title: "Single Unit Crown & Bridge",
    description: "Produce accurate, well-fitting crowns and bridges using validated restorative resin profiles and calibrated print settings.",
    meta: ["ZyloDent / MicroDent", "Restorative Resin", "ZyloPrep", "DentCure"],
  },
  {
    title: "Surgical Guide Workflow",
    description: "Produce precisely fitted implant surgical guides from CBCT data with predictable sleeve positioning.",
    meta: ["ZyloDent / MicroDent", "Model Resin", "ZyloPrep", "DentCure"],
  },
  {
    title: "Sports Guard Workflow",
    description: "Custom-fit sports mouthguards with consistent wall thickness and validated impact resistance.",
    meta: ["ZyloDent / MicroDent", "Splint Resin", "ZyloPrep", "DentCure"],
  },
];

export default function GuidesPage() {
  return (
    <>
      <Breadcrumb pageName="Best Practice Guides" description="Step-by-step clinical workflows validated by Zylo3D experts." />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {guides.map((g) => (
              <div key={g.title} className="w-full px-4 md:w-1/2 lg:w-1/3 mb-8">
                <div className="h-full rounded-sm border border-stroke bg-white p-8 shadow-sm dark:border-dark-3 dark:bg-gray-dark">
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{g.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-body-color dark:text-body-color-dark">{g.description}</p>
                  <div className="mb-5 flex flex-wrap gap-1">
                    {g.meta.map((m) => (
                      <span key={m} className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-black dark:bg-dark dark:text-white">
                        {m}
                      </span>
                    ))}
                  </div>
                  <span className="inline-block rounded bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    PDF Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
