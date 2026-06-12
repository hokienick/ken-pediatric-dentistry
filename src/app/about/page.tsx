import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { Bezel } from "@/components/Bezel";
import { Reveal } from "@/components/Reveal";
import { PrimaryCta } from "@/components/Buttons";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Office and Approach",
  description:
    "A kid-first dental office in Kensington, San Diego: open treatment bays, a hand-painted mural, and an approach built on education and ease.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="An office built around how kids actually feel"
        lede="Dental visits are scary when they feel clinical and mysterious. Ours don't. Everything about this office, from the mural to the open bays, was designed to put children and their parents at ease."
      />

      {/* The space */}
      <section
        aria-labelledby="space-heading"
        className="mx-auto max-w-[1200px] px-6 md:px-10"
      >
        <Reveal>
          <Bezel>
            <Image
              src="/images/office-main-bay.jpg"
              alt="The main treatment bay with its hand-painted countryside mural"
              width={1050}
              height={697}
              priority
              className="w-full object-cover"
            />
          </Bezel>
        </Reveal>
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="space-heading" className="font-serif text-3xl md:text-4xl">
              Open bays, not closed doors
            </h2>
            <p className="mt-5 text-bark-600">
              Most of our care happens in an open treatment bay beneath a
              hand-painted countryside mural. Kids can see other kids doing
              fine, parents stay close, and nothing happens behind a closed
              door. For treatments that need privacy or quiet, we have private
              rooms too.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">
              In the heart of Kensington
            </h2>
            <p className="mt-5 text-bark-600">
              You&rsquo;ll find us at 4072 Adams Avenue, in the same village
              neighborhood where many of our families live, walk, and get
              their morning coffee. We&rsquo;re a few minutes off the 15 and
              an easy drive from the 805 and the 8.
            </p>
          </div>
        </div>
      </section>

      {/* The approach */}
      <section aria-labelledby="approach-heading" className="mt-28 bg-band/60 py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Bezel className="lg:-rotate-1">
              <Image
                src="/images/drs-brenda-steph.jpg"
                alt="Dr. Brenda Caillouel and Dr. Stephanie Dixon laughing together at the office"
                width={1500}
                height={1000}
                className="w-full object-cover"
              />
            </Bezel>
          </Reveal>
          <div>
            <h2 id="approach-heading" className="font-serif text-3xl md:text-4xl">
              Fun for the kid, honest with the parent
            </h2>
            <p className="mt-5 text-bark-600">
              We want every visit to be engaging and fun for your child, and
              enlightening for you. You&rsquo;ll always know what we found,
              what we recommend, and what it means, in plain words.
            </p>
            <p className="mt-4 text-bark-600">
              Our doctors are board-certified specialists who keep up with
              current research through continuing education, so the techniques
              we use are modern, minimally invasive, and backed by evidence,
              never habit.
            </p>
          </div>
        </div>
      </section>

      {/* What that looks like */}
      <section
        aria-labelledby="visit-heading"
        className="mx-auto max-w-[1200px] px-6 py-28 md:px-10"
      >
        <h2 id="visit-heading" className="font-serif text-3xl md:text-4xl">
          What a visit feels like
        </h2>
        <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          <div className="border-t border-bark-900/10 pt-6">
            <h3 className="font-serif text-xl">We go at your child&rsquo;s pace</h3>
            <p className="mt-2 text-bark-600">
              Show, tell, then do. Nervous kids get extra time, silly jokes,
              and breaks whenever they need one.
            </p>
          </div>
          <div className="border-t border-bark-900/10 pt-6">
            <h3 className="font-serif text-xl">You stay in the room</h3>
            <p className="mt-2 text-bark-600">
              Parents are part of the visit, not spectators in a waiting room.
              Ask anything, anytime.
            </p>
          </div>
          <div className="border-t border-bark-900/10 pt-6">
            <h3 className="font-serif text-xl">Prevention beats treatment</h3>
            <p className="mt-2 text-bark-600">
              We&rsquo;d rather coach great habits and use sealants than fill
              cavities. The less we have to do, the better we&rsquo;ve done.
            </p>
          </div>
          <div className="border-t border-bark-900/10 pt-6">
            <h3 className="font-serif text-xl">One team, both specialties</h3>
            <p className="mt-2 text-bark-600">
              Pediatric dentists and orthodontists work side by side, so
              growing smiles are watched by both sets of eyes.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <PrimaryCta href={cta.href} label={cta.label} />
        </div>
      </section>
    </>
  );
}
