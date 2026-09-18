import React from 'react';
import { BookOpen, Video, Code, ArrowRight, ExternalLink } from 'lucide-react';

interface CatalogPageProps {
  title: string;
  subtitle: string;
  category: 'courses' | 'projects';
  onNavigate: (path: string) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ title, subtitle, category, onNavigate }) => {
  const courses = [
    {
      title: 'Code to Career: FullStack Bootcamp',
      desc: '15-week intensive program covering Vue.js, Node.js, Express, MongoDB, Docker, and Linux deployment.',
      tag: 'Academy',
      action: () => onNavigate('/en/academy'),
      actionText: 'View Bootcamp'
    },
    {
      title: 'Modern Frontend with Vue 3 & Pinia',
      desc: 'Deep dive into reactive composition architecture, state management, and modern component patterns.',
      tag: 'Free Course',
      action: () => window.open('https://youtube.com/@tfdevs', '_blank'),
      actionText: 'Watch on YouTube'
    },
    {
      title: 'Docker & Self-Hosted Infrastructure',
      desc: 'Learn container orchestration, Nginx reverse proxy, and self-hosting web applications.',
      tag: 'Series',
      action: () => onNavigate('/en/articles/why-bother-with-own-infra'),
      actionText: 'Read Homelab Guide'
    }
  ];

  const projects = [
    {
      title: 'TFDevs Learning Management System',
      desc: 'Modern LMS web application built with Nuxt 3, Tailwind CSS, and Bakong KHQR checkout.',
      tag: 'Production Web',
      tech: ['Nuxt 3', 'Tailwind', 'Bakong API']
    },
    {
      title: 'K3s Kubernetes Homelab Gateway',
      desc: 'Automated reverse proxy, Cloudflare Tunnel integration, and zero-trust cluster networking.',
      tag: 'Infrastructure',
      tech: ['K3s', 'Cloudflare', 'Nginx', 'Docker']
    },
    {
      title: 'Khmer Tech Community Hub',
      desc: 'Open community platform connecting developers across Cambodia with mentorship and coding resources.',
      tag: 'Community',
      tech: ['Telegram Bot', 'Vue 3', 'Express']
    }
  ];

  const items = category === 'courses' ? courses : projects;

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">
          {category === 'courses' ? 'Curated Learning' : 'Showcase & Work'}
        </span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-[#9CA3AF]">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FE6E00]/40 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#FE6E00]/10 text-[#FE6E00] border border-[#FE6E00]/20">
                {item.tag}
              </span>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.desc}</p>
            </div>

            {category === 'courses' ? (
              // @ts-ignore
              <button
                // @ts-ignore
                onClick={item.action}
                className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-[#FE6E00] text-white transition-colors flex items-center justify-center gap-2"
              >
                {/* @ts-ignore */}
                <span>{item.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {/* @ts-ignore */}
                {item.tech.map((t: string) => (
                  <span key={t} className="text-[10px] font-mono text-[#9CA3AF] bg-white/5 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
