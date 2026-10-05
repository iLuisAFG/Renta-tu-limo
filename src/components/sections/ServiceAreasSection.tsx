import React from 'react';
import { MapPin, Navigation, Plane } from 'lucide-react';

export const ServiceAreasSection: React.FC = () => {
  const zones = [
    {
      icon: MapPin,
      title: 'Ciudad de México',
      tag: 'Cobertura Completa',
      highlight: 'Polanco, Santa Fe, Coyoacán, San Ángel, Lomas de Chapultepec, Condesa, Roma, Pedregal y Reforma.',
      details: 'Servicio puerta a puerta en residencias, templos religiosos, salones de eventos y hoteles de alta gama.',
    },
    {
      icon: Navigation,
      title: 'Área Metropolitana (Edomex)',
      tag: 'Zona Poniente y Norte',
      highlight: 'Interlomas, Huixquilucan, Naucalpan, Ciudad Satélite, Zona Esmeralda, Atizapán y Tlalnepantla.',
      details: 'Rutas seguras y traslados directos hacia los principales recintos y haciendas de celebraciones.',
    },
    {
      icon: Plane,
      title: 'Aeropuertos y Vuelos Privados',
      tag: 'Traslados Ejecutivos',
      highlight: 'AICM (Terminal 1 y 2), AIFA y Aeropuerto Internacional de Toluca (Terminal Ejecutiva / FBO).',
      details: 'Recepción en sala VIP con chofer bilingüe, asistencia de equipaje y puntualidad milimétrica.',
    },
  ];

  return (
    <section id="cobertura" className="relative py-20 sm:py-28 bg-[#07080B] border-t border-white/5 overflow-hidden">
      {/* Luz ambiental */}
      <div 
        className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-champagne/[0.02] rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Encabezado de la Sección */}
        <div className="max-w-3xl mb-14 sm:mb-16 text-left">
          <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
            ÁREAS DE SERVICIO & COBERTURA LOCAL
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-platinum-light tracking-tight mb-4">
            Renta de Limusinas en CDMX <br className="hidden sm:inline" />
            y Área Metropolitana
          </h2>

          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed max-w-2xl">
            Llegamos a tu domicilio, iglesia o salón de eventos con anticipación rigurosa. Nuestra base operativa en la Ciudad de México nos permite brindar traslados inmediatos y programados en las zonas más exclusivas del país.
          </p>
        </div>

        {/* Rejilla de Cobertura Local */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {zones.map((zone) => {
            const Icon = zone.icon;
            return (
              <div
                key={zone.title}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DDB789]/30 transition-all duration-300 group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-[#DDB789]/10 text-[#DDB789] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-sans text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/[0.04] text-[#DDB789] border border-white/5">
                      {zone.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg text-platinum-light font-medium mb-2.5">
                    {zone.title}
                  </h3>

                  <p className="font-sans text-xs text-[#DDB789]/90 font-medium leading-relaxed mb-3">
                    {zone.highlight}
                  </p>

                  <p className="font-sans text-xs text-platinum-muted font-light leading-relaxed">
                    {zone.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-sans text-platinum-muted">
                  <span>Puntualidad en sitio</span>
                  <span className="text-[#DDB789] font-medium">100% Garantizada</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Inferior Informativo */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-obsidian-surface/60 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-sm sm:text-base text-platinum-light font-normal">
              ¿Tu evento es en otra ciudad o municipio?
            </h4>
            <p className="font-sans text-xs text-platinum-muted font-light mt-0.5">
              Coordinamos rutas personalizadas y cotizaciones especiales para haciendas en Morelos, Puebla y Estado de México.
            </p>
          </div>
          <a
            href="https://wa.me/5215528130558?text=Hola,%20quisiera%20consultar%20cobertura%20para%20un%20traslado%20en%20limusina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-gold-pill shrink-0"
          >
            <span>Consultar Cobertura</span>
          </a>
        </div>
      </div>
    </section>
  );
};
