import React from 'react';
import { CrownLogo } from '@/components/ui/CrownLogo';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="relative bg-[#050608] border-t border-white/5 pt-12 pb-8 px-4 sm:px-6 lg:px-12 text-center sm:text-left">
      <div className="max-w-7xl mx-auto">
        {/* Fila Principal: Logo, Frase Central y Redes Sociales */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-white/5">
          {/* 1. Logo (Izquierda - 4 columnas) */}
          <div className="md:col-span-4 flex items-center justify-center md:justify-start">
            <CrownLogo size="md" className="items-center md:items-start" />
          </div>

          {/* 2. Frase Central con Divisores Verticales (4 columnas) */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center md:border-x md:border-white/10 px-4 py-2">
            <p className="font-serif text-lg sm:text-xl text-platinum-light italic font-normal tracking-wide leading-snug">
              Más que un traslado, <br />
              una experiencia.
            </p>
          </div>

          {/* 3. Redes Sociales (Derecha - Solo Facebook oficial) */}
          <div className="md:col-span-4 flex items-center justify-center md:justify-end">
            <a
              href="https://www.facebook.com/profile.php?id=61586622210053"
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

        {/* Fila Intermedia: NAP Local SEO y Enlaces Internos */}
        <div className="py-10 border-b border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-xs font-sans">
          {/* Col 1: Datos de Contacto y Concierge */}
          <div>
            <h3 className="font-serif text-sm text-platinum-light font-medium mb-3">
              Contacto Concierge
            </h3>
            <ul className="space-y-2 text-platinum-muted font-light">
              <li>
                <span className="text-white/40 block text-[11px]">WhatsApp 24/7:</span>
                <a href="https://wa.me/5215525870546" target="_blank" rel="noopener noreferrer" className="text-[#DDB789] hover:underline font-medium">
                  +52 55 2587 0546
                </a>
              </li>
              <li>
                <span className="text-white/40 block text-[11px]">Horario de atención:</span>
                Lunes a Domingo, 24 horas
              </li>
              <li>
                <span className="text-white/40 block text-[11px]">Ubicación base:</span>
                Ciudad de México (CDMX)
              </li>
            </ul>
          </div>

          {/* Col 2: Navegación Rápida */}
          <div>
            <h3 className="font-serif text-sm text-platinum-light font-medium mb-3">
              Navegación
            </h3>
            <ul className="space-y-2 text-platinum-muted font-light">
              <li><a href="#" className="hover:text-[#DDB789] transition-colors">Inicio</a></li>
              <li><a href="#vehiculos" className="hover:text-[#DDB789] transition-colors">Nuestra Flota de Limusinas</a></li>
              <li><a href="#servicios" className="hover:text-[#DDB789] transition-colors">Servicios para Eventos</a></li>
              <li><a href="#cobertura" className="hover:text-[#DDB789] transition-colors">Áreas de Cobertura</a></li>
              <li><a href="#faq" className="hover:text-[#DDB789] transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#nosotros" className="hover:text-[#DDB789] transition-colors">Sobre Nosotros</a></li>
            </ul>
          </div>

          {/* Col 3: Ocasiones Principales */}
          <div>
            <h3 className="font-serif text-sm text-platinum-light font-medium mb-3">
              Servicios Destacados
            </h3>
            <ul className="space-y-2 text-platinum-muted font-light">
              <li><a href="#reserva" className="hover:text-platinum-light transition-colors">Limusinas para Bodas VIP</a></li>
              <li><a href="#reserva" className="hover:text-platinum-light transition-colors">Limusinas para XV Años</a></li>
              <li><a href="#reserva" className="hover:text-platinum-light transition-colors">Graduaciones & Noches de Fiesta</a></li>
              <li><a href="#reserva" className="hover:text-platinum-light transition-colors">Traslados Ejecutivos Aeropuerto</a></li>
              <li><a href="#reserva" className="hover:text-platinum-light transition-colors">Aniversarios y Alfombra Roja</a></li>
            </ul>
          </div>

          {/* Col 4: Cobertura Local */}
          <div>
            <h3 className="font-serif text-sm text-platinum-light font-medium mb-3">
              Cobertura en México
            </h3>
            <p className="text-platinum-muted font-light leading-relaxed mb-2">
              CDMX (Polanco, Santa Fe, Coyoacán, San Ángel, Pedregal), Interlomas, Naucalpan, Satélite, Cuernavaca y Puebla.
            </p>
            <span className="inline-block text-[11px] text-[#DDB789]">
              • Puntualidad y privacidad garantizada
            </span>
          </div>
        </div>

        {/* Fila Inferior: Copyright, Legales y Créditos */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-platinum-muted/80 font-light">
          <p>© 2025 Renta tu Limo. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 sm:gap-x-6 gap-y-2">
            <a href="#" className="hover:text-platinum transition-colors">Términos y condiciones</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-platinum transition-colors">Política de privacidad</a>
            <span className="text-white/20">|</span>
            <span className="text-platinum-muted">
              Desarrollado por{' '}
              <a
                href="https://customlocal-group.vercel.app/pages"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DDB789] hover:underline hover:text-[#E8C8A3] transition-colors font-medium"
              >
                CustomLocal Pages.
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
