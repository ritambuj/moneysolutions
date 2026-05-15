/** Official Money Star brand assets (`public/images/logos/`). */
export const BRAND_LOGOS = {
  lockup: {
    primary: "/images/logos/lockup-primary.svg",
    duotone: "/images/logos/lockup-duotone.svg",
    monoWhite: "/images/logos/lockup-mono-white.svg",
    monoBlack: "/images/logos/lockup-mono-black.svg",
    allNavy: "/images/logos/lockup-all-navy.svg",
  },
  stacked: {
    primary: "/images/logos/stacked-primary.svg",
    monoWhite: "/images/logos/stacked-mono-white.svg",
    monoBlack: "/images/logos/stacked-mono-black.svg",
  },
  icon: {
    duotone: "/images/logos/icon-duotone.svg",
    navy: "/images/logos/icon-navy.svg",
    outline: "/images/logos/icon-outline.svg",
    monoWhite: "/images/logos/icon-mono-white.svg",
    monoBlack: "/images/logos/icon-mono-black.svg",
  },
  wordmark: "/images/logos/wordmark.svg",
  favicon: "/images/logos/favicon.svg",
  appIcon: "/images/logos/app-icon.svg",
  appIconLight: "/images/logos/app-icon-light.svg",
} as const;

export type LogoLayout = "full" | "signet";
export type LogoVariant = "default" | "light";

const LOCKUP_ASPECT = 560 / 140;

export function logoSrc(layout: LogoLayout, variant: LogoVariant): string {
  if (layout === "signet") return BRAND_LOGOS.icon.duotone;
  return variant === "light"
    ? BRAND_LOGOS.lockup.monoWhite
    : BRAND_LOGOS.lockup.primary;
}

export function logoDimensions(layout: LogoLayout, height: number) {
  if (layout === "signet") {
    return { width: height, height };
  }
  return { width: Math.round(height * LOCKUP_ASPECT), height };
}
