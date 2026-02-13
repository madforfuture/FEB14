import React from 'react';
import { Clock, Shield, AlertTriangle, Flag } from 'lucide-react';
import { TimelineEvent } from '../types';

const events: TimelineEvent[] = [
  {
    time: "Feb 14, 2019 | 03:15 PM",
    title: "The Attack",
    description: "At Lethpora near Awantipora, a vehicle laden with explosives rammed into a bus carrying brave CRPF soldiers.",
    icon: 'alert'
  },
  {
    time: "Immediate Aftermath",
    title: "Nation in Mourning",
    description: "40 CRPF soldiers attained martyrdom. The entire nation stood united in grief and solidarity with the families of the fallen.",
    icon: 'flag'
  },
  {
    time: "Feb 26, 2019",
    title: "The Response",
    description: "Indian Air Force conducted non-military preemptive strikes on terror camps in Balakot, demonstrating India's resolve against terrorism.",
    icon: 'shield'
  }
];

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center text-white mb-8">
          <span className="border-b-2 border-saffron pb-2">About Feb 14 Remembrance</span>
        </h2>

        <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700 mb-16">
          <p className="text-gray-300 text-lg leading-relaxed text-center font-light">
            On February 14, 2019, India faced one of its darkest days when a convoy of vehicles carrying security personnel on the Jammu Srinagar National Highway was attacked by a suicide bomber in Pulwama district, Jammu and Kashmir. 
            <br/><br/>
            This day serves as a solemn reminder of the cost of freedom. While the world celebrates love, we also pause to remember the 40 bravehearts who loved their nation above their own lives.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0 md:pl-0 space-y-12">
          {events.map((event, index) => (
            <div key={index} className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8 group">
              {/* Date/Time for Desktop */}
              <div className="hidden md:block col-span-1 text-right pt-1 text-saffron font-medium">
                {event.time.split('|')[0]}
              </div>

              {/* Icon */}
              <div className="absolute -left-[9px] top-1 bg-slate-900 border-2 border-slate-600 group-hover:border-saffron rounded-full p-1 transition-colors duration-300">
                {event.icon === 'alert' && <AlertTriangle size={16} className="text-red-500" />}
                {event.icon === 'info' && <Clock size={16} className="text-blue-400" />}
                {event.icon === 'flag' && <Flag size={16} className="text-indiaGreen" />}
                {event.icon === 'shield' && <Shield size={16} className="text-blue-500" />}
              </div>

              {/* Content */}
              <div className="md:col-span-4 bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition duration-300 border border-slate-700 hover:border-slate-600">
                <span className="md:hidden text-xs text-saffron font-bold uppercase mb-2 block">
                  {event.time}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};