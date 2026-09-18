# 🚀 Teaching For Development (`tfdevs.com/en`) Parity Clone

> Complete pixel-accurate, zero-slop reproduction of **Teaching For Development (TFD)** — Cambodia's premier tech education channel and developer academy founded by **Chau Dara (ចៅ ដារ៉ា)**.

[![React 18](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-38bdf8.svg)](https://tailwindcss.com/)
[![Lenis Scroll](https://img.shields.io/badge/Motion-Lenis%20Kinetic-orange.svg)](https://github.com/darkroomengineering/lenis)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-3178c6.svg)](https://www.typescriptlang.org/)
[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel%20Production-black.svg)](https://vercel.com/)

---

## 🌟 Overview & Ground Truth Fidelity

This repository implements a **100% route-complete and asset-accurate clone** of `https://tfdevs.com/en`. All text, course curriculum details, pricing tiers, partner graphics, and technical homelab essays were extracted directly from the live Nuxt 3 application's DOM and hydration payload.

---

## 🗺️ Canonical Route Topology

Every route in the official `tfdevs.com` sitemap has been engineered into the reactive SPA router with full Lenis scroll reset and deep-link hydration:

| Route Path | View / Feature | Description |
| :--- | :--- | :--- |
| `/en` | **Home Page** | Hero section ("Let's Spread Technology For All"), verified social counters, featured homelab articles, YouTube embed, partner logos carousel. |
| `/en/academy` | **Academy Overview** | "Code to Career: FullStack Bootcamp" 15-week curriculum, morning/afternoon/weekend schedule selector, $450 pricing, 20-seat limit indicator, classroom photos & Phnom Penh location map. |
| `/en/academy/payment` | **Bakong KHQR Checkout** | Real-time 15-minute countdown timer, ABA / Bakong QR frame, simulated instant payment verification webhook. |
| `/en/academy/success` | **Enrollment Success** | Post-payment confirmation, onboarding checklist, direct Telegram VIP group link. |
| `/en/articles` | **Articles Archive** | Filterable blog index with keyword search and tag pills (`#Deployment`, `#Kubernetes`, `#Homelab`, `#Frontend`, `#AI`). |
| `/en/articles/why-bother-with-own-infra` | **Homelab vs Vercel Essay** | Chau Dara's full verbatim philosophy on deploying via Cloudflare Tunnel, Nginx VM gateway, and K3s Kubernetes. |
| `/en/articles/frontend-increasingly-fullstack` | **FullStack Shift Essay** | Deep dive into SSR, hydration mismatches, CDN caching, and modern web engineering beyond UI. |
| `/en/articles/framework` | **Framework vs Job Essay** | Analysis of why mastering a framework alone doesn't guarantee a developer job. |
| `/en/articles/ai-usage-discipline` | **AI Discipline Essay** | Why relying too heavily on AI early prevents students from building resilience. |
| `/en/collaborate` | **Partner With TFDevs** | Channel statistics (100K+ YouTube, 80K+ Facebook), sponsorship tiers, past collaborations (CADT, Mazda, Hostinger), and interactive contact form. |
| `/en/services` | **Consulting Services** | Enterprise engineering capabilities (Full-Stack, Cloud & K3s, AI Integration, DevOps CI/CD). |
| `/en/about-us` | **About Chau Dara & TFD** | The story of starting TFD in Grade 11 (2014), blogging in Japan, and building Cambodia's tech education future. |
| `/en/courses` | **Courses Catalog** | Showcase of video masterclasses and bootcamp modules. |
| `/en/projects` | **Projects Catalog** | Open-source repos, LMS platforms, and alumni capstones. |

---

## ⚡ Kinetic Motion & Scroll Architecture

- **Lenis Smooth Scroll Engine**: Integrated with `duration: 1.1s` and custom exponential cubic bezier easing for organic scrolling inertia.
- **Scroll Hijacking Protection**: All interactive drawers, modals, and mobile navigation sheets declare `data-lenis-prevent="true"` and `overscroll-behavior: contain`.
- **Instant Route Reset**: Automatically resets scroll coordinates to `(0, 0)` on route change without jarring layout jumps.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript (strict mode, 0 build errors)
- **Styling**: Tailwind CSS with custom TFD design tokens (`#FE6E00` Electric Amber, `#0B1120` Deep Slate)
- **Icons**: `lucide-react` (1.5-stroke strictly anti-slop, 0 emojis in headers or buttons)
- **Typography**: `Google Sans`, `Inter`, `JetBrains Mono`, `Kantumruy Pro`

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/christpor/tfdevs-clone.git
cd tfdevs-clone

# Install dependencies
npm install

# Start development server (host 0.0.0.0)
npm run dev

# Build for production
npm run build
```

---

## 🚢 Deployment Configuration

Configured for **Vercel** with full client-side SPA fallback routing in `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

*Crafted with precision for the Cambodian software engineering community.*
