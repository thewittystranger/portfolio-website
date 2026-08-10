"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export function SectionCard({
  icon: Icon,
  title,
  subtitle,
  isActive,
  onClick,
  index,
}: SectionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 sm:p-8 ${
        isActive
          ? "border-accent bg-accent/10 shadow-[0_0_40px_-12px_rgba(52,211,153,0.35)]"
          : "border-border bg-card hover:border-accent/40 hover:bg-card/80 hover:shadow-lg"
      }`}
    >
      <div className="relative z-10 flex items-start gap-5">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${
            isActive
              ? "bg-accent text-accent-foreground"
              : "bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h3
            className={`text-lg font-bold transition-colors ${
              isActive ? "text-accent" : "text-card-foreground"
            }`}
          >
            {title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>

      {isActive && (
        <motion.div
          layoutId="active-glow"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 via-transparent to-transparent"
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}
