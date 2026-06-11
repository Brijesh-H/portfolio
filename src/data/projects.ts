export type ProjectCategory = "all" | "mobile" | "web" | "ai";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Playwright Automation Framework",
    description:
      "Comprehensive Playwright-based automation framework for Web and APIs, built from scratch to improve release confidence and accelerate testing cycles.",
    tags: ["Playwright", "TypeScript", "API Testing", "CI/CD"],
    category: "web",
    githubUrl: "https://github.com/Brijesh-H/playwright-framework",
  },
  {
    title: "Appium Mobile Test Suite",
    description:
      "Scalable Appium automation framework supporting XCUITest and UiAutomator2 for iOS & Android regression testing across CRED's product suite.",
    tags: ["Appium", "Java", "TestNG", "Maven", "GitHub Actions"],
    category: "mobile",
    githubUrl: "https://github.com/Brijesh-H/appium-framework",
  },
  {
    title: "Real-time Object Detection",
    description:
      "Built real-time object detection system using TensorFlow and OpenCV for video and webcam input. Achieved real-time detection performance with optimized processing pipeline.",
    tags: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
    category: "ai",
    githubUrl: "https://github.com/Brijesh-H/object-detection",
  },
];

export const projectCategories: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "mobile", label: "Mobile" },
  { key: "web", label: "Web" },
  { key: "ai", label: "AI/ML" },
];
