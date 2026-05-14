import Image from "next/image";
import { cn } from "@/lib/utils";

const LENDER_LOGOS: { src: string; alt: string }[] = [
  {
    src: "https://d3gum1ht0lrpyf.cloudfront.net/tata_a40c73b611.svg",
    alt: "Tata Capital",
  },
  {
    src: "https://d3gum1ht0lrpyf.cloudfront.net/kotak_aa4604849b.svg",
    alt: "Kotak Mahindra Bank",
  },
  {
    src: "https://d3gum1ht0lrpyf.cloudfront.net/incred_a752b4e95b.svg",
    alt: "InCred Finance",
  },
  {
    src: "https://d3gum1ht0lrpyf.cloudfront.net/pnb_748745954a.svg",
    alt: "Punjab National Bank",
  },
  {
    src: "https://d3gum1ht0lrpyf.cloudfront.net/indusind_88fb65b8b2.svg",
    alt: "IndusInd Bank",
  },
  {
    src: "https://d3gum1ht0lrpyf.cloudfront.net/Unico_Logo_removebg_preview_fb2c0ce587.png",
    alt: "Unico",
  },
  {
    src: "https://d3gum1ht0lrpyf.cloudfront.net/kb_7d45472a9b.svg",
    alt: "Karnataka Bank",
  },
];

const circleClass =
  "flex h-[5vh] w-[5vh] shrink-0 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-muted lg:h-[7vh] lg:w-[7vh]";

export function HeroPartnerLogos() {
  return (
    <div className="relative mt-10 flex flex-row flex-wrap items-center gap-2 lg:gap-4">
      {LENDER_LOGOS.map(({ src, alt }) => (
        <div
          key={src}
          className={cn(circleClass, "overflow-hidden p-1.5")}
          title={alt}
        >
          <Image
            src={src}
            alt={alt}
            width={50}
            height={50}
            className="h-full w-full object-contain"
            sizes="(min-width: 1024px) 7vh, 5vh"
          />
        </div>
      ))}
      <a
        href="#lending-partners"
        className={cn(
          circleClass,
          "text-base font-bold text-primary no-underline lg:text-xl",
          "hover:bg-primary hover:text-primary-foreground"
        )}
      >
        +14
      </a>
    </div>
  );
}
