import { Container, Eyebrow } from "./ui";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-mist">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots mask-radial opacity-70" />
      <Container className="relative py-20 sm:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-[-0.015em] text-balance text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>}
        {children}
      </Container>
    </section>
  );
}
