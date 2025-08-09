import { useEffect } from "react";
import Index from "./Index";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Neon Matrix Portfolio";
    const desc = "Neon hacker-style React + Tailwind portfolio with Matrix code rain and GSAP animations.";
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
    canonical.setAttribute("href", `${window.location.origin}/`);
  }, []);

  return <Index />;
};

export default Home;
