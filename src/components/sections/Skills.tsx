import { skillCategories } from "@/data/skills";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { TestTube, Settings2, Brain, Code2 } from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "test-tube": TestTube,
  "code-2": Code2,
  "settings-2": Settings2,
  "brain": Brain,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillCategories.map((category, idx) => {
            const Icon = categoryIcons[category.icon] || Code2;

            return (
              <div
                key={category.title}
                className="group relative rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 transition-all duration-300 hover:border-slate-700/80"
              >
                <div
                  className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    padding: "1px",
                    background: `conic-gradient(from ${idx * 90}deg, rgba(99,102,241,0.3), rgba(45,212,191,0.3), transparent 50%)`,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
                      {Icon && <Icon className="h-5 w-5 text-indigo-400" />}
                    </div>
                    <h3 className="font-semibold text-slate-200">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
