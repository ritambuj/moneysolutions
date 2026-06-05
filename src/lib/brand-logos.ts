/** Official Money Star brand assets (`public/images/logos/`). */
export const BRAND_LOGOS = {
  blue: "/images/logos/logo-blue.png",
  white: "/images/logos/logo-white.png",
} as const;

export type LogoVariant = "default" | "light";

/** Native aspect ratio of logo-blue.png / logo-white.png (1930×995). */
const LOGO_ASPECT = 1930 / 995;

export function logoSrc(variant: LogoVariant): string {
  return variant === "light" ? BRAND_LOGOS.white : BRAND_LOGOS.blue;
}

export function logoDimensions(height: number) {
  return { width: Math.round(height * LOGO_ASPECT), height };
}
