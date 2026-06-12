"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { MapPin, Briefcase, Clock } from "lucide-react";

export function StatusBar() {
  const isVisible = useScrollDirection();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-lg"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-slate-500 sm:px-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-teal-500" />
              <span>India</span>
            </div>

            <div className="flex items-center gap-2">
              <Briefcase className="h-3 w-3 text-indigo-500" />
              <span>Open to opportunities</span>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <Clock className="h-3 w-3 text-amber-500" />
              <span>5+ years experience</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
