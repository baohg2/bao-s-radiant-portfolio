/**
 * About — story + quick highlights, with parallax avatar card.
 */
import { Coffee, Lightbulb, LineChart, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { icon: LineChart, label: "5+ years analyzing", sub: "B2B SaaS & retail" },
  { icon: Users, label: "30+ stakeholders", sub: "Aligned across teams" },
  { icon: Lightbulb, label: "120+ insights", sub: "Shipped to product" },
  { icon: Coffee, label: "∞ cups of coffee", sub: "Fueling the work" },
];

const About = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding relative">
      <SectionHeading
        eyebrow="About"
        title="Curious by nature, structured by craft."
        description="I sit between business and tech — translating fuzzy questions into crisp requirements, and turning rows of data into decisions everyone can rally behind."
      />

      <div
        ref={ref}
        className={`mx-auto grid max-w-5xl items-center gap-10 transition-all duration-700 md:grid-cols-5 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Avatar / portrait card */}
        <div className="md:col-span-2">
          <div className="glass-card hover-lift relative overflow-hidden rounded-[2rem] p-2">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.7rem] bg-gradient-hero animate-gradient-shift bg-[length:200%_200%]">
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-display text-8xl font-semibold text-white/85 drop-shadow-md">
                  BH
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio + highlights */}
        <div className="md:col-span-3">
          <div className="space-y-4 text-base leading-relaxed text-foreground/80 md:text-lg">
            <p>
              I'm <strong className="text-foreground">Bao Hoang</strong>, a Business Analyst who
              loves the messy middle — the part where data, people, and process meet. I've spent
              the last few years helping product, ops and growth teams find the signal in noisy
              dashboards and turn it into roadmaps that actually ship.
            </p>
            <p>
              My toolkit is part SQL, part stakeholder empathy. I believe the best analysis is
              the one that gets used: clean visuals, plain language, and a recommendation a tired
              executive can act on in 30 seconds.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label, sub }) => (
              <li
                key={label}
                className="glass-card hover-lift rounded-2xl p-4"
              >
                <Icon className="mb-2 h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
