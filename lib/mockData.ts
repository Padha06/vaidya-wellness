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
    id: "rajesh-iyer",
    name: "Vaidya Rajesh Iyer",
    title: "BAMS, Senior Vaidya",
    specialization: "Digestive Care & Kayachikitsa",
    experience_years: 22,
    bio: "Gut-health specialist blending classical Virechana protocols with personalized dietetics. Trusted by 3,000+ patients for IBS, acidity, and metabolic harmony.",
    approach: "Agni-first healing — restoring cellular metabolism and digestive fire before prescription.",
    credentials: "BAMS (Kerala Ayurveda Academy) · CCAH · 22 yrs",
    image_url: "/doctors/rajesh-iyer.webp",
    rating: 4.9
  },
  {
    id: "priya-menon",
    name: "Vaidya Priya Menon",
    title: "BAMS, MS (Ayu)",
    specialization: "Women's Health & Hormones",
    experience_years: 15,
    bio: "Specialist in PCOS, thyroid balance, and pre/post-natal Ayurveda. Renowned for unhurried 30-minute consultations and compassionate care.",
    approach: "Cycle-aware wellness — harmonizing hormonal rhythms with classical Rasayana therapies.",
    credentials: "BAMS, MS (Prasuti Tantra) · NABH Certified · 15 yrs",
    image_url: "/doctors/priya-menon.webp",
    rating: 4.9
  },
  {
    id: "ananya-sharma",
    name: "Vaidya Ananya Sharma",
    title: "BAMS, MD (Kayachikitsa)",
    specialization: "Panchakarma & Nadi Pariksha",
    experience_years: 18,
    bio: "Former Chief Vaidya at Kerala Panchakarma Institute. Expert in classical pulse diagnosis (Nadi Pariksha) and seasonal detoxification regimens.",
    approach: "Gentle root-cause purification — tailored to your unique Prakriti constitution.",
    credentials: "BAMS, MD (Ayu) · Gold Medalist · 18 yrs",
    image_url: "/doctors/ananya-sharma.webp",
    rating: 4.8
  }
];


export const products: Product[] = [
  {
    id: "ashwagandha",
    name: "Pure Ashwagandha Rasayana",
    category: "Immunity",
    price: 499,
    description: "KSM-66 root extract infused with organic ghee for stress relief, cortisol balance, and vital Ojas.",
    image_url: "/products/ashwagandha.webp",
    in_stock: true,
    tag: "Bestseller"
  },
  {
    id: "triphala",
    name: "Classical Triphala Churna",
    category: "Digestion",
    price: 299,
    description: "Haritaki, Bibhitaki, and Amalaki milled fresh to support gentle gut cleansing and daily digestive fire.",
    image_url: "/products/triphala.webp",
    in_stock: true
  },
  {
    id: "chyawanprash",
    name: "Amalaki Chyawanprash",
    category: "Immunity",
    price: 649,
    description: "Slow-cooked wild amla paste infused with 48 potent Himalayan botanicals in pure forest honey.",
    image_url: "/products/chyawanprash.webp",
    in_stock: true,
    tag: "Classical"
  },
  {
    id: "brahmi-oil",
    name: "Brahmi & Bhringraj Tailam",
    category: "Skin",
    price: 399,
    description: "Cold-pressed sesame oil decoction with fresh Brahmi leaves for nervous calm and root nourishment.",
    image_url: "/products/brahmi-oil.webp",
    in_stock: true,
    tag: "Pure Oil"
  },
  {
    id: "dashamoola-tea",
    name: "Dashamoola Herbal Infusion",
    category: "Digestion",
    price: 349,
    description: "Ten-sacred-root Ayurvedic decoction to ground elevated Vata and relieve bloating after meals.",
    image_url: "/products/dashamoola-tea.webp",
    in_stock: true
  },
  {
    id: "neem-capsules",
    name: "Neem & Tulsi Blood Purifier",
    category: "Skin",
    price: 329,
    description: "Whole-leaf organic neem and holy basil extracts to balance Pitta heat and promote radiant, clear skin.",
    image_url: "/products/neem-capsules.webp",
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
