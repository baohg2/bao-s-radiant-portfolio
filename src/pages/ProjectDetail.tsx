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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-200 antialiased">
      {/* Top half with soft light blue background */}
      <div className="bg-[#cde4ff]/80 pb-16 pt-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-slate-800 font-semibold hover:text-slate-900 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          {/* Title and Subtitle */}
          <h1 className="font-sans text-4xl md:text-5xl lg:text-[2.75rem] font-bold tracking-tight text-slate-955 leading-[1.15]">
            {project.title}
          </h1>
          <p className="mt-5 text-[1.05rem] md:text-lg text-slate-800/90 leading-relaxed max-w-4xl font-normal">
            {project.subtitle}
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.primaryLink}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-slate-950 text-white hover:bg-slate-900 transition-all font-semibold rounded-full px-6 py-3.5 text-sm inline-flex items-center gap-2 shadow-sm"
            >
              {project.primaryLinkLabel}
              <ExternalLink className="h-4 w-4" />
            </a>
            {project.secondaryLink && project.secondaryLinkLabel && (
              <a
                href={project.secondaryLink}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-[#244b73] text-white hover:bg-[#1a3857] transition-all font-semibold rounded-full px-6 py-3.5 text-sm inline-flex items-center gap-2 shadow-sm"
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
                className="bg-white rounded-3xl p-6 md:p-7 text-center shadow-[0_10px_30px_-10px_rgba(36,75,115,0.08)] border border-slate-100/50 flex flex-col justify-center items-center min-h-[160px]"
              >
                <div className="font-sans text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-3">
                  {kpi.value}
                </div>
                <div className="text-[13px] md:text-sm text-slate-600 leading-relaxed font-normal">
                  {kpi.description}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">
              Tech stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/95 border border-slate-200/90 rounded-full px-4.5 py-1.5 text-xs font-semibold text-slate-800 shadow-sm hover:border-slate-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom half with clean white background for result summary */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-slate-950 mb-8">
            Result summary
          </h2>
          <div className="space-y-8 max-w-4xl">
            {project.results.map((result, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-slate-950 text-white font-bold text-sm mt-0.5">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">
                    {result.title}
                  </h3>
                  <p className="text-[1.05rem] text-slate-700 leading-relaxed mt-2">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
