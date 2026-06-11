"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["about", "skills", "projects", "experience", "contact"];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds, 80);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50"
          : "bg-transparent",
      )}
    >
      <nav
        className={cn(
          "mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 transition-all duration-300",
          scrolled ? "h-14" : "h-16",
        )}
      >
        <a href="#" className="text-lg font-bold text-gradient">
          Portfolio
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                "text-zinc-400 hover:text-zinc-100",
                activeId === link.href.slice(1) && "text-zinc-100",
              )}
            >
              {link.label}
              {activeId === link.href.slice(1) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-indigo-500" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg transition-colors active:scale-95",
              "text-zinc-400 hover:bg-zinc-800",
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-4 pb-6 pt-3 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100",
                activeId === link.href.slice(1) && "text-indigo-400",
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
