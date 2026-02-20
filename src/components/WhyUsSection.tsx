import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 500, suffix: "+", label: "Projects Delivered", icon: "◎" },
  { number: 98, suffix: "%", label: "Client Satisfaction", icon: "★" },
  { number: 50, suffix: "+", label: "Brand Identities", icon: "◈" },
  { number: 3, suffix: "+", label: "Years of Excellence", icon: "⚡" },
];

const reasons = [
  { title: "Gen Z Aesthetic Mastery", desc: "We speak your audience's visual language fluently." },
  { title: "Strategy Meets Design", desc: "Every visual choice is backed by brand logic and market data." },
  { title: "End-to-End Execution", desc: "From concept to final file — we handle everything." },
  { title: "Premium Quality, Always", desc: "No compromises. Every project gets our A-game." },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display font-black text-5xl gradient-text">
      {count}
      {suffix}
    </span>
  );
}

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={ref} className="py-32 relative overflow-hidden">
      {/* BG */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow opacity-30" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal text-xs font-bold tracking-widest uppercase text-primary mb-4">
            Why DesignDrip
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Numbers That{" "}
            <span className="gradient-text">Don't Lie</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal glass-card neon-border rounded-2xl p-6 text-center">
              <div className="text-2xl neon-text mb-2">{stat.icon}</div>
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="reveal group service-card rounded-2xl p-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black font-display text-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                {i + 1}
              </div>
              <h3 className="font-display font-bold text-sm mb-2 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
