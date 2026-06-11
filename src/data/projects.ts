export type ProjectCategory = "all" | "mobile" | "web" | "backend" | "ai";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Real-time Object Detection",
    description:
      "Built real-time object detection system using TensorFlow and OpenCV for video and webcam input. Achieved real-time detection performance with optimized processing pipeline.",
    image: "/images/project-1.jpg",
    tags: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
    category: "ai",
    githubUrl: "https://github.com/brijeshh11/object-detection",
  },
  {
    title: "Playwright Automation Framework",
    description:
      "Comprehensive Playwright-based automation framework for Web and APIs, built from scratch to improve release confidence and accelerate testing cycles.",
    image: "/images/project-2.jpg",
    tags: ["Playwright", "TypeScript", "API Testing", "CI/CD"],
    category: "web",
    githubUrl: "https://github.com/brijeshh11/playwright-framework",
  },
  {
    title: "Appium Mobile Test Suite",
    description:
      "Scalable Appium automation framework supporting XCUITest and UiAutomator2 for iOS & Android regression testing across CRED's product suite.",
    image: "/images/project-3.jpg",
    tags: ["Appium", "Java", "TestNG", "Maven", "GitHub Actions"],
    category: "mobile",
    githubUrl: "https://github.com/brijeshh11/appium-framework",
  },
];

export const projectCategories: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "mobile", label: "Mobile" },
  { key: "web", label: "Web" },
  { key: "backend", label: "Backend" },
  { key: "ai", label: "AI/ML" },
];
