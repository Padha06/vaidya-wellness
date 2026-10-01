"use client";
import React, { useState, useEffect, useRef } from "react";

interface VirtualItemProps {
  children: React.ReactNode;
  minHeight?: string | number;
  className?: string;
  immediate?: boolean;
}

/**
 * High-performance virtualization wrapper:
 * - Uses native CSS `content-visibility: auto` to skip offscreen rendering passes
 * - Uses IntersectionObserver with a generous rootMargin (300px) to render just-in-time
 * - Bypasses deferral for initial visible items (`immediate={true}`) to protect LCP
 */
export function VirtualItem({
  children,
  minHeight = "340px",
  className = "",
  immediate = false,
}: VirtualItemProps) {
  const [isVisible, setIsVisible] = useState(immediate);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (immediate || isVisible) return;
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate, isVisible]);

  return (
    <div
      ref={ref}
      className={`virtualized-card h-full ${className}`}
      style={!isVisible ? { minHeight } : undefined}
    >
      {isVisible ? children : (
        <div
          className="h-full w-full rounded-2xl bg-stone-100/70 border border-stone-200/60 animate-pulse"
          style={{ minHeight }}
        />
      )}
    </div>
  );
}
