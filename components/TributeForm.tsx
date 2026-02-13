import React, { useState } from 'react';
import { generateTributeMessage } from '../services/geminiService';
import { Tribute } from '../types';
import { Sparkles, Send } from 'lucide-react';

interface TributeFormProps {
  onAddTribute: (tribute: Tribute) => void;
}

export const TributeForm: React.FC<TributeFormProps> = ({ onAddTribute }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAiGenerate = async () => {
    setIsGenerating(true);
    const generatedMessage = await generateTributeMessage('patriotic');
    setMessage(generatedMessage);
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newTribute: Tribute = {
      id: Date.now().toString(),
      name,
      location: location || 'India',
      message,
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    onAddTribute(newTribute);
    setName('');
    setLocation('');
    setMessage('');
    
    // Smooth scroll to wall
    document.getElementById('tribute-wall')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
        <h2 className="text-2xl font-serif text-white mb-8 text-center">Share Your Tribute</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-400 mb-2">Location (Optional)</label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                placeholder="City, State"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">Your Message</label>
              <button
                type="button"
                onClick={handleAiGenerate}
                disabled={isGenerating}
                className="text-xs flex items-center gap-1 text-saffron hover:text-orange-400 transition-colors disabled:opacity-50"
              >
                <Sparkles size={14} />
                {isGenerating ? 'Generating...' : 'Help me write'}
              </button>
            </div>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all resize-none"
              placeholder="Write a respectful message honoring our brave soldiers..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Send size={18} />
            Post Tribute
          </button>
        </form>
      </div>
    </section>
  );
};