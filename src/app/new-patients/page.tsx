import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { AppointmentForm } from "@/components/AppointmentForm";
import { site } from "@/lib/site";
import {
  FilePdf,
  Phone,
  ChatCircleText,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "New Patients",
  description:
    "Request an appointment at Kensington Pediatric Dentistry, see what the first visit looks like, and download new patient forms.",
};

const forms = [
  {
    label: "Health history",
    file: "/forms/kpd-health-history.pdf",
    note: "Your child's medical and dental background.",
  },
  {
    label: "Consent form",
    file: "/forms/kpd-consent-form.pdf",
    note: "Permission for examination and treatment.",
  },
  {
    label: "HIPAA form",
    file: "/forms/kpd-hipaa-form.pdf",
    note: "How we protect your family's health information.",
  },
  {
    label: "Office policy",
    file: "/forms/kpd-office-policy.pdf",
    note: "Scheduling, payment, and appointment policies.",
  },
];

const faqs = [
  {
    q: "When should my child first see a dentist?",
    a: "By their first birthday, or within six months of the first tooth appearing. Early visits are quick, gentle, and mostly about getting comfortable and answering your questions.",
  },
  {
    q: "What happens at the first visit?",
    a: "A gentle exam, a cleaning if your child is ready for one, and a lot of conversation with you. For toddlers we often do a knee-to-knee exam, with your child resting in your lap the whole time.",
  },
  {
    q: "Can I stay with my child?",
    a: "Yes, always. Parents are part of the visit at our office, not visitors.",
  },
  {
    q: "What if my child is anxious or has special needs?",
    a: "Tell us in the form below. We'll schedule extra time, go at their pace, and talk through calming options, from simple patience to nitrous oxide, before the visit.",
  },
  {
    q: "Do you take our insurance?",
    a: "We work with many PPO plans and will verify your benefits before the first visit. Call the front desk with your plan details and we'll check for you, no appointment needed.",
  },
  {
    q: "Is sedation safe?",
    a: "Safety is the whole protocol. Lighter options like nitrous oxide wear off in minutes. Deep sedation, when truly needed, is administered and monitored start-to-finish by a dedicated dental anesthesiologist.",
  },
];

export default function NewPatientsPage() {
  return (
    <>
      <PageIntro
        title="Joining the nest is the easy part"
        lede="Request a time below and our front desk will call you back. Forms and first-visit answers are right here when you need them."
      />

      {/* Request form */}
      <section
        id="request"
        aria-labelledby="request-heading"
        className="mx-auto max-w-[1200px] scroll-mt-28 px-6 md:px-10"
      >
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 id="request-heading" className="font-serif text-3xl md:text-4xl">
              Request an appointment
            </h2>
            <p className="mt-4 max-w-[48ch] text-bark-600">
              Tell us a little about your child and we&rsquo;ll call you within
              one business day. Prefer to talk to a person right away?
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`tel:${site.phoneTel}`}
                className="tnum inline-flex items-center gap-2.5 font-medium text-leaf-700 hover:underline"
              >
                <Phone size={20} aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <a
                href={`sms:${site.phoneTel}`}
                className="inline-flex items-center gap-2.5 font-medium text-leaf-700 hover:underline"
              >
                <ChatCircleText size={20} aria-hidden="true" />
                Text us instead
              </a>
            </div>
          </div>
          <AppointmentForm />
        </div>
      </section>

      {/* Forms */}
      <section aria-labelledby="forms-heading" className="mt-28 bg-band/60 py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 id="forms-heading" className="font-serif text-3xl md:text-4xl">
            New patient forms
          </h2>
          <p className="mt-4 max-w-[58ch] text-bark-600">
            Filling these out ahead of time makes the first visit shorter.
            Print, complete, and either bring them along or email them to{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-leaf-700 hover:underline"
            >
              {site.email}
            </a>
            .
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {forms.map((f) => (
              <li key={f.file}>
                <a
                  href={f.file}
                  download
                  className="group flex items-start gap-4 rounded-[1.25rem] bg-surface p-5 ring-1 ring-bark-900/8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-leaf-700/40 hover:shadow-warm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                    <FilePdf size={22} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="font-medium text-bark-900 group-hover:text-leaf-700 transition-colors duration-300">
                      {f.label} (PDF)
                    </span>
                    <span className="mt-0.5 block text-sm text-bark-600">
                      {f.note}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section
        aria-labelledby="faq-heading"
        className="mx-auto max-w-[1200px] px-6 py-28 md:px-10"
      >
        <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl">
          The questions parents ask us most
        </h2>
        <dl className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-t border-bark-900/10 pt-6">
              <dt className="font-serif text-xl">{faq.q}</dt>
              <dd className="mt-2 max-w-[58ch] text-bark-600">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
