import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OCCASIONS_DATA, Occasion } from '@/data/occasions';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  Heart, 
  Crown, 
  Wine, 
  Briefcase 
} from 'lucide-react';
import { snappySpring } from '@/lib/motion';

export const OccasionsExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(OCCASIONS_DATA[0].id);

  const activeOccasion: Occasion = OCCASIONS_DATA.find((o) => o.id === activeTab) || OCCASIONS_DATA[0];

  const tabIcons: Record<string, React.ElementType> = {
    bodas: Heart,
    'xv-anos': Crown,
    'noches-vip': Wine,
    corporativo: Briefcase,
  };

  return (
    <section id="ocasiones" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-obsidian-surface/60 border-t border-b border-white/5 overflow-hidden">
      {/* Fondo atmosférico */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-champagne/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* Encabezado Editorial */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-elevated border border-champagne/30 text-champagne text-[10px] font-accent tracking-widest-xl uppercase mb-4 shadow-gold-subtle">
            <Sparkles className="w-3 h-3 text-champagne" aria-hidden="true" />
            <span>Momentos Inolvidables en México</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-platinum-light tracking-tight mb-5 leading-[1.1]">
            Experiencias diseñadas a la medida de tu <span className="italic font-normal text-champagne">ocasión</span>.
          </h2>

          <p className="font-sans text-sm sm:text-base text-platinum-muted font-light leading-relaxed">
            No solo proporcionamos el vehículo: orquestamos la atmósfera, el protocolo y los detalles de cortesía que hacen irrepetible cada instante.
          </p>
        </div>

        {/* Tab Switcher con Reglas de Emil Kowalski (Píldora deslizante con spring suave) */}
        <div className="flex justify-center mb-12">
          <div 
            role="tablist" 
            aria-label="Seleccionar ocasión o tipo de evento"
            className="flex p-1.5 rounded-2xl bg-obsidian-deep/90 border border-white/10 backdrop-blur-xl max-w-full overflow-x-auto no-scrollbar"
          >
            {OCCASIONS_DATA.map((item) => {
              const isSelected = item.id === activeTab;
              const Icon = tabIcons[item.id] || Sparkles;

              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-sans font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer flex items-center gap-2.5 z-10 ${
                    isSelected ? 'text-obsidian-deep font-semibold' : 'text-platinum-muted hover:text-platinum'
                  }`}
                >
                  {/* Píldora deslizante activa con layoutId de motion */}
                  {isSelected && (
                    <motion.div
                      layoutId="active-occasion-pill"
                      className="absolute inset-0 bg-gradient-champagne rounded-xl shadow-gold-subtle -z-10"
                      transition={snappySpring}
                    />
                  )}

                  <Icon className={`w-4 h-4 ${isSelected ? 'text-obsidian-deep' : 'text-champagne'}`} strokeWidth={1.5} aria-hidden="true" />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenido Editorial de la Experiencia Activa */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeOccasion.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Lado Izquierdo: Manifiesto de la Ocasión & Beneficios (6 columnas) */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="font-accent text-[10px] uppercase tracking-widest-xl text-champagne font-bold px-3 py-1 rounded-md bg-champagne/10 border border-champagne/20 mb-4">
                {activeOccasion.tag}
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-platinum-light font-light leading-tight mb-4">
                {activeOccasion.heroHeadline}
              </h3>

              <p className="font-sans text-sm sm:text-base text-platinum-muted font-light leading-relaxed mb-6">
                {activeOccasion.description}
              </p>

              {/* Recomendación de Vehículo */}
              <div className="p-3.5 rounded-xl bg-obsidian-elevated/70 border border-white/5 w-full mb-6">
                <span className="text-[10px] font-accent uppercase tracking-widest text-platinum-muted block mb-1">
                  Vehículo Recomendado para esta Experiencia:
                </span>
                <span className="text-xs sm:text-sm font-sans text-champagne font-medium">
                  {activeOccasion.recommendedVehicle}
                </span>
              </div>

              {/* Lista de Atenciones Incluidas (Perks) */}
              <div className="w-full mb-8">
                <span className="font-accent text-[11px] uppercase tracking-wider text-platinum font-semibold block mb-3">
                  Atenciones de Cortesía Incluidas:
                </span>
                <ul className="flex flex-col gap-2.5">
                  {activeOccasion.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-xs sm:text-sm text-platinum-muted font-light">
                      <div className="w-4 h-4 rounded-full bg-champagne/20 text-champagne flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} aria-hidden="true" />
                      </div>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón de Cotización Directa para esta Ocasión */}
              <motion.a
                href="#concierge"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={snappySpring}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-obsidian-elevated hover:bg-obsidian-surface border border-champagne/40 hover:border-champagne text-champagne font-sans font-semibold text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                <span>Cotizar Paquete {activeOccasion.title}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            </div>

            {/* Lado Derecho: Imagen Editorial Inmersiva (6 columnas) */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[360px] sm:h-[480px] rounded-3xl overflow-hidden glass-panel-elevated border border-white/10 shadow-2xl bg-obsidian-pure">
                <img
                  src={activeOccasion.image}
                  alt={`Experiencia de limusina para ${activeOccasion.title}`}
                  className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/90 via-transparent to-transparent pointer-events-none" />

                {/* Badge Sello Ceremonial en Esquina */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-obsidian-surface/90 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-accent text-[9px] uppercase tracking-widest text-champagne font-bold">
                      Servicio Concierge Garantizado
                    </span>
                    <span className="font-serif text-base text-platinum-light font-medium">
                      Puntualidad Absoluta & Protocolo
                    </span>
                  </div>
                  <span className="font-serif text-2xl text-champagne italic">
                    VIP
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
