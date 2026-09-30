import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { ValuePillars } from '@/components/sections/ValuePillars';
import { OccasionsSection } from '@/components/sections/OccasionsSection';
import { FleetSection } from '@/components/sections/FleetSection';
import { BookingSection } from '@/components/sections/BookingSection';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { snappySpring } from '@/lib/motion';

export const App: React.FC = () => {
  return (
    <Layout>
      {/* 1. Hero Principal con Limusina Negra Frente al Hotel */}
      <Hero />

      {/* 2. Franja de 4 Pilares de Valor (Conductores, Vehículos, Puntualidad, 24/7) */}
      <ValuePillars />

      {/* 3. Sección "Para Cada Ocasión" con Cabina Interior & Lista de Eventos */}
      <OccasionsSection />

      {/* 4. Sección "Nuestra Flota" con las 4 Unidades Insignia */}
      <FleetSection />

      {/* 5. Sección "Reserva tu experiencia" con Formulario & Pareja en Pista Privada */}
      <BookingSection />

      {/* Botón Flotante Permanente de WhatsApp Concierge */}
      <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-40">
        <motion.a
          href="https://wa.me/5215500000000?text=Hola,%20deseo%20cotizar%20un%20servicio%20exclusivo%20con%20Renta%20tu%20limo"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={snappySpring}
          className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#DDB789] text-obsidian-deep shadow-gold-pill hover:bg-[#E8C8A3] transition-all duration-300 group cursor-pointer"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 fill-obsidian-deep" />
          </div>
          <span className="hidden sm:inline font-sans text-xs font-semibold tracking-wider uppercase">
            WhatsApp VIP
          </span>
        </motion.a>
      </aside>
    </Layout>
  );
};

export default App;
