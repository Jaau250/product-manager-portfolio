import type { MetadataRoute } from "next";

import { caseStudies, siteConfig } from "@/content/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date()
    },
    ...caseStudies.map((study) => ({
      url: `${siteConfig.url}/case-studies/${study.slug}/`,
      lastModified: new Date()
    }))
  ];
}
