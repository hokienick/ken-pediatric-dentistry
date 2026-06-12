import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { Bezel } from "@/components/Bezel";
import { Reveal } from "@/components/Reveal";
import { PrimaryCta } from "@/components/Buttons";
import { BranchDivider } from "@/components/Motifs";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the six board-certified pediatric dentists and orthodontists behind Kensington Pediatric Dentistry in San Diego.",
};

type Doctor = {
  name: string;
  role: string;
  img: string;
  alt: string;
  bio: string[];
  personal: string;
  credentials: string;
};

const pediatricDentists: Doctor[] = [
  {
    name: "Stephanie Dixon, DDS",
    role: "Pediatric dentist",
    img: "/images/dr-stephanie-dixon.jpg",
    alt: "Dr. Stephanie Dixon smiling in front of the office's cedar wall",
    bio: [
      "Dr. Stephanie earned her DDS at UCLA, where she received the school's top honor for pediatric care, then completed her pediatric training at UCLA as chief resident. She is a diplomate of the American Board of Pediatric Dentistry.",
      "She serves on the board of the San Diego YMCA and has volunteered with CDA Cares and International Health Emissaries, bringing dental care to families who would otherwise go without.",
    ],
    personal:
      "Married to Dr. Eric since 2004, she spends her time off traveling with their two boys.",
    credentials:
      "Diplomate, American Board of Pediatric Dentistry. Member of the ADA, CDA, AAPD, and CSPD.",
  },
  {
    name: "Eric Dixon, DDS",
    role: "Pediatric dentist",
    img: "/images/dr-eric-dixon.jpg",
    alt: "Dr. Eric Dixon smiling in front of the office's cedar wall",
    bio: [
      "A San Diego native, Dr. Eric studied neurobiology at Vanderbilt, earned his DDS at the University of the Pacific, and completed pediatric training at UCLA. He is a diplomate of the American Board of Pediatric Dentistry and an assistant clinical professor in UCSD's Department of Pediatrics.",
      "He volunteers internationally through International Health Emissaries, providing dental care on medical missions abroad.",
    ],
    personal:
      "Off the clock you'll find him skateboarding, skiing, or at his sons' soccer games.",
    credentials:
      "Diplomate, American Board of Pediatric Dentistry. Assistant clinical professor, UCSD Pediatrics. Member of the ADA, CDA, AAPD, and CSPD.",
  },
  {
    name: "Jenna McDonald, DDS",
    role: "Pediatric dentist",
    img: "/images/dr-jenna-mcdonald.jpg",
    alt: "Dr. Jenna McDonald smiling outdoors",
    bio: [
      "A Point Loma High alumna, Dr. Jenna graduated with honors in biology from UC Davis and earned her DDS at UCLA, receiving the school's top honor for treatment of children. She completed her pediatric residency at USC as Outstanding Resident of the Year, training at Children's Hospital Los Angeles, CHOC, and Miller Children's.",
      "She is a diplomate of the American Board of Pediatric Dentistry and has volunteered on dental missions in Romania, Guatemala, Nicaragua, and Costa Rica.",
    ],
    personal:
      "She lives in San Diego with her husband Colin, three kids, and Bodey the golden retriever, who prefers Dog Beach.",
    credentials:
      "Diplomate, American Board of Pediatric Dentistry. Member of the ADA, CDA, AAPD, and CSPD.",
  },
  {
    name: "Tiffany Chan, DMD",
    role: "Pediatric dentist",
    img: "/images/dr-tiffany-chan.jpg",
    alt: "Dr. Tiffany Chan smiling outside the office",
    bio: [
      "Born and raised in Hong Kong and educated in England, Dr. Tiffany completed dental training at the University of Hong Kong before earning her DDS at UCLA. She finished her pediatric residency at USC and Miller Children's Hospital in Long Beach.",
      "She has volunteered providing oral health care for children in China and Vietnam.",
    ],
    personal:
      "Weekends are for hiking, trivia nights, and cheering on USC football with her husband.",
    credentials: "Member of the ADA, CDA, AAPD, and CSPD.",
  },
];

