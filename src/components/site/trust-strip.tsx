import { Star, Users, Banknote, ShieldCheck } from "lucide-react";

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
    label: "Average app rating",
  },
  {
    icon: ShieldCheck,
    value: "RBI-aligned",
    label: "Lending partners",
  },
];

const partners = [
  "TrustBank",
  "Northwind NBFC",
  "Sterling Capital",
  "Apex Finserv",
  "Crescent Bank",
  "Veridian",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-white py-12 sm:py-14">
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

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Trusted lending partners
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {partners.map((p) => (
              <span
                key={p}
                className="text-base font-semibold tracking-tight text-foreground/60 grayscale transition hover:opacity-100 hover:text-foreground sm:text-lg"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
