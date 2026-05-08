export function calculateEmi(
  principal: number,
  annualRatePct: number,
  tenureMonths: number
) {
  if (principal <= 0 || tenureMonths <= 0) {
    return { emi: 0, totalInterest: 0, totalPayable: 0 };
  }
  const r = annualRatePct / 12 / 100;
  const n = tenureMonths;
  const emi =
    r === 0
      ? principal / n
      : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayable = emi * n;
  const totalInterest = totalPayable - principal;
  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayable: Math.round(totalPayable),
  };
}

const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const inrCompactFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

export function formatInr(value: number) {
  return inrFormatter.format(value);
}

export function formatInrPlain(value: number) {
  return "₹" + inrCompactFormatter.format(value);
}
