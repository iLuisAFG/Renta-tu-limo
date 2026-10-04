import React from 'react';
import { ShieldCheck, Star, Clock, Award } from 'lucide-react';

export const ValuePillars: React.FC = () => {
  const metrics = [
    {
      icon: Award,
      metric: '+10 Años',
      title: 'Años de Experiencia',
      description: 'Liderando el transporte de lujo en México',
    },
    {
      icon: Star,
      metric: '+2,500',
      title: 'Viajes VIP Realizados',
      description: 'Bodas, XV años y galas memorables',
    },
    {
      icon: ShieldCheck,
      metric: '100%',
      title: 'Choferes Certificados',
      description: 'Etiqueta formal, protocolo y discreción',
    },
    {
      icon: Clock,
      metric: 'Puntualidad 24/7',
      title: 'Llegada Garantizada',
      description: 'Presencia previa en sitio por contrato',
    },
  ];

  return (
    <section className="relative bg-obsidian-deep border-t border-b border-white/5 py-8 sm:py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y-0 divide-white/5">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center text-center p-4 sm:p-5 gap-2 group rounded-xl hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-5 h-5 text-[#DDB789]" strokeWidth={1.75} />
                  <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-[#DDB789] tracking-tight">
                    {item.metric}
                  </span>
                </div>
                <h3 className="font-sans text-xs sm:text-sm text-platinum-light font-medium leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-platinum-muted font-light leading-tight">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
