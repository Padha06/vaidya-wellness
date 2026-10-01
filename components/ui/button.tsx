import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({ variant = "primary", size = "md", className, ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-forest/40 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants: Record<string, string> = {
    primary: "bg-forest text-white hover:bg-forest-dark shadow-md",
    outline: "border border-gold text-forest hover:bg-gold-muted bg-white/80",
    gold: "bg-gold text-ink hover:bg-gold-dark hover:text-white shadow-md",
    ghost: "text-forest hover:bg-forest-muted"
  };
  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };
  return <button className={cn(base, variants[variant], sizes[size], className)} {...rest} />;
}
