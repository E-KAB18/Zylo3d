// In-house cost per case — taken directly from "Total Cost" cells
// in the Assumptions sheet of the ROI Excel model.
// Scenario A = Design Service + In-house Printing
// Scenario B = In-house Design + In-house Printing

export const INDICATION_COSTS = {
  aligner:        { a: 356.6666666666667, b: 231.6666666666667 },
  denture:        { a: 120.8333333333333, b: 87.33333333333333 },
  crown_bridge:   { a: 22.66666666666667, b: 26                },
  night_guard:    { a: 72.83333333333333, b: 37.83333333333333 },
  surgical_guide: { a: 187.3333333333333, b: 49               },
} as const;

export type IndicationKey = keyof typeof INDICATION_COSTS;

export interface IndicationInput {
  key: IndicationKey;
  label: string;
  casesPerMonth: number;
  labCostPerCase: number;
}

export interface ROIResult {
  totalAnnualProfitA: number;
  totalAnnualProfitB: number;
  rows: {
    key: IndicationKey;
    label: string;
    annualProfitA: number;
    annualProfitB: number;
  }[];
}

export function calculateROI(inputs: IndicationInput[]): ROIResult {
  const rows = inputs.map((input) => {
    const costs = INDICATION_COSTS[input.key];
    const profitPerCaseA = Math.max(0, input.labCostPerCase - costs.a);
    const profitPerCaseB = Math.max(0, input.labCostPerCase - costs.b);
    return {
      key: input.key,
      label: input.label,
      annualProfitA: profitPerCaseA * input.casesPerMonth * 12,
      annualProfitB: profitPerCaseB * input.casesPerMonth * 12,
    };
  });

  return {
    rows,
    totalAnnualProfitA: rows.reduce((sum, r) => sum + r.annualProfitA, 0),
    totalAnnualProfitB: rows.reduce((sum, r) => sum + r.annualProfitB, 0),
  };
}

export function formatUSD(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}
