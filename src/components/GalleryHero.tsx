import React, { useEffect, useState, useRef } from 'react';
import { HERO_GALLERY_PHOTOS, GalleryItem } from '../data/gallery';
import { LOCALES, Locale } from '../data/locales';

interface GalleryHeroProps {
  locale: Locale;
  onNavigate: (path: string) => void;
}

export const GalleryHero: React.FC<GalleryHeroProps> = ({ locale, onNavigate }) => {
  const t = LOCALES[locale];
  const [subscribers, setSubscribers] = useState(0);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Counter animation up to 44K
  useEffect(() => {
    let start: number | null = null;
    const duration = 1800;
    const target = 44;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setSubscribers(Math.round(target * eased));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Duplicate photos for seamless infinite drift marquee
  const row1: GalleryItem[] = [...HERO_GALLERY_PHOTOS, ...HERO_GALLERY_PHOTOS];
  const row2: GalleryItem[] = [...HERO_GALLERY_PHOTOS.slice(12), ...HERO_GALLERY_PHOTOS, ...HERO_GALLERY_PHOTOS.slice(0, 12)];

  return (
    <section className="relative overflow-hidden h-[540px] md:h-[620px] flex items-center w-full bg-[#0B1120]">
      {/* Background Masked Photo Marquee Drift Layers */}
      <div className="absolute inset-0 hero-vignette-mask pointer-events-none select-none">
        <div className="absolute inset-0 flex flex-col gap-4 justify-center py-6">
          {/* Row 1: Leftward Drift */}
          <div className="flex gap-4 gallery-drift" style={{ width: 'max-content' }}>
            {row1.map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className="shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border border-white/5 transition-transform"
                style={{
                  width: item.w,
                  height: item.h,
                  transform: `rotate(${item.rotation}deg)`
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover opacity-75 filter brightness-95 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  onError={(e) => {
                    // fallback to placeholder if any image path mismatch
                    e.currentTarget.src = '/assets/images/mqdefault.jpg';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Row 2: Rightward Reverse Drift */}
          <div className="flex gap-4 gallery-drift-reverse" style={{ width: 'max-content' }}>
            {row2.map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className="shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border border-white/5 transition-transform"
                style={{
                  width: item.w,
                  height: item.h,
                  transform: `rotate(${item.rotation}deg)`
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover opacity-75 filter brightness-95 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/images/mqdefault.jpg';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dark Vignette Radial Spotlight Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(11,17,32,0.55) 0%, rgba(11,17,32,0.92) 100%)'
          }}
        />
      </div>

      {/* Center Foreground Interactive Hero Widget & Typography */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        {/* YouTube 44K Interactive Widget */}
        <div 
          ref={widgetRef} 
          className="inline-flex items-center justify-center gap-3 sm:gap-4 p-2 sm:p-2.5 rounded-2xl bg-[#0B1120]/80 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80 flex-wrap"
        >
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
            {/* Real YouTube Red Play Monogram */}
            <svg className="w-10 h-7 sm:w-12 sm:h-8 shrink-0" viewBox="0 0 159 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M154 17.5c-1.82-6.73-7.07-12-13.8-13.8C128.4 0 79.5 0 79.5 0S30.6 0 18.8 3.7C12.07 5.5 6.82 10.77 5 17.5 1.5 29.4 1.5 55 1.5 55s0 25.6 3.5 37.5c1.82 6.73 7.07 12 13.8 13.8 11.8 3.7 60.7 3.7 60.7 3.7s48.9 0 60.7-3.7c6.73-1.8 11.98-7.07 13.8-13.8 3.5-11.9 3.5-37.5 3.5-37.5s0-25.6-3.5-37.5z" fill="#FF0000"/>
              <path d="M64 78.77V31.23L104.5 55 64 78.77z" fill="#FFF"/>
            </svg>
            <div className="text-left leading-tight">
              <span className="text-white font-bold font-mono text-base sm:text-lg [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">
                {subscribers}K
              </span>
              <div className="text-white/70 text-[11px]">
                {t.hero_subscribers}
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-9 bg-white/20" />

          <div className="flex items-center gap-2">
            <a
              href="https://www.youtube.com/@tfdevs"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-4 sm:px-5 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-all duration-300 text-xs sm:text-sm shadow-lg hover:-translate-y-0.5"
            >
              {t.hero_watch_video}
            </a>
            <button
              onClick={() => onNavigate('/en/about-us')}
              className="h-9 px-4 sm:px-5 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm text-xs sm:text-sm hover:-translate-y-0.5"
            >
              {t.hero_about_us}
            </button>
          </div>
        </div>

        {/* Hero Title with Real Khmer Calligraphy & Drop Shadow */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold italic text-white tracking-tight leading-[1.2] [text-shadow:0_2px_14px_rgba(0,0,0,0.9),0_1px_4px_rgba(0,0,0,0.95)] max-w-3xl mx-auto font-sans">
          {t.hero_title}
        </h1>

        {/* Philosophy Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto [text-shadow:0_1px_8px_rgba(0,0,0,0.85)] font-normal">
          {t.hero_description}
        </p>

        {/* Founder Signature Attribution */}
        <div className="pt-3 inline-flex flex-col items-center border-t border-white/30">
          <a
            href="https://github.com/KimangKhenng"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-white/80 transition-colors underline decoration-white/50 hover:decoration-white underline-offset-4 [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]"
          >
            <span>{t.hero_author}</span>
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-xs text-white/75 mt-0.5 [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">
            {t.hero_author_title}
          </p>
        </div>
      </div>
    </section>
  );
};
