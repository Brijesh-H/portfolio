"use client";

import { Modal } from "./Modal";
import { type Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal open={!!project} onClose={onClose}>
      <div className="space-y-6">
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-400"
              >
                {t}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-slate-100">{project.title}</h2>
        </div>

        <p className="text-sm leading-relaxed text-slate-400">
          {project.longDescription}
        </p>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
            Highlights
          </h3>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-slate-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
