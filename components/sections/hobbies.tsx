"use client";

import { motion } from "framer-motion";
import { hobbies } from "@/lib/content";
import {
  Guitar,
  Headphones,
  Music,
  Radio,
  BookOpen,
  Utensils,
  Feather,
} from "lucide-react";
import { SpotifyIcon, InstagramIcon } from "@/components/icons";

export function HobbiesSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Beyond the Code
        </h2>
        <p className="mt-2 text-muted-foreground">
          The creative outlets that keep me balanced, inspired, and endlessly curious.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Music card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-rose-500/30 sm:p-8"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl transition-all group-hover:bg-rose-500/20" />
          <div className="relative z-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500">
              <Guitar className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-card-foreground">
              {hobbies.music.title}
            </h3>
            <p className="mt-3 text-muted-foreground">
              {hobbies.music.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {hobbies.music.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={hobbies.music.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition-transform hover:-translate-y-0.5"
            >
              <InstagramIcon className="h-4 w-4" />
              {hobbies.music.linkLabel}
            </a>
          </div>
        </motion.div>

        {/* Retro audio card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-sky-500/30 sm:p-8"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl transition-all group-hover:bg-sky-500/20" />
          <div className="relative z-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500">
              <Headphones className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-card-foreground">
              {hobbies.audio.title}
            </h3>
            <p className="mt-3 text-muted-foreground">
              {hobbies.audio.description}
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-background p-5">
              <div className="flex items-center gap-3">
                <Radio className="h-5 w-5 text-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Now Playing
                </span>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Music className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Retro Legends</p>
                  <p className="text-sm text-muted-foreground">
                    {hobbies.audio.artists.join(" · ")}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-end gap-1">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-full rounded-full bg-accent/80"
                    animate={{
                      height: ["0.5rem", "1.5rem", "0.75rem", "1.25rem", "0.5rem"],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.08,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>

            <a
              href={hobbies.audio.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1DB954] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#1DB954]/20 transition-transform hover:-translate-y-0.5"
            >
              <SpotifyIcon className="h-4 w-4" />
              {hobbies.audio.linkLabel}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Other creative pursuits */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: Feather,
            title: "Urdu Poetry & Ghazals",
            description: "I write Urdu poetries and ghazals — weaving emotions into words and rhythm.",
            color: "amber",
          },
          {
            icon: BookOpen,
            title: "Avid Reader",
            description: "Books are my second home. I love getting lost in stories, ideas, and perspectives.",
            color: "violet",
          },
          {
            icon: Utensils,
            title: "Love to Cook",
            description: "Cooking is my meditation. Experimenting with flavours and sharing meals brings me joy.",
            color: "orange",
          },
        ].map((item, i) => {
          const colorClass =
            item.color === "amber"
              ? "bg-amber-500/10 text-amber-500"
              : item.color === "violet"
              ? "bg-violet-500/10 text-violet-500"
              : "bg-orange-500/10 text-orange-500";
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/30"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colorClass}`}>
                <item.icon className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-card-foreground">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