const orthodontists: Doctor[] = [
  {
    name: "Brenda Caillouel, DDS, MSD",
    role: "Orthodontist",
    img: "/images/dr-brenda-caillouel.jpg",
    alt: "Dr. Brenda Caillouel smiling in front of the office's cedar wall",
    bio: [
      "Dr. Brenda studied biology at UC San Diego and earned her dental degree at the University of the Pacific, where she received the Arthur A. Dugoni Excellence in Clinical Care Award along with multiple research honors.",
      "As our orthodontist, she guides growing smiles from early intervention through the day the braces come off.",
    ],
    personal:
      "A La Jolla local, she surfs, hikes, cooks, and travels with her husband and son.",
    credentials:
      "Member of the American Association of Orthodontists and the Pacific Coast Society of Orthodontists.",
  },
  {
    name: "Brittany Koncz, DMD",
    role: "Orthodontist",
    img: "/images/dr-brittany-koncz.png",
    alt: "Dr. Brittany Koncz smiling outdoors",
    bio: [
      "Valedictorian of her class at the University of Pittsburgh School of Dental Medicine, Dr. Brittany completed her specialty training in orthodontics and dentofacial orthopedics at the University of Rochester's Eastman Institute. She has more than ten years of orthodontic experience.",
      "She believes in individualized care and educating patients at every step, so they can be ecstatic about their final results.",
    ],
    personal:
      "She loves travel, day trips, good restaurants, and baking gourmet cupcakes.",
    credentials:
      "Member of the American Association of Orthodontists and the Pacific Coast Society of Orthodontists.",
  },
];

function DoctorRow({ doctor, flip }: { doctor: Doctor; flip: boolean }) {
  return (
    <article className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <Bezel className={flip ? "lg:rotate-1" : "lg:-rotate-1"}>
          <Image
            src={doctor.img}
            alt={doctor.alt}
            width={853}
            height={1280}
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </Bezel>
      </Reveal>
      <div className={flip ? "lg:order-1" : ""}>
        <h3 className="font-serif text-3xl">{doctor.name}</h3>
        <p className="mt-1 font-medium text-leaf-700">{doctor.role}</p>
        {doctor.bio.map((p) => (
          <p key={p.slice(0, 24)} className="mt-4 max-w-[62ch] text-bark-600">
            {p}
          </p>
        ))}
        <p className="mt-4 max-w-[62ch] text-bark-600">{doctor.personal}</p>
        <p className="mt-5 max-w-[62ch] border-t border-bark-900/10 pt-4 text-sm text-bark-600">
          {doctor.credentials}
        </p>
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageIntro
        title="The doctors your kids will ask to come back to"
        lede="Four board-certified pediatric dentists and two orthodontists, with training from UCLA, USC, UCSD, and beyond. Every one of them chose to spend their career with kids."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <Bezel>
            <Image
              src="/images/team-group-photo.png"
              alt="The full Kensington Pediatric Dentistry team gathered in front of a rustic wood cabin"
              width={1258}
              height={837}
              priority
              className="w-full object-cover"
            />
          </Bezel>
        </Reveal>
      </div>

      <section
        aria-labelledby="pediatric-heading"
        className="mx-auto max-w-[1200px] px-6 pt-28 md:px-10"
      >
        <h2 id="pediatric-heading" className="font-serif text-4xl">
          Pediatric dentists
        </h2>
        <div className="mt-14 space-y-24">
          {pediatricDentists.map((doc, i) => (
            <DoctorRow key={doc.name} doctor={doc} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <div className="flex justify-center pt-24">
        <BranchDivider />
      </div>

      <section
        aria-labelledby="ortho-heading"
        className="mx-auto max-w-[1200px] px-6 pt-20 md:px-10"
      >
        <h2 id="ortho-heading" className="font-serif text-4xl">
          Orthodontists
        </h2>
        <div className="mt-14 space-y-24">
          {orthodontists.map((doc, i) => (
            <DoctorRow key={doc.name} doctor={doc} flip={i % 2 === 0} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pt-28 md:px-10">
        <div className="rounded-[2rem] bg-leaf-100 px-8 py-14 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            Come meet them in person
          </h2>
          <div className="mt-7 flex justify-center">
            <PrimaryCta href={cta.href} label={cta.label} />
          </div>
        </div>
      </section>
    </>
  );
}
