"use client";

import { motion } from "framer-motion";
import { hobbies } from "@/data/hobbies";
import { Camera, Play, ArrowUpRight } from "lucide-react";

const hobbyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  motovlog: Play,
  photography: Camera,
};

export function Hobbies() {
  return (
    <section id="hobbies" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Beyond <span className="text-gradient-warm">the Code</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            When I&apos;m not automating tests, you&apos;ll find me doing this.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {hobbies.map((hobby, i) => {
            const Icon = hobbyIcons[hobby.title.toLowerCase()] || Camera;

            return (
              <motion.a
                key={hobby.title}
                href={hobby.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/40 p-6 transition-all duration-300 hover:border-indigo-500/30 hover:glow-indigo"
              >
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 transition-colors group-hover:bg-indigo-500/20">
                    {Icon && <Icon className="h-5 w-5 text-indigo-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="font-semibold text-slate-200 transition-colors group-hover:text-white">
                        {hobby.title}
                      </h3>
                      <ArrowUpRight className="h-3.5 w-3.5 text-slate-600 transition-colors group-hover:text-indigo-400" />
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-slate-400">
                      {hobby.description}
                    </p>
                    <span className="text-xs font-medium text-indigo-400/80 transition-colors group-hover:text-indigo-400">
                      {hobby.linkLabel}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
