import React, { useState } from 'react';
import { Menu, X, ExternalLink, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/en' },
    { label: 'Articles', path: '/en/articles' },
    { label: 'Academy', path: '/en/academy', badge: 'Enrolling' },
    { label: 'Collaborate', path: '/en/collaborate' },
    { label: 'Services', path: '/en/services' },
    { label: 'About', path: '/en/about-us' }
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0B1120]/85 border-b border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('/en')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/15 group-hover:border-[#FE6E00] transition-colors">
              <img 
                src="/assets/images/_nuxt_tfd_logo.Qnfrg85Z.jpeg" 
                alt="Teaching For Development Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback logo if missing
                  e.currentTarget.src = '/assets/images/mqdefault.jpg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#FE6E00] transition-colors">
                TFDevs
              </span>
              <span className="text-[11px] text-[#9CA3AF] -mt-1 font-mono">
                Tech For Development
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== '/en' && currentPath.startsWith(item.path));
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full bg-[#FE6E00]/20 text-[#FE6E00] border border-[#FE6E00]/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switch */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#9CA3AF]">
              <Globe className="w-3.5 h-3.5 text-[#FE6E00]" />
              <span>EN</span>
              <span className="text-white/20">|</span>
              <span className="text-white/50 hover:text-white cursor-pointer transition-colors" title="Khmer Language">KH</span>
            </div>

            {/* Bootcamp CTA */}
            <button
              onClick={() => handleNavClick('/en/academy')}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FE6E00] text-white hover:bg-[#E05D00] shadow-lg shadow-[#FE6E00]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join Bootcamp</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#9CA3AF] hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (with data-lenis-prevent) */}
      {mobileMenuOpen && (
        <div 
          data-lenis-prevent="true"
          className="md:hidden border-b border-white/10 bg-[#0B1120]/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2 overscroll-contain"
        >
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-left transition-colors ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-[#FE6E00]/20 text-[#FE6E00] border border-[#FE6E00]/30">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('/en/academy')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider bg-[#FE6E00] text-white hover:bg-[#E05D00]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Join Bootcamp • 20 Slots</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
