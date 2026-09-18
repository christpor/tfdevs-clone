import React, { useState, useEffect } from 'react';
import { QrCode, ShieldCheck, ArrowLeft, CheckCircle, Clock, Copy, AlertCircle } from 'lucide-react';

interface AcademyPaymentPageProps {
  onNavigate: (path: string) => void;
}

export const AcademyPaymentPage: React.FC<AcademyPaymentPageProps> = ({ onNavigate }) => {
  const [selectedSchedule, setSelectedSchedule] = useState('weekday-morning');
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 mins
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulatePayment = () => {
    setIsVerifying(true);
    setTimeout(() => {
      onNavigate('/en/academy/success');
    }, 1500);
  };

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <button
        onClick={() => onNavigate('/en/academy')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#9CA3AF] hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Academy Overview</span>
      </button>

      <div className="text-center space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#FE6E00]">
          Instant Registration Checkout
        </span>
        <h1 className="text-3xl font-extrabold text-white">
          Bakong KHQR Payment Checkout
        </h1>
        <p className="text-sm text-[#9CA3AF]">
          Scan with any Cambodian Mobile Banking App (ABA, ACLEDA, Wing, Canadia, Bakong)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Schedule & Plan Review */}
        <div className="md:col-span-6 space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              1. Select Cohort Schedule
            </h3>
            <div className="space-y-2.5">
              {[
                { id: 'weekday-morning', label: 'Mon / Wed / Fri Morning', time: '8:30 AM - 11:30 AM' },
                { id: 'weekday-afternoon', label: 'Mon / Wed / Fri Afternoon', time: '1:30 PM - 4:30 PM' },
                { id: 'weekend-cohort', label: 'Saturday & Sunday', time: '8:30 AM - 11:30 AM' }
              ].map(s => (
                <label
                  key={s.id}
                  onClick={() => setSelectedSchedule(s.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                    selectedSchedule === s.id
                      ? 'bg-[#FE6E00]/10 border-[#FE6E00] text-white'
                      : 'bg-white/5 border-white/5 text-[#9CA3AF] hover:border-white/20'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-sm font-semibold">{s.label}</div>
                    <div className="text-xs font-mono text-[#9CA3AF]">{s.time}</div>
                  </div>
                  <input
                    type="radio"
                    name="schedule"
                    checked={selectedSchedule === s.id}
                    onChange={() => setSelectedSchedule(s.id)}
                    className="accent-[#FE6E00]"
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Order Summary
            </h3>
            <div className="space-y-2 text-sm text-[#9CA3AF]">
              <div className="flex justify-between">
                <span>Course</span>
                <span className="text-white font-medium">Code to Career (15 Wks)</span>
              </div>
              <div className="flex justify-between">
                <span>Tuition Fee</span>
                <span className="text-white font-mono">$450.00</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Discount</span>
                <span className="text-green-400 font-mono">-$0.00</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between text-base font-bold text-white">
                <span>Total Amount</span>
                <span className="font-mono text-[#FE6E00]">$450.00 USD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Bakong QR Code */}
        <div className="md:col-span-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-5">
          <div className="flex items-center justify-between px-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#FE6E00] font-mono font-semibold">
              <Clock className="w-3.5 h-3.5" />
              Valid for: {formatTime(timeLeft)}
            </span>
            <span className="text-xs font-mono text-green-400">KHQR Ready</span>
          </div>

          {/* Simulated KHQR Visual Frame */}
          <div className="p-6 rounded-2xl bg-white text-slate-900 shadow-2xl max-w-xs mx-auto space-y-3">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="text-left">
                <div className="text-[10px] font-bold text-red-600 uppercase tracking-widest">BAKONG KHQR</div>
                <div className="text-xs font-bold text-slate-800">TEACHING FOR DEVELOPMENT</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold font-mono text-slate-900">$450.00</div>
                <div className="text-[9px] text-slate-500">USD</div>
              </div>
            </div>

            {/* QR Pattern Representation */}
            <div className="aspect-square bg-slate-100 rounded-xl p-4 flex flex-col items-center justify-center border border-dashed border-slate-300 relative group">
              <QrCode className="w-44 h-44 text-slate-900" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-md">
                  <img src="/assets/images/_nuxt_tfd_logo.Qnfrg85Z.jpeg" alt="TFD" className="w-7 h-7 object-cover rounded" />
                </div>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 font-mono truncate">
              00020101021229300016bakong0123...450.00
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleSimulatePayment}
              disabled={isVerifying}
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#FE6E00] hover:bg-[#E05D00] text-white shadow-xl shadow-[#FE6E00]/30 transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isVerifying ? 'Verifying Bakong Transaction...' : 'I Have Completed Payment'}</span>
            </button>

            <p className="text-[11px] text-[#9CA3AF] leading-relaxed">
              Once your transfer is recognized via Bakong Webhook, your seat in the cohort will be automatically reserved and your receipt issued.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
