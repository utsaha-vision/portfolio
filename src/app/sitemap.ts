import type { MetadataRoute } from "next";
import { caseStudies, services, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/about", "/careers", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p ? 0.8 : 1 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...caseStudies.map((c) => ({ url: `${site.url}/work/${c.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
