export type ProjectCategory = "all" | "mobile" | "web" | "ai";

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    title: "Playwright Automation Framework",
    description:
      "Comprehensive Playwright-based automation framework for Web and APIs, built from scratch to improve release confidence and accelerate testing cycles.",
    longDescription:
      "A comprehensive Playwright-based automation framework built from the ground up for Web and API testing. Features include Page Object Model design pattern, parallel test execution, automated CI/CD integration, detailed reporting with Allure, and cross-browser testing across Chromium, Firefox, and WebKit.",
    tags: ["Playwright", "TypeScript", "API Testing", "CI/CD"],
    category: "web",
    githubUrl: "https://github.com/Brijesh-H/playwright-framework",
    highlights: [
      "Page Object Model design pattern",
      "Parallel test execution across browsers",
      "Allure reporting integration",
      "CI/CD with GitHub Actions",
      "API testing with request mocking",
    ],
  },
  {
    title: "Appium Mobile Test Suite",
    description:
      "Scalable Appium automation framework supporting XCUITest and UiAutomator2 for iOS & Android regression testing across CRED's product suite.",
    longDescription:
      "Scalable Appium automation framework supporting both iOS (XCUITest) and Android (UiAutomator2) platforms. Built for CRED's product suite with features like parallel device execution, screenshot comparison, network condition simulation, and comprehensive test reporting integrated with CI/CD pipelines.",
    tags: ["Appium", "Java", "TestNG", "Maven", "GitHub Actions"],
    category: "mobile",
    githubUrl: "https://github.com/Brijesh-H/appium-framework",
    highlights: [
      "iOS & Android support",
      "Parallel device execution",
      "Screenshot comparison",
      "Network condition simulation",
      "CI/CD pipeline integration",
    ],
  },
  {
    title: "Real-time Object Detection",
    description:
      "Built real-time object detection system using TensorFlow and OpenCV for video and webcam input. Achieved real-time detection performance with optimized processing pipeline.",
    longDescription:
      "Real-time object detection system leveraging TensorFlow's pre-trained models and OpenCV for video and webcam input processing. Achieves real-time performance through optimized frame processing and model quantization techniques.",
    tags: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
    category: "ai",
    githubUrl: "https://github.com/Brijesh-H/object-detection",
    highlights: [
      "Real-time video/webcam processing",
      "TensorFlow pre-trained models",
      "Optimized processing pipeline",
      "OpenCV integration",
    ],
  },
];

export const projectCategories: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "mobile", label: "Mobile" },
  { key: "web", label: "Web" },
  { key: "ai", label: "AI/ML" },
];
