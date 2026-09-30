import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  MapPin, 
  Car, 
  User, 
  FileText,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { snappySpring } from '@/lib/motion';

export const ConciergeBooking: React.FC = () => {
  const [occasion, setOccasion] = useState('Bodas VIP');
  const [vehicle, setVehicle] = useState('Cadillac Escalade Platinum Stretch (20 Pax)');
  const [city, setCity] = useState('Ciudad de México & Valle');
  const [duration, setDuration] = useState('5 Horas (Servicio Estándar VIP)');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  const occasionOptions = [
    'Bodas VIP',
    'XV Años Exclusivos',
    'Noches de Fiesta & Antro',
    'Galas & Alfombra Roja',
    'Traslado Ejecutivo C-Level',
    'Graduación de Gala',
  ];

  const vehicleOptions = [
    'Cadillac Escalade Platinum Stretch (20 Pax)',
    'Chrysler 300 Imperial Tuxedo (10-12 Pax)',
    'Lincoln Navigator Ultra-Luxe (14-16 Pax)',
    'Hummer H2 Presidential Lounge (18 Pax)',
    'Asesoría del Concierge (Recomiéndenme)',
  ];

  const cityOptions = [
    'Ciudad de México & Valle',
    'Guadalajara & Zapopan',
    'Monterrey & San Pedro',
    'Cancún & Riviera Maya',
    'Querétaro & San Miguel de Allende',
    'Puebla & Tlaxcala',
  ];

  const durationOptions = [
    '4 Horas (Mínimo Protocolario)',
    '5 Horas (Servicio Estándar VIP)',
    '7 Horas (Boda / XV Años Integral)',
    'Noche Completa / A Disposición',
  ];

  // Generador de enlace de WhatsApp dinámico
  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `✨ *SOLICITUD DE COTIZACIÓN VIP - RENTA TU LIMO* ✨

*Detalles del Servicio:*
• *Ocasión:* ${occasion}
• *Vehículo Solicitado:* ${vehicle}
• *Ciudad de Cobertura:* ${city}
• *Duración Estimada:* ${duration}
• *Fecha Tentativa:* ${date || 'Por definir'}
• *Nombre del Solicitante:* ${name || 'Cliente VIP'}
${notes ? `• *Notas Especiales:* ${notes}` : ''}

_Deseo conocer disponibilidad inmediata, tarifas de paquete y amenidades incluidas._`;

    const encodedUrl = `https://wa.me/5215500000000?text=${encodeURIComponent(formattedMessage)}`;
    window.open(encodedUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="concierge" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-obsidian-deep overflow-hidden">
      {/* Luces y texturas de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial-glow opacity-30 blur-[170px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-noise opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado del Cotizador */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-surface border border-champagne/30 text-champagne text-[10px] font-accent tracking-widest-xl uppercase mb-4 shadow-gold-subtle">
            <Sparkles className="w-3 h-3 text-champagne" aria-hidden="true" />
            <span>Atención Concierge Sin Fricción</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-platinum-light tracking-tight leading-[1.08] mb-4">
            Diseña tu itinerario <span className="italic font-normal text-champagne">privado</span>.
          </h2>

          <p className="font-sans text-sm sm:text-base text-platinum-muted font-light leading-relaxed">
            Sin formularios interminables ni registro previo. Configura tu evento y recibe atención inmediata y personalizada de nuestra conserjería 24/7.
          </p>
        </div>

        {/* Formulario y Resumen Dinámico en Grid Asimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Panel de Configuración (7 Columnas) */}
          <div className="lg:col-span-7 rounded-3xl glass-panel-elevated border border-white/10 p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handleWhatsAppRedirect} className="flex flex-col gap-6">
              {/* 1. Selección de Ocasión */}
              <div>
                <label className="block text-xs font-accent uppercase tracking-wider text-platinum-light font-semibold mb-2.5">
                  1. Ocasión o Tipo de Celebración
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {occasionOptions.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setOccasion(item)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-sans text-left transition-all cursor-pointer ${
                        occasion === item
                          ? 'bg-gradient-champagne text-obsidian-deep font-semibold shadow-sm'
                          : 'bg-obsidian-surface/60 hover:bg-obsidian-surface text-platinum border border-white/5'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Selección de Vehículo */}
              <div>
                <label className="block text-xs font-accent uppercase tracking-wider text-platinum-light font-semibold mb-2">
                  <Car className="w-3.5 h-3.5 text-champagne inline mr-1.5" aria-hidden="true" />
                  2. Limusina de Preferencia
                </label>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-surface/90 border border-white/10 text-platinum text-xs sm:text-sm font-sans focus:outline-none focus:border-champagne transition-colors cursor-pointer"
                >
                  {vehicleOptions.map((v) => (
                    <option key={v} value={v} className="bg-obsidian-elevated text-platinum">
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Ciudad y Duración */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-accent uppercase tracking-wider text-platinum-light font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5 text-champagne inline mr-1.5" aria-hidden="true" />
                    3. Ciudad de Servicio
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-surface/90 border border-white/10 text-platinum text-xs sm:text-sm font-sans focus:outline-none focus:border-champagne transition-colors cursor-pointer"
                  >
                    {cityOptions.map((c) => (
                      <option key={c} value={c} className="bg-obsidian-elevated text-platinum">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-accent uppercase tracking-wider text-platinum-light font-semibold mb-2">
                    <Clock className="w-3.5 h-3.5 text-champagne inline mr-1.5" aria-hidden="true" />
                    4. Duración Estimada
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-surface/90 border border-white/10 text-platinum text-xs sm:text-sm font-sans focus:outline-none focus:border-champagne transition-colors cursor-pointer"
                  >
                    {durationOptions.map((d) => (
                      <option key={d} value={d} className="bg-obsidian-elevated text-platinum">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 4. Fecha Tentativa y Nombre */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-accent uppercase tracking-wider text-platinum-light font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5 text-champagne inline mr-1.5" aria-hidden="true" />
                    5. Fecha Tentativa
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-surface/90 border border-white/10 text-platinum text-xs sm:text-sm font-sans focus:outline-none focus:border-champagne transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-accent uppercase tracking-wider text-platinum-light font-semibold mb-2">
                    <User className="w-3.5 h-3.5 text-champagne inline mr-1.5" aria-hidden="true" />
                    6. Tu Nombre o Coordinador
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Lic. Fernando Morales"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-surface/90 border border-white/10 text-platinum placeholder:text-platinum-muted/50 text-xs sm:text-sm font-sans focus:outline-none focus:border-champagne transition-colors"
                  />
                </div>
              </div>

              {/* 5. Peticiones Especiales (Opcional) */}
              <div>
                <label className="block text-xs font-accent uppercase tracking-wider text-platinum-light font-semibold mb-2">
                  <FileText className="w-3.5 h-3.5 text-champagne inline mr-1.5" aria-hidden="true" />
                  7. Notas / Peticiones Especiales (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Requerimos hielera con Moët & Chandon, escala fotográfica en Bellas Artes..."
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-surface/90 border border-white/10 text-platinum placeholder:text-platinum-muted/50 text-xs sm:text-sm font-sans focus:outline-none focus:border-champagne transition-colors resize-none"
                />
              </div>

              {/* Botón Principal de Envío Directo a WhatsApp */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                transition={snappySpring}
                className="w-full py-4 rounded-xl bg-gradient-champagne text-obsidian-deep font-sans font-bold text-xs uppercase tracking-widest text-center shadow-gold-subtle hover:shadow-gold-glow transition-all flex items-center justify-center gap-3 cursor-pointer mt-2"
              >
                <MessageCircle className="w-4 h-4 text-obsidian-deep fill-obsidian-deep/20" strokeWidth={2} aria-hidden="true" />
                <span>Cotizar Experiencia vía WhatsApp Concierge</span>
              </motion.button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-platinum-muted">
                <Lock className="w-3 h-3 text-champagne" aria-hidden="true" />
                <span>Datos protegidos bajo estricto acuerdo de confidencialidad y sin spam.</span>
              </div>
            </form>
          </div>

          {/* Resumen Dinámico en Tiempo Real (5 Columnas) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel-gold border border-champagne/40 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-champagne/20 mb-6">
                <div>
                  <span className="font-accent text-[9px] uppercase tracking-widest text-champagne font-bold block">
                    Resumen Dinámico del Servicio
                  </span>
                  <h3 className="font-serif text-2xl text-platinum-light font-normal">
                    Ficha de Reserva VIP
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-obsidian-deep/80 border border-champagne/40 flex items-center justify-center text-champagne font-serif text-lg font-bold">
                  R
                </div>
              </div>

              <div className="flex flex-col gap-4 text-left mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-accent uppercase tracking-wider text-platinum-muted">
                    Ocasión:
                  </span>
                  <span className="font-serif text-lg text-champagne-light font-medium">
                    {occasion}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] font-accent uppercase tracking-wider text-platinum-muted">
                    Vehículo Seleccionado:
                  </span>
                  <span className="font-sans text-sm text-platinum-light font-medium">
                    {vehicle}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-accent uppercase tracking-wider text-platinum-muted">
                      Ciudad:
                    </span>
                    <span className="font-sans text-xs text-platinum-light">
                      {city}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] font-accent uppercase tracking-wider text-platinum-muted">
                      Duración:
                    </span>
                    <span className="font-sans text-xs text-platinum-light">
                      {duration}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] font-accent uppercase tracking-wider text-platinum-muted">
                    Fecha Tentativa:
                  </span>
                  <span className="font-sans text-xs text-platinum-light">
                    {date || 'A convenir con Concierge'}
                  </span>
                </div>
              </div>

              {/* Protocolo y Garantías Incluidas */}
              <div className="pt-4 border-t border-champagne/20 flex flex-col gap-2.5 text-xs text-platinum-muted font-light">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-champagne shrink-0" aria-hidden="true" />
                  <span>Chófer certificado en traje de etiqueta formal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-champagne shrink-0" aria-hidden="true" />
                  <span>Bar con copas de cristal y amenidades de cortesía</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-champagne shrink-0" aria-hidden="true" />
                  <span>Seguro de cobertura amplia para todos los pasajeros</span>
                </div>
              </div>

              {/* Badge de Tiempo de Respuesta */}
              <div className="mt-6 p-3 rounded-xl bg-obsidian-deep/80 border border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-platinum-light font-medium">Asesor Concierge en línea</span>
                </div>
                <span className="text-[10px] font-accent text-champagne font-bold uppercase">
                  &lt; 5 min
                </span>
              </div>
            </div>

            {/* Certificación de Respaldo */}
            <div className="p-5 rounded-2xl bg-obsidian-surface/60 border border-white/5 flex items-center gap-4 text-left">
              <div className="p-3 rounded-xl bg-obsidian-elevated text-champagne shrink-0">
                <ShieldCheck className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-accent text-[10px] uppercase tracking-wider text-champagne font-bold">
                  Garantía de Puntualidad Renta tu Limo
                </span>
                <span className="text-xs text-platinum-muted font-light leading-snug">
                  Tu limusina arribará con 15 minutos de anticipación al punto acordado con la unidad impecable y climatizada.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
