import { Header } from "@/components/site/header";
import { HeroPartnerLogos } from "@/components/site/hero-partner-logos";
import { TrustStrip } from "@/components/site/trust-strip";
import { ProductsSection } from "@/components/site/products-section";
import { HowPersonalLoanSection } from "@/components/site/how-personal-loan-section";
import { WhyChooseSection } from "@/components/site/why-choose-section";
import { EmiCalculator } from "@/components/site/emi-calculator";
import { TestimonialsSection } from "@/components/site/testimonials-section";
import { AwardsSection } from "@/components/site/awards-section";
import { ApplyLoanCtaBand } from "@/components/site/apply-loan-cta-band";
import { Footer } from "@/components/site/footer";
import { TimedPromoModal } from "@/components/site/timed-promo-modal";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Personal finance, simplified
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Money for the moments that matter.
              </h1>
              <p className="mt-4 max-w-xl text-sm text-white/75 sm:mt-5 sm:text-base lg:text-lg">
                Instant personal loans, transparent EMIs and flexible BNPL —
                online, with the right lender match for your profile.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a
                  href="/apply"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition hover:brightness-95 sm:h-12 sm:w-auto sm:text-base"
                >
                  Apply for a loan
                </a>
                <a
                  href="#emi-calculator"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10 sm:h-12 sm:w-auto sm:text-base"
                >
                  Calculate EMI
                </a>
              </div>
              <HeroPartnerLogos />
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 hidden h-[420px] w-[420px] rounded-full bg-white/15 blur-3xl sm:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 right-1/3 hidden h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl sm:block"
          />
        </section>

        <TrustStrip />
        <ProductsSection />
        <HowPersonalLoanSection />
        <WhyChooseSection />
        <EmiCalculator />
        <TestimonialsSection />
        <AwardsSection />
        <ApplyLoanCtaBand />
      </main>
      <Footer />
      <TimedPromoModal />
    </>
  );
}
