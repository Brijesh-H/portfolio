"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-16 sm:py-24 lg:py-32 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium text-indigo-400"
        >
          Experience
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-12 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl lg:text-4xl"
        >
          Where I&apos;ve worked
        </motion.h2>

        <div className="mx-auto max-w-2xl">
          {experiences.length === 0 ? (
            <p className="text-center text-zinc-600 py-12">
              Experience details coming soon.
            </p>
          ) : (
            experiences.map((exp, index) => (
              <TimelineItem key={exp.company} experience={exp} index={index} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
