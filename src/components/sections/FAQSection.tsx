import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA } from '@/data/faq';
import { COMPANY_DATA } from '@/data/company';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-labelledby="faq-section-heading" className="relative py-20 sm:py-28 bg-[#090A0E] border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#DDB789]" />
            PREGUNTAS FRECUENTES
          </span>
          <h2 id="faq-section-heading" className="font-serif text-3xl sm:text-5xl font-normal text-platinum-light tracking-tight mb-4">
            Preguntas frecuentes
          </h2>
          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed">
            Resolvemos las dudas más habituales sobre contratación, capacidades, itinerarios y amenidades de nuestras limusinas de lujo en CDMX.
          </p>
        </div>

        {/* Acordeón de FAQs desde la Fuente Única de Verdad */}
        <div className="space-y-4 text-left">
          {FAQ_DATA.map((faq, index) => {
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
            href={COMPANY_DATA.whatsappUrl}
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
