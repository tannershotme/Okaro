import React from 'react';
import { Mail, Linkedin, Mic, Globe, DollarSign } from 'lucide-react';

const ConversionFunnel: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-sm font-mono text-purple-400 mb-2 uppercase tracking-widest">System Architecture</h2>
        <h3 className="text-3xl text-white font-bold">The Demand Engine</h3>
        <p className="text-slate-400 max-w-2xl mt-4">
          A centralized "Hub & Spoke" model. We do not chase; we attract. High-signal content generates authority, driving traffic to a single point of conversion.
        </p>
      </div>

      {/* The Schematic Diagram Container */}
      <div className="relative w-full h-[600px] bg-slate-900/30 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
        
        {/* Background Technical Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ 
               backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
             }}>
        </div>

        {/* SVG Layer for Connections & Animation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
                </marker>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                </linearGradient>
            </defs>
            
            {/* Path: Top Left (LinkedIn) to Center */}
            <path d="M 300 150 Q 450 300 600 300" fill="none" stroke="#334155" strokeWidth="2" markerEnd="url(#arrowhead)" />
            {/* Animation Particle */}
            <circle r="3" fill="#60a5fa">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 300 150 Q 450 300 580 300" />
            </circle>

            {/* Path: Top Right (Newsletter) to Center */}
            <path d="M 900 150 Q 750 300 600 300" fill="none" stroke="#334155" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <circle r="3" fill="#60a5fa">
                <animateMotion dur="4s" repeatCount="indefinite" path="M 900 150 Q 750 300 620 300" />
            </circle>

            {/* Path: Bottom (Speaking) to Center */}
            <path d="M 600 480 L 600 380" fill="none" stroke="#334155" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <circle r="3" fill="#60a5fa">
                <animateMotion dur="5s" repeatCount="indefinite" path="M 600 480 L 600 380" />
            </circle>

            {/* Path: Center to Revenue (Right) */}
            <path d="M 680 300 L 950 300" fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="5,5" />
            <circle r="4" fill="#34d399">
                <animateMotion dur="2s" repeatCount="indefinite" path="M 680 300 L 950 300" />
            </circle>
        </svg>

        {/* --- NODES (HTML Overlay) --- */}

        {/* 1. Center Hub: The Website */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="w-32 h-32 bg-slate-900 border-2 border-blue-500 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                    <Globe className="w-12 h-12 text-blue-400" />
                </div>
            </div>
            <div className="mt-4 text-center bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-800">
                <div className="text-white font-bold tracking-widest text-lg">OKARO.COM</div>
                <div className="text-[10px] text-blue-400 font-mono uppercase">Conversion Core</div>
            </div>
        </div>

        {/* 2. Input: LinkedIn (Top Left) */}
        <div className="absolute top-[25%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group">
            <div className="w-20 h-20 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center group-hover:border-white group-hover:bg-slate-800 transition-all duration-300">
                <Linkedin className="w-8 h-8 text-slate-400 group-hover:text-white" />
            </div>
            <div className="mt-3 text-center">
                <div className="text-[10px] text-slate-500 font-mono uppercase mb-1">Social Signal</div>
                <div className="text-slate-200 font-semibold text-sm">LinkedIn</div>
            </div>
        </div>

        {/* 3. Input: Newsletter (Top Right) */}
        <div className="absolute top-[25%] right-[25%] transform translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group">
            <div className="w-20 h-20 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center group-hover:border-white group-hover:bg-slate-800 transition-all duration-300">
                <Mail className="w-8 h-8 text-slate-400 group-hover:text-white" />
            </div>
            <div className="mt-3 text-center">
                <div className="text-[10px] text-slate-500 font-mono uppercase mb-1">Owned Media</div>
                <div className="text-slate-200 font-semibold text-sm">Newsletter</div>
            </div>
        </div>

        {/* 4. Input: Speaking (Bottom) */}
        <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 flex flex-col items-center group">
             <div className="w-20 h-20 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center group-hover:border-white group-hover:bg-slate-800 transition-all duration-300">
                <Mic className="w-8 h-8 text-slate-400 group-hover:text-white" />
            </div>
            <div className="mt-3 text-center">
                <div className="text-[10px] text-slate-500 font-mono uppercase mb-1">Physical Trust</div>
                <div className="text-slate-200 font-semibold text-sm">Keynotes</div>
            </div>
        </div>

        {/* 5. Output: Revenue (Right) */}
        <div className="absolute top-1/2 right-[10%] transform translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
             <div className="w-24 h-24 bg-gradient-to-br from-emerald-900/50 to-emerald-900/10 border border-emerald-500/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <DollarSign className="w-10 h-10 text-emerald-400" />
            </div>
             <div className="mt-4 text-center">
                <div className="text-emerald-400 font-bold tracking-widest text-sm">REVENUE</div>
                <div className="text-[10px] text-emerald-600 font-mono uppercase">Impact</div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ConversionFunnel;