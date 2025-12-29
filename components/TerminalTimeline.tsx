import React, { useState } from 'react';
import { Terminal, CheckCircle2, Circle, Clock, ChevronRight, ChevronDown, Command } from 'lucide-react';
import { TERMINAL_DATA } from '../constants';

const TerminalTimeline: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const toggleRow = (id: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col mb-8">
        <h2 className="text-sm font-mono text-emerald-400 mb-2">EXECUTION LOG</h2>
        <h3 className="text-3xl text-white font-bold">The 90-Day Launch Plan</h3>
      </div>

      <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
        
        {/* Terminal Header */}
        <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
             <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
             <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
             <div className="ml-4 flex items-center text-xs text-slate-500 font-mono">
                <Terminal className="w-3 h-3 mr-2" />
                <span>okaro-advisory-launch-plan.sh</span>
             </div>
          </div>
          <div className="text-xs text-slate-600 font-mono hidden md:block">
             EXECUTION_MODE: ACTIVE
          </div>
        </div>

        {/* Terminal Content (Table) */}
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-sm">
            <thead className="bg-slate-900/50 text-slate-500">
              <tr>
                <th className="w-12 px-6 py-4"></th>
                <th className="px-6 py-4 uppercase tracking-wider font-medium text-xs">ID</th>
                <th className="px-6 py-4 uppercase tracking-wider font-medium text-xs">Timeframe</th>
                <th className="px-6 py-4 uppercase tracking-wider font-medium text-xs">Focus</th>
                <th className="px-6 py-4 uppercase tracking-wider font-medium text-xs hidden md:table-cell">Primary Output</th>
                <th className="px-6 py-4 uppercase tracking-wider font-medium text-xs">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {TERMINAL_DATA.map((row) => (
                <React.Fragment key={row.id}>
                  <tr 
                    onClick={() => toggleRow(row.id)}
                    className={`group transition-colors cursor-pointer ${expandedRows[row.id] ? 'bg-slate-900/80' : 'hover:bg-slate-900'}`}
                  >
                    <td className="px-6 py-4 text-slate-600">
                      {expandedRows[row.id] ? <ChevronDown className="w-4 h-4 text-blue-400" /> : <ChevronRight className="w-4 h-4" />}
                    </td>
                    <td className="px-6 py-4 text-slate-600 group-hover:text-blue-400">
                      #{row.id}
                    </td>
                    <td className="px-6 py-4 text-slate-400 whitespace-nowrap">
                      {row.timeframe}
                    </td>
                    <td className="px-6 py-4 text-slate-200 font-semibold">
                      {row.focus}
                    </td>
                    <td className="px-6 py-4 text-slate-400 max-w-xs truncate hidden md:table-cell">
                      {row.output}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {row.status === 'complete' && <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />}
                        {row.status === 'active' && <Clock className="w-4 h-4 text-blue-500 mr-2 animate-pulse" />}
                        {row.status === 'pending' && <Circle className="w-4 h-4 text-slate-700 mr-2" />}
                        
                        <span className={`uppercase text-xs hidden sm:inline ${
                          row.status === 'complete' ? 'text-emerald-500' : 
                          row.status === 'active' ? 'text-blue-500' : 'text-slate-600'
                        }`}>
                          {row.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Expanded Row Details */}
                  {expandedRows[row.id] && (
                    <tr className="bg-slate-900/30">
                      <td colSpan={6} className="px-6 py-4">
                        <div className="ml-12 border-l-2 border-slate-700 pl-6 py-2">
                           <div className="flex items-center text-xs text-slate-500 mb-3 uppercase tracking-widest">
                             <Command className="w-3 h-3 mr-2" />
                             Granular Tasks
                           </div>
                           <ul className="space-y-2">
                             {row.details.map((detail, idx) => (
                               <li key={idx} className="flex items-start text-slate-300">
                                 <span className="text-blue-500 mr-3 mt-1 text-xs">➜</span>
                                 <span>{detail}</span>
                               </li>
                             ))}
                           </ul>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Terminal Footer */}
        <div className="bg-slate-900/30 px-6 py-3 border-t border-slate-800">
           <p className="text-xs text-slate-600 font-mono">
             > 90-day compounding demand engine initialized...
           </p>
        </div>
      </div>
    </section>
  );
};

export default TerminalTimeline;