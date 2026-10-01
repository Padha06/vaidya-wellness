import Link from "next/link";
import { ShieldCheck, Leaf, Award, Users, ArrowRight } from "lucide-react";
import { ThreeHero } from "@/components/ThreeHero";
import { FadeIn } from "@/components/FadeIn";
import { CareSwitcher } from "@/components/CareSwitcher";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: Users, label: "5,000+ Patients Healed" },
  { icon: Award, label: "15+ Years Practice" },
  { icon: Leaf, label: "100% Classical Ayurveda" },
  { icon: ShieldCheck, label: "NABH Certified Doctors" }
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO - Mobile-first responsive sizing */}
      <section className="relative flex min-h-[78dvh] sm:min-h-[85dvh] md:min-h-[90dvh] items-center justify-center">
        <ThreeHero />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-10 sm:py-16 text-center text-white">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] sm:text-xs font-semibold tracking-wider uppercase backdrop-blur-md border border-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Certified Ayurvedic care · Online & In-Clinic
          </div>
          <h1 className="font-serif text-2xl leading-tight sm:text-4xl md:text-6xl drop-shadow-sm">
            Ancient Wisdom, <br className="hidden sm:inline" />
            Modern Wellness
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-xs sm:text-base md:text-lg text-white/90 leading-relaxed">
            Consult accredited Ayurvedic Vaidyas from home or order pure classical formulations tailored to your Prakriti.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col justify-center gap-2.5 sm:flex-row sm:gap-3.5">
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="md" className="w-full sm:w-auto shadow-lg shadow-forest-dark/30">
                Book Consultation
              </Button>
            </Link>
            <Link href="/products" className="w-full sm:w-auto">
              <Button
                size="md"
                variant="outline"
                className="w-full sm:w-auto border-gold/80 bg-white/10 text-white hover:bg-white hover:text-forest backdrop-blur-sm"
              >
                Explore Pharmacy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BADGES - Clean compact 2x2 grid on mobile, 4-col on desktop */}
      <section className="border-b border-stone-200/80 bg-white shadow-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 sm:gap-4 px-3 sm:px-4 py-3 sm:py-5 md:grid-cols-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center justify-center gap-1.5 sm:gap-2 text-center text-[11px] sm:text-xs md:text-sm font-medium text-forest py-1"
            >
              <b.icon size={16} className="shrink-0 text-gold-dark" />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DUAL CARE SWITCHER: DOCTORS & PHARMA */}
      <CareSwitcher />

      {/* LUXURY ASSESSMENT CTA BANNER */}
      <section className="mx-auto max-w-6xl px-3 sm:px-4 py-8 sm:py-14">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-forest px-4 py-8 sm:px-8 sm:py-12 text-center text-white shadow-xl">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-gold-light">
                First Time Visiting?
              </span>
              <h2 className="mt-1 font-serif text-xl sm:text-3xl md:text-4xl">
                Not sure which Vaidya or remedy you need?
              </h2>
              <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-white/80 leading-relaxed">
                Take our complimentary 10-minute Dosha assessment. We match your symptoms with the right specialist and classical herbs.
              </p>
              <div className="mt-5 sm:mt-6">
                <Link href="/book">
                  <Button variant="gold" size="md" className="font-semibold text-xs sm:text-sm">
                    Start Free Assessment <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

