export default function FooterSection() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <div className="font-display text-2xl font-black mb-1">
              <span className="gradient-text">Design</span>
              <span className="text-foreground">Drip</span>
              <span className="text-primary">.</span>
              <span className="text-muted-foreground text-sm">in</span>
            </div>
            <div className="text-xs text-muted-foreground">
              We Don't Just Design. We Create Drip.
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {["About", "Services", "Work", "Process", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: "📸", label: "Instagram", href: "https://instagram.com/designdrip.in" },
              { icon: "✉", label: "Email", href: "mailto:hello@designdrip.in" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-base hover:border-primary/50 hover:scale-110 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <span>© 2026 DesignDrip.in — All rights reserved.</span>
          <span>
            Made with <span className="text-primary">♥</span> in India
          </span>
        </div>
      </div>
    </footer>
  );
}
