"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Experience } from "@/data/experience";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-7 sm:pl-8 pb-10 sm:pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-1 flex flex-col items-center">
        <div className="h-3 w-3 rounded-full border-2 border-indigo-500 bg-white dark:bg-zinc-900" />
        {index > 0 && (
          <div className="absolute -top-12 h-12 w-px bg-zinc-200 dark:bg-zinc-700" />
        )}
        <div className="absolute top-3 h-full w-px bg-zinc-200 dark:bg-zinc-700" />
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {experience.period}
        </span>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {experience.role}
        </h3>
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {experience.company}
        </p>
        <p className="text-sm text-zinc-700 dark:text-zinc-400">
          {experience.description}
        </p>
        <ul className="space-y-1.5 pt-1">
          {experience.highlights.map((highlight, i) => (
            <li
              key={i}
              className={cn(
                "flex items-start gap-2 text-sm text-zinc-700",
                "dark:text-zinc-400",
              )}
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
