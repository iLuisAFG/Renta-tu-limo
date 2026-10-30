import React from 'react';
import { CrownLogo } from '@/components/ui/CrownLogo';
import { COMPANY_DATA } from '@/data/company';
import { FLEET_VEHICLES } from '@/data/fleet';
import { OCCASIONS_DATA } from '@/data/occasions';
import { ZONES_DATA } from '@/data/zones';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="relative bg-[#050608] border-t border-white/5 pt-12 pb-8 px-4 sm:px-6 lg:px-12 text-center sm:text-left">
      <div className="max-w-7xl mx-auto">
        {/* Fila Principal: Logo, Frase Central y Redes Sociales */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-white/5">
          {/* 1. Logo */}
          <div className="md:col-span-4 flex items-center justify-center md:justify-start">
            <a href="/" className="inline-block" aria-label="Renta tu Limo - Página de Inicio">
              <CrownLogo size="md" className="items-center md:items-start" />
            </a>
          </div>

          {/* 2. Frase Central */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center md:border-x md:border-white/10 px-4 py-2">
            <p className="font-serif text-lg sm:text-xl text-platinum-light italic font-normal tracking-wide leading-snug">
              Más que un traslado, <br />
              una experiencia.
            </p>
          </div>

          {/* 3. Redes Sociales */}
          <div className="md:col-span-4 flex items-center justify-center md:justify-end">
            <a
              href={COMPANY_DATA.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 hover:border-[#DDB789]/50 text-platinum-muted hover:text-[#DDB789] bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 text-xs font-sans group"
              aria-label="Síguenos en Facebook Oficial"
            >
              <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z" />
              </svg>
              <span>Facebook Oficial</span>
            </a>
          </div>
        </div>

        {/* Fila Intermedia: Enlaces Internos Exhaustivos y NAP */}
        <div className="py-10 border-b border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left text-xs font-sans">
          {/* Col 1: Datos de Contacto y Concierge */}
          <div>
            <h3 className="font-serif text-sm text-platinum-light font-medium mb-3">
              Contacto Concierge
            </h3>
            <ul className="space-y-2.5 text-platinum-muted font-light">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#DDB789] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/40 block text-[11px]">Teléfono directo:</span>
                  <a href={`tel:${COMPANY_DATA.phoneClean}`} className="text-platinum-light hover:text-[#DDB789] transition-colors font-medium">
                    {COMPANY_DATA.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/40 block text-[11px]">WhatsApp 24/7:</span>
                  <a href={COMPANY_DATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#DDB789] hover:underline font-medium">
                    {COMPANY_DATA.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#DDB789] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/40 block text-[11px]">Atención Concierge:</span>
                  Lunes a Domingo, 24 horas
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#DDB789] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/40 block text-[11px]">Base operativa:</span>
                  Ciudad de México y Área Metropolitana
                </div>
              </li>
            </ul>
          </div>

          {/* Col 2: Ocasiones y Servicios */}
          <div>
            <h3 className="font-serif text-sm text-platinum-light font-medium mb-3">
              Servicios por Ocasión
            </h3>
            <ul className="space-y-2 text-platinum-muted font-light">
              {OCCASIONS_DATA.map((occ) => (
                <li key={occ.slug}>
                  <a href={occ.path} className="hover:text-[#DDB789] transition-colors">
                    {occ.title.replace(' en CDMX', '')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Flota de Limusinas (Parte 1) */}
          <div>
            <h3 className="font-serif text-sm text-platinum-light font-medium mb-3">
              Nuestra Flota (Hummer & Lincoln)
            </h3>
            <ul className="space-y-2 text-platinum-muted font-light">
              {FLEET_VEHICLES.slice(0, 4).map((car) => (
                <li key={car.slug}>
                  <a href={car.path} className="hover:text-[#DDB789] transition-colors">
                    Limusina {car.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Flota de Limusinas (Parte 2) */}
          <div>
            <h3 className="font-serif text-sm text-platinum-light font-medium mb-3">
              Flota Cadillac & Gran Escala
            </h3>
            <ul className="space-y-2 text-platinum-muted font-light">
              {FLEET_VEHICLES.slice(4).map((car) => (
                <li key={car.slug}>
                  <a href={car.path} className="hover:text-[#DDB789] transition-colors">
                    Limusina {car.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Cobertura Local */}
          <div>
            <h3 className="font-serif text-sm text-platinum-light font-medium mb-3">
              Zonas de Cobertura
            </h3>
            <ul className="space-y-2 text-platinum-muted font-light">
              {ZONES_DATA.map((z) => (
                <li key={z.slug}>
                  <a href={z.path} className="hover:text-[#DDB789] transition-colors">
                    Limusinas en {z.title.replace('Renta de Limusinas en ', '').replace(', CDMX', '')}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-platinum-muted/70">
              Servicios foráneos: Cuernavaca, Puebla, Toluca y Valle de Bravo.
            </div>
          </div>
        </div>

        {/* Fila Inferior: Copyright, Legales y Créditos */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-platinum-muted/80 font-light">
          <p>© 2026 Renta tu Limo. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 sm:gap-x-6 gap-y-2">
            <a href="/" className="hover:text-platinum transition-colors">Inicio</a>
            <span className="text-white/20">|</span>
            <a href="/#vehiculos" className="hover:text-platinum transition-colors">Flota de Limusinas</a>
            <span className="text-white/20">|</span>
            <a href="/#cobertura" className="hover:text-platinum transition-colors">Zonas</a>
            <span className="text-white/20">|</span>
            <a href="/#faq" className="hover:text-platinum transition-colors">Preguntas Frecuentes</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
