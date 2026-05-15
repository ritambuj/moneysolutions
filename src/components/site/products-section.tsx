import {
  Banknote,
  Zap,
  PiggyBank,
  Wallet,
  ArrowRight,
  ShieldCheck,
  Calculator,
  CreditCard,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

const intro =
  "One place for life’s planned and unplanned expenses — from travel to medical bills. Borrow digitally, repay on your schedule, and track everything in one place on the web.";

const products: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Instant cash loan",
    description: "Get funds in your bank account within minutes after approval.",
    href: "#",
    icon: Zap,
  },
  {
    title: "Personal loan",
    description: "Higher limits, flexible tenure and no collateral for eligible profiles.",
    href: "#",
    icon: Banknote,
  },
  {
    title: "BNPL & EMIs",
    description: "Split large purchases into affordable instalments at partner merchants.",
    href: "#",
    icon: PiggyBank,
  },
  {
    title: "Salary-linked line",
    description: "Revolving credit aligned to your income — draw only what you need.",
    href: "#",
    icon: Wallet,
  },
];

const more: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Credit score check",
    description: "See where you stand and get tips to improve eligibility.",
    href: "#",
    icon: ShieldCheck,
  },
  {
    title: "Eligibility calculator",
    description: "Estimate how much you can borrow before you apply.",
    href: "#",
    icon: Calculator,
  },
  {
    title: "Co-branded card",
    description: "Spend smart with rewards and controlled limits.",
    href: "#",
    icon: CreditCard,
  },
  {
    title: "Wellness for teams",
    description: "Employer programmes for advances and financial education.",
    href: "#",
    icon: HeartPulse,
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      className="border-t border-border bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Our products
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.title}
                href={p.href}
                className="group flex flex-col rounded-2xl border border-border bg-muted/30 p-6 transition hover:border-primary/30 hover:bg-white hover:shadow-[0_16px_40px_rgba(14,31,35,0.08)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Explore
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-20 border-t border-border pt-16">
          <h3 className="text-center text-xl font-semibold text-foreground sm:text-2xl">
            More from MoneySolution
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            Tools and add-ons that sit alongside your loan — so you can borrow
            with context, not guesswork.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {more.map((p) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.title}
                  href={p.href}
                  className="flex gap-4 rounded-xl border border-border bg-white p-4 transition hover:border-primary/25 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/40 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-foreground">
                      {p.title}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {p.description}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
