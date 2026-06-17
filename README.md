# Zylo3D — Digital Dentistry Manufacturing Platform

Next.js 15 marketing site for Zylo3D.

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
RESEND_API_KEY=re_...          # Resend API key — get from resend.com
CONTACT_EMAIL=sales@zylo3d.com # Inbox that receives contact form submissions
```

Public URLs (Calendly, Stripe) are hardcoded in `src/lib/constants.ts` — no env vars needed.

## Stack

Next.js 15 · React 19 · Tailwind CSS v4 · TypeScript · Resend · Vercel
