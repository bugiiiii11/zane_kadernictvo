/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF first: it was not negotiated at all before, so every request fell
    // back to WebP even when the browser advertised AVIF support.
    formats: ['image/avif', 'image/webp'],
    // Optimised variants are content-addressed, so they can be held for a year.
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ovlasy.sk',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Files under /public ship without a content hash, so they get a month
        // rather than `immutable` -- long enough to stop the revalidation
        // round-trip on every visit, short enough that replacing a logo or a
        // favicon actually reaches people. Previously these were served with
        // `max-age=0, must-revalidate`.
        source: '/:path*.(webp|jpg|jpeg|png|gif|svg|ico|avif|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
