import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FLEET_DATA, Limousine } from '@/data/fleet';
import { 
  Wine, 
  Music, 
  Sparkles, 
  Shield, 
  Tv, 
  Wifi, 
  Users, 
  Ruler, 
  ChevronRight, 
  MessageCircle,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { snappySpring } from '@/lib/motion';

export const FleetShowcase: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(FLEET_DATA[0].id);
  const [viewMode, setViewMode] = useState<'exterior' | 'interior'>('exterior');

  const activeVehicle: Limousine = FLEET_DATA.find((v) => v.id === selectedId) || FLEET_DATA[0];

  const iconMap: Record<string, React.ElementType> = {
    Wine,
    Music,
    Sparkles,
    Shield,
    Tv,
    Wifi,
  };

  return (
    <section id="flota" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-obsidian-deep overflow-hidden">
      {/* Fondo y luz de acento sutil */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-champagne/[0.04] rounded-full blur-[160px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* Cabecera Editorial Asimétrica */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-surface border border-champagne/30 text-champagne text-[10px] font-accent tracking-widest-xl uppercase mb-4 shadow-gold-subtle">
              <Sparkles className="w-3 h-3 text-champagne" aria-hidden="true" />
              <span>Curaduría de Flota 2026</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-platinum-light tracking-tight leading-[1.08]">
              Naves de Gala concebidas para la <span className="italic font-normal text-champagne">inmortalidad</span>.
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-platinum-muted font-light max-w-md leading-relaxed">
            Cada limusina de nuestro atelier automotriz es un santuario privado de confort, insonorización milimétrica y presencia imponente.
          </p>
        </div>

        {/* Selector de Modelos: Pestañas Interactivas Horizontales con LayoutId */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10" role="tablist" aria-label="Seleccionar modelo de limusina">
          {FLEET_DATA.map((vehicle) => {
            const isSelected = vehicle.id === selectedId;
            return (
              <button
                key={vehicle.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedId(vehicle.id)}
                className={`relative p-5 rounded-2xl text-left transition-all duration-300 overflow-hidden cursor-pointer ${
                  isSelected 
                    ? 'bg-obsidian-elevated/90 border border-champagne/40 shadow-gold-subtle' 
                    : 'bg-obsidian-surface/60 border border-white/5 hover:border-white/15'
                }`}
              >
                {/* Indicador de píldora activa con layoutId de motion */}
                {isSelected && (
                  <motion.div
                    layoutId="active-fleet-border"
                    className="absolute inset-0 border border-champagne/60 rounded-2xl pointer-events-none"
                    transition={snappySpring}
                  />
                )}

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-accent text-[9px] uppercase tracking-widest text-champagne font-bold">
                    {vehicle.tag}
                  </span>
                  <span className="text-[11px] text-platinum-muted font-light">
                    {vehicle.capacity}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl text-platinum-light font-medium group-hover:text-champagne transition-colors">
                  {vehicle.name}
                </h3>
                <p className="text-xs text-platinum-muted font-light line-clamp-1 mt-1">
                  {vehicle.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Vitrina Activa: Contenido Dinámico con Transición Suave */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Plano Visual Principal: Fotografía & Switch de Modo (7 columnas) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative h-[360px] sm:h-[460px] rounded-3xl overflow-hidden glass-panel-elevated border border-white/10 group bg-obsidian-pure">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeVehicle.id}-${viewMode}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={activeVehicle.image}
                    alt={`${activeVehicle.name} - ${viewMode === 'exterior' ? 'Vista Exterior' : 'Cabina Interior'}`}
                    className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/90 via-obsidian-deep/20 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Botón flotante selector de perspectiva (Exterior / Cabina) */}
              <div className="absolute top-4 right-4 z-10 flex items-center p-1 rounded-xl bg-obsidian-surface/90 backdrop-blur-xl border border-white/10 shadow-lg">
                <button
                  onClick={() => setViewMode('exterior')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all ${
                    viewMode === 'exterior'
                      ? 'bg-gradient-champagne text-obsidian-deep font-semibold shadow-sm'
                      : 'text-platinum-muted hover:text-platinum'
                  }`}
                >
                  Exterior
                </button>
                <button
                  onClick={() => setViewMode('interior')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all flex items-center gap-1.5 ${
                    viewMode === 'interior'
                      ? 'bg-gradient-champagne text-obsidian-deep font-semibold shadow-sm'
                      : 'text-platinum-muted hover:text-platinum'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Cabina VIP</span>
                </button>
              </div>

              {/* Badges de especificación rápida al pie de la foto */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-surface/80 backdrop-blur-md border border-white/10 text-platinum-light">
                    <Users className="w-3.5 h-3.5 text-champagne" aria-hidden="true" />
                    <span>{activeVehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-surface/80 backdrop-blur-md border border-white/10 text-platinum-light">
                    <Ruler className="w-3.5 h-3.5 text-champagne" aria-hidden="true" />
                    <span>{activeVehicle.length}</span>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-lg bg-champagne/15 border border-champagne/30 text-champagne text-xs font-accent tracking-wider font-semibold">
                  MÉXICO VIP
                </div>
              </div>
            </div>

            {/* Microcopia descriptiva */}
            <p className="text-sm text-platinum-muted font-light px-2 leading-relaxed">
              {activeVehicle.description}
            </p>
          </div>

          {/* Ficha Técnica & Amenidades VIP (5 columnas) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel-elevated border border-white/10 flex flex-col gap-6">
              <div>
                <span className="font-accent text-[10px] uppercase tracking-widest-xl text-champagne font-bold block mb-1">
                  Equipamiento de Serie Atelier
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-platinum-light font-light">
                  Amenidades & Confort a Bordo
                </h3>
              </div>

              {/* Lista de Amenidades con Iconos */}
              <div className="grid grid-cols-1 gap-3.5">
                {activeVehicle.amenities.map((item) => {
                  const Icon = iconMap[item.iconName] || Sparkles;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 p-3 rounded-xl bg-obsidian-surface/50 border border-white/5 hover:border-champagne/30 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-obsidian-elevated text-champagne shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <span className="text-xs sm:text-sm text-platinum font-light leading-snug">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Especificaciones Clave */}
              <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4 text-left">
                {activeVehicle.specifications.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-1">
                    <span className="text-[10px] font-accent uppercase tracking-wider text-platinum-muted">
                      {spec.label}
                    </span>
                    <span className="text-xs text-platinum-light font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-champagne shrink-0" aria-hidden="true" />
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Rápido hacia WhatsApp para este vehículo */}
              <motion.a
                href={`#concierge`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={snappySpring}
                className="w-full py-4 rounded-xl bg-gradient-champagne text-obsidian-deep font-sans font-semibold text-xs uppercase tracking-widest text-center shadow-gold-subtle hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <MessageCircle className="w-4 h-4 text-obsidian-deep" aria-hidden="true" />
                <span>Configurar & Cotizar este Modelo</span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
