import React from 'react';
import { Target, Landmark, Umbrella, Stethoscope, Plane, Newspaper } from 'lucide-react';
import { TARGET_INDUSTRIES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  'Landmark': <Landmark className="w-6 h-6 text-slate-400" />,
  'Umbrella': <Umbrella className="w-6 h-6 text-slate-400" />,
  'Stethoscope': <Stethoscope className="w-6 h-6 text-slate-400" />,
  'Plane': <Plane className="w-6 h-6 text-slate-400" />,
  'Newspaper': <Newspaper className="w-6 h-6 text-slate-400" />
};

const TargetMarket: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: The Opportunity Definition */}
        <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-2 mb-4">
                <Target className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Target Market</span>
            </div>
            <h2 className="text-4xl text-white font-bold mb-6">
                The Mid-Market Gap
            </h2>
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl mb-6 backdrop-blur-sm">
                <div className="flex items-end space-x-2 mb-2">
                    <span className="text-3xl font-bold text-white">$50M - $3B</span>
                    <span className="text-slate-500 mb-1">Annual Revenue</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                    Organizations large enough to have Fortune 100 ambition ("We want to be the NYT"), 
                    but lacking the internal "horsepower" and specialized talent to execute.
                </p>
            </div>
            <p className="text-slate-500 text-sm">
                <strong>The Pain Point:</strong> Trapped between expensive, slow-moving consulting firms and agile, risky startups. 
                They fear irrelevance but are paralyzed by the complexity of AI.
            </p>
        </div>

        {/* Right: Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TARGET_INDUSTRIES.map((industry, idx) => (
                <div 
                    key={idx} 
                    className="p-5 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors group"
                >
                    <div className="flex justify-between items-start mb-3">
                        <h4 className="text-slate-200 font-semibold">{industry.name}</h4>
                        <div className="group-hover:text-blue-400 transition-colors">
                            {iconMap[industry.icon]}
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-snug">
                        {industry.rationale}
                    </p>
                </div>
            ))}
            
            {/* Summary Card */}
            <div className="p-5 bg-gradient-to-br from-slate-900 to-blue-900/20 border border-blue-500/20 rounded-lg flex items-center justify-center text-center">
                <p className="text-sm text-blue-200 font-medium">
                    Regulated. High Stakes. <br/>"Hallucination is a Liability."
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TargetMarket;