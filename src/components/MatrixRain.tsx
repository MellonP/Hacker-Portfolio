import { useEffect, useRef } from "react";

interface MatrixRainProps {
  speed?: number; // lower is faster
  density?: number; // font size in px
}

const MatrixRain = ({ speed = 50, density = 14 }: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    let fontSize = density;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = new Array(columns).fill(1);

    const characters = "01アカサタナハマヤラワ0123456789".split("");

    ctx.font = `${fontSize}px monospace`;

    const draw = () => {
      if (!canvas) return;
      // fade the canvas slightly – creates trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // neon green for the rain
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--ring")
        ? `hsl(${getComputedStyle(document.documentElement).getPropertyValue("--primary")})`
        : "#39ff14";

      drops.forEach((y, i) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] = y + 1;
      });

      rafRef.current = window.setTimeout(() => requestAnimationFrame(draw), speed);
    };

    const onResize = () => {
      resize();
      fontSize = density;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
      ctx.font = `${fontSize}px monospace`;
    };

    window.addEventListener("resize", onResize);
    draw();

    return () => {
      if (rafRef.current) window.clearTimeout(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [speed, density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full opacity-40 [image-rendering:pixelated]"
      aria-hidden="true"
    />
  );
};

export default MatrixRain;
