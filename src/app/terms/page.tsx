import type { Metadata } from "next";
import { PageHero, PageShell } from "@/components/site/page-shell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use — Money Star",
};

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero title="Terms of use" />
      <article className="prose prose-slate mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">Last updated: May 2026</p>
        <p className="mt-6 text-muted-foreground">
          These terms govern your use of the {SITE.name} website and services
          operated by {SITE.legalName}. By using our platform you agree to these
          terms.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-foreground">Services</h2>
        <p className="mt-3 text-muted-foreground">
          {SITE.name} is a loan and insurance discovery platform. We facilitate
          introductions to regulated banks and NBFCs. Credit decisions and
          disbursal are made solely by the lender you choose.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-foreground">Eligibility</h2>
        <p className="mt-3 text-muted-foreground">
          You must be at least 18 years old, a resident of India, and provide
          accurate information in applications. Misrepresentation may result in
          rejection or cancellation of offers.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-foreground">Communications</h2>
        <p className="mt-3 text-muted-foreground">
          By submitting your contact details you consent to receive calls, SMS,
          WhatsApp and email regarding your enquiry and related products, subject
          to applicable law and your opt-out rights.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-foreground">Limitation</h2>
        <p className="mt-3 text-muted-foreground">
          We strive for accurate rate and feature information but do not guarantee
          that third-party lender terms will match preliminary quotes. Final terms
          are confirmed by the lender at sanction.
        </p>
        <p className="mt-8 text-sm text-muted-foreground">
          Questions:{" "}
          <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
            {SITE.email}
          </a>
        </p>
      </article>
    </PageShell>
  );
}
