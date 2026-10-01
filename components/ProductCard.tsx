"use client";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/mockData";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/form";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden transition hover:shadow-lg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.image_url} alt={product.name} className="h-44 w-full object-cover" loading="lazy" />
      <CardContent>
        <div className="flex items-center justify-between">
          <Badge>{product.category}</Badge>
          {product.tag ? <span className="text-xs font-semibold text-gold-dark">{product.tag}</span> : null}
        </div>
        <h3 className="mt-2 font-serif text-lg">{product.name}</h3>
        <p className="text-sm text-stone-500">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-forest">₹{product.price}</span>
          <Button size="sm" onClick={() => toast.success(`${product.name} added to cart`)}>
            <ShoppingCart size={15} /> Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
