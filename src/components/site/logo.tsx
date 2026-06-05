import { logoDimensions, logoSrc, type LogoVariant } from "@/lib/brand-logos";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  /** `light` — white logo for dark backgrounds (e.g. footer). */
  variant?: LogoVariant;
}) {
  const height = 40;
  const { width } = logoDimensions(height);
  const src = logoSrc(variant);

  return (
    <a
      href="/"
      aria-label="Money Star home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Money Star"
        width={width}
        height={height}
        className="h-8 w-auto object-contain sm:h-10"
      />
    </a>
  );
}
