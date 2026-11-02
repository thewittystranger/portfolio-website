import { BookOpen, Feather, Guitar, Headphones, Utensils } from "lucide-react";
import { SpotifyIcon, InstagramIcon } from "@/components/icons";
import { hobbies } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const extras = [
  { icon: Feather, label: "Urdu poetry & ghazals" },
  { icon: BookOpen, label: "Reading" },
  { icon: Utensils, label: "Cooking" },
];

const linkClass =
  "mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5 motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function HobbiesSection() {
  return (
    <Section id="beyond" eyebrow="Beyond code" title="Music, hi-fi and words">
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500">
              <Guitar className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-semibold text-card-foreground">{hobbies.music.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{hobbies.music.description}</p>
            <a
              href={hobbies.music.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} bg-rose-600 text-white`}
            >
              <InstagramIcon className="h-4 w-4" />
              {hobbies.music.linkLabel}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
              <Headphones className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-semibold text-card-foreground">{hobbies.audio.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{hobbies.audio.description}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">On repeat:</span>{" "}
              {hobbies.audio.artists.join(", ")}
            </p>
            <a
              href={hobbies.audio.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} bg-[#1DB954] text-black`}
            >
              <SpotifyIcon className="h-4 w-4" />
              {hobbies.audio.linkLabel}
            </a>
          </div>
        </Reveal>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2">
        {extras.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
          >
            <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </Section>
  );
}
