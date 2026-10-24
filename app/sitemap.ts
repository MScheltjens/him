import type { MetadataRoute } from "next";

import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    { url: `${siteUrl}/impressum`, priority: 0.3 },
    { url: `${siteUrl}/datenschutz`, priority: 0.3 },
  ];
}
