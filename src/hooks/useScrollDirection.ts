"use client";

import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setIsVisible(currentY < 100 || currentY < lastY);
      setLastY(currentY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return isVisible;
}
