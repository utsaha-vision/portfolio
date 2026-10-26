import Link from "next/link";
import clsx from "clsx";
import { site } from "@/content/site";

export function LogoMark({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="16" r="11" fill="none" stroke={dark ? "#fff" : "#0b0d12"} strokeWidth="3" />
      <circle cx="16" cy="16" r="5" fill="#ff5a1f" />
      <circle cx="16" cy="16" r="15" fill="none" stroke="#ff5a1f" strokeWidth="1" strokeDasharray="2 4" opacity=".6" />
    </svg>
  );
}

export function Logo({ dark }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <LogoMark className="h-8 w-8" dark={dark} />
      <span className={clsx("font-display text-[19px] font-semibold tracking-[-0.01em]", dark ? "text-white" : "text-ink")}>
        Utsaha<span className={dark ? "font-normal text-white/60" : "font-normal text-muted"}> Vision</span>
      </span>
    </Link>
  );
}
