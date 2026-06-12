"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} {...exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
