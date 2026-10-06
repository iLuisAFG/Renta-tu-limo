import React from 'react';
import { MapPin, Navigation, Plane, Compass } from 'lucide-react';

export const ServiceAreasSection: React.FC = () => {
  const zones = [
    {
      icon: MapPin,
      title: 'Ciudad de México (CDMX)',
      tag: 'Cobertura Integral',
      highlight: 'Polanco, Santa Fe, Coyoacán, San Ángel, Condesa, Roma, Pedregal y Paseo de la Reforma.',
      details: 'Servicio exclusivo a domicilio, iglesias, salones de fiestas, hoteles y recintos para eventos en todas las alcaldías de la CDMX.',
    },
    {
      icon: Navigation,
      title: 'Área Metropolitana (Edomex)',
      tag: 'Zona Poniente y Norte',
      highlight: 'Interlomas, Huixquilucan, Naucalpan de Juárez, Ciudad Satélite y Atizapán de Zaragoza.',
      details: 'Traslados seguros con chofer privado hacia haciendas, jardines de eventos y zonas residenciales metropolitanas.',
    },
    {
      icon: Plane,
      title: 'Aeropuertos y Vuelos Ejecutivos',
      tag: 'Recepción VIP',
      highlight: 'AICM (Terminal 1 y 2), AIFA y Aeropuerto Internacional de Toluca.',
      details: 'Recepción y bienvenida ejecutiva en sala VIP o hangar con asistencia de equipaje y puntualidad milimétrica.',
    },
    {
      icon: Compass,
      title: 'Servicios Foráneos Especiales',
      tag: 'Rutas Foráneas',
      highlight: 'Cuernavaca, Puebla, Toluca y Valle de Bravo.',
      details: 'Coordinación logística previa para bodas de destino, aniversarios y eventos de gala fuera de la capital.',
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
        {/* Encabezado Semántico de la Sección */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
            COBERTURA LOCAL Y METROPOLITANA
          </span>

          {/* H2 Semántico según estructura */}
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-platinum-light tracking-tight mb-4">
            Zonas donde ofrecemos servicio
          </h2>

          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed max-w-2xl">
            Llegamos directamente a tu domicilio, templo o salón de recepciones. Operamos con esquema de servicio a domicilio y logística puerta a puerta en la Ciudad de México y Área Metropolitana con puntualidad garantizada por contrato.
          </p>
        </div>

        {/* Rejilla de Cobertura Local */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone) => {
            const Icon = zone.icon;
            return (
              <article
                key={zone.title}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DDB789]/30 transition-all duration-300 group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#DDB789]/10 text-[#DDB789] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-sans text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#DDB789] border border-white/5">
                      {zone.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg text-platinum-light font-medium mb-2">
                    {zone.title}
                  </h3>

                  <p className="font-sans text-xs text-[#DDB789]/90 font-medium leading-relaxed mb-2.5">
                    {zone.highlight}
                  </p>

                  <p className="font-sans text-xs text-platinum-muted font-light leading-relaxed">
                    {zone.details}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-sans text-platinum-muted">
                  <span>Puntualidad en sitio</span>
                  <span className="text-[#DDB789] font-medium">Garantizada</span>
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
              Personalizamos la ruta y coordinamos los tiempos de traslado para que no tengas ninguna preocupación en tu día especial.
            </p>
          </div>
          <a
            href="https://wa.me/5215528130558?text=Hola,%20quisiera%20consultar%20cobertura%20para%20un%20traslado%20en%20limusina"
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
