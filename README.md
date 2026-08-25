# ShaniAI Agency — Official Web Platform

> Bespoke custom software & AI engineering studio. Transparent one-time builds, 100% client IP transfer, and dedicated ongoing managed support.

---

## 🏢 Company & Leadership Overview

- **Company Name:** ShaniAI Agency (Short: ShaniAI)
- **Founder & CEO:** Soham Pawar
- **Primary Contact:** [+91 80871 67841](tel:+918087167841)
- **Official Email:** [soham@shaniaiagency.tech](mailto:soham@shaniaiagency.tech)
- **Production Domain:** [https://shaniaiagency.tech](https://shaniaiagency.tech)
- **Headquarters:** Pune, Maharashtra, India

---

## 🚀 Capabilities & Technical Scope

1. **Custom Software:** Bespoke web applications, internal tools, and enterprise operating systems.
2. **AI-Native Solutions:** Autonomous AI agents, custom LLM pipelines, and automated intelligence layers.
3. **Full-Stack Engineering:** High-performance Next.js architectures, React dashboards, and cloud databases.
4. **Managed Operations:** 24/7 SLA uptime monitoring, continuous model tuning, and security patching.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (React 19, App Router, Server Actions)
- **Styling & Design System:** [Tailwind CSS v4](https://tailwindcss.com/) with Miro Design Tokens
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Springs, Parallax, Interactive 3D Mockups)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Database:** [Turso](https://turso.tech/) (LibSQL / Cloud Edge SQLite)
- **Email Delivery:** [Resend](https://resend.com/)

---

## 📂 Project Structure

```
web/
├── .env.example                 # Environment variable templates
├── .env.local                   # Local credentials (Turso & Resend)
├── package.json                 # Project dependencies & scripts
├── tailwind.config.ts           # Design system tokens & fonts
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
└── src/
    ├── app/
    │   ├── layout.tsx           # Global root layout & SEO metadata
    │   ├── page.tsx             # Homepage assembling all modular sections
    │   ├── globals.css          # Tailwind CSS v4 @theme design tokens
    │   ├── about/page.tsx       # About page with Soham Pawar (Founder & CEO) spotlight
    │   ├── contact/page.tsx     # Direct contact page & lead intake form
    │   ├── policy/page.tsx      # Terms of Service
    │   ├── privacy/page.tsx     # Privacy Policy
    │   └── actions/
    │       └── contact.ts       # Server action handling Turso DB writes & Resend alerts
    ├── components/
    │   ├── Nav.tsx              # Sticky navigation with mobile drawer
    │   ├── Hero.tsx             # 3D floating tiles & interactive product canvas
    │   ├── Capabilities.tsx     # 4 core capability cards
    │   ├── FeaturedWork.tsx     # Interactive client case studies
    │   ├── Industries.tsx       # Sticky horizontal scroll & mobile touch carousel
    │   ├── Process.tsx          # 4-step engineering roadmap
    │   ├── Pricing.tsx          # One-time build & recurring SLA scope cards
    │   ├── WhyUs.tsx            # Animated 40-tile backdrop & core differentiators
    │   ├── SocialProof.tsx      # Verified client testimonials
    │   ├── FAQ.tsx              # Expandable interactive FAQ accordion
    │   ├── CtaBanner.tsx        # High-impact CTA banner
    │   ├── ContactForm.tsx      # Lead form with loading states & DB submission
    │   └── Footer.tsx           # 6-column site footer & legal navigation
    └── lib/
        ├── motion.ts            # Physics-based spring presets & durations
        ├── turso.ts             # Turso database client singleton
        └── emailTemplates.ts    # Branded confirmation & lead notification email templates
```

---

## ⚡ Getting Started Locally

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create `.env.local` based on `.env.example`:

```env
TURSO_DATABASE_URL=libsql://shaniaiagency-shaniaiagency.aws-ap-south-1.turso.io
TURSO_AUTH_TOKEN=your_turso_auth_token_here
ENABLE_EMAIL_NOTIFICATIONS=false
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=ShaniAI Agency <onboarding@resend.dev>
RESEND_NOTIFICATION_EMAIL=soham@shaniaiagency.tech
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)

1. Push this repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.local`.
4. Add your custom domain `shaniaiagency.tech` under Project Settings → Domains.
5. In Cloudflare DNS, point the CNAME record to `cname.vercel-dns.com`.

---

## 🧾 Repository Description Automation

Use the included script to generate concise, portfolio-friendly descriptions for all repositories owned by `sohampawar1866`, automatically skipping forks.

```bash
# Preview updates (dry run)
npm run repo:descriptions

# Apply updates to GitHub repository descriptions
GITHUB_TOKEN=your_github_token npm run repo:descriptions -- --apply
```

The token must have permission to edit repository metadata.

---

© 2026 ShaniAI Agency. All rights reserved.
