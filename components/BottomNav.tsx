
import React from 'react';
import { Page } from '../types';
import { Home, Layers, Wallet, Wifi, Store } from 'lucide-react';

interface BottomNavProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage, onPageChange }) => {
  const navItems = [
    { id: Page.HOME, label: 'الرئيسية', icon: Home },
    { id: Page.PACKAGES, label: 'الباقات', icon: Layers },
    { id: Page.WALLET, label: 'المحفظة', icon: Wallet },
    { id: Page.WIFI, label: 'WiFi', icon: Wifi },
    { id: Page.AGENTS, label: 'الوكلاء', icon: Store },
  ];

  return (
    <div className="absolute bottom-4 left-4 right-4 z-[150]">
      <nav className="glass-nav h-[85px] rounded-[30px] flex justify-around items-center px-2 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-white/80">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex flex-col items-center justify-center gap-1.5 w-full transition-all duration-300 ${
                isActive ? 'text-brand-blue scale-105' : 'text-slate-400'
              }`}
            >
              <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-brand-blue/10 scale-110 shadow-sm shadow-brand-blue/5' : ''}`}>
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-tajawal font-black transition-colors ${isActive ? 'text-brand-blue' : 'text-slate-500'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNav;
