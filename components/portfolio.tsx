"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { SectionCard } from "@/components/section-card";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { EducationSection } from "@/components/sections/education";
import { HobbiesSection } from "@/components/sections/hobbies";
import { ContactSection } from "@/components/sections/contact";
import { profile } from "@/lib/content";
import {
  User,
  Briefcase,
  Wrench,
  GraduationCap,
  Music,
  Mail,
} from "lucide-react";

const sections = [
  {
    id: "about",
    title: "About",
    shortTitle: "About",
    subtitle: "Summary, impact metrics & quick links",
    icon: User,
    component: AboutSection,
  },
  {
    id: "experience",
    title: "Experience",
    shortTitle: "Experience",
    subtitle: "Spinny & Goldman Sachs roles",
    icon: Briefcase,
    component: ExperienceSection,
  },
  {
    id: "skills",
    title: "Skills",
    shortTitle: "Skills",
    subtitle: "Languages, frameworks & competencies",
    icon: Wrench,
    component: SkillsSection,
  },
  {
    id: "education",
    title: "Education",
    shortTitle: "Education",
    subtitle: "Degree, achievements & milestones",
    icon: GraduationCap,
    component: EducationSection,
  },
  {
    id: "hobbies",
    title: "Beyond the Code",
    shortTitle: "Beyond",
    subtitle: "Music, guitar, retro & hi-fi audio",
    icon: Music,
    component: HobbiesSection,
  },
  {
    id: "contact",
    title: "Contact",
    shortTitle: "Contact",
    subtitle: "Email, phone & social links",
    icon: Mail,
    component: ContactSection,
  },
];

export function Portfolio() {
  const [activeId, setActiveId] = useState("about");
  const activeSection = sections.find((s) => s.id === activeId)!;
  const ActiveComponent = activeSection.component;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="text-lg font-bold tracking-tight">
            Ankit<span className="text-accent">.</span>
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto mt-16 flex w-full max-w-7xl flex-1 flex-col gap-6 p-4 sm:p-6 lg:flex-row lg:gap-8 lg:p-8">
        {/* Mobile / tablet horizontal navigation */}
        <nav className="sticky top-16 z-30 -mx-4 border-b border-border bg-background/95 px-4 py-3 backdrop-blur-sm lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveId(section.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-accent"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="whitespace-nowrap">{section.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Left sidebar navigation — desktop only */}
        <aside className="hidden lg:sticky lg:top-24 lg:block lg:h-fit lg:w-[380px] lg:shrink-0">
          <div className="flex flex-col gap-4">
            {sections.map((section, index) => (
              <SectionCard
                key={section.id}
                icon={section.icon}
                title={section.title}
                subtitle={section.subtitle}
                isActive={activeId === section.id}
                onClick={() => setActiveId(section.id)}
                index={index}
              />
            ))}
          </div>
        </aside>

        {/* Main content panel */}
        <section className="relative min-h-[60vh] flex-1 rounded-2xl border border-border bg-card/50 p-5 shadow-2xl backdrop-blur-sm sm:rounded-3xl sm:p-8 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js,
        Tailwind CSS & Framer Motion.
      </footer>
    </div>
  );
}
