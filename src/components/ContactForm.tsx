"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services, site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-ink/35 transition focus:border-ember-500 focus:outline-none focus:ring-4 focus:ring-ember-500/10";

const budgets = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k+", "Not sure yet"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.formEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(new FormData(form)),
          _subject: `New project enquiry from the ${site.name} website`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean | string; message?: string };
      if (!res.ok || String(data.success) === "false") {
        throw new Error(data.message || "Unable to send your message.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-line bg-mist p-10 text-center" role="status">
        <CheckCircle2 className="h-12 w-12 text-emerald-600" strokeWidth={1.75} />
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Thank you!</h3>
        <p className="mt-2 max-w-sm text-muted">Your message is on its way. We'll get back to you as soon as possible.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-medium text-ember-600 hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name">
          <input name="name" required maxLength={100} autoComplete="name" className={field} placeholder="Your name" />
        </Field>
        <Field label="Work email">
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} placeholder="you@company.com" />
        </Field>
        <Field label="Company" optional>
          <input name="company" maxLength={120} autoComplete="organization" className={field} placeholder="Company name" />
        </Field>
        <Field label="Service" optional>
          <select name="service" className={field} defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => <option key={s.slug}>{s.title}</option>)}
            <option>Other</option>
          </select>
        </Field>
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-ink">
          Estimated budget <span className="font-normal text-muted">(optional)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <label key={b} className="cursor-pointer">
              <input type="radio" name="budget" value={b} className="peer sr-only" />
              <span className="inline-flex rounded-full border border-line px-4 py-2 text-sm text-ink transition peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-ember-500">
                {b}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Project details">
        <textarea name="message" required minLength={10} maxLength={5000} rows={5} className={field} placeholder="Tell us about your goals, timeline and any requirements..." />
      </Field>
      {/* Honeypot: hidden from humans, bots tend to fill it */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {status === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error} Please email us at <a href={`mailto:${site.email}`} className="font-medium underline">{site.email}</a>.
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">We only use your details to respond to your enquiry.</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-ember-600 disabled:opacity-60"
        >
          {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </span>
      {children}
    </label>
  );
}
