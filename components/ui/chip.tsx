export function Chip({ children }: { children: string }) {
  return (
    <li className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium whitespace-nowrap text-muted-foreground sm:text-sm">
      {children}
    </li>
  );
}
