import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { type OccasionItem, OCCASIONS_DATA } from '@/data/occasions';
import { FLEET_VEHICLES } from '@/data/fleet';
import { COMPANY_DATA } from '@/data/company';
import { assetUrl } from '@/lib/utils';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

interface OccasionPageProps {
  occasion: OccasionItem;
}

export const OccasionPage: React.FC<OccasionPageProps> = ({ occasion }) => {
  const breadcrumbs = [
    { name: 'Inicio', url: `${COMPANY_DATA.domain}/` },
    { name: 'Servicios', url: `${COMPANY_DATA.domain}/#servicios` },
    { name: occasion.title, url: `${COMPANY_DATA.domain}${occasion.path}` },
  ];

  const otherOccasions = OCCASIONS_DATA.filter((o) => o.slug !== occasion.slug);

  return (
    <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* 1. Migas de Pan Visibles */}
      <Breadcrumbs items={breadcrumbs} />

      {/* 2. Encabezado Editorial Principal con UN SOLO H1 */}
      <header className="max-w-4xl text-left mb-10">
        <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
          SERVICIO EXCLUSIVO DE TRANSPORTE CEREMONIAL EN CDMX
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-platinum-light tracking-tight leading-[1.15] mb-4">
          {occasion.title}
        </h1>
        <p className="font-serif text-lg sm:text-2xl text-[#DDB789] font-light leading-relaxed mb-6">
          {occasion.heroHeadline}
        </p>
        <p className="font-sans text-sm sm:text-base text-platinum-muted font-light leading-relaxed max-w-3xl">
          {occasion.description}
        </p>
      </header>

      {/* 3. Fotografía Principal */}
      <div className="relative aspect-[16/9] max-h-[520px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-14 bg-obsidian-card">
        <img
          src={assetUrl(occasion.image)}
          alt={occasion.alt}
          className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05]"
          loading="eager"
          decoding="async"
          width="1200"
          height="675"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/80 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 4. Contenido Textual Rico (350+ palabras únicas en español de México) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16 text-left">
        <div className="lg:col-span-8 space-y-6 text-sm sm:text-base font-sans text-platinum-light/90 font-light leading-relaxed">
          {occasion.contentParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          {/* H2 Semántico para Beneficios */}
          <section aria-labelledby="beneficios-heading" className="pt-8">
            <h2 id="beneficios-heading" className="font-serif text-2xl sm:text-3xl text-platinum-light font-normal mb-6 tracking-tight">
              Beneficios Incluidos en Tu Servicio
            </h2>
            <ul className="space-y-3.5">
              {occasion.perks.map((perk, i) => (
                <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#DDB789] shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-platinum-light/90 font-light">{perk}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 5. Columna Lateral de Conversión y Datos */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-obsidian-surface border border-[#DDB789]/30 shadow-xl text-left">
            <h3 className="font-serif text-xl text-platinum-light font-normal mb-2">
              Cotiza Tu Fecha Especial
            </h3>
            <p className="font-sans text-xs text-platinum-muted font-light mb-6">
              Atención personalizada vía WhatsApp 24/7 sin intermediarios. Confirmación de disponibilidad al instante.
            </p>
            <a
              href={`https://wa.me/5215528130558?text=${encodeURIComponent(
                `Hola, deseo consultar disponibilidad y cotización para ${occasion.title}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-gold-pill"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-deep" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
            <h3 className="font-serif text-lg text-platinum-light font-normal mb-3">
              Garantías de Servicio
            </h3>
            <ul className="space-y-2 text-xs font-sans text-platinum-muted">
              <li>• Contrato formal con unidad y fecha amparada</li>
              <li>• Presentación 15 a 20 min antes de la cita</li>
              <li>• Chofer profesional de gala en etiqueta</li>
              <li>• Unidad sanitizada e inspeccionada</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* 6. Modelos de Limusina Recomendados con Enlaces Internos <a href> */}
      <section aria-labelledby="flota-recomendada-heading" className="text-left mb-16 pt-8 border-t border-white/5">
        <h2 id="flota-recomendada-heading" className="font-serif text-2xl sm:text-4xl text-platinum-light font-normal mb-3 tracking-tight">
          Limusinas Recomendadas para Esta Celebración
        </h2>
        <p className="font-sans text-xs sm:text-sm text-platinum-muted font-light mb-8 max-w-2xl">
          Selecciona cualquiera de nuestros vehículos para conocer sus amenidades detalladas, capacidad de pasajeros y solicitar cotización.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET_VEHICLES.slice(0, 4).map((car) => (
            <article key={car.id} className="rounded-2xl bg-white/[0.02] border border-white/10 p-4 hover:border-[#DDB789]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-obsidian-card">
                  <img src={assetUrl(car.src)} alt={car.alt} className="w-full h-full object-cover" loading="lazy" width="380" height="285" />
                </div>
                <h3 className="font-serif text-base text-platinum-light font-medium mb-1">
                  {car.title}
                </h3>
                <p className="font-sans text-xs text-[#DDB789] mb-2">{car.capacity}</p>
                <p className="font-sans text-[11px] text-platinum-muted line-clamp-2 mb-4">{car.subtitle}</p>
              </div>
              <a
                href={car.path}
                className="inline-flex items-center justify-between text-xs font-sans text-[#DDB789] hover:text-[#E8C8A3] pt-3 border-t border-white/5 group"
              >
                <span>Ver detalles del vehículo</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* 7. Otras Ocasiones Especiales (Enlazado Interno) */}
      <section aria-labelledby="otras-ocasiones-heading" className="text-left pt-8 border-t border-white/5">
        <h2 id="otras-ocasiones-heading" className="font-serif text-2xl sm:text-3xl text-platinum-light font-normal mb-6 tracking-tight">
          Otros Servicios y Celebraciones en CDMX
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherOccasions.map((other) => (
            <a
              key={other.slug}
              href={other.path}
              className="p-4 rounded-xl bg-white/[0.015] border border-white/5 hover:border-[#DDB789]/30 transition-colors block text-left group"
            >
              <h3 className="font-serif text-base text-platinum-light group-hover:text-[#DDB789] transition-colors mb-1">
                {other.title}
              </h3>
              <p className="font-sans text-xs text-platinum-muted line-clamp-2">
                {other.subtitle}
              </p>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
};
