"use client";

import { cn } from "@/lib/utils";
import { BarChart3, Brain, Cloud, Coffee, Container, Database, FileCode, FileText, Flame, Gauge, GitBranch, GitCompareArrows, Layers, LayoutDashboard, Link2, Monitor, Play, Server, Settings2, Sigma, Smartphone, Terminal, TestTube, Zap } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "play": Play,
  "layout-dashboard": LayoutDashboard,
  "smartphone": Smartphone,
  "terminal": Terminal,
  "gauge": Gauge,
  "file-code": FileCode,
  "file-text": FileText,
  "coffee": Coffee,
  "server": Server,
  "layers": Layers,
  "container": Container,
  "github": GitBranch,
  "cloud": Cloud,
  "flame": Flame,
  "bar-chart-3": BarChart3,
  "sigma": Sigma,
  "zap": Zap,
  "link-2": Link2,
  "database": Database,
  "test-tube": TestTube,
  "code-2": Monitor,
  "settings-2": Settings2,
  "brain": Brain,
  "pipe": GitCompareArrows,
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
