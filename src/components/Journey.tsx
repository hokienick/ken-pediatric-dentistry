"use client";

import { motion, useReducedMotion } from "motion/react";
import { PerchedBird } from "@/components/Motifs";

/* The signature section: the age journey along a branch.
   This is the page's one deliberate sequence (DESIGN.md). */

const stages = [
  {
    age: "Around age 1",
    title: "The first visit",
    body: "We like to meet your child by their first birthday. A gentle look, a knee-to-knee exam, and plenty of answers for you.",
  },
  {
    age: "Ages 2 to 11",
    title: "Growing up well",
    body: "Checkups, cleanings, sealants, and cavity prevention that keeps visits easy. Kids learn to like the dentist here.",
  },
  {
    age: "Tweens and teens",
    title: "Straightening out",
    body: "Our orthodontists handle braces, ceramic brackets, and Invisalign in the same office your child already knows.",
  },
  {
    age: "Age 18 and beyond",
    title: "Leaving the nest",
    body: "They head off with a healthy, confident smile, and we help them transition to the right adult dentist.",
  },
];

export function Journey() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="journey-heading" className="bg-leaf-800 py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="max-w-2xl">
          <h2
            id="journey-heading"
            className="font-serif text-4xl leading-tight text-bg md:text-5xl"
          >
            From first steps, till they{" "}
            <em className="italic leading-[1.1]">leave the nest.</em>
          </h2>
          <p className="mt-5 max-w-[55ch] text-lg text-bg/80">
            One practice for the whole journey. The doctors who saw your
            child&rsquo;s first tooth are the same ones who straighten their
            smile a decade later.
          </p>
        </div>

        {/* The branch */}
        <div className="relative mt-16 hidden lg:block" aria-hidden="true">
          <svg viewBox="0 0 1080 40" fill="none" className="w-full">
            <motion.path
              d="M0 24 C 180 16, 360 30, 540 22 C 720 14, 900 28, 1080 20"
              stroke="var(--leaf-500)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.6, ease: [0.32, 0.72, 0, 1] }}
            />
            {[60, 330, 600, 870].map((x, i) => (
              <motion.path
                key={x}
                d={`M${x} ${22 + (i % 2 ? 4 : -2)} q 8 -14 22 -16 q -12 9 -14 18 Z`}
                fill="var(--leaf-500)"
                initial={reduce ? { opacity: 0.8 } : { opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.3, duration: 0.5 }}
              />
            ))}
          </svg>
          <motion.div
            className="absolute -top-10 right-2"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <PerchedBird />
          </motion.div>
        </div>

        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-8">
          {stages.map((stage, i) => (
            <motion.li
              key={stage.title}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <p className="tnum font-medium text-leaf-100">{stage.age}</p>
              <h3 className="mt-2 font-serif text-2xl text-bg">{stage.title}</h3>
              <p className="mt-3 text-bg/80">{stage.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
