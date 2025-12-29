import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { SLIDES } from '../constants';

const DeckViewer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 mb-24">
       <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-sm font-mono text-slate-500 mb-2">APPENDIX & DATA</h2>
            <h3 className="text-3xl text-white font-bold">The Strategic Deck</h3>
          </div>
          <div className="hidden md:flex space-x-2">
             <button 
               onClick={prevSlide}
               className="p-3 rounded-full border border-slate-700 hover:bg-slate-800 text-white transition-colors"
             >
                <ChevronLeft className="w-6 h-6" />
             </button>
             <button 
               onClick={nextSlide}
               className="p-3 rounded-full border border-slate-700 hover:bg-slate-800 text-white transition-colors"
             >
                <ChevronRight className="w-6 h-6" />
             </button>
          </div>
       </div>

       {/* Cinema Mode Container */}
       <div className="relative w-full aspect-video bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden group">
          
          {/* Slide Content */}
          <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-between">
             {/* Slide Header */}
             <div>
                <div className="flex items-center space-x-2 text-slate-600 mb-6">
                   <FileText className="w-5 h-5" />
                   <span className="text-sm font-mono tracking-widest uppercase">SLIDE {currentSlide.id < 10 ? `0${currentSlide.id}` : currentSlide.id}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentSlide.title}</h2>
                {currentSlide.subtitle && (
                   <h3 className="text-2xl text-blue-400 font-light">{currentSlide.subtitle}</h3>
                )}
             </div>

             {/* Slide Body */}
             <div className="mt-8 flex-grow">
                {currentSlide.type === 'list' && (
                   <ul className="space-y-4">
                      {currentSlide.content.map((point, idx) => (
                         <li key={idx} className="flex items-start">
                            <span className="mr-4 text-emerald-500 text-xl">•</span>
                            <span className="text-xl text-slate-300 leading-relaxed">{point}</span>
                         </li>
                      ))}
                   </ul>
                )}
                {currentSlide.type === 'text' && (
                   <div className="space-y-6">
                      {currentSlide.content.map((paragraph, idx) => (
                         <p key={idx} className="text-xl text-slate-300 leading-relaxed max-w-4xl">
                            {paragraph}
                         </p>
                      ))}
                   </div>
                )}
             </div>

             {/* Slide Footer */}
             <div className="border-t border-slate-800 pt-6 flex justify-between items-center text-slate-600 text-sm">
                <span>CONFIDENTIAL // {new Date().getFullYear()}</span>
                <span>{currentSlide.footer}</span>
             </div>
          </div>

          {/* Touch Controls (Mobile) */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/50 to-transparent md:hidden z-10" onClick={prevSlide}></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/50 to-transparent md:hidden z-10" onClick={nextSlide}></div>
       </div>

       {/* Mobile Controls */}
       <div className="flex md:hidden justify-center mt-6 space-x-6">
          <button onClick={prevSlide} className="text-slate-400 hover:text-white">Previous</button>
          <span className="text-slate-600">{currentIndex + 1} / {SLIDES.length}</span>
          <button onClick={nextSlide} className="text-slate-400 hover:text-white">Next</button>
       </div>
    </section>
  );
};

export default DeckViewer;