"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { DoctorCard } from "@/components/DoctorCard";
import { ProductCard } from "@/components/ProductCard";
import { VirtualItem } from "@/components/VirtualItem";
import { Button } from "@/components/ui/button";
import { doctors, products } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const productCategories = ["All", "Immunity", "Digestion", "Skin", "Women's Health"];
const doctorSpecialties = ["All", "Kayachikitsa (Internal)", "Panchakarma", "Nadi Pariksha"];

export function CareSwitcher() {
  const [activeTab, setActiveTab] = useState<"pharma" | "doctors">("pharma");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedProductCat, setSelectedProductCat] = useState("All");

  const filteredDoctors = selectedSpecialty === "All"
    ? doctors
    : doctors.filter((d) => d.specialization.toLowerCase().includes(selectedSpecialty.toLowerCase().slice(0, 5)));

  const filteredProducts = selectedProductCat === "All"
    ? products
    : products.filter((p) => p.category === selectedProductCat);

  return (
    <section className="relative mx-auto max-w-6xl px-3 sm:px-4 py-8 sm:py-14" id="care-services">
      {/* SECTION HEADER */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-forest-muted/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
          <Sparkles size={13} className="text-gold-dark" /> Ayurvedic Remedies & Care
        </span>
        <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl md:text-4xl text-forest">
          Holistic Ayurvedic Wellness
        </h2>
        <p className="mx-auto mt-1.5 max-w-lg text-xs sm:text-sm text-stone-600">
          Shop classical lab-tested herbal remedies or consult our NABH-accredited Vedic Vaidyas.
        </p>
      </div>

      {/* LUXURY SEGMENTED SWITCHER BAR - Pharmacy First, Vaidya Second */}
      <div className="mx-auto mt-6 sm:mt-8 max-w-md sm:max-w-lg">
        <div className="relative flex rounded-2xl bg-white p-1.5 shadow-sm border border-stone-200">
          {/* 1st: Pharma Option */}
          <button
            type="button"
            onClick={() => setActiveTab("pharma")}
            className={cn(
              "relative z-10 flex flex-1 items-center justify-center gap-1.5 sm:gap-2 rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-colors duration-200",
              activeTab === "pharma" ? "text-white" : "text-stone-600 hover:text-forest"
            )}
          >
            <Sparkles size={16} className={activeTab === "pharma" ? "text-gold-light" : "text-gold-dark"} />
            <span>Ayurvedic Pharmacy</span>
            {activeTab === "pharma" && (
              <motion.div
                layoutId="switcher-pill"
                className="absolute inset-0 z-[-1] rounded-xl bg-forest shadow-md"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>

          {/* 2nd: Doctors Option */}
          <button
            type="button"
            onClick={() => setActiveTab("doctors")}
            className={cn(
              "relative z-10 flex flex-1 items-center justify-center gap-1.5 sm:gap-2 rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-colors duration-200",
              activeTab === "doctors" ? "text-white" : "text-stone-600 hover:text-forest"
            )}
          >
            <Stethoscope size={16} className={activeTab === "doctors" ? "text-gold-light" : "text-forest"} />
            <span>Consult Vaidya</span>
            {activeTab === "doctors" && (
              <motion.div
                layoutId="switcher-pill"
                className="absolute inset-0 z-[-1] rounded-xl bg-forest shadow-md"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        </div>
      </div>

      {/* TAB CONTENT WITH SMOOTH TRANSITION */}
      <div className="mt-6 sm:mt-8">
        <AnimatePresence mode="wait">
          {activeTab === "doctors" ? (
            <motion.div
              key="doctors-tab"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
            >
              {/* Doctor filter chips */}
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
                  {doctorSpecialties.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSpecialty(s)}
                      className={cn(
                        "whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all",
                        selectedSpecialty === s
                          ? "bg-forest text-white shadow-sm"
                          : "bg-white text-stone-600 border border-stone-200 hover:border-forest"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <Link
                  href="/doctors"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-forest hover:underline"
                >
                  View all doctors <ArrowRight size={13} />
                </Link>
              </div>

              {/* Doctors Grid */}
              <div className="mt-4 grid gap-4 sm:gap-6 md:grid-cols-3">
                {filteredDoctors.map((d, idx) => (
                  <VirtualItem key={d.id} immediate={idx < 3} minHeight="420px">
                    <DoctorCard doctor={d} linkMode />
                  </VirtualItem>
                ))}
              </div>

              {/* Bottom Switch Incentive */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-white p-3.5 sm:p-5 border border-gold/30 shadow-sm">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 text-center sm:text-left">
                  <ShieldCheck size={20} className="shrink-0 text-gold-dark" />
                  <span>
                    Need authentic herbs or classical oils prescribed by our doctors?
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto text-xs py-2 border-gold/70 text-forest hover:bg-gold/10"
                  onClick={() => setActiveTab("pharma")}
                >
                  Switch to Pharmacy View <ArrowRight size={13} />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="pharma-tab"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
            >
              {/* Product category filter chips */}
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
                  {productCategories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedProductCat(c)}
                      className={cn(
                        "whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all",
                        selectedProductCat === c
                          ? "bg-forest text-white shadow-sm"
                          : "bg-white text-stone-600 border border-stone-200 hover:border-forest"
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <Link
                  href="/products"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-forest hover:underline"
                >
                  View full store <ArrowRight size={13} />
                </Link>
              </div>

              {/* Products 2-col on mobile, 3-col on desktop */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3">
                {filteredProducts.map((p, idx) => (
                  <VirtualItem key={p.id} immediate={idx < 4} minHeight="360px">
                    <ProductCard product={p} />
                  </VirtualItem>
                ))}
              </div>

              {/* Bottom Switch Incentive */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-white p-3.5 sm:p-5 border border-forest/20 shadow-sm">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 text-center sm:text-left">
                  <Stethoscope size={20} className="shrink-0 text-forest" />
                  <span>
                    Unsure which formulation suits your Dosha? Consult an Ayurvedic doctor first.
                  </span>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full sm:w-auto text-xs py-2"
                  onClick={() => setActiveTab("doctors")}
                >
                  Switch to Doctor Consultation <ArrowRight size={13} />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
