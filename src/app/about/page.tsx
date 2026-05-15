import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, PageShell } from "@/components/site/page-shell";
import { StatsBand } from "@/components/site/stats-band";
import { DIRECTORS, PARTNER_BRANDS, SITE, STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Money Star",
  description:
    "Since 1989, Money Star has helped millions compare loans and insurance from India's leading banks and NBFCs.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Money Star"
        title="Empowering dreams with hassle-free loan services"
        subtitle={`Since ${SITE.founded}, we have helped customers across India find the right home loans, personal loans, credit cards and insurance — with transparency and expert guidance.`}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Our story
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Money Star (operated by {SITE.legalName}) builds on decades of
                experience in retail lending distribution. What began as a focused
                loan advisory has grown into a trusted platform serving over four
                million customers with {STATS[3].value} partner institutions and a
                nationwide relationship manager network.
              </p>
              <p>
                We do not replace banks — we help you compare them. Our team
                explains eligibility, documentation and pricing in plain language
                so you can choose offers that fit your income, credit profile and
                goals.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Contact us
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-muted/40 p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Mission &amp; vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Mission:</strong> Make regulated
              credit accessible through honest comparison, digital convenience and
              human support when it matters.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Vision:</strong> Be India&apos;s
              most trusted name for discovering loans and insurance — one
              application, many partners, zero confusion.
            </p>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="bg-[#f8fafb] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">
            Leadership
          </h2>
          <div className="mt-10 mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {DIRECTORS.map((d) => (
              <article
                key={d.name}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">{d.name}</h3>
                <p className="text-sm font-medium text-primary">{d.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">
          Our lending partners
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          We work with leading banks and NBFCs so you see competitive offers in one
          place.
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {PARTNER_BRANDS.map((brand) => (
            <li
              key={brand}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm"
            >
              {brand}
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
