---
name: Good Hair by Zane
description: Boutique hair-extension & regeneration salon — warm, expert, personal luxury.
colors:
  warm-white: "#FDFBF8"
  cream: "#F7F3EE"
  sand: "#E8E0D4"
  gold-light: "#E2D4B8"
  gold: "#C5A97B"
  mocha: "#8B7355"
  espresso: "#5C4A35"
  deep-brown: "#3A2E22"
  charcoal: "#2C2622"
  blush: "#D4A59A"
  sage: "#9BA88E"
  ink: "#4A4038"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.1vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.22em"
rounded:
  none: "0px"
  pill: "9999px"
spacing:
  section-x: "clamp(1.5rem, 5vw, 6rem)"
  container: "80rem"
components:
  button-primary:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "{colors.warm-white}"
    textColor: "{colors.espresso}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
  badge-pill:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.espresso}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
---

# Design System: Good Hair by Zane

## 1. Overview

**Creative North Star: "The Warm Atelier"**

This is the website of a single, skilled hand — not a salon chain. The feeling is walking into a quiet boutique studio washed in late-afternoon light: warm woods, soft gold, the sense that you, specifically, are expected and will be looked after. Luxury here is not cold marble and black glass; it is generous space, unhurried pacing, and obvious care in every detail. The serif speaks softly; the warmth does the persuading.

The palette lives almost entirely in a warm-neutral band — milk-white through sand, mocha, espresso, and deep brown — with a single muted **gold** as the one note of shine. Gold is rare and earned; it marks the things that matter (the booking, a result, a moment of emphasis) and never coats the whole surface. Everything else is restraint: type and space carry the weight.

What this system explicitly rejects: the interchangeable **kaderníctvo template** (stock heads of hair, default theme grids, the look every local salon ships); anything **cheap or discount** (promo banners, clutter, sale energy); and anything **cold or clinical** (sterile SaaS minimalism, corporate grey, no human presence). If a section could belong to any salon site unchanged, it has failed the North Star.

**Key Characteristics:**
- Warm-neutral monochrome with one disciplined gold accent
- Serif display (light weight, large) over clean sans body — quiet, editorial confidence
- Generous whitespace and unhurried vertical rhythm; nothing crowded
- Photography of the real space and real results does the persuading
- Motion is gentle and intentional — a welcome, never a performance

## 2. Colors

A warm-neutral monochrome carried almost entirely by browns and creams, with gold as the single accent and two whisper-quiet support hues (blush, sage) used sparingly.

### Primary
- **Antique Gold** (`#C5A97B`): The one accent. Used on the things that matter — the primary CTA's glow and 1px ring, hover states, the underline beneath a heading, a single dot before a category label. Its rarity is the point; gold should never coat a surface.
- **Gold Light** (`#E2D4B8`): The soft tint of gold for badge/pill backgrounds and gentle borders, where full gold would be too loud.

### Secondary
- **Espresso** (`#5C4A35`): The workhorse dark — primary buttons, strong body text, eyebrow labels. Warm, not black.
- **Mocha** (`#8B7355`): Mid-brown for secondary labels, italic emphasis in headings, supporting metadata.
- **Deep Brown** (`#3A2E22`) / **Charcoal** (`#2C2622`): Display headings and the footer ground. The darkest the palette goes — always warm-toned, never true black.

### Tertiary
- **Blush** (`#D4A59A`): A muted rose, used only as a faint ambient glow accent. Decorative, never structural.
- **Sage** (`#9BA88E`): A muted green, same role — occasional ambient tint. Use almost never.

### Neutral
- **Warm White** (`#FDFBF8`): The body background. A true warm off-white — the calm ground everything sits on.
- **Cream** (`#F7F3EE`) / **Sand** (`#E8E0D4`): Alternating section grounds and surface tints, to separate bands without hard lines.
- **Ink** (`#4A4038`): Default body text on light grounds.

### Named Rules
**The Rare Gold Rule.** Gold (`#C5A97B`) appears on ≤10% of any screen. It is reserved for emphasis, action, and result. The moment gold is everywhere, the boutique becomes a bargain.

**The No-True-Black Rule.** This palette has no `#000` and no neutral grey. Every dark is a warm brown; every grey leans toward the brand's own hue. Cold grey reads as the clinical anti-reference and is forbidden.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif)
**Body Font:** Outfit (with system-ui, sans-serif)

**Character:** A high-contrast serif display set *light and large* against a clean, neutral geometric-humanist sans. The pairing reads as quiet editorial luxury — the serif supplies the boutique voice; the sans keeps everything legible and modern. Contrast comes from weight and shape (serif vs. sans, 300 vs. 400+), not from competing personalities.

