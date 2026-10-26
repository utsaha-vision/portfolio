import { techStack } from "@/content/site";

export function TechStrip() {
  const items = [...techStack, ...techStack];
  return (
    <section aria-label="Technologies we work with" className="border-y border-line py-7">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 sm:px-8 lg:flex-row lg:gap-10">
        <p className="shrink-0 whitespace-nowrap text-sm text-muted">Technologies we build with</p>
        <div className="mask-fade-x w-full overflow-hidden">
          <ul className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
            {items.map((t, i) => (
              <li key={i} aria-hidden={i >= techStack.length} className="whitespace-nowrap font-display text-lg font-medium text-ink/40">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
