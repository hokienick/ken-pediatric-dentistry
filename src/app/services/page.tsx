import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { Bezel } from "@/components/Bezel";
import { Reveal } from "@/components/Reveal";
import { PrimaryCta } from "@/components/Buttons";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Exams and cleanings, prevention and restorations, orthodontics, and safe sedation options for children in San Diego.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title="Everything a growing smile needs, under one roof"
        lede="From the first checkup to the day the braces come off, your child sees the same familiar faces in the same familiar office."
      />

      {/* 1 ── Exams & cleanings: split with image */}
      <section
        aria-labelledby="exams-heading"
        className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <h2 id="exams-heading" className="font-serif text-3xl md:text-4xl">
            Exams and cleanings
          </h2>
          <p className="mt-5 max-w-[58ch] text-bark-600">
            Routine visits are the heart of pediatric dentistry. Each one
            includes a gentle cleaning, a full examination, and fluoride to
            strengthen growing enamel. We take X-rays only when they&rsquo;re
            clinically needed, never on a fixed schedule.
          </p>
          <p className="mt-4 max-w-[58ch] text-bark-600">
            Just as important: your child leaves knowing the dentist is a
            friendly place, and you leave knowing exactly how their teeth are
            doing.
          </p>
        </div>
        <Reveal>
          <Bezel className="lg:rotate-1">
            <Image
              src="/images/office-interior.jpg"
              alt="A toddler patient peeking over a wooden bench, mid-giggle"
              width={2500}
              height={1669}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </Bezel>
        </Reveal>
      </section>

      {/* 2 ── Prevention & restorations: band with grouped chunks */}
      <section aria-labelledby="prevention-heading" className="mt-28 bg-band/60 py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 id="prevention-heading" className="font-serif text-3xl md:text-4xl">
            Prevention and restorations
          </h2>
          <p className="mt-5 max-w-[58ch] text-bark-600">
            When a tooth needs help, we use the least invasive option that
            works. Often that means stopping a cavity without a drill at all.
          </p>
          <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-xl">Sealants</h3>
              <p className="mt-2 text-bark-600">
                A thin protective coating on the chewing surfaces of molars,
                sealing out the grooves where most cavities start.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl">Silver diamine fluoride</h3>
              <p className="mt-2 text-bark-600">
                A drill-free liquid treatment that can stop small cavities in
                their tracks, ideal for very young or anxious kids.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl">Tooth-colored fillings</h3>
              <p className="mt-2 text-bark-600">
                When a filling is needed, we use composite resin and glass
                ionomer materials that blend in and preserve healthy tooth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── Orthodontics: split, flipped */}
      <section
        aria-labelledby="ortho-heading"
        className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 pt-28 md:px-10 lg:grid-cols-2 lg:gap-16"
      >
        <Reveal className="lg:order-1">
          <Bezel className="lg:-rotate-1">
            <Image
              src="/images/services-hero.jpg"
              alt="Two young brothers sitting together on a wagon bench, all smiles"
              width={2500}
              height={1666}
              className="aspect-[4/3] w-full object-cover"
            />
          </Bezel>
        </Reveal>
        <div className="lg:order-2">
          <h2 id="ortho-heading" className="font-serif text-3xl md:text-4xl">
            Orthodontics
          </h2>
          <p className="mt-5 max-w-[58ch] text-bark-600">
            Our orthodontists offer traditional brackets, ceramic brackets,
            and Invisalign clear aligners, for kids, teens, and parents too.
            Because they share an office with our pediatric dentists, growth
            is monitored from the very first visit and treatment starts
            exactly when it should.
          </p>
          <p className="mt-4 max-w-[58ch] text-bark-600">
            Early intervention can guide jaw growth and often shortens or
            simplifies treatment later.
          </p>
        </div>
      </section>

      {/* 4 ── Sedation: the parent conversation */}
      <section
        aria-labelledby="sedation-heading"
        className="mx-auto max-w-[1200px] px-6 pt-28 md:px-10"
      >
        <div className="rounded-[2rem] bg-leaf-800 px-8 py-16 text-bg md:px-14 md:py-20">
          <h2 id="sedation-heading" className="font-serif text-3xl md:text-4xl">
            Sedation, explained like a parent would want
          </h2>
          <p className="mt-5 max-w-[58ch] text-bg/80">
            Some kids need more than patience and a gentle voice. When they
            do, we match the lightest option to the situation, and we&rsquo;ll
            walk you through exactly what to expect before anything happens.
          </p>
          <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-3">
            <div className="border-t border-white/20 pt-5">
              <h3 className="font-serif text-xl">Nitrous oxide</h3>
              <p className="mt-2 text-bg/80">
                Laughing gas. Takes the edge off, wears off within minutes,
                and your child stays fully awake.
              </p>
            </div>
            <div className="border-t border-white/20 pt-5">
              <h3 className="font-serif text-xl">Oral sedation</h3>
              <p className="mt-2 text-bg/80">
                A measured dose of calming medicine for longer or more
                involved treatment. Your child is relaxed but responsive.
              </p>
            </div>
            <div className="border-t border-white/20 pt-5">
              <h3 className="font-serif text-xl">Deep sedation</h3>
              <p className="mt-2 text-bg/80">
                For extensive treatment, administered and monitored
                start-to-finish by a dedicated dental anesthesiologist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[900px] px-6 pt-28 text-center md:px-10">
        <h2 className="font-serif text-3xl md:text-4xl">
          Not sure what your child needs?
        </h2>
        <p className="mx-auto mt-4 max-w-[44ch] text-bark-600">
          Start with an exam. We&rsquo;ll look, listen, and lay out the
          options together.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryCta href={cta.href} label={cta.label} />
        </div>
      </section>
    </>
  );
}
