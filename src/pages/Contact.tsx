import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import { useGsapScrollFade } from "@/hooks/useGsapScrollFade";
import { useEffect } from "react";

const Contact = () => {
  useGsapScrollFade();

  useEffect(() => {
    document.title = "Contact | Neon Matrix Portfolio";
    const desc = "Contact page: Get in touch via email or social media. Neon Matrix Portfolio contact details.";
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
    canonical.setAttribute("href", `${window.location.origin}/contact`);
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Contact Me</h1>
            <p className="mt-4 text-muted-foreground">
              Feel free to reach out for collaborations, inquiries, or just a friendly chat.
            </p> {/* Contact page description */}
          </article>
        </section>

        <section className="py-16">
          <div className="container max-w-md mx-auto reveal rounded-lg border border-primary/30 bg-secondary/20 p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">Get In Touch</h2>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded border border-border bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded border border-border bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full rounded border border-border bg-background/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
              <button
                type="submit"
                className="inline-block rounded bg-primary px-6 py-2 text-sm font-semibold text-background hover:bg-primary/90"
              >
                Send Message
              </button> {/* Submit button for the contact form */}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="container text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Neon Matrix Portfolio Template.
        </div> {/* Footer with current year */}
      </footer>
    </>
  );
};

export default Contact;
