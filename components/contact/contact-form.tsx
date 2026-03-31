"use client";

import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

function encodeFormData(values: Record<string, string>) {
  return new URLSearchParams(values).toString();
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, String(value)])
    );

    setStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encodeFormData(values)
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
      window.dispatchEvent(
        new CustomEvent("portfolio:analytics", {
          detail: {
            name: "contact_form_submitted",
            props: {
              form: "portfolio-contact"
            }
          }
        })
      );
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="portfolio-contact"
      method="POST"
      action="/contact-success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-white/10 bg-ink/70 p-7"
    >
      <input type="hidden" name="form-name" value="portfolio-contact" />
      <input
        type="hidden"
        name="subject"
        value="Portfolio inquiry from %{formName} (%{submissionId})"
        data-remove-prefix="true"
      />

      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human:
          <input name="bot-field" />
        </label>
      </p>

      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
              Name
            </span>
            <input
              required
              type="text"
              name="name"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-mist/60 focus:border-accent/50"
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
              Email
            </span>
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-mist/60 focus:border-accent/50"
              placeholder="name@company.com"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
            Company or team
          </span>
          <input
            type="text"
            name="company"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-mist/60 focus:border-accent/50"
            placeholder="Optional"
          />
        </label>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
            Message
          </span>
          <textarea
            required
            name="message"
            rows={5}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-mist/60 focus:border-accent/50"
            placeholder="Tell me a bit about the role, team, or product challenge."
          />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "submitting"}
            data-analytics-event="contact_form_attempted"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          <p className="text-sm leading-6 text-mist">
            Form submissions are handled by Netlify Forms.
          </p>
        </div>

        <div aria-live="polite" className="min-h-6 text-sm">
          {status === "success" ? (
            <p className="text-lime">
              Message sent. I&apos;ll get back to you as soon as I can.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-amber-300">
              Something went wrong. You can try again or email me directly.
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
