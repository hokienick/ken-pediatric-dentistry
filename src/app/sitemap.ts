import type { MetadataRoute } from "next";

const base = "https://www.kpdds.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/team`, priority: 0.8 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/new-patients`, priority: 0.9 },
    { url: `${base}/privacy`, priority: 0.2 },
    { url: `${base}/accessibility`, priority: 0.2 },
  ];
}
