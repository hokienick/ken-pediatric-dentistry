# Design System: Kensington Pediatric Dentistry & Orthodontics

Light theme, locked sitewide. Color strategy: **Committed**, sage green carries real surface area (hero accents, the drenched age-journey band, the footer nest); warm white is the working background; warm brown is the ink. All values OKLCH-first with hex fallbacks. Derived from the actual KPD logo (sage script + brown serif caps + pastel birds).

## Color Palette

### Core tokens
- `--leaf-800: oklch(0.42 0.09 135)` (#3f5530) - CTA hover, footer/drench surfaces' deep end
- `--leaf-700: oklch(0.48 0.09 133)` (#4e6e3d) - primary action: buttons, links, active nav, focus ring
- `--leaf-500: oklch(0.65 0.10 130)` (#7aa15a) - logo sage: large display accents, illustration strokes, hover tints
- `--leaf-100: oklch(0.93 0.03 130)` (#e4ecd9) - soft sage tint for drenched-band inner surfaces
- `--bark-900: oklch(0.30 0.03 60)` (#3f2f23) - ink: headlines, body text (about 12:1 on bg)
- `--bark-600: oklch(0.48 0.03 60)` (#6f5b46) - secondary text, captions (AA on bg)
- `--bg: oklch(0.97 0.008 95)` (#f8f5ef) - page background, warm white (chroma toward brand hue, kept low and bright; not parchment-cream)
- `--surface: oklch(1 0 0)` (#ffffff) - cards, form fields
- `--band: oklch(0.94 0.015 110)` (#ebead9) - tinted section bands, same family as bg

### Decorative only (never UI chrome, never text)
- `--robin: oklch(0.80 0.05 230)` (#a8c4d4) - the blue logo bird; tiny illustration moments
- `--finch: oklch(0.82 0.06 10)` (#e4b8c2) - the pink logo bird; tiny illustration moments

### Rules
- One accent. Green (`--leaf-700`) is the only interactive color on every page: CTAs, links, active states, focus rings.
- Footer and the age-journey band are **drenched**: `--leaf-800`/`--leaf-700` surfaces with cream text (verify 4.5:1; cream on leaf-700 passes for large text, use `#f8f5ef` on leaf-800 for body).
- Bird tints appear at most once per page, in illustration, never on buttons/badges/text.
- Shadows always warm-tinted: `0 20px 60px -20px rgb(63 47 35 / 0.15)`. Never pure black, never `shadow-md`.
- No dark sections that aren't the committed green drench. No theme flips mid-page.

## Typography

- **Display serif: Sentient** (Fontshare, free commercial, self-hosted woff2). Warm, soft-edged, heritage; echoes the logo's serif wordmark without costume. Weights: 400, 500, 700 (variable file preferred).
- **Body/UI sans: Satoshi** (Fontshare, self-hosted). Weights 400/500/700.
- Display scale: `clamp(2.25rem, 5vw + 1rem, 4.5rem)` for h1 (ceiling 72px, this brand never shouts), `clamp(1.75rem, 3vw + 0.75rem, 3rem)` h2. Letter-spacing -0.02em on display, never tighter than -0.04em.
- Body: 1.0625rem (17px), line-height 1.65, max-width 65ch. `text-wrap: balance` on h1-h3, `pretty` on prose.
- Emphasis inside headlines: italic of the same serif only. No mixed-family emphasis.
- Hours, phone, address blocks: `font-variant-numeric: tabular-nums`.
- Eyebrow labels: rationed, max 1 per 3 sections; when used: Satoshi 500, 0.75rem, tracking 0.12em, `--leaf-700`.

## Components

### Buttons
- Primary ("Request an Appointment", the only primary label sitewide): `rounded-full`, `px-6 py-3`, bg `--leaf-700`, text `--bg`, Satoshi 500. Trailing arrow nested in its own `w-8 h-8 rounded-full bg-white/20` circle flush right (Button-in-Button). Hover: bg `--leaf-800`, inner circle translates `x-1`. Active: `scale-[0.98]`. Focus: 3px ring `--leaf-700` offset 2px.
- Secondary: `rounded-full` 1.5px border `--bark-900/15`, text `--bark-900`, transparent bg; hover bg `--bark-900/5`.
- Tertiary: plain `--leaf-700` text link, underline on hover, 44px tap target preserved.
- Phone/SMS quick action: secondary style with Phosphor `Phone`/`ChatCircleText` icon.

### Cards & photos (Double-Bezel)
Every photo and feature card sits in a nested frame, like a framed family picture: outer shell `bg-bark-900/5 ring-1 ring-bark-900/5 p-1.5 rounded-[2rem]`, inner `rounded-[calc(2rem-0.375rem)] overflow-hidden` with `shadow-[inset_0_1px_1px_rgb(255_255_255/0.4)]`. Warm ambient shadow on the shell. No naked `border border-gray-200` cards, no nested cards beyond the bezel pattern.

### Radius system (locked)
Cards/photos/sections: `2rem`. Buttons/pills/nav: full. Inputs: `0.75rem`. Nothing else.

### Navigation
Floating detached pill: `mt-4 mx-auto rounded-full`, warm glass `bg-[--bg]/85 backdrop-blur-md ring-1 ring-bark-900/8`, height ≤72px. Logo (KPD mark) left; links Home, About, Team, Services, New Patients; primary CTA pill right. Active page: `--leaf-700` text + small leaf-700 dot is NOT allowed (no decorative dots), use 2px underline offset. Mobile: hamburger morphs to X (two lines rotate), full-screen overlay `bg-[--bg]/92 backdrop-blur-3xl`, links stagger up 60ms apart.

### Forms
Labels above inputs (Satoshi 500, `--bark-900`), helper text below label, error text below input in a dark red that passes AA (`oklch(0.45 0.15 25)`). Inputs: `--surface` bg, 1px `--bark-900/15` border, `rounded-[0.75rem]`, focus ring `--leaf-700`. Never placeholder-as-label. Submit is the primary pill.

### Icons
Phosphor, regular weight, 1.5 stroke equivalent, one family sitewide. No Lucide, no emoji-as-icon.

### Motif (the nest thread)
Hand-feeling SVG branch/leaf dividers and a small perched-bird accent drawn in `--leaf-500` line work, bird tints allowed. HARD CAP: one motif moment per screen. The footer carries the nest (logo lockup + tagline). The age-journey section's connecting line is a branch.

## Layout

- Container `max-w-[1200px]`, `px-6 md:px-10`. Sections `py-24` minimum; hero and journey `py-32`+. Asymmetric bottom-heavier padding allowed.
- Hero: Editorial Split, content left (h1 max 2 lines, ≤20-word subtext, CTA pair), bezeled kid photo right; collapses to stack under 768px.
- Signature section: the age journey ("From first steps, till they leave the nest") as a drenched green band: 4 stages (First tooth ~age 1 → Growing-up checkups → Orthodontics → Off to the nest's edge) along a branch line. This is the page's one deliberate sequence; no other numbered sections anywhere.
- Layout families must vary: split hero, journey band, offset team grid (varied photo sizes), full-bleed mural feature, single rotating testimonial, FAQ two-column. Max 2 consecutive image+text splits. No three-equal-card rows.
- All multi-column layouts collapse explicitly: single column, `w-full px-4 py-8`+ under 768px. `min-h-[100dvh]` never `h-screen`.
- Z-scale (documented): 10 dropdown, 20 sticky nav, 30 overlay backdrop, 40 mobile menu, 50 toast, 60 grain.

## Motion

Intensity 4: fluid, gentle, sparing. Curve: `cubic-bezier(0.32, 0.72, 0, 1)`, 500-700ms.
- Entry: sections fade-up `translate-y-12 opacity-0` to settled, via `whileInView`/IntersectionObserver, `once: true`. NOT on every section; hero, journey, and team get choreographed reveals, informational sections appear plainly. Content always visible by default for non-JS/headless.
- Hover: buttons per spec above; photos inside bezels scale `1.03` slow; nav links color-shift only (no layout shift).
- One signature moment: on the journey band, the branch line draws in (SVG stroke-dashoffset) as it enters. Reduced-motion: fully drawn, static.
- `prefers-reduced-motion: reduce` collapses everything to instant/static. No parallax, no scroll-hijack, no marquees.

## Texture

Single fixed grain overlay: `position: fixed; inset: 0; pointer-events: none; opacity: 0.03; z-index: 60`. Warm paper feel, applied once at app root.

## Content rules

- One CTA label sitewide: "Request an Appointment." Phone number rendered as (619) 282-7337 with tel: and sms: links.
- No em-dashes anywhere in copy. No emoji. Sentence case headings.
- Testimonials: real ones only (Sophia M., Samantha P.), ≤3 lines, name + "Parent of ..." role.
- Alt text in brand voice ("Dr. Stephanie Dixon, pediatric dentist, smiling in front of the office's cedar wall" not "doctor photo").
- Quotes use real typographic quotes.

## Assets

`assets/images/`: logo.png (KPD nest mark), 6 provider headshots (dr-*.jpg), team-group-photo.png (LOW RES, refetch larger or crop-use small), office-main-bay.jpg (mural treatment bay, hero-grade), hero-office-exterior.jpg + office-interior.jpg + patient-testimonial.jpg + services-hero.jpg (real patient kids, warm), drs-brenda-steph.jpg. Optimize to WebP/AVIF at build, `srcset`, lazy-load below fold, hero image priority.
