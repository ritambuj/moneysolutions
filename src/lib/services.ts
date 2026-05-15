import {
  Home,
  Banknote,
  Building2,
  CreditCard,
  HeartPulse,
  Shield,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "personal-loan",
    title: "Personal Loan",
    shortDescription:
      "Unlock your financial potential with personalised loans for expenses, travel or milestones.",
    description:
      "Whether you are consolidating debt, funding a wedding or covering an unexpected expense, Money Star connects you with competitive personal loan offers from regulated lenders. Digital application, quick eligibility checks and transparent EMIs.",
    icon: Banknote,
    highlights: [
      "No collateral for eligible salaried profiles",
      "Flexible tenure and prepayment options",
      "Funds disbursed directly to your bank account",
    ],
  },
  {
    slug: "home-loan",
    title: "Home Loan",
    shortDescription:
      "Flexible home loan options to make homeownership easier with competitive rates.",
    description:
      "Compare home loan products from India's leading banks and housing finance companies. Our relationship managers help you navigate documentation, interest rate types and balance transfer options.",
    icon: Home,
    highlights: [
      "Purchase, construction and balance transfer",
      "Long tenure with tax benefits as per law",
      "Dedicated support through approval and disbursal",
    ],
  },
  {
    slug: "loan-against-property",
    title: "Loan Against Property",
    shortDescription:
      "Unlock property value while retaining ownership — funds for business or personal needs.",
    description:
      "Use residential or commercial property as security to access higher ticket sizes at attractive rates. Money Star matches you with lenders experienced in LAP underwriting across metros and tier-2 cities.",
    icon: Building2,
    highlights: [
      "Higher limits than unsecured loans",
      "Retain ownership of your property",
      "Suitable for business expansion or major expenses",
    ],
  },
  {
    slug: "credit-card",
    title: "Credit Card",
    shortDescription:
      "Rewards, convenience and security — find a card that fits your lifestyle.",
    description:
      "Explore co-branded and partner bank credit cards with cashback, lounge access and EMI conversion features. We help you compare eligibility criteria and annual fees before you apply.",
    icon: CreditCard,
    highlights: [
      "Compare rewards and fee structures",
      "Digital application with partner banks",
      "Guidance on responsible credit usage",
    ],
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    shortDescription:
      "Comprehensive health plans for you and your family with cashless hospital networks.",
    description:
      "Protect against rising medical costs with individual and family floater policies from reputed insurers. Money Star advisors explain sum insured, room rent limits and waiting periods in plain language.",
    icon: HeartPulse,
    highlights: [
      "Cashless treatment at network hospitals",
      "Family floater and top-up options",
      "Renewal and claims assistance",
    ],
  },
  {
    slug: "life-insurance",
    title: "Life Insurance",
    shortDescription:
      "Financial security for your loved ones with term and savings-linked plans.",
    description:
      "Choose term cover for pure protection or traditional / ULIP plans aligned to long-term goals. We work with established life insurers to find cover that matches your income and dependents.",
    icon: Shield,
    highlights: [
      "Term, endowment and ULIP options",
      "Tax benefits as per applicable laws",
      "Nominee and rider guidance included",
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
