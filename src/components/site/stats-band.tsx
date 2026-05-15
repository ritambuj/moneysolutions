import { STATS } from "@/lib/site";

export function StatsBand() {
  return (
    <section className="border-y border-border bg-muted/50 py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
        {STATS.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-xl font-bold text-primary sm:text-2xl">{value}</div>
            <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
