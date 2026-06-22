/**
 * Projects — glass cards with hover micro-interactions and staggered reveal.
 * Integrates with custom project detail pages.
 */
import { ArrowUpRight, BarChart3, CreditCard, Home, ShoppingBag } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { projectDetails } from "@/data/projectDetails";

const projects = [
  {
    id: "australia-demographics",
    icon: BarChart3,
    title: "Australia Demographic Dashboard",
    summary:
      "A data analytics project exploring how Australia's population composition changed over two decades from migration origin and age structure to regional distribution and workforce implications.",
    accent: "from-pastel-lavender to-pastel-rose",
    thumbnail: "/dashboards/demographics-1.png",
  },
  {
    id: "dibs-sales-analysis",
    icon: ShoppingBag,
    title: "Sales Analysis & Predictive Modeling",
    summary:
      "Sales performance analysis, identify seasonal and regional sales patterns, uncover trends in customer behaviour and develop a predictive model to forecast sales quantities and support strategic decision-making.",
    accent: "from-pastel-peach to-pastel-butter",
    thumbnail: "/dashboards/sales.png",
  },
  {
    id: "credit-card-defaults",
    icon: CreditCard,
    title: "Predictive Analysis of Credit Card Defaults",
    summary:
      "Develops a predictive machine learning framework to identify credit card default risks using a dataset of 10,000 customers and 23 financial features.",
    accent: "from-pastel-mint to-pastel-sky",
    thumbnail: "/dashboards/credit_card.png",
  },
  {
    id: "airbnb-price-prediction",
    icon: Home,
    title: "Airbnb Price Prediction",
    summary:
      "A data cleaning and predictive modeling project targeting Airbnb listing price dynamics in Melbourne, Australia to identify key valuation drivers.",
    accent: "from-pastel-sky to-pastel-lavender",
    thumbnail: "/dashboards/airbnb.png",
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
  const details = projectDetails[project.id];

  return (
    <Link
      to={`/project/${project.id}`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group flex flex-col justify-between glass-card hover-lift relative overflow-hidden rounded-[2rem] p-7 transition-all duration-700 h-full ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Decorative gradient blob */}
      <div
        aria-hidden="true"
        className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${project.accent} opacity-40 blur-2xl transition-transform duration-500 group-hover:scale-125`}
      />

      <div className="relative flex-grow flex flex-col">
        {project.thumbnail ? (
          <div className="mb-6 overflow-hidden rounded-2xl border border-border/40 aspect-[16/9] bg-muted/10 relative shadow-sm">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div className={`mb-6 rounded-2xl border border-border/40 aspect-[16/9] bg-gradient-to-br ${project.accent} opacity-85 flex items-center justify-center relative overflow-hidden shadow-sm`}>
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
            <Icon className="h-12 w-12 text-foreground/40 relative z-10" />
          </div>
        )}

        <div className="flex items-center gap-4 mb-4">
          <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform group-hover:rotate-6 group-hover:scale-110">
            <Icon className="h-4.5 w-4.5" aria-hidden="true" />
          </div>
          <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight leading-tight">{project.title}</h3>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-grow">
          {project.summary}
        </p>

        {details && (
          <div className="mt-auto pt-5 border-t border-border/10 space-y-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/50 mb-1.5">Tools</div>
              <div className="flex flex-wrap gap-1.5">
                {details.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs font-semibold text-foreground/75 border border-border/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/50 mb-1.5">Techniques</div>
              <div className="flex flex-wrap gap-1.5">
                {details.techniques.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs font-semibold text-foreground/75 border border-border/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative mt-6 pt-4 border-t border-border/10 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        View Project
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
};

export default Projects;
