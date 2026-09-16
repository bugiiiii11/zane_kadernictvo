# O VLASY by Zane -- Handoff

<!-- HARD CAP ~120 lines. Max 2 session sections. Overflow -> handoff-archive.md -->

## Current State

- **Phase:** Rebrand complete, full SEO audit done and its code fixes shipped. Live at **https://ovlasy.sk**. Blocked on the founder for copy sign-off + legal details, and on the GSC/GBP migration.
- **Session count:** 12
- **Repo status:** clean, pushed to origin/main (35c079e). Untracked by design: `.claude/agents/`, `.claude/skills/` (local tooling), `knowledge-base.md` (chatbot KB, contact updated but still old brand/services).

## What Was Done (Session 11) -- Final logo, filtered gallery, honest stats, quieter CTA

- **Final logo, extracted from a JPG mockup.** The founder sent `zanelogo.jpg` -- black serif "OVLASY" (hair strands inside the O, gold rule) printed on textured cream paper, no alpha. Keying method: fit the paper as a cubic polynomial plate (two passes, refit after excluding ink), alpha-matte off it (LO 7 / HI 15 on the darkness delta), drop components without a 25px solid core to kill grain specks, unpremultiply the ink, then classify letters vs strand from the solid cores only and propagate that class to edge pixels via a distance transform. Without that propagation every antialiased letter edge takes the strand colour and gets a gold fringe on dark. Shipped `logo-ovlasy.webp` (dark) + `-light.webp` (cream/gold, for the charcoal footer) + `logo-mark.webp` (the O alone), and regenerated favicon/apple-touch/og-image from the mark.
- **Rejected for the logo:** a plain luminance threshold (the strand tips genuinely fade into the paper, so it chops them) and leaving the mark on cream (the footer is charcoal). GOTCHA: the founder's original `zanelogo.jpg` was deleted after extraction -- `public/logo-mark.webp` is now the icon master; ask her for the source file if a print-size asset is ever needed.
- **Gallery restructured** for the 7 new event hairstyles (16 photos total). Filters by service (ucesy / copanky / starostlivost); every photo stays mounted and is only CSS-hidden, so all alt text stays indexable and `next/image` still lazy-loads. `Reveal`s `once: true` means filtered-out tiles reveal correctly when they are shown.
- **Found wrong alt text while categorising:** `zane2/4/5` are braids on children, not treatment results, and two About product shots described a mirror station. All rewritten -- worth re-checking any alt text that was written from a filename rather than from the image.
- **Fabricated numbers removed** (founder: ~30 real clients, little tenure): "10+ rokov skusenosti" and "150+ spokojnych klientok" from the hero plate, hero copy, About feature and OG description; the hero plate now carries qualitative USPs. Also dropped the `AggregateRating` (5.0 / 150 reviews) from the HairSalon schema -- fabricated review data in structured markup is a manual-action risk.
- **Hero plate labels had to be two words each** -- at 390px the plate is three ~84px columns and anything longer wraps into ragged, uneven stacks.
- **CTA hover redone** (`.btn-primary-luxe`). Rejected a gold veil rising from the base: rendered it, and the wash visibly muddies the rich brown. Landed on a 1px gold hairline frame that fades in and settles from 9px to 6px inset, fill unchanged, softer shadow, `:focus-visible` mirrored. The old treatment stacked a specular sweep + brightness bump + a 44px halo.
- **Reveal bug confirmed, not just theoretical:** headless screenshots showed blank tiles until each element scrolled into view. Element-level screenshots of a section taller than the viewport will always show empty tiles until it is fixed -- crawl the whole page first.

## What Was Done (Session 12) -- New contacts, favicon, and a full SEO audit with its fixes

