import Link from "next/link";

import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/content/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell pt-8">
      <div className="surface overflow-hidden">
        <div className="grid gap-10 bg-mesh px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Let&apos;s Talk
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Open to Product Manager, Technical PM, and AI-focused product conversations.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
              If you&apos;re hiring for product roles that value customer empathy,
              technical fluency, and measurable execution, I&apos;d love to connect.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-ink/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist">
                  Direct email
                </p>
                <a
                  href={siteConfig.email}
                  data-analytics-event="contact_email_clicked"
                  data-analytics-label="direct-email"
                  className="mt-3 inline-flex text-lg font-semibold text-white transition hover:text-accent"
                >
                  umolejames@gmail.com
                </a>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-ink/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist">
                  LinkedIn
                </p>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-analytics-event="linkedin_clicked"
                  data-analytics-label="contact-linkedin"
                  className="mt-3 inline-flex text-lg font-semibold text-white transition hover:text-accent"
                >
                  linkedin.com/in/jamesumole
                </a>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <Link
                href="/case-studies/online-leasing-engine"
                data-analytics-event="flagship_case_study_clicked"
                data-analytics-label="contact-flagship"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
              >
                Start with the flagship case study
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
