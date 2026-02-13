import React, { useState } from 'react';
import { X, Copy, Check, MessageCircle, Facebook, Twitter } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const websiteUrl = window.location.href;
  const shareText = `🇮🇳 Nation Remembers 🇮🇳\nFeb 14 is not just Valentine’s Day.\nIt is a day to honor the brave heroes who sacrificed their lives for our country.\n\nPay tribute here: ${websiteUrl}\n\n#NationRemembers #IndianArmy #Pulwama`;

  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(websiteUrl);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const otherShareLinks = [
    {
      name: 'Twitter (X)',
      icon: <Twitter className="w-5 h-5" />,
      url: `https://twitter.com/intent/tweet?text=${encodedText}`,
      color: 'bg-black border border-gray-700 hover:border-gray-500'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl animate-fade-in-up">
        
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-serif text-white">Share Tribute</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          Help spread the message of remembrance. Please share this tribute with at least <span className="text-saffron font-bold">5 friends</span>.
        </p>

        {/* Prominent Share to 5 Friends Button (WhatsApp) */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodedText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 mb-4 rounded-lg text-white font-bold text-lg bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-900/20 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <MessageCircle className="w-6 h-6" /> 
          <span>Share to 5 Friends</span>
        </a>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {otherShareLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-3 rounded-lg text-white font-medium text-sm transition-all ${link.color}`}
            >
              {link.icon} {link.name}
            </a>
          ))}
        </div>

        <div className="relative">
          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 pr-12 text-xs text-gray-400 font-mono whitespace-pre-line truncate">
            {shareText.split('\n')[0]}...
          </div>
          <button
            onClick={handleCopy}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-saffron transition-colors"
            title="Copy Message"
          >
            {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};