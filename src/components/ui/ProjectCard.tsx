"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const WATERMARK_COLORS = [
  "from-indigo-500/10 to-teal-500/10",
  "from-teal-500/10 to-amber-500/10",
  "from-amber-500/10 to-indigo-500/10",
];

const GRADIENT_BORDERS = [
  "from-indigo-500 via-teal-400 to-indigo-500",
  "from-teal-400 via-amber-400 to-teal-400",
  "from-amber-400 via-indigo-500 to-amber-400",
];

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative cursor-pointer overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50 p-6 transition-all duration-300",
          "hover:border-transparent",
        )}
        style={{ position: "relative" }}
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(99,102,241,0.08), transparent 40%)`,
          }}
        />

        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            padding: "1px",
            background: `conic-gradient(from var(--border-angle, 0deg), transparent, transparent, ${["rgba(99,102,241,0.4)", "rgba(45,212,191,0.4)", "rgba(245,158,11,0.4)"][index]}, transparent 80%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            animation: "border-rotate 4s linear infinite",
          }}
        />

        <span
          className={cn(
            "absolute right-3 top-2 select-none text-[5rem]/none font-black bg-gradient-to-br bg-clip-text text-transparent",
            WATERMARK_COLORS[index],
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative z-10">
          <h3 className="mb-2 text-lg font-semibold text-slate-100 transition-colors group-hover:text-white">
            {project.title}
          </h3>

          <p className="mb-4 text-sm leading-relaxed text-slate-400 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-slate-800/60 px-2 py-0.5 text-xs text-slate-500 transition-colors group-hover:text-slate-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
