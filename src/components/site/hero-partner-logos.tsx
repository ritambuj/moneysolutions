import Image from "next/image";
import { HERO_PARTNER_MARKS } from "@/lib/partners";
import { cn } from "@/lib/utils";

const circleClass =
  "flex h-[5vh] w-[5vh] shrink-0 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-muted lg:h-[7vh] lg:w-[7vh]";

export function HeroPartnerLogos() {
  return (
    <div className="relative mt-10 flex flex-row flex-wrap items-center gap-2 lg:gap-4">
      {HERO_PARTNER_MARKS.map(({ id, src, alt }) => (
        <div
          key={id}
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
