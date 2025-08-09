import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import { useGsapScrollFade } from "@/hooks/useGsapScrollFade";
import { useEffect } from "react";

const About = () => {
  useGsapScrollFade();

  useEffect(() => {
    document.title = "About | Neon Matrix Portfolio"; // Set the document title
    const desc = "About the developer: React, TypeScript, Tailwind, GSAP. Sci‑fi hacker aesthetics with performance."; // Description of the page
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
    canonical.setAttribute("href", `${window.location.origin}/about`);
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">About Me</h1>
            <p className="mt-4 text-muted-foreground">
              I build immersive interfaces where aesthetics meet performance. My toolkit: React, TypeScript,
              Tailwind CSS, and GSAP for motion. I care deeply about accessibility, DX, and clean architecture.
            </p> // Description of the developer
          </article>
        </section>

        <section className="py-16">
          <div className="container grid gap-8 md:grid-cols-2 items-start">
            <article className="reveal rounded-lg border border-primary/30 bg-secondary/20 p-6">
              <h2 className="text-xl font-semibold text-primary">Philosophy</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Design should serve the narrative. Animations guide attention, code tells the story. I prefer
                composable components, robust hooks, and pragmatic patterns.
              </p> // Philosophy of the developer
            </article>
            <article className="reveal rounded-lg border border-primary/30 bg-secondary/20 p-6">
              <h2 className="text-xl font-semibold text-primary">Capabilities</h2> // Capabilities of the developer
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm font-mono">
                {["React", "TypeScript", "Tailwind", "GSAP", "Shadcn", "Vite"].map((s) => (
                  <li key={s} className="rounded border border-border bg-secondary/30 px-3 py-2">{s}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="container text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Neon Matrix Portfolio Template.
        </div> // Footer with current year
      </footer>
    </>
  );
};

export default About;
