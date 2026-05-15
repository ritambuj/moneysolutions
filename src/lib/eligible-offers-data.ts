import type { PartnerMark } from "./partners";

export type EligibleOfferRow = {
  id: string;
  lenderName: string;
  /** Partner asset path, or null to show initials fallback */
  logo: PartnerMark | null;
  initials: string;
  loanUpto: number;
  emi: number;
  rateFromPct: number;
  aprPct: number;
  tenureMaxMonths: number;
};

/** Tentative demo rows — replace with API / engine results later. */
export const ELIGIBLE_OFFERS: EligibleOfferRow[] = [
  {
    id: "hdfc",
    lenderName: "HDFC Bank",
    logo: {
      id: "hdfc",
      src: "/images/partners/hdfc_91c77b0063.svg",
      alt: "HDFC Bank",
    },
    initials: "HDFC",
    loanUpto: 40_00_000,
    emi: 77_185,
    rateFromPct: 11.5,
    aprPct: 11.56,
    tenureMaxMonths: 72,
  },
  {
    id: "kotak",
    lenderName: "Kotak Mahindra Bank",
    logo: {
      id: "kotak",
      src: "/images/partners/kotak_aa4604849b.svg",
      alt: "Kotak Mahindra Bank",
    },
    initials: "KMB",
    loanUpto: 15_00_000,
    emi: 29_326,
    rateFromPct: 12,
    aprPct: 13.37,
    tenureMaxMonths: 72,
  },
  {
    id: "bajaj",
    lenderName: "Bajaj Markets",
    logo: {
      id: "bajaj",
      src: "/images/partners/Bajaj_Markets_Logo_Digital_7fce0d2cbe.svg",
      alt: "Bajaj Markets",
    },
    initials: "BM",
    loanUpto: 7_00_000,
    emi: 19_129,
    rateFromPct: 14,
    aprPct: 14.39,
    tenureMaxMonths: 48,
  },
  {
    id: "incred",
    lenderName: "InCred Finance",
    logo: {
      id: "incred",
      src: "/images/partners/incred_a752b4e95b.svg",
      alt: "InCred Finance",
    },
    initials: "IC",
    loanUpto: 5_00_000,
    emi: 18_079,
    rateFromPct: 18,
    aprPct: 21.07,
    tenureMaxMonths: 36,
  },
];
