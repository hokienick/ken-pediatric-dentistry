export function PageIntro({
  title,
  lede,
}: {
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-40 md:px-10">
      <h1 className="max-w-[18ch] font-serif text-[clamp(2.25rem,3.5vw+1rem,3.5rem)] font-medium leading-[1.08]">
        {title}
      </h1>
      {lede && (
        <p className="mt-6 max-w-[52ch] text-lg text-bark-600">{lede}</p>
      )}
    </div>
  );
}
