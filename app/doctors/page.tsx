import { FadeIn } from "@/components/FadeIn";
import { DoctorCard } from "@/components/DoctorCard";
import { doctors } from "@/lib/mockData";

export default function DoctorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <FadeIn>
        <h1 className="text-center font-serif text-4xl text-forest">Our Vaidyas</h1>
        <p className="mx-auto mt-2 max-w-xl text-center text-stone-500">
          Certified Ayurvedic doctors. Every consultation includes a Prakriti assessment and written plan.
        </p>
      </FadeIn>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {doctors.map((d, i) => (
          <FadeIn key={d.id} delay={i * 0.1}>
            <DoctorCard doctor={d} linkMode />
            <p className="mt-2 px-1 text-xs text-stone-500">{d.credentials}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
