import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Our commitment to an accessible website and office for every family.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageIntro title="Accessibility" />
      <section className="mx-auto max-w-[720px] px-6 pb-12 md:px-10">
        <div className="space-y-6 text-bark-600">
          <p>
            We want every family to be able to use this website. It is built
            to meet WCAG 2.2 AA standards: readable text sizes, strong color
            contrast, full keyboard navigation, visible focus indicators, and
            reduced-motion support for visitors who prefer it.
          </p>
          <p>
            If anything on this site is hard for you to use, or you need
            information in another format, please tell us. Call{" "}
            <a href={`tel:${site.phoneTel}`} className="tnum font-medium text-leaf-700 hover:underline">
              {site.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-leaf-700 hover:underline">
              {site.email}
            </a>{" "}
            and we&rsquo;ll make it right.
          </p>
          <p>
            Our office welcomes children with special healthcare needs. Let us
            know what would make the visit easier and we&rsquo;ll plan for it.
          </p>
        </div>
      </section>
    </>
  );
}
