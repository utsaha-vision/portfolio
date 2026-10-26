import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

const widths = { default: "max-w-7xl", wide: "max-w-5xl", narrow: "max-w-3xl" };

export function Container({
  className,
  size = "default",
  children,
}: {
  className?: string;
  size?: keyof typeof widths;
  children: React.ReactNode;
}) {
  return <div className={clsx("mx-auto w-full px-5 sm:px-8", widths[size], className)}>{children}</div>;
}

export function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={clsx("flex items-center gap-2 text-sm font-medium", dark ? "text-ember-400" : "text-ember-600")}>
      <span className="h-px w-6 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-2xl", align === "center" && "mx-auto text-center [&>p:first-child]:justify-center", className)}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={clsx(
          "mt-4 font-display text-3xl font-semibold tracking-[-0.015em] text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={clsx("mt-4 text-lg leading-relaxed text-pretty", dark ? "text-white/60" : "text-muted")}>{subtitle}</p>
      )}
    </div>
  );
}

const buttonStyles = {
  primary: "bg-ember-500 text-white hover:bg-ember-600",
  dark: "bg-ink text-white hover:bg-ink-3",
  outline: "border border-line bg-white text-ink hover:border-ink/30",
  light: "bg-white text-ink hover:bg-white/90",
  ghostDark: "border border-white/15 text-white hover:bg-white/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-colors",
        buttonStyles[variant],
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function ArrowLink({ href, children, dark }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-1.5 text-sm font-medium",
        dark ? "text-white hover:text-ember-400" : "text-ink hover:text-ember-600",
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
