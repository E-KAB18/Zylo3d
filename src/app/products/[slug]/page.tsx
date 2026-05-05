import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import productsData from "@/data/productsData";
import ProductCTAs from "@/components/ProductCTAs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Zylo3D`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-[120px] pb-16 md:pt-[150px] md:pb-20 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Zylo3D Hardware
              </p>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                {product.name}
                <span className="block text-xl font-medium text-body-color dark:text-body-color-dark mt-2 sm:text-2xl">
                  {product.tagline}
                </span>
              </h1>
              <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                {product.description}
              </p>
              <p className="mb-8 text-2xl font-bold text-primary">{product.price}</p>
              <ProductCTAs productName={product.name} />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto mt-12 max-w-[520px] lg:mt-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={520}
                  height={520}
                  className="mx-auto w-full object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className="py-16 md:py-20 bg-gray-light dark:bg-dark">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Key Features
          </h2>
          <ul className="mx-auto max-w-2xl space-y-4">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 fill-white" viewBox="0 0 12 10">
                    <path d="M10.3 0.3L4 6.6 1.7 4.3 0.3 5.7l3.7 3.7 7.7-7.7z" />
                  </svg>
                </span>
                <span className="text-base text-body-color dark:text-body-color-dark sm:text-lg">
                  {f}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center gap-4 text-sm text-body-color dark:text-body-color-dark">
            <span className="font-medium">Validated by:</span>
            <span>BEGO</span>
            <span>·</span>
            <span>Pro3dure</span>
            <span>·</span>
            <span>Pac-Dent</span>
          </div>
        </div>
      </section>

      {/* ── Validated Dental Indications ── */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-dark">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Validated Dental Indications
          </h2>
          <div className="-mx-4 flex flex-wrap justify-center">
            {product.indications.map((ind, i) => (
              <div key={i} className="w-full px-4 sm:w-1/2 lg:w-1/3 mb-8">
                <div className="rounded-sm border border-body-color/10 bg-white p-6 shadow-md dark:bg-dark dark:border-body-color/20">
                  <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    {ind.name}
                  </h4>
                  <div className="flex gap-6 text-sm text-body-color dark:text-body-color-dark">
                    <span>
                      <span className="font-bold text-primary">{ind.minutes}</span> min
                    </span>
                    <span>
                      <span className="font-bold text-primary">{ind.clicks}</span> clicks
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI Calculator ── */}
      <section className="py-16 md:py-20 bg-gray-light dark:bg-dark">
        <div className="container">
          <h2 className="mb-4 text-center text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Calculate Your Savings & Annual Profit Increments
          </h2>
          <p className="mb-10 text-center text-body-color dark:text-body-color-dark">
            Based on average lab outsourcing costs vs. in-house production with {product.name}.
          </p>
          <div className="overflow-x-auto rounded-sm border border-body-color/10 dark:border-body-color/20">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-5 py-4 font-semibold">Application</th>
                  <th className="px-5 py-4 font-semibold">Lab Cost / Case</th>
                  <th className="px-5 py-4 font-semibold">Zylo Cost / Case</th>
                  <th className="px-5 py-4 font-semibold">Profit / Case</th>
                  <th className="px-5 py-4 font-semibold">Annual Profit (20 cases/mo)</th>
                </tr>
              </thead>
              <tbody>
                {product.calculator.map((row, i) => {
                  const profitPerCase = row.labCost - row.zyloCost;
                  const annualProfit = profitPerCase * 20 * 12;
                  return (
                    <tr
                      key={i}
                      className={`border-b border-body-color/10 dark:border-body-color/20 ${
                        i % 2 === 0
                          ? "bg-white dark:bg-gray-dark"
                          : "bg-gray-light/50 dark:bg-dark"
                      }`}
                    >
                      <td className="px-5 py-4 font-medium text-black dark:text-white">
                        {row.application}
                      </td>
                      <td className="px-5 py-4 text-body-color dark:text-body-color-dark">
                        ${row.labCost}
                      </td>
                      <td className="px-5 py-4 text-primary font-semibold">${row.zyloCost}</td>
                      <td className="px-5 py-4 text-body-color dark:text-body-color-dark">
                        ${profitPerCase}
                      </td>
                      <td className="px-5 py-4 font-bold text-black dark:text-white">
                        ${annualProfit.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-body-color dark:text-body-color-dark">
            * Estimates based on 20 cases/month per indication. Actual savings vary.
          </p>
        </div>
      </section>

      {/* ── Specifications ── */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-dark">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Specifications
          </h2>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-sm border border-body-color/10 dark:border-body-color/20">
            {product.specs.map((spec, i) => (
              <div
                key={i}
                className={`flex justify-between px-6 py-4 ${
                  i % 2 === 0
                    ? "bg-white dark:bg-gray-dark"
                    : "bg-gray-light/50 dark:bg-dark"
                } ${i !== product.specs.length - 1 ? "border-b border-body-color/10 dark:border-body-color/20" : ""}`}
              >
                <span className="font-medium text-black dark:text-white">{spec.label}</span>
                <span className="text-body-color dark:text-body-color-dark">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compatibility ── */}
      <section className="py-16 md:py-20 bg-gray-light dark:bg-dark">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Fully Integrated with the Zylo3D Ecosystem
            </h3>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark sm:text-lg">
              {product.compatibilityNote}
            </p>
            <Link
              href="/store"
              className="inline-block text-primary font-semibold hover:underline"
            >
              View Compatible Materials →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to bring {product.name} into your practice?
          </h2>
          <p className="mb-8 text-white/80 text-lg">
            Join clinics and labs worldwide using Zylo3D to produce faster, better, and more profitably.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/store"
              className="rounded-xs bg-white px-10 py-4 text-base font-bold text-primary duration-300 hover:bg-white/90"
            >
              Add to Cart
            </Link>
            <Link
              href="/contact"
              className="rounded-xs border border-white/50 px-10 py-4 text-base font-semibold text-white duration-300 hover:border-white"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
