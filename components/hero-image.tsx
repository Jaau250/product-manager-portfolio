import Image from "next/image";

import { siteConfig } from "@/content/portfolio";

export default function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] md:mx-0">
      <div className="absolute inset-6 rounded-[28px] bg-accent/10 blur-3xl" />
      <div className="absolute inset-x-10 bottom-3 top-14 rounded-[28px] bg-lime/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-2 backdrop-blur-xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent">
          <Image
            src="/images/profile.jpeg"
            alt={siteConfig.name}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-ink/60 px-4 py-3 backdrop-blur-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              {siteConfig.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
