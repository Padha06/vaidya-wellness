"use client";
import { toast } from "sonner";
import { ShoppingCart, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Product } from "@/lib/mockData";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/form";

export function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    setAdded(true);
    toast.success(`${product.name} added to cart`);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gold/50">
        <div className="relative overflow-hidden bg-forest/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image_url}
            alt={product.name}
            className="h-28 sm:h-36 md:h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.tag ? (
            <span className="absolute top-2 left-2 rounded-full bg-gold/95 px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-ink shadow-sm backdrop-blur">
              {product.tag}
            </span>
          ) : null}
        </div>

        <CardContent className="flex flex-1 flex-col justify-between p-3 sm:p-4 md:p-5">
          <div>
            <div className="flex items-center justify-between">
              <Badge className="text-[10px] sm:text-xs px-2 py-0.5">{product.category}</Badge>
            </div>
            <h3 className="mt-1.5 sm:mt-2 font-serif text-sm sm:text-base md:text-lg font-semibold text-ink group-hover:text-forest transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="mt-1 line-clamp-2 text-[11px] sm:text-xs md:text-sm text-stone-500 leading-snug">
              {product.description}
            </p>
          </div>

          <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between gap-1.5">
            <span className="text-sm sm:text-base md:text-lg font-bold text-forest">
              ₹{product.price}
            </span>
            <Button
              size="sm"
              variant={added ? "primary" : "outline"}
              className="px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs font-semibold"
              onClick={handleAddToCart}
            >
              {added ? (
                <>
                  <Check size={13} className="text-white" /> Added
                </>
              ) : (
                <>
                  <ShoppingCart size={13} /> Add
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

