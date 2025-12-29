import React from 'react';
import { ArrowRight, Activity, Shield, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden px-6">
      {/* Ambient Lighting Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Column: Narrative */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="flex items-center space-x-2">
            <span className="h-px w-8 bg-blue-500/50"></span>
            <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">Consulting Business Blueprint</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Turn AI Intention <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              Into AI Impact.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Okaro Advisory is a premium, selective practice for senior executives in regulated industries who want to move faster on digital innovation, but require an execution system—not just hype.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-slate-50 text-slate-950 font-semibold rounded-lg overflow-hidden transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 flex items-center">
                Executive Diagnostic
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="px-8 py-4 bg-transparent border border-slate-700 text-slate-300 font-medium rounded-lg hover:border-slate-500 hover:text-white transition-colors">
              Read the Briefing
            </button>
          </div>
        </div>

        {/* Right Column: Holographic Credibility Card */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="glass-panel w-full max-w-md p-8 rounded-2xl relative overflow-hidden transform transition-transform hover:scale-[1.02] duration-500 neon-glow-blue">
            {/* Inner sheen */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
            
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-white font-semibold text-xl">Oke Okaro</h3>
                <p className="text-slate-500 text-sm">Principal & Founder</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center text-xs font-mono text-emerald-400 mb-1">
                  <Activity className="w-3 h-3 mr-2" />
                  TRACK RECORD
                </div>
                <p className="text-slate-300 text-sm border-l-2 border-emerald-500/30 pl-3">
                  Built "firsts" in the app economy at <span className="text-white">ESPN</span> & <span className="text-white">Bloomberg</span>.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-xs font-mono text-blue-400 mb-1">
                  <Cpu className="w-3 h-3 mr-2" />
                  EXPERTISE
                </div>
                <p className="text-slate-300 text-sm border-l-2 border-blue-500/30 pl-3">
                  Patented Innovation. Practical AI at scale (Workflow Summarization).
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="flex justify-between items-center text-xs text-slate-500 font-mono">
                  <span>STATUS: AVAILABLE</span>
                  <span>CAPACITY: LIMITED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;