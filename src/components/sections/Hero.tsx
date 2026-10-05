import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { fadeInUpVariants, snappySpring } from '@/lib/motion';
import { assetUrl } from '@/lib/utils';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-start overflow-hidden bg-obsidian-deep">
      {/* 1. Fotografía de fondo: Convoy de limusinas Cadillac bajo las luces nocturnas */}
      <div className="absolute inset-0 z-0">
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(max-width: 768px)"
            srcSet={assetUrl('/images/hero-limo-mobile.png')}
          />
          <img
            src={assetUrl('/images/hero-limo.png')}
            alt="Convoy de limusinas Cadillac de lujo bajo las luces nocturnas en CDMX para bodas, XV años y eventos VIP - Renta tu Limo"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
            loading="eager"
            // @ts-expect-error React 18 / standard HTML fetchpriority attribute
            fetchpriority="high"
            width="1920"
            height="1080"
          />
        </picture>
        {/* Degradado lateral izquierdo para máxima legibilidad de texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-deep via-obsidian-deep/85 to-transparent w-full lg:w-3/4 pointer-events-none" />
        {/* Sutil viñeteado inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* 2. Contenido Editorial Alineado a la Izquierda */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-28 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="max-w-2xl text-left"
        >
          {/* Overline con intención local */}
          <span className="block font-sans text-xs sm:text-[13px] uppercase tracking-[0.3em] text-[#DDB789] font-medium mb-3">
            SERVICIO EXCLUSIVO DE LIMUSINAS EN CDMX Y ÁREA METROPOLITANA
          </span>

          {/* Título Principal H1 Semántico y Comercial */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-[#DDB789] tracking-tight leading-[1] mb-5">
            RENTA TU LIMO
          </h1>

          {/* Subtítulo H2 */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-platinum-light font-light leading-tight tracking-tight mb-5">
            Renta de limusinas para Bodas, XV Años <br className="hidden sm:block" />
            y eventos de alto nivel en México.
          </h2>

          {/* Párrafo explicativo con palabras clave naturales */}
          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed max-w-lg mb-8">
            Haz de tu fecha especial un momento inolvidable. Ponemos a tu disposición la flota más prestigiosa de limusinas Hummer, Escalade y Lincoln en la Ciudad de México, con chofer privado certificado, confort absoluto y atención personalizada 24/7.
          </p>

          {/* Botón Reserva Ahora */}
          <div>
            <motion.a
              href="#reserva"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={snappySpring}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-gold-pill hover:shadow-gold-glow cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-obsidian-deep" strokeWidth={2} />
              <span>Reserva Ahora</span>
              <ArrowRight className="w-4 h-4 text-obsidian-deep transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
