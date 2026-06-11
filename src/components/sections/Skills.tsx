"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SkillBadge } from "@/components/ui/SkillBadge";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16 sm:py-24 lg:py-32 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium text-indigo-400"
        >
          Skills
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-12 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl lg:text-4xl"
        >
          Technologies I work with
        </motion.h2>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500"
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <SkillBadge key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
