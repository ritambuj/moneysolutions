import type { Metadata } from "next";
import { PageHero, PageShell } from "@/components/site/page-shell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Money Star",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero title="Privacy policy" />
      <article className="prose prose-slate mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <p className="text-sm text-muted-foreground">Last updated: May 2026</p>
        <p className="mt-6 text-muted-foreground">
          {SITE.legalName} (&quot;{SITE.name}&quot;, &quot;we&quot;, &quot;us&quot;) respects your
          privacy. This policy explains how we collect, use and protect personal
          information when you use our website and services.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-foreground">
          Information we collect
        </h2>
        <p className="mt-3 text-muted-foreground">
          We may collect identity and contact details (name, PAN, mobile, email),
          employment and income information, address and pincode, bank statements
          and bureau data when you apply for products through our platform.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-foreground">How we use it</h2>
        <p className="mt-3 text-muted-foreground">
          Data is used to assess eligibility, share applications with partner
          lenders and insurers, communicate about your enquiry, improve our
          services, and comply with legal obligations.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-foreground">Sharing</h2>
        <p className="mt-3 text-muted-foreground">
          We share information with banks, NBFCs, insurers and service providers
          involved in processing your request. We do not sell personal data to
          unrelated third parties for their marketing.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-foreground">Security</h2>
        <p className="mt-3 text-muted-foreground">
          We implement reasonable technical and organisational measures to protect
          data. No method of transmission over the internet is completely secure.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-foreground">Your rights</h2>
        <p className="mt-3 text-muted-foreground">
          You may request access, correction or deletion of your data subject to
          applicable law by writing to{" "}
          <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
            {SITE.email}
          </a>
          .
        </p>
      </article>
    </PageShell>
  );
}
