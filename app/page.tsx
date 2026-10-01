import Link from "next/link";
import { ShieldCheck, Leaf, Award, Users } from "lucide-react";
import { ThreeHero } from "@/components/ThreeHero";
import { FadeIn } from "@/components/FadeIn";
import { DoctorCard } from "@/components/DoctorCard";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { doctors, products } from "@/lib/mockData";

const badges = [
  { icon: Users, label: "5000+ Patients healed" },
  { icon: Award, label: "15+ Years of practice" },
  { icon: Leaf, label: "100% Natural protocols" },
  { icon: ShieldCheck, label: "NABH Certified Vaidyas" }
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[92dvh] items-center justify-center">
        <ThreeHero />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 text-center text-white">
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold tracking-widest uppercase backdrop-blur">
            Certified Ayurvedic care · Online & in-clinic
          </p>
          <h1 className="font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
            Ancient Wisdom, Modern Wellness
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/85 md:text-lg">
            Consult certified Ayurvedic Vaidyas from home. Personalized Prakriti-based treatment plans.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/book">
              <Button size="lg" className="w-full sm:w-auto">Book Consultation</Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="w-full border-gold bg-white/10 text-white hover:bg-white hover:text-forest sm:w-auto">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-wrap items-center justify-center gap-1.5 text-center text-xs font-medium text-forest sm:text-sm">
              <b.icon size={20} className="shrink-0 text-gold-dark" />
              {b.label}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED DOCTORS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <FadeIn>
          <h2 className="text-center font-serif text-3xl text-forest md:text-4xl">Meet our Vaidyas</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-stone-500">
            NABH-certified doctors with 15–22 years of practice. Pick the specialist for your concern.
          </p>
        </FadeIn>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {doctors.map((d, i) => (
            <FadeIn key={d.id} delay={i * 0.1}>
              <DoctorCard doctor={d} linkMode />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn>
            <h2 className="text-center font-serif text-3xl text-forest md:text-4xl">Pharmacy favourites</h2>
            <p className="mt-2 text-center text-stone-500">Classical formulations, lab-tested for purity.</p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {products.slice(0, 3).map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.1}>
                <ProductCard product={p} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/products">
              <Button variant="outline">View all products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <FadeIn>
          <div className="rounded-3xl bg-forest px-6 py-12 text-center text-white md:py-16">
            <h2 className="font-serif text-3xl md:text-4xl">Not sure which Vaidya to consult?</h2>
            <p className="mx-auto mt-3 max-w-lg text-white/80">
              Start with a free 10-min assessment. We map your symptoms to the right specialist.
            </p>
            <Link href="/book">
              <Button variant="gold" size="lg" className="mt-6">Start free assessment</Button>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
