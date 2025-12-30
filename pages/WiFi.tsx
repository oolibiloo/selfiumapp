
import React, { useState } from 'react';
import { ShieldCheck, Laptop, Smartphone, Tv, Pause, Play, Globe } from 'lucide-react';

const WiFi: React.FC = () => {
  const [devices, setDevices] = useState([
    { id: '1', name: 'MacBook Pro', status: 'Online', icon: Laptop, isPaused: false },
    { id: '2', name: 'iPhone 14', status: 'Idle', icon: Smartphone, isPaused: false },
    { id: '3', name: 'Samsung TV', status: 'Paused', icon: Tv, isPaused: true },
  ]);

  return (
    <div className="space-y-6 pb-32 animate-in fade-in duration-500">
      <div className="glass-card rounded-[32px] p-6 flex items-center gap-6">
        <div className="w-16 h-16 rounded-[22px] bg-brand-blue/10 flex items-center justify-center text-brand-blue">
          <Globe size={32} className="animate-pulse" />
        </div>
        <div className="text-right">
          <h4 className="text-brand-dark font-black text-lg">Selfium Network</h4>
          <p className="text-green-600 text-xs font-black">جميع الأنظمة تعمل بكفاءة</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-brand-dark font-black text-sm px-2">الأجهزة المتصلة (3)</h3>
        
        <div className="space-y-3">
          {devices.map((device) => {
            const Icon = device.icon;
            return (
              <div key={device.id} className="glass-card p-4 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400">
                  <Icon size={24} />
                </div>
                <div className="flex-1 text-right">
                  <p className="font-black text-brand-dark text-sm">{device.name}</p>
                  <p className={`text-[10px] font-bold ${device.isPaused ? 'text-red-500' : 'text-brand-blue'}`}>
                    {device.status}
                  </p>
                </div>
                <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  device.isPaused ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  {device.isPaused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WiFi;
