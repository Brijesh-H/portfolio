"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "border-b border-zinc-200/70",
        "bg-stone-50/90 backdrop-blur-xl",
        "dark:border-zinc-800/70 dark:bg-zinc-900/80",
      )}
    >
      <nav className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          className="text-lg font-bold text-zinc-900 dark:text-zinc-100"
        >
          Portfolio
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors active:scale-95",
                "text-zinc-600 hover:bg-indigo-50 hover:text-indigo-700",
                "dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg transition-colors active:scale-95",
                "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800",
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-stone-50 px-4 pb-6 pt-3 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block rounded-lg px-4 py-3 text-base font-medium transition-colors active:scale-[0.98]",
                "text-zinc-600 hover:bg-indigo-50 hover:text-indigo-700",
                "dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
