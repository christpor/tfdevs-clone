import React, { useState } from 'react';
import { ARTICLES } from '../data/content';
import { Search, Tag, ArrowRight } from 'lucide-react';

interface ArticlesPageProps {
  onNavigate: (path: string) => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(ARTICLES.flatMap(a => a.tags)));

  const filteredArticles = ARTICLES.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? art.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">
          Engineering Blog & Guides
        </span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Articles
        </h1>
        <p className="text-sm text-[#9CA3AF]">
          Reflections on software architecture, homelab infrastructure, system design, and the evolving developer ecosystem in Cambodia.
        </p>
      </div>

      {/* Search & Tag Filter Bar */}
      <div className="space-y-4 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles by title, keyword, or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#FE6E00] text-sm transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              selectedTag === null
                ? 'bg-[#FE6E00] text-white'
                : 'bg-white/5 text-[#9CA3AF] hover:text-white'
            }`}
          >
            All Topics
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-[#FE6E00] text-white'
                  : 'bg-white/5 text-[#9CA3AF] hover:text-white'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map(art => (
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
                <h2 className="text-base font-bold text-white group-hover:text-[#FE6E00] transition-colors line-clamp-2">
                  {art.title}
                </h2>
                <p className="text-xs text-[#9CA3AF] line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/5">
                <div className="flex flex-wrap gap-1">
                  {art.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-[#FE6E00]">
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#FE6E00] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
