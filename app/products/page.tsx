"use client";
import { useState } from "react";
import Link from "next/link";
import { Stethoscope, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const cats = ["All", "Immunity", "Digestion", "Skin", "Women's Health"];

export default function ProductsPage() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-4 py-8 sm:py-12">
      {/* SWITCH BANNER TO DOCTORS */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-forest-muted/70 p-3 sm:p-4 border border-forest/20 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-forest font-medium text-center sm:text-left">
          <Stethoscope size={18} className="shrink-0 text-forest" />
          <span>Need custom formulations for your Prakriti / Dosha?</span>
        </div>
        <Link href="/book" className="w-full sm:w-auto">
          <Button size="sm" className="w-full sm:w-auto text-xs py-1.5 px-3">
            Consult a Vaidya First <ArrowRight size={13} />
          </Button>
        </Link>
      </div>

      <FadeIn>
        <h1 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl text-forest">
          Ayurvedic Pharmacy
        </h1>
        <p className="mt-1.5 text-center text-xs sm:text-sm text-stone-500">
          Classical formulations, lab-tested for purity. Free delivery above ₹999.
        </p>
      </FadeIn>

      <div className="mt-5 flex flex-wrap justify-center gap-1.5 sm:gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm transition-all duration-200",
              cat === c
                ? "bg-forest text-white shadow-sm"
                : "border border-stone-200 bg-white text-stone-600 hover:border-forest"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-10 text-center text-xs sm:text-sm text-stone-500">
          No products in “{cat}” yet in this demo — check “All”.
        </p>
      ) : (
        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-6">
          {list.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.05}>
              <ProductCard product={p} />
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}

