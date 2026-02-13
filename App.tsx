import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { TributeWall } from './components/TributeWall';
import { Timeline } from './components/Timeline';
import { Support } from './components/Support';
import { TributeForm } from './components/TributeForm';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { AdContainer } from './components/AdContainer';
import { Tribute } from './types';
import { Share2 } from 'lucide-react';

// Initial tributes data
const initialTributes: Tribute[] = [
  {
    id: '1',
    name: 'Nation First',
    message: 'Your courage echoes in the valleys of Kashmir and in the hearts of a billion Indians. Forever indebted.',
    date: 'Feb 14, 2024',
    location: 'New Delhi',
    isOfficial: true
  },
  {
    id: '2',
    name: 'Rahul Sharma',
    message: 'Salute to the brave souls. Jai Hind! 🇮🇳',
    date: 'Feb 14, 2024',
    location: 'Mumbai'
  },
  {
    id: '3',
    name: 'Aditi Rao',
    message: 'Sleep peacefully, bravehearts. The nation is awake because of you.',
    date: 'Feb 14, 2024',
    location: 'Bangalore'
  }
];

const App: React.FC = () => {
  const [tributes, setTributes] = useState<Tribute[]>(initialTributes);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const addTribute = (newTribute: Tribute) => {
    setTributes(prev => [newTribute, ...prev]);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-saffron selection:text-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full p-4 md:p-6 flex justify-between items-center z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5">
         <div className="flex items-center gap-4">
             <div className="text-saffron font-serif font-bold tracking-wider text-base md:text-lg cursor-pointer hover:text-white transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
               NATION REMEMBERS
             </div>
         </div>
         <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsShareModalOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 transition-all border border-white/10"
            >
              <Share2 size={14} />
              <span className="hidden sm:inline">Share</span>
            </button>
            <div className="hidden sm:flex gap-1">
                <div className="h-1 w-4 md:w-6 bg-saffron rounded-full"></div>
                <div className="h-1 w-4 md:w-6 bg-white rounded-full"></div>
                <div className="h-1 w-4 md:w-6 bg-indiaGreen rounded-full"></div>
            </div>
         </div>
      </nav>

      <Hero onShareClick={() => setIsShareModalOpen(true)} />
      
      {/* Leaderboard Ad - 728x90 */}
      <AdContainer type="leaderboard" />

      <TributeWall tributes={tributes} />
      <Timeline />
      
      {/* Banner Ad - 468x60 */}
      <AdContainer type="banner" />
      
      <Support />
      <TributeForm onAddTribute={addTribute} />
      <Footer />
      
      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
      />
    </main>
  );
};

export default App;