export function ApplyLoanCtaBand() {
  return (
    <section className="border-t border-border bg-primary py-14 text-primary-foreground lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to apply?
          </h2>
          <p className="mt-3 text-sm text-white/75 sm:text-base">
            Start from the apply flow above, use the EMI calculator to plan your
            instalment, or reach our team on the toll-free number in the footer.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="/apply"
            className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-base font-semibold text-accent-foreground transition hover:brightness-95"
          >
            Apply for a loan
          </a>
          <a
            href="#emi-calculator"
            className="inline-flex h-12 items-center rounded-full border border-white/35 px-6 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Calculate EMI
          </a>
        </div>
      </div>
    </section>
  );
}
