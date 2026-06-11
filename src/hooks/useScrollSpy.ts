"use client";

import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    };

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: `-${offset}px 0px -50% 0px`,
          threshold: 0,
        });
        observer.observe(el);
        observers.push(observer);
      }
    }

    return () => {
      for (const obs of observers) obs.disconnect();
    };
  }, [sectionIds, offset]);

  return activeId;
}
