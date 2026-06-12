/* Double-Bezel frame: every photo/feature card sits in a nested frame,
   like a framed family picture (DESIGN.md). */
export function Bezel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2rem] bg-bark-900/5 p-1.5 ring-1 ring-bark-900/5 shadow-warm ${className}`}
    >
      <div className="overflow-hidden rounded-[calc(2rem-0.375rem)] bg-surface shadow-[inset_0_1px_1px_rgb(255_255_255/0.4)]">
        {children}
      </div>
    </div>
  );
}
