"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 5, label: "Years Experience", suffix: "+" },
  { value: 100, label: "Automation Scripts", suffix: "+" },
  { value: 15, label: "Projects Delivered", suffix: "+" },
  { value: 99, label: "Critical Path Coverage", suffix: "%" },
];

function StatCard({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const { count, ref } = useCountUp(value);

  return (
    <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center">
      <div className="mb-1 font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
        <span ref={ref}>{count}</span>
        {suffix}
      </div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-100 sm:text-4xl">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            <p>
              I&apos;m a results-driven Software Development Engineer in Test (SDET) with
              over 5 years of experience crafting robust test automation frameworks and
              ensuring software quality at scale.
            </p>
            <p>
              My expertise spans the full testing spectrum — from building
              enterprise-grade Playwright and Cypress frameworks for web applications
              to developing cross-platform mobile test suites using Appium and Detox.
              I&apos;m passionate about integrating quality into every stage of the
              development lifecycle, from CI/CD pipelines to production monitoring.
            </p>
            <p>
              Currently exploring the intersection of AI and test automation, I
              believe the future of quality engineering lies in intelligent,
              self-healing test systems that adapt as fast as the code they verify.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
