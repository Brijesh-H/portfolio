"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

const symbols = [
  "{", "}", "<", "/>", "[]", "()", "=>",
  "&&", "||", "!", "~", "@", "#", "$",
  "%", "^", "*", "+", "=", ":", ";",
];

interface Particle {
  symbol: string;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export function TechParticles() {
  const particles: Particle[] = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        symbol: symbols[i % symbols.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 8,
        delay: Math.random() * 5,
        duration: Math.random() * 12 + 18,
        opacity: Math.random() * 0.1 + 0.03,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute font-mono font-bold text-zinc-500 select-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [p.opacity, p.opacity * 2.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {p.symbol}
        </motion.span>
      ))}
    </div>
  );
}
