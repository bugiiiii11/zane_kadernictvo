# O VLASY by Zane -- Handoff

<!-- HARD CAP ~120 lines. Max 2 session sections. Overflow -> handoff-archive.md -->

## Current State

- **Phase:** Rebrand and SEO audit shipped and live at **https://ovlasy.sk**. The founder has signed off the copy and supplied her bio and legal details; framer-motion is gone. Still blocked on her for treatment durations and the zivnostensky register number, and on the GSC/GBP/social migration.
- **Session count:** 13
- **Repo status:** committed and pushed to origin/main. Untracked by design: `.claude/agents/`, `.claude/skills/` (local tooling), `knowledge-base.md` (chatbot KB, contacts updated but still old brand/services).

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
- **DEPLOY UNBLOCKED, and the cause was two-part.** Vercel had been failing every build in 0 ms with `git_info_fail` since 2026-09-16. (a) The Vercel GitHub App installation for `bugiiiii11` (id 161945200) was scoped to "Only select repositories" and covered just `crm-core`, `mdn-tech`, `rein` -- the three projects that still deployed. The founder switched it to All repositories. (b) **That alone did NOT fix it**: the project stayed pinned to the dead `gitCredentialId` `cred_2b8e45...`, so builds kept 404ing while the repo search endpoint (which uses the current credential) already listed the repo. Fixed by refreshing the link -- `POST /v9/projects/zane-kadernictvo/link {"type":"github","repo":"bugiiiii11/zane_kadernictvo"}` -- which rotated it to the working `cred_4b904a9...`. Non-destructive; no unlink needed. **~18 other projects still sit on the dead credential** (swarm-resistance-frontend-dev, royal-stroje, ai-portal, ...) and will need the same one-line relink when they next deploy.
- **Deployed and verified live** (dpl_GmxmgqEQ, sha 8b99263): favicon/manifest/icons all 200, new phone and email everywhere, 0 hits for the old number, JSON-LD is the 9-entity graph with no dangling refs, hero h1 no longer opacity-gated, and 6 font preloads -- confirming the local zero was only an environment artifact. Live mobile LCP median 3516 ms (old build measured 4044 ms on the same harness); CLS 0.000. Still short of the 2.5 s threshold, as predicted.
- **Rejected:** splitting the one-pager into service or city pages. The domain is days old with no GSC data, 1052 words across 5 pages would be thin, and city landing pages would be doorway pages. Re-evaluate at day 90 on real query data only.

## What Was Done (Session 13) -- Approved copy, founder bio, framer-motion removed

