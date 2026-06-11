"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";
import type { Project } from "@/data/projects";
import { useTiltEffect } from "@/hooks/useTiltEffect";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
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
      className="group relative overflow-hidden rounded-2xl glass transition-all duration-300 hover:glow-indigo-lg"
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
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300",
              )}
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-200",
              )}
            >
              <GitFork className="h-4 w-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
