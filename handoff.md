# O VLASY by Zane -- Handoff

<!-- HARD CAP ~120 lines. Max 2 session sections. Overflow -> handoff-archive.md -->

## Current State

- **Phase:** Rebranded + migrated. Live at **https://ovlasy.sk** (S10). Waiting on the founder for copy sign-off + final logo, then last edits + SEO refinement.
- **Session count:** 10
- **Repo status:** clean, in sync with origin/main (984c102). Untracked by design: `.claude/agents/`, `.claude/skills/` (local tooling), `knowledge-base.md` (stale chatbot KB).

## What Was Done (Session 10) -- Rebrand to O VLASY by Zane, migration to ovlasy.sk

- **Brand + domain decision:** founder bought `ovlasy.sk` (Websupport). Name is now **O VLASY by Zane**; manifesto lines "O vlasy sa staráme. / O vlasy, nie iba o účes. / O vlasy s rozumom." drive the copy (Hero H1, About/Services/Pricing H2s, Footer). Email + IG/FB stay `goodhairbyzane` until the founder changes them.
- **Service pivot (founder decision):** hair extensions REMOVED everywhere; added Malibu C "Hĺbkové čistenie vlasov a pokožky" (od 50 €) and "Účesy pre výnimočné udalosti" (spoločenský/svadobný/stužková, od 60 €). Braids + regeneračné kúry kept. One FAQ ("Robíte aj predlžovanie vlasov?" → no) deliberately kept to catch old search traffic.
- **Logo placeholder:** `src/components/Logo.tsx` (gold ring+dot = "O", "VLASY" Cormorant uppercase, italic "by Zane"). Favicon/apple-touch-icon/og-image regenerated from the same geometry (`scripts` in the session scratchpad, not committed). Old `zane_favicon.png` left in repo, unreferenced.
- **SEO layer:** metadataBase/canonical/OG/schema/sitemap/robots/llms.txt → ovlasy.sk; schema keeps `alternateName: Good Hair by Zane`; OfferCatalog now carries prices. Commits 97d5f2a (rebrand) + 984c102 (chatbot hidden — widget code kept as a comment in `layout.tsx`).
- **DNS/Vercel (done by user, verified):** apex A 216.198.79.1, www CNAME `54e8f50e5b9e4f66.vercel-dns-017.com` (project-specific value from the Vercel domain panel), AAAA for apex/www deleted, mail records untouched. Gotcha: Websupport auto-appends `.ovlasy.sk` to the "Pre adresu" field — enter `www`, not `www.ovlasy.sk`. `goodhairbyzane.com` → 308 → ovlasy.sk verified.
- **Rejected:** committing the image-generation script (one-off; regenerate from `Logo.tsx` geometry if needed).

## What Was Done (Session 9) -- Footer text bump, button hover polish, Gallery WebP

- Enlarged Footer bottom-row texts; refined `.btn-primary-luxe` hover (diagonal gold sheen, brightness warm-up, -3px lift, `:active` press); regenerated `IMG_8938`/`IMG_9164` → WebP. Committed S7+S8+S9 together (062a217).

## What To Do Next

| # | Priority | Task |
|---|----------|------|
| 1 | High | **Redirect `www.goodhairbyzane.com`** — still serves the site (200, duplicate content). Vercel → Domains → Edit → Redirect 308 → ovlasy.sk. Apex is already redirected. |
| 2 | High | **Founder sign-off** on copy (Hero H1, manifesto headings, FAQ answers, "Zakladateľka" title) + final logo. Then swap `Logo.tsx` mark, regenerate `favicon.png`/`apple-touch-icon.png`/`og-image.jpg` (1200×630) from the final asset. |
| 3 | High | **SEO after migration:** GSC — add `ovlasy.sk` property (DNS TXT at Websupport), submit sitemap, run Change of Address from the old property; GBP — rename to O VLASY by Zane + new URL; IG/FB name/bio/link; local citations. Consider `info@ovlasy.sk` (Websupport mail) → update Contact/Footer/FAQ/schema. |
| 4 | Med | **Chatbot:** rewrite `chatbot-knowledge-base.md` + `knowledge-base.md` for the new brand/services (both still say Ivanka + extensions), upload to mdntech, then restore the `<Script>` from the comment in `src/app/layout.tsx`. |
| 5 | Med | Fix site-wide `Reveal` opacity-gating (content blank without JS / headless) — make visible-by-default, reveal only enhances. |
| 6 | Med | Run `/impeccable audit` + `/impeccable critique` on the rebranded site (never formally audited). Optional: Hero H1 wraps to 3 lines on desktop; tighten if the founder wants 2. |
| 7 | Low | Sweep remaining WCAG AA text/bg pairs; real Google Reviews link instead of AggregateRating placeholder. |
| 8 | Low | Online booking (Calendly/Booksy); MDX blog for "O vlasy s rozumom" tips (local SEO); delete orphaned `public/produkty/DSC_3592-HDR.jpg` + `public/zane_favicon.png`. |

## Key Files

| File | Purpose |
|------|---------|
| `handoff.md` | Current state + next steps (capped; history in handoff-archive.md) |
| `src/app/layout.tsx` | Metadata, schema.org (HairSalon/FAQ/OfferCatalog), favicon links; chatbot `<Script>` kept as a comment |
| `src/components/Logo.tsx` | Placeholder wordmark (ring+dot "O") — replace when the final logo arrives |
| `src/components/{Hero,About,Services,Pricing,FAQ}.tsx` | Brand copy + service/price data (textual, SEO-indexable) |
| `src/components/{Contact,Footer}.tsx` | NAP + email/social (still goodhairbyzane) — change when founder switches |
| `public/{favicon,apple-touch-icon}.png`, `public/og-image.jpg` | Generated brand images (first draft) |
| `public/llms.txt`, `src/app/{sitemap,robots}.ts` | AI/SEO discovery files, all on ovlasy.sk |
| `chatbot-knowledge-base.md`, `knowledge-base.md` | Chatbot sources — STALE (old brand, address, extensions) |
| `PRODUCT.md`, `DESIGN.md` | Impeccable context, updated for the new positioning |
| `scripts/convert.py` | Image → WebP converter |

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
