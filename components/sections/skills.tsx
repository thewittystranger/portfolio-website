"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/content";
import { Code, Wrench, Brain } from "lucide-react";

const iconMap: Record<string, typeof Code> = {
  Programming: Code,
  "Technologies / Frameworks / Dev Tools": Wrench,
  "Core Competencies": Brain,
};

export function SkillsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills Matrix
        </h2>
        <p className="mt-2 text-muted-foreground">
          A focused toolkit for building reliable, scalable systems.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((category, i) => {
          const Icon = iconMap[category.category] || Code;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/30 sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-card-foreground">
                {category.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
