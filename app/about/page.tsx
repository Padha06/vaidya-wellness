"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { doctors, faqs } from "@/lib/mockData";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <FadeIn>
        <h1 className="text-center font-serif text-4xl text-forest">Our story</h1>
        <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
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

      <FadeIn className="mt-12">
        <h2 className="text-center font-serif text-3xl text-forest">Our Vaidyas</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6">
          {doctors.map((d) => (
            <div key={d.id} className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.image_url} alt={d.name} className="mx-auto h-16 w-16 rounded-full object-cover ring-2 ring-gold sm:h-20 sm:w-20" loading="lazy" />
              <p className="mt-2 text-xs font-semibold sm:text-sm">{d.name.replace("Vaidya ", "")}</p>
              <p className="text-[11px] text-stone-500 sm:text-xs">{d.specialization}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mt-12">
        <h2 className="text-center font-serif text-3xl text-forest">FAQs</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl border border-stone-200 bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left font-medium"
              >
                {f.q}
                <ChevronDown size={18} className={cn("transition", open === i && "rotate-180")} />
              </button>
              {open === i && <p className="px-5 pb-5 text-sm text-stone-600 leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
