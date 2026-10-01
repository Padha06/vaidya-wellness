export type Doctor = {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experience_years: number;
  bio: string;
  approach: string;
  credentials: string;
  image_url: string;
  rating: number;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image_url: string;
  in_stock: boolean;
  tag?: string;
};

export const doctors: Doctor[] = [
  {
    id: "ananya-sharma",
    name: "Vaidya Ananya Sharma",
    title: "BAMS, MD (Ayu)",
    specialization: "Panchakarma & Detox",
    experience_years: 18,
    bio: "Former Panchakarma chief at a NABH-accredited Ayurvedic hospital. Has guided 2,000+ detox and rejuvenation programs.",
    approach: "Gentle, root-cause detox — seasonal Panchakarma tailored to your Prakriti and Agni.",
    credentials: "BAMS, MD (Kayachikitsa) · NABH Certified · 18 yrs",
    image_url:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    rating: 4.9
  },
  {
    id: "rajesh-iyer",
    name: "Vaidya Rajesh Iyer",
    title: "BAMS",
    specialization: "Digestive & Liver Care",
    experience_years: 22,
    bio: "Gut-health specialist blending classical Virechana protocols with modern dietetics. Trusted by 3,000+ patients for IBS, acidity and fatty liver.",
    approach: "Agni-first healing — food, herbs and routine before heavy medication.",
    credentials: "BAMS · CCAH (Nutrition) · 22 yrs",
    image_url:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    rating: 4.8
  },
  {
    id: "priya-menon",
    name: "Vaidya Priya Menon",
    title: "BAMS, MS (Ayu)",
    specialization: "Women's Health & Fertility",
    experience_years: 15,
    bio: "Specialist in PCOS, thyroid support and pre/post-natal Ayurveda. Known for compassionate, unhurried 30-minute consultations.",
    approach: "Cycle-aware care — aligning hormones, sleep and digestion together.",
    credentials: "BAMS, MS (Prasuti Tantra) · 15 yrs",
    image_url:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    rating: 4.9
  }
];

export const products: Product[] = [
  {
    id: "ashwagandha",
    name: "Ashwagandha Capsules",
    category: "Immunity",
    price: 499,
    description: "KSM-grade root extract for stress, sleep and strength.",
    image_url:
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800&auto=format&fit=crop",
    in_stock: true,
    tag: "Bestseller"
  },
  {
    id: "triphala",
    name: "Triphala Churna",
    category: "Digestion",
    price: 299,
    description: "Classic three-fruit formula for gentle daily detox.",
    image_url:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop",
    in_stock: true
  },
  {
    id: "chyawanprash",
    name: "Chyawanprash",
    category: "Immunity",
    price: 649,
    description: "Amalaki-rich rejuvenative for family immunity.",
    image_url:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=800&auto=format&fit=crop",
    in_stock: true,
    tag: "Family pack"
  },
  {
    id: "brahmi-oil",
    name: "Brahmi Head Oil",
    category: "Skin",
    price: 399,
    description: "Cooling Brahmi + coconut oil for calm and hairfall.",
    image_url:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop",
    in_stock: true
  },
  {
    id: "dashamoola-tea",
    name: "Dashamoola Tea",
    category: "Digestion",
    price: 349,
    description: "Ten-root Vata-balancing herbal infusion, caffeine-free.",
    image_url:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=800&auto=format&fit=crop",
    in_stock: true
  },
  {
    id: "neem-capsules",
    name: "Neem Capsules",
    category: "Skin",
    price: 329,
    description: "Blood-purifying herb for clear, healthy skin.",
    image_url:
      "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=800&auto=format&fit=crop",
    in_stock: true
  }
];

export const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM"
];

export const faqs = [
  {
    q: "What to expect in my first consultation?",
    a: "A 25–30 minute deep-dive: your health history, sleep, digestion, diet and lifestyle. Your Vaidya assesses your Prakriti (Vata-Pitta-Kapha), explains the root cause in plain language, and shares a personalized diet, routine and herbal plan. A written summary follows by email."
  },
  {
    q: "How is my Prakriti (dosha) assessed?",
    a: "Through a structured questionnaire plus Nadi Pariksha cues (in clinic) or detailed video observation (online): body frame, skin, digestion, sleep and temperament. You receive a Prakriti chart with foods to favour and avoid."
  },
  {
    q: "Is video consultation as effective as in-clinic?",
    a: "For most lifestyle, gut, skin, stress and women's-health concerns — yes. 80%+ of our follow-ups happen on video. If your Vaidya needs a physical exam or Panchakarma procedure, we will invite you to the clinic."
  },
  {
    q: "Can I get a follow-up consultation?",
    a: "Absolutely. Follow-ups are recommended at 2–4 weeks to tune herbs and diet. Book from your confirmation link — your Vaidya sees your full history, so follow-ups are shorter and 40% off."
  },
  {
    q: "What is your cancellation policy?",
    a: "Free rescheduling up to 6 hours before your slot from your booking link. No-shows can rebook once free. Full refund if we cancel from our side."
  },
  {
    q: "Do you ship medicines internationally?",
    a: "Yes — we ship to 25+ countries (5–10 business days). At checkout choose international shipping; our pharmacy verifies herb legality for your country before dispatch."
  }
];
