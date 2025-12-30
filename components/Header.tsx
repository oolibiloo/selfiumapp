
import React from 'react';
import { User } from 'lucide-react';

interface HeaderProps {
  onOpenProfile: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenProfile }) => {
  return (
    <header className="h-[100px] px-6 flex justify-between items-center sticky top-0 z-[100] bg-white/60 backdrop-blur-xl border-b border-black/[0.03]">
      <div className="flex items-center gap-2">
        {/* Selfium Logo Icon - Recreated as per image */}
        <div className="w-14 h-14 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-blue">
            {/* Outer Crescent */}
            <path d="M40 10 A 40 40 0 0 0 40 90 A 32 32 0 0 1 40 10 Z" />
            {/* Middle Crescent */}
            <path d="M55 22 A 28 28 0 0 0 55 78 A 22 22 0 0 1 55 22 Z" />
            {/* Inner Crescent */}
            <path d="M66 34 A 16 16 0 0 0 66 66 A 12 12 0 0 1 66 34 Z" />
          </svg>
        </div>

        {/* Branding Text */}
        <div className="flex flex-col items-center">
          <span className="font-inter font-black text-[34px] leading-none tracking-tighter text-brand-blue">selfium</span>
          <span className="font-inter font-black text-[13px] leading-none tracking-[0.45em] text-[#333333] mt-1 mr-[-0.45em]">TECH</span>
        </div>
      </div>
      
      <button 
        onClick={onOpenProfile}
        className="w-11 h-11 bg-white border border-black/5 shadow-sm rounded-full flex items-center justify-center text-brand-blue active:scale-90 transition-transform"
      >
        <User size={22} strokeWidth={2.5} />
      </button>
    </header>
  );
};

export default Header;
