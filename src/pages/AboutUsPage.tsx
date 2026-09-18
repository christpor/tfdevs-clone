import React from 'react';
import { SOCIAL_LINKS } from '../data/content';
import { Heart, Sparkles, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (path: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FE6E00]/10 border border-[#FE6E00]/30 text-xs font-semibold text-[#FE6E00] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Story & Mission</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          About Us
        </h1>
        <p className="text-base text-[#9CA3AF] max-w-xl mx-auto">
          Learn about our mission to bring technology education to everyone in Cambodia.
        </p>
      </div>

      {/* Chau Dara Story Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-white/10">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#FE6E00] shrink-0">
            <img 
              src="/assets/images/images_academy_instructor.png" 
              alt="Chau Dara" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="text-center sm:text-left space-y-1">
            <h2 className="text-2xl font-bold text-white">Chau Dara (ចៅ ដារ៉ា)</h2>
            <p className="text-sm text-[#FE6E00] font-mono">Founder of Teaching For Development (TFD)</p>
            <p className="text-xs text-[#9CA3AF]">Senior Software Architect & Homelab Enthusiast</p>
          </div>
        </div>

        {/* Verbatim Story */}
        <div className="space-y-6 text-base text-[#D1D5DB] leading-relaxed">
          <h3 className="text-xl font-bold text-white">Why do I write this blog?</h3>
          
          <p>
            I love expressing my opinion by writing. Writing improves my vocabulary. It can also make my life less boring during my stay in Japan (Since 2021).
          </p>

          <p>
            I started TFD in 2014 when I was in grade 11. I didn't know much about computers at that time, let alone how to edit and produce a proper video.
          </p>

          <p>
            The only knowledge I could share at that time (2014) was <strong className="text-white">English</strong>. It wasn't perfect. Why did I have such a stomach to leave my comfort zone? I think it has something to do with <strong className="text-[#FE6E00]">motivation</strong>. I always have curiosity about how things work around me.
          </p>

          <p>
            I started a small blog with Google Blogger when I was in grade 10. It wasn't a success, but it was fun. I learned about <code className="text-[#FE6E00] font-mono bg-white/5 px-1.5 py-0.5 rounded">html</code> and how to style my elements. By keep doing this over and over, I gained knowledge and perfection along the way. I wasn't even aware of that.
          </p>

          <p>
            I hope this blog can inspire the younger generation in Cambodia to seek positive development in life and embrace the challenges of technology.
          </p>
        </div>
      </div>

      {/* Social Network Section */}
      <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 text-center space-y-6">
        <h3 className="text-xl font-bold text-white">Join Our Social Networks!</h3>
        <p className="text-sm text-[#9CA3AF] max-w-md mx-auto">
          Connect with Chau Dara across all official channels and stay up to date with new tutorials and workshops.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
          {SOCIAL_LINKS.map(s => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FE6E00]/40 flex items-center justify-center gap-2.5 text-xs text-white font-medium transition-all"
            >
              <img src={s.icon} alt={s.name} className="w-4 h-4 object-contain" />
              <span>{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
