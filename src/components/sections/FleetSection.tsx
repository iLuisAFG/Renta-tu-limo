import React, { useMemo, useState } from 'react';
import { CoverflowCarousel, CoverflowSlide } from '@/components/ui/coverflow-carousel';
import { assetUrl } from '@/lib/utils';
import { Users, Check, ChevronRight } from 'lucide-react';

interface FleetVehicle {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  capacity: string;
  features: string[];
  meta: { label: string; value: string }[];
}

const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: "lincoln-mkx",
    src: "/images/fleet/1.png",
    alt: "Renta de limusina Lincoln MKX para 12 personas en CDMX - Bodas y eventos VIP",
    title: "Lincoln MKX",
    subtitle: "Elegancia & Exclusividad VIP",
    capacity: "12 personas",
    features: ["Quemacocos panorámico", "Piso de cristal iluminado", "Sonido de alta fidelidad", "Bebidas de cortesía"],
    meta: [
      { label: "Capacidad", value: "12 personas" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Piso", value: "Piso de Crystal" },
      { label: "Audio", value: "Sonido premium" },
      { label: "Cortesía", value: "Bebidas de cortesía" },
    ],
  },
  {
    id: "hummer-h3",
    src: "/images/fleet/2.png",
    alt: "Renta de limusina Hummer H3 para 12 personas con piso de cristal y sonido premium",
    title: "Hummer H3",
    subtitle: "Potencia & Distinción",
    capacity: "12 personas",
    features: ["Piso de cristal iluminado", "Quemacocos panorámico", "Sonido envolvente", "Bar de cortesía"],
    meta: [
      { label: "Capacidad", value: "12 personas" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Piso", value: "Piso de Crystal" },
      { label: "Audio", value: "Sonido premium" },
      { label: "Cortesía", value: "Bebidas de cortesía" },
    ],
  },
  {
    id: "hummer-h2-gaviota",
    src: "/images/fleet/3.png",
    alt: "Renta de limusina Hummer H2 con puertas de gaviota para 14 personas en Ciudad de México",
    title: "Hummer H2 Puertas de Gaviota",
    subtitle: "Apertura Tipo Gaviota Espectacular",
    capacity: "14 personas",
    features: ["Puertas tipo gaviota", "Piso de cristal iluminado", "Quemacocos panorámico", "Bar y cristalería"],
    meta: [
      { label: "Capacidad", value: "14 personas" },
      { label: "Puertas", value: "Apertura tipo Gaviota" },
      { label: "Piso", value: "Piso de Crystal" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Audio y Bar", value: "Sonido premium & bebidas de cortesía" },
    ],
  },
  {
    id: "escalade-2020",
    src: "/images/fleet/4.png",
    alt: "Renta de limusina Cadillac Escalade 2020 para 15 personas - Bodas y XV Años",
    title: "Cadillac Escalade 2020",
    subtitle: "Lujo Contemporáneo de Gran Escala",
    capacity: "15 personas",
    features: ["Capacidad 15 personas", "Piso de cristal", "Quemacocos panorámico", "Acústica de alta fidelidad"],
    meta: [
      { label: "Capacidad", value: "15 personas" },
      { label: "Piso", value: "Piso de Crystal" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Audio", value: "Sonido premium" },
      { label: "Cortesía", value: "Bebidas de cortesía" },
    ],
  },
  {
    id: "hummer-h3-bandera",
    src: "/images/fleet/5.png",
    alt: "Renta de limusina Hummer H3 con puertas de bandera para 14 personas en CDMX",
    title: "Hummer H3 Puertas de Bandera",
    subtitle: "Acceso Triunfal en Puertas de Bandera",
    capacity: "14 personas",
    features: ["Puertas tipo bandera", "Quemacocos panorámico", "Piso de cristal iluminado", "Sonido premium"],
    meta: [
      { label: "Capacidad", value: "14 personas" },
      { label: "Puertas", value: "Apertura tipo Bandera" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Piso", value: "Piso de Crystal" },
      { label: "Audio y Bar", value: "Sonido premium & bebidas de cortesía" },
    ],
  },
  {
    id: "escalade-platinum",
    src: "/images/fleet/6.png",
    alt: "Renta de limusina Cadillac Escalade Platinum con pantalla de 50 pulgadas para 14 personas",
    title: "Escalade Platinum",
    subtitle: "Pantalla de 50\" & Sonido de Concierto",
    capacity: "14 personas",
    features: ["Pantalla de 50 pulgadas", "Sonido envolvente", "Piso de cristal", "Quemacocos panorámico"],
    meta: [
      { label: "Capacidad", value: "14 personas" },
      { label: "Pantalla", value: 'Pantalla de 50"' },
      { label: "Audio", value: "Sonido premium" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Piso", value: "Piso de Crystal" },
    ],
  },
  {
    id: "escalade-negra",
    src: "/images/fleet/7.png",
    alt: "Renta de limusina Escalade Negra Black Edition para 13 personas con chofer privado",
    title: "Escalade Negra",
    subtitle: "Edición Black Presidencial",
    capacity: "13 personas",
    features: ["Acabado Black Presidencial", "Piso de lujo", "Quemacocos panorámico", "Chofer ejecutivo de etiqueta"],
    meta: [
      { label: "Capacidad", value: "13 personas" },
      { label: "Audio", value: "Sonido premium" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Piso", value: "Piso de lujo" },
      { label: "Cortesía", value: "Bebidas de cortesía" },
    ],
  },
  {
    id: "hummer-h2-imperial",
    src: "/images/fleet/8.png",
    alt: "Renta de limusina Hummer H2 Imperial de gran capacidad para 16 personas en eventos",
    title: "Hummer H2 Imperial",
    subtitle: "Máxima Capacidad & Presencia Imponente",
    capacity: "16 personas",
    features: ["Capacidad máxima 16 pasajeros", "Piso laminado de lujo", "Sonido premium envolvente", "Bebidas de cortesía"],
    meta: [
      { label: "Capacidad", value: "16 personas" },
      { label: "Audio", value: "Sonido premium" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Piso", value: "Piso laminado" },
      { label: "Cortesía", value: "Bebidas de cortesía" },
    ],
  },
];

export const FleetSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  const slides: CoverflowSlide[] = useMemo(
    () => FLEET_VEHICLES.map((s) => ({ ...s, src: assetUrl(s.src) })),
    []
  );

  return (
    <section id="vehiculos" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-obsidian-deep overflow-hidden">
      {/* Luz ambiental sutil en el fondo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-champagne/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto text-center">
        {/* Encabezado Semántico de la Sección */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
            CATÁLOGO OFICIAL • CIUDAD DE MÉXICO
          </span>

          {/* H2 Semántico según estructura */}
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-platinum-light mb-4 tracking-tight">
            Nuestra flota de limusinas
          </h2>

          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed max-w-xl mx-auto">
            Explora nuestra exclusiva selección de limusinas Hummer, Cadillac Escalade y Lincoln en renta para 12 a 16 pasajeros. Cada unidad cuenta con chofer ejecutivo privado, piso de cristal iluminado, quemacocos panorámico y sonido envolvente.
          </p>

          {/* Selector de Vista: Carrusel 3D o Lista Detallada */}
          <div className="mt-6 inline-flex items-center p-1 rounded-full bg-white/[0.03] border border-white/10">
            <button
              type="button"
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all cursor-pointer ${
                viewMode === 'carousel'
                  ? 'bg-[#DDB789] text-obsidian-deep shadow-sm'
                  : 'text-platinum-muted hover:text-platinum-light'
              }`}
            >
              Vista Interactiva 3D
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#DDB789] text-obsidian-deep shadow-sm'
                  : 'text-platinum-muted hover:text-platinum-light'
              }`}
            >
              Ver Catálogo Completo
            </button>
          </div>
        </div>

        {/* 1. Vista Carrusel Coverflow Interactivo */}
        {viewMode === 'carousel' && (
          <div className="w-full">
            <CoverflowCarousel
              slides={slides}
              cardWidth="clamp(240px, 30vw, 420px)"
              rotate={38}
              depth={0.55}
              falloff={0.65}
              showCaption={true}
              showPagination={true}
              showNavigation={true}
              className="py-4"
            />
          </div>
        )}

        {/* 2. Vista Catálogo Semántico de las 8 Limusinas con H3s Reales */}
        <div className={viewMode === 'grid' ? "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left" : "sr-only"}>
          {FLEET_VEHICLES.map((car) => (
            <article
              key={car.id}
              className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 flex flex-col justify-between hover:border-[#DDB789]/40 transition-colors"
            >
              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-obsidian-card border border-white/5">
                  <img
                    src={assetUrl(car.src)}
                    alt={car.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="420"
                    height="315"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-[#DDB789] font-sans font-medium mb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{car.capacity}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-platinum-light mb-1">
                  {car.title}
                </h3>
                <p className="font-sans text-xs text-platinum-muted font-light mb-4">
                  {car.subtitle}
                </p>
                <ul className="space-y-1.5 text-[11px] font-sans text-platinum-muted/90 border-t border-white/5 pt-3 mb-4">
                  {car.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-[#DDB789] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#reserva"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-gold-pill"
              >
                <span>Cotizar {car.title}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
