import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import { useGsapScrollFade } from "@/hooks/useGsapScrollFade";
import { useEffect } from "react";

const Projects = () => {
  useGsapScrollFade();

  useEffect(() => {
    document.title = "Projects | Neon Matrix Portfolio";
    const desc = "Showcase of projects: React, TypeScript, Tailwind, GSAP. Sci-fi hacker themed portfolio with smooth animations.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/projects`);
  }, []);

  return (
    <>
      <MatrixRain />
      <header>
        <Navbar />
      </header>

      <main className="relative">
        <section className="py-20 border-b border-border">
          <article className="container max-w-3xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Projects</h1>
            <p className="mt-4 text-muted-foreground">
              Explore a curated selection of projects demonstrating skills in React, TypeScript, Tailwind CSS, and GSAP.
            </p> {/* Projects page description */}
          </article>
        </section>

        <section className="py-16">
          <div className="container grid gap-8 md:grid-cols-2 items-start">
            {/* Example project cards */}
            <article className="reveal rounded-lg border border-primary/30 bg-secondary/20 p-6">
              <h2 className="text-xl font-semibold text-primary">Project One</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A cutting-edge web app built with React and Tailwind, featuring complex animations powered by GSAP.
              </p>
            </article>
            <article className="reveal rounded-lg border border-primary/30 bg-secondary/20 p-6">
              <h2 className="text-xl font-semibold text-primary">Project Two</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A performance-optimized SPA demonstrating advanced TypeScript and state management techniques.
              </p> {/* Another project description */}
            </article>
            {/* Add more projects as needed */}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="container text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Neon Matrix Portfolio Template.
        </div>
      </footer>
    </>
  );
};

export default Projects;
