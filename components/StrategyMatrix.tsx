import React from 'react';
import { Hammer, Brain, ShieldCheck } from 'lucide-react';
import { STRATEGY_ITEMS } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  'Hammer': <Hammer className="w-6 h-6" />,
  'Brain': <Brain className="w-6 h-6" />,
  'ShieldCheck': <ShieldCheck className="w-6 h-6" />
};

const StrategyMatrix: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-sm font-mono text-blue-400 mb-2">THE MATRIX</h2>
          <h3 className="text-3xl text-white font-bold">Why This is "Luxury" Advisory</h3>
        </div>
        <div className="h-px bg-slate-800 flex-grow ml-8 mb-2 hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STRATEGY_ITEMS.map((item, idx) => (
          <div 
            key={idx}
            className={`
              group relative p-8 rounded-2xl bg-slate-900 border border-slate-800
              transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
              ${item.category === 'blue' ? 'hover:border-blue-500/50 hover:shadow-blue-900/10' : ''}
              ${item.category === 'emerald' ? 'hover:border-emerald-500/50 hover:shadow-emerald-900/10' : ''}
              ${item.category === 'purple' ? 'hover:border-purple-500/50 hover:shadow-purple-900/10' : ''}
            `}
          >
            {/* Icon Container */}
            <div className={`
              w-12 h-12 rounded-lg flex items-center justify-center mb-6 border bg-slate-950
              ${item.category === 'blue' ? 'border-blue-500/30 text-blue-400 group-hover:bg-blue-500/10' : ''}
              ${item.category === 'emerald' ? 'border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500/10' : ''}
              ${item.category === 'purple' ? 'border-purple-500/30 text-purple-400 group-hover:bg-purple-500/10' : ''}
            `}>
              {iconMap[item.icon]}
            </div>

            <h4 className="text-xl font-semibold text-slate-100 mb-3">{item.title}</h4>
            <p className="text-slate-400 leading-relaxed text-sm">
              {item.description}
            </p>

            {/* Subtle Gradient Overlay on Hover */}
            <div className={`
              absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
              bg-gradient-to-b from-transparent to-${item.category === 'blue' ? 'blue' : item.category === 'emerald' ? 'emerald' : 'purple'}-500/5
            `} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategyMatrix;