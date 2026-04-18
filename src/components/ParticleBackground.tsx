/**
 * ParticleBackground — soft floating pastel orbs rendered on canvas.
 * Lightweight (no dependencies), respects prefers-reduced-motion.
 */
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hue: number;
  alpha: number;
}

const PALETTE = [265, 18, 155, 340, 200, 45]; // pastel hues

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      const count = Math.min(40, Math.floor((window.innerWidth * window.innerHeight) / 28000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 40 + Math.random() * 90,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        hue: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        alpha: 0.18 + Math.random() * 0.18,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grad.addColorStop(0, `hsla(${p.hue}, 85%, 80%, ${p.alpha})`);
        grad.addColorStop(1, `hsla(${p.hue}, 85%, 80%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -p.r) p.x = window.innerWidth + p.r;
          if (p.x > window.innerWidth + p.r) p.x = -p.r;
          if (p.y < -p.r) p.y = window.innerHeight + p.r;
          if (p.y > window.innerHeight + p.r) p.y = -p.r;
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
};

export default ParticleBackground;
