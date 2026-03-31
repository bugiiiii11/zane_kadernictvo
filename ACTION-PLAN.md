# SEO Action Plan — Good Hair by Zane

**Generated:** 2026-03-31 | **Score:** 62/100

---

## CRITICAL (fix immediately)

| # | Task | Impact | Effort |
|---|------|--------|--------|
| C1 | **Point goodhairbyzane.com to Vercel** — Domain currently serves a WordPress site, not our Next.js app. All SEO work is invisible. Either redirect domain DNS to Vercel or set up Vercel as primary. | Blocks everything | Low (DNS change) |
| C2 | **Create OG image** — `/og-image.jpg` is referenced in metadata + schema but returns 404. Social shares show no image. Generate from salon photos, 1200x630px. | Social sharing broken | Low |
| C3 | **Shorten meta description to 155 chars** — Current is ~230 chars, gets truncated. Suggested: "Profesionálne predlžovanie vlasov v Ivanke pri Dunaji. Keratín, micro-ring, nano-ring, mikrokapsule. 10+ rokov skúseností. Bezplatná konzultácia!" | SERP appearance | Low |

## HIGH (fix within 1 week)

| # | Task | Impact | Effort |
|---|------|--------|--------|
| H1 | **Add HSTS header** — Add `Strict-Transport-Security: max-age=63072000; includeSubDomains` to next.config.js headers | Security + trust | Low |
| H2 | **Fix "Good Hair Club" alt text** — About.tsx line 87: says "Good Hair Club" should be "Good Hair by Zane" | Brand consistency | Low |
| H3 | **Resize source images** — Hero image is 1.5 MB even as WebP. Resize all source images to max 2000px width before serving. Consider using Next.js `quality` prop. | LCP improvement | Medium |
| H4 | **Add "kaderníctvo" to visible content** — This keyword is in meta keywords but nowhere in visible text. Add naturally to About or Hero section. | Keyword targeting | Low |
| H5 | **Fix schema opening hours** — Schema says Saturday 09:00-15:00 but Contact says "Na objednávku". Align these. | Schema accuracy | Low |
| H6 | **Add `areaServed` to HairSalon schema** — List Bratislava, Senec, Bernolákovo, Most pri Bratislave | Local SEO reach | Low |
| H7 | **Add Twitter card meta tags** — Missing `twitter:card`, `twitter:title`, `twitter:description` | Social sharing | Low |

## MEDIUM (fix within 1 month)

| # | Task | Impact | Effort |
|---|------|--------|--------|
| M1 | **Add Content-Security-Policy header** — Basic CSP to prevent XSS. Allow Google Maps iframe, Google Fonts. | Security score | Medium |
| M2 | **Add Permissions-Policy header** — Restrict unused browser APIs (camera, microphone, geolocation) | Security score | Low |
| M3 | **Improve H2 headings for SEO** — Current H2s are decorative. Consider keyword-rich alternatives, e.g., "Profesionálne predlžovanie vlasov v Ivanke pri Dunaji" | On-page SEO | Low |
| M4 | **Reduce font weights loaded** — Loading 4 weights each for 2 fonts. Audit which are actually used and remove unused. | Performance | Medium |
| M5 | **Add Person schema for Zane** — Founder/employee with credentials strengthens E-E-A-T | Trust signals | Low |
| M6 | **Set up Google My Business** — Claim profile, verify, match NAP data. Critical for local pack rankings. | Local SEO | Medium |
| M7 | **Set up Google Search Console** — Submit sitemap, monitor indexing. Cannot verify until domain points to Next.js app. | Monitoring | Low |
| M8 | **Add `llms.txt`** — Help AI crawlers understand the site. Include business name, services, FAQ, pricing. | AI visibility | Low |
| M9 | **Add favicon.ico** — Legacy browsers and some crawlers look for /favicon.ico specifically | Compatibility | Low |
| M10 | **Fix color contrast** — `#8A7F72` text on cream backgrounds may fail WCAG AA. Darken to at least `#6B6158`. | Accessibility | Low |

## LOW (backlog)

| # | Task | Impact | Effort |
|---|------|--------|--------|
| L1 | **Add blog section** — MDX blog for hair care content marketing. Target long-tail keywords. | Topical authority | High |
| L2 | **Add before/after gallery** — Structured comparison content is highly citable by AI | AI citations | Medium |
| L3 | **Add real customer reviews** — Replace AggregateRating placeholder with actual reviews or link to Google Reviews | Trust / E-E-A-T | Medium |
| L4 | **Add online booking** — Calendly/Booksy integration. Add `potentialAction` schema. | Conversion + SEO | High |
| L5 | **Lazy load Framer Motion** — Dynamic import for below-fold animations to reduce initial JS | Performance | Medium |
| L6 | **Add `<picture>` fallback** — For the 5 images that couldn't be converted to WebP | Edge browsers | Low |
| L7 | **Add visible focus indicators** — Improve keyboard navigation UX | Accessibility | Low |

---

## Priority Summary

- **Before anything else:** Fix C1 (domain → Vercel). Without this, nothing else matters.
- **Week 1:** C2, C3, H1–H7 (all low effort, high impact)
- **Month 1:** M1–M10
- **Ongoing:** L1–L7
