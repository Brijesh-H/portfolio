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
        className="h-px origin-left bg-gradient-to-r from-transparent via-indigo-500/20 via-purple-500/20 to-pink-500/20 to-transparent"
      />
    </div>
  );
}
