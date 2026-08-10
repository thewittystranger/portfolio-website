"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/content";
import { Building2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <p className="mt-2 text-muted-foreground">
          A track record of building resilient, high-throughput backend systems.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/30 sm:p-8"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.role}
                  </p>
                </div>
              </div>
              <div className="mt-2 text-right sm:mt-0">
                <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {exp.duration}
                </span>
                <p className="mt-1 text-xs text-muted-foreground">
                  {exp.location}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {exp.projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <h4 className="text-base font-bold text-foreground">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
