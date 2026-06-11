"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/data/projects";
import type { ProjectCategory, Project } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Modal } from "@/components/ui/Modal";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium text-indigo-400"
        >
          Projects
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 sm:mb-8 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl lg:text-4xl"
        >
          Featured work
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                activeCategory === cat.key
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "glass text-zinc-400 hover:text-zinc-200",
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-zinc-600 py-12"
          >
            No projects in this category yet.
          </motion.p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  onSelect={setSelectedProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && <ProjectModal project={selectedProject} />}
      </Modal>
    </section>
  );
}
