import React from 'react';
import { ShieldCheck, Star, Clock, Headphones } from 'lucide-react';

export const ValuePillars: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Conductores profesionales',
    },
    {
      icon: Star,
      title: 'Vehículos de lujo y en excelente estado',
    },
    {
      icon: Clock,
      title: 'Puntualidad garantizada',
    },
    {
      icon: Headphones,
      title: 'Atención personalizada 24/7',
    },
  ];

  return (
    <section className="relative bg-obsidian-deep border-t border-b border-white/5 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center text-center p-6 gap-3 group"
              >
                <div className="text-[#DDB789] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.4]" />
                </div>
                <h3 className="font-sans text-xs sm:text-sm text-platinum-light font-light max-w-[200px] leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
