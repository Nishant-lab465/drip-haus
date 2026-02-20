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
            {/* DC Monogram - exact match to logo */}
            <svg
              viewBox="0 0 620 420"
              className="w-44 h-28 sm:w-60 sm:h-40"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer dark rectangle */}
              <rect x="0" y="0" width="620" height="420" fill="#0a0a0a" rx="8" />
              {/* White border inset */}
              <rect x="14" y="14" width="592" height="392" fill="none" stroke="white" strokeWidth="6" rx="4" />

              {/* Left D - white filled D shape */}
              {/* D vertical bar */}
              <rect x="36" y="36" width="90" height="348" fill="white" />
              {/* D curve - right arc */}
              <path d="M 126 36 Q 310 36 310 210 Q 310 384 126 384 L 126 36 Z" fill="white" />
              {/* D inner cutout (the hole) */}
              <path d="M 150 90 Q 256 90 256 210 Q 256 330 150 330 L 150 90 Z" fill="#0a0a0a" />

              {/* Right C - open C shape */}
              {/* C outer arc */}
              <path d="M 494 36 Q 584 36 584 120 L 530 120 Q 530 90 494 90 Q 364 90 364 210 Q 364 330 494 330 Q 530 330 530 300 L 584 300 Q 584 384 494 384 Q 310 384 310 210 Q 310 36 494 36 Z" fill="white" />
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
