import React from 'react';
import { ShieldCheck, Clock, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const TrustGuarantees: React.FC = () => {
  const pillars = [
    {
      icon: Clock,
      title: 'Puntualidad Milimétrica',
      subtitle: 'Arribo 15 minutos antes',
      description: 'Garantía contractual de llegada anticipada. Tu limusina estará lista en el punto de encuentro con la cabina a temperatura óptima antes de que salgas.',
    },
    {
      icon: Award,
      title: 'Chóferes de Protocolo',
      subtitle: 'Capacitación en etiqueta formal',
      description: 'Chóferes con vestimenta de gala impecable, dominio de protocolo ceremonial, manejo defensivo certificado y trato cortés de alto estándar.',
    },
    {
      icon: Sparkles,
      title: 'Higiene & Acondicionamiento',
      subtitle: 'Detallado automotriz de nivel concurso',
      description: 'Carrocería exterior pulida al espejo, cristalería esterilizada, tapicería de cuero desinfectada y amenidades de bar precintadas.',
    },
    {
      icon: ShieldCheck,
      title: 'Privacidad & Confidencialidad',
      subtitle: 'Protección para ti y tus invitados',
      description: 'Cristales de privacidad total, mampara divisoria acústica y política estricta de no divulgación ni fotografías no autorizadas.',
    },
  ];

  return (
    <section id="garantias" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-12 bg-obsidian-surface border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-elevated border border-champagne/30 text-champagne text-[10px] font-accent tracking-widest-xl uppercase mb-3 shadow-gold-subtle">
            <CheckCircle2 className="w-3 h-3 text-champagne" aria-hidden="true" />
            <span>El Estándar Renta tu Limo</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-platinum-light tracking-tight mb-4">
            Compromisos innegociables de <span className="italic font-normal text-champagne">excelencia</span>.
          </h2>

          <p className="font-sans text-sm sm:text-base text-platinum-muted font-light leading-relaxed">
            La tranquilidad de saber que tu evento más importante está en manos de la compañía de transporte ceremonial más rigurosa de México.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-2xl glass-panel-elevated border border-white/5 hover:border-champagne/30 transition-all duration-300 flex flex-col gap-4 text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-obsidian-deep border border-white/10 group-hover:border-champagne/40 flex items-center justify-center text-champagne transition-colors">
                  <Icon className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
                </div>

                <div>
                  <span className="text-[10px] font-accent uppercase tracking-wider text-champagne font-bold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-platinum-light font-medium group-hover:text-champagne-light transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-platinum-muted font-light leading-relaxed">
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
