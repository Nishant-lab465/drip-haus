import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card border-b border-border/50 py-3"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          {/* DC Monogram - exact logo match */}
          <svg
            viewBox="0 0 620 420"
            className="w-12 h-8 transition-all duration-300 group-hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" width="620" height="420" fill="#0a0a0a" rx="8" />
            <rect x="14" y="14" width="592" height="392" fill="none" stroke="white" strokeWidth="10" rx="4" />
            <rect x="36" y="36" width="90" height="348" fill="white" />
            <path d="M 126 36 Q 310 36 310 210 Q 310 384 126 384 L 126 36 Z" fill="white" />
            <path d="M 150 90 Q 256 90 256 210 Q 256 330 150 330 L 150 90 Z" fill="#0a0a0a" />
            <path d="M 494 36 Q 584 36 584 120 L 530 120 Q 530 90 494 90 Q 364 90 364 210 Q 364 330 494 330 Q 530 330 530 300 L 584 300 Q 584 384 494 384 Q 310 384 310 210 Q 310 36 494 36 Z" fill="white" />
          </svg>
          <span className="font-display text-lg font-black tracking-tight">
            <span className="gradient-text">Design Drip</span>
            <span className="text-primary">.in</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 animate-pulse-glow"
          >
            Start Your Brand →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="glass-card mx-4 mt-2 rounded-2xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-5 py-2 rounded-full text-sm font-semibold bg-primary text-primary-foreground text-center"
          >
            Start Your Brand →
          </a>
        </div>
      </div>
    </nav>
  );
}
