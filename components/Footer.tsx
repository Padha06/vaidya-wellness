"use client";
import { useState } from "react";
import Link from "next/link";
import { Leaf, ChevronDown, ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="border-t border-forest-light/20 bg-forest-dark text-white/90">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        {/* BRAND TOP BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-white/10 gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gold text-ink shadow-sm">
              <Leaf size={16} />
            </span>
            <div>
              <span className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide">
                Vaidya Wellness
              </span>
              <p className="text-[11px] text-white/60 hidden sm:block">
                Ancient Ayurvedic wisdom · Modern precision wellness
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-gold-light/90">
            <ShieldCheck size={14} className="text-gold" />
            <span>NABH Accredited · 100% Classical Formulations</span>
          </div>
        </div>

        {/* MOBILE COMPACT ACCORDIONS */}
        <div className="block md:hidden divide-y divide-white/10 text-xs">
          {/* Quick Links Accordion */}
          <div>
            <button
              onClick={() => toggle("links")}
              className="flex w-full items-center justify-between py-3 font-semibold text-white/90"
              aria-expanded={openSection === "links"}
            >
              <span>Quick Links</span>
              <motion.span
                animate={{ rotate: openSection === "links" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={14} className="text-gold" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openSection === "links" && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2 pb-3 pl-2 text-white/75 overflow-hidden"
                >
                  <li>
                    <Link href="/doctors" className="hover:text-gold transition">
                      Find a Doctor (Vaidya)
                    </Link>
                  </li>
                  <li>
                    <Link href="/book" className="hover:text-gold transition">
                      Book Video / Clinic Consultation
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:text-gold transition">
                      Ayurvedic Pharmacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-gold transition">
                      About Prakriti & FAQs
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Accordion */}
          <div>
            <button
              onClick={() => toggle("contact")}
              className="flex w-full items-center justify-between py-3 font-semibold text-white/90"
              aria-expanded={openSection === "contact"}
            >
              <span>Contact & Clinics</span>
              <motion.span
                animate={{ rotate: openSection === "contact" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={14} className="text-gold" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openSection === "contact" && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2 pb-3 pl-2 text-white/75 overflow-hidden"
                >
                  <li className="flex items-center gap-1.5">
                    <Mail size={12} className="text-gold" /> hello@vaidyawellness.in
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Phone size={12} className="text-gold" /> +91 98200 12345
                  </li>
                  <li className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-gold" /> Kochi · Mumbai · Worldwide Online
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Hours & Clinic Accordion */}
          <div>
            <button
              onClick={() => toggle("hours")}
              className="flex w-full items-center justify-between py-3 font-semibold text-white/90"
              aria-expanded={openSection === "hours"}
            >
              <span>Clinic Hours</span>
              <motion.span
                animate={{ rotate: openSection === "hours" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={14} className="text-gold" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openSection === "hours" && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-1.5 pb-3 pl-2 text-white/75 overflow-hidden"
                >
                  <li>Mon–Sat · 9:00 AM – 6:00 PM IST</li>
                  <li className="text-gold-light/90">Free 10-min Prakriti check for new patients</li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* DESKTOP 4-COLUMN GRID */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 pt-8">
          <div>
            <p className="font-semibold text-sm text-gold-light">Philosophy</p>
            <p className="mt-3 text-xs leading-relaxed text-white/70">
              Ancient wisdom, modern wellness. Certified Ayurvedic Vaidyas delivering personalized healing through pulse diagnosis, herbal formulations, and lifestyle harmony.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm text-gold-light">Quick links</p>
            <ul className="mt-3 space-y-2 text-xs text-white/70">
              <li>
                <Link href="/doctors" className="hover:text-gold transition">
                  Find a Vaidya
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-gold transition">
                  Book consultation
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gold transition">
                  Ayurvedic Pharmacy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition">
                  About + FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm text-gold-light">Contact</p>
            <ul className="mt-3 space-y-2 text-xs text-white/70">
              <li>hello@vaidyawellness.in</li>
              <li>+91 98200 12345</li>
              <li>Kochi · Mumbai · Online worldwide</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm text-gold-light">Clinic Hours</p>
            <ul className="mt-3 space-y-2 text-xs text-white/70">
              <li>Mon–Sat · 9:00 AM – 6:00 PM IST</li>
              <li className="text-gold">Free 10-min assessment for first-timers</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="mt-6 border-t border-white/10 pt-4 pb-14 md:pb-0 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-2 text-center sm:text-left">
          <p>© 2026 Vaidya Wellness. All rights reserved.</p>
          <p className="text-[10px] text-white/40">
            Certified Ayurveda Care · Client Demo Showcase
          </p>
        </div>
      </div>
    </footer>
  );
}

