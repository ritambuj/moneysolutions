import { Header } from "./header";
import { Footer } from "./footer";

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Header />
      <main className={`flex-1 ${className ?? ""}`}>{children}</main>
      <Footer />
    </>
  );
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-base lg:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
