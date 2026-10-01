# Vaidya Wellness (Demo)

Next.js 14 + TypeScript + Tailwind demo for an Ayurvedic wellness brand.

## Run locally
```bash
cd vaidya-wellness
npm install
npm run dev   # http://localhost:3000
```

## Supabase (optional — app works without it)
1. Create a free project at supabase.com
2. Run `SUPABASE_SCHEMA.sql` in the SQL editor
3. Fill in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Deploy to Vercel
```bash
cd vaidya-wellness
npx vercel --prod
```
Then add the two env vars in Vercel → Project → Settings → Environment Variables.

## Demo path
Home → Doctors → Book (4-step wizard) → Confirm (confetti + toast)
