"use client";
import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const cats = ["All", "Immunity", "Digestion", "Skin", "Women's Health"];

export default function ProductsPage() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? products : products.filter((p) => p.category === cat);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <FadeIn>
        <h1 className="text-center font-serif text-4xl text-forest">Ayurvedic Pharmacy</h1>
        <p className="mt-2 text-center text-stone-500">Classical formulations, lab-tested. Free shipping over ₹999.</p>
      </FadeIn>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              cat === c ? "border-forest bg-forest text-white" : "border-stone-300 bg-white hover:border-forest"
            )}
          >
            {c}
          </button>
        ))}
      </div>
      {list.length === 0 ? (
        <p className="mt-10 text-center text-stone-500">
          No products in “{cat}” yet in this demo — check “All”.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {list.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.06}>
              <ProductCard product={p} />
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}
