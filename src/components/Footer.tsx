import React from 'react';
import { SOCIAL_LINKS } from '../data/content';
import { ArrowUpRight, Heart, Code2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/10 bg-[#0B1120] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-white/20">
                <img 
                  src="/assets/images/_nuxt_tfd_logo.Qnfrg85Z.jpeg" 
                  alt="TFD Logo" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Teaching For Development
              </span>
            </div>
            <p className="text-sm text-[#9CA3AF] max-w-md leading-relaxed">
              Empowering Cambodia's tech generation through hands-on fullstack education, real-world DevOps engineering, and authentic open-source knowledge sharing.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#9CA3AF]">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono">
                <Code2 className="w-3.5 h-3.5 mr-1.5 text-[#FE6E00]" />
                Phnom Penh, Cambodia
              </span>
              <span>•</span>
              <span className="font-mono text-[#FE6E00]">info@tfdevs.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Platform & Learning
            </h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li>
                <button onClick={() => onNavigate('/en')} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/en/academy')} className="hover:text-[#FE6E00] transition-colors flex items-center gap-1">
                  Code to Career Bootcamp
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FE6E00]"></span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/en/articles')} className="hover:text-white transition-colors">Tech Articles & Homelab</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/en/services')} className="hover:text-white transition-colors">Consulting Services</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/en/collaborate')} className="hover:text-white transition-colors">Partner With Us</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/en/about-us')} className="hover:text-white transition-colors">About Chau Dara & TFD</button>
              </li>
            </ul>
          </div>

          {/* Social Communities */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Communities
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-xs text-[#9CA3AF] hover:text-white transition-all group"
                >
                  <img src={s.icon} alt={s.name} className="w-4 h-4 object-contain rounded" />
                  <span className="truncate">{s.name}</span>
                  <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[#FE6E00]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <p>© 2026 Teaching For Development (TFD). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('/en/about-us')} className="hover:text-white transition-colors">Terms & Privacy</button>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> for Cambodian Engineers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
