import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/content/site";
import { Reveal } from "./Reveal";

export const tones: Record<string, { panel: string; sub: string; chip: string }> = {
  ember: { panel: "bg-ember-500 text-white", sub: "text-white/75", chip: "bg-white/15 text-white" },
  ink: { panel: "bg-ink text-white", sub: "text-white/60", chip: "bg-white/10 text-white" },
  sky: { panel: "bg-[#e8eefc] text-ink", sub: "text-ink/60", chip: "bg-white text-ink" },
  stone: { panel: "bg-[#f1ede6] text-ink", sub: "text-ink/60", chip: "bg-white text-ink" },
};

export function WorkGrid({ limit }: { limit?: number }) {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;
  return (
    <Reveal>
    <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2">
      {items.map((c) => {
        const t = tones[c.tone] ?? tones.ink;
        return (
            <li key={c.slug} className="h-full">
              <Link href={`/work/${c.slug}`} className="group flex h-full flex-col">
                <div className={clsx("relative flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-2xl p-7 sm:p-9", t.panel)}>
                  <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-current opacity-10" />
                  <div aria-hidden className="pointer-events-none absolute -right-4 -top-4 h-40 w-40 rounded-full border border-current opacity-10" />
                  <div className="relative flex items-center justify-between">
                    <span className={clsx("rounded-full px-3 py-1 text-xs font-medium", t.chip)}>{c.category}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="relative">
                    <p className="font-display text-6xl font-semibold tracking-[-0.01em] sm:text-7xl">{c.results[0].value}</p>
                    <p className={clsx("mt-1 text-sm", t.sub)}>{c.results[0].label}</p>
                  </div>
                </div>
                <div className="pt-5">
                  <p className="text-sm text-muted">{c.client} · {c.industry}</p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-ember-600 sm:text-2xl">
                    {c.title}
                  </h3>
                </div>
              </Link>
            </li>
        );
      })}
    </ul>
    </Reveal>
  );
}
