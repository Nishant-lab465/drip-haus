import { useEffect, useRef } from "react";

const services = [
  {
    icon: "◎",
    title: "Logo Design",
    desc: "Iconic logos that become the face of your brand. Timeless, versatile, unforgettable.",
    tag: "Brand Identity",
  },
  {
    icon: "▣",
    title: "Product Packaging",
    desc: "Packaging that sells on the shelf and online. We design unboxing experiences.",
    tag: "Packaging",
  },
  {
    icon: "✉",
    title: "All Invitations",
    desc: "Wedding, birthday, corporate & more — every invite crafted with luxury and personality.",
    tag: "Print Design",
  },
  {
    icon: "◈",
    title: "Branding & Identity",
    desc: "Complete brand systems: colors, fonts, guidelines, tone — everything that makes you, you.",
    tag: "Strategy",
  },
  {
    icon: "▶",
    title: "Reel Editing",
    desc: "Scroll-stopping Instagram and YouTube Reels that make people stop mid-swipe.",
    tag: "Motion",
  },
  {
    icon: "⬡",
    title: "App Design",
    desc: "Beautiful, intuitive mobile and web app UIs that users love to interact with.",
    tag: "UI/UX",
  },
  {
    icon: "◻",
    title: "Website Design",
    desc: "High-converting, visually stunning websites that work as hard as you do.",
    tag: "Web",
  },
  {
    icon: "⟁",
    title: "Brand Growth Strategy",
    desc: "Full 360° brand growth — from identity to marketing to scaling. We take you there.",
    tag: "Strategy",
  },
];

export default function ServicesSection() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="py-32 relative overflow-hidden">
      {/* bg accent */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(90 80% 60%)" }} />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal text-xs font-bold tracking-widest uppercase text-primary mb-4">
            What We Do
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Services That{" "}
            <span className="gradient-text">Hit Different</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal service-card rounded-2xl p-6 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-xl mb-4 text-xl neon-text transition-all duration-300 group-hover:scale-110"
                style={{ background: "hsl(82 85% 55% / 0.1)" }}>
                {service.icon}
              </div>
              {/* Tag */}
              <div className="text-xs text-primary font-semibold tracking-widest uppercase mb-2">
                {service.tag}
              </div>
              {/* Title */}
              <h3 className="font-display font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              {/* Desc */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
              {/* Arrow */}
              <div className="mt-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1 text-sm font-semibold">
                Explore →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
