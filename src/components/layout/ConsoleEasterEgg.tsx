"use client";

import { useEffect } from "react";

const styles = {
  title: "font-size: 18px; font-weight: bold; color: #818cf8;",
  link: "font-size: 13px; color: #a1a1aa;",
  tech: "font-size: 12px; color: #71717a;",
  divider: "font-size: 11px; color: #3f3f46;",
};

export function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      "%c ┌─────────────────────────────────┐",
      styles.divider,
    );
    console.log(
      "%c │  🔍  Brijesh H - SDET Portfolio  │",
      styles.title,
    );
    console.log(
      "%c └─────────────────────────────────┘",
      styles.divider,
    );
    console.log(
      "%c📦 Built with Next.js + TypeScript + Tailwind + Framer Motion",
      styles.tech,
    );
    console.log(
      "%c🐛 Found a bug? github.com/Brijesh-H",
      styles.link,
    );
  }, []);

  return null;
}
