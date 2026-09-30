import React from 'react';
import { CoverflowCarousel, CoverflowSlide } from '@/components/ui/coverflow-carousel';

const FLEET_SLIDES: CoverflowSlide[] = [
  {
    src: "/images/fleet/1.png",
    alt: "Limusina 1 - A rellenar",
    title: "A rellenar",
    subtitle: "A rellenar",
    meta: [
      { label: "Capacidad", value: "A rellenar" },
      { label: "Ocasión Ideal", value: "A rellenar" },
      { label: "Equipamiento", value: "A rellenar" },
    ],
  },
  {
    src: "/images/fleet/2.png",
    alt: "Limusina 2 - A rellenar",
    title: "A rellenar",
    subtitle: "A rellenar",
    meta: [
      { label: "Capacidad", value: "A rellenar" },
      { label: "Ocasión Ideal", value: "A rellenar" },
      { label: "Equipamiento", value: "A rellenar" },
    ],
  },
  {
    src: "/images/fleet/3.png",
    alt: "Limusina 3 - A rellenar",
    title: "A rellenar",
    subtitle: "A rellenar",
    meta: [
      { label: "Capacidad", value: "A rellenar" },
      { label: "Ocasión Ideal", value: "A rellenar" },
      { label: "Equipamiento", value: "A rellenar" },
    ],
  },
  {
    src: "/images/fleet/4.png",
    alt: "Limusina 4 - A rellenar",
    title: "A rellenar",
    subtitle: "A rellenar",
    meta: [
      { label: "Capacidad", value: "A rellenar" },
      { label: "Ocasión Ideal", value: "A rellenar" },
      { label: "Equipamiento", value: "A rellenar" },
    ],
  },
  {
    src: "/images/fleet/5.png",
    alt: "Limusina 5 - A rellenar",
    title: "A rellenar",
    subtitle: "A rellenar",
    meta: [
      { label: "Capacidad", value: "A rellenar" },
      { label: "Ocasión Ideal", value: "A rellenar" },
      { label: "Equipamiento", value: "A rellenar" },
    ],
  },
  {
    src: "/images/fleet/6.png",
    alt: "Limusina 6 - A rellenar",
    title: "A rellenar",
    subtitle: "A rellenar",
    meta: [
      { label: "Capacidad", value: "A rellenar" },
      { label: "Ocasión Ideal", value: "A rellenar" },
      { label: "Equipamiento", value: "A rellenar" },
    ],
  },
  {
    src: "/images/fleet/7.png",
    alt: "Limusina 7 - A rellenar",
    title: "A rellenar",
    subtitle: "A rellenar",
    meta: [
      { label: "Capacidad", value: "A rellenar" },
      { label: "Ocasión Ideal", value: "A rellenar" },
      { label: "Equipamiento", value: "A rellenar" },
    ],
  },
  {
    src: "/images/fleet/8.png",
    alt: "Limusina 8 - A rellenar",
    title: "A rellenar",
    subtitle: "A rellenar",
    meta: [
      { label: "Capacidad", value: "A rellenar" },
      { label: "Ocasión Ideal", value: "A rellenar" },
      { label: "Equipamiento", value: "A rellenar" },
    ],
  },
];

export const FleetSection: React.FC = () => {
  return (
    <section id="vehiculos" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-obsidian-deep overflow-hidden">
      {/* Luz ambiental sutil en el fondo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-champagne/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto text-center">
        {/* Encabezado de la Sección */}
        <div className="max-w-2xl mx-auto mb-10">
          <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
            VEHÍCULOS DE LUJO
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-platinum-light mb-4 tracking-tight">
            Nuestra Flota
          </h2>

          <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light leading-relaxed max-w-lg mx-auto">
            Contamos con una exclusiva selección de limusinas y vehículos de alta gama para cada tipo de evento.
          </p>
        </div>

        {/* Carrusel Coverflow Interactivo con las Imágenes de Nuestra Flota */}
        <div className="w-full">
          <CoverflowCarousel
            slides={FLEET_SLIDES}
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
