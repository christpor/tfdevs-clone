import React, { useState } from 'react';
import { BOOTCAMP_MODULES } from '../data/content';
import { 
  CheckCircle2, Clock, Calendar, Users, Award, 
  MapPin, ArrowRight, ShieldCheck, Laptop, Terminal, 
  Sparkles, Check, ChevronDown, ChevronUp 
} from 'lucide-react';

interface AcademyPageProps {
  onNavigate: (path: string) => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ onNavigate }) => {
  const [expandedModule, setExpandedModule] = useState<string | null>('module-1');

  return (
    <div className="space-y-24 py-10">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FE6E00]/10 border border-[#FE6E00]/30 text-xs font-semibold text-[#FE6E00] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academy • In-Person Classes • Only 20 Slots Available</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Code to Career <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE6E00] to-amber-400">
              FullStack Bootcamp
            </span>
          </h1>

          <p className="text-lg text-[#9CA3AF] leading-relaxed">
            Transform Your Career in 15 Weeks. Join our intensive in-person bootcamp and become a full-stack developer ready for the modern tech industry.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('/en/academy/payment')}
              className="px-8 py-4 rounded-xl font-bold text-sm bg-[#FE6E00] hover:bg-[#E05D00] text-white shadow-xl shadow-[#FE6E00]/30 transition-all flex items-center gap-2 group"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#curriculum"
              className="px-8 py-4 rounded-xl font-bold text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all"
            >
              Course Curriculum
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-white font-mono">15</div>
              <div className="text-xs text-[#9CA3AF] mt-1">Weeks Program</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-[#FE6E00] font-mono">20</div>
              <div className="text-xs text-[#9CA3AF] mt-1">Slots Per Class</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-white font-mono">1-on-1</div>
              <div className="text-xs text-[#9CA3AF] mt-1">Expert Mentorship</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold text-green-400 font-mono">100%</div>
              <div className="text-xs text-[#9CA3AF] mt-1">Hands-On Practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Images & Small Class Size */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">
              Small Class Size
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Only 20 Slots Per Class
            </h2>
            <h3 className="text-xl font-semibold text-white/90">
              Personalized Attention, Maximum Learning
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              We intentionally limit each class to 20 students to ensure every learner receives personalized guidance, immediate feedback, and the attention they deserve. Small classes mean better learning outcomes.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FE6E00] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">1-on-1 Mentorship</div>
                  <div className="text-xs text-[#9CA3AF]">Direct access to instructors for personalized guidance</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FE6E00] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Hands-on Practice</div>
                  <div className="text-xs text-[#9CA3AF]">More time on real projects, less time waiting</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FE6E00] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Collaborative Learning</div>
                  <div className="text-xs text-[#9CA3AF]">Build meaningful connections with peers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/assets/images/images_academy_in-class-2.png" 
                alt="TFD Classroom in session" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/15">
                <span className="text-xs font-mono text-[#FE6E00] font-bold">LIMITED ENROLLMENT ENSURES EXCELLENCE</span>
                <p className="text-xs text-white/90 mt-0.5">Cohort size capped strictly to protect code review depth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Selection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">
            Learn at Your Own Pace
          </span>
          <h2 className="text-3xl font-bold text-white mt-1">
            Choose Your Perfect Schedule
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-2">
            We offer flexible class schedules to fit your lifestyle. Whether you're a working professional or a full-time student, find the perfect time to transform your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 hover:border-[#FE6E00]/40 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#FE6E00]/10 flex items-center justify-center text-[#FE6E00]">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Weekday Morning</h3>
            <p className="text-xs text-[#9CA3AF]">Mon / Wed / Fri</p>
            <div className="font-mono text-sm text-[#FE6E00] font-semibold">8:30 AM - 11:30 AM</div>
            <p className="text-xs text-[#9CA3AF]">Ideal for morning learners and university students with afternoon flexibility.</p>
            <button
              onClick={() => onNavigate('/en/academy/payment')}
              className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-[#FE6E00] text-white transition-colors"
            >
              Select Schedule
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-[#FE6E00]/40 space-y-4 relative shadow-xl shadow-[#FE6E00]/5">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-bold bg-[#FE6E00] text-white">
              POPULAR
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#FE6E00]/10 flex items-center justify-center text-[#FE6E00]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Weekday Afternoon</h3>
            <p className="text-xs text-[#9CA3AF]">Mon / Wed / Fri</p>
            <div className="font-mono text-sm text-[#FE6E00] font-semibold">1:30 PM - 4:30 PM</div>
            <p className="text-xs text-[#9CA3AF]">Perfect for full-time intensive study with evening project sprint time.</p>
            <button
              onClick={() => onNavigate('/en/academy/payment')}
              className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#FE6E00] hover:bg-[#E05D00] text-white transition-colors"
            >
              Select Schedule
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 hover:border-[#FE6E00]/40 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#FE6E00]/10 flex items-center justify-center text-[#FE6E00]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Weekend Cohort</h3>
            <p className="text-xs text-[#9CA3AF]">Saturday & Sunday</p>
            <div className="font-mono text-sm text-[#FE6E00] font-semibold">8:30 AM - 11:30 AM</div>
            <p className="text-xs text-[#9CA3AF]">Ideal for working professionals who need flexibility while switching careers.</p>
            <button
              onClick={() => onNavigate('/en/academy/payment')}
              className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-[#FE6E00] text-white transition-colors"
            >
              Select Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section id="curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">
            Course Curriculum
          </span>
          <h2 className="text-3xl font-bold text-white mt-1">
            15 Weeks Intensive Program
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-2">
            A comprehensive, battle-tested engineering curriculum taking you from native web primitives to production cloud deployments.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {BOOTCAMP_MODULES.map((mod, idx) => {
            const isExpanded = expandedModule === mod.id;
            return (
              <div 
                key={mod.id}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : mod.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-[#FE6E00]">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="text-xs text-[#FE6E00] font-mono font-semibold">{mod.duration}</div>
                      <h4 className="text-base font-bold text-white">{mod.title}</h4>
                      <p className="text-xs text-[#9CA3AF] mt-0.5">{mod.description}</p>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-[#9CA3AF]" /> : <ChevronDown className="w-5 h-5 text-[#9CA3AF]" />}
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5">
                    <div className="text-xs font-mono uppercase text-[#9CA3AF] mb-3">Key Learning Objectives:</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map((t, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-white/90">
                          <Check className="w-3.5 h-3.5 text-[#FE6E00] shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing & Investment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/15 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">
            One-Time Payment • Skills for Life
          </span>
          <h2 className="text-3xl font-bold text-white">Investment in Your Future</h2>

          <div className="space-y-1">
            <div className="text-5xl font-extrabold text-white font-mono">$450</div>
            <div className="text-xs text-[#9CA3AF]">No hidden fees or recurring charges • Bakong KHQR Accepted</div>
          </div>

          <ul className="space-y-2.5 text-sm text-[#9CA3AF] text-left max-w-sm mx-auto pt-2">
            <li className="flex items-center gap-2.5 text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#FE6E00] shrink-0" />
              <span>Full 15-week bootcamp access</span>
            </li>
            <li className="flex items-center gap-2.5 text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#FE6E00] shrink-0" />
              <span>Lifetime access to course materials & updates</span>
            </li>
            <li className="flex items-center gap-2.5 text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#FE6E00] shrink-0" />
              <span>Career guidance and technical portfolio review</span>
            </li>
            <li className="flex items-center gap-2.5 text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#FE6E00] shrink-0" />
              <span>Access to exclusive alumni and VIP Discord/Telegram</span>
            </li>
          </ul>

          <button
            onClick={() => onNavigate('/en/academy/payment')}
            className="w-full py-4 rounded-xl font-bold text-sm bg-[#FE6E00] hover:bg-[#E05D00] text-white shadow-xl shadow-[#FE6E00]/30 transition-all flex items-center justify-center gap-2"
          >
            <span>Proceed to Enrollment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Instructor & Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Instructor */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">
                Meet Your Instructor
              </span>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FE6E00]">
                  <img src="/assets/images/images_academy_instructor.png" alt="Chau Dara" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Chau Dara (ចៅ ដារ៉ា)</h3>
                  <p className="text-xs text-[#FE6E00] font-mono">Lead Instructor & Founder</p>
                </div>
              </div>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                With over 10 years of experience in software development and a passion for teaching, Chau Dara founded Teaching For Development to empower the next generation of Cambodian developers.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-[#9CA3AF] font-mono">
              Expertise: Full-Stack Development, DevOps, System Architecture, Kubernetes
            </div>
          </div>

          {/* Location */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">
                Our Location
              </span>
              <h3 className="text-xl font-bold text-white">Physical Classroom in Phnom Penh</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Visit us at our physical classroom location. We're conveniently located in the heart of Phnom Penh.
              </p>
              <div className="flex items-start gap-2 text-sm text-white/90">
                <MapPin className="w-5 h-5 text-[#FE6E00] shrink-0 mt-0.5" />
                <span>Sangkat Nirouth, Chbar Ampov, Phnom Penh, Cambodia</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 h-40 relative">
              <img src="/assets/images/images_academy_map-google.png" alt="Map to TFD Classroom" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-black/80 backdrop-blur-md text-xs font-bold text-white hover:text-[#FE6E00] border border-white/20 transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
