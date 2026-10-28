import clsx from "clsx";
import { CheckCircle2, GitBranch } from "lucide-react";

const layers = [
  { label: "Clients", items: ["Web app", "Mobile app", "Admin portal"] },
  { label: "Gateway", items: ["API gateway · Auth · Rate limiting"] },
  { label: "Services", items: ["Orders", "Inventory", "Billing", "AI insights"], highlight: "AI insights" },
  { label: "Data", items: ["PostgreSQL", "Redis", "Storage"] },
];

export function ArchitectureVisual() {
  return (
    <div className="overflow-hidden rounded-3xl border border-ink bg-ink text-white shadow-[0_40px_80px_-40px_rgb(11_13_18/0.6)]" aria-hidden>
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <p className="font-mono text-xs text-white/50">system-architecture.yml</p>
        <span className="w-10" />
      </div>
      <div className="p-4 sm:p-7">
        {layers.map((layer, i) => (
          <div key={layer.label}>
            <div className="grid items-center gap-2 sm:grid-cols-[72px_1fr] sm:gap-3 lg:grid-cols-1 xl:grid-cols-[72px_1fr]">
              <p className="font-mono text-[10px] uppercase tracking-wider text-white/40 sm:text-[11px]">{layer.label}</p>
              <div className="grid gap-1.5 sm:gap-2" style={{ gridTemplateColumns: `repeat(${layer.items.length}, minmax(0, 1fr))` }}>
                {layer.items.map((it) => (
                  <span
                    key={it}
                    className={clsx(
                      "truncate rounded-lg border px-1.5 py-2.5 text-center text-[11px] sm:px-2 sm:text-[13px]",
                      it === layer.highlight
                        ? "border-ember-500/60 bg-ember-500/15 text-ember-100"
                        : "border-white/10 bg-white/[0.04] text-white/85",
                    )}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="grid h-5 sm:grid-cols-[72px_1fr] sm:gap-3 lg:grid-cols-1 xl:grid-cols-[72px_1fr]">
                <span className="hidden sm:block lg:hidden xl:block" />
                <span className="mx-auto w-px bg-gradient-to-b from-white/30 to-white/5" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 py-4 font-mono text-[11px] sm:px-7 sm:text-xs">
        <span className="flex items-center gap-2 text-white/60">
          <GitBranch className="h-3.5 w-3.5" /> ci/cd pipeline
        </span>
        <span className="flex items-center gap-2 text-emerald-400">
          <CheckCircle2 className="h-3.5 w-3.5" /> all checks passing
        </span>
      </div>
    </div>
  );
}
