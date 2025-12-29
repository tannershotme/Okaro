import React from 'react';
import Hero from './components/Hero';
import StrategyMatrix from './components/StrategyMatrix';
import OfferSuite from './components/OfferSuite';
import ConversionFunnel from './components/ConversionFunnel';
import TerminalTimeline from './components/TerminalTimeline';
import DeckViewer from './components/DeckViewer';
import TargetMarket from './components/TargetMarket';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-400 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation (Simple Overlay) */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <span className="font-bold text-white tracking-tight text-lg">OKARO</span>
          <span className="font-light text-slate-500 ml-1">ADVISORY</span>
        </div>
        <div className="pointer-events-auto">
          <button className="text-xs font-mono text-slate-400 border border-slate-800 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full hover:border-slate-600 transition-colors">
            STATUS: DRAFT • DEC 2025
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* The Matrix (Strategy) */}
      <StrategyMatrix />

      {/* Target Market Section */}
      <TargetMarket />

      {/* Offer Suite (Product Stack) */}
      <OfferSuite />

      {/* The Engine (Funnel) */}
      <ConversionFunnel />

      {/* The Terminal (90 Day Plan) */}
      <TerminalTimeline />

      {/* The Deck (Data/Appendix) */}
      <DeckViewer />

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 text-center">
        <p className="text-slate-600 text-sm">
          © 2025 Okaro Advisory. Strategy & Build Team.
        </p>
      </footer>
    </main>
  );
};

export default App;