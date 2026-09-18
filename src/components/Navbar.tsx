import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Globe, ArrowUpRight } from 'lucide-react';
import { LOCALES, Locale } from '../data/locales';

interface NavbarProps {
  currentPath: string;
  locale: Locale;
  onNavigate: (path: string) => void;
  onToggleLocale: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, locale, onNavigate, onToggleLocale }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const t = LOCALES[locale];

  const navItems = [
    { label: t.nav_home, path: '/en' },
    { label: t.nav_articles, path: '/en/articles' },
    { label: t.nav_academy, path: '/en/academy' },
    { label: `${t.nav_playrooms} ↗`, path: 'https://tfdevs.com/en/courses', isExternal: true },
    { label: t.nav_collaborate, path: '/en/collaborate' },
    { label: t.nav_about, path: '/en/about-us' }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setMobileMenuOpen(false);
    if (item.isExternal) {
      window.open(item.path, '_blank');
    } else {
      onNavigate(item.path);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-3 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto">
        <div className="pointer-events-auto flex items-center justify-between h-14 px-4 sm:px-6 rounded-2xl backdrop-blur-xl bg-[#0B1120]/80 border border-white/10 shadow-2xl transition-all">
          {/* Brand Monogram */}
          <div 
            onClick={() => onNavigate('/en')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/15 group-hover:border-[#FE6E00] transition-colors flex items-center justify-center bg-black/40">
              <img 
                src="/assets/images/_nuxt_tfd_logo.Qnfrg85Z.jpeg" 
                alt="TFD Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/assets/images/mqdefault.jpg';
                }}
              />
            </div>
            <span className="font-bold text-base tracking-tight text-white group-hover:text-[#FE6E00] transition-colors">
              TFDevs
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 font-sans">
            {navItems.map((item) => {
              const isActive = !item.isExternal && (currentPath === item.path || (item.path !== '/en' && currentPath.startsWith(item.path)));
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons: Dark Mode & Language Toggle */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLocale}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors"
              title="Switch Language (Khmer / English)"
            >
              <Globe className="w-3.5 h-3.5 text-[#FE6E00]" />
              <span className="font-mono text-[11px] uppercase">{locale === 'km' ? 'ភាសាខ្មែរ' : 'English'}</span>
            </button>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center ml-1">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/5"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          data-lenis-prevent="true"
          className="pointer-events-auto max-w-5xl mx-auto mt-2 rounded-2xl border border-white/10 bg-[#0B1120]/95 backdrop-blur-2xl p-4 space-y-1.5 md:hidden shadow-2xl overscroll-contain"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
