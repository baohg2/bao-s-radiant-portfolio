/**
 * Projects — glass cards with hover micro-interactions and staggered reveal.
 * Pulls from user's real GitHub projects.
 */
import { ArrowUpRight, BarChart3, CreditCard, Home, ShoppingBag } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    icon: BarChart3,
    title: "Australia Demographic Dashboard",
    summary:
      "A data analytics project exploring how Australia's population composition changed over two decades from migration origin and age structure to regional distribution.",
    tags: ["R / Excel", "Demographics", "Data Analytics"],
    accent: "from-pastel-lavender to-pastel-rose",
    url: "https://github.com/baohg2/Australia-Demographic-Dashboard",
  },
  {
    icon: ShoppingBag,
    title: "DIBS Sales Analysis & Modeling",
    summary:
      "A data-driven analysis of DIBS Retail Company's sales performance, uncovering customer behavior trends and building predictive models to forecast sales.",
    tags: ["R", "Predictive Modeling", "Sales Analytics", "Regression"],
    accent: "from-pastel-peach to-pastel-butter",
    url: "https://github.com/baohg2/DIBS---Sales-Analysis-and-Predictive-Modelling",
  },
  {
    icon: CreditCard,
    title: "Credit Card Default Prediction",
    summary:
      "Develops a predictive machine learning framework to identify credit card default risks using a dataset of 10,000 customers and 23 financial features.",
    tags: ["Python", "Machine Learning", "Credit Risk", "Classification"],
    accent: "from-pastel-mint to-pastel-sky",
    url: "https://github.com/baohg2/Predictive-Analysis-of-Credit-Card-Defaults",
  },
  {
    icon: Home,
    title: "Airbnb Price Prediction",
    summary:
      "A data cleaning and predictive modeling project targeting Airbnb listing price dynamics in Melbourne, Australia to identify key valuation drivers.",
    tags: ["Python", "Data Cleaning", "Price Valuation", "Regression"],
    accent: "from-pastel-sky to-pastel-lavender",
    url: "https://github.com/baohg2/Airbnb---Predict-listing-prices-in-Melbourne-Australia",
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
  const { ref, isVisible } = useScrollReveal<HTMLAnchorElement>();
  const Icon = project.icon;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group block glass-card hover-lift relative overflow-hidden rounded-[2rem] p-7 transition-all duration-700 ${
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
          View Repository
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  );
};

export default Projects;
