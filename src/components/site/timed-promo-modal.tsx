"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  BadgePercent,
  Monitor,
  X,
  Zap,
  Wallet,
  BadgeCheck,
} from "lucide-react";

const STORAGE_KEY = "ms-timed-promo-dismissed";
/** Show after the user has been on the page this long (ms). */
const SHOW_AFTER_MS = 22_000;

const CHERRY = "#e11d63";

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
            <span style={{ color: CHERRY }} className="whitespace-nowrap">
              ₹10 lakhs
            </span>{" "}
            in just{" "}
            <span style={{ color: CHERRY }} className="whitespace-nowrap">
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
            onSubmit={(e) => {
              e.preventDefault();
              dismiss();
              router.push("/apply/offers");
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
                placeholder="Enter mobile number"
                className="w-full rounded-lg border border-border bg-white p-3 text-center text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 lg:mr-2 lg:p-4 lg:text-left lg:text-xl"
                aria-describedby="btn-step-1"
              />
              <button
                type="submit"
                id="btn-step-1"
                className="w-full shrink-0 rounded-lg border border-primary bg-primary px-3 py-2.5 text-base font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-2/5 lg:py-4 lg:text-xl"
              >
                <span className="hidden lg:inline">Get loan now</span>
                <span className="lg:hidden">Get loan</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/** Left column: use branded images from `/public` when present; otherwise fallback art. */
function PromoVisual() {
  const [desktopOk, setDesktopOk] = React.useState(true);
  const [mobileOk, setMobileOk] = React.useState(true);

  return (
    <div className="flex h-[161px] w-full shrink-0 items-center justify-center overflow-hidden rounded-t-2xl bg-[#F9E1E8] lg:h-full lg:min-h-[480px] lg:w-[367px] lg:rounded-l-2xl lg:rounded-tr-none lg:rounded-se-none">
      <div className="relative hidden h-full min-h-[200px] w-full lg:block">
        {desktopOk ? (
          <Image
            src="/images/promo/popup-desktop-view.png"
            alt="MoneySolution promotional graphic"
            fill
            className="object-cover object-center"
            sizes="367px"
            priority
            onError={() => setDesktopOk(false)}
          />
        ) : (
          <PromoFallback className="h-full w-full rounded-2xl lg:rounded-l-2xl" />
        )}
      </div>
      <div className="relative block h-full w-full lg:hidden">
        {mobileOk ? (
          <Image
            src="/images/promo/popup-mobile-view.png"
            alt="MoneySolution promotional graphic"
            width={626}
            height={322}
            className="h-full w-full rounded-2xl object-cover"
            sizes="100vw"
            priority
            onError={() => setMobileOk(false)}
          />
        ) : (
          <PromoFallback className="h-full min-h-[140px] w-full rounded-2xl" />
        )}
      </div>
    </div>
  );
}

function PromoFallback({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-[#fce4ec] to-[#F9E1E8] ${className ?? ""}`}
    >
      <div className="flex flex-col items-center gap-2 p-6 text-center">
        <BadgePercent
          className="h-16 w-16 text-primary opacity-90"
          strokeWidth={1.25}
          aria-hidden
        />
        <span className="text-sm font-semibold text-primary">
          MoneySolution
        </span>
        <span className="max-w-[240px] text-xs text-muted-foreground">
          Add{" "}
          <code className="rounded bg-white/60 px-1">
            public/images/promo/popup-desktop-view.png
          </code>{" "}
          and{" "}
          <code className="rounded bg-white/60 px-1">
            public/images/promo/popup-mobile-view.png
          </code>{" "}
          for your promo art.
        </span>
      </div>
    </div>
  );
}
