"use client";

import { useState } from "react";
import { Check, Copy, Download, Mail, Phone } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { profile, site } from "@/lib/content";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const links = [
    { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon, external: true },
    { label: "GitHub", href: profile.github, icon: GithubIcon, external: true },
    { label: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}`, icon: Phone, external: false },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-28 border-t border-border py-16 sm:py-20 lg:scroll-mt-20"
    >
      <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-card px-5 py-10 text-center sm:px-10 sm:py-14">
        <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contact</p>
          <h2
            id="contact-title"
            className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Hiring for AI evaluation or backend? Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {profile.openTo}. Based in {profile.location}, {profile.workLocations}.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${profile.email}`}
              className={`inline-flex min-w-0 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 ${focusRing}`}
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate">{profile.email}</span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className={`inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent ${focusRing}`}
            >
              {copied ? (
                <Check className="h-4 w-4 text-accent" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
              <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
            </button>
            <a
              href={site.resume}
              download
              className={`inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent ${focusRing}`}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            {links.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`inline-flex items-center gap-2 rounded-md text-muted-foreground transition-colors hover:text-accent ${focusRing}`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
