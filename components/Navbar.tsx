"use client";
import Link from "next/link";
import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/doctors", label: "Doctors" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-white">
            <Leaf size={18} />
          </span>
          <span className="font-serif text-xl font-semibold text-forest">Vaidya Wellness</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink/80 hover:text-forest">
              {l.label}
            </Link>
          ))}
          <Link href="/book">
            <Button size="sm">Book Now</Button>
          </Link>
        </div>
        <button className="flex h-11 w-11 items-center justify-center rounded-lg md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div className={cn("border-t border-stone-200 bg-cream px-4 py-3 md:hidden", open ? "block" : "hidden")}>
        <div className="flex flex-col gap-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium">
              {l.label}
            </Link>
          ))}
          <Link href="/book" onClick={() => setOpen(false)}>
            <Button size="sm" className="w-full">Book Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
