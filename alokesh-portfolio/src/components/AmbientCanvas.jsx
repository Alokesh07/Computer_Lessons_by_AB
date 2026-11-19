import { useEffect, useRef } from "react";

export default function AmbientCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let pointer = { x: -1000, y: -1000 };
    let stars = [];

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      stars = Array.from({ length: Math.min(Math.floor((width * height) / 12500), 110) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.006 + 0.002
      }));
    }

    function draw(time = 0) {
      context.clearRect(0, 0, width, height);
      const themeRoot = document.querySelector(".portfolio") || document.documentElement;
      const accent = getComputedStyle(themeRoot).getPropertyValue("--accent-rgb").trim();

      stars.forEach((star) => {
        const distance = Math.hypot(star.x - pointer.x, star.y - pointer.y);
        const proximity = Math.max(0, 1 - distance / 190);
        const pulse = reducedMotion ? 0.7 : 0.45 + Math.sin(time * star.speed + star.phase) * 0.25;
        const alpha = Math.min(1, pulse + proximity * 0.45);
        context.beginPath();
        context.arc(star.x, star.y, star.radius + proximity * 1.4, 0, Math.PI * 2);
        context.fillStyle = `rgba(${accent || "108, 255, 215"}, ${alpha})`;
        context.fill();
      });

      if (!reducedMotion) frame = requestAnimationFrame(draw);
    }

    function trackPointer(event) {
      pointer = { x: event.clientX, y: event.clientY };
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", trackPointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", trackPointer);
    };
  }, []);

  return <canvas aria-hidden="true" className="ambient-canvas" ref={canvasRef} />;
}
