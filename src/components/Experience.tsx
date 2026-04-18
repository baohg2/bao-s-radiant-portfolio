/**
 * Experience — vertical timeline with reveal-on-scroll milestones.
 */
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  {
    period: "2023 — Present",
    role: "Senior Business Analyst",
    company: "Lumen Retail Group",
    summary:
      "Lead analyst for the digital storefront. Own the analytics roadmap, partner with product on experimentation, and mentor 2 junior BAs.",
  },
  {
    period: "2021 — 2023",
    role: "Business Analyst",
    company: "Northwind SaaS",
    summary:
      "Translated complex billing requirements into shippable specs and designed the company's first self-serve revenue dashboard.",
  },
  {
    period: "2019 — 2021",
    role: "Data & Operations Analyst",
    company: "Aria Logistics",
    summary:
      "Automated weekly ops reporting and supported the rollout of a new WMS across 4 warehouses.",
  },
  {
    period: "2018 — 2019",
    role: "BA Intern → Junior Analyst",
    company: "Vela Consulting",
    summary:
      "Cut my teeth on requirements gathering, process mapping, and very thorough Excel models.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative bg-gradient-soft">
      <SectionHeading
        eyebrow="Experience"
        title="A path shaped by curiosity."
        description="Each role built on the last — more data, more stakeholders, more ownership."
      />

      <ol className="relative mx-auto max-w-3xl pl-6 md:pl-0">
        {/* Center line on md+ */}
        <span
          aria-hidden="true"
          className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2 md:-translate-x-1/2"
        />
        {timeline.map((item, i) => (
          <TimelineItem key={item.role} item={item} index={i} />
        ))}
      </ol>
    </section>
  );
};

const TimelineItem = ({
  item,
  index,
}: {
  item: (typeof timeline)[number];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLLIElement>();
  const isRight = index % 2 === 1;

  return (
    <li
      ref={ref}
      className={`relative mb-10 md:mb-14 md:grid md:grid-cols-2 md:gap-10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } transition-all duration-700`}
    >
      {/* Dot */}
      <span
        aria-hidden="true"
        className="absolute left-[-1.4rem] top-3 h-3 w-3 rounded-full bg-gradient-primary shadow-glow md:left-1/2 md:-translate-x-1/2"
      />

      <div
        className={`glass-card hover-lift rounded-[1.5rem] p-6 ${
          isRight ? "md:col-start-2" : "md:col-start-1"
        }`}
      >
        <p className="font-mono text-xs uppercase tracking-wider text-primary">{item.period}</p>
        <h3 className="mt-2 font-display text-xl font-medium tracking-tight">{item.role}</h3>
        <p className="text-sm font-medium text-foreground/70">{item.company}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
      </div>
    </li>
  );
};

export default Experience;
