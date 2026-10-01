import Link from "next/link";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-white/90">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink">
              <Leaf size={18} />
            </span>
            <span className="font-serif text-xl font-semibold">Vaidya Wellness</span>
          </div>
          <p className="mt-3 text-sm text-white/70">
            Ancient wisdom, modern wellness. Certified Ayurvedic Vaidyas, online and in clinic.
          </p>
        </div>
        <div>
          <p className="font-semibold">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link href="/doctors">Find a Vaidya</Link></li>
            <li><Link href="/book">Book consultation</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About + FAQs</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>hello@vaidyawellness.in</li>
            <li>+91 98200 12345</li>
            <li>Kochi · Mumbai · Online worldwide</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Hours</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Mon–Sat · 9 AM – 6 PM IST</li>
            <li>Free 10-min assessment for first-timers</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-4 pb-[max(5rem,env(safe-area-inset-bottom))] text-center text-xs text-white/60 md:pb-4">
        © 2026 Vaidya Wellness · Demo site — no real medical advice or payments.
      </div>
    </footer>
  );
}
