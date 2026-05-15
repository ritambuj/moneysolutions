import Image from "next/image";
import { Star, Users, Banknote, ShieldCheck } from "lucide-react";
import { LENDING_PARTNERS } from "@/lib/partners";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Users,
    value: "1 Cr+",
    label: "Customers served",
  },
  {
    icon: Banknote,
    value: "₹25,000 Cr+",
    label: "Loans disbursed",
  },
  {
    icon: Star,
    value: "4.6 / 5",
    label: "Average rating",
  },
  {
    icon: ShieldCheck,
    value: "RBI-aligned",
    label: "Lending partners",
  },
];

const partnerTileClass =
  "flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl border-2 border-border/80 bg-white p-3 shadow-md ring-1 ring-black/[0.04] transition hover:border-primary/25 hover:shadow-lg sm:h-[5.25rem] sm:w-[5.25rem] sm:p-3.5 md:h-28 md:w-28 md:p-4 lg:h-32 lg:w-32";

export function TrustStrip() {
  return (
    <section
      id="lending-partners"
      className="border-y border-border bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center sm:border-r sm:border-border sm:px-4 last:sm:border-r-0"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                {value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-10 sm:mt-20 sm:gap-12 lg:mt-24 lg:gap-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Trusted lending partners
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We work with regulated banks and NBFCs you recognise. Your profile
              is matched to the right partner — with digital journeys for
              smaller ticket sizes and advisor-led support when you need more.
            </p>
          </div>

          <div className="w-full max-w-6xl rounded-3xl bg-gradient-to-b from-muted/50 to-muted/20 px-6 py-10 ring-1 ring-border/60 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 md:gap-8 lg:gap-10">
              {LENDING_PARTNERS.map(({ id, src, alt }) => (
                <div
                  key={id}
                  className={cn(
                    partnerTileClass,
                    "hover:scale-[1.04] motion-reduce:hover:scale-100"
                  )}
                  title={alt}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={128}
                    height={128}
                    className="h-full w-full object-contain"
                    sizes="(max-width: 640px) 72px, (max-width: 1024px) 96px, 128px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
