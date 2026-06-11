export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Test Automation",
    skills: [
      { name: "Appium", icon: "appium" },
      { name: "Playwright", icon: "playwright" },
      { name: "Selenium", icon: "selenium" },
      { name: "TestNG", icon: "testng" },
      { name: "Maven", icon: "maven" },
      { name: "XCUITest", icon: "xcuites" },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub Actions", icon: "github" },
      { name: "Charles Proxy", icon: "charles" },
      { name: "Postman", icon: "postman" },
      { name: "JIRA", icon: "jira" },
      { name: "Mixpanel", icon: "mixpanel" },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "Claude", icon: "claude" },
      { name: "Cline", icon: "cline" },
      { name: "MCPs", icon: "mcps" },
      { name: "TensorFlow", icon: "tensor" },
    ],
  },
];
