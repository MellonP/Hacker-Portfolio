import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useGsapScrollFade } from "@/hooks/useGsapScrollFade";
import { Mail } from "lucide-react"; 

const projects = [
  { title: "Quantum Cipher", desc: "GPU-accelerated cipher playground with real-time visualization.", href: "#" },
  { title: "Neon HUD", desc: "UI kit for sci-fi dashboards built with React + Tailwind.", href: "#" },
  { title: "Ghost Proxy", desc: "Lightweight proxy rotator with live metrics UI.", href: "#" },
  { title: "Matrix Parser", desc: "Stream parser for log pipelines with anomaly flags.", href: "#" },
  { title: "Grid Sentinel", desc: "Policy-based firewall visualizer and rule tester.", href: "#" },
  { title: "Node Radar", desc: "Realtime network map with WebGL links and alerts.", href: "#" },
];

const Index = () => {
  useGsapScrollFade();

  return (
    <>
      <MatrixRain />
      <header>
        <Navbar />
      </header>

      <main id="home" className="relative">
        {/* Hero */}
        <section className="relative py-24 md:py-32">
          <article className="container text-center max-w-3xl mx-auto reveal">
            <span className="inline-block rounded border border-primary/30 bg-secondary/40 px-3 py-1 text-xs tracking-widest text-primary uppercase">
              Hacker Portfolio
            </span> {/* Hero tag line */}
            <h1
              className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight glitch"
              data-text="Neon Matrix Developer"
            >
              Neon Matrix Developer
            </h1> {/* Hero title */}
            <p className="mt-4 text-muted-foreground">
              Dark sci-fi template with Matrix code rain, GSAP scroll reveals, and a neon green accent system.
              Fast, responsive, and easy to customize.
            </p> {/* Hero description */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#projects">
                <Button className="bg-primary text-primary-foreground hover:opacity-90">
                  View Projects
                </Button> {/* Button to view projects */}
              </a>
              <a href="#contact">
                <Button variant="outline">Contact</Button>
              </a>
            </div>
          </article>
        </section>

        {/* About */}
        <section id="about" className="py-20 border-t border-border">
          <div className="container grid gap-10 md:grid-cols-2 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-bold text-primary">About Me</h2>
              <p className="mt-3 text-muted-foreground">
                I craft immersive, performant interfaces with React, Tailwind, and GSAP. My work blends
                hacker aesthetics with clean architecture and accessibility.
              </p> {/* Brief about the developer */}
              <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm font-mono">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind",
                  "GSAP",
                  "WebGL",
                  "Node.js",
                ].map((s) => (
                  <li key={s} className="rounded border border-border bg-secondary/30 px-3 py-2">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-4">
      
                <a href="#contact" aria-label="Email" className="text-muted-foreground hover:text-primary">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="reveal">
              <div className="rounded-lg border border-primary/30 bg-secondary/20 p-5 font-mono">
                <p className="text-xs text-primary">$ whoami</p>
                <pre className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap">{`> UI/Frontend Engineer
> Focus: React + Animations + Design Systems
> Motto: Beauty in motion. Performance in silence.`}</pre>
                <p className="mt-5 text-xs text-primary">$ skills --top</p>
                <pre className="mt-2 text-sm text-muted-foreground">{`React  ██████████  Tailwind  █████████  GSAP  ████████`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 border-t border-border">
          <div className="container">
            <h2 className="reveal text-3xl font-bold text-primary">Projects</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="reveal group overflow-hidden rounded-lg border border-border bg-secondary/20 transition-colors hover:border-primary/40"
                >
                  <img
                    src="/placeholder.svg"
                    alt={`${p.title} project screenshot — hacker portfolio neon matrix style`}
                    loading="lazy"
                    className="h-40 w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                    <a
                      href={p.href}
                      className="mt-4 inline-block text-sm text-primary story-link"
                      aria-label={`Open ${p.title}`}
                    >
                      View details →
                    </a> {/* Link to project details */}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-border">
          <article className="container max-w-2xl">
            <h2 className="reveal text-3xl font-bold text-primary">Contact</h2>
            <p className="reveal mt-2 text-muted-foreground">
              Have a project in mind? Send a message and I’ll get back to you.
            </p>
            <form
              className="reveal mt-6 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message captured (demo)");
              }}
            >
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm">Name</label>
                <Input id="name" name="name" placeholder="Neo" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm">Email</label>
                <Input id="email" name="email" type="email" placeholder="neo@matrix.io" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm">Message</label>
                <Textarea id="message" name="message" placeholder="I need a futuristic UI..." required />
              </div>
              <div>
                <Button type="submit" className="bg-primary text-primary-foreground hover:opacity-90">Send</Button>
              </div>
            </form>
          </article>
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

export default Index;
