# O VLASY by Zane -- Website v2

## Project Overview
Modern website for "O VLASY by Zane" (rebranded S10 from "Good Hair by Zane"; new domain ovlasy.sk bought via Websupport) in Most pri Bratislave, Slovakia. Focus: hair HEALTH — reconstruction/regeneration treatments, Malibu C deep cleansing of scalp + hair, and hairstyles for special occasions (spoločenské, svadobné, stužková). Hair extensions were DROPPED in S10. NOT a general hairdresser (kaderníctvo). Brand manifesto: "O vlasy sa staráme. O vlasy, nie iba o účes. O vlasy s rozumom."

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Icons**: Lucide React (SVG)
- **Language**: TypeScript, content in Slovak (sk)
- **Deployment**: Vercel

## Current State
- **Session**: 12
- **Status**: **Live at https://ovlasy.sk**, deployed 2026-09-16 (sha 8b99263). S12: new phone
  +421 950 249 838 and email ovlasy.sk@gmail.com everywhere; professional favicon set (charcoal tile
  cut from `logo-mark.webp`) + web manifest; full SEO audit (7 specialist passes, weighted score
  64 -> 79) with its fixes shipped -- one linked 9-entity JSON-LD graph, `minPrice` for "od" prices,
  FAQ moved to a single source, hero LCP no longer opacity-gated, five components turned back into
  server components, landscape nav drawer and 768-855px service-card overflow fixed. See `SEO-AUDIT.md`.
- **Repo**: https://github.com/bugiiiii11/zane_kadernictvo
- **Live**: https://ovlasy.sk (both goodhairbyzane.com and www.goodhairbyzane.com 308-redirect to it)
- **Deploy gotcha**: a Vercel project can stay pinned to a revoked `gitCredentialId` and fail every
  build in 0 ms with `git_info_fail`, even after the GitHub App regains repository access. Refresh it
  with `POST /v9/projects/<project>/link {"type":"github","repo":"<org>/<repo>"}`.
- **Next**: founder sign-off on copy + legal details, GSC/GBP/social migration, chatbot KB rewrite.

## SEO Strategy
- **Primary keywords**: starostlivosť o vlasy Most pri Bratislave, regeneračné kúry vlasy, hĺbkové čistenie vlasovej pokožky
- **Secondary**: rekonštrukčné kúry, detoxikácia vlasov Malibu C, keratínové ošetrenie, svadobný účes / spoločenský účes / účes na stužkovú, vlasový salón Senec, O vlasy by Zane
- **Relocation note (S6)**: rendered SEO copy pivoted Ivanka pri Dunaji → Most pri Bratislave. Ivanka kept only as a nearby served-area mention (FAQ + schema areaServed). Final SEO refinement (citations, GMB, GSC re-submit) deferred.
- **Schema**: one linked `@graph` -- HairSalon, Person (founder), 4x Service, WebSite, WebPage,
  FAQPage. BreadcrumbList was removed (never eligible on a one-pager). Saturday is deliberately
  absent from `openingHoursSpecification`: Schema.org has no honest "na objednavku" vocabulary,
  so it belongs in the Google Business Profile hours attribute instead.
- **Local SEO**: geo meta tags, NAP consistency, Google Maps embedded, areaServed (5 cities)
- **Services offered (S10)**: Rekonštrukčné a regeneračné kúry; Hĺbkové čistenie vlasov a pokožky (Malibu C, od 50 €); Účesy pre výnimočné udalosti (od 60 €); Braids. NO hair extensions any more (one FAQ says so, for old search traffic).
- **Social**: Facebook + Instagram only (NO Twitter)

## Contact (NAP)
- **Name**: O VLASY by Zane (formerly Good Hair by Zane)
- **Address**: Nové polia 2, 900 46 Most pri Bratislave
- **Phone**: +421 950 249 838
- **Email**: ovlasy.sk@gmail.com
- **Instagram**: https://www.instagram.com/goodhairbyzane/
- **Facebook**: https://www.facebook.com/people/Good-hair-by-zane/61585936526464/

## Opening Hours
- **Mon–Fri**: 09:00–18:00
- **Saturday**: Na objednávku (by appointment only)
- **Sunday**: Zatvorené

## Commands
```
npm run dev      # Dev server (use -p 3005, port 3000/3001 occupied)
npm run build    # Production build
npm run lint     # Linting
```

## Rules
- All content in Slovak
- Business is NOT a "kaderníctvo" — focus on hair health (regeneračné kúry, hĺbkové čistenie) + event hairstyles. Never reintroduce predlžovanie vlasov as an offered service.
- Pricing must be textual (SEO-indexable), never images
- Phone number must be clickable (tel: link)
- Design: luxury warm tones (cream, mocha, gold), Cormorant Garamond + Outfit fonts. Logo = the founder's final mark: `public/logo-ovlasy.webp` (dark) / `-light.webp` (on charcoal), rendered by `src/components/Logo.tsx` + an italic "by Zane". `public/logo-mark.webp` (the O with hair strands) is the master for favicon/apple-touch-icon
- Images: use descriptive Slovak alt texts with keywords
- Saturday hours are "na objednávku", not fixed times
- NEVER state years of experience or a client count — the founder has neither the tenure nor the numbers, and asked for USPs instead. No AggregateRating in schema until there are real reviews.
- Business IDs (živnosť): IČO 57399760, DIČ 1074439806 — in the Footer and in HairSalon schema (`identifier` / `taxID`)
