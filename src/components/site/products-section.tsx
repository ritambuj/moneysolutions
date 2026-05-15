import {
  Banknote,
  Home,
  Building2,
  CreditCard,
  HeartPulse,
  Shield,
  ArrowRight,
  Calculator,
  type LucideIcon,
} from "lucide-react";

const intro =
  "One solution for life’s planned and unplanned expenses. Compare regulated products, apply digitally, and get expert guidance from Money Star.";

const products: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Personal loan",
    description: "Flexible unsecured loans for expenses, travel or milestones.",
    href: "/services/personal-loan",
    icon: Banknote,
  },
  {
    title: "Home loan",
    description: "Competitive rates for purchase, construction or balance transfer.",
    href: "/services/home-loan",
    icon: Home,
  },
  {
    title: "Loan against property",
    description: "Unlock property value while retaining ownership.",
    href: "/services/loan-against-property",
    icon: Building2,
  },
  {
    title: "Credit card",
    description: "Rewards, convenience and security from partner banks.",
    href: "/services/credit-card",
    icon: CreditCard,
  },
];

const more: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Health insurance",
    description: "Family floater and cashless hospital cover.",
    href: "/services/health-insurance",
    icon: HeartPulse,
  },
  {
    title: "Life insurance",
    description: "Term and savings plans for your dependents.",
    href: "/services/life-insurance",
    icon: Shield,
  },
  {
    title: "EMI calculator",
    description: "Plan monthly repayments before you apply.",
    href: "/#emi-calculator",
    icon: Calculator,
  },
  {
    title: "All services",
    description: "View the full Money Star product catalogue.",
    href: "/services",
    icon: ArrowRight,
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
            Featured services
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
            More from Money Star
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            Insurance, calculators and the full partner network — so you can
            borrow with context, not guesswork.
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
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
