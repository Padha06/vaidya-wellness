"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { doctors, faqs } from "@/lib/mockData";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-4xl px-3 sm:px-4 py-8 sm:py-12">
      <FadeIn>
        <h1 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl text-forest">Our Story</h1>
        <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed">
          <p>
            Vaidya Wellness began in Kochi with a simple frustration: authentic Ayurveda was hard to
            access outside Kerala — diluted into spa menus in metros, unavailable everywhere else.
            We brought together NABH-certified Vaidyas, a GMP pharmacy and a calm online clinic so
            anyone in India (and 25+ countries) can get a proper Prakriti-based diagnosis from home.
          </p>
          <p>
            Every patient gets the same rigour as our in-clinic care: a 30-minute first consultation,
            a written diet–routine–herb plan, and a follow-up where your Vaidya tunes the protocol.
            No steroids, no miracle cures, no 2-minute prescriptions — just classical Ayurveda,
            explained in plain language and tracked over time.
          </p>
        </div>
      </FadeIn>

      <FadeIn className="mt-8 sm:mt-12">
        <h2 className="text-center font-serif text-xl sm:text-2xl md:text-3xl text-forest">Our Vaidyas</h2>
        <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-6">
          {doctors.map((d) => (
            <div key={d.id} className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.image_url} alt={d.name} className="mx-auto h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover object-top ring-2 ring-gold/70 shadow-sm" loading="lazy" decoding="async" />
              <p className="mt-2 text-xs font-semibold sm:text-sm">{d.name.replace("Vaidya ", "")}</p>
              <p className="text-[10px] sm:text-xs text-stone-500">{d.specialization}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mt-8 sm:mt-12">
        <h2 className="text-center font-serif text-xl sm:text-2xl md:text-3xl text-forest">Frequently Asked Questions</h2>
        <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-xs">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-4 py-3 sm:px-5 sm:py-4 text-left text-xs sm:text-sm font-medium"
              >
                <span>{f.q}</span>
                <ChevronDown size={16} className={cn("shrink-0 text-stone-400 transition-transform duration-200", open === i && "rotate-180 text-forest")} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}

