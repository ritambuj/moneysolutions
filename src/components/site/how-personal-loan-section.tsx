"use client";

import * as React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Online application",
    description:
      "Complete a short online application with a few basics to start your loan request in minutes.",
    imageSrc: "/images/partners/ms1.png",
  },
  {
    title: "Instant approval",
    description:
      "Complete verification with a quick upload of standard documents — no branch visits required.",
    imageSrc: "/images/partners/ms2.png",
  },
  {
    title: "Cash-in-bank in minutes",
    description:
      "Choose your loan amount and tenure; funds are transferred straight to your bank account.",
    imageSrc: "/images/partners/ms3.png",
  },
] as const;

/** Desktop row height (Fibe-style fixed steps; drives rail + pin). */
const ROW_PX = 280;
const FIRST_DOT_CENTER = ROW_PX / 2;
const LINE_HEIGHT = (STEPS.length - 1) * ROW_PX;

const SKY = "#E8F5FD";
const MIDNIGHT = "#14142B";
const SUB_GREY = "#5C6670";
const RAIL = "#0e3d3a";
const DOT_BORDER = "#C8CED4";

/** Pick the step row whose vertical centre is closest to the viewport centre (stable while scrolling). */
function pickStepClosestToViewportCenter(
  nodes: readonly (HTMLElement | null)[]
): number {
  const list = nodes.filter((n): n is HTMLElement => Boolean(n));
  if (!list.length) return 0;
  if (typeof window === "undefined") return 0;
  const mid = window.innerHeight / 2;
  let bestIdx = 0;
  let bestDist = Infinity;
  for (let i = 0; i < list.length; i++) {
    const r = list[i].getBoundingClientRect();
    const cy = r.top + r.height / 2;
    const d = Math.abs(cy - mid);
    if (d < bestDist || (Math.abs(d - bestDist) < 2 && i < bestIdx)) {
      bestDist = d;
      bestIdx = i;
    }
  }
  return bestIdx;
}

export function HowPersonalLoanSection() {
  const [active, setActive] = React.useState(0);
  const itemRefs = React.useRef<(HTMLLIElement | null)[]>([]);
  const rafRef = React.useRef<number>(0);

  React.useEffect(() => {
    const flush = () => {
      rafRef.current = 0;
      const nodes = itemRefs.current;
      if (!nodes.some(Boolean)) return;
      const next = pickStepClosestToViewportCenter(nodes);
      React.startTransition(() => {
        setActive((prev) => (prev === next ? prev : next));
      });
    };

    const schedule = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(flush);
    };

    const id = requestAnimationFrame(() => {
      flush();
    });

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(id);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section
      id="how-personal-loan"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
      style={{ backgroundColor: SKY }}
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2
          className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
          style={{ color: MIDNIGHT }}
        >
          How to Get a Personal Loan From MoneySolution?
        </h2>
        <p
          className="mx-auto mt-4 max-w-4xl text-base leading-relaxed sm:text-lg"
          style={{ color: SUB_GREY }}
        >
          Borrow and repay on your own terms. Effortless application. Takes just
          minutes to apply. Get instant cash transferred directly to your bank
          account.
        </p>
      </div>

      {/* Fibe-style: left scroll steps + rail; right sticky circular art */}
      <div className="mx-auto mt-10 max-w-7xl px-2 sm:px-4 lg:mt-14 lg:px-6">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-stretch xl:gap-14 xl:pt-6">
          <div className="relative min-w-0 flex-1 xl:pr-2">
            <div className="relative max-w-full xl:max-w-[540px]">
              {/* Vertical rail: first dot centre → last dot centre */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-5 hidden w-0.5 -translate-x-1/2 xl:block"
                style={{
                  top: FIRST_DOT_CENTER,
                  height: LINE_HEIGHT,
                  backgroundColor: RAIL,
                }}
              />

              <ul className="relative m-0 list-none p-0 pb-20 xl:pb-32">
                {STEPS.map((step, i) => {
                  const on = active === i;
                  return (
                    <li
                      key={step.title}
                      ref={(el) => {
                        itemRefs.current[i] = el;
                      }}
                      data-step={i}
                      className="relative flex min-h-0 flex-col items-center xl:min-h-[280px] xl:flex-row xl:items-center"
                    >
                      <div className="hidden w-10 shrink-0 xl:flex xl:items-center xl:justify-center xl:self-stretch">
                        {on ? (
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-md transition-transform duration-200"
                            style={{ backgroundColor: RAIL }}
                            aria-hidden
                          >
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                              <MapPin className="h-4 w-4 text-[#e11d48]" />
                            </span>
                          </div>
                        ) : (
                          <div
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-white transition-colors duration-200"
                            style={{ borderColor: DOT_BORDER }}
                            aria-hidden
                          />
                        )}
                      </div>

                      <div className="w-full max-w-lg flex-1 px-3 text-center sm:px-4 xl:py-2 xl:pl-6 xl:pr-2 xl:text-left">
                        <h3
                          className={cn(
                            "text-lg font-semibold transition-colors duration-200 sm:text-xl lg:text-2xl",
                            on ? "text-[#14142B]" : "text-[#14142B]/45"
                          )}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={cn(
                            "mt-2 text-base leading-relaxed transition-colors duration-200 sm:text-lg",
                            on ? "text-[#14142B]" : "text-[#14142B]/45"
                          )}
                        >
                          {step.description}
                        </p>

                        <div className="mx-auto mt-6 max-w-sm xl:hidden">
                          <div className="relative aspect-square w-full overflow-hidden rounded-full bg-white shadow-lg ring-2 ring-white/90">
                            <Image
                              src={step.imageSrc}
                              alt=""
                              fill
                              className="object-contain"
                              sizes="(max-width: 640px) 90vw, 400px"
                              priority={i === 0}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="mx-auto hidden w-full max-w-[440px] shrink-0 xl:mx-0 xl:flex xl:w-[min(440px,38vw)] xl:flex-col xl:justify-center">
            <div
              className="xl:sticky xl:w-full"
              style={{
                top: "max(5rem, calc(50svh - 12.5rem))",
              }}
            >
              <div className="relative aspect-square w-full isolate overflow-hidden rounded-full bg-white shadow-[0_12px_48px_rgba(14,61,58,0.14)] ring-2 ring-white/90 [contain:paint]">
                {STEPS.map((step, i) => (
                  <div
                    key={step.title}
                    className={cn(
                      "absolute inset-0 transform-gpu transition-opacity duration-500 ease-out will-change-[opacity]",
                      active === i
                        ? "z-[1] opacity-100"
                        : "pointer-events-none z-0 opacity-0"
                    )}
                    aria-hidden={active !== i}
                  >
                    <Image
                      src={step.imageSrc}
                      alt={`${step.title} — illustration`}
                      fill
                      className="object-contain"
                      sizes="440px"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
