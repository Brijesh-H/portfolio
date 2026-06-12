export interface Project {
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tech: string[];
  category: "web" | "mobile" | "ai";
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Playwright Test Framework",
    description:
      "Enterprise-grade end-to-end testing solution with parallel execution, video recording, and CI integration.",
    longDescription:
      "A comprehensive Playwright-based test automation framework designed for enterprise web applications. Features include parallel test execution across multiple browsers, automatic video recording of failures, visual regression testing with pixel-level comparison, and seamless CI/CD integration with GitHub Actions. The framework supports data-driven testing, API mocking, and generates rich Allure reports with screenshots and logs.",
    highlights: [
      "Parallel execution across Chromium, Firefox, and WebKit",
      "Auto-retry with smart failure analysis",
      "Visual regression testing with pixel-diff comparison",
      "Allure reporting with video replays of failures",
    ],
    tech: ["Playwright", "TypeScript", "Allure", "GitHub Actions"],
    category: "web",
    githubUrl: "https://github.com/Brijesh-H",
  },
  {
    title: "Appium Mobile Framework",
    description:
      "Cross-platform mobile test automation framework supporting both iOS and Android with cloud device integration.",
    longDescription:
      "A robust mobile test automation framework built on Appium 2.0, supporting both iOS and Android platforms. Integrates with BrowserStack for real device cloud testing, supports parallel execution across multiple devices, and includes gesture-based interaction handling. The framework features automatic screenshot capture on failure, network condition simulation, and bi-directional synchronization with test management tools.",
    highlights: [
      "Cross-platform support (iOS + Android) from a single codebase",
      "BrowserStack real device cloud integration",
      "Gesture and biometric authentication handling",
      "Network condition simulation for edge case testing",
    ],
    tech: ["Appium", "Java", "TestNG", "BrowserStack"],
    category: "mobile",
    githubUrl: "https://github.com/Brijesh-H",
  },
  {
    title: "Object Detection Suite",
    description:
      "AI-powered visual testing tools using computer vision for UI element detection and layout validation.",
    longDescription:
      "An experimental suite leveraging computer vision and deep learning for visual UI testing. Uses a fine-tuned YOLOv8 model for real-time UI element detection and layout validation. Includes tools for automated screenshot comparison, dynamic element detection without DOM dependencies, and regression detection for visual regressions across different screen sizes and resolutions.",
    highlights: [
      "Fine-tuned YOLOv8 model for UI element detection",
      "Layout validation across responsive breakpoints",
      "DOM-independent element detection",
      "Visual regression detection with ML-based comparison",
    ],
    tech: ["Python", "TensorFlow", "YOLOv8", "OpenCV"],
    category: "ai",
    githubUrl: "https://github.com/Brijesh-H",
  },
];
