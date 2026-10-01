"use client";
import type { CSSProperties } from "react";
// ThreeUI-style hero with zero-risk fallback: pure CSS gradient + floating SVG leaves.
// Layout/text identical whether or not three.js loads, so the build NEVER blocks on 3D.
const LEAVES = Array.from({ length: 14 });

function Leaf({ i }: { i: number }) {
  const left = (i * 71) % 100;
  const delay = (i % 7) * 0.9;
  const size = 18 + ((i * 13) % 22);
  const style: CSSProperties = {
    left: `${left}%`,
    bottom: "-40px",
    width: size,
    animationDelay: `${delay}s`
  };
  return (
    <svg
      viewBox="0 0 24 24"
      className="absolute animate-float text-gold-light/70"
      style={style}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C7 7 4 11 4 15a8 8 0 0 0 16 0c0-4-3-8-8-13zm0 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" opacity=".9" />
    </svg>
  );
}

export function ThreeHero() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 animate-gradient-pan bg-[linear-gradient(120deg,#1E3A0E,#2D5016_30%,#6B8E3D_55%,#C9A961_80%,#2D5016)] bg-[length:220%_220%]" />
      <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-gold/25 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-forest-light/30 blur-3xl" />
      {LEAVES.map((_, i) => (
        <Leaf key={i} i={i} />
      ))}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
