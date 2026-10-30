import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { type FleetVehicle, FLEET_VEHICLES } from '@/data/fleet';
import { OCCASIONS_DATA } from '@/data/occasions';
import { COMPANY_DATA } from '@/data/company';
import { assetUrl } from '@/lib/utils';
import { Users, Check, MessageCircle } from 'lucide-react';

interface FleetPageProps {
  vehicle: FleetVehicle;
}

export const FleetPage: React.FC<FleetPageProps> = ({ vehicle }) => {
  const breadcrumbs = [
    { name: 'Inicio', url: `${COMPANY_DATA.domain}/` },
    { name: 'Flota', url: `${COMPANY_DATA.domain}/#vehiculos` },
    { name: vehicle.title, url: `${COMPANY_DATA.domain}${vehicle.path}` },
  ];

  const otherVehicles = FLEET_VEHICLES.filter((v) => v.slug !== vehicle.slug);

  return (
    <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* 1. Migas de Pan Visibles */}
      <Breadcrumbs items={breadcrumbs} />

      {/* 2. Encabezado con UN SOLO H1 */}
      <header className="max-w-4xl text-left mb-10">
        <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
          FLOTA OFICIAL • SERVICIO CON CHOFER PRIVADO EN CDMX
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-platinum-light tracking-tight leading-[1.15] mb-4">
          Renta de Limusina {vehicle.title} en CDMX
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-platinum-muted mb-4">
          <span className="inline-flex items-center gap-1.5 text-[#DDB789] font-medium">
            <Users className="w-4 h-4" />
            Capacidad: {vehicle.capacity}
          </span>
          <span className="text-white/20">•</span>
          <span>{vehicle.floorType}</span>
          <span className="text-white/20">•</span>
          <span>Quemacocos {vehicle.sunroof}</span>
        </div>
        <p className="font-sans text-sm sm:text-base text-platinum-muted font-light leading-relaxed max-w-3xl">
          {vehicle.metaDescription}
        </p>
      </header>

      {/* 3. Fotografía del Vehículo */}
      <div className="relative aspect-[16/10] max-h-[540px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-14 bg-obsidian-card">
        <img
          src={assetUrl(vehicle.src)}
          alt={vehicle.alt}
          className="w-full h-full object-cover filter brightness-[0.94] contrast-[1.05]"
          loading="eager"
          decoding="async"
          width="1200"
          height="750"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/75 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 4. Contenido Editorial y Especificaciones (350+ palabras únicas) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16 text-left">
        <div className="lg:col-span-8 space-y-6 text-sm sm:text-base font-sans text-platinum-light/90 font-light leading-relaxed">
          {vehicle.contentParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          {/* H2 Semántico para Especificaciones */}
          <section aria-labelledby="specs-heading" className="pt-8">
            <h2 id="specs-heading" className="font-serif text-2xl sm:text-3xl text-platinum-light font-normal mb-6 tracking-tight">
              Amenidades y Características de {vehicle.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {vehicle.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <Check className="w-4 h-4 text-[#DDB789] shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-platinum-light/90 font-light">{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* H2 Semántico para Ocasiones Sugeridas */}
          <section aria-labelledby="ocasiones-heading" className="pt-8">
            <h2 id="ocasiones-heading" className="font-serif text-2xl sm:text-3xl text-platinum-light font-normal mb-4 tracking-tight">
              Eventos Recomendados para Esta Limusina
            </h2>
            <ul className="space-y-2.5">
              {vehicle.idealOccasions.map((occ, i) => (
                <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-platinum-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DDB789]" />
                  <span>{occ}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 5. Tarjeta Lateral de Cotización */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-obsidian-surface border border-[#DDB789]/30 shadow-xl text-left">
            <h3 className="font-serif text-xl text-platinum-light font-normal mb-2">
              Cotiza Tu Limusina {vehicle.title}
            </h3>
            <p className="font-sans text-xs text-platinum-muted font-light mb-6">
              Indícanos fecha, horario y punto de salida en CDMX o Estado de México para brindarte cotización y disponibilidad inmediata.
            </p>
            <a
              href={`https://wa.me/5215528130558?text=${encodeURIComponent(
                `Hola, deseo solicitar cotización para la limusina ${vehicle.title} (${vehicle.capacity})`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-gold-pill"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-deep" />
              <span>Cotizar este vehículo</span>
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
            <h3 className="font-serif text-lg text-platinum-light font-normal mb-3">
              Ficha Técnica Rápida
            </h3>
            <dl className="space-y-2 text-xs font-sans divide-y divide-white/5">
              {vehicle.meta.map((m) => (
                <div key={m.label} className="flex justify-between py-1.5">
                  <dt className="text-platinum-muted">{m.label}:</dt>
                  <dd className="text-platinum-light font-medium">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>

      {/* 6. Enlaces hacia Servicios de Ocasión */}
      <section aria-labelledby="servicios-relacionados-heading" className="text-left mb-16 pt-8 border-t border-white/5">
        <h2 id="servicios-relacionados-heading" className="font-serif text-2xl sm:text-3xl text-platinum-light font-normal mb-6 tracking-tight">
          Servicios Populares con Limusina en CDMX
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {OCCASIONS_DATA.slice(0, 3).map((occ) => (
            <a
              key={occ.slug}
              href={occ.path}
              className="p-5 rounded-2xl bg-white/[0.015] border border-white/5 hover:border-[#DDB789]/30 transition-colors block group"
            >
              <h3 className="font-serif text-base text-platinum-light group-hover:text-[#DDB789] transition-colors mb-1">
                {occ.title}
              </h3>
              <p className="font-sans text-xs text-platinum-muted line-clamp-2">{occ.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 7. Otras Limusinas de la Flota (Enlazado Interno) */}
      <section aria-labelledby="otras-limusinas-heading" className="text-left pt-8 border-t border-white/5">
        <h2 id="otras-limusinas-heading" className="font-serif text-2xl sm:text-4xl text-platinum-light font-normal mb-6 tracking-tight">
          Otras Limusinas Disponibles en Nuestra Flota
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherVehicles.map((car) => (
            <a
              key={car.slug}
              href={car.path}
              className="p-4 rounded-xl bg-white/[0.015] border border-white/5 hover:border-[#DDB789]/30 transition-colors block text-left group"
            >
              <h3 className="font-serif text-base text-platinum-light group-hover:text-[#DDB789] transition-colors mb-1">
                {car.title}
              </h3>
              <span className="block font-sans text-xs text-[#DDB789] mb-1">{car.capacity}</span>
              <p className="font-sans text-[11px] text-platinum-muted line-clamp-2">{car.subtitle}</p>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
};
