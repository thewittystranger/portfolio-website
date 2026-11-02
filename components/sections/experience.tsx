import { Briefcase, Coffee } from "lucide-react";
import { experiences } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've built and shipped"
      intro="Evaluation work for frontier coding agents, on top of three years of production backend engineering."
    >
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {experiences.map((exp, i) => {
          const isBreak = exp.kind === "break";
          const Icon = isBreak ? Coffee : Briefcase;
          return (
            <li key={`${exp.org}-${exp.period}`} className="relative">
              <span
                aria-hidden="true"
                className={`absolute top-6 -left-[37px] flex h-6 w-6 items-center justify-center rounded-full border sm:-left-[45px] ${
                  isBreak
                    ? "border-border bg-background text-muted-foreground"
                    : "border-accent/40 bg-background text-accent"
                }`}
              >
                <Icon className="h-3 w-3" />
              </span>

              <Reveal delay={Math.min(i, 3) * 0.05}>
                <article
                  className={`rounded-2xl border p-5 sm:p-7 ${
                    isBreak ? "border-dashed border-border bg-transparent" : "border-border bg-card"
                  }`}
                >
                  <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground sm:text-xl">{exp.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-muted-foreground sm:text-base">
                        <span className={isBreak ? "" : "text-foreground"}>{exp.org}</span>
                        {exp.type && <> · {exp.type}</>}
                        {exp.location && <> · {exp.location}</>}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm font-medium text-muted-foreground sm:pt-1">
                      {exp.period}
                    </p>
                  </header>

                  <ul className="mt-4 space-y-2.5 text-sm leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">
                    {exp.highlights.map((item) => (
                      <li key={item.text} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                        <span>
                          {item.label && (
                            <span className="font-semibold text-foreground">{item.label}: </span>
                          )}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {exp.tech && (
                    <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
