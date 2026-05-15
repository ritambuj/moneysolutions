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
import { SITE } from "@/lib/site";

const sitemap: { heading: string; links: { label: string; href: string }[] }[] =
  [
    {
      heading: "Services",
      links: [
        { label: "Personal Loan", href: "/services/personal-loan" },
        { label: "Home Loan", href: "/services/home-loan" },
        { label: "Loan Against Property", href: "/services/loan-against-property" },
        { label: "Credit Card", href: "/services/credit-card" },
        { label: "Health Insurance", href: "/services/health-insurance" },
        { label: "Life Insurance", href: "/services/life-insurance" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" },
        { label: "FAQs", href: "/faq" },
      ],
    },
    {
      heading: "Calculators",
      links: [
        { label: "EMI Calculator", href: "/#emi-calculator" },
        { label: "Apply for loan", href: "/apply" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Terms of Use", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

const socials = [
  { icon: Briefcase, href: SITE.social.linkedin, label: "LinkedIn" },
  { icon: Camera, href: SITE.social.instagram, label: "Instagram" },
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
              {SITE.description}
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/75">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail className="h-4 w-4 text-accent" />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-4 w-4 text-accent" />
                {SITE.phone}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/apply"
                className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition hover:brightness-95"
              >
                Apply for a loan
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
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
            © {year} {SITE.legalName}. All rights reserved. Loans are subject to
            credit assessment by partner lenders.
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
