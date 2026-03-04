import { useEffect, useRef, useState } from "react";

const plans = [
  {
    emoji: "🥤",
    name: "STARTER DRIP",
    price: "₹4,999",
    description: "Perfect for new businesses & startups ready to enter the market.",
    features: [
      "1 Custom Logo (3 Creative Concepts)",
      "Brand Color Palette",
      "Business Card Design",
      "3 Social Media Post Designs",
      "2 Revision Rounds",
    ],
    delivery: "5–7 Working Days",
    bestFor: "Small brands, personal brands, local businesses",
    cta: "Start Your Brand Journey",
    popular: false,
  },
  {
    emoji: "🚀",
    name: "GROWTH DRIP",
    price: "₹14,999",
    description: "For brands ready to look premium & grow faster.",
    features: [
      "Premium Logo (5 Concepts)",
      "Complete Brand Identity Kit",
      "Packaging Design (1 Product)",
      "9 Social Media Posts",
      "2 Reel Edits",
      "Visiting Card + Letterhead",
      "4 Revision Rounds",
    ],
    delivery: "10–14 Working Days",
    bestFor: "Growing startups & product brands",
    cta: "Scale My Brand",
    popular: true,
  },
  {
    emoji: "👑",
    name: "ULTIMATE BRAND DRIP",
    price: "₹34,999",
    description: "Full brand transformation. From idea to domination.",
    features: [
      "Brand Strategy + Identity",
      "Logo + Brand Guidelines",
      "Packaging (Up to 3 Products)",
      "5-Page Website Design",
      "15 Social Media Posts",
      "5 Reel Edits",
      "Custom Invitation Design (Optional)",
      "Unlimited Revisions (Within Scope)",
    ],
    delivery: "3–4 Weeks",
    bestFor: "Serious brands & founders who want impact",
    cta: "Build My Empire",
    popular: false,
  },
];

const addons = [
  { name: "Reel Editing", price: "₹999 / Reel" },
  { name: "Logo Design Only", price: "₹2,999" },
  { name: "Packaging Design", price: "₹3,999" },
  { name: "Website Design", price: "Starting ₹12,999" },
  { name: "App UI Design", price: "Starting ₹15,999" },
  { name: "Invitation Design", price: "₹1,499" },
];

const socialPlans = [
  {
    name: "BASIC SOCIAL PLAN",
    price: "₹8,999",
    period: "/ Month",
    features: ["12 Posts", "4 Reels", "Content Direction", "Caption Writing"],
  },
  {
    name: "PREMIUM SOCIAL PLAN",
    price: "₹19,999",
    period: "/ Month",
    features: [
      "20 Posts",
      "8 Reels",
      "Full Account Handling",
      "Growth Strategy",
      "Monthly Performance Review",
    ],
  },
];

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<"plans" | "social">("plans");

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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={ref} className="py-32 relative overflow-hidden">
      {/* Glow accents */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
        style={{ background: "hsl(82 85% 55%)" }}
      />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal text-xs font-bold tracking-widest uppercase text-primary mb-4">
            Pricing
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Plans That{" "}
            <span className="gradient-text">Match Your Ambition</span>
          </h2>
          <p className="reveal text-muted-foreground mt-4 max-w-xl mx-auto">
            Transparent pricing. No hidden fees. Just pure creative firepower.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="reveal flex justify-center mb-14">
          <div className="inline-flex rounded-full p-1 neon-border">
            <button
              onClick={() => setTab("plans")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                tab === "plans"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Brand Packages
            </button>
            <button
              onClick={() => setTab("social")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                tab === "social"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Social Media Plans
            </button>
          </div>
        </div>

        {/* Brand packages */}
        {tab === "plans" && (
          <>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`reveal service-card rounded-2xl p-8 relative group flex flex-col transition-all duration-500 hover:scale-[1.03] ${
                    plan.popular ? "neon-border" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase">
                      🔥 Most Popular
                    </div>
                  )}

                  {/* Emoji & name */}
                  <div className="text-4xl mb-3">{plan.emoji}</div>
                  <h3 className="font-display font-black text-lg tracking-wide text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="font-display text-4xl font-black gradient-text">
                      {plan.price}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5 shrink-0">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Delivery & best for */}
                  <div className="text-xs text-muted-foreground space-y-1 mb-6 border-t border-border/30 pt-4">
                    <p>
                      <span className="text-foreground font-semibold">Delivery:</span>{" "}
                      {plan.delivery}
                    </p>
                    <p>
                      <span className="text-foreground font-semibold">Best For:</span>{" "}
                      {plan.bestFor}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`block text-center px-6 py-3 rounded-full font-display font-bold text-sm transition-all duration-300 ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:opacity-90 animate-pulse-glow"
                        : "neon-border text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {plan.cta} →
                  </a>
                </div>
              ))}
            </div>

            {/* Add-on services */}
            <div className="max-w-4xl mx-auto">
              <div className="reveal text-center mb-8">
                <h3 className="font-display text-2xl sm:text-3xl font-black">
                  🎥 <span className="gradient-text">Add-On Services</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Need something custom? Add it anytime.
                </p>
              </div>
              <div className="reveal grid grid-cols-2 sm:grid-cols-3 gap-4">
                {addons.map((addon) => (
                  <div
                    key={addon.name}
                    className="glass-card rounded-2xl p-5 text-center hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                      {addon.name}
                    </div>
                    <div className="text-xs font-bold text-primary">
                      {addon.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Social media plans */}
        {tab === "social" && (
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {socialPlans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`reveal service-card rounded-2xl p-8 relative flex flex-col transition-all duration-500 hover:scale-[1.03] ${
                  idx === 1 ? "neon-border" : ""
                }`}
              >
                {idx === 1 && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase">
                    💎 Recommended
                  </div>
                )}

                <div className="text-4xl mb-3">💎</div>
                <h3 className="font-display font-black text-lg tracking-wide text-foreground mb-1">
                  {plan.name}
                </h3>

                <div className="mb-6 mt-2">
                  <span className="font-display text-4xl font-black gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-0.5 shrink-0">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center px-6 py-3 rounded-full font-display font-bold text-sm transition-all duration-300 ${
                    idx === 1
                      ? "bg-primary text-primary-foreground hover:opacity-90 animate-pulse-glow"
                      : "neon-border text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Get Started →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
