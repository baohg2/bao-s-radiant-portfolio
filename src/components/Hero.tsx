/**
 * Hero — landing section with typewriter title, gradient blobs, and parallax orbs.
 */
import { useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

const Hero = () => {
  const typed = useTypewriter({
    phrases: [
      "Business Analyst.",
      "Data Storyteller.",
      "Strategy Partner.",
      "Insight Architect.",
    ],
  });

  // Simple parallax based on scroll position
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
      aria-label="Introduction"
    >
      {/* Parallax gradient blobs */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-pastel-lavender opacity-60 blur-3xl animate-blob"
        style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0)` }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-28 top-40 h-[380px] w-[380px] rounded-full bg-pastel-peach opacity-60 blur-3xl animate-blob"
        style={{
          transform: `translate3d(0, ${scrollY * 0.15}px, 0)`,
          animationDelay: "4s",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/3 h-[320px] w-[320px] rounded-full bg-pastel-mint opacity-50 blur-3xl animate-blob"
        style={{
          transform: `translate3d(0, ${-scrollY * 0.1}px, 0)`,
          animationDelay: "8s",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div
          className="mb-7 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-xs font-medium tracking-wide text-foreground/70 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Available for new opportunities
        </div>

        <h1
          className="font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem] animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          Hi, I'm <span className="text-gradient">Bao Haong</span>
          <br />
          <span className="block pt-3 typewriter-cursor text-foreground/85" aria-live="polite">
            {typed || "\u00A0"}
          </span>
        </h1>

        <p
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          I turn messy data and ambiguous problems into clear strategies, elegant dashboards,
          and decisions teams can actually act on.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:scale-105 hover:shadow-glow"
          >
            View my work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="rounded-full glass-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:scale-105"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-foreground/50 transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default Hero;
