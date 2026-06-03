import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Thank you — Money Star",
  description: "Your application request has been received. Our team will contact you shortly.",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ lender?: string }>;
};

export default async function ApplyThankYouPage({ searchParams }: Props) {
  const { lender } = await searchParams;
  const lenderLabel = lender?.trim() || "your selected lender";

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col bg-gradient-to-b from-surface-soft to-white">
        <div className="mx-auto flex max-w-lg flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-24">
          <CheckCircle2
            className="h-16 w-16 text-emerald-600"
            strokeWidth={1.5}
            aria-hidden
          />
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Thank you!
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Your interest in{" "}
            <span className="font-semibold text-foreground">{lenderLabel}</span>{" "}
            has been recorded. Our team will connect with you shortly with the
            best available options.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/apply/offers"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-white px-6 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              View other offers
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
