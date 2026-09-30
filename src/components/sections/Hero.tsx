import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { fadeInUpVariants, snappySpring } from '@/lib/motion';
import { assetUrl } from '@/lib/utils';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-start overflow-hidden bg-obsidian-deep">
      {/* 1. Fotografía de fondo: Limusina negra frente al lobby de noche */}
      <div className="absolute inset-0 z-0">
        <img
          src={assetUrl('/images/hero-limo.png')}
          alt="Limusina de lujo negra frente a un hotel exclusivo de noche"
          className="w-full h-full object-cover object-right lg:object-center filter brightness-[0.92] contrast-[1.05]"
          loading="eager"
        />
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
          {/* Overline */}
          <span className="block font-sans text-xs sm:text-[13px] uppercase tracking-[0.3em] text-[#DDB789] font-medium mb-3">
            VIVE LA EXPERIENCIA
          </span>

          {/* Título Principal */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-[#DDB789] tracking-tight leading-[1] mb-5">
            RENTA TU LIMO
          </h1>

          {/* Subtítulo */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-platinum-light font-light leading-tight tracking-tight mb-5">
            Elegancia, confort y exclusividad <br className="hidden sm:block" />
            en cada kilómetro.
          </h2>

          {/* Párrafo explicativo */}
          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed max-w-lg mb-8">
            Haz de cada viaje un momento inolvidable. Renta tu limo y disfruta del mejor servicio de transporte ejecutivo, para cualquier ocasión especial o evento corporativo.
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
