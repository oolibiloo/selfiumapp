
import React from 'react';
import { ChevronLeft, LogOut } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute inset-0 bg-black/50 z-[200] flex flex-col justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full rounded-t-[32px] p-8 animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-slate-800">محمد عبد الله</h2>
          <p className="text-slate-500 font-inter font-semibold">ID: 1805703</p>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
            <span className="font-bold text-slate-700">تغيير كلمة المرور</span>
            <ChevronLeft size={20} className="text-slate-300" />
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
            <span className="font-bold text-slate-700">سجل الجلسات (Logs)</span>
            <ChevronLeft size={20} className="text-slate-300" />
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-red-50 text-red-600 rounded-2xl hover:bg-red-100 transition-colors mt-4">
            <span className="font-bold">تسجيل الخروج</span>
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
