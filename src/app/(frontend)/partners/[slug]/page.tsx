import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Handshake } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { getPartnerPage, PARTNER_PAGES } from "@/lib/partner-pages";
import { getService } from "@/lib/services";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PARTNER_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartnerPage(slug);
  if (!partner) return { title: "Partners — Money Star" };
  return {
    title: `${partner.name} — Partner of Money Star`,
    description: partner.summary,
  };
}

export default async function PartnerPage({ params }: Props) {
  const { slug } = await params;
  const partner = getPartnerPage(slug);
  if (!partner) notFound();

  const services = partner.serviceSlugs
    .map(getService)
    .filter((s) => s !== undefined);

  return (
    <PageShell>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <Handshake className="h-4 w-4" />
            Partnership
          </p>
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
            <span className="flex h-20 w-32 shrink-0 items-center justify-center rounded-2xl bg-white p-3">
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={104}
                  height={56}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-center text-sm font-bold leading-tight text-primary">
                  {partner.name}
                </span>
              )}
            </span>
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">
                {SITE.name} &times; {partner.name}
              </h1>
              <p className="mt-3 max-w-2xl text-white/75">{partner.summary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-2">
            <h2 className="text-xl font-semibold text-foreground">
              About the partnership
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {partner.about}
            </p>

            <h2 className="mt-10 text-xl font-semibold text-foreground">
              Why apply through {SITE.name}
            </h2>
            <ul className="mt-4 space-y-3">
              {partner.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-semibold text-foreground">
              Products available
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 text-sm font-medium text-foreground transition hover:border-primary"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-primary" />
                      <span className="flex-1">{s.title}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
              Loan and card approvals are at the sole discretion of{" "}
              {partner.name}, subject to its credit assessment and policies.{" "}
              {partner.name} name and logo are trademarks of their respective
              owner.
            </p>
          </div>
          <aside className="order-1 h-fit rounded-2xl border border-border bg-muted/30 p-5 sm:p-6 lg:order-2">
            <h3 className="font-semibold text-foreground">Get started</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Check your eligibility for {partner.name} and other partner offers
              in one application.
            </p>
            <Link
              href="/apply"
              className="mt-6 flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
            >
              Apply now
            </Link>
            <Link
              href="/contact"
              className="mt-3 flex h-11 w-full items-center justify-center rounded-full border border-border bg-white text-sm font-semibold text-foreground"
            >
              Talk to an expert
            </Link>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
