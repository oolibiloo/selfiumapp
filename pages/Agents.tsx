
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Agents: React.FC = () => {
  const agents = [
    { id: '1', name: 'مجموعة 1214 للإلكترونات', location: 'البركة، شارع عبد الجليل', phone: '0916924928' },
    { id: '2', name: 'الطراز لخدمات الهاتف', location: 'الفويهات، شارع الجود', phone: '0915165168' },
    { id: '3', name: 'مترو فون', location: 'حي السلام', phone: '0927941516' },
    { id: '4', name: 'إيليت للتسوق الالكتروني', location: 'الليثي', phone: '0914343888' },
    { id: '5', name: 'Retro Games', location: 'نادي الهدف', phone: '0922887673' },
  ];

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <h3 className="text-slate-800 font-extrabold text-lg mb-4">الوكلاء المعتمدين</h3>
      
      {agents.map((agent) => (
        <div 
          key={agent.id} 
          className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between"
        >
          <div className="space-y-1">
            <p className="font-extrabold text-slate-800">{agent.name}</p>
            <div className="flex items-center gap-1 text-slate-400">
              <MapPin size={12} />
              <p className="text-[10px] font-bold">{agent.location}</p>
            </div>
          </div>
          <a 
            href={`tel:${agent.phone}`}
            className="w-11 h-11 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center hover:bg-green-100 transition-colors shadow-sm"
          >
            <Phone size={20} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Agents;
