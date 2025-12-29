import React from 'react';
import { OFFERS } from '../constants';
import { Layers } from 'lucide-react';

const OfferSuite: React.FC = () => {
  return (
    <section className="w-full bg-slate-900 border-y border-slate-800 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-3 mb-12">
            <Layers className="text-emerald-400 w-6 h-6" />
            <h3 className="text-2xl text-white font-bold">Productized Offer Stack</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {OFFERS.map((offer, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors flex flex-col justify-between h-48">
                    <div>
                        <div className={`
                            text-xs font-mono font-bold uppercase mb-2
                            ${offer.type === 'retainer' ? 'text-blue-400' : ''}
                            ${offer.type === 'sprint' ? 'text-emerald-400' : ''}
                            ${offer.type === 'delivery' ? 'text-purple-400' : ''}
                            ${offer.type === 'managed' ? 'text-slate-400' : ''}
                        `}>
                            {offer.type}
                        </div>
                        <h4 className="text-lg font-semibold text-slate-100">{offer.name}</h4>
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-sm text-slate-500 border-b border-slate-900 pb-2">
                            <span>Best For</span>
                            <span className="text-slate-300">{offer.idealFor}</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-500 pt-2">
                            <span>Duration</span>
                            <span className="text-slate-300">{offer.duration}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSuite;