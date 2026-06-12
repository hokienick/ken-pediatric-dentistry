import { PrimaryCta } from "@/components/Buttons";
import { PerchedBird } from "@/components/Motifs";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[700px] flex-col items-center px-6 pb-32 pt-48 text-center">
      <PerchedBird className="h-16 w-24" />
      <h1 className="mt-6 font-serif text-4xl md:text-5xl">
        This page flew the nest
      </h1>
      <p className="mt-4 max-w-[40ch] text-bark-600">
        The page you&rsquo;re looking for isn&rsquo;t here anymore. The home
        page has everything you need.
      </p>
      <div className="mt-8">
        <PrimaryCta href="/" label="Back to home" />
      </div>
    </div>
  );
}
