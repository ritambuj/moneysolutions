import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const fg = variant === "dark" ? "text-primary" : "text-white";
  const dot = variant === "dark" ? "fill-accent" : "fill-accent";
  return (
    <a
      href="/"
      aria-label="MoneySolution home"
      className={cn("inline-flex items-center gap-2", className)}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" className="fill-primary" />
        <path
          d="M9 22V10h3.4l3.6 7.2L19.6 10H23v12h-2.6v-7.4L17 22h-2L11.6 14.6V22H9Z"
          className="fill-accent"
        />
        <circle cx="26" cy="9" r="2" className={dot} />
      </svg>
      <span className={cn("text-lg font-bold tracking-tight", fg)}>
        Money<span className="text-accent-foreground/0">·</span>
        <span className={variant === "dark" ? "text-primary" : "text-white"}>
          Solution
        </span>
      </span>
    </a>
  );
}
