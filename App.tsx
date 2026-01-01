
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import BottomNav from './components/BottomNav.tsx';
import ProfileModal from './components/ProfileModal.tsx';
import Home from './pages/Home.tsx';
import Packages from './pages/Packages.tsx';
import Wallet from './pages/Wallet.tsx';
import WiFi from './pages/WiFi.tsx';
import Agents from './pages/Agents.tsx';
import AIChatModal from './components/AIChatModal.tsx';
import { Page } from './types.ts';
import { MessageCircle, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  // Use local state for routing instead of react-router-dom to fix missing export errors
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  // Simple conditional rendering for pages
  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case Page.PACKAGES:
        return <Packages />;
      case Page.WALLET:
        return <Wallet />;
      case Page.WIFI:
        return <WiFi />;
      case Page.AGENTS:
        return <Agents />;
      default:
        return <Home onNavigate={setCurrentPage} />;
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
          {/* AI Support Button */}
          <button 
            onClick={() => setIsAIChatOpen(true)}
            className="w-14 h-14 bg-brand-blue rounded-full flex items-center justify-center text-white shadow-xl shadow-brand-blue/30 hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles size={28} strokeWidth={2.5} />
          </button>

          {/* WhatsApp Support Button */}
          <a 
            href="https://wa.me/218000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle size={28} strokeWidth={2.5} />
          </a>
        </div>

        <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />

        <ProfileModal 
          isOpen={isProfileOpen} 
          onClose={() => setIsProfileOpen(false)} 
        />

        <AIChatModal 
          isOpen={isAIChatOpen} 
          onClose={() => setIsAIChatOpen(false)} 
        />
      </div>
    </div>
  );
};

export default App;
