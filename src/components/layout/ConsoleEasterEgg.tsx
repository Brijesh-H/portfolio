"use client";

import { useEffect } from "react";

export function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      "%c🔍 Portfolio v2%c Built with Next.js 16 + Framer Motion + Tailwind v4",
      "color:#818cf8;font-size:16px;font-weight:bold",
      "color:#94a3b8;font-size:12px",
    );
    console.log(
      "%c  Brijesh H — SDET %c  ",
      "background:#4338ca;color:#e0e7ff;padding:4px 8px;border-radius:4px 0 0 4px;font-weight:bold",
      "background:#0d9488;color:#ccfbf1;padding:4px 8px;border-radius:0 4px 4px 0",
    );
  }, []);

  return null;
}
