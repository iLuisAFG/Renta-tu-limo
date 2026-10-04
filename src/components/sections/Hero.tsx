import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { fadeInUpVariants, snappySpring } from '@/lib/motion';
import { assetUrl } from '@/lib/utils';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-obsidian-deep">
      {/* ========================================================= */}
      {/* 1. VERSIÓN DESKTOP (lg:min-h-screen) - Idéntica a PC (Imagen 2) */}
      {/* ========================================================= */}
      <div className="hidden lg:flex relative min-h-screen items-center justify-start">
        {/* Fotografía de fondo: Limusina negra frente al lobby de noche */}
        <div className="absolute inset-0 z-0">
          <img
            src={assetUrl('/images/hero-limo.png')}
            alt="Renta de limusina de lujo en CDMX frente a hotel exclusivo para bodas y eventos VIP - Renta tu Limo"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
            loading="eager"
            // @ts-expect-error React 18 / standard HTML fetchpriority attribute
            fetchpriority="high"
            width="1920"
            height="1080"
          />
          {/* Degradado lateral izquierdo para máxima legibilidad de texto en PC */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-deep via-obsidian-deep/85 to-transparent w-3/4 pointer-events-none" />
          {/* Sutil viñeteado inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Contenido Editorial Alineado a la Izquierda para PC */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full pt-28 pb-20">
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
            <h1 className="font-serif text-6xl lg:text-7xl xl:text-[80px] font-bold text-[#DDB789] tracking-tight leading-[1] mb-5">
              RENTA TU LIMO
            </h1>

            {/* Subtítulo H2 */}
            <h2 className="font-serif text-3xl lg:text-4xl text-platinum-light font-light leading-tight tracking-tight mb-5">
              Renta de limusinas para Bodas, XV Años <br />
              y eventos de alto nivel en México.
            </h2>

            {/* Párrafo explicativo con palabras clave naturales */}
            <p className="font-sans text-sm text-platinum-muted font-light leading-relaxed max-w-lg mb-8">
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
      </div>

      {/* ========================================================= */}
      {/* 2. VERSIÓN CELULAR / MÓVIL (lg:hidden)                     */}
      {/* La limusina se muestra protagonista, completa y nítida     */}
      {/* ========================================================= */}
      <div className="lg:hidden relative z-10 w-full px-5 pt-24 sm:pt-28 pb-14 flex flex-col text-left">
        {/* Fondo ambiental sutil en móvil */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-obsidian-deep to-obsidian-deep pointer-events-none" />

        <div className="relative z-10 w-full max-w-lg mx-auto">
          {/* Overline con intención local */}
          <span className="block font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#DDB789] font-medium mb-2.5">
            SERVICIO EXCLUSIVO · CDMX Y METRÓPOLI
          </span>

          {/* Título Principal H1 */}
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#DDB789] tracking-tight leading-none mb-3">
            RENTA TU LIMO
          </h1>

          {/* Subtítulo H2 */}
          <h2 className="font-serif text-xl sm:text-2xl text-platinum-light font-light leading-snug tracking-tight mb-4">
            Renta de limusinas para Bodas, XV Años y eventos de alto nivel en México.
          </h2>

          {/* FOTOGRAFÍA PROTAGONISTA DE LA LIMUSINA EN MÓVIL (Completamente visible como en PC) */}
          <div className="w-full relative my-3 rounded-2xl overflow-hidden border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.85)] bg-black/60 group">
            <img
              src={assetUrl('/images/hero-limo-mobile.png')}
              alt="Limusina Lincoln presidencial de lujo frente al hotel en CDMX para bodas y XV años"
              className="w-full h-auto object-cover object-center filter brightness-[0.98] contrast-[1.05]"
              loading="eager"
              width="1663"
              height="793"
            />
            {/* Viñeteado inferior con badge de la limusina */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] text-platinum-muted font-sans tracking-wider bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <span className="text-[#DDB789] font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DDB789] animate-pulse" />
                Lincoln Stretch Presidencial
              </span>
              <span className="text-white/70">Flota Oficial CDMX</span>
            </div>
          </div>

          {/* Párrafo explicativo */}
          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed mb-6 mt-3">
            Haz de tu fecha especial un momento inolvidable. Ponemos a tu disposición la flota más prestigiosa de limusinas Hummer, Escalade y Lincoln en la Ciudad de México, con chofer privado certificado, confort absoluto y atención personalizada 24/7.
          </p>

          {/* Botón Reserva Ahora */}
          <div className="w-full">
            <motion.a
              href="#reserva"
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-gold-pill cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-obsidian-deep" strokeWidth={2} />
              <span>Reserva Ahora</span>
              <ArrowRight className="w-4 h-4 text-obsidian-deep" />
            </motion.a>
          </div>

          {/* Micro badges de confianza para móvil */}
          <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] text-platinum-muted/80">
            <span className="flex items-center gap-1 text-[#DDB789]">
              <Star className="w-3 h-3 fill-[#DDB789] text-[#DDB789]" />
              <strong className="font-medium text-platinum-light">4.9 / 5.0</strong> Google
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DDB789]" />
              Choferes VIP
            </span>
            <span>Atención 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};
