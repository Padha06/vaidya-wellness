-- Vaidya Wellness · Supabase schema (run in Supabase SQL editor)
create table if not exists doctors (
  id uuid primary key default gen_random_uuid(),
  name text, title text, specialization text,
  experience_years int, bio text, approach text,
  credentials text, image_url text, rating numeric
);

create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  doctor_id uuid references doctors(id),
  patient_name text, patient_email text, patient_phone text,
  patient_age int, consultation_type text,
  appointment_date date, appointment_time text,
  symptoms text, status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text, category text, price numeric, description text,
  image_url text, in_stock boolean default true
);

-- Seed doctors
insert into doctors (name, title, specialization, experience_years, bio, approach, credentials, image_url, rating) values
('Vaidya Ananya Sharma', 'BAMS, MD (Ayu)', 'Panchakarma & Detox', 18,
 'Former Panchakarma chief at a NABH-accredited Ayurvedic hospital. Has guided 2000+ detox and rejuvenation programs.',
 'Gentle, root-cause detox — seasonal Panchakarma tailored to your Prakriti and Agni.',
 'BAMS, MD (Kayachikitsa) · NABH Certified · 18 yrs',
 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop', 4.9),
('Vaidya Rajesh Iyer', 'BAMS', 'Digestive & Liver Care', 22,
 'Gut-health specialist blending classical Virechana protocols with modern dietetics. Trusted by 3000+ patients for IBS, acidity and fatty liver.',
 'Agni-first healing — food, herbs and routine before heavy medication.',
 'BAMS · CCAH (Nutrition) · 22 yrs',
 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop', 4.8),
('Vaidya Priya Menon', 'BAMS, MS (Ayu)', 'Women''s Health & Fertility', 15,
 'Specialist in PCOS, thyroid support and pre/post-natal Ayurveda. Known for compassionate, unhurried 30-minute consultations.',
 'Cycle-aware care — aligning hormones, sleep and digestion together.',
 'BAMS, MS (Prasuti Tantra) · 15 yrs',
 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop', 4.9);

-- Seed products
insert into products (name, category, price, description, image_url, in_stock) values
('Ashwagandha Capsules', 'Immunity', 499, 'KSM-grade root extract for stress, sleep and strength.', 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800&auto=format&fit=crop', true),
('Triphala Churna', 'Digestion', 299, 'Classic three-fruit formula for gentle daily detox.', 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop', true),
('Chyawanprash', 'Immunity', 649, 'Amalaki-rich rejuvenative for family immunity.', 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=800&auto=format&fit=crop', true),
('Brahmi Head Oil', 'Skin', 399, 'Cooling Brahmi + coconut oil for calm and hairfall.', 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop', true),
('Dashamoola Tea', 'Digestion', 349, 'Ten-root Vata-balancing herbal infusion, caffeine-free.', 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=800&auto=format&fit=crop', true),
('Neem Capsules', 'Skin', 329, 'Blood-purifying herb for clear, healthy skin.', 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=800&auto=format&fit=crop', true);
