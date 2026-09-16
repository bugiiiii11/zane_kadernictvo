import { MetadataRoute } from 'next';

/**
 * Bump this when the page CONTENT changes -- not on every deploy.
 * `new Date()` here stamps build time, so a CSS tweak would claim the content
 * changed. Google only honours lastmod when it is consistently accurate, and
 * it ignores changefreq/priority entirely, so those are gone.
 */
const CONTENT_LAST_MODIFIED = new Date('2026-09-16');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ovlasy.sk';
  return [
    {
      url: baseUrl,
      lastModified: CONTENT_LAST_MODIFIED,
    },
  ];
}
