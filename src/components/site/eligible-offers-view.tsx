import Image from "next/image";
import Link from "next/link";
import { Calculator, TrendingUp } from "lucide-react";
import { formatInr } from "@/lib/finance";
import { ELIGIBLE_OFFERS } from "@/lib/eligible-offers-data";
import { cn } from "@/lib/utils";

function OffersHeroArt() {
  return (
    <div
      className="relative hidden shrink-0 sm:block sm:w-40 md:w-48 lg:w-56"
      aria-hidden
    >
      <svg viewBox="0 0 200 160" className="h-auto w-full text-primary/25">
        <rect
          x="52"
          y="88"
          width="96"
          height="56"
          rx="10"
          fill="currentColor"
          className="text-primary/15"
        />
        <path
          d="M76 88V72c0-8 6-14 14-14h20c8 0 14 6 14 14v16"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-primary/35"
        />
        <text
          x="100"
          y="58"
          textAnchor="middle"
          className="fill-accent text-2xl font-bold"
          style={{ fontFamily: "system-ui" }}
        >
          ₹
        </text>
        <text
          x="132"
          y="42"
          textAnchor="middle"
          className="fill-primary/40 text-lg font-bold"
        >
          %
        </text>
        <circle cx="64" cy="48" r="6" className="fill-accent/60" />
        <circle cx="148" cy="62" r="5" className="fill-primary/25" />
      </svg>
    </div>
  );
}

export function EligibleOffersView() {
  return (
    <div className="min-h-0 flex-1 bg-gradient-to-b from-surface-soft via-surface-soft/60 to-white pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          ← Back to home
        </Link>

        <div className="mt-8 flex flex-col gap-8 sm:mt-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Eligible offers for you
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Your tentative offers are ready. Don&apos;t miss out — click{" "}
              <span className="font-semibold text-foreground">Apply now</span> to
              move ahead with the deal that fits you best.
            </p>
          </div>
          <OffersHeroArt />
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-white shadow-[0_12px_40px_rgba(14,31,35,0.08)]">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-4 text-sm font-semibold sm:px-5">
                  Lender name
                </th>
                <th className="px-4 py-4 text-sm font-semibold sm:px-5">
                  Loan amount
                </th>
                <th className="px-4 py-4 text-sm font-semibold sm:px-5">
                  Interest rate
                </th>
                <th className="px-4 py-4 text-sm font-semibold sm:px-5">
                  Tenure
                </th>
                <th className="px-4 py-4 text-sm font-semibold sm:px-5">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ELIGIBLE_OFFERS.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-border last:border-b-0 transition-colors hover:bg-muted/40"
                >
                  <td className="px-4 py-5 align-middle sm:px-5">
                    <div className="flex items-center gap-3">
                      {row.logo ? (
                        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white p-1">
                          <Image
                            src={row.logo.src}
                            alt=""
                            width={40}
                            height={40}
                            className="h-full w-full object-contain"
                          />
                        </span>
                      ) : (
                        <span
                          className={cn(
                            "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-primary/5 text-xs font-bold text-primary"
                          )}
                          aria-hidden
                        >
                          {row.initials}
                        </span>
                      )}
                      <span className="font-semibold text-foreground">
                        {row.lenderName}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-5 align-middle sm:px-5">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-muted-foreground">
                        Loan upto
                      </span>
                      <span className="text-lg font-bold text-foreground">
                        {formatInr(row.loanUpto)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Calculator className="h-3.5 w-3.5 shrink-0 opacity-70" />
                        EMI: {formatInr(row.emi)}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-5 align-middle sm:px-5">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs text-muted-foreground">
                        Starting from
                      </span>
                      <span className="text-lg font-bold text-foreground">
                        {row.rateFromPct}%
                      </span>
                      <span className="inline-flex w-fit items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        <TrendingUp className="h-3 w-3 shrink-0" />
                        APR: {row.aprPct}% p.a.
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-5 align-middle sm:px-5">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-muted-foreground">
                        Maximum upto
                      </span>
                      <span className="text-lg font-bold text-foreground">
                        {row.tenureMaxMonths} months
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-5 align-middle sm:px-5">
                    <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-sm transition hover:bg-[var(--primary-hover)] sm:text-sm"
                      >
                        Apply now
                      </button>
                      <button
                        type="button"
                        className="text-center text-sm font-semibold text-primary underline-offset-2 hover:underline sm:text-left"
                      >
                        Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs italic leading-relaxed text-muted-foreground sm:text-sm">
          Note: This offer has been tailored based on the information you
          submitted. Final offer may vary slightly post verification and credit
          bureau analysis.
        </p>
      </div>
    </div>
  );
}
