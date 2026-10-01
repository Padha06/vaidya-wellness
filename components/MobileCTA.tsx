"use client";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export function MobileCTA() {
  return (
    <Link
      href="/book"
      className="fixed bottom-0 left-0 right-0 z-40 flex min-h-[56px] items-center justify-center gap-2 bg-forest px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-sm font-semibold text-white shadow-[0_-4px_20px_rgba(0,0,0,0.25)] md:hidden"
    >
      <CalendarCheck size={18} className="shrink-0" /> 📅 Book Free Consultation
    </Link>
  );
}
