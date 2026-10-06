import React from 'react';
import { ShieldCheck, Award, Clock, Sparkles, CheckCircle, Car } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const differentiators = [
    {
      icon: ShieldCheck,
      title: 'Choferes Ejecutivos de Etiqueta',
      desc: 'Conductores profesionales calificados en etiqueta y protocolo formal, con amplia experiencia en las principales rutas y avenidas de la CDMX y Área Metropolitana.',
    },
    {
      icon: Car,
      title: 'Flota Signature Impecable',
      desc: 'Unidades Hummer, Escalade y Lincoln equipadas con pisos de cristal iluminados, techos panorámicos, iluminación ambiental y sistemas de audio de alta fidelidad.',
    },
    {
      icon: Clock,
      title: 'Puntualidad Garantizada por Contrato',
      desc: 'Planificación minuciosa de cada itinerario y presentación del chofer con 15 a 20 minutos de anticipación para que tu evento transcurra con total serenidad.',
    },
    {
      icon: Award,
      title: 'Atención Concierge Directa',
      desc: 'Trato personalizado vía WhatsApp las 24 horas, sin intermediarios ni plataformas impersonales, adaptándonos con flexibilidad a las necesidades de tu celebración.',
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
        {/* Encabezado Semántico según estructura */}
        <div className="max-w-3xl mb-14 sm:mb-16 text-left">
          <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#DDB789]" />
            EXPERIENCIA & COMPROMISO
          </span>

          {/* H2 Semántico requerido */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-platinum-light tracking-tight leading-[1.15] mb-4">
            ¿Por qué elegir Renta tu Limo?
          </h2>

          <div className="w-20 h-0.5 bg-[#DDB789]/40 mb-6" />
          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed max-w-2xl">
            En el día más importante de tu vida, cada detalle cuenta. Nos aseguramos de que tu traslado no sea solo un recorrido, sino uno de los momentos más elegantes, memorables y disfrutados de toda tu celebración.
          </p>
        </div>

        {/* Contenido Principal en 2 Columnas Asimétricas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda: La Narrativa de Marca (6 columnas) */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <p className="font-serif text-lg sm:text-xl text-platinum-light font-normal leading-relaxed">
              Brindamos una experiencia de transporte de gala donde la elegancia, la puntualidad y la seguridad convergen en cada kilómetro.
            </p>

            <div className="font-sans text-sm text-platinum-muted font-light leading-relaxed space-y-4">
              <p>
                Entendemos el valor de cada instante en una boda, unos XV años o un evento corporativo de alto nivel. Por ello, formalizamos cada reservación con contrato por escrito, estableciendo con absoluta claridad horarios, itinerarios y características de la unidad contratada.
              </p>
              <p>
                Nuestras limusinas se someten a exhaustivos protocolos de mantenimiento preventivo, limpieza profunda y sanitización antes de cada salida, garantizando que el interior luzca impecable y listo para tu sesión fotográfica y brindis con tus invitados.
              </p>
            </div>

            {/* Cita Editorial del Concierge */}
            <div className="mt-2 p-6 sm:p-7 rounded-2xl bg-white/[0.02] border-l-2 border-[#DDB789] border-y border-r border-white/5 relative">
              <p className="font-serif text-base sm:text-lg text-platinum italic leading-relaxed mb-3">
                &ldquo;El verdadero lujo automotriz consiste en abordar una limusina impecable, relajarse con una copa y saber que llegarás puntual y con la máxima distinción a tu destino.&rdquo;
              </p>
              <span className="block font-sans text-xs tracking-wider uppercase text-[#DDB789] font-medium">
                — Compromiso de Servicio VIP, Renta tu Limo
              </span>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas de Diferenciadores Clave (6 columnas) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {differentiators.map((diff) => {
              const IconComponent = diff.icon;
              return (
                <article
                  key={diff.title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.015] border border-white/5 hover:border-[#DDB789]/30 transition-all duration-300 text-left"
                >
                  <div className="p-3 rounded-xl bg-[#DDB789]/10 text-[#DDB789] shrink-0 mt-0.5">
                    <IconComponent className="w-5 h-5 text-[#DDB789]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-medium text-platinum-light mb-1">
                      {diff.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-platinum-muted font-light leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </article>
              );
            })}

            {/* Resumen de Certidumbre */}
            <div className="mt-2 p-4 rounded-xl bg-obsidian-card border border-white/5 flex items-center justify-between text-xs font-sans text-platinum-muted">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#DDB789]" />
                Sin tarifas ocultas ni sorpresas
              </span>
              <span className="text-[#DDB789] font-medium">Cotización clara y directa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
