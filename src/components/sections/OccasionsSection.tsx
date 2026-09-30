import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CrownLogo } from '@/components/ui/CrownLogo';
import { assetUrl } from '@/lib/utils';

export const OccasionsSection: React.FC = () => {
  const occasions = [
    'Bodas',
    'Eventos corporativos',
    'Cumpleaños',
    'Traslados al aeropuerto',
    'Tours y paseos',
  ];

  return (
    <section id="servicios" className="relative py-20 sm:py-28 bg-obsidian-deep overflow-hidden">
      {/* 
        IMAGEN EXTENDIDA HASTA EL BORDE IZQUIERDO DE LA PANTALLA (Desktop)
        - Límite izquierdo: 0 (borde de la ventana)
        - Límite derecho: idéntico al límite de la columna izquierda (50vw - mitad de gap)
        - Sin mover el texto en absoluto
      */}
      <div 
        className="hidden lg:block absolute inset-y-16 left-0 w-[calc(50vw-2rem)] xl:w-[calc(50vw-2.5rem)] z-0 overflow-hidden rounded-r-3xl border-y border-r border-white/5 shadow-2xl group"
      >
        <img
          src={assetUrl('/images/interior-limo.png')}
          alt="Interior de lujo de limusina con techo estrellado y barra de champaña"
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
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
                alt="Interior de lujo de limusina con techo estrellado y barra de champaña"
                className="w-full h-[340px] sm:h-[440px] object-cover object-center filter brightness-[0.95] contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* En Desktop: Espaciador exacto de 6 columnas para reservar el espacio de la imagen sin alterar el texto */}
          <div className="hidden lg:block lg:col-span-6 min-h-[480px] pointer-events-none" aria-hidden="true" />

          {/* Lado Derecho: Contenido Editorial (Sin mover su posición) */}
          <div className="lg:col-span-6 relative flex flex-col items-start text-left">
            {/* Silueta de Corona como Marca de Agua en el fondo */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none">
              <CrownLogo size="lg" showSubtitle={false} className="w-80 h-80" />
            </div>

            {/* Overline */}
            <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
              PARA CADA OCASIÓN
            </span>

            {/* Título Principal */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-platinum-light leading-[1.12] mb-5 tracking-tight">
              El lujo que se adapta <br />
              a tus necesidades.
            </h2>

            {/* Párrafo Descriptivo */}
            <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed mb-8 max-w-lg">
              Ya sea una boda, un evento corporativo, un cumpleaños o un simple traslado, en <span className="text-[#DDB789] font-medium">Renta tu limo</span> te ofrecemos una experiencia única, con el máximo confort y estilo.
            </p>

            {/* Lista de Servicios con Checkmarks Dorados */}
            <div className="flex flex-col gap-3.5 w-full">
              {occasions.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#DDB789]/20 text-[#DDB789] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#DDB789]" strokeWidth={2.2} />
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-platinum-light font-light tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
