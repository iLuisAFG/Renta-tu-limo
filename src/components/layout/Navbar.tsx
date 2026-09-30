import React, { useState, useEffect } from 'react';
import { CrownLogo } from '@/components/ui/CrownLogo';
import { Calendar, Menu, X, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Vehículos', href: '#vehiculos' },
    { label: 'Sobre Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian-deep/95 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo de la Corona */}
        <a href="#" className="flex items-center group cursor-pointer">
          <CrownLogo size="sm" />
        </a>

        {/* Enlaces de Navegación Centrales */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs lg:text-[13px] tracking-wider text-platinum hover:text-champagne transition-colors duration-200 font-sans font-normal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón CTA Reserva Ahora */}
        <div className="hidden sm:flex items-center">
          <a
            href="#reserva"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-medium text-xs tracking-wider transition-all duration-300 shadow-gold-pill hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-obsidian-deep" strokeWidth={2} />
            <span>Reserva Ahora</span>
          </a>
        </div>

        {/* Botón Menú Móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-platinum hover:text-champagne transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-deep/98 border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-sans text-platinum hover:text-champagne transition-colors py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#reserva"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#DDB789] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase shadow-gold-pill mt-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserva Ahora</span>
          </a>

          <a
            href="https://wa.me/5215500000000?text=Hola,%20deseo%20reservar%20un%20servicio%20de%20limusina"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-obsidian-surface border border-champagne/40 text-champagne font-sans font-semibold text-xs tracking-wider uppercase mt-1"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Concierge</span>
          </a>
        </div>
      )}
    </header>
  );
};