### Hierarchy
- **Display** (300, `clamp(2.5rem, 5vw, 4.5rem)`, lh 1.1): Hero and section openers. Light weight, large size — confidence through restraint. Italic mocha emphasis on a key phrase.
- **Headline** (400, `clamp(1.75rem, 3.5vw, 2.75rem)`, lh 1.15): Sub-section titles.
- **Body** (400, ~1.0–1.125rem, lh 1.65): Outfit, in Ink or Espresso. Cap measure at 65–75ch.
- **Label** (500, 0.7rem, tracking 0.22em, uppercase): Small eyebrow / metadata. Espresso, never light grey.

### Named Rules
**The Light-Display Rule.** Display headings stay at weight 300–400 and never bolder. Presence comes from size and space, not heaviness. Letter-spacing floor: -0.02em — never tighter.

**The Readable-Ink Rule.** Body text is `#4A4038` or `#5C4A35` (≥4.5:1 on warm-white/cream), never the muted mocha or a light grey "for elegance". Elegance that can't be read is a bug.

## 4. Elevation

A hybrid system: soft, **warm-tinted layered shadows** convey lift, and tonal section grounds (warm-white → cream → sand) separate bands without hard borders. Shadows are brown-tinted (never grey/black) and diffuse — they read as warm light, not hard drop-shadow. A rare gold glow marks the primary action.

### Shadow Vocabulary
- **Layered** (`0 1px 2px / 4px 10px / 16px 32px / 32px 64px rgba(58,46,34,.06–.10)`): Default card lift — four warm-brown layers, very soft.
- **Luxury** (`…-12px rgba(58,46,34,.18), …-16px rgba(197,169,123,.12)`): Premium surfaces (stat cards) — adds a faint gold bottom layer.
- **Gold Glow** (`0 0 40px -10px rgba(197,169,123,.4)`): Reserved for the primary CTA and result highlights only.

### Named Rules
**The Warm-Shadow Rule.** Every shadow is tinted with `rgba(58,46,34, …)` (brown), never `rgba(0,0,0, …)`. A grey or black shadow on this palette looks like a cheap template.

## 5. Components

### Buttons
- **Shape:** Sharp, no radius (`0px`). Clean rectangular edges read as boutique-tailored, not bubbly-friendly.
- **Primary:** Espresso→deep-brown gradient, cream text, uppercase tracked label (0.12em), `16px 32px`. Hover lifts 2px with a gold ring + gold glow and a single light sweep.
- **Secondary / Ghost:** 2px espresso border on warm-white, espresso text; fills espresso on hover.

### Chips / Badges
- **Style:** Pill (`9999px`), gold-light background, gold border at ~30% opacity, espresso uppercase label with a small icon. Used for the location badge and small status notes only.

### Cards / Containers
- **Corner Style:** Sharp to softly-rounded; prefer sharp for editorial restraint.
- **Background:** Warm-white or glass (translucent warm-white + backdrop blur) over imagery.
- **Shadow Strategy:** Layered or Luxury (see Elevation). Never a hard grey shadow.
- **Border:** Hairline gold or sand; full borders only, never a thick coloured side-stripe.

### Navigation
- Fixed top bar, backdrop-blur over warm-white. Light tracked links in espresso; primary "Objednať sa" uses the primary button treatment. Mobile collapses to a drawer.

### Signature: The Gold Hairline
A 1–2px gold rule (gradient `#C5A97B → #E2D4B8`) used as a heading underline, a divider flanking a label, or a card top-border. It is the system's most repeated gesture — the thread of shine that ties sections together. Keep it thin; it's a hairline, not a band.

## 6. Do's and Don'ts

### Do:
- **Do** keep gold (`#C5A97B`) to ≤10% of any screen — emphasis, action, result only.
- **Do** keep display headings light (weight 300–400) and large; let size and space carry presence.
- **Do** tint every shadow warm-brown (`rgba(58,46,34, …)`), never black or grey.
- **Do** set body text in `#4A4038`/`#5C4A35` and verify ≥4.5:1; readability beats "elegant" light grey.
- **Do** let real photography of the space and results carry the persuasion — show the work.
- **Do** make every section feel made *for Zane* — pass the "could this be any salon?" test before shipping.

### Don't:
- **Don't** ship the generic **kaderníctvo template** — stock hair-model photos, default theme grids, interchangeable layouts. If it could belong to any salon, redo it.
- **Don't** introduce anything that reads **cheap / discount** — promo banners, "sale" badges, clutter, crowding.
- **Don't** go **cold or clinical** — no true black, no neutral grey, no sterile SaaS minimalism. Warmth is non-negotiable.
- **Don't** use gradient text (`background-clip: text` on a gradient) — the existing `.text-gradient-gold` is an anti-pattern; emphasize with weight, size, or solid gold instead.
- **Don't** put a tiny uppercase tracked eyebrow above *every* section, or numbered `01 / 02 / 03` markers as default scaffolding — that's AI grammar, not boutique voice. One deliberate gesture, not a system-wide reflex.
- **Don't** lean on glassmorphism decoratively — blur/glass is rare and purposeful (over imagery), never the default surface.
- **Don't** use thick coloured side-stripe borders (`border-left > 1px`) as accents — full borders, tints, or the gold hairline instead.
