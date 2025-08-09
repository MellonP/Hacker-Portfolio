import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapScrollFade = () => {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".reveal");

    const animations: ScrollTrigger[] = [];

    elements.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 16 });
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
        },
      });
      animations.push(st);
    });

    return () => {
      animations.forEach((st) => st.kill());
    };
  }, []);
};
