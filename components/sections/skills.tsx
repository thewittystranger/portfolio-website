import { Bot, Code, Server, Database } from "lucide-react";
import { skills } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";

const icons = [Bot, Code, Server, Database];

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Skills" title="Toolkit">
      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={group.category} delay={i === 0 ? 0 : (i - 1) * 0.06} className={i === 0 ? "md:col-span-3" : ""}>
              <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6">
                <h3 className="flex items-center gap-3 font-semibold text-card-foreground">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
