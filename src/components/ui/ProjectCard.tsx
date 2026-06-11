"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { useTiltEffect } from "@/hooks/useTiltEffect";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const { ref, attachListeners, detachListeners } = useTiltEffect<HTMLDivElement>({
    maxTilt: 6,
    scale: 1.01,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    attachListeners();
    return () => detachListeners();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      ref={ref}
      onClick={() => onSelect?.(project)}
      className={cn(
        "group relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:glow-indigo-lg",
        "hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]",
        "before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-500",
        "before:bg-[radial-gradient(400px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(99,102,241,0.06),transparent_40%)]",
        "hover:before:opacity-100",
        onSelect && "cursor-pointer",
      )}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
        e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-5">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-500">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <h3 className="mb-1.5 text-lg font-semibold text-zinc-100">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-zinc-400">
          {project.description}
        </p>
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300",
              )}
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
