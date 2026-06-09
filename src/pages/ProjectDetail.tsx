import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projectDetails } from "@/data/projectDetails";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = id ? projectDetails[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-display font-bold">Project not found</h1>
        <p className="mt-2 text-muted-foreground">The project you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 antialiased">
      {/* Top half with soft gradient background matching the site's organic tones */}
      <div className="bg-gradient-to-b from-background via-pastel-lavender/25 to-background pb-16 pt-12 px-6 md:px-12 lg:px-24 border-b border-border/40">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-foreground/80 font-semibold hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          {/* Title and Subtitle */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.15]">
            {project.title}
          </h1>
          <p className="mt-5 text-[1.05rem] md:text-lg text-muted-foreground leading-relaxed max-w-4xl font-normal">
            {project.subtitle}
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.primaryLink}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-gradient-primary text-primary-foreground hover:opacity-95 transition-all font-semibold rounded-full px-6 py-3.5 text-sm inline-flex items-center gap-2 shadow-soft hover:scale-105"
            >
              {project.primaryLinkLabel}
              <ExternalLink className="h-4 w-4" />
            </a>
            {project.secondaryLink && project.secondaryLinkLabel && (
              <a
                href={project.secondaryLink}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-gradient-accent text-accent-foreground hover:opacity-95 transition-all font-semibold rounded-full px-6 py-3.5 text-sm inline-flex items-center gap-2 shadow-soft hover:scale-105"
              >
                {project.secondaryLinkLabel}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* KPI Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.kpis.map((kpi, index) => (
              <div
                key={index}
                className="glass-card hover-lift rounded-3xl p-6 md:p-7 text-center border-primary/10 flex flex-col justify-center items-center min-h-[160px] shadow-sm"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
                  {kpi.value}
                </div>
                <div className="text-[13px] md:text-sm text-muted-foreground leading-relaxed font-normal">
                  {project.id === "australia-demographics" ? (
                    // Keep original wording for demographics if needed, else standard rendering
                    kpi.description
                  ) : (
                    kpi.description
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Tech tools and Skills */}
          <div className="mt-12">
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-foreground/80 mb-4">
              Tech tools and Skills
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-card/85 backdrop-blur-md border border-border rounded-full px-4 py-2 text-xs font-semibold text-foreground/90 shadow-sm hover:border-primary/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom half with clean background for result summary */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground mb-8">
            Result summary
          </h2>
          <div className="space-y-8 max-w-4xl">
            {project.results.map((result, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm mt-0.5 shadow-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {result.title}
                  </h3>
                  <p className="text-[1.05rem] text-muted-foreground leading-relaxed mt-2">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboards and Key Insights Section */}
      {project.dashboards && project.dashboards.length > 0 && (
        <div className="py-16 px-6 md:px-12 lg:px-24 bg-[#fdfbf7]/40 border-t border-border/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground mb-10">
              Dashboards and Key Insights
            </h2>
            <div className="space-y-12">
              {project.dashboards.map((dash, index) => (
                <div key={index} className="glass-card rounded-[2rem] p-8 border-primary/10 shadow-sm max-w-4xl hover-lift">
                  <h3 className="font-display text-2xl font-semibold text-foreground tracking-tight">
                    {dash.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary mt-1 mb-6 tracking-wider">
                    {dash.subtitle}
                  </p>
                  <ul className="space-y-4 text-base leading-relaxed text-muted-foreground">
                    {dash.points.map((pt, ptIndex) => (
                      <li key={ptIndex} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        <span className="text-foreground/85">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  {dash.image && (
                    <div className="mt-8 overflow-hidden rounded-2xl border border-border/40 bg-card/30 shadow-inner">
                      <img 
                        src={dash.image} 
                        alt={dash.title}
                        className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          // Also hide the parent wrapper if image fails to load
                          if (e.currentTarget.parentElement) {
                            e.currentTarget.parentElement.style.display = 'none';
                          }
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
