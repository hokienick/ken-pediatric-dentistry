/* The nest thread (DESIGN.md): sparse hand-feeling line work in leaf-500.
   Hard cap: one motif moment per screen. */

export function BranchDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      className={`h-6 w-60 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 14 C 60 10, 180 10, 236 13"
        stroke="var(--leaf-500)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M70 12 q 4 -8 12 -9 q -7 5 -8 10 Z"
        fill="var(--leaf-500)"
        opacity="0.7"
      />
      <path
        d="M150 11 q 5 -7 13 -7 q -8 4 -9 9 Z"
        fill="var(--leaf-500)"
        opacity="0.5"
      />
      <path
        d="M110 12 q -4 -8 -12 -9 q 7 5 8 10 Z"
        fill="var(--leaf-500)"
        opacity="0.6"
      />
    </svg>
  );
}

export function PerchedBird({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 48"
      className={`h-12 w-16 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      {/* branch */}
      <path
        d="M2 40 C 20 38, 44 38, 62 40"
        stroke="var(--leaf-500)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M46 39 q 4 -6 10 -7 q -6 4 -7 8 Z"
        fill="var(--leaf-500)"
        opacity="0.6"
      />
      {/* bird body */}
      <path
        d="M22 38 C 18 32, 20 22, 28 20 C 36 18, 42 24, 41 30 C 40.5 34, 37 37.5, 31 38 Z"
        fill="var(--robin)"
      />
      {/* wing */}
      <path
        d="M27 27 C 31 24, 36 25, 38 28 C 35 30, 30 30, 27 27 Z"
        fill="var(--bark-900)"
        opacity="0.15"
      />
      {/* head + beak + eye */}
      <circle cx="38" cy="22" r="5.5" fill="var(--robin)" />
      <path d="M43 21.5 l 5 1 l -5 2 Z" fill="var(--bark-600)" />
      <circle cx="39.5" cy="21" r="0.9" fill="var(--bark-900)" />
      {/* tail */}
      <path d="M22 30 L 13 25 L 15 31 Z" fill="var(--robin)" opacity="0.85" />
    </svg>
  );
}

export function Nest({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 48"
      className={`h-12 w-20 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      {/* egg / chick */}
      <ellipse cx="40" cy="22" rx="9" ry="11" fill="var(--band)" />
      <circle cx="40" cy="16" r="4.5" fill="var(--finch)" />
      <path d="M44 15.5 l 4 1 l -4 1.6 Z" fill="var(--bark-600)" />
      <circle cx="41.2" cy="15" r="0.8" fill="var(--bark-900)" />
      {/* nest weave */}
      <path
        d="M16 26 C 24 22, 56 22, 64 26 C 62 38, 52 44, 40 44 C 28 44, 18 38, 16 26 Z"
        fill="var(--bark-600)"
        opacity="0.85"
      />
      <path
        d="M18 28 C 30 24, 50 24, 62 28"
        stroke="var(--bark-900)"
        strokeWidth="1.2"
        opacity="0.4"
      />
      <path
        d="M20 33 C 32 29, 48 29, 60 33"
        stroke="var(--bark-900)"
        strokeWidth="1.2"
        opacity="0.3"
      />
      <path
        d="M24 38 C 34 34, 46 34, 56 38"
        stroke="var(--bark-900)"
        strokeWidth="1.2"
        opacity="0.25"
      />
    </svg>
  );
}
