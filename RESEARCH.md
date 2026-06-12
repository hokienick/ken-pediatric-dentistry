# Kensington Pediatric Dentistry & Orthodontics — Site Research
Source: https://www.kpdds.com/ (Squarespace, "Clove" template) — researched 2026-06-12

## Business facts
- **Name:** Kensington Pediatric Dentistry and Orthodontics (KPD)
- **Tagline:** "From first steps, till they leave the nest."
- **Address:** 4072 Adams Avenue, San Diego, CA 92116 (Kensington neighborhood)
- **Phone:** (619) 282-7337 (also used for SMS)
- **Facebook:** active social presence
- **Sister location:** San Diego Pediatric Dental Group (sandiegopediatricdentalgroup.com)
- **Positioning:** "The top rated and reviewed Pediatric Dental and Orthodontic team in Southern California." Board-certified specialists, diplomate credentials, near freeways.

## Brand identity (from logo)
- Script "KPD" in sage/apple green; birds holding toothbrushes (blue + pink), baby bird in a nest inside the K
- "KENSINGTON PEDIATRIC DENTISTRY" in warm brown serif caps
- Nest/birds/growth metaphor = the core brand story (dental home from first tooth to college)

## Site map (8 pages)
1. `/home` — hero, team grid (4 of 6 providers), approach blurb, credentials, 4 service cards, testimonial, blog section (BROKEN: links to clove-demo.squarespace.com), final CTA
2. `/office` — "We want to provide you with the best Pediatric Dental and Orthodontic Care in San Diego", Brenda+Steph photo, treatment bay photo, modern-approach copy. No address/hours on page.
3. `/team` — 6 providers in 2 groups:
   - Pediatric Dentists: Eric Dixon DDS (Vanderbilt → UOP DDS → UCLA pedo, ABPD diplomate, UCSD asst clinical professor), Stephanie Dixon DDS (UNR → UCLA DDS top honor, UCLA chief resident, ABPD diplomate, YMCA board), Jenna McDonald DDS (UC Davis → UCLA DDS top honor, USC residency Outstanding Resident), Tiffany Chan DMD (Hong Kong → UCLA DDS, USC/Miller Children's residency)
   - Orthodontists: Brenda Caillouel DDS MSD (UCSD → UOP, Dugoni Excellence Award), Brittany Koncz DMD (Pitt valedictorian, Rochester Eastman ortho, 10+ yrs)
   - Full bios incl. volunteer work (International Health Emissaries, CDA Cares, missions in Romania/Guatemala/Nicaragua/Costa Rica/China/Vietnam), personal/family details
4. `/services` — 4 services: Exams & Cleanings (fluoride, X-rays when indicated); Orthodontics (traditional + ceramic brackets, Invisalign, early intervention, adults too); Prevention & Restorations (SDF, sealants, glass ionomer, composite, minimally invasive); Sedation (nitrous, oral sedation, deep sedation w/ dental anesthesiologist)
5. `/get-started` — new patient appointment request form
6. `/forms` — 4 downloadable new-patient PDFs (HIPAA, Health History, Office Policy, Consent), email back before first visit
7. `/our-approach` — **BROKEN: still raw Clove template demo content** (mental healthcare copy, "Clove client" testimonial, lorem ipsum FAQs, stock photo)
8. `/portal` — patient portal entry (thin)

## Testimonials (real)
- "Kensington Pediatric Dentistry is the perfect fit for my family! Their doctors are sweet and caring and the staff made each visit as easy as possible." — Sophia M., parent of 3 patients
- "My child was apprehensive about their dental visit, but the team at KPD put our whole family at ease" — Samantha P.

## Key copy worth preserving
- "From first steps, till they leave the nest."
- "Providing your children with a caring dental home."
- "We hope to make each visit an engaging and fun experience for your child, and an enlightening and educational visit for their parent or guardian."

## Image assets (downloaded → assets/images/)
| File | Content |
|---|---|
| logo.png | Real KPD logo (green script + birds + nest) |
| hero-office-exterior.jpg | MISNAMED — actually smiling blond boy vs red wood (homepage hero) |
| office-interior.jpg | Toddler peeking over wooden bench (warm lifestyle) |
| services-hero.jpg | Sepia photo, two boys on wagon bench |
| patient-testimonial.jpg | Toddler in red argyle vest |
| team-group-photo.png | Full 13-person staff photo, rustic wood backdrop (LOW RES 314px — needs format=2500w refetch or larger source) |
| office-main-bay.jpg | Open treatment bay w/ hand-painted countryside mural, 1050px |
| dr-*.jpg (6) | Individual provider headshots, rustic wood backdrop, consistent set |
| drs-brenda-steph.jpg | Two doctors together |
| homepage-headshot-1.png | Stephanie headshot small variant |
| KPDHIPAAForm2022 / KPDHealthHistory / OfficePolicy / ConsentForm | form thumbnails on /forms (JPGs of PDFs) |

Photography is warm, rustic (wood backdrops, sepia), real patients/staff — NOT stock. Strong asset.

## What's broken / audit headlines
1. /our-approach is 100% leftover template demo content (mental-health copy, lorem ipsum) — live in production
2. Homepage blog section links out to clove-demo.squarespace.com (template demo blog)
3. Shopping cart icon (0 items) in nav — irrelevant Squarespace commerce leftover
4. "Site Built and Designed by Eric Dixon DDS" credit; DIY template build overall
5. No office hours anywhere; address/phone only on homepage + forms page
6. /office page has no address, hours, parking info
7. Emoji in section headline on /office ("Transforming ... care 😀")
8. Team grid on homepage shows only 4 of 6 providers
9. No insurance information anywhere
10. Logo identity (birds/nest, green+brown) is ignored by the site's generic template styling
11. Group photo served at tiny resolution
12. Inconsistent CTAs: "Request An Appointment" / "Book a New Patient Appointment" / "Set up your First Visit" / "Book a consultation" (template leftover)
