import { Check } from "lucide-react";
import { hero } from "@/content/site";
import { Button, Container } from "../ui";
import { Aperture } from "./Aperture";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots mask-radial opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-ember-100/70 blur-[120px]" />
      <Container className="relative grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:pb-28 lg:pt-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[13px] font-medium text-ink shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
            </span>
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.025em] text-ink sm:text-6xl lg:text-[4.5rem]">
            {hero.title}
            <br />
            <span className="text-ember-500">{hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">{hero.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href} className="w-full sm:w-auto">{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="outline" className="w-full sm:w-auto">{hero.secondaryCta.label}</Button>
          </div>
          <ul className="mt-10 grid max-w-md grid-cols-2 gap-x-6 gap-y-3">
            {hero.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-ink/80">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ember-50">
                  <Check className="h-3 w-3 text-ember-600" strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>
        <Aperture />
      </Container>
    </section>
  );
}
