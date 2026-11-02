import { Bot, ShieldCheck, Server } from "lucide-react";
import { about } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const icons = [Bot, ShieldCheck, Server];

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="Production engineer turned agent evaluator">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div className="space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <ul className="grid gap-4">
          {about.focus.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={item.title}>
                <Reveal delay={i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
