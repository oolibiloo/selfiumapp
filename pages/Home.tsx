
import React from 'react';
import { Page } from '../types';
import { Trophy, Wallet, Zap, ShieldCheck, ArrowRight, Activity } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6 pb-40 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Main Status Glass Card */}
      <div className="glass-card rounded-[32px] p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-[40px] rounded-full -mr-16 -mt-16"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="bg-brand-blue/10 px-3 py-1 rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black text-brand-blue uppercase tracking-wider">Active Connection</span>
            </div>
            <Activity size={18} className="text-brand-blue/40" />
          </div>

          <div className="flex flex-col items-center py-4">
            <span className="text-8xl font-inter font-black text-brand-blue tracking-tighter animate-soft-float">∞</span>
            <p className="text-brand-dark font-black text-xl mt-2">Unlimited 21M</p>
            <p className="text-slate-400 text-xs font-bold mt-1">ينتهي في 25 يناير 2026</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-black/[0.03] pt-6">
          <QuickStat label="الرصيد" value="0.00" />
          <QuickStat label="الأجهزة" value="3" />
          <QuickStat label="النقاط" value="450" />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 gap-4">
        <HomeAction 
          icon={<Wallet size={22} />} 
          label="شحن الرصيد" 
          color="bg-blue-500" 
          onClick={() => onNavigate(Page.WALLET)} 
        />
        <HomeAction 
          icon={<Zap size={22} />} 
          label="خدمة سلفني" 
          color="bg-amber-500" 
          onClick={() => alert('تم تفعيل 24 ساعة إضافية')} 
        />
        <HomeAction 
          icon={<ShieldCheck size={22} />} 
          label="أمان WiFi" 
          color="bg-green-500" 
          onClick={() => onNavigate(Page.WIFI)} 
        />
        <HomeAction 
          icon={<Trophy size={22} />} 
          label="جوائز الولاء" 
          color="bg-purple-500" 
          onClick={() => alert('نقاطك الحالية: 450')} 
        />
      </div>

      {/* Promotions */}
      <button className="w-full glass-card rounded-2xl p-5 flex items-center justify-between group active:scale-[0.98] transition-all">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/20">
            <ArrowRight size={20} />
          </div>
          <div className="text-right">
            <p className="text-brand-dark font-black text-sm">ترقية الباقة الحالية</p>
            <p className="text-slate-400 text-[10px] font-bold">احصل على سرعات تصل لـ 50M</p>
          </div>
        </div>
      </button>
    </div>
  );
};

const QuickStat = ({ label, value }: any) => (
  <div className="text-center">
    <p className="text-[10px] font-extrabold text-slate-400 mb-0.5">{label}</p>
    <p className="font-inter font-black text-brand-dark text-sm">{value}</p>
  </div>
);

const HomeAction = ({ icon, label, color, onClick }: any) => (
  <button 
    onClick={onClick}
    className="glass-card p-6 rounded-[28px] flex flex-col items-center gap-3 active:scale-95 transition-all"
  >
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/5 ${color}`}>
      {icon}
    </div>
    <span className="text-brand-dark font-black text-xs">{label}</span>
  </button>
);

export default Home;
