import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: '¿Cuánto cuesta rentar una limusina en CDMX y cómo se cotiza el servicio?',
      answer:
        'El costo de renta de una limusina depende del modelo elegido (Lincoln, Hummer H2/H3 o Cadillac Escalade), la duración del servicio en horas, la fecha del evento y la ruta requerida. Ofrecemos paquetes especiales para Bodas VIP y XV Años. Para recibir una cotización exacta e inmediata, escríbenos directamente a nuestro WhatsApp oficial al 55 2587 0546.',
    },
    {
      question: '¿Cuántas personas caben en las limusinas y qué modelos tienen disponibles?',
      answer:
        'Nuestra flota cuenta con capacidades desde 12 hasta 16 pasajeros cómodamente sentados: Lincoln MKX (12 pax), Hummer H3 (12 pax), Hummer H2 Puertas de Gaviota (14 pax), Escalade 2020 (15 pax), Hummer H3 Puertas de Bandera (14 pax), Escalade Platinum con pantalla de 50 pulgadas (14 pax), Escalade Negra (13 pax) y Hummer H2 Gran Capacidad (16 pax).',
    },
    {
      question: '¿Qué incluye el servicio de renta de limusina?',
      answer:
        'Todos nuestros servicios incluyen chofer privado certificado en etiqueta y conducción ejecutiva, combustible del itinerario pactado, bebidas de cortesía (refrescos, agua embotellada y opción de champaña), conexión Bluetooth para tu música en sonido premium de alta fidelidad, iluminación ambiental LED y piso de cristal o lujo.',
    },
    {
      question: '¿Con cuánta anticipación debo reservar una limusina para una boda o XV años?',
      answer:
        'Recomendamos apartar tu fecha con 2 a 8 semanas de anticipación, especialmente para eventos en viernes, sábados o meses de alta demanda (mayo, junio, octubre, noviembre y diciembre). Sin embargo, contamos con atención concierge 24/7 para coordinar solicitudes de última hora según disponibilidad.',
    },
    {
      question: '¿Qué zonas de la Ciudad de México y Área Metropolitana cubren?',
      answer:
        'Cubrimos todas las alcaldías de la Ciudad de México (Polanco, Santa Fe, Coyoacán, San Ángel, Condesa, Roma, Pedregal, Reforma, Aeropuerto AICM y AIFA), así como la Zona Metropolitana del Estado de México (Huixquilucan, Interlomas, Naucalpan, Satélite, Atizapán). También realizamos servicios especiales a Cuernavaca, Puebla, Toluca y Valle de Bravo.',
    },
    {
      question: '¿Cómo se realiza el proceso de contratación y reserva?',
      answer:
        'El proceso es 100% ágil y seguro: 1) Solicitas tu cotización por WhatsApp indicando fecha, tipo de evento y limusina de preferencia; 2) Confirmamos la disponibilidad y te enviamos la propuesta formal; 3) Se aparta la unidad con un anticipo formal y se firma el contrato de servicio con puntualidad garantizada.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-[#090A0E] border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#DDB789]" />
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-platinum-light tracking-tight mb-4">
            Todo lo que necesitas saber antes de rentar
          </h2>
          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed">
            Resolvemos las dudas más habituales sobre contratación, capacidades, itinerarios y amenidades de nuestras limusinas de lujo.
          </p>
        </div>

        {/* Acordeón de FAQs */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/5 bg-white/[0.015] hover:border-white/10 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="font-serif text-base sm:text-lg text-platinum-light font-normal group-hover:text-[#DDB789] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/5 text-[#DDB789] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#DDB789]/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 animate-in fade-in duration-300">
                    <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to action al final del FAQ */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-serif text-base text-platinum-light font-medium">
              ¿Tienes una pregunta específica sobre tu evento?
            </h3>
            <p className="font-sans text-xs text-platinum-muted font-light mt-0.5">
              Nuestro concierge VIP te responde al instante con información detallada de disponibilidad.
            </p>
          </div>
          <a
            href="https://wa.me/5215525870546?text=Hola,%20tengo%20una%20duda%20sobre%20la%20renta%20de%20limusina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-gold-pill shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-obsidian-deep" />
            <span>Consultar con Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
};
