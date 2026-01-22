import type { MetadataRoute } from "next";

const siteUrl = "https://dumatel.ru";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
    },
  ];
}
