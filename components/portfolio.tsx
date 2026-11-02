import { MotionProvider } from "@/components/motion-provider";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { EducationSection } from "@/components/sections/education";
import { HobbiesSection } from "@/components/sections/hobbies";
import { ContactSection } from "@/components/sections/contact";
import { profile } from "@/lib/content";

export function Portfolio() {
  return (
    <MotionProvider>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
          <Hero />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <HobbiesSection />
          <ContactSection />
        </main>
        <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </div>
    </MotionProvider>
  );
}
