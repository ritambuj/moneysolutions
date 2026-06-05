"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Monitor,
  X,
  Zap,
  Wallet,
  BadgeCheck,
} from "lucide-react";
import { createLead } from "@/lib/leads";

const STORAGE_KEY = "ms-timed-promo-dismissed";
const PROMO_IMAGE = "/images/promo/timed-modal.png";
/** Show after the user has been on the page this long (ms). */
const SHOW_AFTER_MS = 22_000;

const perks = [
  {
    icon: Monitor,
    label: "100% digital process",
  },
  {
    icon: Zap,
    label: "Instant approval",
  },
  {
    icon: Wallet,
    label: "Easy EMIs options",
  },
  {
    icon: BadgeCheck,
    label: "0 foreclosure charges",
  },
] as const;

export function TimedPromoModal() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [mobile, setMobile] = React.useState("");
  const [saving, setSaving] = React.useState(false);
  const closeRef = React.useRef<HTMLButtonElement>(null);

  const dismiss = React.useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }, []);

  React.useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* private mode */
    }
    const id = window.setTimeout(() => setOpen(true), SHOW_AFTER_MS);
    return () => window.clearTimeout(id);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      id="demo-modal"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div
        className="relative flex min-h-[420px] w-[313px] max-h-[90vh] flex-col overflow-y-auto rounded-2xl bg-white shadow-2xl sm:min-h-[440px] lg:min-h-[480px] lg:w-[850px] lg:flex-row lg:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <PromoVisual />

        <div className="relative flex flex-1 flex-col px-4 pb-6 pt-10 lg:w-[483px] lg:px-7 lg:pb-8 lg:pt-12">
          <button
            ref={closeRef}
            type="button"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-muted lg:right-6 lg:top-6"
            aria-label="Close"
            onClick={dismiss}
          >
            <X className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>

          <h1
            id="promo-modal-title"
            className="mt-1 max-w-[18rem] text-left text-base font-bold leading-snug lg:mx-0 lg:max-w-[18rem] lg:text-[32px] lg:leading-[50px]"
          >
            Get up to{" "}
            <span className="whitespace-nowrap text-primary">
              ₹10 lakhs
            </span>{" "}
            in just{" "}
            <span className="whitespace-nowrap text-primary">
              2 minutes!
            </span>
          </h1>

          <div className="mt-2 flex justify-around gap-2 rounded-2xl py-1.5 lg:gap-4 lg:py-3.5">
            {perks.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex min-w-0 flex-1 flex-col items-center text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <Icon className="h-5 w-5 lg:h-6 lg:w-6" aria-hidden />
                </span>
                <p className="mt-1.5 text-[10px] font-medium text-black lg:mt-2.5 lg:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-3 text-sm font-medium text-foreground lg:text-base">
            Mobile Number
          </p>
          <form
            className="mt-1"
            onSubmit={async (e) => {
              e.preventDefault();
              const digits = mobile.replace(/\D/g, "").slice(-10);
              if (digits.length === 10) {
                setSaving(true);
                await createLead({ source: "promo_modal", phone: digits });
                setSaving(false);
              }
              dismiss();
              router.push("/apply");
            }}
          >
            <div className="flex w-full max-w-lg flex-col gap-2 sm:flex-row sm:items-stretch">
              <label className="sr-only" htmlFor="promo-mobile">
                Enter your mobile number
              </label>
              <input
                id="promo-mobile"
                name="mobile"
                inputMode="numeric"
                autoComplete="tel"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                placeholder="Enter mobile number"
                className="w-full rounded-lg border border-border bg-white p-3 text-center text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 lg:mr-2 lg:p-4 lg:text-left lg:text-xl"
                aria-describedby="btn-step-1"
              />
              <button
                type="submit"
                id="btn-step-1"
                disabled={saving}
                className="w-full shrink-0 rounded-lg border border-primary bg-primary px-3 py-2.5 text-base font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60 sm:w-2/5 lg:py-4 lg:text-xl"
              >
                <span className="hidden lg:inline">
                  {saving ? "Saving…" : "Get loan now"}
                </span>
                <span className="lg:hidden">
                  {saving ? "Saving…" : "Get loan"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function PromoVisual() {
  return (
    <div className="relative flex h-[200px] w-full shrink-0 overflow-hidden rounded-t-2xl bg-[#F9E1E8] sm:h-[240px] lg:h-full lg:min-h-[480px] lg:w-[367px] lg:rounded-l-2xl lg:rounded-tr-none lg:rounded-se-none">
      <Image
        src={PROMO_IMAGE}
        alt="Couple planning finances on a laptop"
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 367px"
        priority
      />
    </div>
  );
}
