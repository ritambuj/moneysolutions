import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ApplyLoanWizard } from "@/components/apply/apply-loan-wizard";

export const metadata: Metadata = {
  title: "Apply for a loan — MoneySolution",
  description:
    "Start your personal loan application with PAN and mobile. Tell us a bit more to see matched offers.",
};

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <ApplyLoanWizard />
      </main>
      <Footer />
    </>
  );
}
