import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { DoctorCard } from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import { doctors } from "@/lib/mockData";

export default function DoctorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-4 py-8 sm:py-12">
      {/* SWITCH BANNER TO PHARMACY */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-gold-muted/80 p-3 sm:p-4 border border-gold/40 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-forest font-medium text-center sm:text-left">
          <Sparkles size={18} className="shrink-0 text-gold-dark" />
          <span>Already know what classical herbal formulations or oils you need?</span>
        </div>
        <Link href="/products" className="w-full sm:w-auto">
          <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs py-1.5 px-3 border-gold text-forest">
            Explore Pharmacy <ArrowRight size={13} />
          </Button>
        </Link>
      </div>

      <FadeIn>
        <h1 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl text-forest">
          Our Certified Vaidyas
        </h1>
        <p className="mx-auto mt-1.5 max-w-xl text-center text-xs sm:text-sm text-stone-500">
          Certified Ayurvedic doctors with 15–22 years of clinical practice. Every consultation includes a personalized Prakriti assessment and tailored regimen.
        </p>
      </FadeIn>
      <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-3">
        {doctors.map((d, i) => (
          <FadeIn key={d.id} delay={i * 0.08}>
            <DoctorCard doctor={d} linkMode />
            <p className="mt-2 px-1 text-[11px] sm:text-xs text-stone-500">{d.credentials}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

