/**
 * SectionHeading — shared label + title for major sections.
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ eyebrow, title, description, align = "center" }: Props) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`mb-14 max-w-2xl transition-all duration-700 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
