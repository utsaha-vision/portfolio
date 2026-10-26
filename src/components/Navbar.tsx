"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { nav, services } from "@/content/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { Container } from "./ui";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => !href.startsWith("/#") && pathname.startsWith(href);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b bg-white/85 backdrop-blur-xl transition-colors",
        scrolled || open ? "border-line" : "border-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-[15px] transition-colors hover:text-ink",
                    isActive(item.href) ? "text-ink" : "text-muted",
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid grid-cols-[1fr_220px] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-20px_rgb(11_13_18/0.25)]">
                    <ul className="grid grid-cols-2 gap-1 p-3">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-mist">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ember-50 text-ember-600">
                              <Icon name={s.icon} className="h-[18px] w-[18px]" />
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-ink">{s.title}</span>
                              <span className="mt-0.5 block text-xs leading-snug text-muted">{s.short}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col justify-between bg-ink p-6 text-white">
                      <div>
                        <p className="font-display text-lg font-semibold leading-snug">Not sure where to start?</p>
                        <p className="mt-2 text-sm text-white/60">Book a free consultation with our solution architects.</p>
                      </div>
                      <Link href="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ember-400 hover:text-white">
                        Book a call <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-full px-4 py-2 text-[15px] transition-colors hover:text-ink",
                  isActive(item.href) ? "text-ink" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-3 sm:inline-flex"
          >
            Contact us
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <Container className="py-6">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">Services</p>
            <ul className="mt-3 grid gap-1 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-lg py-2.5 text-ink">
                    <Icon name={s.icon} className="h-5 w-5 text-ember-600" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 border-t border-line pt-4">
              {nav.filter((n) => !n.children).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 font-display text-2xl font-medium text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-6 flex justify-center rounded-full bg-ember-500 px-6 py-3.5 font-medium text-white">
              Contact us
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
