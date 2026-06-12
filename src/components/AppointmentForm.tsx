"use client";

import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-[0.75rem] border border-bark-900/15 bg-surface px-4 py-3 text-bark-900 placeholder:text-bark-600 focus:border-leaf-700 transition-colors duration-300";

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    if (!String(data.get("parentName") || "").trim())
      next.parentName = "Please tell us your name.";
    if (!String(data.get("childName") || "").trim())
      next.childName = "Please tell us your child's name.";
    const phone = String(data.get("phone") || "").trim();
    if (!/^[\d\s()+\-.]{7,}$/.test(phone))
      next.phone = "Please enter a phone number we can reach you at.";
    const email = String(data.get("email") || "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn't look right. Mind checking it?";
    return next;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-[2rem] bg-leaf-100 px-8 py-14 text-center"
      >
        <h3 className="font-serif text-3xl">Request received.</h3>
        <p className="mx-auto mt-4 max-w-[44ch] text-bark-600">
          Thank you. Our front desk will call you within one business day to
          find a time that works for your family.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 md:grid-cols-2">
      <div className="grid gap-2">
        <label htmlFor="parentName" className="font-medium">
          Your name
        </label>
        <input
          id="parentName"
          name="parentName"
          type="text"
          autoComplete="name"
          required
          className={inputClass}
          aria-invalid={!!errors.parentName}
          aria-describedby={errors.parentName ? "parentName-error" : undefined}
        />
        {errors.parentName && (
          <p id="parentName-error" className="text-sm font-medium text-error">
            {errors.parentName}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="childName" className="font-medium">
          Your child&rsquo;s name and age
        </label>
        <input
          id="childName"
          name="childName"
          type="text"
          required
          className={inputClass}
          aria-invalid={!!errors.childName}
          aria-describedby={errors.childName ? "childName-error" : undefined}
        />
        {errors.childName && (
          <p id="childName-error" className="text-sm font-medium text-error">
            {errors.childName}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="phone" className="font-medium">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className={`${inputClass} tnum`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-sm font-medium text-error">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="font-medium">
          Email <span className="font-normal text-bark-600">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm font-medium text-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="grid gap-2 md:col-span-2">
        <label htmlFor="notes" className="font-medium">
          Anything we should know?{" "}
          <span className="font-normal text-bark-600">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className={inputClass}
          placeholder="Nervous kiddo, insurance questions, preferred days, anything at all."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="font-medium text-error md:col-span-2">
          We couldn&rsquo;t send your request. Please try again, or call us at{" "}
          <a href={`tel:${site.phoneTel}`} className="tnum underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-leaf-700 py-2.5 pl-6 pr-2.5 font-medium text-bg shadow-warm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-leaf-800 active:scale-[0.98] disabled:cursor-default disabled:opacity-60"
        >
          <span>
            {status === "submitting" ? "Sending..." : "Send my request"}
          </span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1"
            aria-hidden="true"
          >
            <ArrowRight size={16} weight="bold" />
          </span>
        </button>
      </div>
    </form>
  );
}
