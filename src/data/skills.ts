export interface Skill {
  name: string;
  icon: string;
  proficiency?: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Test Automation",
    icon: "test-tube",
    skills: [
      { name: "Playwright", icon: "play", proficiency: 95 },
      { name: "Cypress", icon: "layout-dashboard", proficiency: 90 },
      { name: "Appium", icon: "smartphone", proficiency: 88 },
      { name: "Selenium WebDriver", icon: "terminal", proficiency: 92 },
      { name: "Detox", icon: "smartphone", proficiency: 80 },
      { name: "K6", icon: "gauge", proficiency: 75 },
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: "code-2",
    skills: [
      { name: "TypeScript", icon: "file-code", proficiency: 90 },
      { name: "Python", icon: "file-text", proficiency: 85 },
      { name: "Java", icon: "coffee", proficiency: 80 },
      { name: "JavaScript", icon: "file-code", proficiency: 90 },
      { name: "Node.js", icon: "server", proficiency: 85 },
      { name: "NestJS", icon: "layers", proficiency: 78 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "settings-2",
    skills: [
      { name: "Docker", icon: "container", proficiency: 85 },
      { name: "GitHub Actions", icon: "github", proficiency: 88 },
      { name: "AWS", icon: "cloud", proficiency: 80 },
      { name: "Firebase", icon: "flame", proficiency: 82 },
      { name: "Allure", icon: "bar-chart-3", proficiency: 85 },
      { name: "Jenkins", icon: "pipe", proficiency: 80 },
    ],
  },
  {
    title: "AI Tools",
    icon: "brain",
    skills: [
      { name: "TensorFlow", icon: "sigma", proficiency: 70 },
      { name: "OpenAI API", icon: "zap", proficiency: 78 },
      { name: "LangChain", icon: "link-2", proficiency: 72 },
      { name: "LlamaIndex", icon: "database", proficiency: 68 },
    ],
  },
];
