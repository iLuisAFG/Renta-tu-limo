import React from 'react';
import { ShieldCheck, Award, Clock, Sparkles } from 'lucide-react';
import { CrownLogo } from '@/components/ui/CrownLogo';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Protocolo & Discreción',
      desc: 'Choferes ejecutivos bilingües certificados en etiqueta diplomática, conducción defensiva y estricta confidencialidad.',
    },
    {
      icon: Award,
      title: 'Flota Custom Signature',
      desc: 'Unidades acondicionadas a medida con pisos de cristal iluminado, techos panorámicos y acústica envolvente de sala de conciertos.',
    },
    {
      icon: Clock,
      title: 'Puntualidad Impecable',
      desc: 'Planificación de ruta por satélite y monitoreo en tiempo real para garantizar llegadas triunfales y sin contratiempos.',
    },
  ];

  return (
    <section id="nosotros" className="relative py-24 sm:py-32 bg-[#08090D] overflow-hidden border-t border-white/5">
      {/* Luz de fondo sutil */}
      <div 
        className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-champagne/[0.025] rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Encabezado Editorial */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#DDB789]" />
            SOBRE NOSOTROS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-platinum-light tracking-tight leading-[1.15] mb-6">
            Nuestra Historia: <br className="hidden sm:inline" />
            <span className="italic text-[#DDB789]">El arte de trascender</span> en cada llegada.
          </h2>
          <div className="w-20 h-0.5 bg-[#DDB789]/40 mb-6" />
        </div>

        {/* Contenido Principal en 2 Columnas Asimétricas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda: La Narrativa Editorial (7 columnas) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <p className="font-serif text-lg sm:text-xl text-platinum-light font-normal leading-relaxed">
              Fundada en la Ciudad de México con una convicción innegociable: los acontecimientos más decisivos de la vida merecen un prólogo a la altura de su grandeza.
            </p>

            <div className="font-sans text-sm text-platinum-muted font-light leading-relaxed space-y-4">
              <p>
                Lo que comenzó hace más de diez años como una búsqueda privada de elegancia y distinción sin compromisos para recepciones de gala y bodas de alta alcurnia, evolucionó hasta consolidarse como la firma insignia de limusinas y transporte ceremonial más prestigiosa del país.
              </p>
              <p>
                Entendemos que no transportamos únicamente personas; custodiamos instantes irrepetibles. Desde la entrada triunfal de una quinceañera hasta el traslado de mandatarios, celebridades y parejas de recién casados, cada viaje es concebido como una experiencia sensorial privada donde reinan el silencio, la sofisticación y la serenidad absoluta.
              </p>
            </div>

            {/* Cita Editorial del Concierge */}
            <div className="mt-4 p-6 sm:p-7 rounded-2xl bg-white/[0.02] border-l-2 border-[#DDB789] border-y border-r border-white/5 relative">
              <p className="font-serif text-base sm:text-lg text-platinum italic leading-relaxed mb-3">
                &ldquo;El verdadero lujo automotriz no radica en la ostentación exterior, sino en la calma y el confort absoluto que se experimenta en el interior.&rdquo;
              </p>
              <span className="block font-sans text-xs tracking-wider uppercase text-[#DDB789] font-medium">
                — Dirección de Experiencias VIP, Renta tu Limo
              </span>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Logros e Insignias (5 columnas) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Tarjeta de Estadísticas de Prestigio */}
            <div className="rounded-2xl bg-obsidian-surface/60 backdrop-blur-md border border-white/10 p-7 sm:p-8 relative overflow-hidden shadow-2xl">
              {/* Marca de agua de Corona sutil */}
              <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none select-none">
                <CrownLogo size="lg" className="w-56 h-56" />
              </div>

              <h3 className="font-serif text-xl text-platinum-light mb-6">
                Legado en Números
              </h3>

              <div className="grid grid-cols-2 gap-6 pb-6 border-b border-white/5">
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#DDB789] mb-1">
                    +10
                  </div>
                  <div className="font-sans text-xs text-platinum-muted font-light">
                    Años de trayectoria de alta gama en México
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#DDB789] mb-1">
                    +2,500
                  </div>
                  <div className="font-sans text-xs text-platinum-muted font-light">
                    Eventos exclusivos y galas realizadas
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#DDB789] mb-1">
                    100%
                  </div>
                  <div className="font-sans text-xs text-platinum-muted font-light">
                    Puntualidad garantizada por contrato
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#DDB789] mb-1">
                    24/7
                  </div>
                  <div className="font-sans text-xs text-platinum-muted font-light">
                    Atención personalizada de Concierge
                  </div>
                </div>
              </div>
            </div>

            {/* Lista de 3 Pilares */}
            <div className="space-y-3.5">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.015] border border-white/5 hover:border-[#DDB789]/30 transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-[#DDB789]/10 text-[#DDB789] shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-medium text-platinum-light mb-1">
                        {pillar.title}
                      </h4>
                      <p className="font-sans text-xs text-platinum-muted font-light leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
