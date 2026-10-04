import React from 'react';
import { Star, CheckCircle, MessageSquareQuote } from 'lucide-react';

interface Review {
  name: string;
  location: string;
  event: string;
  vehicle: string;
  quote: string;
  date: string;
}

export const TestimonialsSection: React.FC = () => {
  const reviews: Review[] = [
    {
      name: 'Mónica & Fernando R.',
      location: 'Polanco, CDMX',
      event: 'Boda de Gala',
      vehicle: 'Cadillac Escalade Platinum',
      quote:
        'El servicio para nuestra boda en Polanco superó cualquier expectativa. El chofer llegó 20 minutos antes, con traje impecable, abriéndonos la puerta en cada parada. La limusina estaba impecable por dentro y por fuera con la champaña lista. Totalmente recomendados.',
      date: 'Hace 3 semanas',
    },
    {
      name: 'Lic. Roberto Mendoza',
      location: 'Zona Esmeralda, Edomex',
      event: 'XV Años Exclusivos',
      vehicle: 'Hummer H2 Puertas de Gaviota',
      quote:
        'Contratamos la Hummer con puertas de gaviota para los 15 de mi hija. Sus amigas quedaron fascinadas con el piso de cristal y las luces. Como padres nos dio muchísima tranquilidad el profesionalismo y la conducción prudente del chofer.',
      date: 'Hace 1 mes',
    },
    {
      name: 'Valeria G. S.',
      location: 'Santa Fe, CDMX',
      event: 'Traslado Corporativo VIP',
      vehicle: 'Lincoln MKX Presidencial',
      quote:
        'Coordinamos el traslado de directivos internacionales desde el AICM hacia Santa Fe. Puntualidad milimétrica, chofer bilingüe con excelente trato y máxima discreción. Ya son nuestro proveedor oficial para eventos empresariales.',
      date: 'Hace 2 meses',
    },
    {
      name: 'Andrés & Daniela C.',
      location: 'Coyoacán, CDMX',
      event: 'Aniversario & Tour Nocturno',
      vehicle: 'Escalade Negra Black Edition',
      quote:
        'Un recorrido nocturno inolvidable por Paseo de la Reforma. El sistema de audio suena espectacular y la cabina es súper privada y cómoda. La atención por WhatsApp fue rápida y clara en todo momento.',
      date: 'Hace 1 mes',
    },
  ];

  return (
    <section id="testimonios" className="relative py-20 sm:py-28 bg-[#06070A] border-t border-white/5 overflow-hidden">
      {/* Luz ambiental sutil */}
      <div 
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-champagne/[0.02] rounded-full blur-[150px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Encabezado con Calificación de Google */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16 text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#DDB789]" />
              PRUEBA SOCIAL & REPUTACIÓN
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-platinum-light tracking-tight">
              Lo que opinan nuestros clientes VIP
            </h2>
            <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed mt-2.5">
              Más de 2,500 celebraciones exitosas avalan nuestro compromiso con la puntualidad, la seguridad y el trato de primer nivel.
            </p>
          </div>

          {/* Badge de Google Reviews */}
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/10 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center font-serif text-xl font-bold text-[#DDB789]">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#DDB789] text-[#DDB789]" />
                ))}
                <span className="font-sans text-xs font-semibold text-platinum-light ml-1">4.9 / 5.0</span>
              </div>
              <p className="font-sans text-[11px] text-platinum-muted font-light">
                Basado en 280+ reseñas verificadas
              </p>
            </div>
          </div>
        </div>

        {/* Rejilla de Reseñas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {reviews.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#DDB789]/30 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* 5 Estrellas */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#DDB789] text-[#DDB789]" />
                  ))}
                </div>

                {/* Texto de la Reseña */}
                <p className="font-sans text-xs text-platinum-light/90 font-light leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Autor y Detalles */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif text-sm font-medium text-platinum-light">
                    {item.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#DDB789] font-sans font-medium">
                    <CheckCircle className="w-3 h-3 text-[#DDB789]" />
                    Verificado
                  </span>
                </div>
                <p className="font-sans text-[11px] text-platinum-muted font-light">
                  {item.event} • <span className="text-[#DDB789]/80">{item.vehicle}</span>
                </p>
                <span className="block font-sans text-[10px] text-platinum-muted/60 mt-1">
                  {item.location} ({item.date})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
