import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, PageShell } from "@/components/site/page-shell";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — Money Star",
  description:
    "Personal loans, home loans, LAP, credit cards, health and life insurance from partner lenders.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        title="Services we offer"
        subtitle="Valuable services that simplify your loan search and help you make informed borrowing decisions."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ slug, title, shortDescription, icon: Icon }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
                {title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read more
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
