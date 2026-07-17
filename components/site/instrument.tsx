import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Minimal, monochrome editorial primitives shared across sections.   */
/* Purely presentational — safe in server components.                 */
/* ------------------------------------------------------------------ */

/** Mono mini-label, e.g. an eyebrow above a heading. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mono inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Numbered section marker: `01 — About ──────────── annotation`. */
export function SectionMarker({
  index,
  label,
  annotation,
}: {
  index: string;
  label: string;
  annotation?: string;
}) {
  return (
    <div className="mono flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
      <span className="text-foreground/80">{index}</span>
      <span className="text-muted-foreground/60">—</span>
      <span className="text-foreground/80">{label}</span>
      <span className="h-px flex-1 bg-border" />
      {annotation ? <span className="hidden sm:inline">{annotation}</span> : null}
    </div>
  );
}
