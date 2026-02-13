import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black text-center text-gray-600 border-t border-slate-900">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-saffron"></div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-indiaGreen"></div>
      </div>
      <p className="text-sm font-medium">Nation Remembers – Lest We Forget.</p>
      <p className="text-xs mt-2">A tribute to the bravehearts of India.</p>
    </footer>
  );
};