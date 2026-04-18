/**
 * Index — landing page composition.
 * Each section is its own component for easy future edits.
 * Page-load reveal is handled via a one-time fade-in wrapper +
 * staggered "animate-fade-in-up" on hero children.
 */
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Delay one frame so the page-transition fade triggers cleanly
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`relative min-h-screen overflow-x-clip transition-opacity duration-700 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Bao Haong",
            jobTitle: "Business Analyst",
            description:
              "Business Analyst translating data into strategy, dashboards, and measurable outcomes.",
          }),
        }}
      />

      <ParticleBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
