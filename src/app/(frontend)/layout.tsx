import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Money Star — Personal Loans, Home Loans & EMI Calculator",
  description:
    "Compare personal loans, home loans and insurance from 100+ banks and NBFCs. Apply online with Money Star.",
  icons: {
    icon: "/images/logos/favicon.svg",
    apple: "/images/logos/app-icon.svg",
  },
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
