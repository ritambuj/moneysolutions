import type { PartnerMark } from "./partners";

export type OfferApplyMode = "partner_url" | "internal";

export type EligibleOfferRow = {
  id: string;
  lenderName: string;
  logo: PartnerMark | null;
  initials: string;
  loanUpto: number;
  emi: number;
  rateFromPct: number;
  aprPct: number;
  tenureMaxMonths: number;
  applyMode: OfferApplyMode;
  /** Partner apply URL — opens in a new tab when applyMode is partner_url */
  partnerUrl?: string;
};

export const ELIGIBLE_OFFERS: EligibleOfferRow[] = [
  {
    id: "poonawalla",
    lenderName: "Poonawalla Fincorp",
    logo: {
      id: "poonawalla",
      src: "/images/partners/poonawalla_fincorp.svg",
      alt: "Poonawalla Fincorp",
    },
    initials: "PF",
    loanUpto: 40_00_000,
    emi: 77_185,
    rateFromPct: 11.5,
    aprPct: 11.56,
    tenureMaxMonths: 72,
    applyMode: "partner_url",
    partnerUrl:
      "https://instant-pocket-loan.poonawallafincorp.com/?redirectto=primepl&utm_DSA_Code=PDL00491&UTM_Partner_AgentCode=chopra.sumit30@gmail.com&UTM_Partner_Name=DSA_MONEYSTAR_FINTECH_PVT_LTD&UTM_SM_Name=harshit.chaturvedi@poonawallafincorp.com",
  },
  {
    id: "tata-capital",
    lenderName: "Tata Capital",
    logo: {
      id: "tata-capital",
      src: "/images/partners/tata.svg",
      alt: "Tata Capital",
    },
    initials: "TC",
    loanUpto: 35_00_000,
    emi: 68_500,
    rateFromPct: 11.75,
    aprPct: 12.1,
    tenureMaxMonths: 72,
    applyMode: "partner_url",
    partnerUrl:
      "https://www.tatacapital.com/online/loans/personal-loans/apply-now-personal-loan?sourceName=Money_Star&subsource=Money_Star&LEAD_SUB_SOURCE_1=Money_Star&partner_id=#",
  },
  {
    id: "bajaj-finserv-markets",
    lenderName: "Bajaj Finserv Markets",
    logo: {
      id: "bajaj-finserv-markets",
      src: "/images/partners/Bajaj_Markets_Logo_Digital_7fce0d2cbe.svg",
      alt: "Bajaj Finserv Markets",
    },
    initials: "BFM",
    loanUpto: 7_00_000,
    emi: 19_129,
    rateFromPct: 14,
    aprPct: 14.39,
    tenureMaxMonths: 48,
    applyMode: "partner_url",
    partnerUrl:
      "https://www.bajajfinservmarkets.in/apply-for-personal-loan-finservmarkets/?utm_source=Affiliate&utm_medium=SOL&utm_campaign=Open&utm_content=Moneystar&utm_term=Jan26CM8_",
  },
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
    applyMode: "internal",
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
    applyMode: "internal",
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
    applyMode: "internal",
  },
];
