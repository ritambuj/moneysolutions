import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero, PageShell } from "@/components/site/page-shell";
import { ContactForm } from "@/components/site/contact-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Money Star",
  description: "Get in touch with Money Star for loans, insurance and support.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        title="Contact us"
        subtitle="Speak with our team for loan enquiries, referrals or support. We're here to help."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Reach us</h2>
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-3 text-muted-foreground transition hover:text-primary"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{SITE.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phoneAlt.replace(/\s/g, "")}`}
                    className="flex items-start gap-3 text-muted-foreground transition hover:text-primary"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{SITE.phoneAlt}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-start gap-3 text-muted-foreground transition hover:text-primary"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{SITE.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    {SITE.address.line1}
                    <br />
                    {SITE.address.line2}
                    <br />
                    {SITE.address.city}
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-surface-soft p-6">
              <h3 className="font-semibold text-foreground">Refer &amp; earn</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Refer someone for a loan and earn up to ₹5,000 when their loan is
                disbursed as per programme terms. Mention &quot;Referral&quot; in your
                message.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
