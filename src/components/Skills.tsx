/**
 * Skills — categorized skill clusters with animated proficiency bars.
 */
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const groups = [
  {
    title: "Programming Language & Tools",
    items: [
      { name: "Excel", level: 90 },
      { name: "Power BI (DAX)", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Python", level: 78 },
      { name: "R", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    title: "Data Analytics",
    items: [
      { name: "Dashboard Automation", level: 90 },
      { name: "Data Imputation", level: 90 },
      { name: "Customer Segmentation", level: 85 },
      { name: "Predictive Modeling", level: 85 },
      { name: "Machine Learning", level: 75 },
    ],
  },
  {
    title: "Business & Financial",
    items: [
      { name: "Cash Flow Management", level: 94 },
      { name: "Financial Modeling", level: 90 },
      { name: "Loan Drawdowns", level: 90 },
      { name: "Loan Management", level: 85 },
      { name: "Auditing", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <SectionHeading
        eyebrow="Skills"
        title="A balanced toolkit."
        description="Hard skills for the analysis, domain skills for the execution—both matter equally."
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
