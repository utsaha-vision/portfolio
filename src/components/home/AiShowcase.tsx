"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { aiShowcase } from "@/content/site";
import { Icon } from "../Icon";
import { Button, Container, SectionHeading } from "../ui";

export function AiShowcase() {
  const [active, setActive] = useState(aiShowcase.capabilities[0].key);
  const current = aiShowcase.capabilities.find((c) => c.key === active)!;

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots-dark mask-radial" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 right-0 h-[480px] w-[480px] rounded-full bg-ember-500/20 blur-[140px]" />
      <Container className="relative">
        <SectionHeading dark eyebrow={aiShowcase.eyebrow} title={aiShowcase.title} subtitle={aiShowcase.subtitle} />

        <div className="mt-14 grid gap-6 lg:grid-cols-[300px_1fr]">
          <div role="tablist" aria-label="AI capabilities" className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
            {aiShowcase.capabilities.map((c) => (
              <button
                key={c.key}
                role="tab"
                id={`tab-${c.key}`}
                aria-selected={c.key === active}
                aria-controls={`panel-${c.key}`}
                onClick={() => setActive(c.key)}
                className={clsx(
                  "flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-[15px] font-medium transition-colors",
                  c.key === active
                    ? "border-white/15 bg-white/[0.07] text-white"
                    : "border-transparent text-white/55 hover:bg-white/[0.04] hover:text-white",
                )}
              >
                <Icon name={c.icon} className={clsx("h-5 w-5", c.key === active ? "text-ember-400" : "")} />
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-ink-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                id={`panel-${current.key}`}
                role="tabpanel"
                aria-labelledby={`tab-${current.key}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid h-full gap-10 p-8 sm:p-10 md:grid-cols-[1.4fr_1fr]"
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] sm:text-3xl">{current.title}</h3>
                  <p className="mt-4 leading-relaxed text-white/60">{current.body}</p>
                  <ul className="mt-6 space-y-3">
                    {current.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-white/85">
                        <Check className="h-4 w-4 text-ember-400" /> {p}
                      </li>
                    ))}
                  </ul>
                  <Button href="/services/generative-ai" variant="light" className="mt-8">
                    Explore AI solutions
                  </Button>
                </div>
                <div className="flex flex-col rounded-xl border border-white/10 bg-gradient-to-br from-ember-500/25 via-ink-3 to-ink-3 p-6">
                  <Icon name={current.icon} className="h-10 w-10 text-ember-400" />
                  <p className="mt-auto pt-12 text-xs font-medium uppercase tracking-wider text-white/50">Where it helps</p>
                  <ul className="mt-3 space-y-2.5">
                    {current.useCases.map((u) => (
                      <li key={u} className="border-t border-white/10 pt-2.5 text-[15px] text-white/90">{u}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
