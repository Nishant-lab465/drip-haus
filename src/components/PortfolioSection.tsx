import { useEffect, useRef, useState } from "react";
import port1 from "@/assets/port-1.jpg";
import port2 from "@/assets/port-2.jpg";
import port3 from "@/assets/port-3.jpg";
import port4 from "@/assets/port-4.jpg";
import port5 from "@/assets/port-5.jpg";
import port6 from "@/assets/port-6.jpg";

const categories = ["All", "Branding", "Packaging", "Invitations", "App Design", "Web"];

const projects = [
  { img: port1, title: "Neon Crystal Logo", cat: "Branding", size: "tall" },
  { img: port2, title: "Luxe Cosmetics Pack", cat: "Packaging", size: "normal" },
  { img: port3, title: "Royal Wedding Suite", cat: "Invitations", size: "normal" },
  { img: port4, title: "Dark Mode App UI", cat: "App Design", size: "tall" },
  { img: port5, title: "Globo Brand Identity", cat: "Branding", size: "normal" },
  { img: port6, title: "Agency Website", cat: "Web", size: "normal" },
];

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.cat === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
    <section id="portfolio" ref={ref} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal text-xs font-bold tracking-widest uppercase text-primary mb-4">
            Our Work
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Work That <span className="gradient-text">Speaks Loud</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground animate-pulse-glow"
                  : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="reveal break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ height: project.size === "tall" ? "420px" : "280px" }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="text-xs text-primary font-bold tracking-widest uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                  {project.cat}
                </div>
                <h3 className="font-display font-black text-xl text-foreground translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
                <div className="mt-2 text-primary text-sm font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  View Project →
                </div>
              </div>
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_0_30px_hsl(270_85%_62%/0.3)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
