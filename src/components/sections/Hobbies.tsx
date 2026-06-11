"use client";

import { motion } from "framer-motion";
import { Bike, Camera, ExternalLink } from "lucide-react";
import { hobbies } from "@/data/hobbies";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  motovlog: Bike,
  photography: Camera,
};

export function Hobbies() {
  return (
    <section id="hobbies" className="scroll-mt-20 py-16 sm:py-24 lg:py-32 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium text-indigo-400"
        >
          Hobbies
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-12 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl lg:text-4xl"
        >
          Beyond the code
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {hobbies.map((hobby, index) => {
            const key = hobby.title.toLowerCase();
            const Icon = iconMap[key] || ExternalLink;

            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:glow-indigo-lg transition-all duration-300 group"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                  {hobby.title}
                </h3>
                <p className="mb-4 text-sm text-zinc-400">
                  {hobby.description}
                </p>
                {hobby.url && (
                  <a
                    href={hobby.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    {hobby.urlLabel || "Visit"}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
