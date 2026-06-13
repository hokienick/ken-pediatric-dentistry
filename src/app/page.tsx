import Image from "next/image";
import Link from "next/link";
import { Bezel } from "@/components/Bezel";
import { PrimaryCta, SecondaryCta } from "@/components/Buttons";
import { Journey } from "@/components/Journey";
import { Reveal } from "@/components/Reveal";
import { BranchDivider } from "@/components/Motifs";
import { site, cta } from "@/lib/site";
import { Phone, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const doctors = [
  { name: "Stephanie Dixon, DDS", role: "Pediatric dentist", img: "/images/dr-stephanie-dixon.jpg" },
  { name: "Eric Dixon, DDS", role: "Pediatric dentist", img: "/images/dr-eric-dixon.jpg" },
  { name: "Jenna McDonald, DDS", role: "Pediatric dentist", img: "/images/dr-jenna-mcdonald.jpg" },
  { name: "Tiffany Chan, DMD", role: "Pediatric dentist", img: "/images/dr-tiffany-chan.jpg" },
  { name: "Brenda Caillouel, DDS, MSD", role: "Orthodontist", img: "/images/dr-brenda-caillouel.jpg" },
  { name: "Brittany Koncz, DMD", role: "Orthodontist", img: "/images/dr-brittany-koncz.png" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero: editorial split ─────────────────────────────── */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-24 pt-36 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-44">
        <div>
          <h1 className="font-serif text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] font-medium leading-[1.06]">
            A dental home for every stage of childhood
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg text-bark-600">
            Board-certified pediatric dentists and orthodontists in Kensington,
            San Diego, caring for kids from their very first tooth.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <PrimaryCta href={cta.href} label={cta.label} />
            <SecondaryCta
              href={`tel:${site.phoneTel}`}
              label={site.phoneDisplay}
              icon={<Phone size={18} aria-hidden="true" />}
              className="tnum"
            />
          </div>
        </div>
        <Reveal delay={0.15}>
          <Bezel className="lg:rotate-1">
            <Image
              src="/images/hero-office-exterior.jpg"
              alt="A young patient grinning ear to ear after his checkup"
              width={1280}
              height={854}
              priority
              className="aspect-[5/4] w-full object-cover"
            />
          </Bezel>
        </Reveal>
      </section>

      {/* ── Trust strip: plain credentials ────────────────────── */}
      <section
        aria-label="Credentials"
        className="border-y border-bark-900/8 bg-band/60"
      >
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-12 md:grid-cols-3 md:px-10">
          <p className="max-w-[32ch]">
            <strong className="font-serif text-xl">Board-certified specialists.</strong>
            <span className="mt-1 block text-bark-600">
              Diplomates of the American Board of Pediatric Dentistry.
            </span>
          </p>
          <p className="max-w-[32ch]">
            <strong className="font-serif text-xl">Two specialties, one roof.</strong>
            <span className="mt-1 block text-bark-600">
              Pediatric dentistry and orthodontics share the same caring team.
            </span>
          </p>
          <p className="max-w-[32ch]">
            <strong className="font-serif text-xl">Trusted by families.</strong>
            <span className="mt-1 block text-bark-600">
              Generations of San Diego kids have grown up in our chairs.
            </span>
          </p>
        </div>
      </section>

      {/* ── Signature: the age journey ────────────────────────── */}
      <Journey />

      {/* ── Team preview: offset grid ─────────────────────────── */}
      <section
        aria-labelledby="team-heading"
        className="mx-auto max-w-[1200px] px-6 py-28 md:px-10"
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="team-heading" className="font-serif text-4xl md:text-5xl">
            Six doctors, one team
          </h2>
          <Link
            href="/team"
            className="group inline-flex min-h-11 items-center gap-2 font-medium text-leaf-700 hover:underline"
          >
            Meet everyone
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
          {doctors.map((doc, i) => (
            <li key={doc.name} className={i % 3 === 1 ? "md:translate-y-8" : ""}>
              <Reveal delay={i * 0.06}>
                <Bezel>
                  <Image
                    src={doc.img}
                    alt={`${doc.name}, ${doc.role.toLowerCase()}`}
                    width={853}
                    height={1280}
                    className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03]"
                  />
                </Bezel>
                <h3 className="mt-4 font-serif text-xl">{doc.name}</h3>
                <p className="text-bark-600">{doc.role}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── The office: full-bleed mural feature ──────────────── */}
      <section aria-labelledby="office-heading" className="bg-band/60 py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-2xl">
            <h2 id="office-heading" className="font-serif text-4xl md:text-5xl">
              An office that doesn&rsquo;t feel like a dentist&rsquo;s
            </h2>
            <p className="mt-5 text-lg text-bark-600">
              Open treatment bays, a hand-painted countryside mural, and room
              for you to stay by your child&rsquo;s side the whole visit.
            </p>
          </div>
          <Reveal delay={0.1}>
            <Bezel className="mt-12">
              <Image
                src="/images/office-main-bay.jpg"
                alt="Our open treatment bay, with its hand-painted countryside mural running the length of the wall"
                width={1050}
                height={697}
                className="w-full object-cover"
              />
            </Bezel>
          </Reveal>
          <p className="mt-4 text-center text-bark-600">
            The main bay at 4072 Adams Avenue, painted for the kids who visit it.
          </p>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section
        aria-labelledby="testimonials-heading"
        className="mx-auto max-w-[900px] px-6 py-28 text-center md:px-10"
      >
        <h2 id="testimonials-heading" className="sr-only">
          What parents say
        </h2>
        <BranchDivider className="mx-auto" />
        <blockquote className="mt-10">
          <p className="font-serif text-3xl leading-snug md:text-4xl">
            &ldquo;Their doctors are sweet and caring, and the staff made each
            visit as easy as possible.&rdquo;
          </p>
          <footer className="mt-6 text-bark-600">
            Sophia M. <span aria-hidden="true">&middot;</span> Parent of three
            patients
          </footer>
        </blockquote>
        <blockquote className="mt-14">
          <p className="mx-auto max-w-[40ch] text-xl text-bark-600">
            &ldquo;My child was apprehensive about the visit, but the team at
            KPD put our whole family at ease.&rdquo;
          </p>
          <footer className="mt-4 text-bark-600">
            Samantha P. <span aria-hidden="true">&middot;</span> Parent
          </footer>
        </blockquote>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        className="mx-auto max-w-[1200px] px-6 md:px-10"
      >
        <div className="rounded-[2rem] bg-leaf-100 px-8 py-16 text-center md:py-20">
          <h2 id="cta-heading" className="font-serif text-4xl md:text-5xl">
            Ready for their first visit?
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-lg text-bark-600">
            Tell us a little about your child and we&rsquo;ll call you to find
            a time that works.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryCta href={cta.href} label={cta.label} />
          </div>
        </div>
      </section>
    </>
  );
}
