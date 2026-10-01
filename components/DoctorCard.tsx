"use client";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Doctor } from "@/lib/mockData";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/form";
import { cn } from "@/lib/utils";

export function DoctorCard({
  doctor,
  selected,
  onSelect,
  linkMode
}: {
  doctor: Doctor;
  selected?: boolean;
  onSelect?: () => void;
  linkMode?: boolean;
}) {
  const inner = (
    <Card
      className={cn(
        "overflow-hidden transition hover:shadow-lg",
        selected && "ring-2 ring-forest"
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={doctor.image_url} alt={doctor.name} className="h-52 w-full object-cover" loading="lazy" />
      <CardContent>
        <div className="flex items-center justify-between">
          <Badge>{doctor.specialization}</Badge>
          <span className="flex items-center gap-1 text-sm font-semibold text-ink">
            <Star size={15} className="fill-gold text-gold" /> {doctor.rating.toFixed(1)}
          </span>
        </div>
        <h3 className="mt-3 font-serif text-xl text-ink">{doctor.name}</h3>
        <p className="text-sm text-stone-500">{doctor.title} · {doctor.experience_years} yrs</p>
        <p className="mt-2 line-clamp-2 text-sm text-stone-600">{doctor.bio}</p>
        <p className="mt-2 text-xs italic text-forest">“{doctor.approach}”</p>
        {onSelect ? (
          <Button className="mt-4 w-full" variant={selected ? "primary" : "outline"} onClick={onSelect}>
            {selected ? "Selected ✓" : "Select Vaidya"}
          </Button>
        ) : linkMode ? (
          <Link href={`/book?doctor=${doctor.id}`}>
            <Button className="mt-4 w-full">Book Now</Button>
          </Link>
        ) : null}
      </CardContent>
    </Card>
  );
  return inner;
}
