import { GraduationCap, Trophy } from "lucide-react";
import { education, recognition } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function EducationSection() {
  return (
    <Section id="education" eyebrow="Education & recognition" title="Foundations">
      <div className="grid gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-1">
          <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-semibold text-card-foreground">{education.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{education.school}</p>
            <p className="mt-3 text-sm font-medium text-muted-foreground">{education.period}</p>
          </div>
        </Reveal>
        {recognition.map((item, i) => (
          <Reveal key={item.title} delay={(i + 1) * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Trophy className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
