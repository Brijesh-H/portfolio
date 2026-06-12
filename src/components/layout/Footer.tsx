"use client";

import { GitBranch, Globe, Mail, FileText } from "lucide-react";
import { socialLinks } from "@/data/social";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GitBranch,
  linkedin: Globe,
  mail: Mail,
  "file-text": FileText,
};

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-800/50 bg-slate-900/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 via-teal-400/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Brijesh H. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/30 text-slate-500 transition-all duration-200 hover:border-indigo-500/40 hover:bg-slate-700/50 hover:text-indigo-400 hover:glow-indigo"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
