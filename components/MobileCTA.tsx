"use client";
import Link from "next/link";
import { Calendar, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export function MobileCTA() {
  return (
    <motion.aside
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-2.5 border-t border-stone-200/80 bg-white/95 px-3 py-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-lg md:hidden"
    >
      <Link
        href="/products"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-forest px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition-transform active:scale-95"
      >
        <ShoppingBag size={14} className="text-gold-light shrink-0" />
        <span>Shop Remedies</span>
      </Link>

      <Link
        href="/book"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-gold/70 bg-cream px-3 py-2.5 text-xs font-semibold text-forest shadow-sm transition-transform active:scale-95"
      >
        <Calendar size={14} className="text-gold-dark shrink-0" />
        <span>Consult Vaidya</span>
      </Link>

    </motion.aside>
  );
}

