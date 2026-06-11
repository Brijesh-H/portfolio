"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-indigo-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-700"
    >
      <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <div className="flex h-full items-center justify-center text-zinc-400 dark:text-zinc-500">
          <span className="text-sm font-medium">Screenshot</span>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <h3 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700",
                "dark:text-indigo-400 dark:hover:text-indigo-300",
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
                "inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900",
                "dark:text-zinc-400 dark:hover:text-zinc-200",
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
