import Image from "next/image";
import { Download, Mail, MapPin } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { metrics, profile, site } from "@/lib/content";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative pt-10 pb-16 sm:pt-16 sm:pb-20">
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute inset-x-0 -top-16 -z-10 h-[420px]"
      />

      <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-2xl">
          <p className="inline-flex items-start gap-2 rounded-2xl border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs leading-5 font-medium text-accent sm:rounded-full sm:text-sm">
            <span className="relative mt-1.5 flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.openTo}
          </p>

          <h1
            id="hero-title"
            className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-semibold text-foreground sm:text-2xl">
            {profile.headline}
            <span className="block text-base font-medium text-muted-foreground sm:text-lg">
              {profile.subheadline}
            </span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {profile.valueProp}
          </p>

          <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              {profile.location} · {profile.workLocations}
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.resume}
              download
              className={`inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5 motion-reduce:transform-none ${focusRing}`}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent ${focusRing}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent ${focusRing}`}
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent ${focusRing}`}
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Previously at{" "}
            {profile.previously.map((company, i) => (
              <span key={company}>
                <span className="font-semibold text-foreground">{company}</span>
                {i < profile.previously.length - 1 && " and "}
              </span>
            ))}
          </p>
        </div>

        <div className="shrink-0">
          <Image
            src="headshot.webp"
            alt={`Portrait of ${profile.name}`}
            width={224}
            height={224}
            priority
            className="h-24 w-24 rounded-full border-2 border-border object-cover shadow-xl shadow-accent/10 ring-4 ring-accent/10 sm:h-32 sm:w-32 lg:h-56 lg:w-56"
          />
        </div>
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col-reverse rounded-2xl border border-border bg-card p-4 sm:p-5"
          >
            <dt className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
              {metric.label}
            </dt>
            <dd className="text-2xl font-bold tracking-tight text-accent sm:text-3xl">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
