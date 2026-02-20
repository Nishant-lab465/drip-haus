import { useEffect, useState } from "react";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("exit"), 2000);
    const t3 = setTimeout(() => onComplete(), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        phase === "exit" ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Logo mark - DD monogram SVG */}
      <div
        className={`transition-all duration-600 ease-out ${
          phase === "enter" ? "opacity-0 scale-75 translate-y-6" : "opacity-100 scale-100 translate-y-0"
        }`}
      >
        {/* DD Monogram */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="relative"
            style={{
              transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            {/* White rectangle with DD cutout - recreating the logo mark */}
            <svg
              viewBox="0 0 200 140"
              className="w-40 h-28 sm:w-52 sm:h-36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer white rectangle */}
              <rect x="0" y="0" width="200" height="140" fill="white" rx="4" />
              {/* D shape 1 cutout */}
              <rect x="14" y="14" width="62" height="112" fill="hsl(var(--background))" rx="2" />
              <ellipse cx="76" cy="70" rx="38" ry="50" fill="white" />
              <ellipse cx="76" cy="70" rx="20" ry="33" fill="hsl(var(--background))" />
              {/* D shape 2 cutout */}
              <rect x="110" y="14" width="62" height="112" fill="hsl(var(--background))" rx="2" />
              <ellipse cx="172" cy="70" rx="38" ry="50" fill="white" />
              <ellipse cx="172" cy="70" rx="20" ry="33" fill="hsl(var(--background))" />
            </svg>
          </div>

          {/* Brand name */}
          <div
            className="text-center"
            style={{ transition: "all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.1s" }}
          >
            <span
              className="font-display text-3xl sm:text-4xl font-black tracking-tight"
              style={{ color: "hsl(var(--primary))" }}
            >
              Design Drip
            </span>
            <span
              className="font-display text-3xl sm:text-4xl font-black"
              style={{ color: "hsl(var(--primary))" }}
            >
              .in
            </span>
          </div>
        </div>
      </div>

      {/* Loading bar */}
      <div className="absolute bottom-12 w-40 h-0.5 rounded-full overflow-hidden" style={{ background: "hsl(var(--border))" }}>
        <div
          className="h-full rounded-full transition-all ease-linear"
          style={{
            width: phase === "enter" ? "0%" : phase === "hold" ? "75%" : "100%",
            transitionDuration: phase === "enter" ? "0ms" : phase === "hold" ? "1400ms" : "700ms",
            background: "hsl(var(--primary))",
            boxShadow: "0 0 12px hsl(var(--primary) / 0.8)",
          }}
        />
      </div>
    </div>
  );
}
