import {
  Banknote,
  Wallet,
  GraduationCap,
  Plane,
  Stethoscope,
  ShoppingBag,
  Sun,
  PiggyBank,
  Shield,
  TrendingUp,
  Calculator,
  CheckCircle2,
  BookOpen,
  Newspaper,
  HelpCircle,
  Briefcase,
  Building2,
  Phone,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  title: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export type NavGroup = {
  heading?: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href?: string;
  groups?: NavGroup[];
  featured?: {
    title: string;
    body: string;
    cta: string;
    href: string;
  };
};

export const navItems: NavItem[] = [
  {
    label: "Loans",
    groups: [
      {
        links: [
          {
            title: "Instant Personal Loan",
            href: "#",
            description: "Get up to ₹5 lakh instantly",
            icon: Banknote,
          },
          {
            title: "Cash Loan",
            href: "#",
            description: "Same-day disbursal",
            icon: Wallet,
          },
          {
            title: "Salary Advance",
            href: "#",
            description: "Up to 70% of monthly salary",
            icon: PiggyBank,
          },
        ],
      },
    ],
    featured: {
      title: "Apply in 5 minutes",
      body: "Paperless approval, money to your account.",
      cta: "Get loan now",
      href: "#",
    },
  },
  {
    label: "Our Offerings",
    groups: [
      {
        heading: "New Launches",
        links: [
          {
            title: "Loan against Mutual Funds",
            href: "#",
            icon: TrendingUp,
          },
          { title: "Fixed Deposits", href: "#", icon: PiggyBank },
          { title: "Insurance", href: "#", icon: Shield },
        ],
      },
      {
        heading: "Buy Now, Pay Later",
        links: [
          { title: "Healthcare", href: "#", icon: Stethoscope },
          { title: "Education", href: "#", icon: GraduationCap },
          { title: "Travel", href: "#", icon: Plane },
          { title: "Solar", href: "#", icon: Sun },
          { title: "E-commerce", href: "#", icon: ShoppingBag },
        ],
      },
    ],
  },
  {
    label: "Loan Calculators",
    groups: [
      {
        links: [
          {
            title: "EMI Calculator",
            href: "#emi-calculator",
            description: "Plan your monthly repayments",
            icon: Calculator,
          },
          {
            title: "Eligibility Calculator",
            href: "#",
            description: "Check what you qualify for",
            icon: CheckCircle2,
          },
          {
            title: "Credit Score Check",
            href: "#",
            description: "Free, no impact on score",
            icon: TrendingUp,
          },
        ],
      },
    ],
  },
  {
    label: "Learn",
    groups: [
      {
        links: [
          { title: "Blog & Articles", href: "#", icon: BookOpen },
          { title: "Financial Glossary", href: "#", icon: Newspaper },
          { title: "Quizzes", href: "#", icon: HelpCircle },
        ],
      },
    ],
  },
  {
    label: "About Us",
    groups: [
      {
        links: [
          { title: "Our Story", href: "#", icon: Building2 },
          { title: "Careers", href: "#", icon: Briefcase },
          { title: "Newsroom", href: "#", icon: Newspaper },
          { title: "Contact Us", href: "#", icon: Phone },
        ],
      },
    ],
  },
  {
    label: "Download App",
    href: "#",
  },
];
