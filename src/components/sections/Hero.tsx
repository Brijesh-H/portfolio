"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTypeWriter } from "@/hooks/useTypeWriter";
import { ChevronDown, GitBranch, Globe, Mail } from "lucide-react";

type LogType = "shell" | "pass" | "fail" | "retry" | "summary" | "ci" | "info";

interface LogLine {
  text: string;
  type: LogType;
}

const LOG_POOL: LogLine[] = [
  { text: "$ npm run test", type: "shell" },
  { text: "$ npx playwright test", type: "shell" },
  { text: "$ pytest tests/", type: "shell" },
  { text: "$ docker compose up -d", type: "shell" },
  { text: "✓ renders login form (243ms)", type: "pass" },
  { text: "✓ validates credentials (187ms)", type: "pass" },
  { text: "✓ handles error state (92ms)", type: "pass" },
  { text: "✓ navigation flow (312ms)", type: "pass" },
  { text: "✓ responsive layout (198ms)", type: "pass" },
  { text: "✓ form submission (156ms)", type: "pass" },
  { text: "✓ API response parsing (89ms)", type: "pass" },
  { text: "✓ mobile menu toggle (45ms)", type: "pass" },
  { text: "✓ dark mode toggle (34ms)", type: "pass" },
  { text: "✗ network timeout (5000ms)", type: "fail" },
  { text: "→ retry attempt 1/3", type: "retry" },
  { text: "✓ network timeout (4870ms)", type: "pass" },
  { text: "Tests: 42 passed, 1 flaky", type: "summary" },
  { text: "Coverage: 94.7%", type: "summary" },
  { text: "Build #284 — SUCCESS", type: "ci" },
  { text: "> lint — 0 errors, 0 warnings", type: "ci" },
  { text: "> typecheck — passed", type: "ci" },
  { text: "> Allure report generated", type: "ci" },
  { text: "> E2E suite running...", type: "ci" },
  { text: "> Cache hit — node_modules", type: "ci" },
  { text: "Initializing test environment...", type: "info" },
  { text: "Browser: Chromium 132", type: "info" },
  { text: "Viewport: 1280x720", type: "info" },
  { text: "3 workers running", type: "info" },
];

const TYPE_COLORS: Record<LogType, string> = {
  shell: "text-slate-600",
  pass: "text-teal-500",
  fail: "text-red-500",
  retry: "text-amber-500/70",
  summary: "text-indigo-400",
  ci: "text-indigo-400",
  info: "text-slate-600",
};

function getRandomLine(): LogLine {
  return LOG_POOL[Math.floor(Math.random() * LOG_POOL.length)];
}

const POSITIONS = [
  { x: "4%", y: "12%" },
  { x: "2%", y: "28%" },
  { x: "6%", y: "45%" },
  { x: "3%", y: "62%" },
  { x: "5%", y: "78%" },
  { x: "87%", y: "10%" },
  { x: "92%", y: "25%" },
  { x: "90%", y: "42%" },
  { x: "93%", y: "58%" },
  { x: "88%", y: "75%" },
  { x: "25%", y: "87%" },
  { x: "70%", y: "88%" },
];

function TerminalLine({ pos, index }: { pos: (typeof POSITIONS)[number]; index: number }) {
  const [line, setLine] = useState<LogLine>(LOG_POOL[index % LOG_POOL.length]);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setLine(getRandomLine());
    }, 3000 + Math.random() * 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const colorClass = TYPE_COLORS[line.type];

  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: pos.x, top: pos.y }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={line.text}
          className={`font-mono text-[11px] leading-none whitespace-nowrap ${colorClass}`}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 0.1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {line.text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function ScrollBugs() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const bugPositions = [
    { top: "15%", left: "5%" },
    { top: "25%", right: "8%" },
    { top: "50%", left: "3%" },
    { top: "60%", right: "5%" },
    { top: "75%", left: "7%" },
    { top: "80%", right: "10%" },
  ];

  return (
    <>
      {bugPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute hidden text-slate-700/30 md:block"
          style={pos as React.CSSProperties}
          animate={{
            y: [0, -6, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + (i % 3),
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}

export function Hero() {
  const { displayed, done } = useTypeWriter("SDET | Test Automation Engineer", 60, 800);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {POSITIONS.map((pos, i) => (
          <TerminalLine key={i} pos={pos} index={i} />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950" />

      <ScrollBugs />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-slate-700/50 bg-slate-800/30 px-4 py-1.5 text-xs text-slate-500">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
          </span>
          Open to opportunities
        </div>

        <h1 className="group relative mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span
            data-text="Brijesh H"
            className="glitch-text cursor-default text-slate-100"
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.animation = "glitch-slice 0.4s ease-in-out, glitch 0.3s ease-in-out reverse";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.animation = "none";
            }}
          >
            Brijesh H
          </span>
        </h1>

        <div className="mb-8 h-8">
          <span className="text-lg text-slate-400 sm:text-xl">
            {displayed}
            {!done && (
              <span className="ml-0.5 animate-[blink_0.7s_step-end_infinite] text-indigo-400">
                _
              </span>
            )}
          </span>
        </div>

        <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
          Building robust test automation frameworks, ensuring quality at scale,
          and bridging the gap between development and delivery.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {["Playwright", "TypeScript", "Appium"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-700/50 bg-slate-800/40 px-3 py-1 text-xs text-slate-500"
              >
                {tech}
              </span>
            ),
          )}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://github.com/Brijesh-H"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-700/50 bg-slate-800/30 text-slate-500 transition-all hover:border-indigo-500/40 hover:text-indigo-400"
          >
            <GitBranch className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/brijesh-h/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-700/50 bg-slate-800/30 text-slate-500 transition-all hover:border-indigo-500/40 hover:text-indigo-400"
          >
            <Globe className="h-4 w-4" />
          </a>
          <a
            href="mailto:brijesh.h@outlook.com"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-700/50 bg-slate-800/30 text-slate-500 transition-all hover:border-indigo-500/40 hover:text-indigo-400"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center text-slate-600 transition-colors hover:text-slate-400"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
