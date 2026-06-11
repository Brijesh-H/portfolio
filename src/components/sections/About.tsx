"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Companies", value: "2" },
  { label: "Automation Frameworks", value: "3+" },
  { label: "Tools & Technologies", value: "15+" },
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium text-indigo-600 dark:text-indigo-400"
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
            <h2 className="mb-5 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl dark:text-zinc-100">
              SDET with a passion for quality and automation.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-400">
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
            <div className="mb-8 flex h-48 w-48 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <span className="text-sm font-medium text-zinc-400 dark:text-zinc-600">
                Photo
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={cn(
                    "rounded-xl border border-zinc-200 bg-white p-4 text-center shadow-sm",
                    "dark:border-zinc-800 dark:bg-zinc-900",
                  )}
                >
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
