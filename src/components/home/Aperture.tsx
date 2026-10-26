import { BrainCircuit, Cloud, Eye, Sparkles } from "lucide-react";

const C = 240;
const ringStyle = { transformOrigin: `${C}px ${C}px` } as const;

function nodes(r: number, angles: number[]) {
  return angles.map((a) => {
    const rad = (a * Math.PI) / 180;
    return { x: C + r * Math.cos(rad), y: C + r * Math.sin(rad) };
  });
}

const chips = [
  { icon: Eye, label: "Computer Vision", className: "left-0 top-[18%]" },
  { icon: Sparkles, label: "LLM Agents", className: "right-0 top-[18%]" },
  { icon: BrainCircuit, label: "Predictive ML", className: "left-0 bottom-[28%]" },
  { icon: Cloud, label: "Cloud Native", className: "right-0 bottom-[28%]" },
];

const spark = [14, 18, 12, 20, 16, 24, 19, 28, 22, 30];

export function Aperture() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[520px]" aria-hidden>
      <svg viewBox="0 0 480 480" className="h-full w-full">
        <defs>
          <radialGradient id="iris" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#ffb08a" />
            <stop offset="45%" stopColor="#ff5a1f" />
            <stop offset="100%" stopColor="#b8320a" />
          </radialGradient>
          <radialGradient id="halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity=".18" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={C} cy={C} r="230" fill="url(#halo)" />

        <g className="animate-orbit" style={ringStyle}>
          <circle cx={C} cy={C} r="215" fill="none" stroke="#e7e9ee" strokeWidth="1.5" strokeDasharray="3 9" />
          {nodes(215, [90, 270]).map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="5" fill="#0b0d12" />
          ))}
        </g>

        <g className="animate-orbit-rev" style={ringStyle}>
          <circle cx={C} cy={C} r="165" fill="none" stroke="#e7e9ee" strokeWidth="1.5" />
          {nodes(165, [70, 200, 320]).map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="11" fill="#fff" stroke="#e7e9ee" />
              <circle cx={p.x} cy={p.y} r="4" fill="#ff5a1f" />
            </g>
          ))}
        </g>

        <circle cx={C} cy={C} r="118" fill="#fff" stroke="#e7e9ee" strokeWidth="1.5" />
        {Array.from({ length: 48 }).map((_, i) => {
          const a = (i * 7.5 * Math.PI) / 180;
          const r1 = 104;
          const r2 = i % 4 === 0 ? 92 : 98;
          return (
            <line
              key={i}
              x1={C + r1 * Math.cos(a)}
              y1={C + r1 * Math.sin(a)}
              x2={C + r2 * Math.cos(a)}
              y2={C + r2 * Math.sin(a)}
              stroke="#c9ced8"
              strokeWidth="1.25"
            />
          );
        })}

        <circle cx={C} cy={C} r="78" fill="#0b0d12" />
        <g className="animate-pulse-soft" style={ringStyle}>
          <circle cx={C} cy={C} r="46" fill="url(#iris)" />
        </g>
        <circle cx={C} cy={C} r="16" fill="#0b0d12" />
        <circle cx={C - 14} cy={C - 16} r="6" fill="#fff" opacity=".85" />
      </svg>

      {chips.map(({ icon: I, label, className }) => (
        <div
          key={label}
          className={`absolute flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white/90 py-1.5 pl-1.5 pr-3.5 text-[13px] font-medium text-ink shadow-[0_8px_24px_-12px_rgb(11_13_18/0.25)] backdrop-blur ${className}`}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white">
            <I className="h-3.5 w-3.5" />
          </span>
          {label}
        </div>
      ))}

      <div className="absolute bottom-0 left-1/2 hidden w-56 -translate-x-1/2 rounded-2xl border border-line bg-white p-4 shadow-[0_16px_40px_-16px_rgb(11_13_18/0.3)] sm:block">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted">Inference latency · p95</span>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700">Healthy</span>
        </div>
        <div className="mt-2 flex items-end justify-between">
          <p className="font-display text-2xl font-semibold text-ink">42 ms</p>
          <svg viewBox="0 0 90 32" className="h-8 w-24">
            <polyline
              fill="none"
              stroke="#ff5a1f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={spark.map((v, i) => `${i * 10},${32 - v}`).join(" ")}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
