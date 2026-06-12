export interface Project {
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tech: string[];
  category: "web" | "mobile";
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Playwright Test Framework",
    description:
      "Enterprise-grade end-to-end testing solution with parallel execution, video recording, and CI integration.",
    longDescription:
      "A comprehensive Playwright-based test automation framework designed for enterprise web applications. Features include parallel test execution across multiple browsers, automatic video recording of failures, visual regression testing with pixel-level comparison, and seamless CI/CD integration with GitHub Actions.",
    highlights: [
      "Parallel execution across Chromium, Firefox, and WebKit",
      "Auto-retry with smart failure analysis",
      "Visual regression testing with pixel-diff comparison",
    ],
    tech: ["Playwright", "TypeScript", "GitHub Actions"],
    category: "web",
    githubUrl: "https://github.com/Brijesh-H",
  },
  {
    title: "Appium Mobile Framework",
    description:
      "Cross-platform mobile test automation framework supporting both iOS and Android.",
    longDescription:
      "A robust mobile test automation framework built on Appium 2.0, supporting both iOS and Android platforms. Supports parallel execution across multiple devices and includes gesture-based interaction handling. The framework features automatic screenshot capture on failure and bi-directional synchronization with test management tools.",
    highlights: [
      "Cross-platform support (iOS + Android) from a single codebase",
      "Gesture and biometric authentication handling",
    ],
    tech: ["Appium", "TestNG"],
    category: "mobile",
    githubUrl: "https://github.com/Brijesh-H",
  },
];
