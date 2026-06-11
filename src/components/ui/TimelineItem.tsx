"use client";

import { motion } from "framer-motion";
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
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="relative pl-8 sm:pl-10 pb-10 sm:pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-1 flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 glow-indigo" />
        <div className="absolute top-3 h-full w-px bg-gradient-to-b from-indigo-500/50 to-transparent" />
      </div>
      <div className="space-y-2">
        <span className="text-xs font-medium text-indigo-400">
          {experience.period}
        </span>
        <h3 className="text-lg font-semibold text-gradient">
          {experience.company}
        </h3>
        <p className="text-sm font-medium text-zinc-300 mb-3">
          {experience.role}
        </p>
        <p className="text-sm text-zinc-400">
          {experience.description}
        </p>
        <ul className="space-y-2 pt-1">
          {experience.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-zinc-400"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
