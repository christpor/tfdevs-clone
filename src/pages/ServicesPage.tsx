import React from 'react';
import { 
  Code, Cpu, Smartphone, Cloud, Database, 
  Terminal, CheckCircle, ArrowRight, Sparkles 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      desc: 'Modern web applications using React, Vue, Next.js, and Nuxt. Engineered for extreme speed, SEO performance, and responsive layout fidelity.'
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning Integration',
      desc: 'Intelligent solutions including computer vision, natural language processing, LLM agent workflows, and predictive analytics.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      desc: 'Native and cross-platform mobile applications for iOS and Android with seamless backend syncing and offline resilience.'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture & Homelab',
      desc: 'Scalable cloud infrastructure on AWS, Google Cloud, and bare-metal Kubernetes (K3s) with automated ingress and edge caching.'
    },
    {
      icon: Terminal,
      title: 'DevOps & CI/CD Pipelines',
      desc: 'Automated deployment pipelines, Docker containerization, infrastructure-as-code, and system observability.'
    },
    {
      icon: Database,
      title: 'Database Architecture & Tuning',
      desc: 'Efficient schema modeling for PostgreSQL, MongoDB, Redis, and high-throughput query optimization.'
    }
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FE6E00]/10 border border-[#FE6E00]/30 text-xs font-semibold text-[#FE6E00] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Enterprise Consulting & Engineering</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
          Software Consulting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE6E00] to-amber-400">
            Services
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
          Transform Your Business with Expert Technology Solutions. At Technology For Development, we offer comprehensive software consulting services to help businesses navigate the complex world of technology.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FE6E00]/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FE6E00]/10 border border-[#FE6E00]/20 flex items-center justify-center text-[#FE6E00]">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Why Choose Us */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">Engineering Standards</span>
          <h2 className="text-3xl font-bold text-white">Why Choose Us?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white">Experienced Team</h4>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">Our consultants have 5+ years of experience working with startups and enterprises.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white">Quality Driven</h4>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">We follow best practices and industry standards to deliver high-quality solutions.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white">Agile Methodology</h4>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">Flexible and iterative approach ensuring quick delivery and adaptability.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white">Transparent Delivery</h4>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">Clear communication, regular progress updates, and full intellectual property ownership.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center p-8 rounded-3xl bg-gradient-to-r from-[#FE6E00]/20 to-transparent border border-[#FE6E00]/30 space-y-4">
        <h3 className="text-2xl font-bold text-white">Ready to Elevate Your Technology Architecture?</h3>
        <p className="text-sm text-[#9CA3AF] max-w-lg mx-auto">Get in touch with our engineering team for an initial assessment of your stack and objectives.</p>
        <button
          onClick={() => onNavigate('/en/collaborate')}
          className="px-6 py-3 rounded-xl font-bold text-sm bg-[#FE6E00] hover:bg-[#E05D00] text-white shadow-xl shadow-[#FE6E00]/30 transition-all inline-flex items-center gap-2"
        >
          <span>Request Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
