# KPD Design Direction (per /design-taste-frontend)

## Design Read
Redesign-overhaul of a local pediatric dental + orthodontics practice site, for San Diego parents (decision-maker: the parent, often a mom researching at night; the kid is the patient). Warm, trust-first, storybook-calm language. Next.js + Tailwind v4 + Motion. Brand-true palette extracted from the actual KPD logo. The nest/birds metaphor ("From first steps, till they leave the nest") is the narrative spine of the page, not decoration.

## Dials
- DESIGN_VARIANCE: 6 (offset layouts, varied aspect ratios, left-aligned headers; never chaotic — parents need orientation)
- MOTION_INTENSITY: 4 (fluid CSS-grade motion: gentle reveals, soft hovers, one signature moment; no scroll hijack on a healthcare site)
- VISUAL_DENSITY: 3 (airy, calm, generous py-24/py-32; information clearly chunked)

Rationale: brief sits between "trust-first / kids' product" (constraints override aesthetics) and "premium consumer". Healthcare for children = calm wins over clever.

## Palette (extracted from brand logo — this overrides default palette rules because these ARE the brand colors)
- Accent (single, locked): sage/leaf green from the KPD script mark (~#7aa15a family, desaturated to taste, WCAG-checked for text use as a darker tone)
- Ink: warm deep brown from the wordmark (not espresso-default; it is literally the logo's lettering color)
- Surface: warm cream/off-white, with white cards used sparingly
- Supporting tints: very soft blue + blush pink ONLY as tiny moments echoing the two logo birds (illustration accents, never UI chrome)
- One palette, one accent. Green is the only CTA/link/active color on every page.

## Typography
- Display: a warm serif display for headlines, justified by the brand: the logo wordmark is serif caps and the identity is heritage/warm-craft. Not Fraunces, not Instrument Serif. Candidates to settle in system step: Canela/Tiempos-class; webfont-practical too.
- Body/UI: humanist sans (Satoshi / GT Walsheim class) for body, nav, buttons, forms
- Emphasis: italic/bold of the same family only. No mixed-family emphasis words.
- Numbers in hours/contact blocks: tabular figures.

## The concept: "A dental home"
The site reads like the practice: a warm home you bring your kid to, from first tooth to braces-off. Design moves that carry it:
- Nest/branch/bird motif as a subtle thread: tiny SVG branch dividers drawn from the logo language, a bird perched on the appointment CTA, the nest in the footer. Sparing, max one motif moment per screen.
- "From first steps, till they leave the nest" becomes a literal age-journey section: First tooth (age 1) → checkups → orthodontics (tweens) → off to college. This replaces the generic 4-service-card row and is the page's signature layout.
- Real photography used big: the kids photos, the mural treatment bay, the team. Warm, slightly rounded image masks. No stock.

## What to avoid (anti-default discipline, specific to this brief)
- No teal/medical blue template feel (that is the current site's failure)
- No AI-purple, no glassmorphism, no neon, no dark mode section flips (page theme: light, locked; dark mode via tokens still supported)
- No three-equal-cards service row, no icon tiles above headings, no scroll-fade-in-everything
- No babyish clip-art or Comic Sans energy: the brand is warm and grown-up; the kid-friendliness comes from photography and the mural, not cartoon UI
- No em-dashes anywhere. No emoji (kill the current "😀" headline)
- One CTA label sitewide: "Request an Appointment"
- Trust signals (board certifications, diplomate status, UCLA/UCSD credentials) presented plainly and prominently; parents are vetting doctors, not buying a vibe

## Page architecture (from audit IA)
1. Home: split hero (kid photo + value prop), trust strip (board certs as plain text, not logo wall), age-journey signature section, team preview (all 6), office/mural feature, testimonials, FAQ teaser, final CTA
2. About the Office (merges /office + /our-approach with REAL approach copy)
3. Our Team (6 full bios, grouped pediatric vs orthodontics)
4. Services (4 services, distinct layout families, sedation safety explained for parents)
5. New Patients (get started form + the 4 PDF forms + FAQs + insurance + what-to-expect)
6. Footer everywhere: hours, address + map link, phone/SMS, portal link, sister-location link

## ui-ux-pro-max synthesis (step 3)
ADOPT from database:
- Style: "Accessible & Ethical" (WCAG AA min / AAA target, 16px+ body, visible focus rings 3-4px, semantic HTML, skip links, 44px touch targets, reduced-motion support). Healthcare + parents = accessibility is the aesthetic.
- Landing pattern: Hero + social proof before CTA; 3-5 testimonials with name + role ("parent of 3 patients"); CTA in hero + post-testimonials; sticky/header CTA.
- Anti-patterns confirmed: no neon, no motion-heavy, no AI purple/pink gradients.
- Checklist: cursor-pointer on clickables, no layout-shift hovers, consistent max-w container, no emoji icons.

REJECT from database (brand overrides):
- Stock healthcare palette (#0891B2 cyan family) = the generic medical template look this redesign exists to escape.
- Kid-font pairings (Fredoka/Baloo/Comic Neue) = babyish; brand is warm + grown-up.
- Playfair/Cormorant luxury pairings = too fashion; wrong warmth.

FINAL PALETTE (brand-derived, contrast-checked):
- --leaf-700 #4e6e3d (dark sage: text-safe accent, links, buttons) on cream passes AA
- --leaf-500 #7aa15a (logo sage: large display accents, illustration, hovers)
- --bark-900 #3f2f23 (warm brown ink: headlines, body text) ~12:1 on cream
- --bark-600 #6f5b46 (muted brown: secondary text) AA on cream
- --cream-50 #faf6ee (page surface), --cream-100 #f3ecdd (tinted section bands, same family)
- --white #ffffff (cards, sparingly)
- Bird tints (decorative only, never UI chrome): --robin #a8c4d4 (soft blue), --finch #e4b8c2 (blush)
- CTA: leaf-700 bg + cream text; hover leaf-800 #405a32

FINAL TYPE CANDIDATES (settle in step 4/5):
- Display serif: Fraunces is BANNED; shortlist Canela-class Google-practical: "Source Serif 4" too plain, "Lora" too bloggy → top candidate: "Gelica/Recoleta-class" soft serif; Google-Fonts-practical pick: "Recoleta" not on GF → use "Fraunces" NO → use "Gantari"? no.
  Practical decision: buy-free route = fontshare "Sentient" or "Recia"; GF route = "Petrona" or "Bitter" light. Default: Fontshare "Sentient" (warm, soft, heritage; free for commercial).
- Sans body/UI: Fontshare "Satoshi" (humanist, friendly, professional).
- Numbers: tabular-nums for hours/phone blocks.

## high-end-visual-design micro-details (step 4)
Variance Engine: Vibe = Editorial Luxury (cream #FDFBF7-family, muted sage, espresso-brown ink, variable serif headings, 3% noise grain on fixed overlay). Layout = Editorial Split hero + asymmetric bento moments. (Soft Structuralism rejected: too cold for this brand.)

- Double-Bezel: all photos and feature cards get nested architecture. Outer shell bg-bark-900/5, ring-1 ring-bark-900/5, p-1.5, rounded-[2rem]; inner core rounded-[calc(2rem-0.375rem)] with inset top highlight. Photos read like framed family pictures = on-concept for "dental home".
- Buttons: rounded-full pills, px-6 py-3, leaf-700 bg. Primary CTA uses Button-in-Button: trailing arrow in its own w-8 h-8 rounded-full bg-cream/20 circle flush right. active:scale-[0.98]; inner circle group-hover:translate-x-1.
- Nav: floating detached pill (mt-4/6, rounded-full, warm glass: bg-cream-50/80 backdrop-blur), logo left, 5 links, CTA pill right. Mobile: hamburger morph to X, full overlay bg-cream-50/90 backdrop-blur-3xl, staggered link reveal.
- Motion: all transitions cubic-bezier(0.32,0.72,0,1), 500-700ms. Entry: translate-y-16 + blur-md + opacity-0 resolving over 800ms, IntersectionObserver/whileInView only, once:true. Reduced-motion collapses everything.
- Spacing: sections py-24 minimum, hero and signature sections py-32/py-40. Radius system: cards/photos 2rem, buttons full, inputs 0.75rem (documented rule per shape lock).
- Shadows: only soft ambient diffused, tinted warm (shadow-[0_20px_60px_-20px_rgba(63,47,35,0.15)]). No shadow-md, no black shadows.
- Icons: Phosphor (light/regular weight), strokeWidth consistent, never Lucide.
- Eyebrow tags: capped per taste skill (max 1 per 3 sections) despite this skill's default.
- Grain: single fixed pointer-events-none overlay, opacity-[0.03], z-indexed via documented scale.
