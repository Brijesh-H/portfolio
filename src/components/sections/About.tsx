"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Companies", value: 2 },
  { label: "Frameworks Built", value: 3, suffix: "+" },
  { label: "Tools & Tech", value: 15, suffix: "+" },
];

function StatCard({ stat, index, inView }: { stat: typeof stats[number]; index: number; inView: boolean }) {
  const count = useCountUp({ end: stat.value, duration: 2000, start: 0, enabled: inView });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-xl p-4 text-center"
    >
      <div className="text-2xl font-bold text-indigo-400">
        {count}{stat.suffix ?? ""}
      </div>
      <div className="mt-1 text-xs text-zinc-500">{stat.label}</div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium text-indigo-400"
        >
          About Me
        </motion.div>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="mb-5 text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl lg:text-4xl">
              SDET with a passion for quality and automation.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-400">
              <p>
                SDET with 5 years of experience in mobile, web automation and functional testing,
                specializing in Appium and Playwright. Experienced in building scalable automation
                frameworks, improving regression coverage, and accelerating release cycles through CI/CD.
              </p>
              <p>
                At CRED, I automated critical user flows across iOS & Android apps used by millions,
                owned the P0 automation suite, and built CI/CD pipelines using GitHub Actions that
                significantly reduced manual regression effort.
              </p>
              <p>
                Currently at SaturnAI, I&apos;m building a Playwright-based automation framework from
                scratch for Web and APIs, and exploring AI tools like Claude, Cline, MCPs and Skills
                to push the boundaries of what&apos;s possible in test automation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} inView={true} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
