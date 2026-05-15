import type { Metadata } from "next";
import { PageHero, PageShell } from "@/components/site/page-shell";
import { FaqAccordion } from "@/components/site/faq-accordion";

export const metadata: Metadata = {
  title: "FAQs — Money Star",
  description: "Frequently asked questions about loans, eligibility and Money Star.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        title="Frequently asked questions"
        subtitle="Clear answers about our products, process and partner lenders."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <FaqAccordion />
      </section>
    </PageShell>
  );
}
