import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Send, ChevronDown } from 'lucide-react';
import { snappySpring } from '@/lib/motion';
import { assetUrl } from '@/lib/utils';

export const BookingSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [service, setService] = useState('Bodas');

  const services = [
    'Bodas',
    'Eventos corporativos',
    'Cumpleaños',
    'Traslados al aeropuerto',
    'Tours y paseos',
    'Limusina Stretch (Hasta 14 pax)',
    'Limusina SUV (Hasta 10 pax)',
    'Cadillac Escalade (Hasta 7 pax)',
    'Party Bus (Hasta 20 pax)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `✨ *SOLICITUD DE RESERVA - RENTA TU LIMO* ✨

• *Nombre:* ${name || 'Cliente'}
• *Teléfono:* ${phone || 'No especificado'}
• *Fecha del Servicio:* ${date || 'Por coordinar'}
• *Servicio de Interés:* ${service}

_Deseo confirmar disponibilidad y cotización para mi evento._`;

    const url = `https://wa.me/5215500000000?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reserva" className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-end overflow-hidden bg-obsidian-deep py-20 px-4 sm:px-6 lg:px-12">
      {/* 1. Fotografía de fondo: Pareja elegante de gala en pista de aterrizaje con jet privado y limusina */}
      <div className="absolute inset-0 z-0">
        <img
          src={assetUrl('/images/reserva-tarmac.png')}
          alt="Pareja de gala en pista de aviación privada junto a limusina al atardecer"
          className="w-full h-full object-cover object-left lg:object-center filter brightness-[0.88] contrast-[1.05]"
          loading="lazy"
        />
        {/* Degradado para oscurecer y fundir bordes */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-obsidian-deep/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-obsidian-deep/80 pointer-events-none" />
      </div>

      {/* 2. Tarjeta Flotante del Formulario a la Derecha */}
      <div className="relative z-10 max-w-xl w-full">
        <div className="rounded-2xl bg-obsidian-deep/90 backdrop-blur-md border border-white/10 p-6 sm:p-9 shadow-2xl text-left">
          {/* Encabezado del Formulario */}
          <h2 className="font-serif text-2xl sm:text-3xl text-platinum-light font-normal mb-2 tracking-tight">
            Reserva tu experiencia
          </h2>
          <p className="font-sans text-xs text-platinum-muted font-light leading-relaxed mb-6">
            Completa el formulario y nos pondremos en contacto contigo en breve para confirmar tu reserva.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Fila 1: Nombre y Teléfono */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-obsidian-input border border-white/10 text-platinum-light placeholder:text-platinum-muted/50 text-xs font-sans focus:outline-none focus:border-[#DDB789] transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder="Teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-obsidian-input border border-white/10 text-platinum-light placeholder:text-platinum-muted/50 text-xs font-sans focus:outline-none focus:border-[#DDB789] transition-colors"
                />
              </div>
            </div>

            {/* Fila 2: Fecha y Servicio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-obsidian-input border border-white/10 text-platinum-light text-xs font-sans focus:outline-none focus:border-[#DDB789] transition-colors cursor-pointer"
                />
                <Calendar className="w-4 h-4 text-platinum-muted pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>

              <div className="relative">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-obsidian-input border border-white/10 text-platinum-light text-xs font-sans focus:outline-none focus:border-[#DDB789] transition-colors appearance-none cursor-pointer pr-10"
                >
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-obsidian-deep text-platinum-light">
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-platinum-muted pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Botón Enviar Solicitud */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={snappySpring}
              className="w-full mt-2 py-3.5 rounded-lg bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-gold-pill flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" strokeWidth={2} />
              <span>Enviar solicitud</span>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};
