import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Vaidya Wellness — Ancient Wisdom, Modern Wellness",
  description:
    "Consult certified Ayurvedic Vaidyas from home. Personalized Prakriti-based treatment plans.",
  openGraph: {
    title: "Vaidya Wellness — Ancient Wisdom, Modern Wellness",
    description: "Consult certified Ayurvedic Vaidyas from home. Book a free 10-min assessment.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-cream text-ink`}>
        <Navbar />
        <main className="min-h-[70dvh] pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
