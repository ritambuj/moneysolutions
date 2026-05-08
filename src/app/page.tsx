import { Header } from "@/components/site/header";
import { EmiCalculator } from "@/components/site/emi-calculator";
import { TrustStrip } from "@/components/site/trust-strip";
import { Footer } from "@/components/site/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Personal finance, simplified
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Money for the moments
                <br />
                that matter.
              </h1>
              <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">
                Instant personal loans, transparent EMIs and flexible BNPL —
                all in one app.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#emi-calculator"
                  className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-base font-semibold text-accent-foreground transition hover:brightness-95"
                >
                  Calculate EMI
                </a>
                <a
                  href="#"
                  className="inline-flex h-12 items-center rounded-full border border-white/30 px-6 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Download app
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 right-1/3 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl"
          />
        </section>

        <TrustStrip />
        <EmiCalculator />
      </main>
      <Footer />
    </>
  );
}
