
import React, { useState } from 'react';
import { Page } from './types.ts';
import Header from './components/Header.tsx';
import BottomNav from './components/BottomNav.tsx';
import ProfileModal from './components/ProfileModal.tsx';
import Home from './pages/Home.tsx';
import Packages from './pages/Packages.tsx';
import Wallet from './pages/Wallet.tsx';
import WiFi from './pages/WiFi.tsx';
import Agents from './pages/Agents.tsx';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case Page.HOME: return <Home onNavigate={setActivePage} />;
      case Page.PACKAGES: return <Packages />;
      case Page.WALLET: return <Wallet />;
      case Page.WIFI: return <WiFi />;
      case Page.AGENTS: return <Agents />;
      default: return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="relative w-full h-screen sm:max-w-[414px] sm:h-[896px] sm:my-5 sm:rounded-[48px] sm:border-[8px] sm:border-slate-100 sm:shadow-[0_40px_100px_rgba(0,0,0,0.1)] bg-white/40 overflow-hidden flex flex-col">
        
        <Header onOpenProfile={() => setIsProfileOpen(true)} />

        <main className="flex-1 overflow-y-auto no-scrollbar px-6 pt-6">
          {renderPage()}
        </main>

        {/* Support Buttons Container */}
        <div className="absolute bottom-28 left-6 flex flex-col gap-3 z-[150]">
          {/* WhatsApp Button Only */}
          <a 
            href="https://wa.me/218000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle size={28} strokeWidth={2.5} />
          </a>
        </div>

        <BottomNav activePage={activePage} onPageChange={setActivePage} />

        <ProfileModal 
          isOpen={isProfileOpen} 
          onClose={() => setIsProfileOpen(false)} 
        />
      </div>
    </div>
  );
};

export default App;
