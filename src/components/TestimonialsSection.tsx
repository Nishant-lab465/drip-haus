import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Aryan Mehta",
    role: "Founder, LuxeThreads",
    text: "DesignDrip transformed our entire brand identity. Our Instagram engagement went up 300% after the rebrand. These guys are absolute pros.",
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    role: "CEO, Botanica Skincare",
    text: "The packaging they designed for us has people DM'ing us asking where they can buy just the box. That's how good it is. Highly recommend.",
    avatar: "PS",
  },
  {
    name: "Rohan Das",
    role: "Creative Director, Fuse Studios",
    text: "Fast, creative, and they just GET the Gen Z aesthetic. Our app design got featured on multiple design platforms. Incredible team.",
    avatar: "RD",
  },
  {
    name: "Sneha Kapoor",
    role: "Wedding Planner, Eternally Yours",
    text: "Every single invitation suite they create is a masterpiece. My clients always ask who designed their invites. Game changing work.",
    avatar: "SK",
  },
  {
    name: "Vikram Nair",
    role: "Founder, Drip Athletics",
    text: "Our brand went from zero to viral in 3 months with DesignDrip's strategy + design combo. The ROI is unmatched.",
    avatar: "VN",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Scrolling marquee background text */}
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden opacity-[0.03]">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="font-display font-black text-[120px]">
              DESIGNDRIP DESIGNDRIP DESIGNDRIP&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal text-xs font-bold tracking-widest uppercase text-primary mb-4">
            Client Love
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl font-black leading-tight">
            Brands That <span className="gradient-text">Trust the Drip</span>
          </h2>
        </div>

        {/* Active testimonial */}
        <div className="reveal max-w-3xl mx-auto mb-12">
          <div className="glass-card neon-border rounded-3xl p-8 sm:p-12 text-center transition-all duration-500">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array(5).fill(null).map((_, i) => (
                <span key={i} className="text-primary text-lg">★</span>
              ))}
            </div>
            <blockquote className="font-display text-xl sm:text-2xl font-bold text-foreground leading-relaxed mb-8">
              "{testimonials[current].text}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-sm text-primary-foreground"
                style={{ background: "linear-gradient(135deg, hsl(82 85% 55%), hsl(90 80% 60%))" }}>
                {testimonials[current].avatar}
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground text-sm">{testimonials[current].name}</div>
                <div className="text-xs text-muted-foreground">{testimonials[current].role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
