"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid size-8 place-items-center border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
    >
      {mounted ? (
        isDark ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />
      ) : (
        <span className="size-3.5" />
      )}
    </button>
  );
}

export function SiteFrame() {
  return (
    <header className="fixed inset-x-0 top-0 z-[65] border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[88rem] items-center justify-between px-4 sm:px-8">
        {/* wordmark */}
        <a href="#top" className="flex items-baseline gap-2.5">
          <span className="mono text-xs font-medium tracking-[0.22em] text-foreground">
            TREVIN&nbsp;LEE
          </span>
          <span className="mono hidden text-[0.65rem] tracking-[0.2em] text-muted-foreground sm:inline">
            Physicist · Engineer
          </span>
        </a>

        {/* nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
