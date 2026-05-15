"use client";

import * as React from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { navItems, type NavItem } from "./nav-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow",
        scrolled ? "shadow-[0_2px_12px_rgba(14,31,35,0.08)]" : "border-b border-border"
      )}
      onMouseLeave={() => setOpenIndex(null)}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                open={openIndex === i}
                onOpen={() => setOpenIndex(i)}
                onClose={() => setOpenIndex(null)}
              />
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/apply"
            className="hidden md:inline-flex h-10 items-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:brightness-95"
          >
            Apply for loan
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-primary hover:bg-muted"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <MobileDrawer onClose={() => setMobileOpen(false)} />
      ) : null}
    </header>
  );
}

function DesktopNavItem({
  item,
  open,
  onOpen,
  onClose,
}: {
  item: NavItem;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  if (!item.groups) {
    return (
      <a
        href={item.href ?? "#"}
        className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary"
      >
        {item.label}
      </a>
    );
  }
  const colCount = item.groups.length + (item.featured ? 1 : 0);
  return (
    <div className="relative" onMouseEnter={onOpen} onFocus={onOpen}>
      <button
        type="button"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition",
          open ? "text-primary" : "text-foreground/80 hover:text-primary"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>
      {open ? (
        <div
          className={cn(
            "absolute left-1/2 top-full -translate-x-1/2 pt-3"
          )}
          onMouseLeave={onClose}
        >
          <div
            className={cn(
              "rounded-2xl border border-border bg-white p-6 shadow-[0_20px_48px_rgba(14,31,35,0.12)]",
              "min-w-[420px]",
              colCount > 1 ? "grid gap-6" : "",
              colCount === 2 && "grid-cols-2 min-w-[640px]",
              colCount === 3 && "grid-cols-3 min-w-[860px]"
            )}
            style={{ animation: "fadeIn 160ms ease-out" }}
          >
            {item.groups.map((group, gi) => (
              <div key={gi}>
                {group.heading ? (
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.heading}
                  </div>
                ) : null}
                <ul className="space-y-1">
                  {group.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-muted"
                        >
                          {Icon ? (
                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                              <Icon className="h-4 w-4" />
                            </span>
                          ) : null}
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-foreground">
                              {link.title}
                            </span>
                            {link.description ? (
                              <span className="block text-xs text-muted-foreground">
                                {link.description}
                              </span>
                            ) : null}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            {item.featured ? (
              <div className="rounded-xl bg-primary p-5 text-primary-foreground">
                <div className="text-base font-semibold">
                  {item.featured.title}
                </div>
                <p className="mt-1 text-sm text-white/80">
                  {item.featured.body}
                </p>
                <a
                  href={item.featured.href}
                  className="mt-4 inline-flex h-9 items-center rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground"
                >
                  {item.featured.cta}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  return (
    <div className="lg:hidden fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl">
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary hover:bg-muted"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="h-[calc(100%-4rem)] overflow-y-auto px-2 py-3">
          {navItems.map((item) => (
            <MobileNavItem key={item.label} item={item} />
          ))}
          <div className="mt-4 px-2">
            <a
              href="/apply"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground"
            >
              Apply for loan
            </a>
          </div>
          <a
            href="#emi-calculator"
            className="mt-3 block px-2 text-center text-sm font-semibold text-primary underline-offset-2 hover:underline"
          >
            EMI calculator
          </a>
        </nav>
      </div>
    </div>
  );
}

function MobileNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = React.useState(false);
  if (!item.groups) {
    return (
      <a
        href={item.href ?? "#"}
        className="block rounded-lg px-3 py-3 text-base font-semibold text-foreground hover:bg-muted"
      >
        {item.label}
      </a>
    );
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-foreground hover:bg-muted"
      >
        {item.label}
        <ChevronDown
          className={cn("h-5 w-5 transition-transform", open && "rotate-180")}
        />
      </button>
      {open ? (
        <div className="pb-2 pl-2">
          {item.groups.map((group, gi) => (
            <div key={gi} className="mt-1">
              {group.heading ? (
                <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.heading}
                </div>
              ) : null}
              <ul>
                {group.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground/90 hover:bg-muted"
                      >
                        {Icon ? (
                          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/5 text-primary">
                            <Icon className="h-4 w-4" />
                          </span>
                        ) : null}
                        <span>{link.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
