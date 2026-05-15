import {
  logoDimensions,
  logoSrc,
  type LogoLayout,
  type LogoVariant,
} from "@/lib/brand-logos";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "default",
  layout = "full",
}: {
  className?: string;
  /** `light` — lockup for dark backgrounds (footer). */
  variant?: LogoVariant;
  /** `signet` — icon-only mark. */
  layout?: LogoLayout;
}) {
  const isSignet = layout === "signet";
  const height = isSignet ? 40 : 36;
  const { width } = logoDimensions(layout, height);
  const src = logoSrc(layout, variant);

  return (
    <a
      href="/"
      aria-label="Money Star home"
      className={cn("inline-flex items-center", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={width}
        height={height}
        className={cn(
          "w-auto object-contain",
          isSignet ? "h-9 w-9 sm:h-10 sm:w-10" : "h-8 sm:h-9"
        )}
      />
      <span className="sr-only text-lg font-bold tracking-tight">Money Star</span>
    </a>
  );
}
