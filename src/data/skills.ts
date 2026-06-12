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
      { name: "Appium", icon: "smartphone", proficiency: 88 },
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: "code-2",
    skills: [
      { name: "TypeScript", icon: "file-code", proficiency: 90 },
      { name: "Python", icon: "file-text", proficiency: 85 },
      { name: "JavaScript", icon: "file-code", proficiency: 90 },
      { name: "Node.js", icon: "server", proficiency: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "settings-2",
    skills: [

      { name: "GitHub Actions", icon: "github", proficiency: 88 },
    ],
  },
];
