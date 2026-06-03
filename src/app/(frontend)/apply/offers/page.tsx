import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { EligibleOffersView } from "@/components/site/eligible-offers-view";

export const metadata: Metadata = {
  title: "Eligible offers — Money Star",
  description:
    "Review tentative loan offers matched to your profile and apply with partner lenders.",
};

export default function EligibleOffersPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <EligibleOffersView />
      </main>
      <Footer />
    </>
  );
}
