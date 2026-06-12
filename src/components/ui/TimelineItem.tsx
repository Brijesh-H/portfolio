"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  tech: string[];
  index: number;
}

export function TimelineItem({
  company,
  role,
  startDate,
  endDate,
  description,
  tech,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 sm:pl-10"
    >
      <div className="absolute left-0 top-1 flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
        <div className="mt-1 h-full w-px bg-gradient-to-b from-teal-500/40 to-slate-800" />
      </div>

      <div className="pb-12 last:pb-0">
        <div className="mb-1 flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-teal-400/80">
            {startDate} — {endDate}
          </span>
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-400">
            {role}
          </span>
        </div>

        <h3 className="mb-3 text-lg font-semibold text-slate-100">
          {company}
        </h3>

        <ul className="mb-4 space-y-2">
          {description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-slate-700/50 bg-slate-800/40 px-2 py-0.5 text-xs text-slate-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
