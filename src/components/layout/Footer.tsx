import React from 'react';
import { CrownLogo } from '@/components/ui/CrownLogo';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="relative bg-[#050608] border-t border-white/5 pt-12 pb-8 px-4 sm:px-6 lg:px-12 text-center sm:text-left">
      <div className="max-w-7xl mx-auto">
        {/* Fila Principal: Logo, Frase Central con Divisores y Redes Sociales */}
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
              aria-label="Síguenos en Facebook"
            >
              <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z" />
              </svg>
              <span>Facebook Oficial</span>
            </a>
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
