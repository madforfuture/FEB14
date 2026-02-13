import React from 'react';
import { Flame, Share2, MessageCircle } from 'lucide-react';

interface HeroProps {
  onShareClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShareClick }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-b from-slate-900 to-black pt-20">
      {/* Abstract Flag Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-0 w-full h-1/3 bg-saffron blur-3xl"></div>
         <div className="absolute bottom-0 w-full h-1/3 bg-indiaGreen blur-3xl"></div>
      </div>

      <div className="z-10 flex flex-col items-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <div className="relative">
          <div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
          <Flame className="w-16 h-16 text-saffron animate-flicker drop-shadow-[0_0_15px_rgba(255,153,51,0.8)]" />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-wide text-white drop-shadow-lg">
          🇮🇳 Nation Remembers 🇮🇳
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed">
            Feb 14 is not just Valentine’s Day. <br/>
            <span className="text-saffron font-medium">It is a day to honor our brave martyrs.</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
          <button 
            onClick={() => document.getElementById('tribute-wall')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold rounded-full shadow-lg shadow-orange-900/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            View Tribute Wall
          </button>
          
          <button 
            onClick={onShareClick}
            className="w-full md:w-auto px-8 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all duration-300 rounded-full flex items-center justify-center gap-2 group font-semibold shadow-lg shadow-green-900/20 transform hover:-translate-y-1"
          >
            <MessageCircle size={20} className="text-white" />
            Share to 5 Friends
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
      </div>
    </section>
  );
};