# SEO audit — ovlasy.sk

Date: 2026-09-16 (Session 12). Method: seven specialist passes (technical, content,
schema, on-page/local, performance, visual, architecture) against the live site, the
local production build and the source.

## Health score

| Area | Weight | Live (as deployed) | After this session's fixes |
|------|-------:|-------------------:|---------------------------:|
| Technical SEO | 25% | 66 | 90 |
| Content quality | 25% | 64 | 64 |
| On-page SEO | 20% | 65 | 80 |
| Schema / structured data | 10% | 65 | 92 |
| Performance (CWV) | 10% | 40 | 55 |
| Images | 5% | 90 | 90 |
| AI search readiness | 5% | 72 | 80 |
| **Weighted total** | | **64 / 100** | **78 / 100** |

Content quality is unchanged on purpose: every remaining item there is a copy change
that needs the founder's sign-off, which is still outstanding.

## Fixed in this session

**Structured data.** The JSON-LD graph was four disconnected fragments with no `logo`,
no `hasMap` and exact prices on six services that are actually "od" prices — the Braids
offer claimed a flat 30 EUR while its own description listed 30 / 60 / 40-80 EUR. It is
now one linked graph of nine entities (HairSalon, Person, four Service nodes, WebSite,
WebPage, FAQPage) with zero dangling `@id` references, a real logo ImageObject, four
salon photos, `hasMap`, Sunday marked closed, and `priceSpecification` + `minPrice`
wherever the price is a starting price. The single-item BreadcrumbList was dropped; it
can never be eligible on a one-page site.

**FAQ drift.** The seven questions existed twice, hand-copied into the component and into
the schema, and three answers had already diverged — the markup carried a truncated tail
of the visible text. Both now read from `src/content/faqs.ts`, so they cannot drift again.

**Largest Contentful Paint was unmeasurable.** Framer Motion serialises `initial` into
the server-rendered HTML, so the hero heading shipped as `style="opacity:0"`. Chromium
refuses to nominate a transparent element as the LCP candidate, so the heading could not
become LCP until hydration finished. The rise animation now uses only a transform.
Measured with an identical throttling profile, median LCP went from 4044 ms on the live
build to 2212 ms locally. Layout shift was and remains 0.000.

**Five components were client-side for no reason.** About, Services, Pricing, Contact and
Footer declared `'use client'` but use no state, no effects, no handlers and no browser
APIs — they were client components only because they import the reveal wrapper, which a
server component can render perfectly well. Page JS dropped from 58.2 to 53.6 kB.

**Mobile navigation was unusable in landscape.** At 740x360 the drawer was taller than
the viewport with scrolling locked, leaving the first link and the phone number out of
reach. It now scrolls, and centres only when the viewport is tall enough to fit it.

**Service cards overflowed between 768 and 855 px.** Three columns left the inner detail
list at 69 px, so words like "Spoločenský" and "Keratínové" spilled up to 14.5 px outside
their card. The three-up layout now starts at 1024 px.

**Also fixed:** the meta description was 167 characters and truncated in results, cutting
the call to action (now 143, leading with the primary keyword); the "O nás" section had
no link pointing at it and both logos used a bare `#` instead of `#domov`; the sitemap
stamped build time into `lastmod`, so a CSS tweak claimed the content had changed;
`areaServed` named Bernolákovo while the visible FAQ names Dunajská Lužná; AVIF was never
negotiated; images under `/public` were served with `max-age=0, must-revalidate`; the
footer legal line measured 3.94:1 and the logo accent 4.34:1 against AA's 4.5 threshold;
the footer phone link had a 117x19 hit area; `llms.txt` lacked the served areas, the
booking process and the business IDs.

## Still open — needs the site owner, not code

1. **`www.goodhairbyzane.com` still returns 200.** It serves a byte-identical copy of the
   whole site, with its own robots.txt and sitemap.xml, carrying the old phone number and
   email. The apex redirects correctly; only this host was missed. Fix it in Vercel:
   308 to ovlasy.sk, path not preserved. Note the apex currently preserves the path, so
   `goodhairbyzane.com/sluzby` redirects into a 404.
2. **Deploy the current branch.** The live site still publishes the old phone number and
   email in its HTML, its JSON-LD and its llms.txt, and 404s on the favicon and manifest.
   Deploying closes more findings than any other single action.
3. **Google Search Console:** add the ovlasy.sk property, submit the sitemap, run Change
   of Address from the old property.
4. **Google Business Profile:** rename to O VLASY by Zane, new URL, new phone and email,
   and set Saturday as "by appointment" there — Schema.org has no honest vocabulary for
   it, which is why the markup omits Saturday rather than inventing hours.
5. **Instagram and Facebook** still carry the old brand in their handles and bios.

## Recommended next, in priority order

**High — needs founder sign-off on copy.** Every heading on the page is a manifesto line;
none carries a service or the location. The lever is the first H2, not the H1. Treatment
durations appear nowhere ("trvá" occurs zero times), which is the most common question
before booking and something an AI assistant cannot answer about the salon. The founder
has no bio beyond a first name and a job title, which is the largest gap in the site's
expertise signals.

**Medium.** A short "for whom" section naming the symptoms people actually search for
(vypadávanie, odfarbovanie, krepatenie) and a "how a visit goes" section would both add
genuine depth. A privacy page is due, since the contact section embeds a Google Maps
iframe that sets cookies. Two gallery photos still show the old brand on a mirror decal
and a chair headrest.

**Low.** Mobile LCP will likely stay above the 2.5 s threshold until the hero heading,
rather than a 147 px sliver of the hero photograph, becomes the LCP element. Eight images
still carry camera filenames. Keep the site as a single page: the domain is days old with
no ranking data, and splitting 1052 words across five pages would produce thin content.
City landing pages would be doorway pages and must not be created.
