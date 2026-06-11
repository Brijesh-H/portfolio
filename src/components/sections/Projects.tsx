"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium text-indigo-600 dark:text-indigo-400"
        >
          Projects
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 sm:mb-8 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl dark:text-zinc-100"
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
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === cat.key
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-zinc-600 ring-1 ring-zinc-200 hover:bg-zinc-50 hover:ring-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-700 dark:hover:bg-zinc-700",
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

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
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
