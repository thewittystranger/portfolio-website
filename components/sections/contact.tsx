"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/content";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { useState } from "react";

const links = [
  {
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: profile.github,
    href: profile.github,
    icon: GithubIcon,
  },
];

export function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-2 text-muted-foreground">
          Open to opportunities, collaborations, and great engineering
          conversations.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email
              </p>
              <p className="truncate text-sm font-medium text-foreground">
                {profile.email}
              </p>
            </div>
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Phone className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Phone
              </p>
              <p className="truncate text-sm font-medium text-foreground">
                {profile.phone}
              </p>
            </div>
          </a>

          <div className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent sm:col-span-2">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Location
              </p>
              <p className="truncate text-sm font-medium text-foreground">
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-4">
        {links.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent hover:bg-card/80"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                <link.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {link.label}
                </p>
                <p className="text-sm text-muted-foreground">{link.value}</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                copy(link.value, link.label);
              }}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
              aria-label={`Copy ${link.label}`}
            >
              {copied === link.label ? (
                <Check className="h-4 w-4 text-accent" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
