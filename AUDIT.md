# KPD Redesign Audit — kpdds.com
Per /redesign-existing-projects. Scan → Diagnose → Fix priority. Rebuild is from scratch (current site is a DIY Squarespace "Clove" template; nothing structural to preserve except content, photos, and brand identity).

## Scan
- Platform: Squarespace 7.1, "Clove" wellness template, lightly customized by the owner (Eric Dixon DDS)
- Styling: template defaults; brand identity from logo never carried into the site (template teal/navy vs. logo sage green + warm brown)
- Real assets worth keeping: logo (nest/birds), 6 provider headshots (consistent rustic set), staff group photo, treatment-bay mural photo, 4 warm lifestyle kid photos, 2 real testimonials, strong bios

## Diagnose

### Critical (broken trust, live in production)
1. `/our-approach` is untouched template demo content: mental-healthcare headline, "Clove client" testimonial, lorem-ipsum FAQs, Stocksy stock photo
2. Homepage "Our Dental Tips" blog cards link to `clove-demo.squarespace.com` (the template's demo blog)
3. Squarespace commerce cart icon ("0 items") in the global nav of a dental practice
4. Lorem-ipsum-adjacent inconsistent CTAs: "Request An Appointment" / "Book a New Patient Appointment" / "Set up your First Visit" / "Book a consultation" — four labels for one action

### Content gaps
5. No office hours anywhere on the site
6. No insurance/payment information
7. `/office` page about the physical office has no address, hours, parking, or neighborhood info
8. Homepage team grid shows 4 of 6 providers (Tiffany Chan and Brittany Koncz missing)
9. No FAQs (first-visit age, what to expect, sedation safety, insurance — the questions parents actually Google)
10. Emoji in a section headline ("Transforming ... care 😀")
11. Forms workflow is "download 4 PDFs, print, email back" with JPG previews — dated but out of scope to replace; present it cleanly

### Typography
12. Template default sans throughout; zero connection to the warm serif/script brand of the logo
13. Headlines lack presence — small, default tracking/leading
14. Only regular/bold weights; flat hierarchy

### Color & surfaces
15. Generic template white + muted teal; logo's sage green / warm brown / soft pastels unused
16. Flat sections with no depth or texture; the warm rustic photography sits on sterile white
17. No consistent accent; CTAs vary in color treatment

### Layout
18. Everything centered and symmetrical, stacked single-column blocks
19. Equal-card service rows (4 cards) — the most generic pattern in the book
20. Tiny group photo (314px) stretched into a feature slot
21. No max-width rhythm; sections cramped, no breathing room

### Interactivity
22. No meaningful hover/active states; template defaults
23. No active-page indication in nav
24. Instant jumps, no motion language at all

### Strategic omissions
25. No custom 404, no privacy policy/terms links, no skip-link, no schema.org (LocalBusiness/Dentist) markup, no real meta/OG tags

## Preserve (do not lose in redesign)
- Logo + "From first steps, till they leave the nest." (brand soul — make it the design concept)
- All 6 full bios with credentials, volunteer work, personal details (genuine E-E-A-T gold: UCLA top honors, ABPD diplomates, valedictorian, UCSD professorship)
- Real testimonials (Sophia M., Samantha P.)
- All real photography (warm, rustic, real patients and staff — better than any stock)
- Mural/treatment-bay photo (shows the actual kid-friendly office)
- Phone/SMS (619) 282-7337, address, Google Maps link, Facebook, sister-location link
- Forms PDFs + portal link (functional requirements)
- "Caring dental home" language and the parent-education angle

## Fix priority (rebuild order)
1. Brand-true design system: sage green + warm brown + cream, serif display + humanist sans, nest/bird motif as design thread
2. Information architecture: Home, About (office + approach merged, real content), Team, Services, New Patients (get started + forms + FAQs + insurance), contact info in footer everywhere; kill cart, kill demo blog
3. One CTA, one label, everywhere: "Request an Appointment"
4. Hours, insurance, first-visit FAQs written into the build
5. All 6 providers on the team surfaces
6. Photography used large and warm, with proper art direction
7. Motion: gentle, spring-based, sparing — calm-parent energy, not slop fade-ins
8. Meta/OG/schema, custom 404, a11y states
