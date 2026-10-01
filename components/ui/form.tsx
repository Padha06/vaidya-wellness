import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...rest }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-ink placeholder:text-stone-400 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20",
        className
      )}
      {...rest}
    />
  )
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...rest }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-ink placeholder:text-stone-400 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20",
        className
      )}
      {...rest}
    />
  )
);
Textarea.displayName = "Textarea";

export function Label({ className, ...rest }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("mb-1.5 block text-sm font-medium text-ink", className)} {...rest} />;
}

export function Badge({ className, ...rest }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-gold-muted px-3 py-1 text-xs font-medium text-forest-dark",
        className
      )}
      {...rest}
    />
  );
}

export function Select({ className, ...rest }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-ink focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20",
        className
      )}
      {...rest}
    />
  );
}
