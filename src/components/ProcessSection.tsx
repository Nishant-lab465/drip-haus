import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    icon: "◉",
    title: "Discovery",
    desc: "We deep-dive into your brand, audience, competition, and goals to build a bulletproof creative brief.",
    color: "hsl(270 85% 62%)",
  },
  {
    num: "02",
    icon: "◈",
    title: "Design",
    desc: "Our creatives craft mood boards, concepts, and visual directions that align your brand with its future.",
    color: "hsl(280 90% 65%)",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Develop",
    desc: "We refine, iterate, and polish every asset — from pixel-perfect files to final production-ready deliverables.",
    color: "hsl(290 100% 70%)",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Elevate",
    desc: "Your brand goes live, and we support launch strategy to ensure maximum impact from day one.",
    color: "hsl(260 80% 70%)",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 200);
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
    <section id="process" ref={ref} className="py-32 relative overflow-hidden">
      {/* BG line */}
      <div className="pointer-events-none absolute left-1/2 top-40 bottom-40 w-px -translate-x-1/2 hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(270 85% 62% / 0.3), transparent)" }} />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal text-xs font-bold tracking-widest uppercase text-primary mb-4">
            Our Process
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            How We Make{" "}
            <span className="gradient-text">Magic Happen</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="reveal group relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                  style={{ background: `linear-gradient(to right, ${step.color}40, transparent)` }} />
              )}

              <div className="service-card rounded-2xl p-6 relative z-10">
                {/* Number */}
                <div className="font-display font-black text-5xl opacity-10 mb-2" style={{ color: step.color }}>
                  {step.num}
                </div>
                {/* Icon */}
                <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: step.color }}>
                  {step.icon}
                </div>
                {/* Title */}
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                {/* Desc */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>

                {/* Glow dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full group-hover:animate-pulse-glow transition-all duration-300"
                  style={{ background: step.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
