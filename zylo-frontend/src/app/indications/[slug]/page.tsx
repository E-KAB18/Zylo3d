import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import ZyloFooter from '@/components/layout/ZyloFooter';
import ROICalculator from '@/components/ui/ROICalculator';
import { indicationsData, getIndicationBySlug } from './indicationsData';
import { CALENDLY_URL } from '@/lib/constants';

export function generateStaticParams() {
  return indicationsData.map((ind) => ({ slug: ind.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndicationPage({ params }: PageProps) {
  const { slug } = await params;
  const indication = getIndicationBySlug(slug);

  if (!indication) {
    notFound();
  }

  return (
    <>
      <Header theme="header-light" />

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="zylo-hero-bg pt-40 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Link href="/indications" className="hover:text-[#df7b26] transition-colors">
              Indications
            </Link>
            <span>/</span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{indication.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-up" data-aos-duration="400">
              {/* Indication badge */}
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#df7b26]/30 bg-[#df7b26]/10 text-[#df7b26] text-xs font-bold uppercase tracking-wider mb-5">
                Indication
              </span>

              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
                {indication.name}
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
                {indication.description}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#df7b26] text-white font-bold text-sm hover:bg-[#c96d1e] transition shadow-lg shadow-[#df7b26]/25"
                >
                  Book a Demo
                </a>
                <Link
                  href="/products/zylodent"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition"
                >
                  See ZyloDent
                </Link>
              </div>

              {/* Proof chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {indication.proof.map((point, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-4"
                  >
                    <div className="text-[#df7b26] font-black text-lg mb-1">✓</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                      {point.title}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {point.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero side card */}
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="100"
              className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-6 shadow-xl"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                Quick overview
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-white/5">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Total workflow time</span>
                  <span className="text-sm font-black text-[#df7b26]">{indication.totalTime}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-white/5">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Workflow steps</span>
                  <span className="text-sm font-black text-gray-900 dark:text-white">{indication.workflowSteps.length} steps</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-white/5">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Validated materials</span>
                  <span className="text-sm font-black text-gray-900 dark:text-white">{indication.materials.filter(m => m.tag === 'Validated').length} options</span>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-2xl bg-[#df7b26]/8 border border-[#df7b26]/20">
                <div className="text-xs font-bold uppercase tracking-wider text-[#df7b26] mb-2">
                  The Zylo promise
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Move from scan to finished {indication.name.toLowerCase()} with a workflow your whole team can follow, no printing expert required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SECTION ─────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-[#141414] py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-up" data-aos-duration="400">
              <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white leading-tight mb-5">
                {indication.whySection.heading}
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {indication.whySection.body}
              </p>
            </div>

            {/* Workflow comparison */}
            <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="100" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1a1a1a] p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                  Typical fragmented stack
                </div>
                <div className="space-y-2">
                  {['CAD software', 'Manual file prep', 'Printer', 'Separate washer', 'Separate curing unit'].map((step) => (
                    <div key={step} className="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111111]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#df7b26]/20 bg-[#df7b26]/5 dark:bg-[#df7b26]/8 p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#df7b26] mb-3">
                  Zylo integrated workflow
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'ZyloCAD', desc: 'AI-assisted design' },
                    { label: 'ZyloPrep', desc: 'One-click file prep' },
                    { label: 'ZyloDent', desc: 'Print + wash + cure (all-in-one)' },
                  ].map((item) => (
                    <div key={item.label} className="p-2.5 rounded-xl border border-[#df7b26]/20 bg-white dark:bg-[#1a1a1a]">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{item.label}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 block mt-0.5">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKFLOW STEPS ──────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] dark:bg-[#1e1e1e] py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="400">
            <span className="text-xs font-bold uppercase tracking-wider text-[#df7b26] block mb-3">
              Workflow
            </span>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
              How it works: step by step
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A delegation-first workflow: AI design, one-click prep, then automated print–wash–cure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {indication.workflowSteps.map((step, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay={i * 50}
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-xl bg-[#df7b26]/10 border border-[#df7b26]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-black text-[#df7b26]">{i + 1}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                        {step.title}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <span className="flex-shrink-0 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1a1a1a] text-xs font-bold text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Total time */}
          <div
            data-aos="fade-up"
            data-aos-duration="400"
            className="rounded-2xl border border-[#df7b26]/20 bg-[#df7b26]/5 dark:bg-[#df7b26]/8 p-4 text-center"
          >
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Total workflow time:{' '}
              <strong className="text-gray-900 dark:text-white font-black">{indication.totalTime}</strong>
            </span>
          </div>
        </div>
      </section>

      {/* ── ROI CALCULATOR ──────────────────────────────────────────── */}
      <section className="bg-white dark:bg-[#141414] py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="400">
            <span className="text-xs font-bold uppercase tracking-wider text-[#df7b26] block mb-3">
              ROI Calculator
            </span>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
              Does it make economic sense?
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Estimate monthly and annual savings based on your volume and lab pricing.
              Use your real numbers: outputs update instantly.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="400">
            <ROICalculator defaults={indication.roiDefaults} />
          </div>
        </div>
      </section>

      {/* ── MATERIALS ───────────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] dark:bg-[#1e1e1e] py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div data-aos="fade-up" data-aos-duration="400">
              <span className="text-xs font-bold uppercase tracking-wider text-[#df7b26] block mb-3">
                Materials
              </span>
              <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
                Open, validated materials
              </h2>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300 max-w-xl">
                Choose materials by indication and IFU. Each validated material includes supporting documents.
              </p>
            </div>
            <Link
              href="/materials"
              className="flex-shrink-0 inline-flex items-center px-5 py-2.5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414] text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition"
            >
              View full material library
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {indication.materials.map((mat, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay={i * 50}
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414] p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-base font-black text-gray-900 dark:text-white">{mat.name}</span>
                  <span
                    className={`flex-shrink-0 px-2.5 py-1 rounded-full border text-xs font-bold ${
                      mat.tag === 'Validated'
                        ? 'border-[#df7b26]/30 bg-[#df7b26]/10 text-[#df7b26]'
                        : 'border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {mat.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  {mat.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition"
                  >
                    Validation Doc
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition"
                  >
                    IFU
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────── */}
      <section className="bg-[#df7b26] py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-up" data-aos-duration="400">
              <h2 className="text-2xl font-bold text-white leading-tight mb-3">
                Ready to get started?
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                Book a live demo and see how {indication.name} fits into your workflow.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="100"
              className="flex flex-col sm:flex-row gap-3 lg:justify-end"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-[#df7b26] font-bold text-sm hover:bg-gray-50 transition shadow-xl"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <ZyloFooter />
    </>
  );
}
