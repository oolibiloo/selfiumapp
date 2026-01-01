
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types.ts';
import { sendMessageToGemini } from '../services/ai.ts';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'مرحباً! أنا مساعد Selfium الذكي. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await sendMessageToGemini(userMsg, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: response || 'لم أتمكن من معالجة الطلب.' }]);
    setIsLoading(false);
  };

  const quickPrompts = [
    "كيف أشحن رصيدي؟",
    "أفضل باقة للألعاب؟",
    "مشكلة في الـ WiFi"
  ];

  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-[300] flex flex-col animate-in fade-in duration-300">
      <div className="flex-1" onClick={onClose}></div>
      <div className="bg-white w-full h-[85%] rounded-t-[40px] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-500 shadow-2xl">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-brand-light/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-brand-dark font-black text-sm">مساعد Selfium الذكي</h3>
              <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">متصل الآن</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X size={20} className="text-slate-400" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'} animate-in zoom-in-95 duration-200`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-xs font-tajawal font-bold leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-brand-blue text-white rounded-tr-none' 
                : 'bg-slate-100 text-brand-dark rounded-tl-none border border-slate-200'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-end">
              <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100 flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-brand-blue" />
                <span className="text-[10px] font-bold text-slate-400">جاري التفكير...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Prompts */}
        {messages.length === 1 && (
          <div className="px-6 py-2 flex gap-2 overflow-x-auto no-scrollbar">
            {quickPrompts.map(p => (
              <button 
                key={p} 
                onClick={() => { setInput(p); }}
                className="whitespace-nowrap px-4 py-2 bg-brand-light text-brand-blue rounded-full text-[10px] font-black border border-brand-blue/10 active:scale-95 transition-all"
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-6 bg-white border-t border-slate-100">
          <div className="relative flex items-center">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اسألني أي شيء..."
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pr-12 pl-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={`absolute right-2 p-2 rounded-xl transition-all ${
                input.trim() && !isLoading ? 'bg-brand-blue text-white shadow-lg' : 'bg-slate-200 text-slate-400'
              }`}
            >
              <Send size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatModal;
