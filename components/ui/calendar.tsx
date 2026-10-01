"use client";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function toISO(d: Date) {
  return d.toISOString().slice(0, 10);
}

export function CalendarLite({
  value,
  onChange
}: {
  value: string;
  onChange: (iso: string) => void;
}) {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);
  const [cursor, setCursor] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });

  const cells = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const first = new Date(year, month, 1);
    const startDay = first.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const arr: (Date | null)[] = [];
    for (let i = 0; i < startDay; i++) arr.push(null);
    for (let d = 1; d <= daysInMonth; d++) arr.push(new Date(year, month, d));
    return arr;
  }, [cursor]);

  const monthLabel = cursor.toLocaleString("en-IN", { month: "long", year: "numeric" });

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-cream"
          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
        >
          <ChevronLeft size={20} />
        </button>
        <p className="font-serif text-base sm:text-lg">{monthLabel}</p>
        <button
          type="button"
          aria-label="Next month"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-cream"
          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-stone-500">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} className="py-1 font-medium">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const iso = toISO(d);
          const disabled = d < today;
          const selected = value === iso;
          return (
            <button
              key={i}
              type="button"
              disabled={disabled}
              onClick={() => onChange(iso)}
              className={cn(
                "aspect-square rounded-full text-sm transition",
                disabled && "cursor-not-allowed text-stone-300",
                !disabled && !selected && "hover:bg-forest-muted",
                selected && "bg-forest font-semibold text-white"
              )}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
