"use client";

import { useCallback, useRef } from "react";

export function useTiltEffect() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
