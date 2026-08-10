"use client";

import { motion } from "framer-motion";
import { profile, summary } from "@/lib/content";
import { MapPin, Mail, Phone, Download } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

const quickLinks = [
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  { icon: LinkedinIcon, label: "LinkedIn", href: profile.linkedin },
  { icon: GithubIcon, label: "GitHub", href: profile.github },
];

export function AboutSection() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {profile.name}
          </h2>
          <p className="mt-2 text-lg font-medium text-accent">{profile.role}</p>
          <p className="mt-2 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {profile.location} ·{" "}
            <a href={`tel:${profile.phone}`} className="hover:text-accent">
              {profile.phone}
            </a>
          </p>
        </div>
        <div className="shrink-0">
          <img
            src="/headshot.png"
            alt={`${profile.name} headshot`}
            className="h-28 w-28 rounded-full border-2 border-border object-cover shadow-lg shadow-accent/10 ring-2 ring-accent/10 sm:h-32 sm:w-32"
          />
        </div>
      </div>

      <div className="space-y-4 text-lg leading-8 text-muted-foreground">
        {summary.text.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {summary.highlights.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="rounded-2xl border border-border bg-card p-5 text-center transition-colors hover:border-accent/50"
          >
            <div className="text-2xl font-bold text-accent">{item.metric}</div>
            <div className="mt-1 text-xs font-medium text-muted-foreground">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="/Ankit_Kumar_Choudhary_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>
        {quickLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
