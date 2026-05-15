"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Fibe `text-elephant-grey`–style body copy */
const ELEPHANT = "#4b5a5f";

const GAP_PX = 16;

export type Testimonial = {
  id: string;
  headline: string;
  quote: string;
  name: string;
  avatarSrc: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    headline: "Instant loan in minutes",
    quote:
      "I needed funds for a medical emergency and did not want to wait. MoneySolution approved and disbursed to my bank in minutes — the process was completely digital and stress-free.",
    name: "Subham Pawar",
    avatarSrc: "/images/testimonials/subham-pawar.svg",
  },
  {
    id: "2",
    headline: "Quick and easy",
    quote:
      "The overall experience was excellent. I applied for a personal loan online, verification was smooth, and the loan was sanctioned without unnecessary back-and-forth.",
    name: "Shilpi Mukherjee",
    avatarSrc: "/images/testimonials/shilpi-mukherjee.svg",
  },
  {
    id: "3",
    headline: "Reliable loan provider",
    quote:
      "MoneySolution has been a lifesaver. The process was fast and hassle-free, and support was professional throughout. I could clear urgent expenses without visiting a branch.",
    name: "Sonal Agarwal",
    avatarSrc: "/images/testimonials/sonal-agarwal.svg",
  },
  {
    id: "4",
    headline: "Minimal documentation",
    quote:
      "Compared with other apps I have tried, documentation here felt minimal and the journey was straightforward. I have used the line multiple times when cash flow was tight.",
    name: "Samrat Mitra",
    avatarSrc: "/images/testimonials/samrat-mitra.svg",
  },
];

function StarRow() {
  return (
    <div className="mb-2 flex shrink-0 justify-center gap-1 lg:mb-3 lg:justify-start [&>svg]:inline-block [&>svg]:h-6 [&>svg]:w-6 [&>svg]:shrink-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="mt-1 fill-[#f5a524] stroke-[#f5a524]"
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className={cn(
        "relative m-2 flex h-[26rem] w-full flex-col overflow-hidden rounded-lg border border-border bg-white p-4 sm:h-[27rem] lg:h-[28rem] lg:p-6"
      )}
    >
      <Image
        src="/images/testimonials/quote-mark.svg"
        alt=""
        width={80}
        height={80}
        className="colonimg pointer-events-none absolute right-4 top-4 z-0 w-20 select-none opacity-90"
        aria-hidden
      />
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="min-h-0 flex-1">
          <StarRow />
          <div
            className="line-clamp-2 min-h-[2.75rem] text-center text-xl font-semibold leading-snug lg:mb-2 lg:min-h-[3.25rem] lg:text-start"
            style={{ color: ELEPHANT }}
            title={t.headline}
          >
            {t.headline}
          </div>
          <p
            className="mt-2 line-clamp-6 text-center text-sm font-normal leading-relaxed lg:line-clamp-7 lg:text-start lg:text-lg"
            style={{ color: ELEPHANT }}
            title={t.quote}
          >
            {t.quote}
          </p>
        </div>
        <div
          className="mt-auto flex shrink-0 flex-col items-center border-t border-border/60 pt-4 text-[color:var(--e)] lg:flex-row lg:items-center"
          style={{ ["--e" as string]: ELEPHANT }}
        >
          <Image
            src={t.avatarSrc}
            alt={`Photo of ${t.name}`}
            width={80}
            height={80}
            className="mb-2 h-20 w-20 shrink-0 rounded-full object-cover lg:mb-0"
          />
          <div className="min-w-0 max-w-full overflow-hidden text-center lg:ml-3 lg:text-start">
            <p
              className="truncate text-lg font-semibold"
              style={{ color: ELEPHANT }}
              title={t.name}
            >
              {t.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const [cw, setCw] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const slidesPerView = cw >= 1024 ? 2 : 1;
  const slideW =
    cw > 0
      ? (cw - GAP_PX * (slidesPerView - 1)) / slidesPerView
      : 0;
  const maxIndex = Math.max(0, TESTIMONIALS.length - slidesPerView);
  const dotCount = maxIndex + 1;

  React.useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setCw(el.offsetWidth));
    ro.observe(el);
    setCw(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  React.useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  React.useEffect(() => {
    if (paused || maxIndex <= 0) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused, maxIndex]);

  const stepPx = slideW > 0 ? slideW + GAP_PX : 0;
  const translateX = -(index * stepPx);

  function go(delta: number) {
    setIndex((i) => Math.max(0, Math.min(maxIndex, i + delta)));
  }

  return (
    <section
      className="bg-white px-6 pb-20 pt-4 lg:px-8 lg:pb-[130px] lg:pt-0"
      id="testimonialsData"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-semibold lg:mb-8 lg:text-3xl">
          Here&apos;s what our customers think of us!
        </h2>
      </div>

      <div className="container relative mx-auto px-2">
        <button
          type="button"
          className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-md transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40 lg:flex"
          style={{ left: "-0.25rem" }}
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          disabled={index <= 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-md transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40 lg:flex"
          style={{ right: "-0.25rem" }}
          aria-label="Next testimonial"
          onClick={() => go(1)}
          disabled={index >= maxIndex}
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div ref={viewportRef} className="mx-auto w-full max-w-6xl overflow-hidden">
          <div
            className="flex items-stretch transition-transform duration-500 ease-out"
            style={{
              gap: GAP_PX,
              transform:
                stepPx > 0 ? `translateX(${translateX}px)` : "translateX(0)",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="flex h-full shrink-0 self-stretch"
                style={{ width: slideW > 0 ? slideW : "100%" }}
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        <div
          className="!relative !bottom-auto mt-4 flex justify-center gap-0 lg:!mt-6"
          role="tablist"
          aria-label="Testimonial pages"
        >
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={cn(
                "mx-1 h-3 w-3 rounded-full border-0 p-0 transition-colors",
                i === index ? "bg-primary" : "bg-[#d7dee3]"
              )}
              aria-label={`Go to testimonial page ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <div className="mt-3 flex justify-center gap-2 lg:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm"
            aria-label="Previous"
            onClick={() => go(-1)}
            disabled={index <= 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm"
            aria-label="Next"
            onClick={() => go(1)}
            disabled={index >= maxIndex}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
