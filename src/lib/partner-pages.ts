export type PartnerPage = {
  slug: string;
  name: string;
  /** Logo in `public/images/partners/`, if we have one. */
  logo?: string;
  summary: string;
  about: string;
  /** Slugs from `SERVICES` offered through this partner. */
  serviceSlugs: string[];
  highlights: string[];
};

export const PARTNER_PAGES: PartnerPage[] = [
  {
    slug: "bajaj-markets",
    name: "Bajaj Markets",
    logo: "/images/partners/Bajaj_Markets_Logo_Digital_7fce0d2cbe.svg",
    summary:
      "Money Star partners with Bajaj Markets to bring you a wider choice of loans, cards and insurance in one place.",
    about:
      "Bajaj Markets is a digital marketplace for financial products from the Bajaj group and its partners. Through our partnership, Money Star customers can explore Bajaj Markets offers alongside other lenders, with our relationship managers helping you compare eligibility, pricing and documentation before you apply.",
    serviceSlugs: ["personal-loan", "credit-card", "health-insurance", "life-insurance"],
    highlights: [
      "Compare Bajaj Markets offers side by side with other partners",
      "Guided application with support from Money Star experts",
      "Transparent view of fees, tenure and EMIs before you commit",
    ],
  },
  {
    slug: "idfc-first-bank",
    name: "IDFC FIRST Bank",
    summary:
      "Money Star partners with IDFC FIRST Bank to help you access its loans and credit cards with expert guidance.",
    about:
      "IDFC FIRST Bank is a private sector bank in India offering retail loans, credit cards and banking services. As a partner, Money Star helps customers understand IDFC FIRST Bank's products, check eligibility and complete their application smoothly.",
    serviceSlugs: ["personal-loan", "home-loan", "loan-against-property", "credit-card"],
    highlights: [
      "Eligibility checks and offer comparison in one application",
      "Help with documentation and follow-ups through disbursal",
      "Dedicated relationship manager support",
    ],
  },
  {
    slug: "kotak-mahindra-bank",
    name: "Kotak Mahindra Bank",
    logo: "/images/partners/kotak_aa4604849b.svg",
    summary:
      "Money Star partners with Kotak Mahindra Bank to connect you with its home loans, personal loans and credit cards.",
    about:
      "Kotak Mahindra Bank is one of India's leading private sector banks. Through our partnership, Money Star customers can compare Kotak Mahindra Bank offers with other lenders and apply with guidance from our team at every step.",
    serviceSlugs: ["personal-loan", "home-loan", "loan-against-property", "credit-card"],
    highlights: [
      "Side-by-side comparison with other bank and NBFC offers",
      "Expert help choosing the right product and tenure",
      "End-to-end support from application to disbursal",
    ],
  },
];

export function getPartnerPage(slug: string) {
  return PARTNER_PAGES.find((p) => p.slug === slug);
}
