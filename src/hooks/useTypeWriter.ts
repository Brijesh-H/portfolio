"use client";

import { useState, useEffect } from "react";

export function useTypeWriter(text: string, speed = 50, delay = 500) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let timeout: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      let i = 0;
      const type = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(type, speed);
        } else {
          setDone(true);
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}
