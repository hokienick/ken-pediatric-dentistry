import Link from "next/link";
import { nav, site, cta } from "@/lib/site";
import { Nest } from "@/components/Motifs";
import {
  Phone,
  ChatCircleText,
  MapPin,
  FacebookLogo,
} from "@phosphor-icons/react/dist/ssr";

const ease = "transition-colors duration-300";

export function Footer() {
  return (
    <footer className="mt-32 bg-leaf-800 text-bg">
      <div className="mx-auto max-w-[1200px] px-6 pb-12 pt-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* The nest */}
          <div className="max-w-sm">
            <Nest className="mb-5" />
            <p className="font-serif text-2xl leading-snug">{site.tagline}</p>
            <p className="mt-4 text-bg/75">
              Pediatric dentistry and orthodontics for San Diego families, in
              the heart of Kensington.
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kensington Pediatric Dentistry on Facebook"
              className={`mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 ${ease}`}
            >
              <FacebookLogo size={22} aria-hidden="true" />
            </a>
          </div>

          {/* Visit */}
          <div>
            <h2 className="font-sans text-sm font-medium uppercase tracking-[0.12em] text-bg/70">
              Visit us
            </h2>
            <address className="mt-4 not-italic">
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex gap-2.5 hover:text-white ${ease}`}
              >
                <MapPin size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </a>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={`tel:${site.phoneTel}`}
                  className={`tnum inline-flex items-center gap-2.5 hover:text-white ${ease}`}
                >
                  <Phone size={20} aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={`sms:${site.phoneTel}`}
                  className={`inline-flex items-center gap-2.5 hover:text-white ${ease}`}
                >
                  <ChatCircleText size={20} aria-hidden="true" />
                  Text us anytime
                </a>
              </div>
            </address>
            <dl className="tnum mt-5 space-y-1 text-bg/85">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt className="whitespace-nowrap">{h.days}</dt>
                  <dd className="whitespace-nowrap">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Explore */}
          <div>
            <h2 className="font-sans text-sm font-medium uppercase tracking-[0.12em] text-bg/70">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {[{ label: "Home", href: "/" }, ...nav].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`hover:text-white ${ease}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-white ${ease}`}
                >
                  Patient portal
                </a>
              </li>
              <li>
                <a
                  href={site.sisterLocation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-white ${ease}`}
                >
                  Our second location
                </a>
              </li>
            </ul>
            <Link
              href={cta.href}
              className={`mt-6 inline-flex items-center rounded-full bg-bg px-6 py-3 font-medium text-leaf-800 hover:bg-white active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]`}
            >
              {cta.label}
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-bg/65 md:flex-row md:items-center md:justify-between">
          <p>
            {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className={`hover:text-white ${ease}`}>
              Privacy policy
            </Link>
            <Link href="/accessibility" className={`hover:text-white ${ease}`}>
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
