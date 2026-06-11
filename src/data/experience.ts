export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    company: "SaturnAI",
    role: "SDET",
    period: "Feb 2026 — Present",
    description:
      "AI solution for Financial Advisory. Building automation frameworks from scratch to ensure quality across Web and API layers.",
    highlights: [
      "Built Playwright-based automation framework for Web and APIs from scratch",
      "Automated end-to-end UI test flows to improve release confidence",
      "Functional testing of APIs and Web pages using Charles proxy, Postman, Beekeeper Studio and Mixpanel",
      "Leveraging AI tools: Claude, Cline, MCPs and Skills for enhanced productivity",
    ],
    logo: "/images/company-1.png",
  },
  {
    company: "CRED",
    role: "SDET",
    period: "Mar 2021 — Jan 2026",
    description:
      "Fintech - Led automation efforts across ECommerce, Travel booking, CRED Money (Finance management) and Mutual Funds apps on iOS and Android.",
    highlights: [
      "Automated critical user flows across iOS & Android using Appium, increasing regression coverage significantly",
      "Optimised framework built with Appium, Maven, TestNG for XCUITest and UiAutomator2",
      "Owned and maintained P0 automation suite, ensuring stability across releases",
      "Built CI/CD pipelines using GitHub Actions to execute automated test suites, reducing manual regression effort",
      "Bug tracking and preparing Dashboards using JIRA",
      "Release management: tracking code commits, triggering RC builds, tracking sign-offs and publishing release notes",
    ],
    logo: "/images/company-2.png",
  },
];
