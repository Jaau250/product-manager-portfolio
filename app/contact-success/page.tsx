import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <main className="page-frame">
      <section className="section-shell flex min-h-[70vh] items-center justify-center">
        <div className="max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-center sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Message Sent
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Thanks for reaching out.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-200">
            Your message has been submitted successfully. I&apos;ll follow up as soon
            as I can.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Back to Portfolio
            </Link>
            <a
              href="mailto:umolejames@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/[0.08]"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
