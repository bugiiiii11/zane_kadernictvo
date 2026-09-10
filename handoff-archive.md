# Handoff Archive (do not read on /start)

Rotated out of handoff.md on 2026-09-10 (Session 10 wrap). Newest first.

## What Was Done (Session 8) -- Impeccable Cont.: Type Scale, Pricing Redesign, Perf, FAQ/Footer/Nav

Continued `/impeccable polish` (register: brand; North Star "The Warm Atelier"). Left uncommitted alongside S7 for user review (shipped in the S9 commit). User confirmed both reported issues fixed (text bigger, Pricing lag gone).

1. **Readability — site-wide body type scale.** Root cause was drift: the DESIGN.md body token was never applied — base was browser-default 16px and supporting text was hard-coded as small as `text-[0.72rem]`. Set the global body base in `globals.css` to a fluid `clamp(1rem, 0.94rem + 0.35vw, 1.125rem)` (16→18px), then bumped supporting/detail text across Hero, About, Services, Contact, Footer. Two `mocha` values that fell under AA moved to `#6B5A45` (~6:1). Headings unchanged.
2. **Pricing rebuilt as a refined enlarged menu** (user chose "refined menu" over cards/bands). Gold-dot category header over a gold hairline, 1px hairline row dividers, 17px names + right-aligned 28px display prices, semantic `<dl>`. Multi-line prices supported.
3. **Perf — Pricing scroll lag.** Headless profile could not reproduce (~59fps) → GPU-dependent. Applied two zero-downside fixes: `grain` tiles a 256px texture; Hero ambient animations pause via IntersectionObserver when off-screen. User confirmed lag gone.
4. **FAQ / Footer / Navigation polish + section rhythm**: About + Contact `py-24/36`, FAQ `py-16/24`; FAQ 1px gold hairlines + focus-visible + more air; Footer rebuilt as warm sign-off (gold hairline + serif wordmark + tagline + NAP; all text ≥ cream/55); Navigation keyboard focus-visible + accessible mobile drawer (role=dialog, aria, Escape, scroll-lock) + reduced-motion guards.

Gotcha: dev server shares `.next` with builds — used a temporary `NEXT_DISTDIR` for isolated production builds; `tsconfig.json` auto-edits from those builds were reverted.

## What Was Done (Session 7) -- Impeccable Design Polish (de-template, elevate luxury)

Ran `/impeccable` to elevate toward "warm, expert, boutique" (anti-references: generic salon template, cheap/discount, cold/clinical).

1. **Impeccable context created** -- `PRODUCT.md` (register, users, principles, anti-references, WCAG AA notes) and `DESIGN.md` (North Star "The Warm Atelier"; tokens; Named Rules; Do's/Don'ts).
2. **Section-opener cadence redesigned** -- removed the repeated tiny-caps eyebrow from every section (the #1 "template" tell); each section opens with a thin gold hairline; headings enlarged + `text-balance`. Italic accent word kept rare.
3. **Services rebuilt** -- removed 01/02/03 numbering, gradient text, 3D tilt + glare. Calm boutique cards with growing gold hairline + semantic `<dl>`.
4. **Hero** -- three glass metric cards → one warm credential plate; dropped the 3D rotateX entrance; Sparkles icon → quiet gold dot.
5. **About** -- "Zane" serif-italic signature + "Zakladateľka" line (no portrait exists). Flat gold-outline check badges. `DSC_3592-HDR.jpg` → `.webp` (the .jpg is orphaned but still tracked).
6. **WCAG AA contrast fixes** -- Pricing notes/disclaimer, Contact labels.

## What Was Done (Session 6) -- Relocation to Most pri Bratislave, New Price List, WebP

1. Relocation popup removed (`RelocationPopup.tsx` deleted).
2. **Address pivot** to Nové polia 2, 900 46 Most pri Bratislave across Contact, Footer, schema, llms.txt, FAQ, and all SEO copy. Ivanka pri Dunaji kept only as a nearby served-area mention.
3. **Google Maps + coordinates** -- address-based embed; geo 48.1451, 17.2896 (decoded from plus code 47WQ+2R). Map kept neutral (the address is registered as "BOHEMY beauty room").
4. **New price list** from owner's sheet (kúry od 90/50/100 €, Braids, Predlžovanie à la carte, Spoločenský účes 60 €).
5. Hero image → zane3; Gallery 5 → 9 images. WebP conversion (Pillow q=85); legacy jpg/jpeg deleted.
6. Impeccable skill installed into `.claude/skills/impeccable/` after a /skillscanner audit (SAFE). Commands-only, no hook registered.

## What Was Done (Session 5) -- Chatbot KB, Relocation Popup, Visual Hierarchy

1. `chatbot-knowledge-base.md` created (a0d0b2d).
2. mdntech chatbot widget added to `layout.tsx` via `<Script strategy="lazyOnload">`, then hidden (887e3e6); re-enabled later with a new bot ID (eb79aaf).
3. Relocation popup announcing the move (41c8126).
4. Visual hierarchy refresh: `.btn-primary-luxe`, `.shadow-luxury`, gold accents; body text contrast `#8A7F72` → `#5C4A35` (41c8126).

## What Was Done (Session 4) -- Mobile Performance, Footer Branding

1. M.D.N Tech credit in footer with logo + link (200edc3).
2. FAQ accordion lag fixed: Framer `height: auto` → CSS `grid-template-rows 0fr→1fr` (92ff32c).
3. Hero + FAQ mobile lag fixed: parallax off <1024px, blur orbs hidden on mobile, backdrop-filter reduced, gradient animations stopped on mobile (e36c801). Root cause: real phone GPUs cannot handle parallax + 100–120px blur orbs + backdrop-filter + two infinite gradient animations; DevTools emulation uses the PC GPU and hides it.

## What Was Done (Session 3) -- SEO Audit, Image Optimization, Security

1. 16 of 21 images converted to WebP; all resized to max 2000px (56+ MB saved). Hero 1.7 MB → 254 KB (9255cd0).
2. Full SEO audit (62/100) → FULL-AUDIT-REPORT.md + ACTION-PLAN.md. OG image, shorter meta description, HSTS + Permissions-Policy headers, schema fixes (Saturday removed from fixed hours, areaServed, founder), keyword cleanup, llms.txt (9255cd0).

## Session Summary (archived rows)

| Session | Date | Title | Commit |
|---------|------|-------|--------|
| 1 | 2026-03-28 | Initial website build + deploy | 32652c6 |
| 2 | 2026-03-31 | Real images, content updates, UX fixes | 3a302f2 |
