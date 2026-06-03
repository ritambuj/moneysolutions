import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { getService, SERVICES } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Services — Money Star" };
  return {
    title: `${service.title} — Money Star`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <PageShell>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">{service.title}</h1>
              <p className="mt-3 max-w-2xl text-white/75">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <h2 className="mt-10 text-xl font-semibold text-foreground">Highlights</h2>
            <ul className="mt-4 space-y-3">
              {service.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <aside className="order-1 h-fit rounded-2xl border border-border bg-muted/30 p-5 sm:p-6 lg:order-2">
            <h3 className="font-semibold text-foreground">Get started</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Compare partner offers and apply online with guidance from our team.
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
