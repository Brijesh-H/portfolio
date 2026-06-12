import { experiences } from "@/data/experience";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} {...exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
