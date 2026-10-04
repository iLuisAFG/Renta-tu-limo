import React, { useMemo } from 'react';
import { CoverflowCarousel, CoverflowSlide } from '@/components/ui/coverflow-carousel';
import { assetUrl } from '@/lib/utils';

const FLEET_SLIDES: CoverflowSlide[] = [
  {
    src: "/images/fleet/1.png",
    alt: "Renta de limusina Lincoln MKX para 12 personas en CDMX - Bodas y eventos VIP",
    title: "Lincoln MKX",
    subtitle: "Elegancia & Exclusividad VIP",
    meta: [
      { label: "Capacidad", value: "12 personas" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Piso", value: "Piso de Crystal" },
      { label: "Audio", value: "Sonido premium" },
      { label: "Cortesía", value: "Bebidas de cortesía" },
    ],
  },
  {
    src: "/images/fleet/2.png",
    alt: "Renta de limusina Hummer H3 para 12 personas con piso de cristal y sonido premium",
    title: "Hummer H3",
    subtitle: "Potencia & Distinción",
    meta: [
      { label: "Capacidad", value: "12 personas" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Piso", value: "Piso de Crystal" },
      { label: "Audio", value: "Sonido premium" },
      { label: "Cortesía", value: "Bebidas de cortesía" },
    ],
  },
  {
    src: "/images/fleet/3.png",
    alt: "Renta de limusina Hummer H2 con puertas de gaviota para 14 personas en Ciudad de México",
    title: "Hummer H2",
    subtitle: "Puertas de Gaviota",
    meta: [
      { label: "Capacidad", value: "14 personas" },
      { label: "Puertas", value: "Apertura tipo Gaviota" },
      { label: "Piso", value: "Piso de Crystal" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Audio y Bar", value: "Sonido premium & bebidas de cortesía" },
    ],
  },
  {
    src: "/images/fleet/4.png",
    alt: "Renta de limusina Cadillac Escalade 2020 para 15 personas - Bodas y XV Años",
    title: "Escalade 2020",
    subtitle: "Lujo Contemporáneo de Gran Escala",
    meta: [
      { label: "Capacidad", value: "15 personas" },
      { label: "Piso", value: "Piso de Crystal" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Audio", value: "Sonido premium" },
      { label: "Cortesía", value: "Bebidas de cortesía" },
    ],
  },
  {
    src: "/images/fleet/5.png",
    alt: "Renta de limusina Hummer H3 con puertas de bandera para 14 personas en CDMX",
    title: "Hummer H3",
    subtitle: "Puertas de Bandera",
    meta: [
      { label: "Capacidad", value: "14 personas" },
      { label: "Puertas", value: "Apertura tipo Bandera" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Piso", value: "Piso de Crystal" },
      { label: "Audio y Bar", value: "Sonido premium & bebidas de cortesía" },
    ],
  },
  {
    src: "/images/fleet/6.png",
    alt: "Renta de limusina Cadillac Escalade Platinum con pantalla de 50 pulgadas para 14 personas",
    title: "Escalade Platinum",
    subtitle: "Máxima Distinción & Entretenimiento",
    meta: [
      { label: "Capacidad", value: "14 personas" },
      { label: "Pantalla", value: 'Pantalla de 50"' },
      { label: "Audio", value: "Sonido premium" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Piso", value: "Piso de Crystal" },
    ],
  },
  {
    src: "/images/fleet/7.png",
    alt: "Renta de limusina Escalade Negra Black Edition para 13 personas con chofer privado",
    title: "Escalade Negra",
    subtitle: "Edición Black Presidencial",
    meta: [
      { label: "Capacidad", value: "13 personas" },
      { label: "Audio", value: "Sonido premium" },
      { label: "Quemacocos", value: "Panorámico" },
      { label: "Piso", value: "Piso de lujo" },
      { label: "Cortesía", value: "Bebidas de cortesía" },
    ],
  },
  {
    src: "/images/fleet/8.png",
    alt: "Renta de limusina Hummer H2 Imperial de gran capacidad para 16 personas en eventos",
    title: "Hummer H2",
    subtitle: "Máxima Capacidad & Presencia",
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
  const slides = useMemo(
    () => FLEET_SLIDES.map((s) => ({ ...s, src: assetUrl(s.src) })),
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
        {/* Encabezado de la Sección */}
        <div className="max-w-3xl mx-auto mb-10">
          <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
            FLOTA DE LIMUSINAS EN CDMX
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-platinum-light mb-4 tracking-tight">
            Nuestra Flota de Limusinas y Vehículos de Lujo
          </h2>

          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed max-w-xl mx-auto">
            Explora nuestra exclusiva selección de limusinas Hummer, Cadillac Escalade y Lincoln en renta para 12 a 16 pasajeros. Cada unidad está equipada con sonido de alta fidelidad, quemacocos panorámico, piso de cristal iluminado y chofer ejecutivo privado.
          </p>
        </div>

        {/* Carrusel Coverflow Interactivo con las Imágenes de Nuestra Flota */}
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
      </div>
    </section>
  );
};
