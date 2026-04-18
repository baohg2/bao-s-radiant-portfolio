/**
 * Projects — glass cards with hover micro-interactions and staggered reveal.
 */
import { ArrowUpRight, BarChart3, Boxes, ShoppingBag, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    icon: BarChart3,
    title: "Revenue Insights Dashboard",
    summary:
      "Unified 6 disconnected reports into a single executive dashboard, cutting weekly review time by 70%.",
    tags: ["SQL", "Power BI", "DAX"],
    accent: "from-pastel-lavender to-pastel-rose",
  },
  {
    icon: ShoppingBag,
    title: "Checkout Funnel Analysis",
    summary:
      "Identified a 14% drop-off at address validation; A/B test recovered $1.2M in projected annual revenue.",
    tags: ["A/B Testing", "Mixpanel", "SQL"],
    accent: "from-pastel-peach to-pastel-butter",
  },
  {
    icon: Workflow,
    title: "Ops Automation Blueprint",
    summary:
      "Mapped a 23-step manual workflow and designed an automation roadmap, saving the ops team 35 hours/week.",
    tags: ["Process Mapping", "BPMN", "Stakeholders"],
    accent: "from-pastel-mint to-pastel-sky",
  },
  {
    icon: Boxes,
    title: "Inventory Forecast Model",
    summary:
      "Built a lightweight forecasting tool used by 4 regional managers, reducing stockouts by 28%.",
    tags: ["Python", "Forecasting", "Excel"],
    accent: "from-pastel-sky to-pastel-lavender",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative bg-gradient-soft">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work, made to be used."
        description="A few engagements that show how I move from question to insight to outcome."
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={i * 100} />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: (typeof projects)[number];
  delay: number;
}

const ProjectCard = ({ project, delay }: ProjectCardProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const Icon = project.icon;

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group glass-card hover-lift relative overflow-hidden rounded-[2rem] p-7 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Decorative gradient blob */}
      <div
        aria-hidden="true"
        className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${project.accent} opacity-60 blur-2xl transition-transform duration-500 group-hover:scale-125`}
      />

      <div className="relative">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform group-hover:rotate-6 group-hover:scale-110">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>

        <h3 className="font-display text-2xl font-medium tracking-tight">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Case study
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  );
};

export default Projects;
