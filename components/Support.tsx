import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { Organization } from '../types';

const organizations: Organization[] = [
  {
    name: "Bharat Ke Veer",
    description: "An initiative by the Ministry of Home Affairs, Govt. of India to support the families of bravehearts.",
    url: "https://bharatkeveer.gov.in/",
    logoColor: "text-saffron"
  },
  {
    name: "Army Welfare Fund",
    description: "Official fund supporting the welfare of Army personnel and their dependents.",
    url: "https://www.armywelfarefund.org/", // Placeholder for generic army fund structure
    logoColor: "text-indiaGreen"
  }
];

export const Support: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <Heart className="w-12 h-12 text-red-500 mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl font-serif text-white mb-6">Support Our Forces</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          The best way to honor their sacrifice is to stand by the families they left behind. 
          Please consider contributing to official welfare funds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {organizations.map((org, index) => (
            <a
              key={index}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-saffron hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-3 group-hover:text-white ${org.logoColor}`}>
                {org.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6 min-h-[60px]">
                {org.description}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-slate-700 py-2 px-4 rounded-full group-hover:bg-slate-600 transition-colors">
                Visit Official Site <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
        <p className="mt-8 text-xs text-gray-500">
          *Note: Ensure you are donating only through official government web portals.
        </p>
      </div>
    </section>
  );
};