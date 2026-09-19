<p align="center">
  <img src="public/assets/images/tfdevs-hero-banner.jpg" alt="Teaching For Development Sovereign Clone Banner" width="100%"/>
</p>

<h1 align="center">Teaching For Development (TFD) Sovereign Clone</h1>

<p align="center">
  <b>Pixel-accurate, zero-slop reproduction of Teaching For Development (TFD) — Cambodia's premier tech education academy founded by Chau Dara (ចៅ ដារ៉ា).</b>
</p>

<p align="center">
  <a href="https://tfdevs-clone.vercel.app"><img src="https://img.shields.io/badge/Live%20Demo-tfdevs--clone.vercel.app-F97316?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" /></a>
  <a href="https://github.com/christpor/tfdevs-clone"><img src="https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" /></a>
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/Tailwind-3.4.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT" />
</p>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,ts,tailwind,vite,html,css,git,github&perline=10" alt="Tech Stack" />
  </a>
</p>

---

## ⚡ Executive Summary (30-Second Rule)

**Teaching For Development (TFD) Sovereign Clone** delivers a route-complete, asset-accurate implementation of [tfdevs.com/en](https://tfdevs.com/en). Built with React 18, Vite 5, Tailwind CSS, and Lenis kinetic scroll, it faithfully preserves course curricula, live YouTube developer tutorials, community homelab essays, and partner integrations.

Run it locally in seconds:
```bash
git clone https://github.com/christpor/tfdevs-clone.git
cd tfdevs-clone && npm install && npm run dev
```

---

## 🗺️ Master Cognitive Flow Architecture

```mermaid
flowchart TD
    classDef client fill:#18181b,stroke:#F97316,stroke-width:2px,color:#fff;
    classDef hub fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff;
    classDef curriculum fill:#14141e,stroke:#22c55e,stroke-width:2px,color:#fff;
    classDef edge fill:#0a0a0a,stroke:#a855f7,stroke-width:2px,color:#fff;

    Student[Developer / Student]:::client -->|Route Navigation| Router[Client-Side Reactive Router]:::client
    Router -->|/en| Home[Hero, Homelab Articles, Partner Carousel]:::hub
    Router -->|/en/courses| Courses[Course Matrix & Pricing Tiers]:::curriculum
    Router -->|/en/articles| Articles[Technical Homelab & Networking Essays]:::hub
    Router -->|/en/about| About[TFD Mission & Chau Dara Story]:::hub
    Views[All Pages] -->|Lenis Kinetic Smooth Momentum| Scroll[Hardware-Accelerated Frame Loop]:::hub
    Scroll -->|Static Edge Delivery| Vercel[Vercel Global Edge Network]:::edge
```

---

## 🏛️ Multi-Tier Engineering Architecture

| Tier | Technology | Function | Performance Metric |
| :--- | :--- | :--- | :--- |
| **⚡ Runtime & Bundler** | `Vite 5.4` + `TypeScript 5.5` | Fast HMR & static compilation | Sub-2.5s production build |
| **💻 Client Core** | `React 18.3` | SPA routing & dynamic view switching | 60 FPS silky smooth UI |
| **🎨 Design System** | `Tailwind CSS 3.4` + `Kantumruy Pro` | Bilingual typography & TFD orange `#F97316` | Sub-30KB compressed CSS |
| **🌊 Motion Physics** | `Lenis Scroll` | Momentum scrolling & smooth page transition resets | Zero frame drops |
| **☁️ Infrastructure** | `Vercel Edge Platform` | Static asset caching & global SSL delivery | 100% Core Web Vitals |

---

## 🗺️ Canonical Route Topology

Every route in the official `tfdevs.com` sitemap has been engineered into the reactive SPA router with full Lenis scroll reset:

| Route Path | View / Feature | Description |
| :--- | :--- | :--- |
| `/en` | **Home Page** | Hero section ("Let's Spread Technology For All"), verified social counters, featured homelab articles, YouTube embed, partner logos carousel. |
| `/en/courses` | **Courses & Academy** | Complete course catalog, lesson roadmaps, enrollment prerequisites, and pricing tiers. |
| `/en/articles` | **Articles & Homelab** | Deep-dive essays on Linux, networking, self-hosting, and DevOps best practices. |
| `/en/about` | **About TFD** | Origin story of Chau Dara, educational philosophy, and community impact. |

---

## 🚀 Quick Start & CLI Operations

### Local Development
```bash
# 1. Clone repository
git clone https://github.com/christpor/tfdevs-clone.git
cd tfdevs-clone

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).
