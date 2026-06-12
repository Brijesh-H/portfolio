"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "hobbies", label: "Hobbies" },
];

export function Navbar() {
  const activeId = useScrollSpy();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "h-14" : "h-16",
      )}
    >
      <div className="absolute inset-0 glass" />

      <nav className="relative mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-semibold text-slate-100"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
          </span>
          Portfolio
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "relative rounded-lg px-3 py-[11px] text-sm transition-colors duration-200",
                  activeId === id
                    ? "text-indigo-400"
                    : "text-slate-400 hover:text-slate-200",
                )}
              >
                {label}
                {activeId === id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass mx-4 mt-2 rounded-xl border border-slate-700/50 md:hidden"
          >
            <ul className="flex flex-col p-2">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-lg px-4 py-[11px] text-sm transition-colors",
                      activeId === id
                        ? "bg-indigo-500/10 text-indigo-400"
                        : "text-slate-400 hover:bg-slate-800 hover:text-slate-200",
                    )}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
