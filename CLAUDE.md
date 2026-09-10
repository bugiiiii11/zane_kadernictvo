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
- **Session**: 10
- **Status**: **Live at https://ovlasy.sk** (S10, 2026-09-10). S10: full rebrand to O VLASY by Zane (Logo.tsx placeholder mark, favicon/OG regenerated, manifesto-driven copy), hair extensions removed, Malibu C deep cleansing (od 50 €) + event hairstyles (od 60 €) added, SEO layer moved to ovlasy.sk, chatbot widget hidden (code kept as a comment in layout.tsx). DNS at Websupport → Vercel done; goodhairbyzane.com apex 308-redirects to ovlasy.sk. Next: redirect www.goodhairbyzane.com too, founder sign-off on copy + final logo, GSC/GBP/social migration, chatbot KB rewrite, Reveal opacity-gating fix, /impeccable audit.
- **Repo**: https://github.com/bugiiiii11/zane_kadernictvo
- **Live**: https://ovlasy.sk (goodhairbyzane.com 308-redirects to it; www.goodhairbyzane.com redirect still pending)

## SEO Strategy
- **Primary keywords**: starostlivosť o vlasy Most pri Bratislave, regeneračné kúry vlasy, hĺbkové čistenie vlasovej pokožky
- **Secondary**: rekonštrukčné kúry, detoxikácia vlasov Malibu C, keratínové ošetrenie, svadobný účes / spoločenský účes / účes na stužkovú, vlasový salón Senec, O vlasy by Zane
- **Relocation note (S6)**: rendered SEO copy pivoted Ivanka pri Dunaji → Most pri Bratislave. Ivanka kept only as a nearby served-area mention (FAQ + schema areaServed). Final SEO refinement (citations, GMB, GSC re-submit) deferred.
- **Schema**: HairSalon (with areaServed, founder), FAQPage, BreadcrumbList, WebSite
- **Local SEO**: geo meta tags, NAP consistency, Google Maps embedded, areaServed (5 cities)
- **Services offered (S10)**: Rekonštrukčné a regeneračné kúry; Hĺbkové čistenie vlasov a pokožky (Malibu C, od 50 €); Účesy pre výnimočné udalosti (od 60 €); Braids. NO hair extensions any more (one FAQ says so, for old search traffic).
- **Social**: Facebook + Instagram only (NO Twitter)

## Contact (NAP)
- **Name**: O VLASY by Zane (formerly Good Hair by Zane)
- **Address**: Nové polia 2, 900 46 Most pri Bratislave
- **Phone**: +421 944 854 229
- **Email**: goodhairbyzane@gmail.com
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
- Design: luxury warm tones (cream, mocha, gold), Cormorant Garamond + Outfit fonts. Logo = `src/components/Logo.tsx` (gold ring+dot "O" + VLASY + by Zane) — placeholder until the founder supplies a final mark
- Images: use descriptive Slovak alt texts with keywords
- Saturday hours are "na objednávku", not fixed times
