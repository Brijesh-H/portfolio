"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/data/skills";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all",
        "hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md",
        "dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
        "dark:hover:border-indigo-700 dark:hover:text-indigo-300",
      )}
    >
      <span className="flex h-5 w-5 items-center justify-center rounded bg-indigo-100 text-[10px] font-bold text-indigo-700 dark:bg-zinc-700 dark:text-zinc-300">
        {skill.icon.slice(0, 2).toUpperCase()}
      </span>
      {skill.name}
    </motion.span>
  );
}
