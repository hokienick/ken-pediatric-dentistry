"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, cta, site } from "@/lib/site";
import { ArrowRight, Phone } from "@phosphor-icons/react";

const ease = "transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu on route change (derive-state-during-render pattern)
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const linkClass = (href: string) =>
    `min-h-11 inline-flex items-center px-1 font-medium ${ease} ${
      pathname === href
        ? "text-leaf-700 underline decoration-2 underline-offset-8"
        : "text-bark-900 hover:text-leaf-700"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-20 px-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-surface focus:px-5 focus:py-2.5"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main"
        className="mx-auto mt-4 flex h-[68px] max-w-[1100px] items-center justify-between rounded-full bg-bg/85 pl-5 pr-2.5 ring-1 ring-bark-900/8 backdrop-blur-md"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Kensington Pediatric Dentistry, home"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={104}
            height={54}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className={`tnum inline-flex min-h-11 items-center gap-2 rounded-full px-4 font-medium text-bark-900 hover:text-leaf-700 ${ease}`}
          >
            <Phone size={18} aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Link
            href={cta.href}
            className={`group inline-flex items-center gap-2.5 rounded-full bg-leaf-700 py-2 pl-5 pr-2 font-medium text-bg hover:bg-leaf-800 active:scale-[0.98] ${ease}`}
          >
            {cta.label}
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full bg-white/20 group-hover:translate-x-0.5 ${ease}`}
              aria-hidden="true"
            >
              <ArrowRight size={14} weight="bold" />
            </span>
          </Link>
        </div>

        {/* Mobile hamburger, morphs to X */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative flex h-11 w-11 items-center justify-center rounded-full lg:hidden cursor-pointer"
        >
          <span
            className={`absolute h-[2px] w-6 rounded-full bg-bark-900 ${ease} ${
              open ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 rounded-full bg-bark-900 ${ease} ${
              open ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[-1] flex flex-col justify-between bg-bg/95 px-8 pb-10 pt-32 backdrop-blur-3xl lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        } ${ease}`}
      >
        <div className="flex flex-col gap-2">
          {[{ label: "Home", href: "/" }, ...nav].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-serif text-4xl text-bark-900 py-2 ${ease} ${
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } ${pathname === item.href ? "text-leaf-700" : ""}`}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div
          className={`flex flex-col gap-4 ${ease} ${
            open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: open ? "420ms" : "0ms" }}
        >
          <a
            href={`tel:${site.phoneTel}`}
            className="tnum inline-flex items-center gap-2.5 font-medium text-bark-900"
          >
            <Phone size={20} aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center rounded-full bg-leaf-700 px-6 py-3.5 text-center font-medium text-bg"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
