import React from 'react';
import { ShieldCheck, FileCheck, Clock, Sparkles } from 'lucide-react';

export const ValuePillars: React.FC = () => {
  const pillars = [
    {
      icon: FileCheck,
      badge: 'Garantía Legal',
      title: 'Contrato Formal',
      description: 'Certeza total en fecha, horario y limusina pactada',
    },
    {
      icon: ShieldCheck,
      badge: 'Etiqueta VIP',
      title: 'Choferes Ejecutivos',
      description: 'Presentación formal, discreción y trato preferencial',
    },
    {
      icon: Clock,
      badge: 'En Sitio Previo',
      title: 'Puntualidad Estricta',
      description: 'Presencia con 15-20 minutos de anticipación al evento',
    },
    {
      icon: Sparkles,
      badge: 'Higiene Total',
      title: 'Unidades Sanitizadas',
      description: 'Limpieza detallada y desinfección antes de cada viaje',
    },
  ];

  return (
    <section className="relative bg-obsidian-deep border-t border-b border-white/5 py-8 sm:py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center text-center p-4 sm:p-5 gap-2 group rounded-xl hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-5 h-5 text-[#DDB789]" strokeWidth={1.75} />
                  <span className="font-serif text-lg sm:text-xl font-semibold text-[#DDB789] tracking-tight">
                    {item.badge}
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