- **Built the founder a sign-off sheet instead of waiting on her.** All three High rows were blocked on one person, so the unblocking move was a single Slovak decision page (published as an Artifact, in her own cream/gold + Cormorant identity) covering headings, missing facts and the Google/social tasks. She answered most of it the same day. Keep this pattern: when every priority is blocked on one human, the deliverable is the thing that unblocks them.
- **Headings A1-A3 approved and shipped.** Services/Gallery/FAQ H2s now name the service; `FAQPage.name` synced to match. The argument that won it: the Services H2 ("O vlasy sa starame do hlbky") was a near-duplicate of the H1, so the manifesto read twice in a row -- it survives as a subtitle.
- **Hero photo -> `ovlasy2.webp`** (founder: the old one showed GOOD HAIR CLUB). Its alt text had claimed "Interier vlasoveho salonu" for what is a hairstyle shot -- the same filename-not-image error as the S11 batch. Schema `primaryImageOfPage` and `image[]` still pointed at `zane3`; fixed. Dropped the photo from the gallery (16 -> 15) so it is not on the page twice. **`public/priestory/zane3.webp` is now orphaned.**
- **Founder details landed:** bio verbatim as a pull quote in About (her words, not paraphrased -- emoji dropped), Zaneta Labska in About/Footer/`Person.name`/`HairSalon.legalName`/llms.txt with "Zane" kept as `alternateName`, trainings as `Person.hasCredential`, brands listed in About + llms.txt. Footer legal block now carries obchodne meno, non-VAT status and the issuing authority.
- **framer-motion removed entirely.** Rewriting only `Reveal` would have left the library in the bundle -- Hero and Navigation imported it too. `Reveal` is now IntersectionObserver + a CSS transition, the hero parallax a CSS scroll timeline, the drawer a CSS transition on a `visibility: hidden` element that stays mounted. Page JS **53.6 -> 12.6 kB**, first load **141 -> 99.8 kB**, JS over the wire 140 -> 100 kB.
- **GOTCHA -- runtime perf is not measurable on this machine.** The first A/B looked like a win (3524 -> 3144 ms LCP), then the *same* build re-measured at 3808 ms: the machine had drifted 21%. An interleaved two-port A/B (old build in a git worktree on 3006) gave old-build LCP spanning 2908-14212 ms. No LCP or TBT claim can be made locally. Only byte counts are trustworthy here; real numbers must come from PageSpeed/CrUX on the live site.
- **Deliberate losses:** the hero text no longer fades out on desktop scroll (opacity on the LCP element is exactly what broke S12's measurement), and the parallax is simply absent where scroll timelines are unsupported (Firefox) -- the hero is static there.
- **Verified deterministically instead:** SSR HTML has zero hidden nodes, no-JS gives 6705 chars + 6 H2s + a working `tel:` link, `prefers-reduced-motion` hides nothing, the drawer opens and closes, and all 59 reveals fire on scroll.
- **Found, not fixed:** `IMG_8590.webp` in the About collage also shows the old GOOD HAIR CLUB branding on a chair -- a third instance beyond the two already logged. And `DSC_3592-HDR.webp`'s alt names Sens.us and milk_shake, brands absent from the founder's own list, which the page now contradicts.
- **GOTCHA confirmed again:** bash `grep` and heredocs mangle Slovak diacritics -- a substring check falsely reported an old build as new, and a heredoc failed outright. Verify served builds by dumping H2s with `PYTHONIOENCODING=utf-8 python`, and write longer scripts to a file rather than piping a heredoc.

## What To Do Next

| # | Priority | Task |
|---|----------|------|
| 1 | High | **Founder still owes two things** (the rest of the sign-off sheet is answered): treatment **durations** for the 10 services in B1 -- "trva" still appears zero times on the site, and it is the most common pre-booking question -- and the **zivnostensky register number** (Okresny urad Nove Zamky is in; the number is deliberately omitted from `Footer.tsx` rather than invented). |
| 2 | High | **SEO after migration:** GSC -- add the `ovlasy.sk` property (DNS TXT at Websupport), submit the sitemap, run Change of Address. GBP -- rename, new URL, new phone/email, and set Saturday as "by appointment" THERE (deliberately absent from the schema). IG/FB handles and bios still say `goodhairbyzane`. |
| 3 | High | **Verify the perf work on real data.** Local timings are noise (see S13). Run PageSpeed Insights on ovlasy.sk after this deploy and check CrUX in ~28 days. If LCP still exceeds 2.5 s the lever is the hero image, not JS -- the LCP element is the photo, and on mobile only a ~150 px sliver of it sits above the fold. |
| 4 | Med | **Old brand is visible in THREE photos**, not two: `IMG_8590` (About collage, chair), `IMG_7166` (gallery, mirror decal), `IMG_8938` (gallery, headrest). Ask the founder: drop, crop or keep. While there, `DSC_3592-HDR.webp`'s alt names Sens.us and milk_shake -- brands the page now says she does not use. |
| 5 | Med | **Chatbot:** rewrite `chatbot-knowledge-base.md` + `knowledge-base.md` for the new brand/services (both still say Ivanka + extensions; only contacts were updated in S12), add the founder bio and brand list, upload to mdntech, then restore the `<Script>` from the comment in `src/app/layout.tsx`. |
| 6 | Low | **Privacy page** -- the contact section embeds a Google Maps iframe that sets cookies with no consent and no policy page anywhere on the site. Now unblocked: the operator's legal name is known. |
| 7 | Low | Delete orphaned images -- `public/priestory/zane3.webp` (new, ex-hero) plus the 7 in `public/produkty/` (`DSC_3617/3635/3649/3667/3691-HDR.jpg`, `DSC_3635-HDR.webp`, `DSC_3691-HDR.webp`); verify with `grep -rl` first. 8 gallery images still carry camera filenames. |
| 8 | Low | Run `/impeccable audit` + `/impeccable critique` (never formally audited). Real Google Reviews link once reviews exist (no schema rating at all now, by design). Online booking (Calendly/Booksy); MDX blog only with a 6-month commitment. |

## Key Files

| File | Purpose |
|------|---------|
| `handoff.md` | Current state + next steps (capped; history in handoff-archive.md) |
| `src/app/globals.css` | The motion system (S13): `.rise`, `.reveal-*`, `.drawer*`, scroll-timeline parallax. These rules sit AFTER `@tailwind utilities`, so a shorthand here silently beats a Tailwind utility |
| `src/components/Reveal.tsx` | IntersectionObserver + CSS. Must never hide anything server-side -- that is the S12 regression |
| `src/components/Hero.tsx` | Motion props must stay opacity-free; opacity above the fold costs the LCP candidate |
| `src/app/layout.tsx` | Metadata + the 9-entity schema graph (Person = Zaneta Labska, HairSalon.legalName, no AggregateRating); chatbot `<Script>` kept as a comment |
| `src/components/About.tsx` | Founder bio verbatim, signature, trainings + brands. Collage photo `IMG_8590` still shows the old brand |
| `src/components/Footer.tsx` | NAP + legal block; still missing the zivnostensky register number |
| `src/content/faqs.ts` | SINGLE source for the FAQ -- accordion and JSON-LD both read it. Never inline FAQ copy again |
| `SEO-AUDIT.md` | S12 audit: scores, what was fixed, what needs the owner |
| `chatbot-knowledge-base.md`, `knowledge-base.md` | Chatbot sources -- STALE (old brand, address, extensions) |

## Session Summary

| Session | Date | Title |
|---------|------|-------|
| 4 | 2026-04-17 | Mobile performance fixes, footer branding |
| 5 | 2026-05-08 | Chatbot KB, relocation popup, visual hierarchy |
| 6 | 2026-06-17 | Relocation to Most pri Bratislave, new price list, WebP |
| 7 | 2026-06-17 | Impeccable design polish: de-template, Hero/About/Services, AA fixes |
| 8 | 2026-06-17 | Impeccable cont.: type scale, Pricing menu, perf, FAQ/Footer/Nav |
| 9 | 2026-06-18 | Footer text bump, button hover polish, Gallery WebP; shipped S7–S9 |
| 10 | 2026-09-10 | Rebrand to O VLASY by Zane, migration to ovlasy.sk, chatbot hidden |
| 11 | 2026-09-12 | Final logo extracted, filtered gallery, fake stats removed, CTA hover |
| 12 | 2026-09-16 | New contacts, favicon set, full SEO audit + fixes (score 64 -> 79) |
| 13 | 2026-09-16 | Approved copy, founder bio + legal block, framer-motion removed |
