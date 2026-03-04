import { useEffect, useRef } from "react";

export default function CTASection() {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden noise-overlay">
      {/* Glow bg */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(82 85% 55% / 0.15) 0%, transparent 70%)" }} />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full neon-border text-xs font-semibold tracking-widest uppercase text-primary mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Let's Create Together
          </div>

          {/* Headline */}
          <h2 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight mb-6">
            Ready To Make
            <br />
            <span className="gradient-text">Your Brand Drip?</span>
          </h2>

          <p className="reveal text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Let's build something that turns heads, stops thumbs, and makes your competition sweat.
          </p>

          {/* CTA */}
          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="mailto:hello@designdrip.in"
              className="group px-10 py-5 rounded-full font-display font-bold text-lg bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              Let's Build Something Legendary
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Contact cards */}
          <div className="reveal grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: "📧", label: "Email", value: "hello@designdrip.in" },
              { icon: "📸", label: "Instagram", value: "@designdrip.in" },
              { icon: "💬", label: "WhatsApp", value: "+91 00000 00000" },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-4 text-center hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-xs font-medium text-foreground">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
