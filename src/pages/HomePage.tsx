import React from 'react';
import { GalleryHero } from '../components/GalleryHero';
import { ARTICLES, SOCIAL_LINKS, PARTNERS } from '../data/content';
import { LOCALES, Locale } from '../data/locales';
import { ArrowRight, Play, BookOpen } from 'lucide-react';

interface HomePageProps {
  locale: Locale;
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ locale, onNavigate }) => {
  const t = LOCALES[locale];

  return (
    <div className="space-y-16 pb-20">
      {/* 100% Exact Live GalleryHero (Marquee Drift + 44K Widget + Calligraphy Title) */}
      <GalleryHero locale={locale} onNavigate={onNavigate} />

      {/* Social Communities (ចូលបណ្ដាញសង្គមរបស់យើង / Join our social networks!) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {t.social_networks}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FE6E00]/40 transition-all text-center group"
              >
                <div className="w-10 h-10 mb-3 rounded-xl overflow-hidden flex items-center justify-center p-1.5 bg-black/40">
                  <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-bold text-white group-hover:text-[#FE6E00] transition-colors">
                  {item.name}
                </span>
                <span className="text-[11px] font-mono text-[#9CA3AF] mt-0.5">
                  {item.subscribers || item.followers || item.members || item.repos}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {t.latest_articles}
          </h2>
          <button
            onClick={() => onNavigate('/en/articles')}
            className="flex items-center gap-1.5 text-xs font-bold text-[#FE6E00] hover:underline"
          >
            <span>{t.view_all_articles}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.slice(0, 3).map((art) => (
            <article
              key={art.slug}
              onClick={() => onNavigate(`/en/articles/${art.slug}`)}
              className="cursor-pointer group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#FE6E00]/50 transition-all flex flex-col"
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-900 relative">
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-[10px] font-mono text-white/90">
                  {art.readTime}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                    <span>{art.author}</span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#FE6E00] transition-colors line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {art.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#9CA3AF] border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {t.latest_videos}
          </h2>
          <a
            href="https://youtube.com/@tfdevs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-[#FE6E00] hover:underline"
          >
            <span>{t.view_all_videos}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-[#FE6E00] font-bold uppercase tracking-widest">
                YouTube • Cambodian Tech Education
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                AI កាន់តែថ្លៃទៅៗ — ឈប់ខ្ជះខ្ជាយ Tokens ទៀតទៅ | AI Is Getting Expensive — Stop Wasting Tokens!
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Learn token conservation techniques, efficient prompt design, and how to stop burning cloud budgets when engineering autonomous agents.
              </p>
              <div className="pt-2">
                <a
                  href="https://youtube.com/@tfdevs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-700 text-white transition-all shadow-lg shadow-red-600/20"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{t.hero_watch_video}</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 aspect-video group">
                <img 
                  src="/assets/images/mqdefault.jpg" 
                  alt="YouTube Featured Video" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborator Logos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {PARTNERS.slice(0, 5).map((p) => (
            <div
              key={p.name}
              className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center gap-2 hover:border-white/20 transition-colors"
            >
              <div className="h-10 w-24 flex items-center justify-center">
                <img src={p.image} alt={p.name} className="max-h-8 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all" />
              </div>
              <span className="text-xs font-medium text-[#9CA3AF] truncate w-full">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Collaborate Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#FE6E00]/20 via-[#FE6E00]/10 to-transparent border border-[#FE6E00]/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t.work_with_us}
            </h2>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              {t.work_with_desc}
            </p>
          </div>
          <button
            onClick={() => onNavigate('/en/collaborate')}
            className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#FE6E00] hover:bg-[#E05D00] text-white shadow-xl shadow-[#FE6E00]/30 transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <span>{t.become_partner}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
