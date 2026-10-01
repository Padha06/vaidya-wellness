"use client";
import Link from "next/link";
import { useState } from "react";
import { Leaf, Menu, X, Calendar, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/doctors", label: "Doctors" },
  { href: "/products", label: "Pharmacy" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-cream/95 backdrop-blur-md shadow-xs">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-forest text-white shadow-sm transition-transform group-hover:scale-105">
            <Leaf size={16} />
          </span>
          <span className="font-serif text-lg sm:text-xl font-semibold text-forest tracking-tight">
            Vaidya Wellness
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs sm:text-sm font-medium text-ink/80 hover:text-forest transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pl-2">
            <Link href="/products">
              <Button size="sm" variant="outline" className="border-gold/70 text-forest text-xs py-1.5 px-3">
                Pharmacy
              </Button>
            </Link>
            <Link href="/book">
              <Button size="sm" className="text-xs py-1.5 px-4 shadow-sm">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-muted/60 text-forest md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>

      {/* MOBILE DRAWER WITH FRAMER MOTION TRANSITION */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-stone-200 bg-cream/98 px-4 py-4 md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-2.5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-ink/90 hover:bg-forest-muted hover:text-forest transition-colors"
                >
                  {l.label}
                </Link>
              ))}

              <div className="mt-2 pt-3 border-t border-stone-200/80 grid grid-cols-2 gap-2">
                <Link href="/book" onClick={() => setOpen(false)}>
                  <Button size="sm" className="w-full text-xs py-2 gap-1.5">
                    <Calendar size={13} /> Book Vaidya
                  </Button>
                </Link>
                <Link href="/products" onClick={() => setOpen(false)}>
                  <Button size="sm" variant="outline" className="w-full text-xs py-2 gap-1.5 border-gold text-forest">
                    <ShoppingBag size={13} /> Pharmacy
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

