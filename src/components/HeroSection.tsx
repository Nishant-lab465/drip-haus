import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      glowRef.current.style.transform = `translate(${clientX - 300}px, ${clientY - 300}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/75" />
      
      {/* Mouse-follow glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full opacity-25 transition-transform duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, hsl(68 68% 55% / 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15"
        style={{ background: "hsl(68 68% 55%)" }} />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-8"
        style={{ background: "hsl(80 90% 60%)" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full neon-border text-xs font-semibold tracking-widest uppercase text-primary mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          India's Most Creative Agency
        </div>

        {/* Main headline */}
        <h1
          className={`font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight mb-6 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-foreground">We Don't</span>
          <span className="block gradient-text">Just Design.</span>
          <span
            className="block text-foreground glitch"
            data-text="We Create Drip."
          >
            We Create Drip.
          </span>
        </h1>

        {/* Subtext */}
        <p
          className={`text-lg sm:text-xl text-muted-foreground font-light tracking-wide mb-10 transition-all duration-1000 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Elevate Your Brand Presence.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#contact"
            className="group px-8 py-4 rounded-full font-display font-bold text-base bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            Start Your Brand
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full font-display font-bold text-base glass-card neon-border text-foreground hover:text-primary hover:scale-105 transition-all duration-300"
          >
            View Our Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-16 flex flex-col items-center gap-2 text-muted-foreground transition-all duration-1000 delay-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute bottom-12 right-8 hidden lg:block animate-float">
        <div className="glass-card neon-border rounded-2xl p-4 text-center">
          <div className="font-display font-black text-2xl gradient-text">500+</div>
          <div className="text-xs text-muted-foreground">Brands Elevated</div>
        </div>
      </div>
    </section>
  );
}
