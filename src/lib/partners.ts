export type PartnerMark = {
  id: string;
  src: string;
  alt: string;
};

/** Logos in `public/images/partners/`. First seven appear in the hero strip (+ “more”). */
export const LENDING_PARTNERS: PartnerMark[] = [
  {
    id: "tata",
    src: "/images/partners/tata.svg",
    alt: "Tata Capital",
  },
  {
    id: "kotak",
    src: "/images/partners/kotak_aa4604849b.svg",
    alt: "Kotak Mahindra Bank",
  },
  {
    id: "incred",
    src: "/images/partners/incred_a752b4e95b.svg",
    alt: "InCred Finance",
  },
  { id: "pnb", src: "/images/partners/pnb.svg", alt: "Punjab National Bank" },
  {
    id: "indusind",
    src: "/images/partners/indusind_88fb65b8b2.svg",
    alt: "IndusInd Bank",
  },
  { id: "unico", src: "/images/partners/unico.webp", alt: "Unico" },
  {
    id: "kb",
    src: "/images/partners/kb_7d45472a9b.svg",
    alt: "Karnataka Bank",
  },
  {
    id: "hdfc",
    src: "/images/partners/hdfc_91c77b0063.svg",
    alt: "HDFC Bank",
  },
  {
    id: "bajaj",
    src: "/images/partners/Bajaj_Markets_Logo_Digital_7fce0d2cbe.svg",
    alt: "Bajaj Markets",
  },
];

export const HERO_PARTNER_MARKS = LENDING_PARTNERS.slice(0, 7);
