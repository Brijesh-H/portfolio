"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypeWriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export function useTypeWriter({ text, speed = 40, delay = 0 }: UseTypeWriterOptions) {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);

  const start = useCallback(() => {
    let i = 0;
    setDisplayed("");
    setIsDone(false);
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const timeout = setTimeout(start, delay);
    return () => clearTimeout(timeout);
  }, [start, delay]);

  return { displayed, isDone };
}
