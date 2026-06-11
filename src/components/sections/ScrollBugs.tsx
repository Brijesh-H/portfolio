"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { Bug } from "lucide-react";

const bugs = [
  { x: "8%", y: "20%", delay: 0, size: 14 },
  { x: "85%", y: "25%", delay: 0.3, size: 12 },
  { x: "12%", y: "60%", delay: 0.6, size: 13 },
  { x: "82%", y: "65%", delay: 0.9, size: 11 },
  { x: "6%", y: "80%", delay: 1.2, size: 12 },
  { x: "88%", y: "85%", delay: 0.5, size: 13 },
];

export function ScrollBugs() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <>
      {bugs.map((bug) => (
        <motion.div
          key={bug.x + bug.y}
          style={{ opacity }}
          className="fixed z-30 pointer-events-none motion-reduce:opacity-0"
          initial={{ left: bug.x, top: bug.y }}
        >
          <motion.span
            className="block"
            animate={{
              y: [0, -4, 2, -2, 0],
            }}
            transition={{
              duration: 6 + bug.delay * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bug.delay,
            }}
          >
            <Bug
              className="text-red-400/40"
              style={{ width: bug.size, height: bug.size }}
            />
          </motion.span>
        </motion.div>
      ))}
    </>
  );
}
