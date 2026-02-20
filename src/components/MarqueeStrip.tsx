const items = [
  "Logo Design",
  "✦",
  "Brand Identity",
  "✦",
  "Product Packaging",
  "✦",
  "Invitation Design",
  "✦",
  "Reel Editing",
  "✦",
  "App Design",
  "✦",
  "Website Design",
  "✦",
  "Brand Growth",
  "✦",
];

export default function MarqueeStrip() {
  return (
    <div className="py-4 overflow-hidden border-y border-border/50 relative">
      <div className="flex">
        <div className="animate-marquee flex gap-8 whitespace-nowrap shrink-0 pr-8">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className={`text-sm font-semibold tracking-widest uppercase ${
                item === "✦" ? "neon-text text-base" : "text-muted-foreground"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex gap-8 whitespace-nowrap shrink-0 pr-8" aria-hidden>
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className={`text-sm font-semibold tracking-widest uppercase ${
                item === "✦" ? "neon-text text-base" : "text-muted-foreground"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
