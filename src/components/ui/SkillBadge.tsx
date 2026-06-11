"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  FlaskConical,
  TestTube,
  Smartphone,
  Terminal,
  FileJson,
  Cpu,
  Braces,
  Server,
  GitFork,
  Bug,
  Workflow,
  Eye,
  Box,
  Atom,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import type { Skill } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  appium: Smartphone,
  playwright: TestTube,
  selenium: FlaskConical,
  testng: Braces,
  maven: Box,
  xcuites: Smartphone,
  java: Code2,
  python: Terminal,
  javascript: FileJson,
  typescript: Braces,
  sql: Database,
  git: GitBranch,
  github: GitFork,
  charles: Eye,
  postman: Server,
  jira: Bug,
  mixpanel: Workflow,
  claude: Atom,
  cline: Cpu,
  mcps: Cloud,
  tensor: Cpu,
  default: Code2,
};

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  const Icon = iconMap[skill.icon] || iconMap.default;

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="glass glass-hover inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium text-zinc-300"
    >
      <Icon className="h-4 w-4 text-indigo-400" />
      {skill.name}
    </motion.span>
  );
}
