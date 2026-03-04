import { useEffect, useRef } from "react";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute top-1/2 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(82 85% 55%)" }} />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Bold typography */}
          <div>
            <div className="reveal text-xs font-bold tracking-widest uppercase text-primary mb-4">
              About DesignDrip
            </div>
            <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Built for Brands{" "}
              <span className="gradient-text">That Want</span>{" "}
              Attention.
            </h2>
            <div className="reveal w-16 h-1 rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" }} />
            <p className="reveal text-muted-foreground text-lg leading-relaxed mb-6">
              DesignDrip turns ideas into scroll-stopping visuals that make your audience stop, stare, and share. We're not a regular design studio — we're your brand's creative weapon.
            </p>
            <p className="reveal text-muted-foreground leading-relaxed mb-8">
              From startup logos to full brand growth strategies, we craft every pixel with intention. We live at the intersection of aesthetics and strategy — making sure your brand doesn't just look good, it performs.
            </p>
            <div className="reveal flex gap-8">
              {[
                { num: "500+", label: "Projects" },
                { num: "50+", label: "Brands" },
                { num: "3+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-black gradient-text">{stat.num}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "✦", title: "Strategy First", desc: "Every design decision is backed by research and brand positioning." },
              { icon: "◈", title: "Pixel Perfect", desc: "We obsess over every detail so your brand stands out in a crowded market." },
              { icon: "⚡", title: "Fast Delivery", desc: "Premium quality with turnaround times that keep your momentum going." },
              { icon: "∞", title: "Full Growth", desc: "Not just design — we help you grow, market, and scale your brand." },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`reveal service-card rounded-2xl p-6 ${i === 1 || i === 2 ? "mt-8" : ""}`}
              >
                <div className="text-2xl mb-3 neon-text">{card.icon}</div>
                <h3 className="font-display font-bold text-sm mb-2 text-foreground">{card.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
