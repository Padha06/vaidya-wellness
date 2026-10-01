"use client";
import { Star, ShieldCheck, Award, Leaf, PackageCheck } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Leaf,
    title: "Classical Samhita Provenance",
    desc: "Formulations prepared strictly per Charaka Samhita & Sahasrayogam text canons."
  },
  {
    icon: ShieldCheck,
    title: "NABL 14-Point Lab Tested",
    desc: "Heavy-metal, microbial, and pesticide checked with zero synthetic preservatives."
  },
  {
    icon: Award,
    title: "NABH Accredited Doctors",
    desc: "Licensed BAMS and MD practitioners with 15–22 years of clinical excellence."
  },
  {
    icon: PackageCheck,
    title: "Apothecary Glass Preservation",
    desc: "UV-protective amber glass packaging preserving active volatile herbal compounds."
  }
];

const testimonials = [
  {
    quote: "After 4 years of chronic IBS and acidity, Vaidya Rajesh's Agni protocol and Triphala restored my gut in 6 weeks. Life-changing care.",
    author: "Rohit Singhania",
    location: "Mumbai",
    consult: "Gut Health & Metabolic Care",
    rating: 5
  },
  {
    quote: "Authentic Kerala Ayurveda finally accessible online. The 30-minute consultation was thorough, compassionate, and deeply knowledgeable.",
    author: "Dr. Kavita Menon",
    location: "Bengaluru",
    consult: "PCOS & Hormonal Balance",
    rating: 5
  },
  {
    quote: "The Ashwagandha Rasayana and Brahmi Oil are palpably purer than commercial store brands. You can smell the botanical potency immediately.",
    author: "Arjun Deshmukh",
    location: "Dubai, UAE",
    consult: "Stress & Sleep Protocol",
    rating: 5
  }
];

export function HeritageTrust() {
  return (
    <section className="mx-auto max-w-6xl px-3 sm:px-4 py-8 sm:py-14">
      {/* 4 PILLARS OF EXCELLENCE */}
      <div className="text-center max-w-xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl text-forest">
          The Classical Ayurveda Standard
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-stone-500">
          Uncompromised purity rooted in Kerala&apos;s ancient healing tradition.
        </p>
      </div>

      <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-stone-200/80 bg-white p-3.5 sm:p-5 shadow-xs"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-muted text-forest">
                <Icon size={18} className="text-forest" />
              </span>
              <h3 className="mt-3 font-serif text-xs sm:text-sm font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-1 text-[11px] sm:text-xs text-stone-500 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* PATIENT STORIES */}
      <div className="mt-10 sm:mt-14 rounded-3xl bg-forest-muted/50 border border-forest/15 p-4 sm:p-8">
        <div className="text-center mb-6">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-dark">
            Patient Stories & Results
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-forest mt-1">
            Healed by Ancient Wisdom
          </h3>
        </div>

        <div className="grid gap-3 sm:gap-5 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-4 sm:p-5 shadow-xs border border-stone-200/70 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-0.5 text-gold mb-2">
                  {Array.from({ length: t.rating }).map((_, r) => (
                    <Star key={r} size={13} className="fill-gold" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-600 italic leading-relaxed">
                  “{t.quote}”
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-ink">{t.author}</p>
                  <p className="text-[10px] text-stone-400">{t.location}</p>
                </div>
                <span className="rounded-full bg-forest-muted px-2 py-0.5 text-[10px] font-medium text-forest">
                  {t.consult}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
