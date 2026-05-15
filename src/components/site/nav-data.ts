import {
  Banknote,
  Home,
  Building2,
  CreditCard,
  HeartPulse,
  Shield,
  Calculator,
  CheckCircle2,
  BookOpen,
  HelpCircle,
  Building,
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
    label: "Services",
    groups: [
      {
        links: [
          {
            title: "Personal Loan",
            href: "/services/personal-loan",
            description: "Unsecured loans for your goals",
            icon: Banknote,
          },
          {
            title: "Home Loan",
            href: "/services/home-loan",
            description: "Purchase or transfer your home loan",
            icon: Home,
          },
          {
            title: "Loan Against Property",
            href: "/services/loan-against-property",
            icon: Building2,
          },
          {
            title: "Credit Card",
            href: "/services/credit-card",
            icon: CreditCard,
          },
          {
            title: "Health Insurance",
            href: "/services/health-insurance",
            icon: HeartPulse,
          },
          {
            title: "Life Insurance",
            href: "/services/life-insurance",
            icon: Shield,
          },
        ],
      },
    ],
    featured: {
      title: "All services",
      body: "Compare loans and insurance from 100+ partners.",
      cta: "View services",
      href: "/services",
    },
  },
  {
    label: "Calculators",
    groups: [
      {
        links: [
          {
            title: "EMI Calculator",
            href: "/#emi-calculator",
            description: "Plan your monthly repayments",
            icon: Calculator,
          },
          {
            title: "Apply for loan",
            href: "/apply",
            description: "Start your application",
            icon: CheckCircle2,
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
          { title: "Blog & Articles", href: "/blog", icon: BookOpen },
          { title: "FAQs", href: "/faq", icon: HelpCircle },
        ],
      },
    ],
  },
  {
    label: "About Us",
    groups: [
      {
        links: [
          { title: "About Money Star", href: "/about", icon: Building },
          { title: "Contact Us", href: "/contact", icon: Phone },
        ],
      },
    ],
  },
  {
    label: "Apply for loan",
    href: "/apply",
  },
];
