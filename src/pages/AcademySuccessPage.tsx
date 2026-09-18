import React from 'react';
import { CheckCircle2, ArrowRight, MessageSquare, Download, Sparkles } from 'lucide-react';

interface AcademySuccessPageProps {
  onNavigate: (path: string) => void;
}

export const AcademySuccessPage: React.FC<AcademySuccessPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center mx-auto text-green-400">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">
          Enrollment Confirmed
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Welcome to the Bootcamp!
        </h1>
        <p className="text-sm text-[#9CA3AF] max-w-lg mx-auto">
          Your seat in the <strong className="text-white">Code to Career: FullStack Bootcamp</strong> has been officially confirmed. We are thrilled to guide your software engineering journey.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-left space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-[#FE6E00]">Next Steps:</h3>
        <ul className="space-y-3 text-sm text-white/90">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">1</span>
            <div>
              <div className="font-semibold">Join the Student VIP Telegram Group</div>
              <div className="text-xs text-[#9CA3AF]">Access course announcements, syllabus updates, and peer networking.</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">2</span>
            <div>
              <div className="font-semibold">Environment Setup & Pre-work</div>
              <div className="text-xs text-[#9CA3AF]">Install VS Code, Node.js LTS, Docker Desktop, and Git before orientation.</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">3</span>
            <div>
              <div className="font-semibold">Orientation Day at Phnom Penh Classroom</div>
              <div className="text-xs text-[#9CA3AF]">Meet Chau Dara and your cohort peers in Chbar Ampov.</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://t.me/tfdevs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl font-bold text-sm bg-[#FE6E00] hover:bg-[#E05D00] text-white flex items-center gap-2 shadow-lg shadow-[#FE6E00]/20"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Join VIP Telegram</span>
        </a>

        <button
          onClick={() => onNavigate('/en')}
          className="px-6 py-3 rounded-xl font-bold text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center gap-2"
        >
          <span>Return to Homepage</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
