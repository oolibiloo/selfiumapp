
import React from 'react';
import { Plus, CreditCard, Smartphone, Ticket, ArrowDownLeft } from 'lucide-react';

const Wallet: React.FC = () => {
  return (
    <div className="space-y-6 pb-32 animate-in fade-in duration-500">
      {/* The Animated Main Wallet Card */}
      <div className="relative h-56 w-full glass-card rounded-[32px] p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl hover:shadow-brand-blue/15 border border-white/80 group">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity"></div>
        
        <div className="relative z-10 flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase mb-1 transition-colors group-hover:text-blue-600">Available Funds</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-inter font-black text-brand-dark transition-all group-hover:tracking-tight">0.00</span>
              <span className="text-lg font-bold text-brand-dark/30">د.ل</span>
            </div>
          </div>
          <button className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-blue/25 active:scale-90 transition-all hover:rotate-90 hover:bg-blue-600">
            <Plus size={24} strokeWidth={3} />
          </button>
        </div>
        
        <div className="relative z-10 flex justify-between items-end">
          <div className="space-y-0.5">
             <p className="text-[8px] font-inter font-black text-brand-blue/40 tracking-[3px] group-hover:text-brand-blue/60 transition-colors">MEMBER ID 1805703</p>
             <p className="text-brand-dark font-black text-sm uppercase tracking-tight group-hover:translate-x-1 transition-transform">M. ABDULLAH</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/5 rounded-full backdrop-blur-md border border-white/20 transition-all group-hover:bg-brand-blue/5">
            <CreditCard size={14} className="text-brand-dark/50 group-hover:text-brand-blue" />
            <span className="text-[10px] font-bold text-brand-dark/60 group-hover:text-brand-blue/80">Selfium Pay</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-brand-dark font-black text-sm px-2">طرق الشحن السريعة</h4>
        <div className="grid grid-cols-2 gap-3">
          <WalletItem icon={<Ticket />} label="كروت شحن" />
          <WalletItem icon={<Smartphone />} label="خدمة سداد" />
          <WalletItem icon={<CreditCard />} label="تداول" />
          <WalletItem icon={<ArrowDownLeft />} label="تحويل رصيد" />
        </div>
      </div>
    </div>
  );
};

const WalletItem = ({ icon, label }: any) => (
  <button className="glass-card p-5 rounded-3xl flex items-center gap-3 border border-white/50 active:scale-95 transition-all text-right hover:bg-white/60 hover:border-brand-blue/20 group">
    <div className="w-10 h-10 rounded-xl bg-brand-blue/5 text-brand-blue flex items-center justify-center transition-all group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110">
      {icon}
    </div>
    <span className="text-brand-dark font-black text-[11px] transition-colors group-hover:text-brand-blue">{label}</span>
  </button>
);

export default Wallet;
