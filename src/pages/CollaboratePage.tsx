import React, { useState } from 'react';
import { PARTNERS, SOCIAL_LINKS } from '../data/content';
import { 
  Users, Eye, Award, CheckCircle2, Send, 
  Sparkles, ExternalLink, ShieldCheck, Mail 
} from 'lucide-react';

interface CollaboratePageProps {
  onNavigate: (path: string) => void;
}

export const CollaboratePage: React.FC<CollaboratePageProps> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FE6E00]/10 border border-[#FE6E00]/30 text-xs font-semibold text-[#FE6E00] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Brand Partnerships & Sponsorships</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
          Partner with Cambodia's <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE6E00] to-amber-400">
            Leading Tech Content Creator
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
          TFDevs is on a mission to educate, inspire, and empower Cambodia's technology community through high-quality, authentic content. Partner with us to put your brand in front of the region's most engaged tech audience.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a
            href="#inquiry"
            className="px-6 py-3 rounded-xl font-bold text-sm bg-[#FE6E00] hover:bg-[#E05D00] text-white shadow-xl shadow-[#FE6E00]/25 transition-all"
          >
            Work With Us
          </a>
          <a
            href="#reach"
            className="px-6 py-3 rounded-xl font-bold text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all"
          >
            Audience Metrics
          </a>
        </div>
      </div>

      {/* 4 Pillars */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: 'Transparent Partnerships', desc: 'Clear reporting & authentic sponsorship integration' },
          { title: 'Technical Expertise', desc: 'Written & tested by active software architects' },
          { title: 'Local Market Authority', desc: '#1 trusted source for Cambodian developers' },
          { title: 'Multiplatform Reach', desc: 'YouTube, Facebook, Telegram, and Web presence' }
        ].map((p, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <h4 className="text-sm font-bold text-white">{p.title}</h4>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Why TFDevs */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">Why TFDevs</span>
          <h2 className="text-3xl font-bold text-white">Why Partner With TFDevs?</h2>
          <p className="text-sm text-[#9CA3AF]">We give brands direct, authentic access to Cambodia's most engaged technology community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="text-xs font-mono text-[#FE6E00] font-bold">#1 TECH CHANNEL IN CAMBODIA</div>
            <h3 className="text-base font-bold text-white">The Leading Tech Voice</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              The leading technology-focused YouTube channel producing Khmer-language tech content for Cambodian audiences.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="text-xs font-mono text-[#FE6E00] font-bold">TARGETED TECH AUDIENCE</div>
            <h3 className="text-base font-bold text-white">High Intent Demographic</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Trusted by developers, students, IT professionals, and tech enthusiasts across Cambodia and the region.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="text-xs font-mono text-[#FE6E00] font-bold">HIGH-QUALITY PRODUCTION</div>
            <h3 className="text-base font-bold text-white">Professional Production</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Professional educational and product-focused content with strong production values and consistent publishing.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Reach Metrics */}
      <section id="reach" className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">Verified Figures</span>
          <h2 className="text-3xl font-bold text-white">Social Media Reach</h2>
          <p className="text-sm text-[#9CA3AF]">A dedicated technical audience across the leading digital ecosystems.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SOCIAL_LINKS.map(s => (
            <div key={s.name} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-white/5 flex items-center justify-center p-2">
                <img src={s.icon} alt={s.name} className="w-full h-full object-contain" />
              </div>
              <div className="text-xl font-bold text-white font-mono">{s.subscribers || s.followers || s.members || s.repos}</div>
              <div className="text-xs text-[#9CA3AF]">{s.name} Reach</div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Collaborators */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">Portfolio</span>
          <h2 className="text-3xl font-bold text-white">Previous Collaborations</h2>
          <p className="text-sm text-[#9CA3AF]">We have collaborated with national universities, global developer tools, and regional enterprises.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {PARTNERS.map(p => (
            <div key={p.name} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex flex-col items-center justify-center text-center space-y-3">
              <div className="h-10 w-28 flex items-center justify-center">
                <img src={p.image} alt={p.name} className="max-h-8 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">{p.name}</div>
                <div className="text-[10px] text-[#9CA3AF] line-clamp-1">{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section id="inquiry" className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-white">Start a Partnership Conversation</h3>
          <p className="text-xs text-[#9CA3AF]">Fill out this brief inquiry and our team will get back within 24 hours.</p>
        </div>

        {formSubmitted ? (
          <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
            <h4 className="text-base font-bold text-white">Inquiry Received!</h4>
            <p className="text-xs text-[#9CA3AF]">Thank you for reaching out. We will contact your company email shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white/80">Company / Brand Name</label>
                <input required type="text" placeholder="e.g. Acme Cloud" className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FE6E00]" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white/80">Work Email</label>
                <input required type="email" placeholder="contact@company.com" className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FE6E00]" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white/80">Collaboration Type</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-[#111827] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FE6E00]">
                <option>YouTube Video Dedicated Sponsor</option>
                <option>Tech Article & Tutorial Sponsorship</option>
                <option>FullStack Bootcamp Academy Partner</option>
                <option>Event Speaking & Developer Workshop</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white/80">Message & Objectives</label>
              <textarea required rows={4} placeholder="Tell us about your brand campaign, target timeline, and goals..." className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FE6E00]"></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#FE6E00] hover:bg-[#E05D00] text-white shadow-xl shadow-[#FE6E00]/25 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Partnership Inquiry</span>
            </button>
          </form>
        )}
      </section>
    </div>
  );
};
