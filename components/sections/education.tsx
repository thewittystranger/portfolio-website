"use client";

import { motion } from "framer-motion";
import { education, achievements } from "@/lib/content";
import { GraduationCap, Trophy, Award, Medal, Sparkles } from "lucide-react";

const achievementIcons = [Award, Medal, Sparkles, Trophy, Award];

export function EducationSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Education & Achievements
        </h2>
        <p className="mt-2 text-muted-foreground">
          Academic foundation and standout milestones.
        </p>
      </div>

      <section>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Education
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-card-foreground">
                {education.degree}
              </h4>
              <p className="mt-1 text-lg font-semibold text-foreground">
                {education.school}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-muted px-3 py-1">
                  {education.duration}
                </span>
                <span className="rounded-full bg-muted px-3 py-1">
                  {education.location}
                </span>
                <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
                  CGPA {education.cgpa}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Key Achievements
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((achievement, i) => {
            const Icon = achievementIcons[i % achievementIcons.length];
            return (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-6 text-card-foreground">
                    {achievement}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
