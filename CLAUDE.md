# Good Hair by Zane -- Website v2

## Project Overview
Modern website for "Good Hair by Zane" in Most pri Bratislave, Slovakia (relocated from Ivanka pri Dunaji in S6). Focus: hair extensions (predlžovanie vlasov) and reconstruction/regeneration treatments. NOT a general hairdresser (kaderníctvo).

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Icons**: Lucide React (SVG)
- **Language**: TypeScript, content in Slovak (sk)
- **Deployment**: Vercel

## Current State
- **Session**: 9
- **Status**: Live at goodhairbyzane.com. **S9: committed + pushed the full S7+S8+S9 design polish to `main` (triggers Vercel deploy).** S9 work: enlarged the two small Footer bottom-row texts (copyright 0.78→0.9rem, M.D.N credit 0.72→0.85rem, both cream/55→/60); refined the primary-button (`.btn-primary-luxe`) hover (brighter diagonal gold sheen, `brightness(1.08)` warm-up, taller −3px lift + fuller glow, new `:active` press); regenerated the two updated Gallery photos `IMG_8938`/`IMG_9164` PNG→WebP (~92% smaller) + deleted the source PNGs. S7+S8 (de-template, Pricing menu, type scale, FAQ/Footer/Nav, perf) shipped in the same commit. Continue next: fix site-wide Reveal opacity-gating (blank without JS), run /impeccable audit + critique. Prior S6 relocation to Most pri Bratislave complete (final SEO refinement still deferred).
- **Repo**: https://github.com/bugiiiii11/zane_kadernictvo
- **Live**: https://goodhairbyzane.com

## SEO Strategy
- **Primary keywords**: predlžovanie vlasov Most pri Bratislave, regeneračné kúry vlasy
- **Secondary**: predlžovanie vlasov Bratislava, zahusťovanie vlasov, keratínové predlžovanie, micro-ring, nano-ring, mikrokapsule, vlasový salón Senec
- **Relocation note (S6)**: rendered SEO copy pivoted Ivanka pri Dunaji → Most pri Bratislave. Ivanka kept only as a nearby served-area mention (FAQ + schema areaServed). Final SEO refinement (citations, GMB, GSC re-submit) deferred.
- **Schema**: HairSalon (with areaServed, founder), FAQPage, BreadcrumbList, WebSite
- **Local SEO**: geo meta tags, NAP consistency, Google Maps embedded, areaServed (5 cities)
- **Methods offered**: Keratínová metóda, Micro-ring, Nano-ring, Mikrokapsule (NO tape-in)
- **Social**: Facebook + Instagram only (NO Twitter)

## Contact (NAP)
- **Name**: Good Hair by Zane
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
- Business is NOT a "kaderníctvo" — focus on predlžovanie vlasov and regeneračné kúry
- Pricing must be textual (SEO-indexable), never images
- Phone number must be clickable (tel: link)
- Design: luxury warm tones (cream, mocha, gold), Cormorant Garamond + Outfit fonts
- Images: use descriptive Slovak alt texts with keywords
- Saturday hours are "na objednávku", not fixed times
