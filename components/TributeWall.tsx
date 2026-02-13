import React from 'react';
import { Tribute } from '../types';
import { Quote } from 'lucide-react';

interface TributeWallProps {
  tributes: Tribute[];
}

export const TributeWall: React.FC<TributeWallProps> = ({ tributes }) => {
  return (
    <section id="tribute-wall" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">The Wall of Tribute</h2>
          <p className="text-gray-400">Words from the hearts of a grateful nation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tributes.map((tribute) => (
            <div 
              key={tribute.id} 
              className="relative bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-all duration-300 group"
            >
              <Quote className="absolute top-4 right-4 text-slate-700 w-8 h-8 group-hover:text-slate-600" />
              <div className="mb-4">
                <p className="text-gray-300 font-light italic leading-relaxed">
                  "{tribute.message}"
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-slate-800 pt-4 mt-4">
                <div>
                  <h4 className={`font-semibold ${tribute.isOfficial ? 'text-saffron' : 'text-white'}`}>
                    {tribute.name}
                  </h4>
                  <p className="text-xs text-gray-500">{tribute.location}</p>
                </div>
                <span className="text-xs text-gray-600">{tribute.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};