import React from 'react';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <article className="min-h-[70vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-3xl mx-auto text-center">
      <div>
        <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#DDB789] font-medium mb-3">
          ERROR 404 • PÁGINA NO ENCONTRADA
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-platinum-light tracking-tight mb-4">
          La página solicitada no está disponible
        </h1>
        <p className="font-sans text-sm text-platinum-muted font-light leading-relaxed mb-8 max-w-lg mx-auto">
          El enlace que intentas abrir no existe o ha cambiado de dirección. Te invitamos a consultar nuestra flota oficial y servicios de limusinas en la página principal.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-gold-pill"
          >
            <Home className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </a>
        </div>
      </div>
    </article>
  );
};
