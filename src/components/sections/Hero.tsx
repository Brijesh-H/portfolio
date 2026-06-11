"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-5 sm:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-stone-50 to-transparent dark:from-indigo-950 dark:via-transparent" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#d6d3d1_1px,transparent_1px),linear-gradient(to_bottom,#d6d3d1_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4 text-sm font-medium text-indigo-600 dark:text-indigo-400"
        >
          Hello, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-zinc-100"
        >
          Brijesh H
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-4 text-lg text-zinc-600 sm:text-xl dark:text-zinc-400"
        >
          SDET | Test Automation Engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8 max-w-xl mx-auto text-base text-zinc-600 dark:text-zinc-400"
        >
          5+ years building scalable automation frameworks with Appium, Playwright, and CI/CD.
          Passionate about quality, reliability, and developer productivity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View My Work
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8"
      >
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="animate-bounce text-zinc-400 transition-colors hover:text-indigo-600 dark:text-zinc-600 dark:hover:text-indigo-400"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </motion.div>
    </section>
  );
}
