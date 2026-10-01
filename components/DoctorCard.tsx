"use client";
import Link from "next/link";
import { Star, Award } from "lucide-react";
import { motion } from "framer-motion";
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
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card
        className={cn(
          "group flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gold/50",
          selected ? "ring-2 ring-forest shadow-md" : "hover:border-stone-300"
        )}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-forest/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={doctor.image_url}
            alt={doctor.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
            loading="lazy"
            decoding="async"
            width={400}
            height={500}
          />
          <div className="absolute top-2.5 right-2.5 rounded-full bg-white/95 px-2 py-0.5 text-xs font-semibold text-ink shadow-sm backdrop-blur">
            <span className="flex items-center gap-1">
              <Star size={13} className="fill-gold text-gold" /> {doctor.rating.toFixed(1)}
            </span>
          </div>
          <div className="absolute bottom-2 left-2.5 rounded-md bg-forest-dark/80 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur">
            <span className="flex items-center gap-1">
              <Award size={12} className="text-gold" /> {doctor.experience_years} yrs exp
            </span>
          </div>
        </div>

        <CardContent className="flex flex-1 flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1">
              <Badge className="text-[11px] px-2 py-0.5">{doctor.specialization}</Badge>
            </div>
            <h3 className="mt-2 font-serif text-base sm:text-lg md:text-xl font-semibold text-ink group-hover:text-forest transition-colors">
              {doctor.name}
            </h3>
            <p className="text-xs text-stone-500 font-medium">{doctor.title}</p>
            <p className="mt-1.5 line-clamp-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
              {doctor.bio}
            </p>
            <p className="mt-2 text-[11px] sm:text-xs italic text-forest/90 line-clamp-1">
              “{doctor.approach}”
            </p>
          </div>

          <div className="mt-3 sm:mt-4 pt-2 border-t border-stone-100">
            {onSelect ? (
              <Button
                className="w-full text-xs sm:text-sm py-2 sm:py-2.5"
                variant={selected ? "primary" : "outline"}
                onClick={onSelect}
              >
                {selected ? "Selected ✓" : "Select Vaidya"}
              </Button>
            ) : linkMode ? (
              <Link href={`/book?doctor=${doctor.id}`} className="block">
                <Button className="w-full text-xs sm:text-sm py-2 sm:py-2.5">
                  Book Consultation
                </Button>
              </Link>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

