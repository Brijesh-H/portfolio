"use client";

import { useRef, useCallback } from "react";

interface TiltOptions {
  maxTilt?: number;
  scale?: number;
  perspective?: number;
}

export function useTiltEffect<T extends HTMLElement>({
  maxTilt = 8,
  scale = 1.02,
  perspective = 800,
}: TiltOptions = {}) {
  const ref = useRef<T>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = ((y - centerY) / centerY) * maxTilt;
      const tiltY = ((centerX - x) / centerX) * maxTilt;
      el.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    },
    [maxTilt, scale, perspective],
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }, [perspective]);

  const attachListeners = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseMove, handleMouseLeave]);

  const detachListeners = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.removeEventListener("mousemove", handleMouseMove);
    el.removeEventListener("mouseleave", handleMouseLeave);
    el.style.transform = "";
  }, [handleMouseMove, handleMouseLeave]);

  return { ref, attachListeners, detachListeners };
}