- **Contact change (founder):** phone is now **+421 950 249 838**, email **ovlasy.sk@gmail.com** -- replaced in every component, schema, FAQ, llms.txt, CLAUDE.md and both chatbot KB files. IG/FB handles still `goodhairbyzane`.
- **Favicon rebuilt.** The old one was the thin O on a white tile -- a blank white square on dark tab strips. Now a charcoal (#2C2622) rounded tile with a cream O and gold strands, cut from `public/logo-mark.webp` (letter vs strand classified by saturation, recoloured). 16/32/48 px cuts get an alpha dilation (nearest-solid-pixel colour via distance transform) so the ring survives; padding shrinks with size. Shipped `favicon.ico` (16/32/48) + `favicon-32.png` + `icon-192/512.png` + `apple-touch-icon.png` (square, iOS rounds) + `site.webmanifest`; `themeColor` via the Next `viewport` export. Generator script lives only in the session scratchpad (rejected committing it, same as S10).
- **Reveal fixed (was next-steps row 6):** `initial={false}` so SSR/no-JS/crawlers get visible content; after mount only elements BELOW the fold switch to hidden-then-animate. Verified headless: 0 Reveal-hidden elements without JS (the 23 opacity-0 nodes left are gallery hover overlays + collapsed FAQ answers, correct). Respects prefers-reduced-motion.
- **Perf nit:** footer `<Logo variant="light">` no longer sets `priority` (was preloading a below-fold image).
- **Checked, nothing else to change:** images already through next/image with correct `sizes`, map iframe lazy, 145 kB first-load JS, mobile 390 px full-page screenshot clean after the Reveal change.
- **SEO audit, 7 specialist passes** (technical, content, schema, on-page/local, performance, visual, architecture). Weighted score 64 -> 79. Full write-up committed as `SEO-AUDIT.md`; the per-area agent reports lived only in the session scratchpad and are gone.
- **LCP was unmeasurable, now fixed.** framer-motion serialises `initial` into SSR markup, so the hero H1 shipped with a zero opacity inline style, and Chromium will not nominate a transparent element as the LCP candidate. The rise is transform-only now. Median LCP 4044 ms (live) -> 2212 ms (local, same throttle). GOTCHA: same class of bug as the Reveal fix -- any new `motion` component carrying opacity in `initial` re-breaks it.
- **About/Services/Pricing/Contact/Footer were client components for nothing** -- no state, effects, handlers or browser APIs; they were client-only because they import `Reveal`, which a server component can render fine. Page JS 58.2 -> 53.6 kB.
- **FAQ was hand-duplicated** in `FAQ.tsx` and the JSON-LD, and 3 of 7 answers had already drifted (the markup carried a truncated tail). Single source is now `src/content/faqs.ts` -- never inline FAQ copy again.
- **Schema rebuilt:** one linked graph of 9 entities (was 4 disconnected fragments), logo, `hasMap`, 4 `Service` nodes, `minPrice` for "od" prices (Braids claimed a flat 30 EUR while listing 30/60/40-80). **Deliberate omissions:** Saturday stays out of `openingHoursSpecification` (Schema.org has no honest "na objednavku" vocabulary -- it belongs in the GBP hours attribute), and the single-item `BreadcrumbList` was removed as it can never be eligible on a one-pager.
- **Founder fixed the last old-domain redirect** -- `www.goodhairbyzane.com` now 308s to ovlasy.sk, so the byte-identical duplicate carrying the old NAP is gone.
- **GOTCHA -- local font preloads are a red herring.** `next-font-manifest.json` builds empty and the page emits zero font preloads *locally*, while live emits 6. Verified it is NOT a code regression: building the pre-S12 `layout.tsx` gives zero too. Local-environment artifact; do not chase it.
- **GOTCHA -- a dead `next start` silently keeps port 3005** and serves the OLD build while the new `next start` dies with EADDRINUSE in its log. Cost real time this session. Kill by port with PowerShell `Get-NetTCPConnection -LocalPort 3005 | Stop-Process -Force`, then verify the served HTML contains a marker from the new build.
- **GOTCHA -- bash heredocs mangle long Slovak string literals** used as python replace needles: assertions fail on strings that visibly match. Use index slicing, unicode escapes, or write the script to a file first.
- **Rejected:** splitting the one-pager into service or city pages. The domain is days old with no GSC data, 1052 words across 5 pages would be thin, and city landing pages would be doorway pages. Re-evaluate at day 90 on real query data only.

## What To Do Next

| # | Priority | Task |
|---|----------|------|
| 1 | High | **Verify the deploy actually ran.** The GitHub -> Vercel integration did NOT fire for c719b7f (no deployment was created at all); the founder changed something on 2026-09-16. Confirm 35c079e is live, then check `curl -s https://ovlasy.sk | grep -c 'as="font"'` returns 6 and that `/favicon.ico`, `/site.webmanifest` and the new phone/email are all served. |
| 2 | High | **Founder sign-off on copy** -- now also covers the SEO copy proposals in `SEO-AUDIT.md`: every heading is a manifesto line carrying no service or location (the lever is the first H2, not the H1), treatment durations appear nowhere, and the founder has no bio beyond a first name. |
| 3 | High | **Legal block incomplete.** Sec. 3a Obchodneho zakonnika wants the obchodne meno (e.g. "Zaneta <Priezvisko> - O VLASY") and the zivnostensky register entry (okresny urad + registration number). ICO/DIC are in already; add alongside in `Footer.tsx`. `llms.txt` deliberately says "Znacka" rather than asserting a legal name we do not have. |
| 4 | High | **SEO after migration:** GSC -- add the `ovlasy.sk` property (DNS TXT at Websupport), submit the sitemap, run Change of Address. GBP -- rename, new URL, new phone/email, and set Saturday as "by appointment" THERE (it is deliberately absent from the schema). IG/FB handles and bios still say `goodhairbyzane`. |
| 5 | Med | **Chatbot:** rewrite `chatbot-knowledge-base.md` + `knowledge-base.md` for the new brand/services (both still say Ivanka + extensions; only the contacts were updated in S12), upload to mdntech, then restore the `<Script>` from the comment in `src/app/layout.tsx`. |
| 6 | Med | **Mobile LCP will likely stay above 2.5 s** until the hero H1, rather than a 147 px sliver of the hero photo, becomes the LCP element. framer-motion is still the biggest main-thread blocker and `Reveal` keeps it on every section. A CSS/IntersectionObserver reveal would drop it for most of them. |
| 7 | Med | **Founder decision: old brand visible in two gallery photos.** `IMG_7166` has a "GOOD HAIR Club" mirror decal, `IMG_8938` a "HAIR CLUB" chair headrest. Ask whether to drop or crop. |
| 8 | Low | **Privacy page** -- the contact section embeds a Google Maps iframe that sets cookies with no consent and no policy page anywhere on the site. |
| 9 | Low | Run `/impeccable audit` + `/impeccable critique` (never formally audited). Delete 7 orphaned files in `public/produkty/` (`DSC_3617/3635/3649/3667/3691-HDR.jpg`, `DSC_3635-HDR.webp`, `DSC_3691-HDR.webp`) -- verify with `grep -rl` first. 8 gallery images still carry camera filenames. |
| 10 | Low | Real Google Reviews link once reviews exist (no schema rating at all now, by design). Online booking (Calendly/Booksy); MDX blog for "O vlasy s rozumom" only with a 6-month commitment. |

## Key Files

| File | Purpose |
|------|---------|
| `handoff.md` | Current state + next steps (capped; history in handoff-archive.md) |
| `src/app/layout.tsx` | Metadata, schema.org (HairSalon with `identifier`/`taxID`, no AggregateRating), favicon links; chatbot `<Script>` kept as a comment |
| `src/content/faqs.ts` | SINGLE source for the FAQ -- the accordion and the JSON-LD both read it. Never inline FAQ copy again |
| `SEO-AUDIT.md` | S12 audit: scores, what was fixed, what needs the owner, deferred copy proposals |
| `src/components/Hero.tsx` | Motion props must stay opacity-free -- opacity in `initial` re-breaks LCP |
| `src/components/Gallery.tsx` | 16 photos behind a service filter -- add new ones here with a `cat` |
| `src/components/Footer.tsx` | NAP + ICO/DIC; the legal block still lacks obchodne meno + register entry |
| `src/components/Contact.tsx` | Phone/email updated S12; IG/FB handles still `goodhairbyzane` |
| `chatbot-knowledge-base.md`, `knowledge-base.md` | Chatbot sources -- STALE (old brand, address, extensions) |
| `PRODUCT.md`, `DESIGN.md`, `scripts/convert.py` | Impeccable context; image -> WebP converter |

## Session Summary

| Session | Date | Title |
|---------|------|-------|
| 3 | 2026-03-31 | SEO audit, image optimization, security headers |
| 4 | 2026-04-17 | Mobile performance fixes, footer branding |
| 5 | 2026-05-08 | Chatbot KB, relocation popup, visual hierarchy |
| 6 | 2026-06-17 | Relocation to Most pri Bratislave, new price list, WebP |
| 7 | 2026-06-17 | Impeccable design polish: de-template, Hero/About/Services, AA fixes |
| 8 | 2026-06-17 | Impeccable cont.: type scale, Pricing menu, perf, FAQ/Footer/Nav |
| 9 | 2026-06-18 | Footer text bump, button hover polish, Gallery WebP; shipped S7–S9 |
| 10 | 2026-09-10 | Rebrand to O VLASY by Zane, migration to ovlasy.sk, chatbot hidden |
| 11 | 2026-09-12 | Final logo extracted, filtered gallery, fake stats removed, CTA hover |
| 12 | 2026-09-16 | New contacts, favicon set, full SEO audit + fixes (score 64 -> 79) |
