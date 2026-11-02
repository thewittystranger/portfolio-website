import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 border-t border-border py-16 sm:py-20 lg:scroll-mt-20"
    >
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {title}
        </h2>
        {intro && (
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">
            {intro}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
