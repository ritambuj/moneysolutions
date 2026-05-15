"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { Slider } from "@/components/ui/slider";
import { calculateEmi, formatInr, formatInrPlain } from "@/lib/finance";
import { cn } from "@/lib/utils";

const Donut = dynamic(() => import("./emi-donut").then((m) => m.EmiDonut), {
  ssr: false,
  loading: () => (
    <div className="h-[220px] w-[220px] animate-pulse rounded-full bg-muted" />
  ),
});

const AMOUNT_MIN = 10_000;
const AMOUNT_MAX = 500_000;
const AMOUNT_STEP = 1_000;

const TENURE_MIN = 3;
const TENURE_MAX = 36;
const TENURE_STEP = 1;

const RATE_MIN = 12;
const RATE_MAX = 36;
const RATE_STEP = 0.5;

export function EmiCalculator() {
  const [amount, setAmount] = React.useState(145_000);
  const [tenure, setTenure] = React.useState(12);
  const [rate, setRate] = React.useState(18);

  const { emi, totalInterest, totalPayable } = React.useMemo(
    () => calculateEmi(amount, rate, tenure),
    [amount, rate, tenure]
  );

  return (
    <section
      id="emi-calculator"
      className="relative overflow-hidden bg-gradient-to-b from-[#f4f8fb] to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Loan Calculators
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Personal Loan EMI Calculator
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Slide to set your loan amount, tenure and interest rate — see your
            monthly EMI update in real time.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_24px_60px_rgba(14,31,35,0.06)]">
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            <div className="p-6 sm:p-10 lg:border-r lg:border-border">
              <SliderField
                label="Loan amount"
                valueDisplay={formatInr(amount)}
                value={amount}
                min={AMOUNT_MIN}
                max={AMOUNT_MAX}
                step={AMOUNT_STEP}
                onChange={setAmount}
                rangeLabels={[
                  formatInrPlain(AMOUNT_MIN),
                  formatInrPlain(AMOUNT_MAX),
                ]}
                inputType="currency"
              />

              <div className="my-8 h-px bg-border" />

              <SliderField
                label="Tenure"
                valueDisplay={`${tenure} ${tenure === 1 ? "month" : "months"}`}
                value={tenure}
                min={TENURE_MIN}
                max={TENURE_MAX}
                step={TENURE_STEP}
                onChange={setTenure}
                rangeLabels={[`${TENURE_MIN} mo`, `${TENURE_MAX} mo`]}
              />

              <div className="my-8 h-px bg-border" />

              <SliderField
                label="Interest rate (p.a.)"
                valueDisplay={`${rate.toFixed(1)}%`}
                value={rate}
                min={RATE_MIN}
                max={RATE_MAX}
                step={RATE_STEP}
                onChange={setRate}
                rangeLabels={[`${RATE_MIN}%`, `${RATE_MAX}%`]}
              />
            </div>

            <div className="bg-[#0E3D3A] p-6 sm:p-10 text-white">
              <div className="text-sm font-medium uppercase tracking-wider text-white/60">
                Your monthly EMI
              </div>
              <div className="mt-2 text-4xl font-bold sm:text-5xl">
                {formatInr(emi)}
              </div>

              <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <div className="relative">
                  <Donut principal={amount} interest={totalInterest} />
                </div>
                <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-1">
                  <Stat
                    swatch="bg-accent"
                    label="Principal amount"
                    value={formatInr(amount)}
                  />
                  <Stat
                    swatch="bg-white/30"
                    label="Total interest"
                    value={formatInr(totalInterest)}
                  />
                  <div className="mt-2 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-xs uppercase tracking-wider text-white/60">
                      Total payable
                    </div>
                    <div className="mt-1 text-2xl font-bold">
                      {formatInr(totalPayable)}
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/apply/offers"
                className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-base font-semibold text-accent-foreground shadow-sm transition hover:brightness-95"
              >
                Apply for this loan
              </a>
              <p className="mt-3 text-center text-xs text-white/60">
                Indicative calculation. Final terms depend on eligibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderField({
  label,
  valueDisplay,
  value,
  min,
  max,
  step,
  onChange,
  rangeLabels,
  inputType,
}: {
  label: string;
  valueDisplay: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  rangeLabels: [string, string];
  inputType?: "currency";
}) {
  const [editing, setEditing] = React.useState(false);
  const [draft, setDraft] = React.useState(String(value));

  React.useEffect(() => {
    if (!editing) setDraft(String(value));
  }, [value, editing]);

  const commit = () => {
    const parsed = Number(draft.replace(/[^\d.]/g, ""));
    if (!Number.isNaN(parsed)) {
      const clamped = Math.min(max, Math.max(min, parsed));
      onChange(clamped);
    }
    setEditing(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <label className="text-sm font-semibold text-foreground/80">
          {label}
        </label>
        {editing ? (
          <input
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => {
              if (e.key === "Enter") commit();
              if (e.key === "Escape") {
                setDraft(String(value));
                setEditing(false);
              }
            }}
            className="w-40 rounded-lg border-2 border-primary bg-white px-3 py-1.5 text-right text-base font-bold text-primary outline-none"
          />
        ) : (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className={cn(
              "rounded-lg border-2 border-transparent bg-primary/5 px-3 py-1.5 text-right text-base font-bold text-primary transition hover:border-primary/30",
              inputType === "currency" && "tabular-nums"
            )}
          >
            {valueDisplay}
          </button>
        )}
      </div>
      <div className="mt-4">
        <Slider
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={(v) => onChange(v[0])}
        />
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>{rangeLabels[0]}</span>
          <span>{rangeLabels[1]}</span>
        </div>
      </div>
    </div>
  );
}

function Stat({
  swatch,
  label,
  value,
}: {
  swatch: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className={cn("h-3 w-3 shrink-0 rounded-full", swatch)} />
      <div className="flex-1">
        <div className="text-xs text-white/60">{label}</div>
        <div className="text-base font-semibold">{value}</div>
      </div>
    </div>
  );
}
