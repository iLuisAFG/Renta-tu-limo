import React from 'react';
import { Heart, Sparkles, PartyPopper, CheckCircle2 } from 'lucide-react';
import { CrownLogo } from '@/components/ui/CrownLogo';
import { assetUrl } from '@/lib/utils';

export const OccasionsSection: React.FC = () => {
  const occasions = [
    {
      title: 'Renta de limusinas para bodas',
      shortTitle: 'Bodas VIP y Recepciones',
      icon: Heart,
      desc: 'Llegadas triunfales a la iglesia y recepción, sesión fotográfica, brindis con champaña y traslado exclusivo del cortejo nupcial con chofer de etiqueta formal.',
      amenities: ['Champaña de cortesía', 'Alfombra roja opcional', 'Puntualidad garantizada'],
    },
    {
      title: 'Renta de limusinas para XV años',
      shortTitle: 'XV Años Exclusivos',
      icon: Sparkles,
      desc: 'Entrada memorable para la quinceañera y sus mejores amigos. Iluminación tipo antro, piso de cristal iluminado, quemacocos panorámico y sonido para su música favorita.',
      amenities: ['Música vía Bluetooth', 'Refrescos y botanas', 'Capacidad hasta 16 amigos'],
    },
    {
      title: 'Limusinas para eventos y celebraciones',
      shortTitle: 'Eventos y Celebraciones VIP',
      icon: PartyPopper,
      desc: 'Graduaciones, aniversarios románticos, noches de gala y traslados ejecutivos a los aeropuertos AICM y AIFA con máxima discreción y confort de primera clase.',
      amenities: ['Traslados corporativos', 'Rutas por Reforma y Polanco', 'Atención personalizada 24/7'],
    },
  ];

  return (
    <section id="servicios" className="relative py-20 sm:py-28 bg-obsidian-deep overflow-hidden">
      {/* 
        IMAGEN EXTENDIDA HASTA EL BORDE IZQUIERDO DE LA PANTALLA (Desktop)
      */}
      <div 
        className="hidden lg:block absolute inset-y-16 left-0 w-[calc(50vw-2rem)] xl:w-[calc(50vw-2.5rem)] z-0 overflow-hidden rounded-r-3xl border-y border-r border-white/5 shadow-2xl group"
      >
        <img
          src={assetUrl('/images/interior-limo.png')}
          alt="Interior de limusina de lujo con iluminación LED, piso y techo de estrellas y asientos de piel para bodas y XV años en CDMX - Renta tu Limo"
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          width="1200"
          height="800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/50 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* En Móvil: Imagen en flujo normal dentro de la columna */}
          <div className="lg:hidden w-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <img
                src={assetUrl('/images/interior-limo.png')}
                alt="Interior de limusina de lujo con iluminación LED, piso y techo de estrellas y asientos de piel para eventos en CDMX - Renta tu Limo"
                className="w-full h-[340px] sm:h-[440px] object-cover object-center filter brightness-[0.95] contrast-[1.05]"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* En Desktop: Espaciador exacto de 6 columnas */}
          <div className="hidden lg:block lg:col-span-6 min-h-[480px] pointer-events-none" aria-hidden="true" />

          {/* Lado Derecho: Contenido Editorial Semántico */}
          <div className="lg:col-span-6 relative flex flex-col items-start text-left">
            {/* Silueta de Corona como Marca de Agua en el fondo */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none">
              <CrownLogo size="lg" showSubtitle={false} className="w-80 h-80" />
            </div>

            {/* Overline */}
            <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
              SERVICIOS DE TRANSPORTE DE LUJO EN CDMX
            </span>

            {/* Párrafo Descriptivo introductorio */}
            <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed mb-6 max-w-lg">
              Diseñamos cada itinerario a la medida de tu celebración en la Ciudad de México y alrededores. Ya sea una boda de gala, una fiesta de XV años, eventos sociales o traslados ejecutivos, en <span className="text-[#DDB789] font-medium">Renta tu Limo</span> garantizamos puntualidad estricta y amenidades de primer nivel.
            </p>

            {/* Bloques Semánticos con H2s para Bodas, XV Años y Eventos */}
            <div className="flex flex-col gap-5 w-full">
              {occasions.map((item) => {
                const IconComponent = item.icon;
                return (
                  <article
                    key={item.title}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DDB789]/30 transition-colors w-full"
                  >
                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-[#DDB789]/15 text-[#DDB789] flex items-center justify-center shrink-0 mt-0.5">
                        <IconComponent className="w-4 h-4 text-[#DDB789]" strokeWidth={2} />
                      </div>
                      <div>
                        {/* H2 Semántico requerido para cada ocasión */}
                        <h2 className="font-serif text-lg sm:text-xl font-medium text-platinum-light tracking-tight">
                          {item.title}
                        </h2>
                        <span className="block font-sans text-[11px] text-[#DDB789] uppercase tracking-wider font-medium">
                          {item.shortTitle}
                        </span>
                      </div>
                    </div>

                    <p className="font-sans text-xs sm:text-[13px] text-platinum-muted font-light leading-relaxed mb-3">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                      {item.amenities.map((amenity, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 font-sans text-[11px] text-platinum-light/80 bg-white/[0.03] px-2.5 py-0.5 rounded-full border border-white/5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#DDB789]" />
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
