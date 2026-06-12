import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const ease = "transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]";

export function PrimaryCta({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full bg-leaf-700 py-2.5 pl-6 pr-2.5 font-medium text-bg shadow-warm hover:bg-leaf-800 active:scale-[0.98] cursor-pointer ${ease} ${className}`}
    >
      <span>{label}</span>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/20 group-hover:translate-x-1 ${ease}`}
        aria-hidden="true"
      >
        <ArrowRight size={16} weight="bold" />
      </span>
    </Link>
  );
}

export function SecondaryCta({
  href,
  label,
  icon,
  external = false,
  className = "",
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-11 items-center gap-2.5 rounded-full border-[1.5px] border-bark-900/15 px-6 py-2.5 font-medium text-bark-900 hover:bg-bark-900/5 active:scale-[0.98] cursor-pointer ${ease} ${className}`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
