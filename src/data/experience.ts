export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Parallel Loop",
    role: "SDET",
    startDate: "Apr 2026",
    endDate: "Present",
    description: [
      "Building the quality foundation for an early-stage AI-native startup",
      "Architecting end-to-end test automation framework from scratch",
      "Establishing CI/CD pipelines and quality gates for rapid iteration",
    ],
    tech: ["Playwright", "TypeScript", "GitHub Actions", "Docker"],
  },
  {
    company: "SaturnAI",
    role: "SDET",
    startDate: "Apr 2024",
    endDate: "Apr 2026",
    description: [
      "Automated end-to-end test scenarios using Playwright with TypeScript, increasing test coverage by 40%",
      "Developed and maintained CI/CD pipelines for mobile applications using GitHub Actions and Firebase App Distribution",
      "Led regression testing for major product releases, ensuring 99.9% critical path coverage",
      "Built custom test utilities and reporting frameworks using Allure for comprehensive test analytics",
    ],
    tech: ["Playwright", "Appium", "TypeScript", "GitHub Actions", "Allure"],
  },
  {
    company: "CRED",
    role: "Software Development Engineer in Test",
    startDate: "Sep 2022",
    endDate: "Mar 2024",
    description: [
      "Designed and implemented scalable test automation frameworks for web and mobile platforms using Cypress and Detox",
      "Integrated accessibility testing (AXE) into CI/CD pipeline, achieving WCAG 2.1 AA compliance",
      "Collaborated with cross-functional teams to define quality metrics and establish testing best practices",
      "Reduced production defects by 35% through comprehensive test strategies and QA process improvements",
    ],
    tech: ["Cypress", "Detox", "TypeScript", "AWS", "Docker"],
  },
];
