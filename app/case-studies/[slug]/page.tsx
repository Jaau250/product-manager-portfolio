import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyTemplate } from "@/components/case-study/case-study-template";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/site-header";
import { caseStudies, siteConfig } from "@/content/portfolio";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug
  }));
}

export async function generateMetadata({
  params
}: CaseStudyPageProps): Promise<Metadata | undefined> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return undefined;
  }

  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: `${study.title} | ${siteConfig.name}`,
      description: study.summary,
      url: `${siteConfig.url}/case-studies/${study.slug}/`,
      type: "article"
    }
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="page-frame">
      <SiteHeader />
      <CaseStudyTemplate study={study} />

      <SiteFooter />
    </div>
  );
}
