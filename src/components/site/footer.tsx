import {
  Globe,
  Camera,
  Briefcase,
  X as XIcon,
  Video,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Logo } from "./logo";

const sitemap: { heading: string; links: { label: string; href: string }[] }[] =
  [
    {
      heading: "Loans",
      links: [
        { label: "Personal Loan", href: "#" },
        { label: "Instant Cash Loan", href: "#" },
        { label: "Salary Advance", href: "#" },
        { label: "Loan against Mutual Funds", href: "#" },
      ],
    },
    {
      heading: "BNPL",
      links: [
        { label: "Healthcare", href: "#" },
        { label: "Education", href: "#" },
        { label: "Travel", href: "#" },
        { label: "Solar", href: "#" },
        { label: "E-commerce", href: "#" },
      ],
    },
    {
      heading: "Calculators",
      links: [
        { label: "EMI Calculator", href: "#emi-calculator" },
        { label: "Eligibility Calculator", href: "#" },
        { label: "Credit Score Check", href: "#" },
        { label: "Interest Rate Compare", href: "#" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Newsroom", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Terms of Use", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Grievance Redressal", href: "#" },
        { label: "Fair Practices Code", href: "#" },
        { label: "Interest Rate Policy", href: "#" },
      ],
    },
  ];

const socials = [
  { icon: Briefcase, href: "#", label: "LinkedIn" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: XIcon, href: "#", label: "X" },
  { icon: Video, href: "#", label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0A2A28] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Personal loans, BNPL and financial wellness products built to fit
              the way you actually live and pay.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/75">
              <a
                href="mailto:hello@moneysolution.example"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail className="h-4 w-4 text-accent" />
                hello@moneysolution.example
              </a>
              <a
                href="tel:+911800000000"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-4 w-4 text-accent" />
                1800-000-000 (toll-free)
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  4th Floor, Example Tower, MG Road,
                  <br />
                  Bengaluru 560001, India
                </span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/apply/offers"
                className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition hover:brightness-95"
              >
                Apply for a loan
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
            {sitemap.map((col) => (
              <div key={col.heading}>
                <div className="text-sm font-semibold text-white">
                  {col.heading}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-white/65 transition hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs leading-relaxed text-white/55 sm:max-w-3xl">
            © {year} MoneySolution. All rights reserved. Loans are subject to
            credit assessment by partner lenders. Interest rates and processing
            fees vary based on profile.
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
