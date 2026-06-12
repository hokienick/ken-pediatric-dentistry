import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Kensington Pediatric Dentistry handles your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro title="Privacy policy" />
      <section className="mx-auto max-w-[720px] px-6 pb-12 md:px-10">
        <div className="space-y-6 text-bark-600">
          <p>
            Kensington Pediatric Dentistry and Orthodontics respects your
            family&rsquo;s privacy. This website collects only the information
            you choose to send us through the appointment request form: your
            name, your child&rsquo;s name and age, your phone number, and
            optionally your email and notes.
          </p>
          <p>
            We use that information for one purpose: contacting you to
            schedule care. We do not sell it, share it with advertisers, or
            use it for marketing lists.
          </p>
          <p>
            Your child&rsquo;s health information is protected under HIPAA.
            Our full Notice of Privacy Practices is available in our{" "}
            <a
              href="/forms/kpd-hipaa-form.pdf"
              className="font-medium text-leaf-700 hover:underline"
            >
              HIPAA form (PDF)
            </a>{" "}
            and at the front desk.
          </p>
          <p>
            Questions? Call us at{" "}
            <a href={`tel:${site.phoneTel}`} className="tnum font-medium text-leaf-700 hover:underline">
              {site.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-leaf-700 hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
