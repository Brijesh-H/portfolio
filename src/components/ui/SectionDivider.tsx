"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-px overflow-hidden bg-slate-800/50"
      >
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/40 via-teal-400/40 to-transparent"
        />
      </motion.div>
    </div>
  );
}
