"use client";

import { cn } from "@/lib/utils";
import { Cloud, Container, Database, FileCode, FileText, GitBranch, Play, Server, Smartphone, Terminal } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "play": Play,
  "smartphone": Smartphone,
  "terminal": Terminal,
  "file-code": FileCode,
  "file-text": FileText,
  "server": Server,
  "container": Container,
  "github": GitBranch,
  "cloud": Cloud,
  "database": Database,
};

interface SkillBadgeProps {
  name: string;
  icon: string;
  className?: string;
}

export function SkillBadge({ name, icon, className }: SkillBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <div
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-md border border-slate-800/60 bg-slate-800/30 px-2.5 py-1 text-xs text-slate-300 transition-all duration-200 hover:border-indigo-500/40 hover:bg-slate-700/50 hover:text-slate-100",
        className,
      )}
    >
      {Icon && <Icon className="h-3 w-3 text-indigo-400" />}
      <span>{name}</span>
    </div>
  );
}
