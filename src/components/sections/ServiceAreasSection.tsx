import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { ZONES_DATA } from '@/data/zones';
import { COMPANY_DATA } from '@/data/company';

export const ServiceAreasSection: React.FC = () => {
  return (
    <section id="cobertura" aria-labelledby="cobertura-section-heading" className="relative py-20 sm:py-28 bg-[#07080B] border-t border-white/5 overflow-hidden">
      {/* Luz ambiental */}
      <div 
        className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-champagne/[0.02] rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Encabezado Semántico de la Sección */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
            COBERTURA LOCAL Y METROPOLITANA
          </span>

          {/* H2 Semántico según estructura */}
          <h2 id="cobertura-section-heading" className="font-serif text-3xl sm:text-5xl font-normal text-platinum-light tracking-tight mb-4">
            Zonas donde ofrecemos servicio
          </h2>

          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed max-w-2xl">
            Llegamos directamente a tu domicilio, templo o salón de recepciones. Operamos con esquema de servicio a domicilio y logística puerta a puerta en la Ciudad de México y Área Metropolitana con puntualidad garantizada por contrato.
          </p>
        </div>

        {/* Rejilla de Cobertura Local vinculada a ZONES_DATA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {ZONES_DATA.map((zone) => {
            return (
              <article
                key={zone.slug}
                className="flex flex-col justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DDB789]/30 transition-all duration-300 group shadow-lg text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-[#DDB789]/10 text-[#DDB789] transition-transform duration-300 group-hover:scale-105">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-sans text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/[0.04] text-[#DDB789] border border-white/5">
                      CDMX & Edomex
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg text-platinum-light font-medium mb-2">
                    <a href={zone.path} className="hover:text-[#DDB789] transition-colors">
                      {zone.title.replace('Renta de Limusinas en ', '')}
                    </a>
                  </h3>

                  <p className="font-sans text-xs text-platinum-muted font-light leading-relaxed line-clamp-3 mb-4">
                    {zone.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <a
                    href={zone.path}
                    className="inline-flex items-center justify-between w-full text-xs font-sans text-[#DDB789] hover:text-[#E8C8A3] group/link"
                  >
                    <span>Ver cobertura de zona</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Banner Inferior Informativo */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-obsidian-surface/60 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-sm sm:text-base text-platinum-light font-normal">
              ¿Tu evento es en otra zona de la CDMX o Estado de México?
            </h4>
            <p className="font-sans text-xs text-platinum-muted font-light mt-0.5">
              Personalizamos la ruta y coordinamos los tiempos de traslado para haciendas en Morelos, Puebla y Estado de México.
            </p>
          </div>
          <a
            href={COMPANY_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-gold-pill shrink-0"
          >
            <span>Consultar Cobertura por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
