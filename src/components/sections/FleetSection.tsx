import React, { useMemo, useState } from 'react';
import { CoverflowCarousel, type CoverflowSlide } from '@/components/ui/coverflow-carousel';
import { FLEET_VEHICLES } from '@/data/fleet';
import { assetUrl } from '@/lib/utils';
import { Users, Check, ChevronRight } from 'lucide-react';

export const FleetSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  const slides: CoverflowSlide[] = useMemo(
    () => FLEET_VEHICLES.map((s) => ({ ...s, src: assetUrl(s.src) })),
    []
  );

  return (
    <section id="vehiculos" aria-labelledby="flota-section-heading" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-obsidian-deep overflow-hidden">
      {/* Luz ambiental sutil en el fondo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-champagne/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto text-center">
        {/* Encabezado Semántico de la Sección */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
            CATÁLOGO OFICIAL • CIUDAD DE MÉXICO
          </span>

          {/* H2 Semántico según estructura */}
          <h2 id="flota-section-heading" className="font-serif text-3xl sm:text-5xl font-normal text-platinum-light mb-4 tracking-tight">
            Nuestra flota de limusinas
          </h2>

          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed max-w-xl mx-auto">
            Explora nuestra exclusiva selección de limusinas Hummer, Cadillac Escalade y Lincoln en renta para 12 a 16 pasajeros. Cada unidad cuenta con chofer ejecutivo privado, piso de cristal iluminado o laminado de lujo, quemacocos panorámico y sonido envolvente.
          </p>

          {/* Selector de Vista: Carrusel 3D o Lista Detallada */}
          <div className="mt-6 inline-flex items-center p-1 rounded-full bg-white/[0.03] border border-white/10">
            <button
              type="button"
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all cursor-pointer ${
                viewMode === 'carousel'
                  ? 'bg-[#DDB789] text-obsidian-deep shadow-sm'
                  : 'text-platinum-muted hover:text-platinum-light'
              }`}
            >
              Vista Interactiva 3D
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#DDB789] text-obsidian-deep shadow-sm'
                  : 'text-platinum-muted hover:text-platinum-light'
              }`}
            >
              Ver Catálogo Completo
            </button>
          </div>
        </div>

        {/* 1. Vista Carrusel Coverflow Interactivo */}
        {viewMode === 'carousel' && (
          <div className="w-full">
            <CoverflowCarousel
              slides={slides}
              cardWidth="clamp(240px, 30vw, 420px)"
              rotate={38}
              depth={0.55}
              falloff={0.65}
              showCaption={true}
              showPagination={true}
              showNavigation={true}
              className="py-4"
            />
          </div>
        )}

        {/* 2. Vista Catálogo Semántico de las 8 Limusinas con H3s Reales y Enlaces a sus Páginas */}
        <div className={viewMode === 'grid' ? "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left" : "sr-only"}>
          {FLEET_VEHICLES.map((car) => (
            <article
              key={car.id}
              className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 flex flex-col justify-between hover:border-[#DDB789]/40 transition-colors"
            >
              <div>
                <a href={car.path} className="block aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-obsidian-card border border-white/5 group">
                  <img
                    src={assetUrl(car.src)}
                    alt={car.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="420"
                    height="315"
                  />
                </a>
                <div className="flex items-center gap-2 text-xs text-[#DDB789] font-sans font-medium mb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{car.capacity}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-platinum-light mb-1">
                  <a href={car.path} className="hover:text-[#DDB789] transition-colors">
                    {car.title}
                  </a>
                </h3>
                <p className="font-sans text-xs text-platinum-muted font-light mb-4">
                  {car.subtitle}
                </p>
                <ul className="space-y-1.5 text-[11px] font-sans text-platinum-muted/90 border-t border-white/5 pt-3 mb-4">
                  {car.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-[#DDB789] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={car.path}
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-platinum-light font-sans text-xs transition-all border border-white/10"
                >
                  <span>Ver página completa</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#reserva"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-gold-pill"
                >
                  <span>Cotizar {car.title}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
