"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Flame, Droplets, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const doshas = [
  {
    id: "vata",
    name: "Vata Dosha",
    elements: "Air & Ether (Space)",
    icon: Wind,
    color: "from-amber-600/10 to-gold/20",
    border: "border-amber-300",
    badge: "text-amber-800 bg-amber-100",
    tagline: "Governs Movement, Nervous System & Creativity",
    signs: "Dry skin, insomnia, joint stiffness, erratic digestion or anxiety.",
    remedy: "Warm, nourishing herbs like Ashwagandha, Dashamoola, and sesame tailam.",
    productLink: "/products?dosha=vata"
  },
  {
    id: "pitta",
    name: "Pitta Dosha",
    elements: "Fire & Water",
    icon: Flame,
    color: "from-rose-600/10 to-gold/20",
    border: "border-rose-300",
    badge: "text-rose-800 bg-rose-100",
    tagline: "Governs Digestion, Metabolism & Cellular Fire (Agni)",
    signs: "Heartburn, skin flare-ups, body heat, acidity, or irritability.",
    remedy: "Cooling rasayanas like Amalaki, Brahmi, Shatavari, and pure Neem.",
    productLink: "/products?dosha=pitta"
  },
  {
    id: "kapha",
    name: "Kapha Dosha",
    elements: "Earth & Water",
    icon: Droplets,
    color: "from-emerald-600/10 to-forest/20",
    border: "border-emerald-300",
    badge: "text-emerald-800 bg-emerald-100",
    tagline: "Governs Structure, Fluid Balance & Deep Immunity (Ojas)",
    signs: "Sluggish metabolism, sinus congestion, weight gain, or lethargy.",
    remedy: "Stimulating bitters like Triphala, Pippali, and warm herbal infusions.",
    productLink: "/products?dosha=kapha"
  }
];

export function DoshaInteractive() {
  const [activeId, setActiveId] = useState("vata");
  const selected = doshas.find((d) => d.id === activeId) || doshas[0];

  return (
    <section className="relative mx-auto max-w-6xl px-3 sm:px-4 py-8 sm:py-14">
      <div className="rounded-3xl border border-stone-200/90 bg-gradient-to-b from-white to-cream/70 p-4 sm:p-8 md:p-10 shadow-sm">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1 rounded-full bg-forest-muted px-3 py-1 text-xs font-semibold text-forest uppercase tracking-wider">
            <Sparkles size={12} className="text-gold-dark" /> Interactive Dosha Assessment
          </span>
          <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl md:text-4xl text-forest">
            Find Remedies for Your Prakriti
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
            Ayurveda treats the individual, not just the disease. Select your dominant constitution:
          </p>
        </div>

        {/* 3 DOSHA BUTTONS */}
        <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto">
          {doshas.map((d) => {
            const Icon = d.icon;
            const isSelected = activeId === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setActiveId(d.id)}
                className={`relative flex flex-col items-center justify-center rounded-2xl p-2.5 sm:p-4 text-center transition-all duration-200 border ${
                  isSelected
                    ? "border-forest bg-forest text-white shadow-md scale-[1.02]"
                    : "border-stone-200 bg-white text-stone-700 hover:border-gold"
                }`}
              >
                <Icon size={20} className={isSelected ? "text-gold-light" : "text-forest"} />
                <span className="mt-1 font-serif text-xs sm:text-base font-semibold">{d.name.split(" ")[0]}</span>
                <span className={`text-[10px] sm:text-xs hidden sm:inline ${isSelected ? "text-white/80" : "text-stone-400"}`}>
                  {d.elements}
                </span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE DOSHA DETAIL CARD */}
        <div className="mt-6 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-gold/30 bg-white p-4 sm:p-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-100">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-forest flex items-center gap-2">
                    {selected.name}
                    <span className="text-xs font-normal text-stone-500">({selected.elements})</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5">{selected.tagline}</p>
                </div>
                <span className={`self-start sm:self-auto rounded-full px-2.5 py-0.5 text-xs font-semibold ${selected.badge}`}>
                  {selected.id.toUpperCase()} BALANCE
                </span>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="rounded-xl bg-forest-muted/40 p-3">
                  <p className="font-semibold text-forest text-[11px] sm:text-xs uppercase tracking-wider">
                    Common Imbalance Symptoms
                  </p>
                  <p className="mt-1 text-stone-600 leading-relaxed">{selected.signs}</p>
                </div>
                <div className="rounded-xl bg-gold-muted/50 p-3">
                  <p className="font-semibold text-forest text-[11px] sm:text-xs uppercase tracking-wider">
                    Recommended Classical Regimen
                  </p>
                  <p className="mt-1 text-stone-600 leading-relaxed">{selected.remedy}</p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                <p className="text-xs text-stone-500 text-center sm:text-left">
                  Ready to balance your {selected.name.split(" ")[0]} energy naturally?
                </p>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Link href="/products" className="flex-1 sm:flex-none">
                    <Button size="sm" variant="outline" className="w-full text-xs py-2 px-3 border-gold text-forest">
                      Shop {selected.name.split(" ")[0]} Herbs
                    </Button>
                  </Link>
                  <Link href="/book" className="flex-1 sm:flex-none">
                    <Button size="sm" className="w-full text-xs py-2 px-3">
                      Consult Vaidya <ArrowRight size={13} />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
