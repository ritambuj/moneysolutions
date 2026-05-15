"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/faqs";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <ul className="space-y-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={item.question}
            className="overflow-hidden rounded-xl border border-border bg-white shadow-sm"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-foreground sm:text-base"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {item.question}
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen ? (
              <p className="border-t border-border px-5 pb-4 pt-2 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
