"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Menu, Percent, Handshake } from "lucide-react";
import { cn } from "@/lib/utils";

const EMPLOYMENT = ["Salaried", "Self-employed"] as const;

const PAN_RE = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const PHONE_RE = /^[6-9]\d{9}$/;
const PINCODE_RE = /^[1-9]\d{5}$/;

export function ApplyLoanWizard() {
  const router = useRouter();
  const [step, setStep] = React.useState<1 | 2>(1);

  const [pan, setPan] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [panError, setPanError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");

  const [employment, setEmployment] =
    React.useState<(typeof EMPLOYMENT)[number]>("Salaried");
  const [income, setIncome] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [pincodeError, setPincodeError] = React.useState("");

  const normalizedPan = pan.trim().toUpperCase().replace(/\s/g, "");
  const digitsPhone = phone.replace(/\D/g, "").slice(-10);

  const goStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    let ok = true;
    if (!PAN_RE.test(normalizedPan)) {
      setPanError("Enter a valid 10-character PAN (e.g. ABCDE1234F).");
      ok = false;
    } else setPanError("");
    if (!PHONE_RE.test(digitsPhone)) {
      setPhoneError("Enter a valid 10-digit Indian mobile number.");
      ok = false;
    } else setPhoneError("");
    if (!ok) return;
    setStep(2);
  };

  const finish = (e: React.FormEvent) => {
    e.preventDefault();
    const pc = pincode.replace(/\D/g, "").slice(0, 6);
    if (!PINCODE_RE.test(pc)) {
      setPincodeError("Enter a valid 6-digit PIN code.");
      return;
    }
    setPincodeError("");
    router.push("/apply/offers");
  };

  return (
    <div className="min-h-0 flex-1 bg-white">
      {step === 1 ? (
        <>
          {/* Hero — full-width air, narrow reading column (Paisabazaar-style proportions) */}
          <div className="bg-white px-5 pt-10 pb-16 sm:px-8 sm:pt-14 sm:pb-20 lg:px-12 lg:pt-16 lg:pb-24">
            <div className="mx-auto w-full max-w-5xl text-center">
              <div className="mb-8 flex justify-center sm:mb-10">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-[#93c5fd] bg-white px-4 py-2 text-sm font-semibold text-[#1d4ed8] shadow-sm transition hover:border-[#1e40af] hover:bg-blue-50/80"
                >
                  Talk to expert
                </a>
              </div>

              <div className="flex justify-center overflow-x-auto overflow-y-hidden pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
                <h1 className="whitespace-nowrap text-center font-medium tracking-tight text-slate-800 text-[clamp(11px,2.85vw,2.5rem)] leading-tight sm:leading-snug">
                  Up to{" "}
                  <span className="font-bold text-[#1e40af]">₹40 Lakhs</span>{" "}
                  personal loan{" "}
                  <span className="font-semibold text-[#2563eb]">
                    starting @ 11.5% p.a.
                  </span>
                </h1>
              </div>

              <div className="mt-10 flex flex-row flex-nowrap justify-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-12 sm:gap-3 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
                <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-100 bg-emerald-50/90 px-2.5 py-2 text-left text-[10px] font-medium text-emerald-900 shadow-sm min-[400px]:gap-2 min-[400px]:px-3 min-[400px]:text-xs sm:px-4 sm:text-sm">
                  <Percent
                    className="h-3.5 w-3.5 shrink-0 text-emerald-600 sm:h-4 sm:w-4"
                    strokeWidth={2}
                  />
                  Get cashback benefits on disbursal
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-orange-100 bg-orange-50/90 px-2.5 py-2 text-left text-[10px] font-medium text-orange-950 shadow-sm min-[400px]:gap-2 min-[400px]:px-3 min-[400px]:text-xs sm:px-4 sm:text-sm">
                  <Handshake
                    className="h-3.5 w-3.5 shrink-0 text-orange-600 sm:h-4 sm:w-4"
                    strokeWidth={2}
                  />
                  Quick turnaround &amp; transparent EMIs
                </span>
              </div>

              <form
                onSubmit={goStep2}
                className="mx-auto mt-14 w-full max-w-md space-y-5 text-left sm:mt-16"
                noValidate
              >
                <div>
                  <label className="sr-only" htmlFor="apply-pan">
                    PAN
                  </label>
                  <input
                    id="apply-pan"
                    name="pan"
                    autoComplete="off"
                    spellCheck={false}
                    maxLength={10}
                    value={pan}
                    onChange={(e) => {
                      setPan(e.target.value.toUpperCase());
                      setPanError("");
                    }}
                    placeholder="Enter your PAN (10 characters)"
                    className="h-[52px] w-full rounded-md border border-slate-200 bg-white px-4 text-[15px] text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]/30"
                    aria-invalid={Boolean(panError)}
                  />
                  {panError ? (
                    <p className="mt-2 text-sm text-red-600">{panError}</p>
                  ) : null}
                </div>
                <div>
                  <label className="sr-only" htmlFor="apply-phone">
                    Mobile number
                  </label>
                  <div className="flex h-[52px] items-center rounded-md border border-slate-200 bg-white pr-1 shadow-sm transition focus-within:border-[#1e40af] focus-within:ring-1 focus-within:ring-[#1e40af]/30">
                    <span className="shrink-0 pl-4 text-[15px] text-slate-500">
                      +91
                    </span>
                    <input
                      id="apply-phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => {
                        setPhone(
                          e.target.value.replace(/\D/g, "").slice(0, 10)
                        );
                        setPhoneError("");
                      }}
                      placeholder="Enter mobile number"
                      className="min-w-0 flex-1 bg-transparent py-2 pl-2 pr-3 text-[15px] text-slate-900 outline-none placeholder:text-slate-400"
                      aria-invalid={Boolean(phoneError)}
                    />
                  </div>
                  {phoneError ? (
                    <p className="mt-2 text-sm text-red-600">{phoneError}</p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="mt-2 flex h-[52px] w-full items-center justify-center rounded-md bg-[#1e40af] text-[15px] font-bold tracking-wide text-white shadow-md transition hover:bg-[#1d4ed8] hover:shadow-lg active:translate-y-px"
                >
                  Proceed
                </button>
              </form>

              <p className="mx-auto mt-8 max-w-[22rem] text-center text-[12px] leading-relaxed text-slate-500 sm:mt-10 sm:text-[13px]">
                By clicking on proceed, you have read and agree to
                MoneySolution&apos;s{" "}
                <a
                  href="#"
                  className="font-medium text-[#1e40af] underline-offset-2 hover:underline"
                >
                  Terms of Use
                </a>
                ,{" "}
                <a
                  href="#"
                  className="font-medium text-[#1e40af] underline-offset-2 hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                and consent to be contacted for your loan request.
              </p>
            </div>
          </div>

          {/* Trust — full-bleed soft band, airy stats with vertical rules */}
          <div className="border-t border-slate-100/80 bg-[#f0f7fc] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mx-auto max-w-2xl text-[15px] font-normal leading-relaxed text-slate-700 sm:text-base">
                MoneySolution is one of{" "}
                <span className="font-semibold text-[#1e40af]">
                  India&apos;s trusted loan
                </span>{" "}
                discovery partners.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className={cn(
                      "text-2xl leading-none sm:text-3xl",
                      i <= 4 ? "text-amber-400" : "text-amber-200"
                    )}
                    aria-hidden
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-base font-semibold text-slate-800">
                  4.5
                </span>
              </div>
              <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 divide-y divide-slate-200/90 sm:mt-14 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {[
                  ["1 Cr+", "Customers served"],
                  ["30+", "Lending partners"],
                  ["₹25,000 Cr+", "Loans facilitated"],
                ].map(([v, l]) => (
                  <div key={l} className="px-6 py-8 text-center sm:py-6">
                    <div className="text-xl font-bold tracking-tight text-[#1e40af] sm:text-2xl">
                      {v}
                    </div>
                    <div className="mt-1.5 text-xs font-medium text-slate-600 sm:text-sm">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="mx-auto max-w-md px-5 py-10 sm:max-w-lg sm:px-8 sm:py-14">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-bold text-[#0f172a] sm:text-xl">
                Tell us more about you!
              </h2>
              <button
                type="button"
                aria-label="Menu"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={finish} className="mt-8 space-y-8">
              <div>
                <p className="text-sm font-bold text-[#0f172a]">Employment type</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {EMPLOYMENT.map((label) => {
                    const selected = employment === label;
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => setEmployment(label)}
                        className={cn(
                          "rounded-full border px-2 py-2.5 text-center text-xs font-semibold transition sm:text-sm",
                          selected
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-slate-300 bg-white text-slate-500 hover:border-slate-400"
                        )}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-[#0f172a]">Monthly income</p>
                <input
                  type="text"
                  inputMode="numeric"
                  value={income}
                  onChange={(e) =>
                    setIncome(e.target.value.replace(/[^\d,]/g, ""))
                  }
                  placeholder="e.g. 26,500"
                  className="mt-3 h-12 w-full rounded-lg border border-slate-300 px-4 text-base text-[#0f172a] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label
                  className="text-sm font-bold text-[#0f172a]"
                  htmlFor="apply-pincode"
                >
                  Pincode
                </label>
                <input
                  id="apply-pincode"
                  name="pincode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value.replace(/\D/g, "").slice(0, 6));
                    setPincodeError("");
                  }}
                  placeholder="e.g. 110001"
                  className="mt-3 h-12 w-full rounded-lg border border-slate-300 px-4 text-base text-[#0f172a] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  aria-invalid={Boolean(pincodeError)}
                />
                {pincodeError ? (
                  <p className="mt-2 text-sm text-red-600">{pincodeError}</p>
                ) : (
                  <p className="mt-1.5 text-xs text-slate-500">
                    Current residential area PIN code
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="h-12 rounded-lg border border-slate-300 px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="h-12 flex-1 rounded-lg bg-[#1e40af] text-sm font-bold text-white shadow-sm transition hover:bg-[#1d4ed8] sm:max-w-xs"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
