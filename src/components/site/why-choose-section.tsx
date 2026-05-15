import { CheckCircle2, Clock, Shield, Sparkles } from "lucide-react";

const bullets = [
  {
    icon: Clock,
    title: "Cash when you need it",
    body: "Digital journey from application to disbursal — built for busy schedules.",
  },
  {
    icon: Shield,
    title: "Transparent pricing",
    body: "See EMI, fees and tenure upfront. No surprise charges buried in fine print.",
  },
  {
    icon: Sparkles,
    title: "One place for every product",
    body: "Loans, BNPL and calculators together so you can plan with confidence.",
  },
  {
    icon: CheckCircle2,
    title: "Partner lender network",
    body: "We match you with regulated partners aligned to your profile and location.",
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="border-t border-border bg-[#f8fafb] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Why choose MoneySolution?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Handle last-minute expenses and planned upgrades with a personal
              line that respects your time. Borrow on your terms, repay with
              clarity, and keep every milestone within reach.
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {bullets.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-white p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-3 font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
