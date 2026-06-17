'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ROICalculatorProps {
  defaults: {
    casesPerMonth: number;
    labCostPerUnit: number;
    zyloCostPerUnit: number;
    unitLabel: string;
  };
}

function formatCurrency(n: number): string {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

export default function ROICalculator({ defaults }: ROICalculatorProps) {
  const [cases, setCases] = useState(defaults.casesPerMonth);
  const [labFee, setLabFee] = useState(defaults.labCostPerUnit);
  const [zyloCost, setZyloCost] = useState(defaults.zyloCostPerUnit);

  const [monthlySavings, setMonthlySavings] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [monthlyLab, setMonthlyLab] = useState(0);
  const [monthlyZylo, setMonthlyZylo] = useState(0);

  useEffect(() => {
    const mLab = Math.max(0, cases * labFee);
    const mZylo = Math.max(0, cases * zyloCost);
    const mSave = Math.max(0, mLab - mZylo);
    setMonthlyLab(mLab);
    setMonthlyZylo(mZylo);
    setMonthlySavings(mSave);
    setAnnualSavings(mSave * 12);
  }, [cases, labFee, zyloCost]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Inputs */}
      <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl border border-gray-200 dark:border-white/10 p-6">
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-5">
          Enter your numbers
        </h3>
        <div className="grid gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              {defaults.unitLabel.charAt(0).toUpperCase() + defaults.unitLabel.slice(1)} per month
            </label>
            <input
              type="number"
              min={0}
              value={cases}
              onChange={(e) => setCases(Math.max(0, Number(e.target.value)))}
              className="w-full h-11 px-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111111] text-gray-900 dark:text-white text-sm font-semibold outline-none focus:border-[#df7b26] focus:ring-2 focus:ring-[#df7b26]/20 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              Average lab fee per unit (USD)
            </label>
            <input
              type="number"
              min={0}
              value={labFee}
              onChange={(e) => setLabFee(Math.max(0, Number(e.target.value)))}
              className="w-full h-11 px-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111111] text-gray-900 dark:text-white text-sm font-semibold outline-none focus:border-[#df7b26] focus:ring-2 focus:ring-[#df7b26]/20 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              Estimated Zylo cost per unit (USD)
            </label>
            <input
              type="number"
              min={0}
              value={zyloCost}
              onChange={(e) => setZyloCost(Math.max(0, Number(e.target.value)))}
              className="w-full h-11 px-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111111] text-gray-900 dark:text-white text-sm font-semibold outline-none focus:border-[#df7b26] focus:ring-2 focus:ring-[#df7b26]/20 transition"
            />
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Replace Zylo cost/unit with your validated material + consumables estimate.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-2xl bg-[#df7b26] text-white text-sm font-bold hover:bg-[#c96d1e] transition"
          >
            Request ROI Report
          </Link>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl border border-gray-200 dark:border-white/10 p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Monthly lab spend
          </div>
          <div className="mt-3 text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            {formatCurrency(monthlyLab)}
          </div>
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Current workflow</div>
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl border border-gray-200 dark:border-white/10 p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Monthly in-house cost
          </div>
          <div className="mt-3 text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            {formatCurrency(monthlyZylo)}
          </div>
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">With Zylo</div>
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl border border-[#df7b26]/30 p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-[#df7b26]">
            Estimated monthly savings
          </div>
          <div className="mt-3 text-3xl font-black text-[#df7b26] tracking-tight">
            {formatCurrency(monthlySavings)}
          </div>
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">vs. lab outsourcing</div>
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl border border-[#df7b26]/30 p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-[#df7b26]">
            Estimated annual savings
          </div>
          <div className="mt-3 text-3xl font-black text-[#df7b26] tracking-tight">
            {formatCurrency(annualSavings)}
          </div>
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">12-month projection</div>
        </div>
      </div>
    </div>
  );
}
