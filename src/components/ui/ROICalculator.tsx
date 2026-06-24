'use client';

import { useState } from 'react';
import { calculateROI, formatUSD, IndicationKey } from '@/lib/calculateROI';

interface Row {
  key: IndicationKey;
  label: string;
  casesPerMonth: number;
  labCostPerCase: number;
}

interface ROICalculatorProps {
  indications: { key: IndicationKey; label: string; defaultCases?: number; defaultLabCost?: number }[];
  singleRow?: boolean;
}

export default function ROICalculator({ indications, singleRow = false }: ROICalculatorProps) {
  const [rows, setRows] = useState<Row[]>(
    indications.map((ind) => ({
      key: ind.key,
      label: ind.label,
      casesPerMonth: ind.defaultCases ?? 0,
      labCostPerCase: ind.defaultLabCost ?? 0,
    }))
  );

  const update = (key: IndicationKey, field: 'casesPerMonth' | 'labCostPerCase', value: number) => {
    setRows((prev) => prev.map((r) => (r.key === key ? { ...r, [field]: Math.max(0, value) } : r)));
  };

  const result = calculateROI(rows);

  // Light-mode Tailwind classes only — dark mode handled by the <style> block below
  // because browser UA stylesheets override Tailwind's dark: classes on <input> elements.
  const inputClass = [
    'roi-input',
    'w-24 h-8 px-2 rounded-md text-sm font-semibold text-center outline-none transition',
    'appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
    'bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#df7b26]',
  ].join(' ');

  // Light: gray-100 (neutral, no blue tint). Dark: handled by .dark .roi-row in <style> block.
  const separator = 'roi-row border-b border-gray-100';

  return (
    <>
    <style>{`
      .dark .roi-input {
        background-color: #141414 !important;
        border-color: rgba(255, 255, 255, 0.35) !important;
        color: #ffffff !important;
      }
      .dark .roi-input::placeholder {
        color: rgba(255, 255, 255, 0.65) !important;
      }
      .dark .roi-input:focus {
        border-color: #df7b26 !important;
      }
      .dark .roi-row {
        border-bottom-color: rgba(255, 255, 255, 0.18) !important;
      }
    `}</style>
    <div className="w-full max-w-4xl mx-auto">
      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className={separator}>
              {!singleRow && (
                <th className="pb-2 text-center font-semibold text-gray-900 dark:text-white text-sm">
                  Indication
                </th>
              )}
              <th className="pb-2 text-center font-semibold text-gray-900 dark:text-white text-sm px-6">
                Cases per Month
              </th>
              <th className="pb-2 text-center font-semibold text-gray-900 dark:text-white text-sm px-6">
                Avg. lab cost per case ($)
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className={`${separator} last:border-0`}>
                {!singleRow && (
                  <td className="py-2 text-center text-gray-700 dark:text-white font-medium text-sm">
                    {row.label}
                  </td>
                )}
                <td className="py-2 px-6 text-center">
                  <div className="flex justify-center">
                    <input
                      type="number"
                      min={0}
                      value={row.casesPerMonth === 0 ? '' : row.casesPerMonth}
                      placeholder="0"
                      onChange={(e) => update(row.key, 'casesPerMonth', Number(e.target.value))}
                      className={inputClass}
                    />
                  </div>
                </td>
                <td className="py-2 px-6 text-center">
                  <div className="flex justify-center">
                    <input
                      type="number"
                      min={0}
                      value={row.labCostPerCase === 0 ? '' : row.labCostPerCase}
                      placeholder="0"
                      onChange={(e) => update(row.key, 'labCostPerCase', Number(e.target.value))}
                      className={inputClass}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Results */}
      <div className="mt-10">
        <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Annual profit
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-gray-200 dark:border-white/15 p-6 text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Scenario A</p>
            <p className="text-sm text-gray-500 dark:text-white/50 mb-5">
              Design Service and In-house printing
            </p>
            <p className="text-4xl font-black text-[#df7b26]">
              {formatUSD(result.totalAnnualProfitA)}
            </p>
          </div>
          <div className="rounded-2xl border border-[#df7b26] p-6 text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Scenario B</p>
            <p className="text-sm text-gray-500 dark:text-white/50 mb-5">
              In-house Design and Printing
            </p>
            <p className="text-4xl font-black text-[#df7b26]">
              {formatUSD(result.totalAnnualProfitB)}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
