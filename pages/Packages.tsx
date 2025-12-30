
import React from 'react';
import { Zap, ArrowLeft } from 'lucide-react';

const Packages: React.FC = () => {
  const packages = [
    { id: '1', name: 'Elite 21M', description: 'تجربة احترافية بلا قيود', price: '250', unit: 'د.ل', featured: true },
    { id: '2', name: 'Speed 7M', description: 'المثالية للعائلات والاستخدام اليومي', price: '95', unit: 'د.ل' },
    { id: '3', name: 'Basic 100GB', description: 'الاستخدام المنزلي الأساسي', price: '50', unit: 'د.ل' },
    { id: '4', name: 'Lite 50GB', description: 'باقة الطلاب المخفضة', price: '30', unit: 'د.ل' },
  ];

  return (
    <div className="space-y-5 pb-36 animate-in fade-in duration-500">
      <div className="flex items-center justify-between px-2 mb-2">
        <h3 className="text-brand-dark font-black text-xl">الباقات المتاحة</h3>
        <div className="bg-brand-blue/10 p-2 rounded-full">
          <Zap size={18} className="text-brand-blue animate-pulse" />
        </div>
      </div>
      
      {packages.map((pkg) => (
        <div 
          key={pkg.id} 
          className={`relative overflow-hidden p-6 rounded-[28px] glass-card transition-all active:scale-[0.98] border-2 ${
            pkg.featured ? 'border-brand-blue/30 ring-1 ring-brand-blue/10 shadow-lg shadow-brand-blue/5' : 'border-white/50'
          }`}
        >
          {pkg.featured && (
            <div className="absolute top-0 right-0 bg-brand-blue px-4 py-1.5 rounded-bl-2xl shadow-sm">
              <span className="text-[9px] font-black text-white uppercase tracking-widest">الأكثر طلباً</span>
            </div>
          )}
          
          <div className="flex justify-between items-start mb-6">
            <div className="text-right">
              <h4 className="text-brand-dark font-black text-xl tracking-tight mb-1">{pkg.name}</h4>
              <p className="text-slate-500 text-xs font-bold leading-relaxed">{pkg.description}</p>
            </div>
            
            <div className="text-left">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-inter font-black text-brand-dark">{pkg.price}</span>
                <span className="text-xs font-bold text-brand-blue">{pkg.unit}</span>
              </div>
            </div>
          </div>
          
          <button className={`w-full py-4 rounded-2xl font-black text-xs transition-all uppercase tracking-widest flex items-center justify-center gap-2 ${
            pkg.featured 
            ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 hover:bg-blue-600' 
            : 'bg-white/50 text-brand-dark border border-black/5 hover:bg-white'
          }`}>
            <span>اشترك الآن</span>
            <ArrowLeft size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Packages;
