import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageCircle, ChevronDown } from 'lucide-react';
import { snappySpring } from '@/lib/motion';
import { assetUrl } from '@/lib/utils';

export const BookingSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [service, setService] = useState('Bodas VIP');

  const services = [
    'Bodas VIP',
    'XV Años Exclusivos',
    'Noches VIP & Fiestas',
    'Traslados Ejecutivos / Aeropuerto',
    'Lincoln MKX (12 pax)',
    'Hummer H3 (12 pax)',
    'Hummer H2 Puertas de Gaviota (14 pax)',
    'Escalade 2020 (15 pax)',
    'Hummer H3 Puertas de Bandera (14 pax)',
    'Escalade Platinum (14 pax)',
    'Escalade Negra (13 pax)',
    'Hummer H2 (16 pax)',
    'Tours y Paseos Personalizados',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDate = date
      ? new Date(date + 'T00:00:00').toLocaleDateString('es-MX', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'Por coordinar con el concierge';

    const msg = `✨ *SOLICITUD DE RESERVA - RENTA TU LIMO* ✨

👋 *Hola, deseo solicitar disponibilidad y cotización VIP:*

• *Nombre:* ${name.trim() || 'Cliente'}
• *Teléfono:* ${phone.trim() || 'No especificado'}
• *Fecha tentativa:* ${formattedDate}
• *Vehículo / Ocasión:* ${service}

_Por favor, indíquenme disponibilidad para esta fecha y los detalles de contratación. ¡Gracias!_`;

    const url = `https://wa.me/5215525870546?text=${encodeURIComponent(msg)}`;
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
            Completa los datos y se formulará automáticamente tu mensaje personalizado para chatear directamente con nuestro Concierge por WhatsApp al <span className="text-[#DDB789] font-medium">55 2587 0546</span>.
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
                  placeholder="Teléfono (10 dígitos)"
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

            {/* Botón Enviar Solicitud por WhatsApp */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={snappySpring}
              className="w-full mt-2 py-3.5 rounded-lg bg-[#DDB789] hover:bg-[#E8C8A3] text-obsidian-deep font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-gold-pill flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-deep" />
              <span>Cotizar vía WhatsApp (55 2587 0546)</span>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};
