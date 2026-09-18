import React, { useState } from 'react';
import { ARTICLES } from '../data/content';
import { ArrowLeft, Clock, Calendar, Share2, Check, Bookmark, ArrowRight } from 'lucide-react';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug, onNavigate }) => {
  const [copied, setCopied] = useState(false);

  // Find target article or fallback to first
  const article = ARTICLES.find(a => a.slug === slug) || ARTICLES[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const otherArticles = ARTICLES.filter(a => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Back Button */}
      <button
        onClick={() => onNavigate('/en/articles')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#9CA3AF] hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Articles</span>
      </button>

      {/* Article Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FE6E00]/10 text-[#FE6E00] border border-[#FE6E00]/20 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 text-xs text-[#9CA3AF]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#FE6E00]/40">
              <img src="/assets/images/images_academy_instructor.png" alt={article.author} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">{article.author}</div>
              <div className="flex items-center gap-2 text-[11px]">
                <span>{article.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Link!' : 'Share Article'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
        <img src={article.image} alt={article.title} className="w-full h-auto max-h-[460px] object-cover" />
      </div>

      {/* Verbatim Longform Prose Content */}
      <div className="space-y-6 text-base sm:text-lg text-[#D1D5DB] leading-relaxed font-sans border-b border-white/10 pb-12">
        {article.content.map((paragraph, index) => (
          <p key={index} className="leading-[1.8] first-letter:text-3xl first-letter:font-bold first-letter:text-[#FE6E00] first-letter:mr-0.5">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Callout / Discussion Section */}
      <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-bold text-white">Have thoughts on this infrastructure topic?</h4>
          <p className="text-xs text-[#9CA3AF]">Discuss with Chau Dara and Cambodian engineers in our community channel.</p>
        </div>
        <a
          href="https://t.me/tfdevs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl font-bold text-xs bg-[#FE6E00] hover:bg-[#E05D00] text-white whitespace-nowrap shadow-lg shadow-[#FE6E00]/20 transition-all"
        >
          Join Telegram Discussion
        </a>
      </div>

      {/* Suggested Reading */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl font-bold text-white">More from Teaching For Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherArticles.map(other => (
            <div
              key={other.slug}
              onClick={() => onNavigate(`/en/articles/${other.slug}`)}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FE6E00]/40 cursor-pointer transition-all space-y-3 group"
            >
              <span className="text-[11px] font-mono text-[#FE6E00]">{other.readTime}</span>
              <h4 className="text-sm font-bold text-white group-hover:text-[#FE6E00] transition-colors line-clamp-2">
                {other.title}
              </h4>
              <p className="text-xs text-[#9CA3AF] line-clamp-2">
                {other.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
