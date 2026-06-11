export type Proficiency = "Expert" | "Advanced" | "Intermediate" | "Familiar";

export interface Skill {
  name: string;
  icon: string;
  proficiency?: Proficiency;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Test Automation",
    skills: [
      { name: "Appium", icon: "appium", proficiency: "Expert" },
      { name: "Playwright", icon: "playwright", proficiency: "Expert" },
      { name: "TestNG", icon: "testng", proficiency: "Advanced" },
      { name: "Maven", icon: "maven", proficiency: "Advanced" },
      { name: "XCUITest", icon: "xcuites", proficiency: "Advanced" },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: "java", proficiency: "Advanced" },
      { name: "Python", icon: "python", proficiency: "Advanced" },
      { name: "JavaScript", icon: "javascript", proficiency: "Expert" },
      { name: "TypeScript", icon: "typescript", proficiency: "Expert" },
      { name: "SQL", icon: "sql", proficiency: "Intermediate" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "git", proficiency: "Expert" },
      { name: "GitHub Actions", icon: "github", proficiency: "Advanced" },
      { name: "Charles Proxy", icon: "charles", proficiency: "Advanced" },
      { name: "Postman", icon: "postman", proficiency: "Advanced" },
      { name: "JIRA", icon: "jira", proficiency: "Intermediate" },
      { name: "Mixpanel", icon: "mixpanel", proficiency: "Intermediate" },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "Claude", icon: "claude", proficiency: "Intermediate" },
      { name: "Cline", icon: "cline", proficiency: "Intermediate" },
      { name: "MCPs", icon: "mcps", proficiency: "Intermediate" },
    ],
  },
];
