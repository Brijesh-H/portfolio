"use client";

import type { Project } from "@/data/projects";
import { ExternalLink, GitFork, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

interface ProjectModalProps {
  project: Project;
}

export function ProjectModal({ project }: ProjectModalProps) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-3 text-xl font-bold text-zinc-100 sm:text-2xl">
        {project.title}
      </h3>
      <p className="mb-6 text-base leading-relaxed text-zinc-400">
        {project.longDescription || project.description}
      </p>
      {project.highlights && project.highlights.length > 0 && (
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Key Highlights
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-zinc-300"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="sm">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="glass" size="sm">
              <GitFork className="h-4 w-4" />
              View Source
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}
