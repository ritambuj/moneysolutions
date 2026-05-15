const mentions = [
  "Economic Times",
  "Business Standard",
  "Inc42",
  "YourStory",
  "Moneycontrol",
  "Mint",
];

export function AwardsSection() {
  return (
    <section
      id="awards"
      className="border-t border-border bg-white py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Awards and recognition
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            We are proud to work with customers and partners who push us to make
            credit simpler, safer and more accessible every day.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {mentions.map((name) => (
            <div
              key={name}
              className="rounded-full border border-border bg-muted/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
