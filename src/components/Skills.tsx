/**
 * Skills — categorized skill clusters with animated proficiency bars.
 */
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const groups = [
  {
    title: "Analysis & Data",
    items: [
      { name: "SQL", level: 92 },
      { name: "Power BI / Tableau", level: 88 },
      { name: "Python (pandas)", level: 75 },
      { name: "Excel / Sheets", level: 95 },
    ],
  },
  {
    title: "Business & Process",
    items: [
      { name: "Requirements Gathering", level: 94 },
      { name: "Process Mapping (BPMN)", level: 86 },
      { name: "User Stories & Acceptance", level: 90 },
      { name: "Stakeholder Workshops", level: 88 },
    ],
  },
  {
    title: "Tools & Methods",
    items: [
      { name: "Jira / Confluence", level: 92 },
      { name: "Figma", level: 70 },
      { name: "A/B Testing", level: 80 },
      { name: "Agile / Scrum", level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <SectionHeading
        eyebrow="Skills"
        title="A balanced toolkit."
        description="Hard skills for the analysis, soft skills for the alignment — both matter equally."
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {groups.map((g, i) => (
          <SkillGroup key={g.title} group={g} delay={i * 120} />
        ))}
      </div>
    </section>
  );
};

const SkillGroup = ({
  group,
  delay,
}: {
  group: (typeof groups)[number];
  delay: number;
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`glass-card hover-lift rounded-[2rem] p-7 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h3 className="font-display text-xl font-medium tracking-tight">{group.title}</h3>
      <ul className="mt-6 space-y-4">
        {group.items.map((s) => (
          <li key={s.name}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="font-medium text-foreground/85">{s.name}</span>
              <span className="text-xs text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-foreground/5">
              <div
                className="h-full rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
                style={{ width: isVisible ? `${s.level}%` : "0%" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
